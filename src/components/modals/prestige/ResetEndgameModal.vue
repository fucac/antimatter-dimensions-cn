<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ResetEndgameModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    endgameState: {
      type: String,
      required: true,
    },
    suggestion: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isDoomed: false,
      canEndgame: false,
    };
  },
  computed: {
    resetTerm() { return "终局"; },
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.canEndgame = isEndgameAvailable();
    },
    handleYesClick() {
      Endgame.resetNoReward();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="resetEndgame"
    @confirm="handleYesClick"
  >
    <template #header>
      你即将重置你的{{ resetTerm }}
    </template>
    <div class="c-modal-message__text">
      这将使你回到{{ resetTerm }}的起始，
      你将无法从当前{{ resetTerm }}的进度中获得任何奖励。
      <br>
      <br>
      你确定要这样做吗？
      <br>
      你当前处于{{ endgameState }}。根据你当前的终局状态，
      建议你最好{{ suggestion }}。
      <br>
    </div>
    <template #confirm-text>
      重置
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>

</style>
