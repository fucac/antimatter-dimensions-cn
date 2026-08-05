<script>
export default {
  name: "NewGame",
  data() {
    return {
      opacity: 0,
      visible: false,
      hasMoreCosmetics: false,
      selectedSetName: "",
    };
  },
  computed: {
    style() {
      return {
        opacity: this.opacity,
        visibility: this.visible ? "visible" : "hidden",
      };
    }
  },
  methods: {
    update() {
      this.visible = GameEnd.endState > END_STATE_MARKERS.SHOW_NEW_GAME && !GameEnd.removeAdditionalEnd;
      this.opacity = (GameEnd.endState - END_STATE_MARKERS.SHOW_NEW_GAME) * 2;
      this.hasMoreCosmetics = GlyphAppearanceHandler.lockedSets.length > 0;
      this.selectedSetName = GlyphAppearanceHandler.chosenFromModal?.name ?? "无（将随机选取）";
    },
    startNewGame() {
      Endgame.newEndgame();
    },
    openSelectionModal() {
      Modal.cosmeticSetChoice.show();
    }
  }
};
</script>

<template>
  <div
    class="c-new-game-container"
    :style="style"
  >
    <h2>
      汝果决意踏入终局乎？终局将重置整个游戏，然将保留：纪录反物质、自动机脚本、研究预设、隐秘主题、
      普通/隐秘成就（普通成就仅保留第 19 行及以后）、选项，以及陪伴符文。
    </h2>
    <h3>汝可借右上角之按钮，审视当下游戏之状态。</h3>
    <div class="c-new-game-button-container">
      <button
        class="c-new-game-button"
        @click="startNewGame"
      >
        踏入终局
      </button>
    </div>
    <br>
    <h3 v-if="hasMoreCosmetics">
      因通关原版游戏，汝亦可自选解锁一套全新符文外观。待汝再度抵达现实之时，可自由更改，纯为观瞻，并无玩法之益。
      <br>
      <button
        class="c-new-game-button"
        @click="openSelectionModal"
      >
        选取外观套装
      </button>
      <br>
      <br>
      已选套装：{{ selectedSetName }}
    </h3>
    <h3 v-else>
      汝已解锁全部符文外观套装！
    </h3>
    <br>
    <h3>
      汝亦可导入「speedrun」以再次开启游戏，并附加速通追踪之功能，然此举或可重置直至终局之进度。
    </h3>
  </div>
</template>

<style scoped>
.c-new-game-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  pointer-events: auto;
}

.t-s12 .c-new-game-container {
  color: white;
}

.c-new-game-button-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.c-new-game-button {
  font-family: Typewriter;
  background: grey;
  border: black;
  border-radius: var(--var-border-radius, 0.5rem);
  margin-top: 1rem;
  padding: 1rem;
  cursor: pointer;
}
</style>
