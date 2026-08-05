<script>
import DescriptionDisplay from "@/components/DescriptionDisplay";
import TimeStudyButton from "./TimeStudyButton";

export default {
  name: "DilationTimeStudy",
  components: {
    DescriptionDisplay,
    TimeStudyButton
  },
  props: {
    setup: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showRequirement: false,
      maxTT: new Decimal(),
      currTT: new Decimal(),
      ttGen: new Decimal(),
    };
  },
  computed: {
    study() {
      return this.setup.study;
    },
    id() {
      return this.study.id;
    },
    requirement() {
      if (this.id === 1) {
        if (this.maxTT.gte(1e9)) return `要求：完成 ${formatInt(5)} 次 EC11 和 EC12
          且时间定理达到 ${format(this.maxTT, 2, 2)}/${formatInt(TimeStudy.dilation.totalTimeTheoremRequirement)}`;
        return `要求：完成 ${formatInt(5)} 次 EC11 和 EC12
          且时间定理达到 ${formatHybridSmall(this.maxTT, 3)}/${formatInt(TimeStudy.dilation.totalTimeTheoremRequirement)}`;
      }
      if (this.id === 6) {
        const achRows = Perk.firstPerk.isBought ? "" : ` 和 ${formatInt(13)} 行成就`;
        return `要求：${format("1e4000")} 永恒点数${achRows}`;
      }
      return "";
    },
    theoremTimeEstimate() {
      if (this.study.isBought || !this.study.cost || this.ttGen.eq(0)) return null;
      const time = Decimal.sub(this.study.cost, this.currTT).dividedBy(this.ttGen);
      return time.gt(0) ? `还需 ${TimeSpan.fromSeconds(time).toStringShort()} 获得足够时间研究` : null;
    }
  },
  methods: {
    update() {
      if (this.id === 1) {
        this.maxTT.copyFrom(Currency.timeTheorems.max);
        this.showRequirement = !this.study.isBought && (!Perk.bypassECDilation.canBeApplied || player.disablePostReality);
      }
      if (this.id === 6) {
        this.showRequirement = !Pelle.isDoomed;
      }
      this.currTT.copyFrom(Currency.timeTheorems.value);
      this.ttGen.copyFrom(getTTPerSecond().times(Alpha.isRunning ? 1 : getGameSpeedupFactor()));
    },
    clickHandler() {
      switch (this.id) {
        case 1:
          return () => Tab.eternity.dilation.show();
        case 2:
        case 3:
        case 4:
        case 5:
          return () => Tab.dimensions.time.show();
        case 6:
          return () => Tab.reality.glyphs.show();
        default:
          throw new Error("Unrecognized Dilation study was clicked");
      }
    }
  }
};
</script>

<template>
  <TimeStudyButton
    :setup="setup"
    :ach-tooltip="theoremTimeEstimate"
    :special-click="clickHandler()"
  >
    <DescriptionDisplay :config="study.config" />
    <template v-if="showRequirement">
      <br>
      <span>{{ requirement }}</span>
    </template>
  </TimeStudyButton>
</template>

<style scoped>

</style>
