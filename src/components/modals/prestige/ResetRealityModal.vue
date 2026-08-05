<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ResetRealityModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      isDoomed: false,
      canReality: false,
    };
  },
  computed: {
    resetTerm() { return this.isDoomed ? "末日审判" : "现实"; },
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed;
      this.canReality = isRealityAvailable();
    },
    handleYesClick() {
      beginProcessReality(getRealityProps(true));
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="resetReality"
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
      <div
        v-if="canReality"
        class="c-has-rewards"
      >
        <br>
        你目前可以完成一次现实以获得所有常规奖励，但若你在此重置，将无法获得这些奖励。
        如需获得奖励，请使用"开启新现实"按钮。
      </div>
      <br>
    </div>
    <template #confirm-text>
      重置
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-has-rewards {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-bad);
}
</style>
