<script>
import ModalWrapper from "@/components/modals/ModalWrapper";

export default {
  name: "HotkeysModal",
  components: {
    ModalWrapper
  },
  data() {
    return {
      updateIndicies: [],
      visible: [],
      timeStudyUnlocked: false,
      glyphSacUnlocked: false,
      isElectron: false
    };
  },
  computed: {
    moreShiftKeyInfo() {
      const shiftKeyFunctions = [];
      if (this.timeStudyUnlocked) {
        shiftKeyFunctions.push("在购买时间研究时，购买至该节点之前的所有研究");
        shiftKeyFunctions.push("保存时间研究树");
      }
      if (this.glyphSacUnlocked) {
        shiftKeyFunctions.push("清除符文");
      }
      const shiftKeyInfo = makeEnumeration(shiftKeyFunctions);
      return (shiftKeyInfo === "")
        ? ""
        : `您可以按住 Shift ${shiftKeyInfo}。`;
    },
    hotkeyCount() {
      return shortcuts.length;
    },
    shortcutNames() {
      return shortcuts.map(x => x.name);
    },
    shortcutKeys() {
      return shortcuts.map(x => x.keys.map(key => this.format(key)));
    }
  },
  created() {
    for (let i = 0; i < this.hotkeyCount; i++) {
      const visible = shortcuts[i].visible;
      if (typeof visible === "function") {
        this.updateIndicies.push(i);
      } else {
        this.visible[i] = visible;
      }
    }
  },
  methods: {
    update() {
      for (const index of this.updateIndicies) {
        this.$set(this.visible, index, shortcuts[index].visible());
      }
      const progress = PlayerProgress.current;
      this.timeStudyUnlocked = progress.isEternityUnlocked;
      this.glyphSacUnlocked = RealityUpgrade(19).isBought;

      // ElectronRuntime is a global which only exists on Steam (throws a ReferenceError on web)
      try {
        this.isElectron = ElectronRuntime.isActive;
      } catch {
        this.isElectron = false;
      }
    },
    format(x) {
      switch (x) {
        case "mod":
          return "CTRL/⌘";
        default:
          return x.toUpperCase();
      }
    }
  },
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      快捷键列表
    </template>
    <span class="c-modal-hotkeys l-modal-hotkeys">
      <div class="l-modal-hotkeys__column">
        <div class="l-modal-hotkeys-row">
          <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">购买 1 个维度</span>
          <kbd>SHIFT</kbd><kbd>1</kbd>-<kbd>SHIFT</kbd><kbd>8</kbd>
        </div>
        <div class="l-modal-hotkeys-row">
          <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">购买 10 个维度</span>
          <kbd>1</kbd>-<kbd>8</kbd>
        </div>
        <div
          v-for="index in hotkeyCount"
          :key="index"
        >
          <span
            v-if="visible[index - 1]"
            class="l-modal-hotkeys-row"
          >
            <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">{{ shortcutNames[index - 1] }}</span>
            <kbd
              v-for="(key, i) in shortcutKeys[index - 1]"
              :key="i"
            >
              {{ key }}
            </kbd>
          </span>
        </div>
      </div>
      <div class="l-modal-hotkeys__column l-modal-hotkeys__column--right">
        <div class="l-modal-hotkeys-row">
          <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">修饰键</span>
          <kbd>SHIFT</kbd>
        </div>
        <span class="c-modal-hotkeys__shift-description">
          Shift 是一个修饰键，可在某些事物上显示额外信息，
          并调整某些按钮的功能。
          <br>
          {{ moreShiftKeyInfo }}
        </span>
        <br>
        <div class="l-modal-hotkeys-row">
          <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">自动购买器控制</span>
          <kbd>ALT</kbd>
        </div>
        <span class="c-modal-hotkeys__shift-description">
          Alt 是一个修饰键，与任何拥有对应自动购买器的按键一起按下时，
          将切换该自动购买器。
          <br>
          同时按下 Alt 和 Shift 时，您可以为反物质维度
          和 Tickspeed 自动购买器切换购买单个或购买最大。
        </span>
        <br>
        <div class="l-modal-hotkeys-row">
          <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">标签页切换</span>
          <div>
            <kbd>←</kbd><kbd>↓</kbd><kbd>↑</kbd><kbd>→</kbd>
          </div>
        </div>
        <span class="c-modal-hotkeys__shift-description">
          使用方向键可在游戏页面间循环切换。
          上、下方向键在标签页间循环切换，
          左、右方向键在该标签页的子标签页间循环切换。
        </span>
        <br>
        <div class="l-modal-hotkeys-row">
          <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">小键盘支持</span>
        </div>
        <span class="c-modal-hotkeys__shift-description">
          由于技术原因，按下小键盘按键会尽可能购买 10 个维度，但按住
          <kbd>SHIFT</kbd> 同时按小键盘按键不会购买单个维度。根据您的设备不同，这可能导致
          页面滚动或切换游戏标签页。<kbd>ALT</kbd> 仍将正常工作。
        </span>
        <template v-if="isElectron">
          <br>
          <div class="l-modal-hotkeys-row">
            <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">窗口缩放</span>
            <kbd>-</kbd><kbd>0</kbd><kbd>+</kbd>
          </div>
          <span class="c-modal-hotkeys__shift-description">
            要调整缩放级别，请按住 <kbd>ctrl</kbd> 并按 <kbd>-</kbd> 或 <kbd>+</kbd> 来缩小或
            放大。<kbd>ctrl</kbd><kbd>0</kbd> 可将缩放重置为 100%。
          </span>
          <br>
          <div class="l-modal-hotkeys-row">
            <span class="c-modal-hotkeys-row__name l-modal-hotkeys-row__name">全屏</span>
            <kbd>F10</kbd>
          </div>
          <span class="c-modal-hotkeys__shift-description">
            要进入或退出全屏，请按 <kbd>F10</kbd>。
          </span>
        </template>
      </div>
    </span>
  </ModalWrapper>
</template>

<style scoped>
.l-modal-hotkeys__column {
  display: flex;
  flex-direction: column;
  width: 28rem;
}

.l-modal-hotkeys__column--right {
  margin-left: 1rem;
}

.c-modal-hotkeys {
  font-size: 1.25rem;
}

.l-modal-hotkeys {
  display: flex;
  flex-direction: row;
}

.l-modal-hotkeys-row {
  display: flex;
  flex-direction: row;
  line-height: 1.6rem;
  padding-bottom: 0.3rem;
}

.c-modal-hotkeys-row__name {
  text-align: left;
}

.l-modal-hotkeys-row__name {
  flex: 1 1 auto;
}

.c-modal-hotkeys__shift-description {
  text-align: left;
  font-size: 1rem;
}
</style>
