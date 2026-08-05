<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "CelestialCrunchModal",
  components: {
    ResetModal
  },
  data() {
    return {
      gainedCelestialInfinities: new Decimal(),
      gainedCelestialInfinityPoints: new Decimal(),
      startingBoosts: new Decimal(0),
      startingCM: 0,
      willStartWithGalaxy: false
    };
  },
  computed: {
    isFirstCelInfinity() {
      return !player.endgame.celDimExpansion.celestialInfinities;
    },
    message() {
      const info = this.isFirstCelInfinity ? this.firstCelInfinityInfo : ``;
      return `天神无限之际，所有天神维度、天神维度提升与天神星系都将归于虚无。${info}`;
    },
    firstCelInfinityInfo() {
      return `作为回报，你将获得一个天神点数（CIP）。借此你可在天神无限界面中购买诸多升级。你亦将获得一重天神无限，此数值可见于统计界面。`;
    },
    cipGainInfo() {
      return `你将获得${quantify("天神无限", this.gainedCelestialInfinities, 2, 0)}
        与${quantify("天神点数", this.gainedCelestialInfinityPoints, 2, 0)}。`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingCM.gte(0)) gainedResources.push(`${quantify("天神物质", this.startingCM, 2, 1)}`);
      if (this.startingBoosts.gt(0)) gainedResources.push(`${quantify("天神维度提升", this.startingBoosts)}`);
      if (this.willStartWithGalaxy) gainedResources.push(`${quantify("天神星系", 1)}`);

      return `你下次天神无限之时将以${makeEnumeration(gainedResources)}起始。`;
    }
  },
  methods: {
    update() {
      this.gainedCelestialInfinities = gainedCelestialInfinities().round();
      this.gainedCelestialInfinityPoints = gainedCelestialInfinityPoints().round();
      this.startingBoosts.copyFrom(CelestialDimBoost.startingDimensionBoosts);
      this.startingCM = Currency.celestialMatter.startingValue;
      this.willStartWithGalaxy = false;
    },
    handleYesClick() {
      celestialCrunchResetRequest();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ResetModal
    header="你即将进行天神紧缩"
    :message="message"
    :gained-resources="cipGainInfo"
    :starting-resources="startingResources"
    :confirm-fn="handleYesClick"
    :alternate-condition="isFirstCelInfinity"
    :alternate-text="message"
    :confirm-option="isFirstCelInfinity ? undefined : 'celestialCrunch'"
  />
</template>
