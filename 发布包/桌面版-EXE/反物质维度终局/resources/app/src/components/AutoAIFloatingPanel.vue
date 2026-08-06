<script>
// 自动游玩（AI 机器人）悬浮窗
// 固定在屏幕角落，任何标签页都能看到机器人的决策状态，并可随时切换开关。
// UI 状态（位置/折叠）保存在 localStorage，不影响存档。
const STORAGE_KEY = "ad-autoplay-float-ui";

export default {
  name: "AutoAIFloatingPanel",
  data() {
    return {
      minimized: true,
      enabled: false,
      phase: "",
      strategy: "",
      progress: "",
      log: [],
      pos: { x: 12, y: 90 },
      dragging: false,
      moved: false,
      dragOffset: { x: 0, y: 0 },
      startPos: { x: 0, y: 0 },
      // 内容签名：避免每帧赋值导致无意义渲染
      decisionSig: "",
      logSig: "",
    };
  },
  computed: {
    statusText() {
      return this.enabled ? "运行中" : "已停用";
    },
    statusClass() {
      return this.enabled ? "c-autoai-dot--on" : "c-autoai-dot--off";
    },
    panelStyle() {
      return {
        left: `${this.pos.x}px`,
        top: `${this.pos.y}px`,
      };
    },
  },
  created() {
    this.loadUi();
  },
  methods: {
    // 游戏每帧通过全局 UPDATE 事件调用（见 ui.js 的 Vue.mixin）
    update() {
      const autoplay = player.options.autoplay;
      if (!autoplay) return;
      const enabled = autoplay.enabled === true;
      if (enabled !== this.enabled) this.enabled = enabled;
      const decision = autoplay.decision || {};
      const sig = `${decision.phase || ""}|${decision.strategy || ""}|${decision.progress || ""}|${decision.updatedAt || 0}`;
      if (sig !== this.decisionSig) {
        this.decisionSig = sig;
        this.phase = decision.phase || "";
        this.strategy = decision.strategy || "";
        this.progress = decision.progress || "";
      }
      const entries = Array.isArray(autoplay.log) ? autoplay.log : [];
      if (entries.length > 0) {
        const logSig = `${entries[0].t}|${entries[0].action}|${entries[0].detail || ""}`;
        if (logSig !== this.logSig) {
          this.logSig = logSig;
          this.log = entries.slice(0, 3);
        }
      } else if (this.log.length > 0) {
        this.log = [];
      }
    },
    toggle() {
      AutoAI.toggle();
    },
    toggleMinimize() {
      this.minimized = !this.minimized;
      this.saveUi();
    },
    // ===== 拖动（仅桌面端） =====
    startDrag(e) {
      if (window.innerWidth <= 960) return;
      if (e.button !== 0 && e.type === "mousedown") return;
      this.dragging = true;
      this.moved = false;
      this.startPos = { x: e.clientX, y: e.clientY };
      this.dragOffset = {
        x: e.clientX - this.pos.x,
        y: e.clientY - this.pos.y,
      };
      document.addEventListener("mousemove", this.onDragMove);
      document.addEventListener("mouseup", this.onDragEnd);
    },
    onDragMove(e) {
      if (!this.dragging) return;
      const dx = e.clientX - this.startPos.x;
      const dy = e.clientY - this.startPos.y;
      if (Math.abs(dx) + Math.abs(dy) > 5) this.moved = true;
      this.pos.x = Math.min(Math.max(e.clientX - this.dragOffset.x, 4), window.innerWidth - 56);
      this.pos.y = Math.min(Math.max(e.clientY - this.dragOffset.y, 4), window.innerHeight - 44);
    },
    onDragEnd() {
      this.dragging = false;
      document.removeEventListener("mousemove", this.onDragMove);
      document.removeEventListener("mouseup", this.onDragEnd);
      if (this.moved) this.saveUi();
    },
    saveUi() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          x: this.pos.x,
          y: this.pos.y,
          minimized: this.minimized,
        }));
      } catch (e) {
        // localStorage 不可用时忽略
      }
    },
    loadUi() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const saved = JSON.parse(raw);
        if (typeof saved.x === "number") this.pos.x = saved.x;
        if (typeof saved.y === "number") this.pos.y = saved.y;
        if (typeof saved.minimized === "boolean") this.minimized = saved.minimized;
      } catch (e) {
        // 损坏的本地设置直接忽略
      }
      // 移动端默认折叠，避免遮挡游戏内容
      if (window.innerWidth <= 960) this.minimized = true;
    },
    formatTime(t) {
      if (!t) return "";
      const date = new Date(t);
      const pad = n => String(n).padStart(2, "0");
      return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
    },
  },
};
</script>

