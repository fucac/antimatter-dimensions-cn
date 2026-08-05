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
  onerror(event) {
    if (this.handled) return;
    this.handled = true;
    if (!this.cleanStart) {
      document.getElementById("loading").style.display = "none";
      requestAnimationFrame(() => this.crash(event));
      return;
    }
    if (!player.DEV) this.stopGame();
    this.crash(event);
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
  crash(message) {
    if (window.GameUI !== undefined && GameUI.initialized) {
      Modal.message.show(`哎呀。看起来您刚才的操作导致了游戏崩溃。没关系，请将这条消息连同触发崩溃的操作一起发送到 Discord 上的 Supersonic Seven 处：
      "${message}"。<br>感谢游玩 AD: Endgame！我们会尽快修复您的问题！`, {}, 3);
    }
    // eslint-disable-next-line no-debugger
    debugger;
  }
};

window.onerror = (event, source) => {
  if (!source.endsWith(".js")) return;
  GlobalErrorHandler.onerror(event);
};
