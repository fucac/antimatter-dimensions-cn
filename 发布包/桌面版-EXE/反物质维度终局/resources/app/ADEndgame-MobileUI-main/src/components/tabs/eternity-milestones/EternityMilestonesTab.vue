<script>
import EternityMilestoneButton from "./EternityMilestoneButton";

export default {
  name: "EternityMilestonesTab",
  components: {
    EternityMilestoneButton
  },
  data() {
    return {
      eternityCount: new Decimal(),
    };
  },
  computed: {
    milestones() {
      return Object.values(GameDatabase.eternity.milestones)
        .sort((a, b) => a.eternities - b.eternities)
        .map(config => new EternityMilestoneState(config));
    },
    rows() {
      return Math.ceil(this.milestones.length / 2);
    }
  },
  methods: {
    update() {
      this.eternityCount.copyFrom(Currency.eternities.value.floor());
    },
    getMilestone(row, column) {
      return () => this.milestones[(row - 1) * 2 + column - 1];
    }
  }
};
</script>

<template>
  <div class="l-eternity-milestone-grid">
    <div>You have {{ quantify("Eternity", eternityCount, 3) }}.</div>
    <div
      v-for="row in rows"
      :key="row"
      class="l-eternity-milestone-grid__row"
    >
      <EternityMilestoneButton
        v-for="column in 2"
        :key="row * 2 + column"
        :get-milestone="getMilestone(row, column)"
        class="l-eternity-milestone-grid__cell"
      />
    </div>
    <div class="l-eternity-milestones__text">
      - Offline EP Generation - Active as long as neither of the other offline milestones (200 / 1000) are active.<br/>
      - Offline Eternity Generation - Must be outside of all Challenges and Dilation, and the Eternity Autobuyer must be set to Eternity at zero EP. This milestone's effect is capped at 33ms.<br/>
      - Offline Infinities Generation - Must be outside of Normal/Infinity Challenges and outside of EC4 and EC12, the Big Crunch Autobuyer must be turned on and set to time mode with 5 seconds or less, and the Eternity Autobuyer must be turned off.
    </div>
  </div>
</template>

<style scoped>
.l-eternity-milestones__text {
  text-align: left;
  font-size: 2rem;
  margin-top: 2rem;
  color: rgb(168, 168, 168);
}
</style>
