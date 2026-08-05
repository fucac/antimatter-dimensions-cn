<script>
export default {
  name: "ResetEndgameButton",
  data() {
    return {
      canEndgame: false,
      isDoomed: false,
    };
  },
  computed: {
    resetText() {
      return "重新开始本次终局";
    },
  },
  methods: {
    update() {
      this.canEndgame = player.celestials.pelle.records.totalEndgameAntimatter.add(1).log10().gte(9e15);
      this.isDoomed = Pelle.isDoomed;
    },
    resetEndgame() {
      const confirms = player.options.confirmations;
      if (GameEnd.creditsClosed) return;
      if (this.isDoomed) {
        if (confirms.resetEndgame) Modal.resetEndgame.show({
          endgameState: "处于毁灭现实中",
          suggestion: "不如静待其结束"
        });
        else Endgame.resetNoReward();
      } else if (this.canEndgame) {
        if (confirms.resetEndgame) Modal.resetEndgame.show({
          endgameState: "可完成终局",
          suggestion: "直接领取奖励完成终局，总比一无所得强"
        });
        else Endgame.resetNoReward();
      } else if (confirms.resetEndgame) Modal.resetEndgame.show({
        endgameState: "处于毁灭现实之外",
        suggestion: "真的想要重置的话就请继续"
      });
      else Endgame.resetNoReward();
    },
  }
};
</script>

<template>
  <button
    :class="['l-reset-endgame-button',
             'c-reset-endgame-button',
             {'c-reset-endgame-button-doom': isDoomed}]"
    @click="resetEndgame"
  >
    <div class="l-endgame-button__contents">
      {{ resetText }}
    </div>
  </button>
</template>

<style scoped>

</style>