<template>
  <div class="c-autoai c-autoai-root" :style="panelStyle">
    <!-- 折叠态：小胶囊 -->
    <div
      v-if="minimized"
      class="c-autoai-pill"
      @click="toggleMinimize"
    >
      <span class="c-autoai-dot" :class="statusClass"></span>
      <span class="c-autoai-pill__text">自动游玩 · {{ statusText }}</span>
    </div>

    <!-- 展开态：决策面板 -->
    <div
      v-else
      class="c-autoai-panel"
    >
      <div
        class="c-autoai-header"
        @mousedown="startDrag"
        @touchstart.prevent
      >
        <span class="c-autoai-dot" :class="statusClass"></span>
        <b class="c-autoai-title">自动游玩</b>
        <span class="c-autoai-status">{{ statusText }}</span>
        <button
          class="c-autoai-header-btn"
          title="折叠悬浮窗"
          @mousedown.stop
          @click="toggleMinimize"
        >
          —
        </button>
      </div>
      <div class="c-autoai-body">
        <div class="c-autoai-row">
          <span class="c-autoai-label">阶段：</span>
          <span>{{ phase || "—" }}</span>
        </div>
        <div class="c-autoai-row">
          <span class="c-autoai-label">策略：</span>
          <span>{{ strategy || "—" }}</span>
        </div>
        <div class="c-autoai-row">
          <span class="c-autoai-label">进度：</span>
          <span>{{ progress || "—" }}</span>
        </div>
        <ul v-if="log.length > 0" class="c-autoai-log">
          <li
            v-for="entry in log"
            :key="entry.t + entry.action"
            class="c-autoai-log-entry"
          >
            <span class="c-autoai-log-time">{{ formatTime(entry.t) }}</span>
            <span class="c-autoai-log-phase">{{ entry.phase }}</span>
            <b>{{ entry.action }}</b>
          </li>
        </ul>
        <button
          class="c-autoai-toggle"
          :class="enabled ? 'c-autoai-toggle--on' : ''"
          @click="toggle"
        >
          {{ enabled ? "停用自动游玩" : "开启自动游玩" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-autoai-root {
  position: fixed;
  z-index: 99999;
  max-width: calc(100vw - 24px);
}
.c-autoai-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #5a6b8c;
  border-radius: 999px;
  background: rgba(16, 20, 30, 0.92);
  color: #d7dce6;
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  user-select: none;
}
.c-autoai-panel {
  width: 290px;
  border: 1px solid #5a6b8c;
  border-radius: 8px;
  background: rgba(16, 20, 30, 0.94);
  color: #d7dce6;
  font-size: 12px;
  line-height: 1.6;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.55);
  user-select: none;
}
.c-autoai-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: grab;
}
.c-autoai-header:active {
  cursor: grabbing;
}
.c-autoai-title {
  color: #9fb7e8;
  font-size: 13px;
}
.c-autoai-status {
  flex: 1;
  font-size: 11px;
  color: #8a93a6;
  white-space: nowrap;
}
.c-autoai-dot {
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.c-autoai-dot--on {
  background: #3ecf6b;
  box-shadow: 0 0 6px rgba(62, 207, 107, 0.8);
}
.c-autoai-dot--off {
  background: #7a8296;
}
.c-autoai-header-btn {
  flex: none;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  color: #d7dce6;
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
}
.c-autoai-header-btn:hover {
  background: rgba(255, 255, 255, 0.16);
}
.c-autoai-body {
  padding: 8px 10px;
}
.c-autoai-row {
  margin-bottom: 3px;
  word-break: break-word;
}
.c-autoai-label {
  color: #9fb7e8;
}
.c-autoai-log {
  margin: 6px 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.c-autoai-log-entry {
  display: flex;
  gap: 6px;
  padding: 2px 0;
  font-size: 11px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
.c-autoai-log-time {
  flex: none;
  color: #8a93a6;
  font-variant-numeric: tabular-nums;
}
.c-autoai-log-phase {
  flex: none;
  color: #b98ee8;
}
.c-autoai-toggle {
  width: 100%;
  padding: 6px 0;
  border: 1px solid #5a6b8c;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.06);
  color: #d7dce6;
  font-size: 12px;
  cursor: pointer;
}
.c-autoai-toggle--on {
  border-color: #3ecf6b;
  background: rgba(62, 207, 107, 0.14);
}
.c-autoai-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
}
@media (max-width: 960px) {
  .c-autoai-panel {
    width: 240px;
    font-size: 11px;
  }
  .c-autoai-pill {
    padding: 8px 14px;
    font-size: 13px;
  }
  .c-autoai-toggle {
    min-height: 38px;
    font-size: 13px;
  }
}
</style>
