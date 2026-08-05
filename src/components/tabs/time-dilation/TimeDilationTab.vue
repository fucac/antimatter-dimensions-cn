<script>
import DilationButton from "./DilationButton";
import DilationUpgradeButton from "./DilationUpgradeButton";

export default {
  name: "TimeDilationTab",
  components: {
    DilationButton,
    DilationUpgradeButton
  },
  data() {
    return {
      tachyons: new Decimal(),
      dilatedTime: new Decimal(),
      dilatedTimeIncome: new Decimal(),
      galaxyThreshold: new Decimal(),
      baseGalaxies: new Decimal(),
      totalGalaxies: new Decimal(),
      tachyonGalaxyGain: 1,
      hasPelleDilationUpgrades: false,
      galaxyTimeEstimate: "",
      maxDT: new Decimal(),
      toMaxTooltip: "",
      isHovering: false,
      isEndgameUnlocked: false,
      scaleStart: new Decimal(),
      viewSoftcap: false,
      softcapStart: new Decimal()
    };
  },
  computed: {
    rebuyables() {
      return [
        DilationUpgrade.dtGain,
        DilationUpgrade.galaxyThreshold,
        DilationUpgrade.tachyonGain
      ];
    },
    upgrades() {
      return [
        [
          DilationUpgrade.doubleGalaxies,
          DilationUpgrade.tdMultReplicanti,
          DilationUpgrade.ndMultDT
        ],
        [
          DilationUpgrade.ipMultDT,
          DilationUpgrade.timeStudySplit,
          DilationUpgrade.dilationPenalty
        ],
      ];
    },
    // This might be negative due to rift drain, so we need to add "+" iff the value is positive. The actual
    // addition of a negative sign (or not) is assumed to be handled in a notation-specific way
    dilatedTimeGainText() {
      const sign = this.dilatedTimeIncome.gte(0) ? "+" : "";
      return `${sign}${format(this.dilatedTimeIncome, 2, 1)}`;
    },
    pelleRebuyables() {
      return [
        DilationUpgrade.dtGainPelle,
        DilationUpgrade.galaxyMultiplier,
        DilationUpgrade.tickspeedPower
      ];
    },
    pelleUpgrades() {
      return [
        DilationUpgrade.galaxyThresholdPelle,
        DilationUpgrade.flatDilationMult
      ];
    },
    ttGenerator() {
      return DilationUpgrade.ttGenerator;
    },
    baseGalaxyText() {
      return `${formatHybridLarge(this.baseGalaxies, 3)} 基础`;
    },
    hasMaxText: () => PlayerProgress.realityUnlocked() && !Pelle.isDoomed,
    allRebuyables() {
      const upgradeRows = [];
      upgradeRows.push(this.rebuyables);
      if (this.hasPelleDilationUpgrades) upgradeRows.push(this.pelleRebuyables);
      return upgradeRows;
    },
    allSingleUpgrades() {
      const upgradeRows = [];
      upgradeRows.push(...this.upgrades);
      if (this.hasPelleDilationUpgrades) upgradeRows.push(this.pelleUpgrades);
      upgradeRows.push([this.ttGenerator]);
      return upgradeRows;
    },
  },
  methods: {
    update() {
      this.tachyons.copyFrom(Currency.tachyonParticles);
      this.dilatedTime.copyFrom(Currency.dilatedTime);
      const rawDTGain = getDilationGainPerSecond();
      this.galaxyTimeEstimate = getDilationTimeEstimate(this.galaxyThreshold);
      if (PelleRifts.paradox.isActive) {
        // The number can be small and either positive or negative with the rift active, which means that extra care
        // needs to be taken to get the calculation as close to correct as possible. This relies on some details
        // related to tick microstructure to make things accurate, and it seems to be to roughly 1 part in 5e6
        const tickProp = player.options.updateRate / 1000;
        const drainFactorPerTick = 1 - (1 - Pelle.riftDrainPercent) ** tickProp;
        const drainPerSecond = this.dilatedTime.add(rawDTGain.times(tickProp)).times(drainFactorPerTick / tickProp);
        this.dilatedTimeIncome = rawDTGain.minus(drainPerSecond);
      } else {
        this.dilatedTimeIncome = rawDTGain;
      }
      this.galaxyThreshold.copyFrom(player.dilation.nextThreshold);
      this.baseGalaxies.copyFrom(player.dilation.baseTachyonGalaxies);
      this.totalGalaxies.copyFrom(player.dilation.totalTachyonGalaxies);
      this.hasPelleDilationUpgrades = PelleRifts.paradox.milestones[0].canBeApplied;
      if (this.baseGalaxies.lt(500) && DilationUpgrade.doubleGalaxies.isBought) {
        this.tachyonGalaxyGain = DilationUpgrade.doubleGalaxies.effectValue;
      } else {
        this.tachyonGalaxyGain = 1;
      }
      this.tachyonGalaxyGain *= DilationUpgrade.galaxyMultiplier.effectValue;
      this.maxDT.copyFrom(player.records.thisReality.maxDT);

      const estimateText = getDilationTimeEstimate(this.maxDT);
      if (this.dilatedTimeIncome.lte(0)) this.toMaxTooltip = "无膨胀时间获取";
      else this.toMaxTooltip = estimateText.startsWith("<") ? "正在增长中" : estimateText;

      this.isEndgameUnlocked = PlayerProgress.endgameUnlocked();
      this.scaleStart.copyFrom(DilationUpgradeScaling.PRIMARY_SCALING);
      this.viewSoftcap = this.maxDT.gte(this.softcapStart);
      this.softcapStart.copyFrom(DilationSoftcapStart.PRIMARY_THRESHOLD());
    }
  }
};
</script>

