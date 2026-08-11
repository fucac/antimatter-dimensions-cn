import { DEV } from "@/env";

window.NotImplementedError = class NotImplementedError extends Error {
  constructor() {
    super("The method is not implemented.");
    this.name = "NotImplementedError";
  }
};

window.GlobalErrorHandler = {
  handled: false,
  cleanStart: false,
  onerror(event, error) {
    if (this.handled) return;
    this.handled = true;
    if (!this.cleanStart) {
      document.getElementById("loading").style.display = "none";
      requestAnimationFrame(() => this.crash(event, error));
      return;
    }
    if (!player.DEV) this.stopGame();
    this.crash(event, error);
  },
  stopGame() {
    GameKeyboard.disable();
    GameIntervals.stop();
    function clearHandles(set, clear) {
      // eslint-disable-next-line no-empty-function
      let id = set(() => {}, 9999);
      while (id--) {
        clear(id);
      }
    }
    clearHandles(setInterval, clearInterval);
    clearHandles(setTimeout, clearTimeout);
    clearHandles(requestAnimationFrame, cancelAnimationFrame);
  },
  crash(message, error) {
    // 保存崩溃信息到 localStorage，重启后弹窗展示，便于诊断
    try {
      const stack = error && error.stack ? String(error.stack) : "";
      localStorage.setItem("endgameCrashLog", JSON.stringify({
        message: String(message),
        stack,
        time: Date.now()
      }));
    } catch (e) { /* 忽略存储失败 */ }
    if (window.GameUI !== undefined && GameUI.initialized) {
      Modal.message.show(`哎呀。看起来您刚才的操作导致了游戏崩溃。没关系，请将这条消息连同触发崩溃的操作一起发送到 Discord 上的 Supersonic Seven 处：
      "${message}"。<br>感谢游玩 AD: Endgame！我们会尽快修复您的问题！`, {}, 3);
    }
    // eslint-disable-next-line no-debugger
    debugger;
  }
};

window.onerror = (event, source, lineno, colno, error) => {
  if (!source.endsWith(".js")) return;
  GlobalErrorHandler.onerror(event, error);
};

// 捕获 Promise rejection（不触发 window.onerror，会导致静默失败）
window.addEventListener("unhandledrejection", e => {
  const reason = e && e.reason;
  const msg = reason && reason.message ? reason.message : String(reason);
  GlobalErrorHandler.onerror(msg, reason instanceof Error ? reason : undefined);
});

// 捕获 Vue 渲染 / 生命周期错误（Vue 内部捕获，默认不会冒泡到 window.onerror）
function bindVueErrorHandler() {
  if (window.Vue && window.Vue.config) {
    window.Vue.config.errorHandler = (err, vm, info) => {
      const msg = err && err.message ? err.message : String(err);
      GlobalErrorHandler.onerror(`${msg}${info ? ` (${info})` : ""}`, err);
    };
  } else {
    setTimeout(bindVueErrorHandler, 0);
  }
}
bindVueErrorHandler();

// 启动时展示上次崩溃信息（用于诊断偶发白屏）
window.addEventListener("DOMContentLoaded", () => {
  try {
    const raw = localStorage.getItem("endgameCrashLog");
    if (!raw) return;
    const data = JSON.parse(raw);
    // 只提示 10 分钟内的崩溃日志，避免展示陈旧信息
    if (Date.now() - (data.time || 0) > 600000) {
      localStorage.removeItem("endgameCrashLog");
      return;
    }
    setTimeout(() => {
      try {
        window.alert(`【崩溃诊断】上次游戏发生了错误：\n\n${data.message}\n\n堆栈：\n${data.stack || "无"}\n\n请截图或复制此信息发给开发者。`);
      } finally {
        localStorage.removeItem("endgameCrashLog");
      }
    }, 1500);
  } catch (e) { /* 忽略 */ }
});
