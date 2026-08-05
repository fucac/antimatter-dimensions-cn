const { contextBridge, ipcRenderer } = require("electron");

// ---------- 更新提示浮层 ----------
let overlay = null;

function whenDomReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
}

function buildOverlay() {
  if (overlay) return overlay;
  const style = document.createElement("style");
  style.textContent = `
    #desktop-updater-root{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;
      justify-content:center;background:rgba(0,0,0,.62);font-family:"Microsoft YaHei","Segoe UI",sans-serif}
    #desktop-updater-root .du-panel{min-width:340px;max-width:540px;background:#10131a;border:1px solid #3a4152;
      border-radius:8px;padding:20px 24px;color:#d7dce6;box-shadow:0 10px 36px rgba(0,0,0,.7)}
    #desktop-updater-root .du-title{font-size:18px;font-weight:700;margin-bottom:10px;color:#fff}
    #desktop-updater-root .du-text{font-size:14px;line-height:1.7;word-break:break-word}
    #desktop-updater-root .du-progress{margin-top:14px;display:none}
    #desktop-updater-root .du-bar{height:6px;border-radius:3px;background:#2a2f3a;overflow:hidden}
    #desktop-updater-root .du-bar>div{height:100%;width:0;background:#4aa3ff;transition:width .3s}
    #desktop-updater-root .du-progress-text{margin-top:6px;font-size:12px;color:#8b93a5}
    #desktop-updater-root .du-actions{margin-top:18px;display:flex;justify-content:flex-end;gap:10px}
    #desktop-updater-root button{cursor:pointer;border:1px solid #4aa3ff;background:transparent;color:#4aa3ff;
      border-radius:5px;padding:7px 16px;font-size:14px;font-family:inherit}
    #desktop-updater-root button.primary{background:#4aa3ff;color:#fff}
    #desktop-updater-root button:hover{filter:brightness(1.15)}`;
  document.head.appendChild(style);

  overlay = document.createElement("div");
  overlay.id = "desktop-updater-root";
  overlay.innerHTML = `
    <div class="du-panel">
      <div class="du-title"></div>
      <div class="du-text"></div>
      <div class="du-progress">
        <div class="du-bar"><div></div></div>
        <div class="du-progress-text"></div>
      </div>
      <div class="du-actions"></div>
    </div>`;
  document.body.appendChild(overlay);
  return overlay;
}

function showPanel({ title, text, actions = [], progress = null }) {
  whenDomReady(() => {
    const root = buildOverlay();
    root.querySelector(".du-title").textContent = title;
    root.querySelector(".du-text").textContent = text;

    const progressEl = root.querySelector(".du-progress");
    if (progress) {
      progressEl.style.display = "block";
      root.querySelector(".du-bar > div").style.width = `${Math.min(100, Math.max(0, progress.percent))}%`;
      root.querySelector(".du-progress-text").textContent = progress.text || "";
    } else {
      progressEl.style.display = "none";
    }

    const actionsEl = root.querySelector(".du-actions");
    actionsEl.innerHTML = "";
    for (const action of actions) {
      const btn = document.createElement("button");
      btn.className = action.primary ? "primary" : "";
      btn.textContent = action.text;
      btn.addEventListener("click", action.onClick);
      actionsEl.appendChild(btn);
    }

    root.style.display = "flex";
  });
}

function hidePanel() {
  if (overlay) overlay.style.display = "none";
}

// ---------- 主进程事件 ----------
ipcRenderer.on("desktop-update-available", (_event, info) => {
  showPanel({
    title: `发现新版本 v${info.version}`,
    text: info.message || "已发现更新，是否立即下载？",
    actions: [
      { text: "稍后再说", onClick: hidePanel },
      {
        text: "立即更新",
        primary: true,
        onClick: () => {
          ipcRenderer.send("desktop-apply-update");
          showPanel({
            title: "正在下载更新……",
            text: "请保持联网状态，下载完成后需重启游戏才能应用更新。",
            progress: { percent: 0, text: "准备中……" }
          });
        }
      }
    ]
  });
});

ipcRenderer.on("desktop-update-progress", (_event, info) => {
  const percent = info.total ? Math.round((info.done / info.total) * 100) : 0;
  showPanel({
    title: "正在下载更新……",
    text: "下载完成后需重启游戏才能应用更新。",
    progress: { percent, text: info.text || `${info.done}/${info.total}` }
  });
});

ipcRenderer.on("desktop-update-done", (_event, info) => {
  showPanel({
    title: "更新完成！",
    text: `已更新至 v${info.version}（新增 ${info.downloaded} 个文件）。请重启游戏以应用更新。`,
    actions: [
      { text: "稍后重启", onClick: hidePanel },
      { text: "立即重启", primary: true, onClick: () => ipcRenderer.send("desktop-restart-app") }
    ]
  });
});

ipcRenderer.on("desktop-update-error", (_event, info) => {
  showPanel({
    title: "更新失败",
    text: info && info.message ? `更新下载失败：${info.message}` : "更新下载失败，请稍后重试。",
    actions: [{ text: "关闭", onClick: hidePanel }]
  });
});

// ---------- 暴露给页面(备用) ----------
contextBridge.exposeInMainWorld("desktopUpdater", {
  applyUpdate: () => ipcRenderer.send("desktop-apply-update"),
  restartApp: () => ipcRenderer.send("desktop-restart-app")
});

// ---------- 版本信息(选项 → 版本查看) ----------
contextBridge.exposeInMainWorld("gameVersionInfo", () => ipcRenderer.invoke("desktop-get-version-info"));
