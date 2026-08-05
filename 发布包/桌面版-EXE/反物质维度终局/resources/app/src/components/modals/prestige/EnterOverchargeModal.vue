<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "EnterOverchargeModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `进入过载将开启一段新的终局。在过载期间，你将被困于
        永恒挑战 12，且反物质产出的四级迭代将被乘以 ${formatX(0.75, 2, 2)}。
        此外，每级过载会将 Tickspeed 与所有维度倍数的指数提升至 ${formatPow(0.72, 2, 4)} 次方，
        如同膨胀时间。更高级别的过载将解锁新的、更丰厚的奖励。`;
    },
    entranceLabel() {
      return `你即将进入过载`;
    }
  },
  methods: {
    handleYesClick() {
      if (player.endgame.overcharge.isRunning) return;
      enterOvercharge();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="overcharge"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ entranceLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <template #confirm-text>
      放马过来
    </template>
  </ModalWrapperChoice>
</template>
