<script>
import GlyphComponent from "@/components/GlyphComponent";
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "RealityModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
    GlyphComponent,
  },
  data() {
    return {
      firstReality: false,
      hasSpace: true,
      hasChoice: false,
      hasFilter: false,
      glyphs: [],
      bestLevel: new Decimal(),
      levelDifference: new Decimal(),
      selectedGlyph: undefined,
      canRefresh: false,
      level: new Decimal(),
      simRealities: new Decimal(0),
      realityMachines: new Decimal(),
      shardsGained: new Decimal(0),
      effarigUnlocked: false,
      willAutoPurge: false,
    };
  },
  computed: {
    firstRealityText() {
      return `现实将重置一切，除了挑战记录与统计界面中"常规"项下之物。前${formatInt(13)}行成就亦将被重置，
        但你将每${timeDisplayNoDecimals(new Decimal(30 * 60000))}自动取回一项成就。你亦将获得基于永恒点数的现实机器、
        基于永恒点数、复制器与膨胀时间等级的符文、用于购买便利升级的复兴点数，
        并解锁诸多升级。`;
    },
    canSacrifice() {
      return RealityUpgrade(19).isEffectActive;
    },
    warnText() {
      if (!this.hasChoice) {
        return `你每次现实目前仅有一个符文可选。你可以关闭此弹窗并购买
          START 复兴来解锁从多个符文中选择的能力。`;
      }

      if (this.hasFilter && this.selectedGlyph === undefined) {
        return `若你不选择符文，将根据你的符文筛选器自动选择一个。`;
      }
      return this.selectedGlyph === undefined
        ? `你必须选择一个符文才能继续。`
        : null;
    },
    gained() {
      const gainedResources = [];
      gainedResources.push(`${quantifyHybridLarge("现实", this.simRealities)}`);
      gainedResources.push(`${quantifyHybridLarge("复兴点数", this.simRealities)}`);
      gainedResources.push(`${quantify("现实机器", this.realityMachines, 2)}`);
      if (this.effarigUnlocked) {
        gainedResources.push(`${quantify("遗迹碎片", this.shardsGained, 2)}`);
      }
      return `你将获得${makeEnumeration(gainedResources)}`;
    },
    levelStats() {
      // Bit annoying to read due to needing >, <, and =, with = needing a different format.
      return `你将在现实时获得一个等级为${formatHybridLarge(this.level, 3)}的符文，${this.level.eq(this.bestLevel) ? "与你的最佳等级相同" : `
        ${quantifyHybridLarge("级", this.levelDifference)}
        ${this.level.gt(this.bestLevel) ? "高于" : "低于"}你的最佳等级`}。`;
    },
    confirmationToDisable() {
      return ConfirmationTypes.glyphSelection.isUnlocked() ? "glyphSelection" : undefined;
    },
    canConfirm() {
      return this.firstReality || this.selectedGlyph !== undefined || this.hasFilter;
    }
  },
  created() {
    this.getGlyphs();
    GlyphSelection.realityProps = getRealityProps(false, false);
  },
  methods: {
    update() {
      this.firstReality = player.realities.eq(0);
      this.hasChoice = Perk.firstPerk.isEffectActive;
      this.effarigUnlocked = TeresaUnlocks.effarig.canBeApplied;
      this.hasFilter = EffarigUnlock.glyphFilter.isUnlocked;
      this.level.copyFrom(gainedGlyphLevel().actualLevel);
      this.simRealities.copyFrom(new Decimal(simulatedRealityCount(false)).add(1));
      this.hasSpace = new Decimal(GameCache.glyphInventorySpace.value).gte(this.simRealities);
      const simRMGained = MachineHandler.gainedRealityMachines.times(this.simRealities);
      this.realityMachines.copyFrom(simRMGained.clampMax(MachineHandler.distanceToRMCap));
      this.shardsGained.copyFrom(Effarig.shardsGained.times(simulatedRealityCount(false) + 1));
      this.willAutoPurge = player.reality.autoAutoClean;
      if (this.firstReality) return;
      for (let i = 0; i < this.glyphs.length; ++i) {
        const currentGlyph = this.glyphs[i];
        const newGlyph = GlyphSelection.glyphList(
          GlyphSelection.choiceCount, gainedGlyphLevel(), { isChoosingGlyph: false }
        )[i];
        if (currentGlyph.level.eq(newGlyph.level)) continue;
        currentGlyph.level = newGlyph.level;
        currentGlyph.effects = newGlyph.effects;
      }
      this.bestLevel.copyFrom(player.records.bestReality.glyphLevel);
      this.levelDifference.copyFrom(Decimal.abs(this.bestLevel.sub(this.level)));
    },
    glyphClass(index) {
      return {
        "l-modal-glyph-selection__glyph": true,
        "l-modal-glyph-selection__glyph--selected": this.selectedGlyph === index,
      };
    },
    getGlyphs() {
      this.canRefresh = true;
      this.glyphs = GlyphSelection.upcomingGlyphs;
    },
    select(index) {
      this.selectedGlyph = index;
    },
    confirmModal(sacrifice) {
      if (!this.canConfirm) return;
      if (sacrifice) {
        // Sac isn't passed through confirm so we have to close it manually
        this.emitClose();
      }
      startManualReality(sacrifice, this.selectedGlyph);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    :option="confirmationToDisable"
    :show-confirm="canConfirm"
    @confirm="confirmModal(false)"
  >
    <template #header>
      你即将进行现实
    </template>
    <div
      v-if="firstReality"
      class="c-modal-message__text"
    >
      {{ firstRealityText }}
    </div>

    <div class="c-modal-message__text">
      {{ gained }}
    </div>
    <div
      v-if="!firstReality"
      class="l-glyph-selection__row"
    >
      <GlyphComponent
        v-for="(glyph, index) in glyphs"
        :key="index"
        :class="glyphClass(index)"
        :glyph="glyph"
        :is-in-modal="true"
        :ignore-modified-level="true"
        :show-sacrifice="canSacrifice"
        @click.native="select(index)"
      />
    </div>
    <div v-if="!firstReality">
      {{ levelStats }}
      <br>
      <b class="o-warning">
        {{ warnText }}
      </b>
    </div>
    <div v-if="simRealities.gt(1)">
      <br>
      选择此符文后，游戏将模拟你剩余的现实，
      <br>
      并根据你的符文筛选设置，自动选择另外{{ quantifyHybridSmall("个符文", simRealities.sub(1)) }}。
    </div>
    <div v-if="willAutoPurge">
      <br>
      自动清理当前已启用；你选择的符文
      <br>
      在其触发后可能不会出现在你的物品栏中。
    </div>
    <div
      v-if="!hasSpace"
      class="o-warning"
    >
      <span v-if="simRealities.gt(1)">
        你将模拟的现实数量超过你的空闲物品栏空间；
        这可能导致部分符文被献祭。
      </span>
      <span v-else>
        你没有空闲的物品栏空间 - 你选择的符文将被自动
        {{ canSacrifice ? "献祭" : "删除" }}！
      </span>
    </div>
    <div v-if="confirmationToDisable">
      <br>
      你可以通过按住Shift点击现实按钮来强制显示此弹窗（即使已禁用）。
    </div>
    <template
      v-if="canSacrifice && canConfirm"
      #extra-buttons
    >
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="confirmModal(true)"
      >
        献祭
      </PrimaryButton>
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.o-warning {
  color: var(--color-infinity);
}
</style>
