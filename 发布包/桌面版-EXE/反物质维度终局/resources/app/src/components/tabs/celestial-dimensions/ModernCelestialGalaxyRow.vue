<script>
export default {
  name: "ModernCelestialGalaxyRow",
  data() {
    return {
      type: CELESTIAL_GALAXY_TYPE.NORMAL,
      galaxies: {
        celestial: new Decimal()
      },
      requirement: {
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
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    buttonText() {
      if (this.lockText !== null) return this.lockText;
      const reset = [];
      if (true) reset.push("天神维度");
      if (true) reset.push("天神维度跃迁");
      return reset.length === 0
        ? `提升天神 Tickspeed 升级的效果`
        : `重置${makeEnumeration(reset)}以提升天神 Tickspeed 升级的效果`;
    },
    sumText() {
      const parts = [Decimal.max(this.galaxies.celestial, 0)];
      const sum = parts.map(this.formatCelestialGalaxies).join(" + ");
      return sum;
    },
    typeName() {
      switch (this.type) {
        case CELESTIAL_GALAXY_TYPE.NORMAL: return "天神星系";
        case CELESTIAL_GALAXY_TYPE.DISTANT: return "遥远天神星系";
        case CELESTIAL_GALAXY_TYPE.REMOTE: return "远程天神星系";
      }
      return undefined;
    },
    hasIncreasedScaling() {
      return this.type !== CELESTIAL_GALAXY_TYPE.NORMAL;
    },
    costScalingText() {
      switch (this.type) {
        case CELESTIAL_GALAXY_TYPE.DISTANT:
          return `超过 ${quantifyHybridLarge("个星系", this.distantStart)} 后，每个天神星系更昂贵`;
        case CELESTIAL_GALAXY_TYPE.REMOTE: {
          const scalings = [
            { type: "遥远", function: "二次", amount: this.distantStart },
            { type: "远程", function: "指数", amount: this.remoteStart }
          ];
          return `天神星系成本缩放增加：${scalings.sort((a, b) => a.amount - b.amount)
            .map(scaling => `超过 ${this.formatCelestialGalaxies(scaling.amount)} 后${scaling.function}缩放（${scaling.type}）`)
            .join("，")}`;
        }
      }
      return undefined;
    },
    classObject() {
      return {
        "o-primary-btn o-primary-btn--new o-primary-btn--dimension-reset": true,
        "o-primary-btn--disabled": !this.canBeBought,
        "o-pelle-disabled-pointer": this.creditsClosed
      };
    }
  },
  methods: {
    update() {
      this.type = CelestialGalaxy.type;
      this.galaxies.celestial.copyFrom(player.endgame.celDimExpansion.galaxies);
      const requirement = CelestialGalaxy.requirement;
      this.requirement.amount = requirement.amount;
      this.canBeBought = requirement.isSatisfied && CelestialGalaxy.canBeBought;
      this.distantStart = CelestialGalaxy.costScalingStart;
      this.remoteStart = CelestialGalaxy.remoteStart;
      this.lockText = CelestialGalaxy.lockText;
      this.canBulkBuy = false;
      this.creditsClosed = GameEnd.creditsEverClosed;
      if (this.isDoomed) {
        this.scalingText = {
          distant: this.formatCelestialGalaxies(this.distantStart),
          remote: this.formatCelestialGalaxies(CelestialGalaxy.remoteStart),
        };
      }
    },
    buyCelestialGalaxy(bulk) {
      if (!this.canBeBought) return;
      manualRequestCelestialGalaxyReset(this.canBulkBuy && bulk);
    },
    formatCelestialGalaxies(num) {
      return new Decimal(num).gt(1e8) ? format(num, 2) : formatInt(num);
    },
  }
};
</script>

<template>
  <div class="reset-container galaxy">
    <h4>{{ typeName }} ({{ sumText }})</h4>
    <span>需求：{{ formatHybridLarge(requirement.amount, 3) }} 天神物质</span>
    <span v-if="hasIncreasedScaling">{{ costScalingText }}</span>
    <button
      :class="classObject"
      @click.exact="buyCelestialGalaxy(true)"
      @click.shift.exact="buyCelestialGalaxy(false)"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
