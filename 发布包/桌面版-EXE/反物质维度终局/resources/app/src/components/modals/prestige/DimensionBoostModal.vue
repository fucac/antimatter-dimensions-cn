<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "DimensionBoostModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    bulk: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    topLabel() {
      return `即将进行一次维度提升重置`
    },
    message() {
      const keepDimensions = (Perk.antimatterNoReset.canBeApplied || Achievement(111).canBeApplied ||
        PelleUpgrade.dimBoostResetsNothing.isBought || PelleAchievementUpgrade.achievement111.canBeApplied)
        && (!player.disablePostReality || (LHC.voidRunning && player.endgame.largeHadronCollider.void.nullified)
        || (Alpha.isRunning && Alpha.currentStage >= 12) || (LHC.voidRunning && NullUpgrade.limerick1.isBought))
        ? `实际不会重置任何内容，因为你拥有一个升级，可以防止反物质与反物质维度
          在此情况下被重置。你仍将如常获得提升的乘数。`
        : `重置你的反物质与反物质维度。确定要这样做吗？`;

      return `这将${keepDimensions}`;
    },
  },
  methods: {
    handleYesClick() {
      requestDimensionBoost(this.bulk);
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="dimensionBoost"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
