<script>
import AntimatterDimensionProgressBar from "./AntimatterDimensionProgressBar";
import AntimatterDimensionRow from "@/components/tabs/antimatter-dimensions/ModernAntimatterDimensionRow";
import AntimatterGalaxyRow from "@/components/tabs/antimatter-dimensions/ModernAntimatterGalaxyRow";
import DimensionBoostRow from "@/components/tabs/antimatter-dimensions/ModernDimensionBoostRow";
import PrimaryButton from "@/components/PrimaryButton";
import TickspeedRow from "@/components/tabs/antimatter-dimensions/TickspeedRow";

export default {
  name: "ModernAntimatterDimensionsTab",
  components: {
    PrimaryButton,
    AntimatterDimensionProgressBar,
    AntimatterDimensionRow,
    AntimatterGalaxyRow,
    DimensionBoostRow,
    TickspeedRow
  },
  data() {
    return {
      hasDimensionBoosts: false,
      buyUntil10: true,
      isSacrificeUnlocked: false,
      isSacrificeAffordable: false,
      buy10Mult: new Decimal(0),
      buyOoMPow: new Decimal(0),
      currentSacrifice: new Decimal(0),
      currentPower: new Decimal(0),
      sacrificeBoost: new Decimal(0),
      sacrificePower: new Decimal(0),
      disabledCondition: "",
      isQuickResetAvailable: false,
      hasContinuum: false,
      isContinuumActive: false,
      multiplierText: "",
      isFullyAutomated: false,
    };
  },
  computed: {
    sacrificeTooltip() {
      if (this.isFullyAutomated) {
        return "献祭自动购买器已启用且已解锁成就 118，故献祭现已完全自动化";
      }
      if (Ascensions.sacA.isUnlocked) return `使 8th 反物质维度提升 +${formatPow(this.sacrificePower, 2, 3)}`;
      return `使 8th 反物质维度提升 ${formatX(this.sacrificeBoost, 2, 2)}`;
    },
    sacText() {
      if (Ascensions.sacA.isUnlocked) return `维度献祭 (${formatPow(this.sacrificePower, 2, 3)})`;
      return `维度献祭 (${formatX(this.sacrificeBoost, 2, 2)})`;
    }
  },
  methods: {
    maxAll() {
      maxAll();
    },
    sacrifice() {
      sacrificeBtnClick();
    },
    // Toggle single/10 without Continuum, otherwise cycle through all 3 if it's unlocked
    changeBuyMode() {
      if (!this.hasContinuum) {
        player.buyUntil10 = !player.buyUntil10;
        return;
      }
      // "Continuum" => "Until 10" => "Buy 1" => "Continuum"
      if (this.isContinuumActive) {
        Laitela.setContinuum(false);
        player.buyUntil10 = true;
      } else if (player.buyUntil10) {
        player.buyUntil10 = false;
      } else {
        if (ImaginaryUpgrade(21).isLockingMechanics && player.auto.disableContinuum) {
          ImaginaryUpgrade(21).tryShowWarningModal();
          return;
        }
        if (DualityUpgrade(21).isLockingMechanics && player.auto.disableContinuum) {
          DualityUpgrade(21).tryShowWarningModal();
          return;
        }
        Laitela.setContinuum(true);
      }
    },
    getUntil10Display() {
      if (this.isContinuumActive) return "连续统";
      return this.buyUntil10 ? "购买10" : "购买1";
    },
    update() {
      this.hasDimensionBoosts = player.dimensionBoosts.gt(0);
      this.buyUntil10 = player.buyUntil10;
      this.hasContinuum = Laitela.continuumUnlocked;
      this.isContinuumActive = Laitela.continuumActive;
      this.isQuickResetAvailable = Player.isInAntimatterChallenge && Player.antimatterChallenge.isQuickResettable;

      const isSacrificeUnlocked = Sacrifice.isVisible;
      this.isSacrificeUnlocked = isSacrificeUnlocked;

      this.buy10Mult.copyFrom(AntimatterDimensions.buyTenMultiplier);
      this.buyOoMPow.copyFrom(AntimatterDimensions.buyOoMPower);

      this.multiplierText = Ascensions.b10mA.isUnlocked
        ? `购买量级购买力：+${formatPow(this.buyOoMPow, 2, 3)}`
        : `购买 10 维度倍率：${formatX(this.buy10Mult, 2, 2)}`;
      if (!isSacrificeUnlocked) return;
      this.isFullyAutomated = Autobuyer.sacrifice.isActive && Achievement(118).canBeApplied &&
        (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 12) ||
        (LHC.voidRunning && NullUpgrade.limerick1.isBought));
      this.isSacrificeAffordable = Sacrifice.canSacrifice && !this.isFullyAutomated;
      this.currentSacrifice.copyFrom(Sacrifice.totalBoost);
      this.currentPower.copyFrom(Sacrifice.totalPower);
      this.sacrificeBoost.copyFrom(Sacrifice.nextBoost);
      this.sacrificePower.copyFrom(Sacrifice.nextPower);
      this.disabledCondition = Sacrifice.disabledCondition;
      const sacText = this.isSacrificeUnlocked
        ? (Ascensions.sacA.isUnlocked
          ? ` | 维度献祭之力：${formatPow(this.currentPower, 2, 3)}`
          : ` | 维度献祭倍率：${formatX(this.currentSacrifice, 2, 2)}`)
        : "";
      this.multiplierText += sacText;
    }
  }
};
</script>

<template>
  <div class="l-antimatter-dim-tab">
    <div class="modes-container">
      <button
        class="o-primary-btn l-button-container"
        @click="changeBuyMode"
      >
        {{ getUntil10Display() }}
      </button>
      <PrimaryButton
        v-show="isSacrificeUnlocked"
        v-tooltip="sacrificeTooltip"
        :enabled="isSacrificeAffordable"
        class="o-primary-btn--sacrifice"
        @click="sacrifice"
      >
        <span v-if="isSacrificeAffordable">{{ sacText }}</span>
        <span v-else-if="isFullyAutomated && disabledCondition !== ''">
          维度献祭已自动化（成就 118）
        </span>
        <span v-else>维度献祭已禁用（{{ disabledCondition }}）</span>
      </PrimaryButton>
      <button
        class="o-primary-btn l-button-container"
        @click="maxAll"
      >
        全部购买 (M)
      </button>
    </div>
    <span>{{ multiplierText }}</span>
    <TickspeedRow />
    <div class="l-dimensions-container">
      <AntimatterDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
    <div class="resets-container">
      <DimensionBoostRow />
      <PrimaryButton
        v-if="isQuickResetAvailable"
        class="o-primary-btn--quick-reset"
        onclick="softReset(-1, true, true)"
      >
        执行一次维度跃迁重置
        <span v-if="hasDimensionBoosts"> 但将损失一次维度跃迁</span>
        <span v-else> 毫无所得</span>
      </PrimaryButton>
      <AntimatterGalaxyRow />
    </div>
    <AntimatterDimensionProgressBar />
  </div>
</template>

<style scoped>
.l-button-container {
  width: 100px;
  height: 30px;
  padding: 0;
}
</style>
