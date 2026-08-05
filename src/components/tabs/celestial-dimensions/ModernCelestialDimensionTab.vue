<script>
import CelestialDimensionBoostRow from "./ModernCelestialDimensionBoostRow";
import CelestialDimensionRow from "./ModernCelestialDimensionRow";
import CelestialGalaxyRow from "./ModernCelestialGalaxyRow";
import CelestialTickspeedRow from "./CelestialTickspeedRow";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ModernCelestialDimensionTab",
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
      unnerfedCelestialMatter: new Decimal(0),
      dimMultiplier: new Decimal(0),
      matterPerSecond: new Decimal(0),
      incomeType: "",
      conversionExponent: 0,
      nextDimCapIncrease: 0,
      totalDimCap: new Decimal(0),
      creditsClosed: false,
      showLockedDimCostNote: true,
      softcapPow: 0,
      softcap: new Decimal(0),
      unstable: false,
      overflowMag: 0,
      overflow: new Decimal(0),
      isOverflowing: false,
      massOverflowMag: 0,
      massOverflow: new Decimal(0),
      isCorrupted: false,
      isEffectActive: false,
      alphaDecayRemnant: 0,
      hasRemnant: false,
      isExpanded: false,
      canCrunch: false,
      isBroken: false,
      hasInfinities: false,
      infinityPoints: new Decimal(0),
      isAnyAutobuyerUnlocked: false,
      timeToCap: new Decimal(0),
      hasEternities: false,
      eternityPoints: new Decimal(0),
    };
  },
  computed: {
    timeToCapText() {
      return TimeSpan.fromHours(this.timeToCap).toStringShort();
    }
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !CelestialDimension(8).isUnlocked;
      this.celestialMatter.copyFrom(Currency.celestialMatter);
      this.unnerfedCelestialMatter.copyFrom(Currency.unnerfedCelestialMatter);
      this.conversionExponent = CelestialDimensions.conversionExponent;
      this.dimMultiplier.copyFrom(this.celestialMatter.pow(this.conversionExponent).max(1));
      this.matterPerSecond.copyFrom(CelestialDimension(1).productionPerSecond);
      this.incomeType = "天神物质";
      this.totalDimCap.copyFrom(CelestialDimensions.totalDimCap);
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.softcapPow = CelestialDimensions.softcapPow;
      this.softcap.copyFrom(CelestialDimensions.SOFTCAP);
      this.unstable = this.celestialMatter.gte(this.softcap);
      this.overflowMag = CelestialDimensions.OVERFLOW_MAG;
      this.overflow.copyFrom(CelestialDimensions.OVERFLOW);
      this.isOverflowing = this.celestialMatter.gt(this.overflow);
      this.massOverflowMag = CelestialDimensions.MASS_OVERFLOW_MAG;
      this.massOverflow.copyFrom(CelestialDimensions.MASS_OVERFLOW);
      this.isCorrupted = this.celestialMatter.gt(this.massOverflow);
      this.isEffectActive = player.endgame.celestialMatterMultiplier.isActive;
      this.alphaDecayRemnant = CelestialDimensions.alphaDecayRemnant;
      this.hasRemnant = Alpha.isDestroyed;
      this.isExpanded = Achievement(221).isUnlocked;
      this.canCrunch = Currency.celestialMatter.value.gte(DC.NUMMAX) && this.isExpanded;
      this.isBroken = player.endgame.celDimExpansion.isBroken;
      this.hasInfinities = PlayerProgress.celestialInfinityUnlocked();
      this.infinityPoints.copyFrom(player.endgame.celDimExpansion.celestialInfinityPoints);
      this.isAnyAutobuyerUnlocked = Autobuyer.celestialDimension(1).isUnlocked;
      this.timeToCap.copyFrom(DC.D5.times(CelestialDimensions.alphaDecaySpeed));
      this.hasEternities = PlayerProgress.celestialEternityUnlocked();
      this.eternityPoints.copyFrom(player.endgame.celDimExpansion.celestialEternityPoints);
    },
    maxAll() {
      CelestialDimensions.buyMax();
    },
    toggleCelestialMatterMultiplier() {
      toggleCelestialMatter();
    },
    toggleAllAutobuyers() {
      toggleAllCelDims();
    },
    instabilityClassObject() {
      return {
        "c-celestial-dim-description__accent": !this.unstable && !this.isOverflowing,
        "c-celestial-dim-description__accent-unstable": this.unstable || this.isOverflowing,
      };
    },
    celestialCrunch() {
      if (PlayerProgress.celestialInfinityUnlocked()) celestialCrunchResetRequest();
      else Modal.celestialCrunch.show();
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
    <div v-if="!canCrunch || isBroken">
      <div>
        <p>
          <span v-if="hasEternities">
            您拥有 <span class="c-celestial-eternity-text">{{ format(eternityPoints, 2) }}</span>
            {{ pluralize("天神永恒点数", eternityPoints) }}。
          </span>
          <br>
          <span v-if="hasInfinities">
            您拥有 <span class="c-celestial-infinity-text">{{ format(infinityPoints, 2) }}</span>
            {{ pluralize("天神点数", infinityPoints) }}。
          </span>
          <br>
          您拥有
          <span :class="instabilityClassObject()">{{ format(celestialMatter, 2, 1) }}</span>
          <span v-if="unstable"> 不稳定</span> <span v-if="isOverflowing">溢出</span>
          <span v-if="isCorrupted"> 腐化</span>之天神物质，
          <br>
          <span>
            经指数
            <span :class="instabilityClassObject()">{{ formatPow(conversionExponent, 2, 3) }}</span>
          </span>
          提升，化为
          <span :class="instabilityClassObject()">
            {{ formatX(dimMultiplier, 2, 1) }}<span v-if="!isEffectActive">（已禁用）</span>
          </span>
          倍之
          <span>游戏速度。</span>
          <div v-if="unstable">
            您<i>本应</i>拥有 <span :class="instabilityClassObject()">{{ format(unnerfedCelestialMatter, 2, 1) }}</span>
            天神物质，然实未尝有。
            <br>
            此乃因当天神物质达 <span :class="instabilityClassObject()">{{ format(softcap, 2, 1) }}</span> 时，
            天神物质已遭软上限所制。
            <br>
            当前，超此数额之天神物质正被开方为
            <span :class="instabilityClassObject()">{{ format(1 / softcapPow, 2, 3) }}</span> 次方。
            <br>
            天神物质之软上限，全凭您之天神物质软上限量级而定，其值现为
            <span :class="instabilityClassObject()">{{ format(softcapPow, 2, 3) }}</span>。
          </div>
          <div v-if="isOverflowing">
            自 <span :class="instabilityClassObject()">{{ format(overflow, 2, 1) }}</span> 天神物质之后，
            您之天神物质<i>再度</i>遭软上限所制。
            <br>
            当前，超此数额之天神物质及天神物质软上限起始值正被开方为
            <span :class="instabilityClassObject()">{{ format(1 / overflowMag, 2, 3) }}</span> 次方。
            <br>
            天神物质之溢出，全凭您之天神物质溢出量级而定，其值现为
            <span :class="instabilityClassObject()">{{ format(overflowMag, 2, 3) }}</span>。
          </div>
          <div v-if="isCorrupted">
            自 <span :class="instabilityClassObject()">{{ format(massOverflow, 2, 1) }}</span> 天神物质之后，
            您之天神物质<i>三度</i>遭软上限所制。
            <br>
            当前，超此数额之天神物质正被开方为
            <span :class="instabilityClassObject()">{{ format(1 / massOverflowMag, 2, 3) }}</span> 次方。
            <br>
            天神物质之腐化，全凭您之天神物质腐化量级而定，其值现为
            <span :class="instabilityClassObject()">{{ format(massOverflowMag, 2, 3) }}</span>。
          </div>
        </p>
      </div>
      <div v-if="hasRemnant">
        阿尔法衰变之余烬正将所有天神维度开方为
        <span class="c-celestial-dim-description__accent-unstable">{{ format(alphaDecayRemnant, 2, 3) }}</span> 次方，
        于本次天神无限内，将于 {{ timeToCapText }} 之内渐进至 {{ formatInt(1) }} 之上限。
      </div>
      <div>
        所有天神维度可购买至 {{ format(totalDimCap, 2, 2) }} 天神点数。
      </div>
      <div>您每秒获得 {{ format(matterPerSecond, 2, 0) }} {{ incomeType }}。</div>
    </div>
    <div v-if="canCrunch && !isBroken">
      <br>
      <button
        :class="{
          'btn-celestial-crunch': true
        }"
        @click="celestialCrunch"
      >
        天神坍缩
      </button>
      <br>
      <br>
    </div>
    <CelestialTickspeedRow v-if="isExpanded"/>
    <div class="l-dimensions-container">
      <CelestialDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
    <div
      v-if="isExpanded"
      class="resets-container"
    >
      <CelestialDimensionBoostRow v-if="isExpanded"/>
      <CelestialGalaxyRow v-if="isExpanded"/>
    </div>
    <div v-if="showLockedDimCostNote">
      按住 Shift 可查看未解锁天神维度的天神点数消耗。
    </div>
  </div>
</template>

<style scoped>
.c-celestial-infinity-text {
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(var(--color-infinity), var(--color-celestials));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-celestial-eternity-text {
  font-size: 3.5rem;
  font-weight: bold;
  background: linear-gradient(var(--color-eternity), var(--color-celestials));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}
</style>
