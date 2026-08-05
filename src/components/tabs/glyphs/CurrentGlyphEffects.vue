<script>
import CurrentGlyphEffect from "./CurrentGlyphEffect";
import GlyphSetName from "@/components/GlyphSetName";

const glyphEffectsOrder =
  ["powerpow", "powermult", "powerdimboost", "powerbuy10",
    "infinitypow", "infinityinfmult", "infinityIP", "infinityrate",
    "replicationpow", "replicationdtgain", "replicationspeed", "replicationglyphlevel",
    "timepow", "timeshardpow", "timeEP", "timespeed", "timeetermult",
    "dilationpow", "dilationTTgen", "dilationDT", "dilationgalaxyThreshold",
    "effarigrm", "effarigglyph", "effarigblackhole", "effarigachievement",
    "effarigforgotten", "effarigdimensions", "effarigantimatter",
    "cursedgalaxies", "cursedtickspeed", "curseddimensions", "cursedEP",
    "realityglyphlevel", "realitygalaxies", "realityrow1pow", "realityDTglyph",
    "companiondescription", "companionEP"];

export default {
  name: "CurrentGlyphEffects",
  components: {
    GlyphSetName,
    CurrentGlyphEffect
  },
  data() {
    return {
      effects: [],
      isColored: false,
      hasEffarig: false,
      hasReality: false,
      logTotalSacrifice: 0,
      pelleChaosEffect: {},
      maxSpecialGlyphs: 1,
    };
  },
  computed: {
    isSoftcapActive() {
      return this.effects.length && !this.effects.every(e => e.value.capped === false) || this.pelleChaosEffect.hasCappedEffect;
    },
    uniqueGlyphText() {
      if (!this.hasEffarig && !this.hasReality) return "";
      const uniqueGlyphs = [];
      if (this.hasEffarig) uniqueGlyphs.push(
        `<span style="color: ${GlyphAppearanceHandler.getBorderColor("effarig")};">Effarig</span>`);
      if (this.hasReality) uniqueGlyphs.push(
        `<span style="animation: a-reality-glyph-description-cycle 10s infinite;">Reality</span>`);
      return `你最多只能装备 ${formatInt(this.maxSpecialGlyphs)} 个${uniqueGlyphs.join("或")}
        ${this.maxSpecialGlyphs !== 1 ? "符文" : "符文"}${uniqueGlyphs.length > 1 ? "（每种）。" : "。"}`;
    },
    noEffects() {
      return !this.effects.length;
    },
    glyphSet() {
      return Glyphs.activeList;
    },
    pelleGlyphText() {
      return Pelle.isDoomed
        ? (!PelleDestructionUpgrade.glyphRarity.canBeApplied
           ? `符文稀有度设为 ${formatPercents(strengthToRarity(Pelle.glyphStrength))}，且 `
           : "")
          + `等级上限为 ${formatInt(Pelle.glyphMaxLevel)}`
        : "";
    },
    showChaosText() {
      return this.pelleChaosEffect.isUnlocked && !this.noEffects;
    },
    chaosEffect() {
      return this.pelleChaosEffect.description;
    },
    valueClass(bool) {
      return bool ? "c-current-glyph-effects__effect--capped" : "";
    }
  },
  watch: {
    logTotalSacrifice() {
      this.glyphsChanged();
    }
  },
  created() {
    this.on$(GAME_EVENT.GLYPHS_EQUIPPED_CHANGED, this.glyphsChanged);
    this.glyphsChanged();
  },
  methods: {
    update() {
      this.isColored = player.options.glyphTextColors;
      this.hasEffarig = Glyphs.active.some(g => g && g.type === "effarig");
      this.hasReality = Glyphs.active.some(g => g && g.type === "reality");

      this.logTotalSacrifice = GameCache.logTotalGlyphSacrifice.value;

      this.pelleChaosEffect = Pelle.specialGlyphEffect;
      this.maxSpecialGlyphs = (Achievement(196).isUnlocked && !player.disablePostReality) ? 2 : 1;
    },
    glyphsChanged() {
      this.effects = getActiveGlyphEffects();
      this.effects.sort((a, b) => glyphEffectsOrder.indexOf(a.id) - glyphEffectsOrder.indexOf(b.id));
    },
  }
};
</script>

<template>
  <div class="c-current-glyph-effects l-current-glyph-effects">
    <div class="pelle-current-glyph-effects">
      {{ pelleGlyphText }}
    </div>
    <div class="c-current-glyph-effects__header">
      当前激活的符文效果：
    </div>
    <GlyphSetName :glyph-set="glyphSet" />
    <br v-if="isSoftcapActive || hasEffarig || hasReality">
    <span v-html="uniqueGlyphText" />
    <div
      v-if="isSoftcapActive"
      class="l-current-glyph-effects__capped-header"
    >
      <span class="c-current-glyph-effects__effect--capped">斜体</span>效果因软上限而略微降低
    </div>
    <br>
    <div v-if="noEffects">
      无（装备符文以获得其效果）
    </div>
    <CurrentGlyphEffect
      v-for="effect in effects"
      :key="effect.id + logTotalSacrifice"
      :effect="effect"
      :is-colored="isColored"
    />
    <div
      v-if="showChaosText"
      class="pelle-current-glyph-effects"
    >
      <div
        v-for="effect in chaosEffect"
        :key="effect[0]"
      >
        <span :class="{'c-current-glyph-effects__effect--capped' : effect[1]}">
          {{ effect[0] }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
