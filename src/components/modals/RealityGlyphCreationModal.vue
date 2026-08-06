<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";
import { RealityGlyphCreation } from "@/core/glyphs/reality-glyph-creation";

export default {
  name: "RealityGlyphCreationModal",
  components: {
    ModalWrapper,
    PrimaryButton
  },
  data() {
    return {
      isDoomed: false,
      realityGlyphLevel: new Decimal(0),
      // This contains an array where each entry is an array looking like [4000, "realitygalaxies"]
      possibleEffects: [],
    };
  },
  methods: {
    update() {
      this.isDoomed = Pelle.isDoomed && !PelleAlchemyUpgrade.alchemyReality.canBeApplied;
      this.realityGlyphLevel.copyFrom(new Decimal(RealityGlyphCreation.level));
      const realityEffectConfigs = GlyphEffects.all
        .filter(eff => eff.glyphTypes.includes("reality"))
        .sort((a, b) => a.bitmaskIndex - b.bitmaskIndex);
      const minRealityEffectIndex = realityEffectConfigs.map(cfg => cfg.bitmaskIndex).min();
      this.possibleEffects = realityEffectConfigs
        .map(cfg => [realityGlyphEffectLevelThresholds[cfg.bitmaskIndex - minRealityEffectIndex], cfg.id]);
    },
    createRealityGlyph() {
      if (RealityGlyphCreation.create()) this.emitClose();
    },
    formatGlyphEffect(effect) {
      if (this.realityGlyphLevel.lt(effect[0])) return `(需要符文等级 ${formatInt(effect[0])})`;
      const config = GlyphEffects[effect[1]];
      const value = config.effect(this.realityGlyphLevel, rarityToStrength(100 + Ra.unlocks.realityGlyphRarity.effectOrDefault(0)));
      const effectTemplate = config.singleDesc;
      return effectTemplate.replace("{value}", config.formatEffect(value));
    }
  },
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      现实符文创造
    </template>
    <div class="c-reality-glyph-creation">
      <div>
        创造一枚等级为 {{ formatHybridLarge(realityGlyphLevel, 3) }} 的现实符文。
        其稀有度将始终为 {{ formatPercents(1) }},
        等级依您当前的现实资源数量而定(全部消耗)。其他炼金资源不受影响。
        现实符文具有独特效果,其中部分仅在高等级符文下方可显现。
        现实符文亦可献祭以提升所有记忆块增益。如同艾法里格符文,
        您无法同时装备多枚。
      </div>
      <div class="o-available-effects-container">
        <div class="o-available-effects">
          可用效果:
        </div>
        <div
          v-for="(effect, index) in possibleEffects"
          :key="index"
        >
          {{ formatGlyphEffect(effect) }}
        </div>
      </div>
      <PrimaryButton
        v-if="isDoomed"
        :enabled="false"
      >
        毁灭状态下无法创造现实符文
      </PrimaryButton>
      <PrimaryButton
        v-else-if="realityGlyphLevel.neq(0)"
        @click="createRealityGlyph"
      >
        创造一枚现实符文!
      </PrimaryButton>
      <PrimaryButton
        v-else
        :enabled="false"
      >
        现实符文等级必须高于 {{ formatInt(0) }}
      </PrimaryButton>
    </div>
  </ModalWrapper>
</template>

<style scoped>
.o-available-effects-container {
  margin: 1.5rem 0 2rem;
}

.o-available-effects {
  font-weight: bold;
}
</style>
