<script>
import OpenModalHotkeysButton from "@/components/OpenModalHotkeysButton";
import OptionsButton from "@/components/OptionsButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import SliderComponent from "@/components/SliderComponent";

export default {
  name: "OptionsGameplayTab",
  components: {
    OpenModalHotkeysButton,
    OptionsButton,
    PrimaryToggleButton,
    SliderComponent
  },
  data() {
    return {
      offlineProgress: false,
      hibernationCatchup: false,
      hotkeys: false,
      offlineSlider: 0,
      offlineTicks: 0,
      automaticTabSwitching: false,
      infinityUnlocked: false,
      automatorUnlocked: false,
      automatorLogSize: 0,
      gameVersion: "",
      latestVersion: "",
      isLatest: false,
    };
  },
  // This puts the slider in the right spot on initialization, 同时加载版本号
  created() {
    const ticks = player.options.offlineTicks;
    const exponent = Math.floor(Math.log10(ticks));
    const mantissa = (ticks / Math.pow(10, exponent)) - 1;
    this.offlineSlider = 9 * exponent + mantissa;
    this.loadVersionInfo();
  },
  computed: {
    sliderPropsOfflineTicks() {
      return {
        min: 22,
        max: 54,
        interval: 1,
        width: "100%",
        tooltip: false
      };
    },
    sliderPropsAutomatorLogSize() {
      return {
        min: 50,
        max: 500,
        interval: 50,
        width: "100%",
        tooltip: false
      };
    }
  },
  watch: {
    offlineProgress(newValue) {
      player.options.offlineProgress = newValue;
    },
    hibernationCatchup(newValue) {
      player.options.hibernationCatchup = newValue;
    },
    hotkeys(newValue) {
      player.options.hotkeys = newValue;
    },
    offlineSlider(newValue) {
      player.options.offlineTicks = this.parseOfflineSlider(newValue);
    },
    automaticTabSwitching(newValue) {
      player.options.automaticTabSwitching = newValue;
    },
    automatorLogSize(newValue) {
      player.options.automatorEvents.maxEntries = parseInt(newValue, 10);
    },
  },
  methods: {
    update() {
      const options = player.options;
      this.offlineProgress = options.offlineProgress;
      this.hibernationCatchup = options.hibernationCatchup;
      this.hotkeys = options.hotkeys;
      this.offlineTicks = player.options.offlineTicks;
      this.automaticTabSwitching = options.automaticTabSwitching;
      this.infinityUnlocked = PlayerProgress.current.isInfinityUnlocked;
      this.automatorUnlocked = Player.automatorUnlocked;
      this.automatorLogSize = options.automatorEvents.maxEntries;
    },
    // Given the endpoints of 22-54, this produces 500, 600, ... , 900, 1000, 2000, ... , 1e6 ticks
    // It's essentially 10^(x/10) but with the mantissa spaced linearly instead of logarithmically
    parseOfflineSlider(str) {
      const value = parseInt(str, 10);
      return (1 + value % 9) * Math.pow(10, Math.floor(value / 9));
    },
    adjustSliderValueOfflineTicks(value) {
      this.offlineSlider = value;
      player.options.offlineTicks = this.parseOfflineSlider(value);
    },
    adjustSliderValueAutomatorLogSize(value) {
      this.automatorLogSize = value;
      player.options.automatorEvents.maxEntries = this.automatorLogSize;
    },
    // 版本号：EXE 通过 preload 暴露的 IPC 读取本地 version.txt，网页版直接 fetch
    // 只显示版本号字符串，加载失败显示"未知"，带超时保护避免卡"加载中"
    async loadVersionInfo() {
      try {
        let info;
        if (window.gameVersionInfo) {
          info = await window.gameVersionInfo();
        } else {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 8000);
          try {
            info = await fetch("version.txt", { signal: controller.signal }).then(r => r.json());
          } finally {
            clearTimeout(timer);
          }
        }
        this.gameVersion = info && info.version ? String(info.version) : "";
      } catch {
        this.gameVersion = "";
      }
      if (this.gameVersion) this.checkLatestVersion();
    },
    // 从 GitHub 拉取最新版本号，只显示在版本号下方，不主动弹出提示
    async checkLatestVersion() {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 8000);
        let latest;
        try {
          const res = await fetch(
            "https://raw.githubusercontent.com/fucac/antimatter-dimensions-cn/gh-pages/version.txt",
            { signal: controller.signal });
          latest = await res.json();
        } finally {
          clearTimeout(timer);
        }
        const latestVersion = latest && latest.version ? String(latest.version) : "";
        if (!latestVersion) return;
        const cmp = this.compareVersions(latestVersion, this.gameVersion);
        if (cmp > 0) {
          this.latestVersion = latestVersion;
        } else if (cmp === 0) {
          this.isLatest = true;
        }
        // cmp < 0 表示本地比线上还新（本地测试版），不做任何提示
      } catch {
        // 网络不可用时静默忽略，不打扰玩家
      }
    },
    // 日期格式版本号比较（如 2026-08-12 与 2026-08-12-2）：返回 1 表示 a 更新，-1 表示 b 更新，0 相同
    compareVersions(a, b) {
      const pa = String(a).split("-").map(Number);
      const pb = String(b).split("-").map(Number);
      for (let i = 0; i < 4; i++) {
        const x = pa[i] || 0;
        const y = pb[i] || 0;
        if (x > y) return 1;
        if (x < y) return -1;
      }
      return 0;
    }
  }
};
</script>

