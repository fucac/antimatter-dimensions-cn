<script>
import wordShift from "@/core/word-shift";

import ReplicantiUpgradeButton, { ReplicantiUpgradeButtonSetup } from "./ReplicantiUpgradeButton";
import PrimaryButton from "@/components/PrimaryButton";
import ReplicantiGainText from "./ReplicantiGainText";
import ReplicantiGalaxyButton from "./ReplicantiGalaxyButton";

export default {
  name: "ReplicantiTab",
  components: {
    PrimaryButton,
    ReplicantiGainText,
    ReplicantiUpgradeButton,
    ReplicantiGalaxyButton,
  },
  data() {
    return {
      isUnlocked: false,
      isUnlockAffordable: false,
      isInEC8: false,
      ec8Purchases: 0,
      amount: new Decimal(),
      mult: new Decimal(),
      hasTDMult: false,
      multTD: new Decimal(),
      hasDTMult: false,
      multDT: new Decimal(),
      hasIPMult: false,
      multIP: new Decimal(),
      hasDEMult: false,
      multDE: new Decimal(),
      hasPow: false,
      pow: 0,
      hasTDPow: false,
      powTD: 0,
      hasDTPow: false,
      powDT: 0,
      hasIPPow: false,
      powIP: 0,
      hasDEPow: false,
      powDE: 0,
      hasRaisedCap: false,
      replicantiCap: new Decimal(),
      capMultText: "",
      distantRG: 0,
      remoteRG: 0,
      contingentRG: 0,
      isContingent: false,
      effarigInfinityBonusRG: 0,
      isUncapped: false,
      nextEffarigRGThreshold: 0,
      canSeeGalaxyButton: false,
      unlockCost: new Decimal(),
      scrambledText: "",
      maxReplicanti: new Decimal(),
      estimateToMax: 0,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    replicantiChanceSetup() {
      return new ReplicantiUpgradeButtonSetup(
        ReplicantiUpgrade.chance,
        value => `复制几率：${formatDecimalPercents(value)}`,
        cost => `+${formatPercents(0.01)} 成本：${format(cost)} 无限点数`
      );
    },
    replicantiIntervalSetup() {
      const upgrade = ReplicantiUpgrade.interval;
      function formatInterval(interval) {
        const actualInterval = upgrade.applyModifiers(interval);
        const intervalNum = actualInterval.toNumber();
        if (
          Number.isFinite(intervalNum) &&
          intervalNum > 1 &&
          upgrade.isCapped
        ) {
          // Checking isCapped() prevents text overflow when formatted as "__ ➜ __"
          return TimeSpan.fromMilliseconds(new Decimal(intervalNum)).toStringShort(false);
        }
        if (actualInterval.lt(0.01)) return `< ${format(0.01, 2, 2)}ms`;
        if (actualInterval.gt(1000))
          return `${format(actualInterval.div(1000), 2, 2)}s`;
        return `${format(actualInterval, 2, 2)}ms`;
      }
      return new ReplicantiUpgradeButtonSetup(
        upgrade,
        value => `间隔：${formatInterval(value)}`,
        cost =>
          `➜ ${formatInterval(upgrade.nextValue)} 成本：${format(cost)} 无限点数`
      );
    },
    maxGalaxySetup() {
      const upgrade = ReplicantiUpgrade.galaxies;
      return new ReplicantiUpgradeButtonSetup(
        upgrade,
        value => {
          let description = `最大复制器星系数：`;
          const extra = upgrade.extra;
          if (extra.gt(0)) {
            const total = value.add(extra);
            description += `<br>${formatHybridLarge(value, 3)} + ${formatHybridLarge(extra, 3)} = ${formatHybridLarge(total, 3)}`;
          } else {
            description += formatHybridLarge(value, 3);
          }
          return description;
        },
        cost => `+${formatInt(1)} 成本：${format(cost)} 无限点数`
      );
    },
    boostText() {
      const boostList = [];
      boostList.push(`对所有无限维度提供 <span class="c-replicanti-description__accent">${formatX(this.mult, 2, 2)}</span>
        倍率${this.hasPow ? ` 和
        <span class="c-replicanti-description__accent">${formatPow(this.pow, 2, 3)}</span> 幂` : ""}`);
      if (this.hasTDMult) {
        boostList.push(`来自膨胀时间升级，对所有时间维度提供 <span class="c-replicanti-description__accent">${formatX(this.multTD, 2, 2)}</span>
          倍率${this.hasTDPow ? ` 和
          <span class="c-replicanti-description__accent">${formatPow(this.powTD, 2, 3)}</span> 幂` : ""}`);
      }
      if (this.hasDTMult) {
        const additionalEffect = GlyphAlteration.isAdded("replication") ? "和复制器速度 " : "";
        boostList.push(`来自符文，对膨胀时间提供 <span class="c-replicanti-description__accent">${formatX(this.multDT, 2, 2)}</span>
          倍率${this.hasDTPow ? ` 和
          <span class="c-replicanti-description__accent">${formatPow(this.powDT, 2, 3)}</span> 幂` : ""}
          ${additionalEffect}`);
      }
      if (this.hasIPMult) {
        boostList.push(`来自符文炼金，对无限点数提供 <span class="c-replicanti-description__accent">${formatX(this.multIP)}</span>
          倍率${this.hasIPPow ? ` 和
          <span class="c-replicanti-description__accent">${formatPow(this.powIP, 2, 3)}</span> 幂` : ""}`);
      }
      if (this.hasDEMult) {
        boostList.push(`来自 Alpha 奖励，对暗能量提供 <span class="c-replicanti-description__accent">${formatX(this.multDE, 2, 2)}</span>
          倍率${this.hasDEPow ? ` 和
          <span class="c-replicanti-description__accent">${formatPow(this.powDE, 2, 3)}</span> 幂` : ""}`);
      }
      if (boostList.length === 1) return `${boostList[0]}.`;
      if (boostList.length === 2) return `${boostList[0]}<br> 和 ${boostList[1]}.`;
      return `${boostList.slice(0, -1).join(",<br>")},<br> 和 ${boostList[boostList.length - 1]}.`;
    },
    hasMaxText: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    toMaxTooltip() {
      if (this.amount.lte(this.replicantiCap)) return null;
      return this.estimateToMax.lt(0.01)
        ? "正在增长中"
        : TimeSpan.fromSeconds(this.estimateToMax).toStringShort();
    }
  },
  methods: {
    update() {
      this.isUnlocked = Replicanti.areUnlocked;
      this.unlockCost = new Decimal(1e140).dividedByEffectOf(PelleRifts.vacuum.milestones[1]);
      if (this.isDoomed) this.scrambledText = this.vacuumText();
      if (!this.isUnlocked) {
        this.isUnlockAffordable = Currency.infinityPoints.gte(this.unlockCost);
        return;
      }
      this.isInEC8 = EternityChallenge(8).isRunning;
      if (this.isInEC8) {
        this.ec8Purchases = player.eterc8repl;
      }
      this.amount.copyFrom(Replicanti.amount);
      this.mult.copyFrom(ReplicantiMultipliers.idMult);
      this.hasTDMult = DilationUpgrade.tdMultReplicanti.isBought;
      this.multTD.copyFrom(ReplicantiMultipliers.tdMult);
      this.hasDTMult = getAdjustedGlyphEffect("replicationdtgain").neq(0) && !Pelle.isDoomed;
      this.multDT.copyFrom(ReplicantiMultipliers.dtMult);
      this.hasIPMult = !player.disablePostReality && AlchemyResource.exponential.amount > 0 && !this.isDoomed;
      this.multIP.copyFrom(ReplicantiMultipliers.ipMult);
      this.hasDEMult = !player.disablePostReality && Alpha.currentStage >= 21;
      this.multDE.copyFrom(ReplicantiMultipliers.deMult);
      this.hasPow = ResurgenceUpgrade.repSurge.isBought && !player.disablePostReality;
      this.pow = ReplicantiMultipliers.idPow;
      this.hasTDPow = ResurgenceUpgrade.repSurge.isBought && DilationUpgrade.tdMultReplicanti.isBought && !player.disablePostReality;
      this.powTD = ReplicantiMultipliers.tdPow;
      this.hasDTPow = ResurgenceUpgrade.repSurge.isBought && getAdjustedGlyphEffect("replicationdtgain").neq(0) && !Pelle.isDoomed && !player.disablePostReality;
      this.powDT = ReplicantiMultipliers.dtPow;
      this.hasIPPow = ResurgenceUpgrade.repSurge.isBought && !player.disablePostReality && AlchemyResource.exponential.amount > 0 && !this.isDoomed;
      this.powIP = ReplicantiMultipliers.ipPow;
      this.hasDEPow = ResurgenceUpgrade.repSurge.isBought && !player.disablePostReality && Alpha.currentStage >= 21;
      this.powDE = ReplicantiMultipliers.dePow;
      this.isUncapped = PelleRifts.vacuum.milestones[1].canBeApplied;
      this.hasRaisedCap = (EffarigUnlock.infinity.isUnlocked && !this.isUncapped) || (Pelle.isDoomed && PelleCelestialUpgrade.replicantiCapIncrease.canBeApplied);
      this.replicantiCap.copyFrom(replicantiCap());
      if (this.hasRaisedCap) {
        const mult = this.replicantiCap.div(DC.NUMMAX);
        this.capMultText = TimeStudy(31).canBeApplied
          ? `基础：${formatX(mult.pow(1 / TimeStudy(31).effectValue), 2)}；时间研究31后：${formatX(mult, 2)}`
          : formatX(mult, 2);
      }
      this.distantRG = ReplicantiUpgrade.galaxies.distantRGStart;
      this.remoteRG = ReplicantiUpgrade.galaxies.remoteRGStart;
      this.contingentRG = ReplicantiUpgrade.galaxies.contingentRGStart;
      this.isContingent = Replicanti.galaxies.bought.gte(this.contingentRG);
      this.effarigInfinityBonusRG = Effarig.bonusRG;
      this.nextEffarigRGThreshold = DC.NUMMAX.pow(
        Effarig.bonusRG + 2
      );
      this.canSeeGalaxyButton =
        Replicanti.galaxies.max.gte(1) || PlayerProgress.eternityUnlocked();
      this.maxReplicanti.copyFrom(player.records.thisReality.maxReplicanti);
      this.estimateToMax = this.calculateEstimate();
    },
    vacuumText() {
      return wordShift.wordCycle(PelleRifts.vacuum.name);
    },
    // This is copied out of a short segment of ReplicantiGainText with comments and unneeded variables stripped
    calculateEstimate() {
      const updateRateMs = player.options.updateRate;
      const logGainFactorPerTick = Decimal.divide(getGameSpeedupForDisplay().times(updateRateMs).times(
        (Decimal.ln(player.replicanti.chance.add(1)))), getReplicantiInterval());
      const postScale = Math.log10(ReplicantiGrowth.scaleFactor) / ReplicantiGrowth.scaleLog10;
      const nextMilestone = this.maxReplicanti;
      const coeff = Decimal.divide(updateRateMs / 1000, logGainFactorPerTick.times(postScale));
      return coeff.times(nextMilestone.divide(this.amount).pow(postScale).minus(1));
    }
  },
};
</script>

<template>
  <div class="l-replicanti-tab">
    <br>
    <PrimaryButton
      v-if="!isUnlocked"
      :enabled="isUnlockAffordable"
      class="o-primary-btn--replicanti-unlock"
      onclick="Replicanti.unlock();"
    >
      解锁复制器
      <br>
      成本：{{ format(unlockCost) }} 无限点数
    </PrimaryButton>
    <template v-else>
      <div
        v-if="isDoomed"
        class="modified-cap"
      >
        由于第二个 {{ scrambledText }} 里程碑，你的复制器上限已被移除。
      </div>
      <div
        v-else-if="hasRaisedCap"
        class="modified-cap"
      >
        完成 Effarig 的无限给予你以下奖励：
        <br>
        你在无 TS192 时的复制器上限现为 {{ format(replicantiCap, 2) }}
        ({{ capMultText }})
        <br>
        {{ quantifyHybridLarge("额外复制器星系", effarigInfinityBonusRG) }}
        (下一个复制器星系需要 {{ format(nextEffarigRGThreshold, 2) }} 上限)
      </div>
      <p class="c-replicanti-description">
        你拥有
        <span class="c-replicanti-description__accent">{{ format(amount, 2, 0) }}</span>
        复制器，转化为
        <br>
        <span v-html="boostText" />
      </p>
      <div
        v-if="hasMaxText"
        class="c-replicanti-description"
      >
        本次现实你达到的最大复制器数为
        <span
          v-tooltip="toMaxTooltip"
          class="max-accent"
        >{{ format(maxReplicanti, 2) }}</span>。
      </div>
      <br>
      <div v-if="isInEC8">
        你在永恒挑战 8 中还剩 {{ quantifyInt("次购买", ec8Purchases) }}。
      </div>
      <div class="l-replicanti-upgrade-row">
        <ReplicantiUpgradeButton :setup="replicantiChanceSetup" />
        <ReplicantiUpgradeButton :setup="replicantiIntervalSetup" />
        <ReplicantiUpgradeButton :setup="maxGalaxySetup" />
      </div>
      <div>
        最大复制器星系升级可无限购买，但成本会持续增长，
        <br>
        在超过 {{ formatInt(distantRG) }} 个复制器星系后增长更快，
        在超过 {{ formatInt(remoteRG) }} 个复制器星系后增长更甚。
      </div>
      <br>
      <div
        v-if="isContingent"
        class="contingency-text"
      >
        你的复制器星系已成为「应急」状态。这是由于它们在宇宙中占据了过多空间。
        <br>
        此效果自 {{ formatInt(contingentRG) }} 个复制器星系起生效，并将持续至时间的尽头。
      </div>
      <br><br>
      <ReplicantiGainText />
      <br>
      <ReplicantiGalaxyButton v-if="canSeeGalaxyButton" />
    </template>
  </div>
</template>

<style scoped>
.max-accent {
  color: var(--color-accent);
  text-shadow: 0 0 0.2rem var(--color-reality-dark);
  cursor: default;
}

.modified-cap {
  margin: -0.8rem 0 0.8rem;
  font-weight: bold;
}

.contingency-text {
  color: var(--color-pelle--base);
  text-shadow: 0 0 0.2rem var(--color-pelle--base);
  cursor: default;
}
</style>
