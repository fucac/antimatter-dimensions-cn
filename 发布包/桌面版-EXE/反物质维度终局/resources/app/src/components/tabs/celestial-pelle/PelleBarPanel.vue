<script>
import wordShift from "@/core/word-shift";
  
import PelleRift from "./PelleRift";

export default {
  name: "PelleBarPanel",
  components: {
    PelleRift
  },
  data() {
    return {
      decayRate: 0,
      isCollapsed: false,
      time: 0,
    };
  },
  computed: {
    collapseIcon() {
      return this.isCollapsed
        ? "fas fa-expand-arrows-alt"
        : "fas fa-compress-arrows-alt";
    },
    strikes() {
      return PelleStrikes.all;
    }
  },
  methods: {
    update() {
      this.decayRate = Pelle.riftDrainPercent;
      this.isCollapsed = player.celestials.pelle.collapsed.rifts;
      this.time = Date.now();
    },
    toggleCollapse() {
      player.celestials.pelle.collapsed.rifts = !this.isCollapsed;
    },
    sickVisualStrikeText() {
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 0) {
        return `佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！`;
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 1) {
        return this.time % 2500 > 500 ? `佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！` : wordShift.randomCrossWords("佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 2) {
        return this.time % 2500 > 1000 ? `佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！` : wordShift.randomCrossWords("佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 3) {
        return this.time % 2500 > 1500 ? `佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！` : wordShift.randomCrossWords("佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 4) {
        return this.time % 2500 > 2000 ? `佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！` : wordShift.randomCrossWords("佩勒之打击的惩罚乃是永久性的，纵然行末日亦将留存！");
      }
      if (PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length === 5) {
        return this.time % 2500 > 2400 ? `吾等必将再会……` : wordShift.randomCrossWords("吾等必将再会……");
      }
    }
  }
};
</script>

<template>
  <div class="l-pelle-panel-container">
    <div class="c-pelle-panel-title">
      <i
        :class="collapseIcon"
        class="c-collapse-icon-clickable"
        @click="toggleCollapse"
      />
      佩勒之打击与裂隙
    </div>
    <div
      v-if="!isCollapsed"
      class="l-pelle-content-container"
    >
      点击裂隙之进度条可将其激活。
      <span v-if="strikes.length > 1">汝无法同时激活两个以上之裂隙。</span>
      <br v-else>
      裂隙活跃时，每秒将吞噬另一资源之 {{ formatPercents(decayRate) }}。
      <br>
      裂隙之效即便未激活亦生效，且以所吸之总量为据。
      <b class="o-strike-warning">{{ sickVisualStrikeText() }}</b>
      <div class="c-pelle-bar-container">
        <PelleRift
          v-for="strike in strikes"
          :key="strike.config.id"
          :strike="strike"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-collapse-icon-clickable {
  position: absolute;
  top: 50%;
  left: 1.5rem;
  width: 3rem;
  align-content: center;
  transform: translateY(-50%);
  cursor: pointer;
}

.c-pelle-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.o-strike-warning {
  color: var(--color-pelle--base);
  font-size: 1.4rem;
}
</style>
