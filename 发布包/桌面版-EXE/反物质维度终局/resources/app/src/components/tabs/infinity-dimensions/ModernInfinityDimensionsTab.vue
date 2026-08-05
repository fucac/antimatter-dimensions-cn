<script>
import InfinityDimensionRow from "./ModernInfinityDimensionRow";
import PrimaryButton from "@/components/PrimaryButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "ModernInfinityDimensionsTab",
  components: {
    PrimaryButton,
    PrimaryToggleButton,
    InfinityDimensionRow
  },
  data() {
    return {
      infinityPower: new Decimal(0),
      dimMultiplier: new Decimal(0),
      powerPerSecond: new Decimal(0),
      incomeType: "",
      isEC8Running: false,
      EC8PurchasesLeft: 0,
      isEC9Running: false,
      isEnslavedRunning: false,
      isAnyAutobuyerUnlocked: false,
      conversionRate: 0,
      nextDimCapIncrease: new Decimal(0),
      tesseractCost: new Decimal(0),
      totalDimCap: new Decimal(0),
      canBuyTesseract: false,
      enslavedCompleted: false,
      boughtTesseracts: 0,
      extraTesseracts: 0,
      creditsClosed: false,
      showLockedDimCostNote: true,
      isEndgameUnlocked: false,
      infinityDimCompressionMagnitude: 0,
      infinityDimOverflow: 0,
      infinityDimStart: new Decimal(0),
      infinityDimCompressionMagnitude2: 0,
      infinityDimOverflow2: 0,
      infinityDimStart2: new Decimal(0),
      hasSecond: false,
      freeTesseractSoftcap: 0,
      freeTesseractHardcap: 0,
      isAutoUnlocked: false,
      isAutoActive: false,
      isAlphaDestroyed: false,
    };
  },
  computed: {
    tesseractCountString() {
      const extra = this.extraTesseracts > 0 ? ` + ${format(this.extraTesseracts, 2, 2)}` : "";
      return `${formatHybridSmall(this.boughtTesseracts, 3)}${extra}`;
    },
    autobuyer() {
      return Autobuyer.tesseract;
    },
    autobuyerTextDisplay() {
      const auto = this.isAutoActive;
      return `自动超立方体 ${auto ? "开" : "关"}`;
    },
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !InfinityDimension(8).isUnlocked;
      this.isEC9Running = EternityChallenge(9).isRunning;
      this.infinityPower.copyFrom(Currency.infinityPower);
      this.conversionRate = InfinityDimensions.powerConversionRate;
      if (this.isEC9Running) {
        this.dimMultiplier.copyFrom(Decimal.pow(Decimal.max(this.infinityPower.add(1).log2(), 1), 4).max(1));
      } else {
        this.dimMultiplier.copyFrom(this.infinityPower.pow(this.conversionRate).max(1));
      }
      this.powerPerSecond.copyFrom(InfinityDimension(1).productionPerSecond);
      this.incomeType = EternityChallenge(7).isRunning ? "第七维度" : "无限之力";
      this.isEC8Running = EternityChallenge(8).isRunning;
      if (this.isEC8Running) {
        this.EC8PurchasesLeft = player.eterc8ids;
      }
      this.isEnslavedRunning = Enslaved.isRunning;
      this.isAnyAutobuyerUnlocked = Autobuyer.infinityDimension(1).isUnlocked;
      this.nextDimCapIncrease.copyFrom(Tesseracts.nextTesseractIncrease);
      this.tesseractCost.copyFrom(Tesseracts.nextCost);
      this.totalDimCap.copyFrom(InfinityDimensions.totalDimCap);
      this.canBuyTesseract = Tesseracts.canBuyTesseract;
      this.enslavedCompleted = Enslaved.isCompleted && !player.disablePostReality;
      this.boughtTesseracts = Tesseracts.bought * Tesseracts.totalMult;
      this.extraTesseracts = Tesseracts.extra * Tesseracts.totalMult;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.isEndgameUnlocked = PlayerProgress.endgameUnlocked();
      this.infinityDimCompressionMagnitude = InfinityDimensions.compressionMagnitude;
      this.infinityDimOverflow = 1 / this.infinityDimCompressionMagnitude;
      this.infinityDimStart = InfinityDimensions.OVERFLOW;
      this.infinityDimCompressionMagnitude2 = InfinityDimensions.compressionMag2;
      this.infinityDimOverflow2 = 1 / this.infinityDimCompressionMagnitude2;
      this.infinityDimStart2 = InfinityDimensions.OVERFLOW_SQUARED;
      this.hasSecond = Currency.infinityPower.gte(DC.ENUMMAX);
      this.freeTesseractSoftcap = Tesseracts.freeSoftcapStart;
      this.freeTesseractHardcap = this.freeTesseractSoftcap * 2;
      const auto = Autobuyer.tesseract;
      this.isAutoUnlocked = auto.isUnlocked;
      this.isAutoActive = auto.isActive;
      this.isAlphaDestroyed = Alpha.isDestroyed;
    },
    maxAll() {
      InfinityDimensions.buyMax();
    },
    toggleAllAutobuyers() {
      toggleAllInfDims();
    },
    buyTesseract() {
      Tesseracts.buyTesseract();
    },
    handleAutoToggle(value) {
      Autobuyer.tesseract.isActive = value;
      this.update();
    }
  }
};
</script>

