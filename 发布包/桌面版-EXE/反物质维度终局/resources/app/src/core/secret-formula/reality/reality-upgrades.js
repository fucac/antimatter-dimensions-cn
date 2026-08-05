const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.reality.rebuyables[props.id],
    1e30,
    props.initialCost,
    props.costMult,
    props.costMult / 10,
    DC.E309,
    1e3,
    props.initialCost * props.costMult
  );
  const { effect } = props;
  props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(
    effect + ImaginaryUpgrade(props.id).effectOrDefault(0),
    player.reality.rebuyables[props.id] * getAdjustedGlyphEffect("realityrow1pow"));
  props.description = () => props.textTemplate.replace("{value}",
    ImaginaryUpgrade(props.id).effectValue === 0
      ? formatInt(effect)
      : format(effect + ImaginaryUpgrade(props.id).effectOrDefault(0), 2, 2));
  props.formatEffect = value => formatX(value, 2, 0);
  props.formatCost = value => format(value, 2, 0);
  return props;
};


export const realityUpgrades = [
  rebuyable({
    name: "时之增幅器",
    id: 1,
    initialCost: 1,
    costMult: 30,
    textTemplate: "膨胀时间获取速度 {value} 倍",
    effect: 3
  }),
  rebuyable({
    name: "复制增幅器",
    id: 2,
    initialCost: 1,
    costMult: 30,
    textTemplate: "复制器获取速度 {value} 倍",
    effect: 3
  }),
  rebuyable({
    name: "永恒增幅器",
    id: 3,
    initialCost: 2,
    costMult: 30,
    textTemplate: "永恒次数获取量 {value} 倍",
    effect: 3
  }),
  rebuyable({
    name: "超光速增幅器",
    id: 4,
    initialCost: 2,
    costMult: 30,
    textTemplate: "超光速粒子获取量 {value} 倍",
    effect: 3
  }),
  rebuyable({
    name: "无限增幅器",
    id: 5,
    initialCost: 3,
    costMult: 50,
    textTemplate: "无限获取量 {value} 倍",
    effect: 5
  }),
  {
    name: "寰宇复制",
    id: 6,
    cost: 15,
    requirement: "首次手动永恒时不使用复制器星系",
    hasFailed: () => !(player.requirementChecks.eternity.noRG && player.requirementChecks.reality.noEternities),
    checkRequirement: () => player.requirementChecks.eternity.noRG && player.requirementChecks.reality.noEternities,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    canLock: true,
    lockEvent: "获取复制器星系",
    description: "复制器速度基于复制器星系数倍增",
    effect: () => player.disablePostReality ? 1 : Replicanti.galaxies.total.div(25).add(1).toNumber(),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "无限构造",
    id: 7,
    cost: 15,
    requirement: "首次无限时至多拥有 1 个反物质星系",
    hasFailed: () => !(player.galaxies.lte(1) && player.requirementChecks.reality.noInfinities),
    checkRequirement: () => player.galaxies.lte(1) && player.requirementChecks.reality.noInfinities,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    canLock: true,
    lockEvent: "获取另一个反物质星系",
    description: "无限获取量受反物质星系数量加成",
    effect: () => player.disablePostReality ? DC.D1 : player.galaxies.div(20).add(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "悖论达成",
    id: 8,
    cost: 15,
    requirement: "手动永恒时不触发任何自动成就",
    hasFailed: () => player.reality.gainedAutoAchievements,
    checkRequirement: () => !player.reality.gainedAutoAchievements,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    canLock: true,
    description: "超光速粒子获取量受成就乘数加成",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.sqrt(Achievements.power),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "语言扩充",
    id: 9,
    cost: 15,
    requirement: () => `以单个 ${formatInt(3)} 级以上的符文，获取 ${format("1e4000")} 永恒点数进行永恒。`,
    hasFailed: () => {
      const invalidEquippedGlyphs = Glyphs.activeWithoutCompanion.length > 1 ||
        (Glyphs.activeWithoutCompanion.length === 1 && Glyphs.activeWithoutCompanion[0].level.lt(3));
      const hasValidGlyphInInventory = Glyphs.inventory.countWhere(g => g && g.level.gte(3)) > 0;
      return invalidEquippedGlyphs || (Glyphs.activeWithoutCompanion.length === 0 && !hasValidGlyphInInventory);
    },
    checkRequirement: () => Currency.eternityPoints.value.add(1).log10().gte(4000) &&
      Glyphs.activeWithoutCompanion.length === 1 && Glyphs.activeWithoutCompanion[0].level.gte(3),
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    description: "增加一个符文槽",
    effect: () => 1
  },
  {
    name: "存在延续",
    id: 10,
    cost: 15,
    requirement: () => `首次手动永恒时至少拥有 ${formatPostBreak(DC.E400)} 无限点数`,
    hasFailed: () => !player.requirementChecks.reality.noEternities,
    checkRequirement: () => Currency.infinityPoints.value.add(1).log10().gte(400) &&
      player.requirementChecks.reality.noEternities,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    canLock: true,
    lockEvent: "永恒",
    bypassLock: () => Currency.infinityPoints.value.add(1).log10().gte(400),
    description: () => `每次现实起始赐予 ${formatInt(100)} 永恒（也适用于当前现实）`,
    automatorPoints: 15,
    shortDescription: () => `起始即获 ${formatInt(100)} 永恒`,
    effect: () => player.disablePostReality ? 0 : 100
  },
  {
    name: "无限流转",
    id: 11,
    cost: 50,
    requirement: () => `${format(Currency.infinitiesBanked.value, 2)}/${format(DC.E12)} 存储无限次数`,
    checkRequirement: () => Currency.infinitiesBanked.value.add(1).log10().gte(12),
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.REALITY_FIRST_UNLOCKED],
    description: "每秒获得你正常无限获取量的 10%",
    automatorPoints: 5,
    shortDescription: () => `持续生成无限`,
    effect: () => player.disablePostReality ? DC.D0 : gainedInfinities().times(0.1),
    formatEffect: value => `${format(value)} 每秒`
  },
  {
    name: "觉知存在",
    id: 12,
    cost: 50,
    requirement: () => `不完成永恒挑战1，获取 ${format(DC.E70)} 永恒点数进行永恒`,
    hasFailed: () => EternityChallenge(1).completions !== 0,
    checkRequirement: () => Currency.eternityPoints.value.add(1).log10().gte(70) && EternityChallenge(1).completions === 0,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    lockEvent: "完成永恒挑战1",
    description: "永恒点数乘数基于现实数与时间研究数",
    effect: () => player.disablePostReality ? DC.D1 : Currency.timeTheorems.value
      .minus(DC.E3).clampMin(2)
      .pow(Decimal.log2(Decimal.clamp(Currency.realities.value, 1, 1e4))).clampMin(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "远控机械",
    id: 13,
    cost: 50,
    requirement: () => `不购买第五至第八时间维度，获取 ${format(DC.E4000)} 永恒点数进行永恒`,
    hasFailed: () => !Array.range(5, 4).every(i => TimeDimension(i).amount.equals(0)),
    checkRequirement: () => Currency.eternityPoints.value.add(1).log10().gte(4000) &&
      Array.range(5, 4).every(i => TimeDimension(i).amount.equals(0)),
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    lockEvent: "购买第五以上的时间维度",
    description: () => `优化永恒自动购买，并解锁时间维度与 ${formatX(5)} 永恒点数的自动购买`,
    automatorPoints: 10,
    shortDescription: () => `时间维度与 ${formatX(5)} 永恒点数自动购买，优化永恒自动购买`,
  },
  {
    name: "永恒流转",
    id: 14,
    cost: 50,
    requirement: () => `${format(Currency.eternities.value, 2)}/${format(1e7)} 永恒`,
    checkRequirement: () => Currency.eternities.gte(1e7),
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.REALITY_FIRST_UNLOCKED],
    description: "每秒获取的永恒数等于你的现实数",
    automatorPoints: 5,
    shortDescription: () => `持续生成永恒`,
    effect: () => player.disablePostReality ? 0 : Currency.realities.value.times(Ra.unlocks.continuousTTBoost.effects.eternity.effectOrDefault(1)),
    formatEffect: value => `${format(value)} 每秒`
  },
  {
    name: "悖论永续",
    id: 15,
    cost: 50,
    requirement: () => `拥有 ${format(DC.E10)} 永恒点数但不购买 ${formatX(5)} 永恒点数乘数升级`,
    hasFailed: () => player.epmultUpgrades.neq(0),
    checkRequirement: () => Currency.eternityPoints.value.add(1).log10().gte(10) && player.epmultUpgrades.eq(0),
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    canLock: true,
    lockEvent: () => `购买 ${formatX(5)} 永恒点数升级`,
    description: () => `基于 ${formatX(5)} 永恒点数乘数加成超光速粒子获取`,
    effect: () => player.disablePostReality ? 1 : Decimal.max(Decimal.sqrt(Decimal.log10(EternityUpgrade.epMult.effectValue)).div(9), 1).toNumber(),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "稀有差异",
    id: 16,
    cost: 1500,
    requirement: () => `装备 ${formatInt(4)} 个稀有度不低于罕有的符文
      （已装备 ${formatInt(Glyphs.activeWithoutCompanion.countWhere(g => g && g.strength >= 1.5))} 个）`,
    hasFailed: () => {
      const availableGlyphs = Glyphs.inventory.countWhere(g => g && g.strength >= 1.5);
      const equipped = Glyphs.activeWithoutCompanion.countWhere(g => g.strength >= 1.5);
      const availableSlots = Glyphs.activeSlotCount - Glyphs.activeList.length;
      return equipped + Math.min(availableGlyphs, availableSlots) < 4;
    },
    checkRequirement: () => Glyphs.activeWithoutCompanion.countWhere(g => g.strength >= 1.5) === 4,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "优化符文稀有度公式",
    effect: 1.3,
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "效能倍增",
    id: 17,
    cost: 1500,
    requirement: () => `装备 ${formatInt(4)} 个符文，每个至少有 ${formatInt(2)} 个效果
      （已装备 ${formatInt(Glyphs.activeWithoutCompanion.countWhere(g => g && countValuesFromBitmask(g.effects) >= 2))} 个）`,
    hasFailed: () => {
      const availableGlyphs = Glyphs.inventory.countWhere(g => g && countValuesFromBitmask(g.effects) >= 2);
      const equipped = Glyphs.activeWithoutCompanion.countWhere(g => countValuesFromBitmask(g.effects) >= 2);
      const availableSlots = Glyphs.activeSlotCount - Glyphs.activeList.length;
      return equipped + Math.min(availableGlyphs, availableSlots) < 4;
    },
    checkRequirement: () => Glyphs.activeWithoutCompanion.countWhere(g => countValuesFromBitmask(g.effects) >= 2) === 4,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: () => `${formatPercents(0.5)} 几率在符文上获得额外效果`,
    effect: 0.5,
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "永恒度量",
    id: 18,
    cost: 1500,
    requirement: () => `装备 ${formatInt(4)} 个符文，每个等级 ${formatInt(10)} 或更高
      （已装备 ${formatInt(Glyphs.activeWithoutCompanion.countWhere(g => g && g.level.gte(10)))} 个）`,
    hasFailed: () => {
      const availableGlyphs = Glyphs.inventory.countWhere(g => g && g.level.gte(10));
      const equipped = Glyphs.activeWithoutCompanion.countWhere(g => g.level.gte(10));
      const availableSlots = Glyphs.activeSlotCount - Glyphs.activeList.length;
      return equipped + Math.min(availableGlyphs, availableSlots) < 4;
    },
    checkRequirement: () => Glyphs.activeWithoutCompanion.countWhere(g => g.level.gte(10)) === 4,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "永恒数提升符文等级",
    effect: () => Decimal.max(Decimal.sqrt(Currency.eternities.value.plus(1).log10()).times(0.45), 1).toNumber(),
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "扫荡赋能",
    id: 19,
    cost: 1500,
    requirement: () => `同时拥有至少 ${formatInt(10)} 个符文
      （当前拥有 ${formatInt(Glyphs.allGlyphs.countWhere(g => g.type !== "companion"))} 个）`,
    hasFailed: () => Glyphs.allGlyphs.countWhere(g => g.type !== "companion") < 10,
    checkRequirement: () => Glyphs.allGlyphs.countWhere(g => g.type !== "companion") >= 10,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "可献祭符文以获取永久加成（Shift + 点击）",
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "奇点对偶",
    id: 20,
    cost: 1500,
    requirement: () => `解锁黑洞后累计游戏 ${formatInt(100)} 天
      （当前：${Time.timeSinceBlackHole.toStringShort(false)}）`,
    hasFailed: () => !BlackHole(1).isUnlocked && Currency.realityMachines.lt(100),
    checkRequirement: () => Time.timeSinceBlackHole.totalDays.gte(100) && BlackHole(1).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "解锁另一个黑洞",
    automatorPoints: 10,
    shortDescription: () => `第二黑洞`,
    formatCost: value => format(value, 1, 0)
  },
  {
    name: "宇宙聚合",
    id: 21,
    cost: 100000,
    requirement: () => `${formatInt(GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(
      player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)) : Replicanti.galaxies.total.add(player.galaxies).add(
      player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies))}/${formatInt(2800)} 各类星系总数`,
    checkRequirement: () =>
      GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(
      player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)).gte(2800) : Replicanti.galaxies.total.add(player.galaxies).add(
      player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies).gte(2800),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `远距反物质星系缩放迁至 ${formatInt(1e5)} 星系`,
    effect: () => player.disablePostReality ? 800 : 1e5
  },
  {
    name: "时间超越",
    id: 22,
    cost: 100000,
    requirement: () => `${format(Currency.timeShards.value, 1)}/${format(DC.E28000)} 时碎`,
    checkRequirement: () => Currency.timeShards.value.add(1).log10().gte(28000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "时间维度乘数基于本次现实所历天数",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow10(Decimal.pow(Decimal.log10(Time.thisReality.totalDays.plus(1)).times(2).plus(1), 2.2)),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "复现迅捷",
    id: 23,
    cost: 100000,
    requirement: () => `以不足 ${formatInt(15)} 分钟的游戏时间完成现实
      （最快：${Time.bestReality.toStringShort()}）`,
    hasFailed: () => Time.thisReality.totalMinutes.gte(15),
    checkRequirement: () => Time.thisReality.totalMinutes.lt(15),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "复制器速度基于你最快的游戏时间现实而增强",
    effect: () => player.disablePostReality ? 1 : DC.D15.div(Decimal.min(Time.bestReality.totalMinutes, DC.D15)).toNumber(),
    cap: () => Alpha.isDestroyed ? Infinity : 180,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "合成象征",
    id: 24,
    cost: 100000,
    requirement: () => `在未装备符文的情况下获取 ${formatInt(5000)} 现实机器`,
    hasFailed: () => Glyphs.activeWithoutCompanion.length > 0,
    checkRequirement: () => MachineHandler.gainedRealityMachines.gte(5000) &&
      Glyphs.activeWithoutCompanion.length === 0,
    canLock: true,
    lockEvent: "装备非伴侣符文",
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "增加一个符文槽",
    effect: () => 1
  },
  {
    name: "无虚存在",
    id: 25,
    cost: 100000,
    requirement: () => `达到 ${format(DC.E11111)} 永恒点数（最佳：${format(player.records.bestReality.bestEP, 2)} 永恒点数）`,
    checkRequirement: () => player.records.bestReality.bestEP.add(1).log10().gte(11111),
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    description: "解锁现实自动购买与自动装置指令",
    automatorPoints: 100,
    shortDescription: () => `现实自动购买`,
  },
];
