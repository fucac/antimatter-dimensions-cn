<script>
import CelestialDimensionBoostRow from "./ClassicCelestialDimensionBoostRow";
import CelestialDimensionRow from "./ClassicCelestialDimensionRow";
import CelestialGalaxyRow from "./ClassicCelestialGalaxyRow";
import CelestialTickspeedRow from "./CelestialTickspeedRow";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ClassicCelestialDimensionTab",
  components: {
    PrimaryButton,
    CelestialDimensionBoostRow,
    CelestialDimensionRow,
    CelestialGalaxyRow,
    CelestialTickspeedRow
  },
  data() {
    return {
      celestialMatter: new Decimal(0),
      dimMultiplier: new Decimal(0),
      matterPerSecond: new Decimal(0),
      incomeType: "",
      conversionExponent: 0,
      nextDimCapIncrease: 0,
      totalDimCap: new Decimal(0),
      creditsClosed: false,
      showLockedDimCostNote: true,
      isEffectActive: false,
      isExpanded: false,
      isAnyAutobuyerUnlocked: false,
    };
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !CelestialDimension(8).isUnlocked;
      this.celestialMatter.copyFrom(Currency.celestialMatter);
      this.conversionExponent = CelestialDimensions.conversionExponent;
      this.dimMultiplier.copyFrom(this.celestialMatter.pow(this.conversionExponent).max(1));
      this.matterPerSecond.copyFrom(CelestialDimension(1).productionPerRealSecond);
      this.incomeType = "天神物质";
      this.totalDimCap.copyFrom(CelestialDimensions.totalDimCap);
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.isEffectActive = player.endgame.celestialMatterMultiplier.isActive;
      this.isExpanded = Achievement(221).isUnlocked;
      this.isAnyAutobuyerUnlocked = Autobuyer.celestialDimension(1).isUnlocked;
    },
    maxAll() {
      CelestialDimensions.buyMax();
    },
    toggleCelestialMatterMultiplier() {
      toggleCelestialMatter();
    },
    toggleAllAutobuyers() {
      toggleAllCelDims();
    }
  }
};
</script>

<template>
  <div class="l-celestial-dim-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        全部购买
      </PrimaryButton>
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="toggleCelestialMatterMultiplier"
      >
        切换天神物质
      </PrimaryButton>
      <PrimaryButton
        v-if="isAnyAutobuyerUnlocked"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        切换所有自动购买器
      </PrimaryButton>
    </div>
    <div>
      <p>
        您拥有
        <span class="c-celestial-dim-description__accent">{{ format(celestialMatter, 2, 1) }}</span>
        天神物质<span v-if="!isEffectActive">（已禁用）</span>，
        <br>
        <span>
          经指数
          <span class="c-celestial-dim-description__accent">{{ formatPow(conversionExponent, 2, 3) }}</span>
        </span>
        提升，化为
        <span class="c-celestial-dim-description__accent">{{ formatX(dimMultiplier, 2, 1) }}</span>
        倍之
        <span>游戏速度。</span>
      </p>
    </div>
    <div>
      所有天神维度可购买至 {{ format(totalDimCap, 2, 2) }} 天神点数。
    </div>
    <div>您每秒获得 {{ format(matterPerSecond, 2, 0) }} {{ incomeType }}。</div>
    <CelestialTickspeedRow v-if="isExpanded"/>
    <div class="l-dimensions-container">
      <CelestialDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
      <CelestialDimensionBoostRow v-if="isExpanded"/>
      <CelestialGalaxyRow v-if="isExpanded"/>
    </div>
    <div v-if="showLockedDimCostNote">
      按住 Shift 可查看未解锁天神维度的天神点数消耗。
    </div>
  </div>
</template>
