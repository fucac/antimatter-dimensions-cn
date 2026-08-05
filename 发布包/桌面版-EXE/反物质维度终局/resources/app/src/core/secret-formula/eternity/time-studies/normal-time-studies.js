const thisInfinityMult = thisInfinity => {
  // All "this inf time" or "best inf time" mults are * 10
  const scaledInfinity = thisInfinity.times(10).plus(1);
  const cappedInfinity = Decimal.min(Decimal.pow(scaledInfinity, 0.125), 500);
  return DC.D15.pow(cappedInfinity.times(Decimal.ln(scaledInfinity)));
};
const passiveIPMult = () => {
  const isEffarigLimited = Effarig.isRunning && Effarig.currentStage === EFFARIG_STAGES.ETERNITY;
  const normalValue = (Perk.studyPassive.isBought && !player.disablePostReality) ? 1e50 : 1e25;
  return isEffarigLimited
    ? Math.min(normalValue, Effarig.eternityCap.toNumber())
    : normalValue;
};


/**
 * List of time study specifications and attributes
 * {
 *  @property {Number} id                   Numerical ID shown for each time study in code and in-game
 *  @property {Number} cost                 Amount of available time theorems required to purchase
 *  @property {Number} STcost               Amount of available space theorems required to purchase if needed
 *  @property {Object[]} requirement   Array of Numbers or functions which are checked to determine purchasability
 *  @property {Number} reqType              Number specified by enum in TS_REQUIREMENT_TYPE for requirement behavior
 *  @property {Number[]} requiresST    Array of Numbers indicating which other studies will cause this particular
 *    study to also cost space theorems - in all cases this applies if ANY in the array are bought
 *  @property {function: @return String} description  Text to be shown in-game for the time study's effects
 *  @property {function: @return Number} effect       Numerical value for the effects of a study
 *  @property {String[]} cap     Hard-coded cap for studies which don't scale forever
 *  @property {String} formatEffect   Formatting function for effects, if the default formatting isn't appropriate
 * }
 */
