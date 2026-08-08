<script>
import GalacticPowerRow from "./GalacticPowerRow";

export default {
  name: "GalacticPowerTab",
  components: {
    GalacticPowerRow
  },
  data() {
    return {
      galacticPower: new Decimal(),
      galacticPowerPerSecond: new Decimal(),
      nextPow: 0,
      isDoomed: false
    };
  },
  computed: {
    powers() {
      return GalacticPowers.all;
    },
    rows() {
      return Math.ceil(this.powers.length);
    },
    nextAtDisplay() {
      const first = this.nextPow?.id === 1;
      const next = GalacticPower.nextPowerUnlockGP;

      if (first) return `首项星系之力将于 ${format(next)} 星系之力时解锁。`;
      return next === undefined
        ? "所有星系之力均已解锁"
        : `下一项星系之力将于 ${format(next)} 星系之力时解锁。`;
    },
    galacticPowerAmountStyle() {
      return {
        "font-size": "2.5rem",
        "font-weight": "bold",
        animation: "a-galactic-power-amount-cycle 12s infinite",
        color: "white",
        background: "black",
      };
    }
  },
  methods: {
    update() {
      this.galacticPower.copyFrom(Currency.galacticPower.value.floor());
      this.galacticPowerPerSecond.copyFrom(getGalacticPowerGainPerSecond());
      this.nextPow = GalacticPower.nextPower;
      this.isDoomed = Pelle.isDoomed;
    },
    getPower(row, column) {
      return () => this.powers[(row - 1) + column - 1];
    }
  }
};
</script>

<template>
  <div class="l-endgame-milestone-grid">
    <div>
      <span class="c-galactic-power-description-text">你拥有 </span>
      <span :style="galacticPowerAmountStyle">{{ format(galacticPower, 2, 2) }}</span>
      <span class="c-galactic-power-description-text"> 星系之力。</span>
      <span :style="galacticPowerAmountStyle">+{{ format(galacticPowerPerSecond, 2, 2) }}/s</span>
    </div>
    <div>
      <span class="c-galactic-power-description-text">
        星系之力收益主要基于星系总数,但亦因当前的天神物质与虚幻机器数量而提升。
      </span>
    </div>
    <div v-if="isDoomed">
      <span class="c-galactic-power-description-text">
        佩勒已在毁灭状态下禁止你产出星系之力!
      </span>
    </div>
    <div
      v-for="row in rows"
      :key="row"
      class="l-endgame-milestone-grid__row"
    >
      <GalacticPowerRow
        v-for="column in 1"
        :key="row + column"
        :get-power="getPower(row, column)"
        class="l-endgame-milestone-grid__cell"
      />
    </div>
    <div>
      <span class="c-galactic-power-description-text">{{ nextAtDisplay }}</span>
    </div>
  </div>
</template>

<style scoped>
.c-galactic-power-description-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(var(--color-pelle--secondary), var(--color-pelle--base));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}
</style>