<template>
  <div class="l-infinity-dim-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        v-if="!isEC8Running"
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        全部购买
      </PrimaryButton>
      <PrimaryButton
        v-if="isAnyAutobuyerUnlocked && !isEC8Running"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        切换所有自动购买器
      </PrimaryButton>
    </div>
    <div>
      <p>
        你拥有
        <span class="c-infinity-dim-description__accent">{{ format(infinityPower, 2, 1) }}</span>
        无限之力，
        <br>
        <span v-if="!isEC9Running">
          经
          <span class="c-infinity-dim-description__accent">{{ formatPow(conversionRate, 2, 3) }}</span>
        </span>
        <span v-else>
          转化
        </span>
        为
        <span class="c-infinity-dim-description__accent">{{ formatX(dimMultiplier, 2, 1) }}</span>
        倍数作用于所有
        <span v-if="!isEC9Running">反物质维度。</span>
        <span v-else>时间维度（因永恒挑战 9）。</span>
      </p>
    </div>
    <div>
      <p>
        <span v-if="isEndgameUnlocked">
          你的无限维度压缩量级为
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimCompressionMagnitude, 2, 3) }}</span>，
          它将所有无限维度倍数提升至
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimOverflow, 2, 3) }}</span>
          次方，当超过
          <span>{{ formatPostBreak(infinityDimStart, 2, 1) }}</span> 时生效。
        </span>
      </p>
    </div>
    <div>
      <p>
        <span v-if="hasSecond">
          你的无限维度压缩² 量级为
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimCompressionMagnitude2, 2, 3) }}</span>，
          它将所有无限维度倍数提升至
          <span class="c-infinity-dim-compression-description__accent">{{ format(infinityDimOverflow2, 2, 3) }}</span>
          次方，当超过
          <span>{{ formatPostBreak(infinityDimStart2, 2, 1) }}</span> 时生效。
        </span>
      </p>
    </div>
    <div
      v-if="enslavedCompleted"
      class="l-infinity-dim-tab__enslaved-reward-container"
    >
      <button
        class="c-infinity-dim-tab__tesseract-button"
        :class="{
          'c-infinity-dim-tab__tesseract-button--disabled': !canBuyTesseract,
          'o-pelle-disabled-pointer': creditsClosed
        }"
        @click="buyTesseract"
      >
        <p>
          购买超立方体（{{ tesseractCountString }}）
        </p>
        <p>维度上限提升 {{ format(nextDimCapIncrease, 2) }}</p>
        <p><b>花费：{{ format(tesseractCost) }} 无限点数</b></p>
      </button>
      <br>
      <PrimaryToggleButton
        v-if="isAutoUnlocked"
        :value="isAutoActive"
        :on="autobuyerTextDisplay"
        :off="autobuyerTextDisplay"
        class="l--spoon-btn-group__little-spoon o-primary-btn--tesseract-toggle"
        @input="handleAutoToggle"
      />
    </div>
    <div>
      免费超立方体在超过 {{ format(freeTesseractSoftcap, 2, 2) }} 后将受软上限影响。
      <div v-if="!isAlphaDestroyed">
        <br>
        此软上限使得超过 {{ format(freeTesseractSoftcap, 2, 2) }} 的超立方体永恒趋近于
        {{ format(freeTesseractHardcap, 2, 2) }} 的硬上限，却永不能真正触及。
      </div>
    </div>
    <div v-if="isEnslavedRunning">
      所有无限维度仅限购买一次。
    </div>
    <div v-else>
      除第八维度外，所有无限维度最多各购买 {{ format(totalDimCap, 2) }}
      次。
    </div>
    <div>你每秒获得 {{ format(powerPerSecond, 2, 0) }} {{ incomeType }}。</div>
    <b
      v-if="isEC8Running"
      class="l-infinity-dim-tab__ec8-purchases"
    >
      你在永恒挑战 8 中还剩 {{ quantifyInt("次购买", EC8PurchasesLeft) }}。
    </b>
    <div class="l-dimensions-container">
      <InfinityDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
      />
    </div>
    <div v-if="showLockedDimCostNote">
      按住 Shift 键可查看已锁定无限维度的无限点数花费。
    </div>
  </div>
</template>
