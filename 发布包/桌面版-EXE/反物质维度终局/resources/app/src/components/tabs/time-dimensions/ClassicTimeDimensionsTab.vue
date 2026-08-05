<script>
import PrimaryButton from "@/components/PrimaryButton";
import TimeDimensionRow from "./ClassicTimeDimensionRow";

export default {
  name: "ClassicTimeDimensionsTab",
  components: {
    PrimaryButton,
    TimeDimensionRow
  },
  data() {
    return {
      totalUpgrades: new Decimal(0),
      multPerTickspeed: 0,
      tickspeedSoftcap: 0,
      timeShards: new Decimal(0),
      upgradeThreshold: new Decimal(0),
      shardsPerSecond: new Decimal(0),
      incomeType: "",
      areAutobuyersUnlocked: false,
      showLockedDimCostNote: true,
      hasCap: true
    };
  },
  computed: {
    costIncreases: () => TimeDimension(1).costIncreaseThresholds,
  },
  methods: {
    update() {
      this.showLockedDimCostNote = !TimeDimension(8).isUnlocked && player.realities.gte(1);
      this.totalUpgrades.copyFrom(player.totalTickGained);
      this.multPerTickspeed = FreeTickspeed.multToNext;
      this.tickspeedSoftcap = FreeTickspeed.softcap;
      this.timeShards.copyFrom(Currency.timeShards);
      this.upgradeThreshold.copyFrom(FreeTickspeed.fromShards(Currency.timeShards.value).nextShards);
      this.shardsPerSecond.copyFrom(TimeDimension(1).productionPerRealSecond);
      this.incomeType = EternityChallenge(7).isRunning ? "第八无限维度" : "时间碎片";
      this.areAutobuyersUnlocked = Autobuyer.timeDimension(1).isUnlocked;
      this.hasCap = Alpha.currentStage < 11 || player.disablePostReality;
    },
    maxAll() {
      tryUnlockTimeDimensions();
      maxAllTimeDimensions();
    },
    toggleAllAutobuyers() {
      toggleAllTimeDims();
    }
  }
};
</script>

<template>
  <div class="l-time-dim-tab l-centered-vertical-tab">
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        @click="maxAll"
      >
        全部购买
      </PrimaryButton>
      <PrimaryButton
        v-if="areAutobuyersUnlocked"
        class="o-primary-btn--subtab-option"
        @click="toggleAllAutobuyers"
      >
        切换所有自动购买器
      </PrimaryButton>
    </div>
    <div>
      <p>
        你已从
        <span class="c-time-dim-description__accent">{{ format(timeShards, 2, 1) }}</span> 时间碎片中获得
        <span class="c-time-dim-description__accent">{{ formatHybridLarge(totalUpgrades, 3) }}</span> 次 Tickspeed 升级。
      </p>
      <p>
        下一次 Tickspeed 升级在
        <span class="c-time-dim-description__accent">{{ format(upgradeThreshold, 2, 1) }}</span>，每获得一次
        Tickspeed 升级增加
        <span class="c-time-dim-description__accent">{{ formatX(multPerTickspeed, 2, 2) }}</span>。
      </p>
    </div>
    <div>
      每多一次升级所需数量将在超过
      {{ formatHybridLarge(tickspeedSoftcap, 3) }} 次 Tickspeed 升级后开始增加。
    </div>
    <div>
      你每秒获得 {{ format(shardsPerSecond, 2, 0) }} {{ incomeType }}。
    </div>
    <div class="l-dimensions-container">
      <TimeDimensionRow
        v-for="tier in 8"
        :key="tier"
        :tier="tier"
        :are-autobuyers-unlocked="areAutobuyersUnlocked"
      />
    </div>
    <div>
      时间维度花费在 {{ format(costIncreases[0], 2, 2) }} 和
      {{ format(costIncreases[1]) }} 永恒点数时跃升，
      <br>
      并在 {{ format(costIncreases[2]) }} 永恒点数后花费增长更快。
      <br>
      <div v-if="showLockedDimCostNote">
        按住 Shift 键可查看已锁定时间维度的永恒点数花费。
      </div>
      <div v-if="hasCap">
        购买超过 {{ format(1e8) }} 的第八时间维度将不再增加倍数。
      </div>
    </div>
  </div>
</template>