export const normalTimeStudies = [
  {
    id: 11,
    cost: 1,
    // All requirements of an empty array will always evaluate to true, so this study is always purchasable
    requirement: [],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    description: "Tickspeed 以微弱之力影响首阶时间维度",
    effect: () => {
      const tickspeed = Tickspeed.current.dividedBy(1000);
      const firstPart = tickspeed.pow(0.008).times(0.95);
      const secondPart = tickspeed.pow(0.00048).times(0.05);
      return firstPart.plus(secondPart).reciprocate();
    },
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E4000,
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 21,
    cost: 3,
    requirement: [11],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `强化复制器乘数公式为
      (log₂(x)${formatPow(2)})+x${formatPow(0.04, 3, 3)}`,
    effect: () => Replicanti.amount.pow(0.04),
    // This is a special case because the study itself is *added* to the existing formula, but it makes more sense
    // to display a multiplicative increase just like every other study. We need to do the calculation in here in order
    // to properly show only the effect of this study and nothing else
    formatEffect: value => {
      const oldVal = Decimal.pow(Decimal.log2(Replicanti.amount.clampMin(1)), 2);
      const newVal = oldVal.plus(value);
      return formatX(newVal.div(oldVal.clampMin(1)), 2, 2);
    }
  },
  {
    id: 22,
    cost: 2,
    requirement: [11],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `复制器基础间隔上限 ${formatInt(50)}毫秒 ➜ ${formatInt(1)}毫秒`,
    effect: 1
  },
  {
    id: 31,
    cost: 3,
    requirement: [21],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `增幅基于无限次数的乘数（加成${formatPow(100)}）`,
    effect: 100
  },
  {
    id: 32,
    cost: 2,
    requirement: [22],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: `依维度提升之数而增益无限`,
    effect: () => Decimal.max(DimBoost.totalBoosts.times(10), 1),
    formatEffect: value => formatX(value, 2)
  },
  {
    id: 33,
    cost: 2,
    requirement: [22],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "于无限之际保留半数复制器星系"
  },
  {
    id: 41,
    cost: 4,
    requirement: [31],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `一切星系皆赐予所获无限点数 ${formatX(DC.D1_2, 1, 1)} 倍乘数`,
    effect: () => DC.D1_2.pow(GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(
      player.galaxies.max(1)).times(player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)) :
      Replicanti.galaxies.total.add(player.galaxies).add(player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies)),
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 42,
    cost: 6,
    requirement: [32],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `反物质星系需求增至第${formatInt(52)}维度而非${formatInt(60)}`,
    effect: 52
  },
  {
    id: 51,
    cost: 3,
    requirement: [41, 42],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `所获无限点数增加 ${formatX(1e15)}`,
    effect: 1e15
  },
  {
    id: 61,
    cost: 3,
    requirement: [51],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `所获永恒点数增加 ${formatX(25)}`,
    effect: 25
  },
  {
    id: 62,
    cost: 3,
    requirement: [42, () => (Perk.bypassEC5Lock.isBought && !player.disablePostReality) || EternityChallenge(5).completions > 0],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    description: () => `复制器获取速度加快 ${formatInt(3)} 倍`,
    effect: 3
  },
  {
    id: 71,
    cost: 4,
    requirement: [61, () => Perk.studyECRequirement.isBought || !EternityChallenge(12).isUnlocked],
    reqType: TS_REQUIREMENT_TYPE.DIMENSION_PATH,
    description: "维度献祭以减弱的效果影响所有其他反物质维度",
    effect: () => Ascensions.sacA.isUnlocked ? Sacrifice.totalPower.sub(1).div(4).add(1) : Sacrifice.totalBoost.pow(0.25).clampMin(1),
    cap: () => Ascensions.sacA.isUnlocked ? DC.BEMAX : (Alpha.isDestroyed ? DC.BEMAX : DC.E210000),
    formatEffect: value => Ascensions.sacA.isUnlocked ? formatPow(value, 2, 3) : formatX(value, 2, 1)
  },
  {
    id: 72,
    cost: 6,
    requirement: [61,
      () => Perk.studyECRequirement.isBought ||
        (!EternityChallenge(11).isUnlocked && !EternityChallenge(12).isUnlocked)],
    reqType: TS_REQUIREMENT_TYPE.DIMENSION_PATH,
    description: "维度献祭以大幅减弱的效果影响第四无限维度",
    effect: () => Ascensions.sacA.isUnlocked ? Sacrifice.totalPower.sub(1).div(25).add(1) : Sacrifice.totalBoost.pow(0.04).clampMin(1),
    cap: () => Ascensions.sacA.isUnlocked ? DC.BEMAX : (Alpha.isDestroyed ? DC.BEMAX : DC.E30000),
    formatEffect: value => Ascensions.sacA.isUnlocked ? formatPow(value, 2, 3) : formatX(value, 2, 1)
  },
  {
    id: 73,
    cost: 5,
    requirement: [61, () => Perk.studyECRequirement.isBought || !EternityChallenge(11).isUnlocked],
    reqType: TS_REQUIREMENT_TYPE.DIMENSION_PATH,
    description: "维度献祭以大幅减弱的效果影响第三时间维度",
    effect: () => Ascensions.sacA.isUnlocked ? Sacrifice.totalPower.sub(1).div(200).add(1) : Sacrifice.totalBoost.pow(0.005).clampMin(1),
    cap: () => Ascensions.sacA.isUnlocked ? DC.BEMAX : (Alpha.isDestroyed ? DC.BEMAX : DC.E1300),
    formatEffect: value => Ascensions.sacA.isUnlocked ? formatPow(value, 2, 3) : formatX(value, 2, 1)
  },
  {
    id: 81,
    cost: 4,
    requirement: [71],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `基础维度提升乘数变为 ${formatX(10)}`,
    effect: 10
  },
  {
    id: 82,
    cost: 6,
    requirement: [72],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "维度提升影响无限维度",
    effect: () => DC.D1_0000109.pow(Decimal.pow(DimBoost.totalBoosts, 2)).min(Decimal.pow10(1e50)).times(
      DC.D1_0000109.pow(DimBoost.totalBoosts.sub(1e25).max(0).times(1e25))),
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E1E7,
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 83,
    cost: 5,
    requirement: [73],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于时间维度获得的滴答升级的维度提升乘数",
    effect: () => DC.D1_0004.pow(player.totalTickGained).min(1e30).times(
      Decimal.pow(Decimal.max(player.totalTickGained.sub(172728), 1), 1000)),
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E30,
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 91,
    cost: 4,
    requirement: [81],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于本次永恒所花时间的反物质维度乘数",
    effect: () => Decimal.pow10(Decimal.min(Time.thisEternity.totalMinutes, 20).times(15).toNumber()).times(
      Time.thisEternity.totalMinutes.sub(20).times(15).max(1)),
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E300,
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 92,
    cost: 5,
    requirement: [82],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于最快永恒时间的无限维度乘数",
    effect: () => DC.D2.pow(new Decimal(60).div(Time.bestEternity.totalSeconds)),
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.C2P30,
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 93,
    cost: 7,
    requirement: [83],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于所获滴答升级的时间维度乘数",
    effect: () => Decimal.pow(player.totalTickGained, 0.25).clampMin(1),
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 101,
    cost: 4,
    requirement: [91],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "反物质维度乘数等于复制器数量",
    effect: () => Decimal.max(Replicanti.amount, 1),
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 102,
    cost: 6,
    requirement: [92],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "复制器星系提升复制器乘数",
    effect: () => DC.D5.pow(player.replicanti.galaxies),
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 103,
    cost: 6,
    requirement: [93],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "时间维度乘数等于复制器星系数量",
    effect: () => Decimal.max(player.replicanti.galaxies, 1),
    formatEffect: value => formatX(value, 2, 0)
  },
  {
    id: 111,
    cost: 12,
    requirement: [101, 102, 103],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => (Achievement(103).canBeApplied
      ? `将无限点数公式优化 log(x)/${formatFloat(307.8, 1)} ➜ log(x)/${formatInt(280)}`
      : `将无限点数公式优化 log(x)/${formatInt(308)} ➜ log(x)/${formatInt(280)}`),
    effect: 280
  },
  {
    id: 121,
    cost: 9,
    STCost: 2,
    requirement: [111],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [122, 123],
    description: () => ((Perk.studyActiveEP.isBought && !player.disablePostReality)
      ? `额外获得 ${formatX(50)} 永恒点数`
      : `基于最近十次永恒的速度获得更多永恒点数${PlayerProgress.realityUnlocked() ? "（真实时间）" : ""}`),
    effect: () => ((Perk.studyActiveEP.isBought && !player.disablePostReality)
      ? 50
      : Math.clamp(250 / Player.averageRealTimePerEternity, 1, 50)),
    formatEffect: value => ((Perk.studyActiveEP.isBought && !player.disablePostReality) ? undefined : formatX(value, 1, 1)),
    cap: 50
  },
  {
    id: 122,
    cost: 9,
    STCost: 2,
    requirement: [111],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [121, 123],
    description: () => ((Perk.studyPassive.isBought && !player.disablePostReality)
      ? `额外获得 ${formatX(50)} 永恒点数`
      : `额外获得 ${formatX(35)} 永恒点数`),
    effect: () => ((Perk.studyPassive.isBought && !player.disablePostReality) ? 50 : 35)
  },
  {
    id: 123,
    cost: 9,
    STCost: 2,
    requirement: [111],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [121, 122],
    description: "基于本次永恒所花时间获得更多永恒点数",
    effect: () => {
      const perkEffect = (player.disablePostReality
        ? TimeSpan.fromMinutes(DC.D0)
        : TimeSpan.fromMinutes(new Decimal(Perk.studyIdleEP.effectOrDefault(0))));
      const totalSeconds = Alpha.isRunning ? Time.thisEternityRealTime.totalSeconds : Time.thisEternity.plus(perkEffect).totalSeconds;
      return Decimal.pow(new Decimal(1.39).times(totalSeconds), 0.5);
    },
    formatEffect: value => formatX(value, 1, 1)
  },
  {
    id: 131,
    cost: 5,
    STCost: 8,
    requirement: [121],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [132, 133],
    description: () => (Achievement(138).isUnlocked
      ? `可额外获得 ${formatPercents(0.5)} 复制器星系`
      : `自动复制器星系已禁用，但可额外获得 ${formatPercents(0.5)}`),
    effect: () => Decimal.floor(player.replicanti.boughtGalaxyCap.div(2))
  },
  {
    id: 132,
    cost: 5,
    STCost: 8,
    requirement: [122],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [131, 133],
    description: () => ((Pelle.isDoomed && !PelleDestructionUpgrade.timestudy132.canBeApplied)
      ? `复制器星系强度增加 ${formatPercents(0.4)}`
      : `复制器星系强度增加 ${formatPercents(0.4)}，复制器速度提升 ${(Perk.studyPassive.isBought && !player.disablePostReality) ? formatX(3) : formatX(1.5, 1, 1)}`),
    effect: 0.4
  },
  {
    id: 133,
    cost: 5,
    STCost: 8,
    requirement: [123],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [131, 132],
    description: () => (Achievement(138).isUnlocked
      ? `复制器星系强度增加 ${formatPercents(0.5)}`
      : `复制器速度减慢至 ${format(Number.MAX_VALUE, 2)}，但复制器星系强度增加 ${formatPercents(0.5)}`),
    effect: 0.5
  },
  {
    id: 141,
    cost: 4,
    STCost: 2,
    requirement: [131],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [142, 143],
    description: () => ((Perk.studyActiveEP.isBought && !player.disablePostReality)
      ? `额外获得 ${formatX(DC.E45)} 无限点数`
      : "无限点数乘数，在本次无限中衰减"),
    effect: () => ((Perk.studyActiveEP.isBought && !player.disablePostReality)
      ? DC.E45
      : DC.E45.divide(thisInfinityMult(Alpha.isRunning
        ? Time.thisInfinityRealTime.totalSeconds
        : Time.thisInfinity.totalSeconds)).clampMin(1)),
    formatEffect: value => ((Perk.studyActiveEP.isBought && !player.disablePostReality) ? undefined : formatX(value, 2, 1))
  },
  {
    id: 142,
    cost: 4,
    STCost: 2,
    requirement: [132],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [141, 143],
    description: () => `额外获得 ${formatX(passiveIPMult())} 无限点数`,
    effect: passiveIPMult,
    cap: () => (Effarig.eternityCap === undefined ? undefined : Effarig.eternityCap.toNumber())
  },
  {
    id: 143,
    cost: 4,
    STCost: 2,
    requirement: [133],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [141, 142],
    description: "无限点数乘数，在本次无限中增长",
    effect: () => {
      const perkEffect = (player.disablePostReality
        ? TimeSpan.fromMinutes(DC.D0)
        : TimeSpan.fromMinutes(new Decimal(Perk.studyIdleEP.effectOrDefault(0))));
      const totalSeconds = Alpha.isRunning ? Time.thisInfinityRealTime.totalSeconds : Time.thisInfinity.plus(perkEffect).totalSeconds;
      return thisInfinityMult(totalSeconds);
    },
    formatEffect: value => formatX(value, 2, 1),
    cap: () => Effarig.eternityCap
  },
  {
    id: 151,
    cost: 8,
    requirement: [141, 142, 143],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `${formatX(1e6)} 乘数作用于所有时间维度`,
    effect: 1e6
  },
  {
    id: 161,
    cost: 7,
    requirement: [151],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `${formatX(DC.E616)} 乘数作用于所有反物质维度`,
    effect: () => DC.E616
  },
  {
    id: 162,
    cost: 7,
    requirement: [151],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `${formatX(1e11)} 乘数作用于所有无限维度`,
    effect: 1e11
  },
  {
    id: 171,
    cost: 15,
    requirement: [161, 162],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `下一级Tickspeed 升级所需时碎需求增长放缓
      ${formatX(1.33, 0, 2)} ➜ ${formatX(1.25, 0, 2)}`,
    effect: () => TS171_MULTIPLIER
  },
  {
    id: 181,
    cost: 200,
    requirement: [171,
      () => EternityChallenge(1).completions > 0 || (Perk.bypassEC1Lock.isBought && !player.disablePostReality),
      () => EternityChallenge(2).completions > 0 || (Perk.bypassEC2Lock.isBought && !player.disablePostReality),
      () => EternityChallenge(3).completions > 0 || (Perk.bypassEC3Lock.isBought && !player.disablePostReality)],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    description: () => `每秒获得 ${formatPercents(0.01)} 的坍缩时所得无限点数`,
    effect: () => gainedInfinityPoints().times(Time.deltaTime.div(100))
      .timesEffectOf(Ra.unlocks.continuousTTBoost.effects.autoPrestige)
  },
  {
    id: 191,
    cost: 400,
    requirement: [181, () => EternityChallenge(10).completions > 0],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    description: () => `永恒后永久保留 ${formatPercents(0.05)} 的无限次数为存储无限次数，并使无限次数翻倍`,
    effects: {
      infinitiesGain: 2,
      bankedInfinitiesGain: () => Currency.infinities.value.times(0.05).floor()
    }
  },
  {
    id: 192,
    cost: 730,
    requirement: [181, () => EternityChallenge(10).completions > 0, () => !Enslaved.isRunning],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    description: () => (Enslaved.isRunning
      ? "此现实空间不足"
      : `复制器可突破 ${format(replicantiCap(), 2, 1)}，但高数值时增长放缓`)
  },
  {
    id: 193,
    cost: 300,
    requirement: [181, () => EternityChallenge(10).completions > 0],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    description: "基于永恒数的反物质维度乘数",
    effect: () => DC.E2000.pow(Currency.eternities.value.div(1e5).clampMax(15)).times(
      DC.E2000.pow(Decimal.log10(Currency.eternities.value.sub(1.4e6).div(1e5).max(1)))),
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E30000,
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 201,
    cost: 900,
    requirement: [192],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "从维度分裂中选择第二条路径",
  },
  {
    id: 211,
    cost: 120,
    requirement: [191],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `维度提升需求缩放减少 ${formatInt(5)}`,
    effect: 5
  },
  {
    id: 212,
    cost: 150,
    requirement: [191],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "所有星系基于时碎数量而增强",
    effect: () => Decimal.pow(Currency.timeShards.value.clampMin(2).log2(), 0.008).min(1.2).times(
      Currency.timeShards.value.clampMin(2).log2().add(1).log2().add(1).log2().sub(2.1).div(3).max(1)).toNumber(),
    cap: () => Alpha.isDestroyed ? Infinity : 1.2,
    formatEffect: value => `+${formatPercents(value - 1, 3)}`
  },
  {
    id: 213,
    cost: 200,
    requirement: [193],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `复制器获取速度加快 ${formatInt(50)} 倍`,
    effect: 50
  },
  {
    id: 214,
    cost: 120,
    requirement: [193],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "维度献祭对第八反物质维度加成更高",
    effect: () => {
      if (Ascensions.sacA.isUnlocked) return Sacrifice.totalPower.sub(1).times(21.5).add(1);
      const totalBoost = Sacrifice.totalBoost;
      const firstPart = totalBoost.pow(18).clampMaxExponent(Alpha.isDestroyed ? Infinity : 300000);
      const secondPart = totalBoost.pow(3.5).clampMaxExponent(Alpha.isDestroyed ? Infinity : 700000);
      return firstPart.times(secondPart);
    },
    cap: () => Ascensions.sacA.isUnlocked ? DC.BEMAX : (Alpha.isDestroyed ? DC.BEMAX : DC.E1E6),
    formatEffect: value => Ascensions.sacA.isUnlocked ? formatPow(value, 2, 3) : formatX(value, 2, 1)
  },
  {
    id: 221,
    cost: 900,
    STCost: 4,
    requirement: [211],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [222],
    description: "基于维度提升的时间维度乘数",
    effect: () => DC.D1_0025.pow(DimBoost.totalBoosts),
    formatEffect: value => formatX(value, 2, 1)
  },
  {
    id: 222,
    cost: 900,
    STCost: 4,
    requirement: [211],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [221],
    description: () => `维度提升成本缩放额外减少 ${formatInt(2)}`,
    effect: 2
  },
  {
    id: 223,
    cost: 900,
    STCost: 4,
    requirement: [212],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [224],
    description: () => `远距星系成本缩放从 ${formatInt(7)} 个星系后开始`,
    effect: 7
  },
  {
    id: 224,
    cost: 900,
    STCost: 4,
    requirement: [212],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [223],
    description() {
      const effect = TimeStudy(224).effectValue;
      return `远距星系成本缩放从 ${quantifyHybridLarge("星系", effect)} 后开始
        (每 ${formatInt(2000)} 维度提升增加 ${formatInt(1)})`;
    },
    effect: () => Decimal.floor(DimBoost.totalBoosts.div(2000)).toNumber()
  },
  {
    id: 225,
    cost: 900,
    STCost: 4,
    requirement: [213],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [226],
    description: "基于复制器数量获得额外复制器星系",
    effect: () => Decimal.floor(Replicanti.amount.add(1).log10().div(1000).min(1e10).times(Replicanti.amount.add(1).log10().add(1).log10().sub(3).div(10).max(1))),
    formatEffect: value => `+${formatHybridLarge(value, 3)} RG`
  },
  {
    id: 226,
    cost: 900,
    STCost: 4,
    requirement: [213],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [225],
    description: "基于其上限获得额外复制器星系",
    effect: () => Decimal.floor(player.replicanti.boughtGalaxyCap.div(12)),
    formatEffect: value => `+${formatHybridLarge(value, 3)} RG`
  },
  {
    id: 227,
    cost: 900,
    STCost: 4,
    requirement: [214],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [228],
    description: "维度献祭以减弱的效果影响第四时间维度",
    effect: () => Decimal.max(Decimal.pow(Sacrifice.totalBoost.add(1).pLog10(), 20), 1),
    cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E300,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    id: 228,
    cost: 900,
    STCost: 4,
    requirement: [214],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [227],
    description: () => `维度献祭公式优化
      ${Sacrifice.getSacrificeDescription({ "TimeStudy228": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "TimeStudy228": true })}`,
    effect: 0.2
  },
  {
    id: 231,
    cost: 500,
    STCost: 5,
    requirement: [221, 222],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [232],
    description: "维度提升基于其数量而增强",
    effect: () => Decimal.pow(DimBoost.totalBoosts, 0.375).clampMin(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    id: 232,
    cost: 500,
    STCost: 5,
    requirement: [223, 224],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [231],
    description: "所有星系基于反物质星系而增强",
    effect: () => Decimal.pow(player.galaxies.div(500).add(1), 0.25).toNumber(),
    formatEffect: value => `+${formatPercents(value - 1, 3)}`
  },
  {
    id: 233,
    cost: 500,
    STCost: 5,
    requirement: [225, 226],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [234],
    description: "最大复制器星系升级基于当前复制器数量而更便宜",
    effect: () => Replicanti.amount.pow(0.625),
    formatEffect: value => `/ ${format(value, 1, 2)}`
  },
  {
    id: 234,
    cost: 500,
    STCost: 5,
    requirement: [227, 228],
    reqType: TS_REQUIREMENT_TYPE.AT_LEAST_ONE,
    requiresST: [233],
    description: "维度献祭适用于第一反物质维度",
    effect: () => Ascensions.sacA.isUnlocked ? Sacrifice.totalPower : Sacrifice.totalBoost,
  },
  // Note: These last 4 entries are the triad studies
  {
    id: 301,
    cost: 0,
    STCost: 12,
    requirement: [() => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 1, 221, 222, 231],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    requiresST: [221, 222, 231],
    description: "时间研究231提升时间研究221的效果",
    effect: () => Decimal.pow(TimeStudy(221).effectValue.pow(TimeStudy(231).effectValue.minus(1)),
      Ra.unlocks.triadBuff.effectOrDefault(1)).clampMin(1),
    formatEffect: value => formatX(value, 2, 1),
    unlocked: () => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 1
  },
  {
    id: 302,
    cost: 0,
    STCost: 12,
    requirement: [() => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 2, 223, 224, 232],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    requiresST: [223, 224, 232],
    description: () => `远距星系缩放阈值再推后
      ${formatInt(Math.pow(3000, Ra.unlocks.triadBuff.effectOrDefault(1)))} 个反物质星系`,
    effect: () => Math.pow(3000, Ra.unlocks.triadBuff.effectOrDefault(1)),
    unlocked: () => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 2
  },
  {
    id: 303,
    cost: 0,
    STCost: 12,
    requirement: [() => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 3, 225, 226, 233],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    requiresST: [225, 226, 233],
    description: () => `从时间研究225和226，以及鹿颈长的无限中额外获得 ${formatPercents(0.5 * Ra.unlocks.triadBuff.effectOrDefault(1))} 复制器星系`,
    effect: () => 1 + 0.5 * Ra.unlocks.triadBuff.effectOrDefault(1),
    unlocked: () => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 3
  },
  {
    id: 304,
    cost: 0,
    STCost: 12,
    requirement: [() => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 4, 227, 228, 234],
    reqType: TS_REQUIREMENT_TYPE.ALL,
    requiresST: [227, 228, 234],
    description: () => (Ra.unlocks.triadBuff.canBeApplied
      ? `维度献祭乘数提升至 ${format(2 * Ra.unlocks.triadBuff.effectOrDefault(1), 2, 2)} 次幂`
      : `维度献祭乘数平方`),
    effect: () => 2 * Ra.unlocks.triadBuff.effectOrDefault(1),
    unlocked: () => Ra.unlocks.unlockHardV.effectOrDefault(0) >= 4
  }
];
