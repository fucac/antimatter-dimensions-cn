<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "SacrificeModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      currentMultiplier: new Decimal(),
      nextMultiplier: new Decimal(),
      currentPower: new Decimal(),
      nextPower: new Decimal()
    };
  },
  computed: {
    message() {
      if (Achievement(118).isUnlocked && !Pelle.isDoomed && (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 12) ||
        (LHC.voidRunning && NullUpgrade.limerick1.isBought))) {
        return `维度献祭将根据你献祭时拥有的 1st 反物质维度数量，
          为 8th 反物质维度提供倍率提升。`;
      }
      return `维度献祭将移除你所有的第 1 至第 7 反物质维度
        （成本和倍率不变），并根据献祭的 1st 反物质维度总数量
        为 8th 反物质维度提供倍率提升。恢复产出需要时间。`;
    },
    multiplierText() {
      if (Ascensions.sacA.isUnlocked) return `当前之力为 ${formatPow(this.currentPower, 2, 3)}，维度献祭后将
        提升至 ${formatPow(this.nextPower, 2, 3)}。`;
      return `当前倍率为 ${formatX(this.currentMultiplier, 2, 2)}，维度献祭后将
        提升至 ${formatX(this.nextMultiplier, 2, 2)}。`;
    },
  },
  methods: {
    update() {
      this.currentMultiplier.copyFrom(Sacrifice.totalBoost);
      this.nextMultiplier.copyFrom(Sacrifice.nextBoost.times(Sacrifice.totalBoost));
      this.currentPower.copyFrom(Sacrifice.totalPower);
      this.nextPower.copyFrom(Sacrifice.nextPower.add(Sacrifice.totalPower));
    },
    handleYesClick() {
      sacrificeReset();
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="sacrifice"
    @confirm="handleYesClick"
  >
    <template #header>
      维度献祭
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <br>
    <div class="c-modal-message__text">
      {{ multiplierText }}
      <br>
    </div>
  </ModalWrapperChoice>
</template>
