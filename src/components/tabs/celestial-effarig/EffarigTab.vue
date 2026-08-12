<script>
import CelestialQuoteHistory from "@/components/CelestialQuoteHistory";
import EffarigRunUnlockReward from "./EffarigRunUnlockReward";
import EffarigUnlockButton from "./EffarigUnlockButton";

export default {
  name: "EffarigTab",
  components: {
    EffarigUnlockButton,
    EffarigRunUnlockReward,
    CelestialQuoteHistory,
  },
  data() {
    return {
      relicShards: new Decimal(0),
      shardRarityBoost: 0,
      shardPower: 0,
      shardMaxRarityIncrease: 0,
      shardsGained: new Decimal(0),
      currentShardsRate: new Decimal(0),
      amplification: 0,
      amplifiedShards: new Decimal(0),
      amplifiedShardsRate: new Decimal(0),
      runUnlocked: false,
      quote: "",
      isRunning: false,
      vIsFlipped: false,
      relicShardRarityAlwaysMax: false,
      hasSecondShop: false
    };
  },
  computed: {
    shopUnlocks: () => {
      let u = [
        EffarigUnlock.adjuster,
        EffarigUnlock.glyphFilter,
        EffarigUnlock.setSaves
      ];
      if (Achievement(227).isUnlocked) u.push(EffarigUnlock.maintainRS, EffarigUnlock.glyphGenerationBoost,
        EffarigUnlock.maxMomentum, EffarigUnlock.maxRarityBoost, EffarigUnlock.extendRun);
      return u;
    },
    runUnlock: () => EffarigUnlock.run,
    runUnlocks: () => {
      let r = [
        EffarigUnlock.infinity,
        EffarigUnlock.eternity,
        EffarigUnlock.reality,
      ];
      if (EffarigUnlock.extendRun.isUnlocked) r.push(EffarigUnlock.endgame);
      return r;
    },
    symbol: () => GLYPH_SYMBOLS.effarig,
    runButtonOuterClass() {
      return {
        "l-effarig-run-button": true,
        "c-effarig-run-button": true,
        "c-effarig-run-button--running": this.isRunning,
        "c-effarig-run-button--not-running": !this.isRunning,
        "c-celestial-run-button--clickable": !this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed
      };
    },
    runButtonInnerClass() {
      return this.isRunning ? "c-effarig-run-button__inner--running" : "c-effarig-run-button__inner--not-running";
    },
    runDescription() {
      return `${GameDatabase.celestials.descriptions[1].effects()}\n
      ${GameDatabase.celestials.descriptions[1].description()}`;
    },
    showShardsRate() {
      return this.currentShardsRate;
    },
    isDoomed: () => Pelle.isDoomed,
  },
  watch: {
    isRunning() {
      this.$recompute("runDescription");
    }
  },
  methods: {
    update() {
      this.relicShards.copyFrom(Currency.relicShards.value);
      this.shardRarityBoost = Effarig.maxRarityBoost / 100;
      this.shardPower = player.disablePostReality ? 1 : Ra.unlocks.maxGlyphRarityAndShardSacrificeBoost.effectOrDefault(1);
      this.shardMaxRarityIncrease = Effarig.rarityCapIncrease / 100;
      this.shardsGained.copyFrom(Effarig.shardsGained);
      this.currentShardsRate.copyFrom(this.shardsGained.div(Time.thisRealityRealTime.totalMinutes));
      this.amplification = simulatedRealityCount(false);
      this.amplifiedShards.copyFrom(this.shardsGained.times(1 + this.amplification));
      this.amplifiedShardsRate.copyFrom(this.amplifiedShards.div(Time.thisRealityRealTime.totalMinutes));
      this.quote = Effarig.quote;
      this.runUnlocked = EffarigUnlock.run.isUnlocked;
      this.isRunning = Effarig.isRunning;
      this.vIsFlipped = V.isFlipped;
      this.relicShardRarityAlwaysMax = (Ra.unlocks.extraGlyphChoicesAndRelicShardRarityAlwaysMax.canBeApplied || EndgameMastery(53).isBought) && !player.disablePostReality;
      this.hasSecondShop = Achievement(227).isUnlocked;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "Effarig's", number: 1 });
    },
    createCursedGlyph() {
      Glyphs.giveCursedGlyph();
    }
  }
};
</script>

<template>
  <div class="l-teresa-celestial-tab">
    <CelestialQuoteHistory celestial="effarig" />
    <div class="l-effarig-shop-and-run">
      <div class="l-effarig-shop">
        <div class="c-effarig-relics">
          你拥有 {{ quantify("遗迹碎片", relicShards, 2, 0) }}。
          <br>
          <span v-if="relicShardRarityAlwaysMax">
            新符文的稀有度提升 +{{ formatPercents(shardRarityBoost, 2) }}。
          </span>
          <span v-else>
            每个新符文的稀有度将提升
            <br>
            +{{ formatPercents(0) }} 到 +{{ formatPercents(shardRarityBoost, 2) }} 之间的随机值。
          </span>
          <span v-if="shardPower > 1">
            <br>
            符文献祭收益也提升至 {{ formatPow(shardPower, 0, 2) }}。
          </span>
          <span v-if="shardMaxRarityIncrease > 0">
            <br>
            符文稀有度上限也提升 +{{ formatPercents(shardMaxRarityIncrease, 2) }}。
          </span>
        </div>
        <div class="c-effarig-relic-description">
          下一次现实时你将获得 {{ quantify("遗迹碎片", shardsGained, 2) }}
          （{{ format(currentShardsRate, 2) }}/分钟）。
          <span v-if="amplification !== 0">
            <br>
            由于当前现实被放大，
            <br>
            实际你总共将获得
            {{ quantify("遗迹碎片", amplifiedShards, 2) }}（{{ format(amplifiedShardsRate, 2) }}/分钟）。
          </span>
        </div>
        <div class="c-effarig-relic-description">
          <br>
          永恒点数越高，会略微增加遗迹碎片
          <br>
          的获取量。符文拥有的不同效果越多，会大幅
          <br>
          增加遗迹碎片的获取量。
        </div>
        <EffarigUnlockButton
          v-for="(unlock, i) in shopUnlocks"
          :key="i"
          :unlock="unlock"
        />
        <EffarigUnlockButton
          v-if="!runUnlocked"
          :unlock="runUnlock"
        />
        <button
          v-if="vIsFlipped"
          class="c-effarig-shop-button c-effarig-shop-button--available"
          @click="createCursedGlyph"
        >
          Get a Cursed Glyph...
        </button>
      </div>
      <div
        v-if="runUnlocked"
        class="l-effarig-run"
      >
        <div class="c-effarig-run-description">
          <span :class="{ 'o-pelle-disabled': isDoomed }">
            进入鹿颈长的现实。
          </span>
        </div>
        <div
          :class="runButtonOuterClass"
          @click="startRun"
        >
          <div
            :class="runButtonInnerClass"
            :button-symbol="symbol"
          >
            {{ symbol }}
          </div>
        </div>
        <div class="c-effarig-run-description">
          {{ runDescription }}
        </div>
        <EffarigRunUnlockReward
          v-for="(runRewardUnlock, j) in runUnlocks"
          :key="j"
          :unlock="runRewardUnlock"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.c-effarig-relic-description {
  width: 46rem;
}
</style>
