const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");
const https = require("https");
const fs = require("fs");
const crypto = require("crypto");

// 联网更新：以 io 版(GitHub Pages)为更新源
const UPDATE_BASE = "https://fucac.github.io/antimatter-dimensions-cn";
const TREE_API =
  "https://api.github.com/repos/fucac/antimatter-dimensions-cn/git/trees/main?recursive=1";
const UPDATE_CHECK_INTERVAL = 10 * 60 * 1000;
const RE_NOTIFY_AFTER = 60 * 60 * 1000;

// 属于网页发布内容(dist)的顶层目录前缀 / 根文件
const DIST_PREFIXES = ["js/", "css/", "images/", "img/", "audio/", "fungame/", "stylesheets/"];
const DIST_ROOT_FILES = new Set([
  "index.html",
  "about.html",
  "font_test.html",
  "version.txt",
  "commit.json",
  "icon.png",
  "icon.icns",
  "icon-old.png"
]);

let mainWindow = null;
let applyingUpdate = false;
let notifiedVersion = null;
let lastPromptTime = 0;

// ---------- HTTP 工具 ----------
function httpGet(url, headers = {}, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { "User-Agent": "antimatter-dimensions-endgame-updater", ...headers }
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        if (redirects >= 5) {
          reject(new Error("Too many redirects"));
        } else {
          const next = new URL(res.headers.location, url).toString();
          httpGet(next, headers, redirects + 1).then(resolve, reject);
        }
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error(`HTTP ${res.statusCode} ${url}`));
        return;
      }
      const chunks = [];
      res.on("data", chunk => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    });
    req.setTimeout(20000, () => req.destroy(new Error("请求超时")));
    req.on("error", reject);
  });
}

// ---------- 本地版本 ----------
function readLocalVersion() {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, "dist", "version.txt"), "utf8"));
    return Number(data.version) || 0;
  } catch {
    return 0;
  }
}

function sha1File(filePath) {
  try {
    return crypto.createHash("sha1").update(fs.readFileSync(filePath)).digest("hex");
  } catch {
    return null;
  }
}

// ---------- 更新检查 ----------
async function checkForUpdates() {
  if (!mainWindow || mainWindow.isDestroyed() || applyingUpdate) return;
  try {
    const buf = await httpGet(`${UPDATE_BASE}/version.txt`);
    const remote = JSON.parse(buf.toString("utf8"));
    const remoteVersion = Number(remote.version) || 0;
    const now = Date.now();
    if (
      remoteVersion > readLocalVersion() &&
      (notifiedVersion !== remoteVersion || now - lastPromptTime > RE_NOTIFY_AFTER)
    ) {
      notifiedVersion = remoteVersion;
      lastPromptTime = now;
      mainWindow.webContents.send("desktop-update-available", {
        version: remoteVersion,
        message: remote.message || "发现新版本，是否立即更新？"
      });
    }
  } catch (error) {
    // 网络不可用时静默忽略
  }
}

// ---------- 应用更新 ----------
async function applyUpdate() {
  if (!mainWindow || mainWindow.isDestroyed() || applyingUpdate) return;
  applyingUpdate = true;
  const send = (channel, payload) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send(channel, payload);
    }
  };
  try {
    send("desktop-update-progress", { done: 0, total: 0, text: "正在获取更新清单……" });

    const treeBuf = await httpGet(TREE_API);
    const tree = JSON.parse(treeBuf.toString("utf8"));
    if (tree.truncated) console.warn("[Updater] 文件清单被截断，可能无法完整更新");
    const entries = (tree.tree || []).filter(entry =>
      entry.type === "blob" &&
      (DIST_ROOT_FILES.has(entry.path) || DIST_PREFIXES.some(p => entry.path.startsWith(p)))
    );

    const distDir = path.join(__dirname, "dist");
    let downloaded = 0;
    let skipped = 0;
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const localPath = path.join(distDir, ...entry.path.split("/"));
      if (fileBlobShas(localPath).includes(entry.sha)) {
        skipped++;
      } else {
        const buf = await httpGet(`${UPDATE_BASE}/${entry.path.split("/").map(encodeURIComponent).join("/")}`);
        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        fs.writeFileSync(localPath, buf);
        downloaded++;
      }
      send("desktop-update-progress", {
        done: i + 1,
        total: entries.length,
        text: `正在更新 ${i + 1}/${entries.length}`
      });
    }

    // 清理本地旧版本哈希构建文件(js/css)
    const keepBases = new Set();
    for (const entry of entries) {
      if (entry.path.startsWith("js/") || entry.path.startsWith("css/")) {
        keepBases.add(path.basename(entry.path).replace(/\.map$/, ""));
      }
    }
    for (const sub of ["js", "css"]) {
      const dir = path.join(distDir, sub);
      if (!fs.existsSync(dir)) continue;
      for (const name of fs.readdirSync(dir)) {
        if (!keepBases.has(name.replace(/\.map$/, ""))) {
          try {
            fs.unlinkSync(path.join(dir, name));
          } catch (e) {
            // 忽略清理失败
          }
        }
      }
    }

    send("desktop-update-done", { version: readLocalVersion(), downloaded, skipped });
  } catch (error) {
    console.error("[Updater]", error);
    send("desktop-update-error", { message: error && error.message ? error.message : String(error) });
  } finally {
    applyingUpdate = false;
  }
}

// ---------- IPC ----------
ipcMain.on("desktop-apply-update", () => {
  applyUpdate();
});
ipcMain.on("desktop-restart-app", () => {
  app.relaunch();
  app.exit(0);
});
// 供渲染进程"选项 → 版本查看"读取本地版本信息
ipcMain.handle("desktop-get-version-info", () => {
  let version = null;
  let commit = null;
  try {
    version = JSON.parse(fs.readFileSync(path.join(__dirname, "dist", "version.txt"), "utf8"));
  } catch {
    // 版本文件缺失时忽略
  }
  try {
    commit = JSON.parse(fs.readFileSync(path.join(__dirname, "dist", "commit.json"), "utf8"));
  } catch {
    // commit 文件缺失时忽略
  }
  return {
    version: version ? Number(version.version) || null : null,
    message: version ? version.message : null,
    commit
  };
});

// ---------- 窗口 ----------
function createWindow() {
  Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: "反物质维度：终局",
    icon: path.join(__dirname, "dist", "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "dist", "index.html"));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();
  // 联网更新：启动后 15 秒检查一次，之后每 10 分钟检查
  setTimeout(checkForUpdates, 15000);
  setInterval(checkForUpdates, UPDATE_CHECK_INTERVAL);
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
