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
      gameVersion: null,
      versionLoadFailed: false,
    };
  },
  created() {
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
  // This puts the slider in the right spot on initialization
  created() {
    const ticks = player.options.offlineTicks;
    const exponent = Math.floor(Math.log10(ticks));
    const mantissa = (ticks / Math.pow(10, exponent)) - 1;
    this.offlineSlider = 9 * exponent + mantissa;
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
    // 版本信息：EXE 环境通过 preload 暴露的 IPC 获取，网页版通过 fetch 获取
    // 加统一超时保护，避免任何路径永久停留在"加载中…"
    loadVersionInfo() {
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("版本信息加载超时")), 8000));
      let promise;
      if (window.gameVersionInfo) {
        promise = window.gameVersionInfo();
      } else {
        // 网页版：版本号与提交信息分开加载，commit.json 加载慢/失败时不阻塞版本号显示
        promise = Promise.all([
          fetch("version.txt").then(r => r.json()),
          Promise.race([
            fetch("commit.json").then(r => r.json()).catch(() => null),
            new Promise(resolve => setTimeout(() => resolve(null), 5000))
          ])
        ]).then(([version, commit]) => ({ ...version, commit }));
      }
      Promise.race([promise, timeout]).then(info => {
        this.gameVersion = info;
      }).catch(() => {
        this.versionLoadFailed = true;
      });
    },
    formatCommit(commit) {
      if (typeof commit === "string") return commit.slice(0, 7);
      if (commit && typeof commit === "object") {
        const sha = commit.sha ? commit.sha.slice(0, 7) : "未知";
        const msg = commit.message ? `（${commit.message}）` : "";
        return `${sha}${msg}`;
      }
      return "未知";
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
      <span v-if="gameVersion">{{ gameVersion.version }}</span>
      <span v-else>{{ versionLoadFailed ? "未知" : "加载中…" }}</span>
      <template v-if="gameVersion">
        <template v-if="gameVersion.message">
          <br>
          <b>更新内容：</b>{{ gameVersion.message }}
        </template>
        <br>
        <b>Commit：</b>
        <span v-if="gameVersion.commit">{{ formatCommit(gameVersion.commit) }}</span>
        <span v-else>未知</span>
      </template>
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
</style>
