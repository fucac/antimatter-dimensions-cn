<script>
import TypeSacrifice from "./TypeSacrifice";

export default {
  name: "SacrificedGlyphs",
  components: {
    TypeSacrifice
  },
  data() {
    return {
      anySacrifices: false,
      hasDragover: false,
      hasAlteration: false,
      hideAlteration: false,
      maxSacrifice: new Decimal(0),
      teresaMult: new Decimal(0),
      lastMachinesTeresa: new Decimal(0),
    };
  },
  computed: {
    types: () => GLYPH_TYPES.filter(type => type !== "cursed" && type !== "companion"),
    lastMachines() {
      return this.lastMachinesTeresa.gte(DC.E20000)
        ? `${quantify("双重现实机器", this.lastMachinesTeresa.dividedBy(DC.E20000), 2)}`
        : (this.lastMachinesTeresa.lt(DC.E10000)
          ? `${quantify("现实机器", this.lastMachinesTeresa, 2)}`
          : `${quantify("虚幻机器", this.lastMachinesTeresa.dividedBy(DC.E10000), 2)}`);
    },
    dropDownIconClass() {
      return this.hideAlteration ? "far fa-plus-square" : "far fa-minus-square";
    },
    isDoomed() {
      return (Pelle.isDisabled("glyphsac") && !PelleRealityUpgrade.scourToEmpower.canBeApplied);
    },
    addThreshold() {
      return GlyphAlteration.additionThreshold;
    },
    empowerThreshold() {
      return GlyphAlteration.empowermentThreshold;
    },
    boostThreshold() {
      return GlyphAlteration.boostingThreshold;
    },
    cosmeticTypes: () => CosmeticGlyphTypes,
    addStyle() {
      return { color: GlyphAlteration.baseAdditionColor() };
    },
    empowerStyle() {
      return { color: GlyphAlteration.baseEmpowermentColor() };
    },
    boostStyle() {
      return { color: GlyphAlteration.baseBoostColor() };
    },
    hasSeenRealityGlyph() {
      return player.reality.glyphs.createdRealityGlyph;
    }
  },
  created() {
    this.on$(GAME_EVENT.GLYPH_VISUAL_CHANGE, () => {
      this.$recompute("cosmeticTypes");
    });
  },
  methods: {
    update() {
      this.anySacrifices = GameCache.logTotalGlyphSacrifice !== 0;
      this.hasAlteration = Ra.unlocks.alteredGlyphs.canBeApplied && !player.disablePostReality;
      this.hideAlteration = player.options.hideAlterationEffects;
      this.maxSacrifice.copyFrom(GlyphSacrificeHandler.maxSacrificeForEffects);
      this.teresaMult.copyFrom(Teresa.runRewardMultiplier);
      this.lastMachinesTeresa.copyFrom(player.celestials.teresa.lastRepeatedMachines);
    },
    dragover(event) {
      if (Pelle.isDoomed) return;
      if (!event.dataTransfer.types.includes(GLYPH_MIME_TYPE)) return;
      event.preventDefault();
      this.hasDragover = true;
    },
    dragleave(event) {
      if (
        this.isDoomed ||
        !event.relatedTarget ||
        !event.relatedTarget.classList ||
        event.relatedTarget.classList.contains("c-current-glyph-effects") ||
        event.relatedTarget.classList.contains("c-sacrificed-glyphs__header") ||
        event.relatedTarget.classList.contains("l-sacrificed-glyphs__type") ||
        event.relatedTarget.classList.contains("l-sacrificed-glyphs__type-symbol") ||
        event.relatedTarget.classList.contains("l-sacrificed-glyphs__type-amount") ||
        event.relatedTarget.classList.contains("c-sacrificed-glyphs__type-new-amount") ||
        event.relatedTarget.classList.length === 0) return;
      this.hasDragover = false;
    },
    drop(event) {
      if (this.isDoomed || !event.dataTransfer.types.includes(GLYPH_MIME_TYPE)) return;
      const id = parseInt(event.dataTransfer.getData(GLYPH_MIME_TYPE), 10);
      if (isNaN(id)) return;
      const glyph = Glyphs.findById(id);
      if (!glyph) return;
      GlyphSacrificeHandler.sacrificeGlyph(glyph, true);
      this.hasDragover = false;
    },
    toggleAlteration() {
      player.options.hideAlterationEffects = !player.options.hideAlterationEffects;
    },
    glyphSymbol(type) {
      return this.cosmeticTypes[type].currentSymbol.symbol;
    }
  }
};
</script>

<template>
  <div
    class="c-current-glyph-effects l-current-glyph-effects"
    :class="{'c-sacrificed-glyphs--dragover': hasDragover}"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <div class="l-sacrificed-glyphs__help">
      <span
        v-if="isDoomed"
        class="pelle-current-glyph-effects"
      >
        末日状态下无法献祭符文。
      </span>
      <span v-else>
        <div>将符文拖至此处或按住 Shift 点击以献祭。</div>
        <div>可在选项中或按住 Ctrl 时禁用确认提示。</div>
      </span>
    </div>
    <div v-if="hasAlteration">
      <span
        class="c-altered-glyphs-toggle-button"
        @click="toggleAlteration"
      >
        <i :class="dropDownIconClass" />
        <b> 异变符文</b>
      </span>
      <br>
      <div v-if="hideAlteration">
        (详情已隐藏,点击以显示)
      </div>
      <div v-else>
        当某符文类型的总献祭值超过以下阈值时,该类型将有一项效果得到增强:<br>
        <br><br>
        <b>
          <span :style="addStyle">{{ format(addThreshold) }} - 额外附加一个次要效果</span>
          <br>
          <span :style="empowerStyle">{{ format(empowerThreshold) }} - 公式大幅强化</span>
          <br>
          <span :style="boostStyle">{{ format(boostThreshold) }} - 取决于符文献祭的加成</span>
        </b>
        <br><br>
        当符文献祭的所有效果达到 {{ format(maxSacrifice) }} 后便无法再提升。
      </div>
    </div>
    <br>
    <div class="c-sacrificed-glyphs__header">
      符文献祭加成:
    </div>
    <div v-if="anySacrifices && !isDoomed">
      <div v-if="teresaMult.gt(1)">
        符文献祭值乘以 {{ formatX(teresaMult, 2, 2) }};
        特蕾莎上次完成于 {{ lastMachines }}。
        <span v-if="hasSeenRealityGlyph">
          现实符文不受此倍率影响,且无异变效果。
        </span>
      </div>
      <template v-for="type in types">
        <TypeSacrifice
          :key="type + glyphSymbol(type)"
          :type="type"
          :has-dragover="hasDragover"
        />
      </template>
    </div>
    <div
      v-else-if="isDoomed"
      class="pelle-current-glyph-effects"
    >
      末日状态下,所有符文献祭加成均被禁用,包括因异变符文导致的效果变化。
    </div>
    <div v-else>
      你尚未献祭任何符文!
    </div>
  </div>
</template>

<style scoped>

</style>
