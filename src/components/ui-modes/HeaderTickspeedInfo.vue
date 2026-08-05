<script>
import GameSpeedDisplay from "@/components/GameSpeedDisplay";

export default {
  name: "HeaderTickspeedInfo",
  components: {
    GameSpeedDisplay
  },
  data() {
    return {
      mult: new Decimal(0),
      tickspeed: new Decimal(0),
      galaxyCount: new Decimal(0),
      purchasedTickspeed: new Decimal(0),
      freeTickspeed: new Decimal(0),
    };
  },
  computed: {
    tickspeedDisplay() {
      return `总 Tickspeed：${format(this.tickspeed, 2, 3)} / 秒`;
    },
    perUpgrade() {
      if (InfinityChallenge(3).isRunning) return `Tickspeed 升级为所有反物质维度
        提供 ${formatX(this.galaxyCount.times(0.005).add(1.05), 3, 3)}`;
      return `每次 Tickspeed 升级使反物质维度产出快 ${formatX(this.mult.reciprocal(), 2, 3)}`;
    },
  },
  methods: {
    update() {
      this.mult.copyFrom(Tickspeed.multiplier);
      this.tickspeed.copyFrom(Tickspeed.perSecond);
      this.galaxyCount.copyFrom(player.galaxies);
      this.purchasedTickspeed.copyFrom(player.totalTickBought);
      this.freeTickspeed.copyFrom(FreeTickspeed.amount);
    },
  },
};
</script>

<template>
  <div>
    <br>
    {{ perUpgrade }}
    <br>
    {{ tickspeedDisplay }}
    <br>
    <GameSpeedDisplay />
  </div>
</template>

<style scoped>

</style>
