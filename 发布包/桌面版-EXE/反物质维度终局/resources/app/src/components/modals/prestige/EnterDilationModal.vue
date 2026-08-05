<script>
import FullScreenAnimationHandler from "@/core/full-screen-animation-handler";

import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "EnterDilationModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `延展时间将开启新的永恒，所有维度倍率的指数与
        Tickspeed 倍率的指数都将降至${formatPow(0.75, 2, 2)}。若你能在膨胀时间中完成永恒，
        你的超光速粒子将提升至一个基于你最高反物质与所持超光速粒子
        倍率的数值。`;
    },
    entranceLabel() {
      return `你即将进入膨胀时间`;
    },
    EPSinceLabel() {
      if (player.dilation.lastEP.eq(-1)) {
        return "这是你第一次膨胀时间";
      }
      if (!isInCelestialReality() && Ra.unlocks.unlockDilationStartingTP.canBeApplied && !player.disablePostReality) {
        return `由于Teresa的${formatInt(25)}级奖励，你已拥有所能达到的最大超光速粒子数量。`;
      }
      return `你上次完成膨胀时间时拥有${format(player.dilation.lastEP, 2, 2)}永恒点数。`;
    }
  },
  methods: {
    handleYesClick() {
      if (player.dilation.active) return;
      if (player.options.animations.dilation && !FullScreenAnimationHandler.isDisplaying) {
        // Strike trigger happens within the delayed dilation callback in this function
        animateAndDilate();
      } else {
        startDilatedEternity();
        if (Pelle.isDoomed) PelleStrikes.dilation.trigger();
      }
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="dilation"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ entranceLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ EPSinceLabel }}
      <br>
      <br>
      {{ message }}
    </div>
    <template #confirm-text>
      进入
    </template>
  </ModalWrapperChoice>
</template>