<template>
  <div class="l-options-tab">
    <div class="l-options-grid">
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option"
          onclick="Modal.confirmationOptions.show()"
        >
          打开确认选项
        </OptionsButton>
        <PrimaryToggleButton
          v-model="hotkeys"
          class="o-primary-btn--option l-options-grid__button"
          label="快捷键："
          on="开"
          off="关"
        />
        <PrimaryToggleButton
          v-model="automaticTabSwitching"
          class="o-primary-btn--option l-options-grid__button l-toggle-button"
          label="在某些事件时切换标签页（如进入挑战）："
        />
      </div>
      <div class="l-options-grid__row">
        <PrimaryToggleButton
          v-model="offlineProgress"
          class="o-primary-btn--option l-options-grid__button"
          label="离线进度："
        />
        <div class="o-primary-btn o-primary-btn--option o-primary-btn--slider l-options-grid__button">
          <b>离线刻度：{{ formatInt(offlineTicks) }}</b>
          <SliderComponent
            class="o-primary-btn--slider__slider"
            v-bind="sliderPropsOfflineTicks"
            :value="offlineSlider"
            @input="adjustSliderValueOfflineTicks($event)"
          />
        </div>
        <PrimaryToggleButton
          v-model="hibernationCatchup"
          class="o-primary-btn--option l-options-grid__button"
          label="将挂起时间作为离线运行："
        />
      </div>
      <div class="l-options-grid__row">
        <div
          v-if="automatorUnlocked"
          class="o-primary-btn o-primary-btn--option o-primary-btn--slider l-options-grid__button"
        >
          <b>自动化日志上限：{{ formatInt(parseInt(automatorLogSize)) }}</b>
          <SliderComponent
            class="o-primary-btn--slider__slider"
            v-bind="sliderPropsAutomatorLogSize"
            :value="automatorLogSize"
            @input="adjustSliderValueAutomatorLogSize($event)"
          />
        </div>
      </div>
      <OpenModalHotkeysButton />
    </div>
    <div class="c-version-info">
      <b>游戏版本：</b>
      <span>{{ gameVersion || "未知" }}</span>
      <div v-if="latestVersion" class="c-version-info__latest">
        发现新版本：{{ latestVersion }}
      </div>
      <div v-else-if="isLatest" class="c-version-info__uptodate">
        已是最新版本
      </div>
    </div>
  </div>
</template>

<style scoped>
.l-toggle-button {
  font-size: 12px;
}
.c-version-info {
  margin-top: 24px;
  padding: 10px 14px;
  border: 1px solid #3a4152;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.8;
  color: #d7dce6;
  background: rgba(255, 255, 255, 0.02);
  word-break: break-word;
}
.c-version-info__latest {
  color: #ffd166;
}
.c-version-info__uptodate {
  color: #8fd18f;
}
</style>