<template>
  <div class="l-dilation-tab">
    <span>
      你拥有
      <span class="c-dilation-tab__tachyons">{{ format(tachyons, 2, 1) }}</span>
      个超光速粒子。
    </span>
    <div
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <DilationButton />
    </div>
    <span>
      你拥有
      <span class="c-dilation-tab__dilated-time">{{ format(dilatedTime, 2, 1) }}</span>
      膨胀时间。
      <span class="c-dilation-tab__dilated-time-income">{{ dilatedTimeGainText }}/秒</span>
    </span>
    <span>
      下
      <span v-if="tachyonGalaxyGain > 1">{{ formatHybridLarge(tachyonGalaxyGain, 3) }}</span>
      个超光速星系需要
      <span
        class="c-dilation-tab__galaxy-threshold"
        :ach-tooltip="galaxyTimeEstimate"
      >{{ format(galaxyThreshold, 2, 1) }}</span>
      膨胀时间，已获得总计
      <span
        class="c-dilation-tab__galaxies"
        :ach-tooltip="baseGalaxyText"
      >{{ formatHybridLarge(totalGalaxies, 3) }}</span>
      个超光速星系
    </span>
    <span v-if="hasMaxText">
      本次现实你达到的最大膨胀时间为
      <span
        v-tooltip="toMaxTooltip"
        class="max-accent"
      >{{ format(maxDT, 2, 1) }}</span>。
    </span>
    <span v-if="isEndgameUnlocked">
      超过 {{ format(scaleStart, 2, 1) }} 膨胀时间后，所有可重复购买的膨胀时间升级将加速缩放。
    </span>
    <span v-if="viewSoftcap">
      膨胀时间已被软上限。此效果自 {{ format(softcapStart, 2, 1) }} 膨胀时间起生效。
    </span>
    <div class="l-dilation-upgrades-grid">
      <div
        v-for="(upgradeRow, row) in allRebuyables"
        :key="'rebuyable' + row"
        class="l-dilation-upgrades-grid__row"
      >
        <DilationUpgradeButton
          v-for="upgrade in upgradeRow"
          :key="upgrade.id"
          :upgrade="upgrade"
          :is-rebuyable="true"
          class="l-dilation-upgrades-grid__cell"
          :show-tooltip="isHovering"
        />
      </div>
      <div
        v-for="(upgradeRow, row) in allSingleUpgrades"
        :key="'single' + row"
        class="l-dilation-upgrades-grid__row"
      >
        <DilationUpgradeButton
          v-for="upgrade in upgradeRow"
          :key="upgrade.id"
          :upgrade="upgrade"
          :is-rebuyable="false"
          class="l-dilation-upgrades-grid__cell"
          :show-tooltip="isHovering"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-accent {
  color: var(--color-dilation);
  font-size: 1.5rem;
  text-shadow: 0 0 0.2rem var(--color-reality-dark);
  cursor: default;
}

.l-dilation-upgrades-grid {
  display: flex;
  flex-direction: column;
}

.l-dilation-upgrades-grid__row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.l-dilation-upgrades-grid__cell {
  margin: 1.2rem 1.5rem;
}
</style>
