// This is supposed to be in ./navigation.js but importing doesn't work for some stupid reason
// progress should always return number, even if it will return infinity
function emphasizeEnd(fraction) {
  return Decimal.pow(fraction, 10).toNumber();
}

function rebuyableCost(initialCost, increment, id) {
  return initialCost * Math.pow(increment, player.celestials.v.upgrades[id]);
}

function rebuyable(config) {
  const { id, cap, costCap, description, formatEffect, formatCost } = config;
  return {
    id,
    cost: () => rebuyableCost(config.initialCost, config.increment, config.id),
    cap,
    costCap,
    description,
    effect: () => config.effect(player.celestials.v.upgrades[config.id]),
    formatEffect,
    formatCost,
    rebuyable: true
  };
}

export const V_REDUCTION_MODE = {
  SUBTRACTION: 1,
  DIVISION: 2
};

export const v = {
  // Note: mainUnlock IDs here are one-indexed to match with navigation indices
  mainUnlock: {
    realities: {
      id: 1,
      name: "现实",
      resource: () => Currency.realities.value,
      requirement: 1250,
      format: x => formatInt(x),
      progress: () => new Decimal(Currency.realities.value).div(EndgameMastery(51).effectOrDefault(1250)).toNumber(),
    },
    eternities: {
      id: 2,
      name: "永恒",
      resource: () => Currency.eternities.value,
      requirement: 1e70,
      format: x => format(x, 2),
      progress: () => emphasizeEnd(Currency.eternities.value.add(1).pLog10().div(70)),
    },
    infinities: {
      id: 3,
      name: "无限",
      resource: () => Currency.infinitiesTotal.value,
      requirement: 1e160,
      format: x => format(x, 2),
      progress: () => emphasizeEnd(Currency.infinitiesTotal.value.add(1).pLog10().div(160)),
    },
    dilatedTime: {
      id: 4,
      name: "膨胀时间",
      resource: () => player.records.thisReality.maxDT,
      requirement: DC.E320,
      format: x => format(x, 2),
      progress: () => emphasizeEnd(player.records.thisReality.maxDT.add(1).pLog10().div(320)),
    },
    replicanti: {
      id: 5,
      name: "复制器",
      resource: () => player.records.thisReality.maxReplicanti,
      requirement: DC.E320000,
      format: x => format(x, 2),
      progress: () => emphasizeEnd(player.records.thisReality.maxReplicanti.add(1).pLog10().div(320000)),
    },
    realityMachines: {
      id: 6,
      name: "现实机器",
      resource: () => Currency.realityMachines.value,
      requirement: 1e60,
      format: x => format(x, 2),
      progress: () => emphasizeEnd(Currency.realityMachines.value.add(1).pLog10().div(60)),
    },
  },
  runUnlocks: [
    {
      id: 0,
      name: "符文骑士",
      description: value => `以至多${quantifyInt("符文", -value)}装备解锁现实。`,
      // This achievement has internally negated values since the check is always greater than
      values: [-5, -4, -3, -2, -1, 0],
      condition: () => V.isRunning && TimeStudy.reality.isBought,
      currentValue: () => new Decimal(-Glyphs.activeWithoutCompanion.length),
      formatRecord: x => (x.gte(-5) ? formatInt(x.neg()) : "未达成"),
      shardReduction: () => 0,
      maxShardReduction: () => 0,
      mode: V_REDUCTION_MODE.SUBTRACTION
    },
    {
      id: 1,
      name: "反星穿越",
      description: value => `拥有${formatInt(value)}总数之各型星系。`,
      values: [4000, 4300, 4600, 4900, 5200, 5500],
      condition: () => V.isRunning,
      currentValue: () => GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(
        player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)) : Replicanti.galaxies.total.add(player.galaxies).add(
        player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies),
      formatRecord: x => formatHybridLarge(x, 3),
      shardReduction: tiers => Math.floor(300 * tiers),
      maxShardReduction: goal => goal - 4000,
      perReductionStep: 3,
      mode: V_REDUCTION_MODE.SUBTRACTION
    },
    {
      id: 2,
      name: "七质罪",
      description: value => `于永恒挑战7中获得${format(Decimal.pow10(value))}无限点数。`,
      values: [6e5, 7.2e5, 8.4e5, 9.6e5, 1.08e6, 1.2e6],
      condition: () => V.isRunning && EternityChallenge(7).isRunning,
      currentValue: () => Currency.infinityPoints.value.add(1).log10(),
      formatRecord: x => format(Decimal.pow10(x), 2),
      shardReduction: tiers => 1.2e5 * tiers,
      maxShardReduction: goal => goal - 6e5,
      perReductionStep: DC.E1200,
      mode: V_REDUCTION_MODE.DIVISION
    },
    {
      id: 3,
      name: "少年郎",
      description: value => `于永恒挑战12中获得${format(Decimal.pow10(value))}反物质，且未解锁时间膨胀。`,
      values: [400e6, 450e6, 500e6, 600e6, 700e6, 800e6],
      condition: () => V.isRunning && EternityChallenge(12).isRunning && !PlayerProgress.dilationUnlocked(),
      currentValue: () => Currency.antimatter.value.add(1).log10(),
      formatRecord: x => format(Decimal.pow10(x)),
      shardReduction: tiers => 50e6 * tiers,
      maxShardReduction: goal => goal - 400e6,
      perReductionStep: DC.E500000,
      mode: V_REDUCTION_MODE.DIVISION
    },
    {
      id: 4,
      name: "永恒阳光",
      description: value => `获得${format(Decimal.pow10(value))}永恒点数。`,
      values: [7000, 7600, 8200, 8800, 9400, 10000],
      condition: () => V.isRunning,
      currentValue: () => Currency.eternityPoints.value.add(1).log10(),
      formatRecord: x => format(Decimal.pow10(x), 2),
      shardReduction: tiers => 600 * tiers,
      maxShardReduction: goal => goal - 7000,
      perReductionStep: 1e6,
      mode: V_REDUCTION_MODE.DIVISION
    },
    {
      id: 5,
      name: "盗物空间",
      description: value => `于时间膨胀中且在永恒挑战5内时，获得${formatInt(value)}维度提升。`,
      values: [51, 52, 53, 54, 55, 56],
      condition: () => V.isRunning && player.dilation.active && EternityChallenge(5).isRunning,
      currentValue: () => DimBoost.purchasedBoosts,
      formatRecord: x => formatHybridLarge(x, 3),
      shardReduction: tiers => Math.floor(tiers),
      maxShardReduction: () => 5,
      reductionStepSize: 100,
      perReductionStep: 1,
      mode: V_REDUCTION_MODE.SUBTRACTION
    },
    {
      id: 6,
      name: "符文安魂曲",
      description: value => `以全程至多${formatInt(-value)}符文装备解锁现实。`,
      // This achievement has internally negated values since the check is always greater than
      values: [1, 4, 7, 10, 13],
      condition: () => V.isRunning && TimeStudy.reality.isBought,
      currentValue: () => new Decimal(-player.requirementChecks.reality.maxGlyphs),
      formatRecord: x => formatInt(x.neg()),
      shardReduction: () => 0,
      maxShardReduction: () => 0,
      mode: V_REDUCTION_MODE.SUBTRACTION,
      isHard: true
    },
    {
      id: 7,
      name: "后途",
      description: value => `以${formatInt(400000)}时间定理、/${format(Decimal.pow10(value), 2, 2)}或更慢之黑洞达成，期间不得释放或进入永恒挑战12。`,
      values: [100, 150, 200, 250, 300],
      condition: () => V.isRunning,
      currentValue: () => new Decimal(
        // Dirty hack I know lmao
        Currency.timeTheorems.gte(400000)
          ? -Math.log10(player.requirementChecks.reality.slowestBH)
          : 0),
      formatRecord: x => `${formatInt(1)} / ${format(Decimal.pow(10, x))}`,
      shardReduction: tiers => 50 * tiers,
      maxShardReduction: goal => goal - 50,
      reductionStepSize: 2,
      perReductionStep: 10,
      mode: V_REDUCTION_MODE.DIVISION,
      isHard: true
    },
    {
      id: 8,
      name: "快门符文",
      description: value => `达成等级${formatInt(value)}之符文。`,
      values: [6500, 7000, 8000, 9000, 10000],
      condition: () => V.isRunning,
      currentValue: () => new Decimal(gainedGlyphLevel().actualLevel),
      formatRecord: x => formatHybridLarge(x, 3),
      shardReduction: tiers => Math.floor(500 * tiers),
      maxShardReduction: () => 500,
      perReductionStep: 5,
      mode: V_REDUCTION_MODE.SUBTRACTION,
      isHard: true
    }
  ],
  unlocks: {
    vAchievementUnlock: {
      id: 0,
      reward: "解锁薇，成就之天神",
      description: "同时满足以上所有要求",
      requirement: () => Object.values(GameDatabase.celestials.v.mainUnlock).every(e => e.progress() >= 1)
    },
    shardReduction: {
      id: 1,
      reward: `可消耗复兴点数降低每项薇成就各级之目标要求。`,
      description: () => `拥有${formatInt(2)}项薇成就`,
      requirement: () => V.spaceTheorems >= 2,
      pelleDisabled: () => !PelleCelestialUpgrade.vMilestones1.canBeApplied
    },
    adPow: {
      id: 2,
      reward: "基于空间定理总量提升反物质维度之力。",
      description: () => `拥有${formatInt(5)}项薇成就`,
      effect: () => player.disablePostReality ? 1 : 1 + Math.sqrt(V.spaceTheorems) / 80,
      format: x => formatPow(x, 3, 3),
      requirement: () => V.spaceTheorems >= 5,
      pelleDisabled: () => !PelleCelestialUpgrade.vMilestones1.canBeApplied
    },
    fastAutoEC: {
      id: 3,
      reward: "成就倍率缩短自动永恒挑战完成时间。",
      description: () => `拥有${formatInt(10)}项薇成就`,
      effect: () => player.disablePostReality ? 1 : Achievements.power,
      // Base rate is 60 ECs at 20 minutes each
      format: x => ((Ra.unlocks.instantECAndRealityUpgradeAutobuyers.canBeApplied || EndgameMastery(53).isBought) && !player.disablePostReality
        ? "瞬发（太阳神升级）"
        : `${TimeSpan.fromMinutes(new Decimal(60).times(20).div(x)).toStringShort()} 完成全部`),
      requirement: () => V.spaceTheorems >= 10,
      pelleDisabled: () => !PelleCelestialUpgrade.vMilestones2.canBeApplied
    },
    autoAutoClean: {
      id: 4,
      reward: "解锁现实时自动净化符文之能。",
      description: () => `拥有${formatInt(16)}项薇成就`,
      requirement: () => V.spaceTheorems >= 16,
      pelleDisabled: () => !PelleCelestialUpgrade.vMilestones2.canBeApplied
    },
    achievementBH: {
      id: 5,
      reward: "成就倍率影响黑洞强度。",
      description: () => `拥有${formatInt(30)}项薇成就`,
      effect: () => player.disablePostReality ? 1 : Achievements.power,
      format: x => formatX(x, 2, 0),
      requirement: () => V.spaceTheorems >= 30,
      pelleDisabled: () => !PelleCelestialUpgrade.vMilestones3.canBeApplied
    },
    raUnlock: {
      id: 6,
      reward() {
        return `将时间研究之空间定理消耗降低${formatInt(2)}。
                解锁太阳神，遗忘之天神。`;
      },
      description: () => `拥有${formatInt(36)}项薇成就`,
      effect: 2,
      requirement: () => V.spaceTheorems >= 36,
      pelleDisabled: () => !PelleCelestialUpgrade.vMilestones3.canBeApplied
    }
  }
};

export const vUpgrades = {
  auto: rebuyable({
    id: 0,
    initialCost: 1e80,
    increment: 1e5,
    description: () => `缩短自动完成薇成就之时间`,
    effect: bought => 60 / Math.pow(2, bought),
    formatEffect: value => value <= 0.03 ? "瞬发" : TimeSpan.fromMilliseconds(new Decimal(value * 1000)).toStringShort(),
    formatCost: value => format(value, 2),
    costCap: 1e135,
    cap: Number.MAX_VALUE
  }),
};
