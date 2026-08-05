<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "BigCrunchModal",
  components: {
    ResetModal
  },
  data() {
    return {
      gainedInfinities: new Decimal(),
      gainedInfinityPoints: new Decimal(),
      startingBoosts: new Decimal(0),
      startingAM: 10,
      willStartWithGalaxy: false
    };
  },
  computed: {
    isFirstInfinity() {
      return !PlayerProgress.infinityUnlocked();
    },
    message() {
      const info = this.isFirstInfinity ? this.firstInfinityInfo : ``;
      return `无限之际，所有维度、维度提升与反物质星系都将归于虚无。${info}`;
    },
    firstInfinityInfo() {
      return `作为回报，你将获得一个无限点数（IP）。借此你可在无限界面中购买诸多升级。你亦将获得一重无限，此数值可见于统计界面。`;
    },
    ipGainInfo() {
      return `你将获得${quantify("无限", this.gainedInfinities, 2, 0)}
        与${quantify("无限点数", this.gainedInfinityPoints, 2, 0)}。`;
    },
    startingResources() {
      const gainedResources = [];
      if (this.startingAM.gte(10)) gainedResources.push(`${quantify("反物质", this.startingAM, 2, 1)}`);
      if (this.startingBoosts.gt(0)) gainedResources.push(`${quantify("维度提升", this.startingBoosts)}`);
      if (this.willStartWithGalaxy) gainedResources.push(`${quantify("星系", 1)}`);

      return `你下次无限之时将以${makeEnumeration(gainedResources)}起始。`;
    }
  },
  methods: {
    update() {
      this.gainedInfinities = gainedInfinities().round();
      this.gainedInfinityPoints = gainedInfinityPoints().round();
      this.startingBoosts.copyFrom(DimBoost.startingDimensionBoosts);
      this.startingAM = Currency.antimatter.startingValue;
      this.willStartWithGalaxy = InfinityUpgrade.skipResetGalaxy.isBought;
    },
    handleYesClick() {
      bigCrunchResetRequest();
      EventHub.ui.offAll(this);
      if (this.isFirstInfinity) {
        setTimeout(() => Modal.message.show(`此动画将于每次手动触发无限后显现。若你欲关闭之，可于选项界面中设置。
          游戏中任何视觉动画效果，皆可于首次观看后关闭。`, {}, 3), 2000);
      }
    }
  },
};
</script>

<template>
  <ResetModal
    header="你即将进行无限"
    :message="message"
    :gained-resources="ipGainInfo"
    :starting-resources="startingResources"
    :confirm-fn="handleYesClick"
    :alternate-condition="isFirstInfinity"
    :alternate-text="message"
    :confirm-option="isFirstInfinity ? undefined : 'bigCrunch'"
  />
</template>
