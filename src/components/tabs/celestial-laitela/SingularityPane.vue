<script>
export default {
  name: "SingularityPane",
  data() {
    return {
      darkEnergy: new Decimal(),
      darkEnergyGainPerSecond: new Decimal(),
      singularities: new Decimal(),
      singularityCapIncreases: new Decimal(),
      canPerformSingularity: false,
      unlockedBulkSingularity: false,
      singularityCap: new Decimal(),
      baseTimeToSingularity: new Decimal(),
      currentTimeToSingularity: new Decimal(),
      extraTimeAfterSingularity: new Decimal(),
      singularitiesGained: new Decimal(),
      autoSingularityFactor: 0,
      perStepFactor: new Decimal(),
      isAutoEnabled: false,
      hasAutoSingularity: false,
      nextLowerStep: new Decimal(),
      willCondenseOnDecrease: false,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed && !PelleDestructionUpgrade.singularityMilestones.canBeApplied,
    singularityFormText() {
      const formText = this.singularitiesGained.eq(1) ? "所有暗能量为一奇点"
        : `所有暗能量为 ${quantify("奇点", this.singularitiesGained, 2)}`;
      if (this.canPerformSingularity) {
        return `凝缩${formText}`;
      }
      return `需达 ${format(this.singularityCap)} 暗能量方可凝缩${formText}`;
    },
    singularityWaitText() {
      let singularityTime = this.currentTimeToSingularity;
      if (this.canPerformSingularity) {
        singularityTime = singularityTime.add(this.extraTimeAfterSingularity);
        if (!this.isAutoEnabled) return "";
        return singularityTime.gt(0)
          ? `（将于 ${TimeSpan.fromSeconds(new Decimal(singularityTime)).toStringShort()} 后自动凝缩）`
          : "（将立即自动凝缩）";
      }
      return `（将于 ${TimeSpan.fromSeconds(new Decimal(singularityTime)).toStringShort()} 后蓄满暗能量）`;
    },
    baseSingularityTime() {
      return TimeSpan.fromSeconds(new Decimal(this.baseTimeToSingularity)).toStringShort();
    },
    additionalSingularityTime() {
      return TimeSpan.fromSeconds(new Decimal(this.extraTimeAfterSingularity)).toStringShort();
    },
    manualSingularityRate() {
      const totalTime = this.baseTimeToSingularity;
      return this.formatRate(this.singularitiesGained.div(totalTime));
    },
    autoSingularityRate() {
      if (this.hasAutoSingularity && !this.isAutoEnabled) return "自动奇点已关闭";
      const totalTime = this.baseTimeToSingularity.add(this.extraTimeAfterSingularity);
      return this.formatRate(this.singularitiesGained.div(totalTime));
    },
    decreaseTooltip() {
      if (this.singularityCapIncreases.eq(0)) return "上限已无法再降低！";
      const singularities = this.singularitiesGained.div(this.perStepFactor);
      return this.willCondenseOnDecrease
        ? `降低上限将立即自动凝缩得
          ${quantify("奇点", singularities, 2)}！`
        : null;
    },
    increaseTooltip() {
      return this.singularityCapIncreases.gte(5e11)
        ? `超过 5e11 之上限更为强效。${formatX(Decimal.pow10(new Decimal(this.singularityCapIncreases.log(10)).sub(10).floor()), 2, 2)}`
        : null;
    }
  },
  methods: {
    update() {
      const laitela = player.celestials.laitela;
      this.darkEnergy.copyFrom(Currency.darkEnergy.value);
      this.darkEnergyGainPerSecond.copyFrom(Currency.darkEnergy.productionPerSecond);
      this.singularities.copyFrom(Currency.singularities.value);
      this.singularityCapIncreases.copyFrom(laitela.singularityCapIncreases);
      this.canPerformSingularity = Singularity.capIsReached;
      this.unlockedBulkSingularity = Currency.singularities.gte(10);
      this.singularityCap.copyFrom(Singularity.cap);
      this.baseTimeToSingularity.copyFrom(Singularity.timePerCondense);
      this.currentTimeToSingularity.copyFrom(Singularity.timeUntilCap);
      this.extraTimeAfterSingularity.copyFrom(Singularity.timeDelayFromAuto);
      this.singularitiesGained.copyFrom(Singularity.singularitiesGained);
      this.autoSingularityFactor = SingularityMilestone.autoCondense.effectOrDefault(Infinity);
      this.perStepFactor.copyFrom(Singularity.gainPerCapIncrease);
      this.isAutoEnabled = player.auto.singularity.isActive && SingularityMilestone.autoCondense.canBeApplied;
      this.hasAutoSingularity = Number.isFinite(this.autoSingularityFactor);
      this.nextLowerStep.copyFrom(this.singularityCap.mul(this.autoSingularityFactor).div(10));
      this.willCondenseOnDecrease = this.isAutoEnabled && this.darkEnergy.gt(this.nextLowerStep);
    },
    doSingularity() {
      Singularity.perform();
    },
    increaseCap() {
      Singularity.increaseCap();
    },
    decreaseCap() {
      Singularity.decreaseCap();
    },
    formatRate(rate) {
      if (rate.lt(1 / 60)) return `每小时 ${format(rate.mul(3600), 2, 3)}`;
      if (rate.lt(1)) return `每分钟 ${format(rate.mul(60), 2, 3)}`;
      return `每秒 ${format(rate, 2, 3)}`;
    },
    condenseClassObject() {
      return {
        "c-laitela-singularity": true,
        "c-laitela-singularity--active": this.canPerformSingularity && !this.isDoomed,
        "o-pelle-disabled": this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed,
      };
    }
  }
};
</script>

<template>
  <div class="c-laitela-singularity-container">
    <div>
      <h2>
        您拥有 {{ quantify("奇点", singularities, 2) }}
      </h2>
      <button
        :class="condenseClassObject()"
        @click="doSingularity"
      >
        <h2>
          {{ singularityFormText }}
        </h2>
        <br v-if="singularityWaitText !== ''">
        <h2>
          {{ singularityWaitText }}
        </h2>
      </button>
    </div>
    <div v-if="singularities.neq(0)">
      <div class="o-laitela-matter-amount">
        您拥有 {{ format(darkEnergy, 2, 4) }} 暗能量。（+{{ format(darkEnergyGainPerSecond, 2, 4) }}/s）
      </div>
      <div v-if="unlockedBulkSingularity">
        <button
          class="c-laitela-singularity__cap-control"
          :class="{ 'c-laitela-singularity__cap-control--available' : singularityCapIncreases.gt(0) }"
          :ach-tooltip="decreaseTooltip"
          @click="decreaseCap"
        >
          降低奇点上限。
        </button>
        <button
          class="c-laitela-singularity__cap-control"
          :class="{ 'c-laitela-singularity__cap-control--available' : true }"
          :ach-tooltip="increaseTooltip"
          @click="increaseCap"
        >
          提升奇点上限。
        </button>
        <br>
        每阶使所需暗能量提升 {{ formatX(10) }}，
        <br>
        然亦使所得奇点提升 {{ formatX(perStepFactor) }}。
      </div>
      <div v-else>
        <br>
        达 {{ format(10) }} 奇点
        <br>
        以解锁批量奇点。
        <br>
      </div>
      <br>
      <span v-if="hasAutoSingularity">（自动）</span>凝缩总耗时：
      {{ baseSingularityTime }}
      <span v-if="hasAutoSingularity && autoSingularityFactor !== 1">
        （+{{ additionalSingularityTime }}）
      </span>
      <br>
      <span v-if="hasAutoSingularity && autoSingularityFactor !== 1">手动</span>
      奇点获取速率：{{ manualSingularityRate }}
      <br>
      <span v-if="hasAutoSingularity && autoSingularityFactor !== 1">
        自动奇点获取速率：{{ autoSingularityRate }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.c-laitela-singularity__cap-control {
  margin: 0 0.3rem 1rem;
}
</style>
