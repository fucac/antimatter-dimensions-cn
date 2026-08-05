<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ClassicAntimatterDimensionsTabHeader",
  components: {
    PrimaryButton
  },
  data() {
    return {
      isSacrificeUnlocked: false,
      isSacrificeAffordable: false,
      currentSacrifice: new Decimal(0),
      currentPower: new Decimal(0),
      sacrificeBoost: new Decimal(0),
      nextPower: new Decimal(0),
      disabledCondition: "",
    };
  },
  computed: {
    sacText() {
      if (Ascensions.sacA.isUnlocked) return `维度献祭 (+${formatPow(sacrificeBoost, 2, 3)})`;
      return `维度献祭 (${formatX(sacrificeBoost, 2, 2)})`;
    },
    sacrificeTooltip() {
      if (Ascensions.sacA.isUnlocked) return `使 8th 反物质维度提升 +${formatPow(this.nextPower, 2, 3)}`;
      return `使 8th 反物质维度提升 ${formatX(this.sacrificeBoost, 2, 2)}`;
    },
  },
  methods: {
    update() {
      const isSacrificeUnlocked = Sacrifice.isVisible;
      this.isSacrificeUnlocked = isSacrificeUnlocked;
      if (!isSacrificeUnlocked) return;
      this.isSacrificeAffordable = Sacrifice.canSacrifice;
      this.currentSacrifice.copyFrom(Sacrifice.totalBoost);
      this.currentPower.copyFrom(Sacrifice.totalPower);
      this.sacrificeBoost.copyFrom(Sacrifice.nextBoost);
      this.nextPower.copyFrom(Sacrifice.nextPower);
      this.disabledCondition = Sacrifice.disabledCondition;
    },
    sacrifice() {
      sacrificeBtnClick();
    },
    maxAll() {
      maxAll();
    }
  }
};
</script>

<template>
  <div class="l-antimatter-dim-tab__header">
    <PrimaryButton
      v-show="isSacrificeUnlocked"
      v-tooltip="sacrificeTooltip"
      :enabled="isSacrificeAffordable"
      class="o-primary-btn--sacrifice"
      @click="sacrifice"
    >
      <span v-if="isSacrificeAffordable">
        {{ sacText }}
      </span>
      <span v-else>
        维度献祭已禁用（{{ disabledCondition }}）
      </span>
    </PrimaryButton>
    <PrimaryButton
      class="o-primary-btn--buy-max"
      @click="maxAll"
    >
      全部购买 (M)
    </PrimaryButton>
  </div>
</template>
