const { contextBridge, ipcRenderer } = require("electron");

// ---------- 版本信息(选项 → 版本查看) ----------
contextBridge.exposeInMainWorld("gameVersionInfo", () => ipcRenderer.invoke("desktop-get-version-info"));
