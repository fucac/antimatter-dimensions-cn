const { app, BrowserWindow, Menu, shell, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow = null;

// ---------- IPC ----------
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
    version: version ? version.version : null,
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
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
