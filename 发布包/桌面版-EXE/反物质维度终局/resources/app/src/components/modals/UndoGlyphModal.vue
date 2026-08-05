<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UndoGlyphModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      showStoredGameTime: false,
    };
  },
  methods: {
    update() {
      this.showStoredGameTime = Enslaved.isUnlocked;
    },
    realityInvalidate() {
      this.emitClose();
      Modal.message.show("符文撤销仅可在现实之中进行!",
        { closeEvent: GAME_EVENT.REALITY_RESET_AFTER });
    },
    handleYesClick() {
      this.emitClose();
      Glyphs.undo();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="glyphUndo"
    @confirm="handleYesClick"
  >
    <template #header>
      您即将撤销装备一枚符文
    </template>
    <div
      class="c-modal-message__text c-text-wrapper"
    >
      最后装备的符文将被卸下。
      现实将会重置,然部分事物将恢复至其装备时的状态:
      <br>
      <div class="c-text-wrapper">
        <br>- 反物质、无限点数与永恒点数
        <br>- 膨胀时间升级、超光速粒子与膨胀时间
        <br>- 时间定理与永恒挑战完成数
        <br>- 时间维度与现实解锁
        <br>- 当前无限/永恒/现实内的时长
        <span v-if="showStoredGameTime"><br>- 储存的游戏时间</span>
      </div>
      <br>
      须知:若您使某些事物的特殊要求失效(例如不产出反物质完成现实的成就),即便撤销亦仍将保持失效状态。此情况下,
      您需在不使用撤销的前提下,于单一现实中达成条件方可。
    </div>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-text-wrapper {
  text-align: left;
}
</style>