<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ClassicAntimatterGalaxyRow",
  components: {
    PrimaryButton
  },
  data() {
    return {
      type: GALAXY_TYPE.NORMAL,
      galaxies: {
        normal: new Decimal(),
        replicanti: new Decimal(),
        dilation: new Decimal(),
        free: new Decimal()
      },
      requirement: {
        tier: 1,
        amount: 0
      },
      canBeBought: false,
      distantStart: 0,
      remoteStart: 0,
      lockText: null,
      canBulkBuy: false,
      creditsClosed: false,
      scalingText: {
        distant: null,
        remote: null,
      },
      hasTutorial: false,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    dimName() {
      return AntimatterDimension(this.requirement.tier).displayName;
    },
    buttonText() {
      if (this.lockText !== null) return this.lockText;
      const reset = [];
      if (!Achievement(111).isUnlocked ||
        (player.disablePostReality && !(Alpha.isRunning && Alpha.currentStage >= 12) &&
        !(LHC.voidRunning && NullUpgrade.limerick1.isBought))) reset.push("反物质维度");
      if (!Achievement(143).isUnlocked ||
        (player.disablePostReality && !(Alpha.isRunning && Alpha.currentStage >= 20) &&
        !(LHC.voidRunning && NullUpgrade.limerick2.isBought))) reset.push("维度提升");
      return reset.length === 0
        ? `提升 Tickspeed 升级的效果`
        : `重置${makeEnumeration(reset)}以提升 Tickspeed 升级的效果`;
    },
    sumText() {
      const parts = [Decimal.max(this.galaxies.normal, GalacticPowers.galacticAscension.isUnlocked ? 1 : 0)];
      if (this.galaxies.replicanti.gt(0)) parts.push(this.galaxies.replicanti);
      if (this.galaxies.dilation.gt(0)) parts.push(this.galaxies.dilation);
      if (this.galaxies.free.gt(0)) parts.push(this.galaxies.free);
      let sum;
      if (GalacticPowers.galacticAscension.isUnlocked) sum = parts.map(this.formatGalaxies).join(" × ");
      if (!GalacticPowers.galacticAscension.isUnlocked) sum = parts.map(this.formatGalaxies).join(" + ");
      if (parts.length >= 2) {
        if (GalacticPowers.galacticAscension.isUnlocked) return `${sum} = ${this.formatGalaxies(parts.reduce(Decimal.prodReducer))}`;
        return `${sum} = ${this.formatGalaxies(parts.decimalSum())}`;
      }
      return sum;
    },
    typeName() {
      switch (this.type) {
        case GALAXY_TYPE.NORMAL: return "反物质星系";
        case GALAXY_TYPE.DISTANT: return "遥远反物质星系";
        case GALAXY_TYPE.REMOTE: return "远程反物质星系";
      }
      return undefined;
    },
    hasIncreasedScaling() {
      return this.type !== GALAXY_TYPE.NORMAL;
    },
    costScalingText() {
      switch (this.type) {
        case GALAXY_TYPE.DISTANT:
          return `超过 ${quantifyInt("个星系", this.distantStart)} 后，每个星系更昂贵`;
        case GALAXY_TYPE.REMOTE: {
          const scalings = [
            { type: "遥远", function: "二次", amount: this.distantStart },
            { type: "远程", function: "指数", amount: this.remoteStart }
          ];
          return `星系成本缩放增加：${scalings.sort((a, b) => a.amount - b.amount)
            .map(scaling => `超过 ${this.formatGalaxies(scaling.amount)} 后${scaling.function}缩放（${scaling.type}）`)
            .join("，")}`;
        }
      }
      return undefined;
    },
    classObject() {
      return {
        "o-primary-btn--galaxy l-dim-row__prestige-button": true,
        "tutorial--glow": this.canBeBought && this.hasTutorial,
        "o-pelle-disabled-pointer": this.creditsClosed,
      };
    }
  },
  methods: {
    update() {
      this.type = Galaxy.type;
      this.galaxies.normal.copyFrom(player.galaxies.add(GalaxyGenerator.galaxies));
      this.galaxies.replicanti.copyFrom(Replicanti.galaxies.total);
      this.galaxies.dilation.copyFrom(player.dilation.totalTachyonGalaxies);
      this.galaxies.free.copyFrom(GalacticPower.freeGalaxies);
      const requirement = Galaxy.requirement;
      this.requirement.amount = requirement.amount;
      this.requirement.tier = requirement.tier;
      this.canBeBought = requirement.isSatisfied && Galaxy.canBeBought;
      this.distantStart = EternityChallenge(5).isRunning ? 0 : Galaxy.costScalingStart;
      this.remoteStart = Galaxy.remoteStart;
      this.lockText = Galaxy.lockText;
      this.canBulkBuy = EternityMilestone.autobuyMaxGalaxies.isReached;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.hasTutorial = Tutorial.isActive(TUTORIAL_STATE.GALAXY);
    },
    buyGalaxy(bulk) {
      if (!this.canBeBought) return;
      manualRequestGalaxyReset(this.canBulkBuy && bulk);
    },
    formatGalaxies(num) {
      return new Decimal(num).gt(1e8) ? format(num, 2) : formatInt(num);
    },
  }
};
</script>

<template>
  <div class="c-dimension-row c-antimatter-dim-row c-antimatter-prestige-row">
    <div
      class="l-dim-row__prestige-text c-dim-row__label c-dim-row__label--amount l-text-wrapper"
    >
      {{ typeName }} ({{ sumText }}):
      需求：{{ formatHybridLarge(requirement.amount, 3) }} {{ dimName }}反物质维度
      <div class="l-scaling-text-wrapper">
        {{ hasIncreasedScaling ? costScalingText : "" }}
      </div>
    </div>
    <PrimaryButton
      :enabled="canBeBought"
      :class="classObject"
      @click.exact="buyGalaxy(true)"
      @click.shift.exact="buyGalaxy(false)"
    >
      {{ buttonText }}
      <div
        v-if="hasTutorial"
        class="fas fa-circle-exclamation l-notification-icon"
      />
    </PrimaryButton>
  </div>
</template>

<style scoped>
.l-text-wrapper {
  height: 6rem;
}

.l-scaling-text-wrapper {
  height: 2rem;
}

.o-primary-btn--galaxy {
  width: 22rem;
  height: 5.5rem;
  position: relative;
  font-size: 0.9rem;
}
</style>
