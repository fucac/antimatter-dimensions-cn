<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ArmageddonModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      isDoomed: false,
      remnantsGain: new Decimal(0),
      realityShardGain: new Decimal(0),
      nextRealityShardGain: new Decimal(0),
      canArmageddon: false,
    };
  },
  computed: {
    topLabel() {
      if (!this.isDoomed) return `你即将将现实带入毁灭`;
      return `你即将进行末日审判重置`;
    },
    message() {
      const isFirstReset = (Currency.remnants.eq(0))
        ? `，每秒将产生 ${format(this.nextRealityShardGain, 2, 2)} 现实碎片`
        : `，你的现实碎片获取量将从 ${format(this.realityShardGain, 2, 2)}/秒
          提升到 ${format(this.nextRealityShardGain, 2, 2)}/秒`;

      return `末日审判会开启一个新的毁灭现实。你将获得
      ${quantify("残响", this.remnantsGain, 2, 0)}${isFirstReset}`;
    }
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.remnantsGain.copyFrom(Pelle.remnantsGain);
      this.realityShardGain.copyFrom(Pelle.realityShardGainPerSecond);
      this.nextRealityShardGain.copyFrom(Pelle.nextRealityShardGain);
      this.canArmageddon = Pelle.canArmageddon;
    },
    handleYesClick() {
      Pelle.initializeRun();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :option="isDoomed ? 'armageddon' : undefined"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div
      v-if="!isDoomed"
      class="c-modal-message__text"
    >
      毁灭你的现实将重置一切，仅保留挑战记录、天神进度，以及统计选项卡中「常规」与「现实」栏下的内容。
      你无法从当前现实的进度中获得任何奖励。毁灭现实还会清除大部分未受保护的符文，并禁用部分游戏机制。
      <br>
      <br>
      你确定要这样做吗？
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
