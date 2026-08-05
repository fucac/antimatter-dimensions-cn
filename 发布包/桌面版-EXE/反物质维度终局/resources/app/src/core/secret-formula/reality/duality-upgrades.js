const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.reality.dualityRebuyables[props.id],
    1e20,
    props.initialCost,
    props.costMult,
    props.costMult,
    DC.E309,
    1e3,
    props.costMult
  );
  const { effect } = props;
  if (props.isDecimal) props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(effect, (player.reality.dualityRebuyables[props.id] + 1) * (player.reality.dualityRebuyables[props.id] / 2));
  else props.effect = () => player.disablePostReality ? 1 : effect * player.reality.dualityRebuyables[props.id];
  if (!props.formatEffect) props.formatEffect = value => `+${format(value, 2, 2)}`;
  props.formatCost = value => format(value, 2, 0);
  return props;
};

export const dualityUpgrades = [
  rebuyable({
    name: "时间放大器",
    id: 1,
    initialCost: 1,
    costMult: 50,
    description: () => `将时间强化器乘数增加 +${format(0.01, 2, 2)}`,
    effect: 0.01
  }),
  rebuyable({
    name: "复制放大器",
    id: 2,
    initialCost: 3,
    costMult: 60,
    description: () => `将复制强化器乘数增加 +${format(0.01, 2, 2)}`,
    effect: 0.01
  }),
  rebuyable({
    name: "永恒放大器",
    id: 3,
    initialCost: 8,
    costMult: 45,
    description: () => `将永恒强化器乘数增加 +${format(0.02, 2, 2)}`,
    effect: 0.02
  }),
  rebuyable({
    name: "超光速放大器",
    id: 4,
    initialCost: 18,
    costMult: 75,
    description: () => `将超光速强化器乘数增加 +${format(0.01, 2, 2)}`,
    effect: 0.01
  }),
  rebuyable({
    name: "无限放大器",
    id: 5,
    initialCost: 30,
    costMult: 36,
    description: () => `将无限强化器乘数增加 +${format(0.03, 2, 2)}`,
    effect: 0.03
  }),
  rebuyable({
    name: "虚构双曲线",
    id: 6,
    initialCost: 1e4,
    costMult: 360,
    description: () => `将幻想机上限提升 ${formatX(1e100)}`,
    effect: 1e100,
    formatEffect: value => `${formatX(value)}`,
    isDecimal: true
  }),
  rebuyable({
    name: "象形赋能",
    id: 7,
    initialCost: 2e5,
    costMult: 750,
    description: () => `将符文不稳定起始等级的前 ${formatInt(4)} 级延后 ${formatInt(2000)}`,
    effect: 2000,
    formatEffect: value => `+${formatInt(value)} 级`
  }),
  rebuyable({
    name: "多面四面体",
    id: 8,
    initialCost: 1.5e6,
    costMult: 1500,
    description: () => `将无限维度提升至 ${formatPow(1.25, 2, 3)}`,
    effect: 1.25,
    formatEffect: value => `${formatPow(value, 2, 3)}`,
    isDecimal: true
  }),
  rebuyable({
    name: "星云丛",
    id: 9,
    initialCost: 1.2e7,
    costMult: 2400,
    description: () => `星系强度相乘`,
    effect: 1.15,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    isDecimal: true
  }),
  rebuyable({
    name: "扰动收缩",
    id: 10,
    initialCost: 2e8,
    costMult: 4000,
    description: () => `奇点获取量相乘`,
    effect: 1e100,
    formatEffect: value => `${formatX(value, 2)}`,
    isQuadratic: true
  }),
  {
    name: "永恒干涉",
    id: 11,
    cost: new Decimal(1e9),
    requirement: () => `${format("1e1640")} 总遗迹碎片
      （你拥有 ${format(player.celestials.effarig.relicShards, 2)}）`,
    hasFailed: () => false,
    checkRequirement: () => player.celestials.effarig.relicShards.gte(DC.E1640),
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    description: "基于强子化数量提升连续统购买乘数",
    effect: () => player.disablePostReality ? 1 : Math.sqrt(Laitela.hadronizes),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    name: "幻影回响",
    id: 12,
    cost: new Decimal(6e9),
    requirement: () => `创造一个 ${formatInt(102500)} 级的符文，所有符文等级因子权重为
      ${formatInt(0)}`,
    hasFailed: () => !Object.values(player.celestials.effarig.glyphWeights).every(w => w === 0),
    checkRequirement: () => Object.values(player.celestials.effarig.glyphWeights).every(w => w === 0) &&
      gainedGlyphLevel().actualLevel.gte(102500),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "将免费维度提升获取提升至基于可重复二元升级购买量的指数",
    effect: () => player.disablePostReality ? 1 : 1 + Math.log10(DualityUpgrades.totalRebuyables) * 1.5,
    formatEffect: value => `${formatPow(value, 2, 3)}`
  },
  {
    name: "二元倏逝",
    id: 13,
    cost: new Decimal(2e10),
    requirement: () => `将莱特拉的现实强子化 ${formatInt(12)} 次`,
    hasFailed: () => false,
    checkRequirement: () => Laitela.hadronizes >= 12,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "基于二元升级购买量提升对偶机上限",
    effect: () => player.disablePostReality ? 1 : 1 + DualityUpgrades.totalRebuyables / 20 + DualityUpgrades.totalSinglePurchase / 2,
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    name: "腐化追忆",
    id: 14,
    cost: new Decimal(3e11),
    requirement: () => `达到Tickspeed ${format("e1e666")}`,
    hasFailed: () => false,
    checkRequirement: () => Tickspeed.perSecond.log10().gte("1e666"),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `将连续统购买加成提升至 ${formatPow(1.2, 0, 1)}`,
    effect: () => player.disablePostReality ? 1 : 1.2
  },
  {
    name: "对偶创造",
    id: 15,
    cost: new Decimal(1e12),
    requirement: () => `在末日之外，于无限、时间或第 ${formatInt(8)} 反物质维度之前
      达到 ${format("e5e55")} 反物质`,
    hasFailed: () => !player.requirementChecks.endgame.onlyLowDims || Pelle.isDoomed,
    checkRequirement: () => player.requirementChecks.endgame.onlyLowDims && player.dilation.active &&
      player.antimatter.add(1).log10().gte(5e55) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    description: "解锁强子",
  },
  {
    name: "临界加速",
    id: 16,
    cost: new Decimal(4e12),
    requirement: () => "拥有完全赋能的强子",
    hasFailed: () => false,
    checkRequirement: () => Hadrons.timeFactor.times(4).gte(100),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "解锁第二个强子效果",
  },
  {
    name: "浩瀚轮转",
    id: 17,
    cost: new Decimal(9e12),
    requirement: () => `达到 ${format("1e44875")} 奇点`,
    hasFailed: () => false,
    checkRequirement: () => player.celestials.laitela.singularities.gte("1e44875"),
    checkEvent: GAME_EVENT.SINGULARITY_RESET_BEFORE,
    description: "解锁第三个强子效果",
  },
  {
    name: "比例均衡",
    id: 18,
    cost: new Decimal(1.6e13),
    formatCost: x => format(x, 1),
    requirement: () => `在末日之外拥有 ${format(2.4e9, 1)} 总星系`,
    hasFailed: () => Pelle.isDoomed,
    checkRequirement: () => GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(
      player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)).gte(2.4e9) : Replicanti.galaxies.total.add(player.galaxies).add(
      player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies).gte(2.4e9) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "解锁第四个强子效果",
  },
  {
    name: "指定辐射",
    id: 19,
    cost: new Decimal(4.2e13),
    formatCost: x => format(x, 1),
    requirement: () => `在末日之外达到 ${format(1e45)} Tickspeed 连续统，且本次终局未购买任何时间研究`,
    hasFailed: () => player.requirementChecks.endgame.maxStudies > 0 || Pelle.isDoomed,
    checkRequirement: () => player.requirementChecks.endgame.maxStudies <= 0 &&
      Tickspeed.continuumValue.gte(1e45) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: () => `购买超过 ${formatInt(0)} 个时间研究`,
    description: "解锁黑暗强子"
  },
  {
    name: "二元速度",
    id: 20,
    cost: new Decimal(1e16),
    requirement: () => `拥有至少 ${formatX(4444444, 2, 2)} 的连续统增量`,
    hasFailed: () => false,
    checkRequirement: () => Laitela.matterExtraPurchaseFactor >= 4444444,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `解锁可重复二元升级的自动购买器，并使对偶机生成
      ${formatInt(10)} 倍速`,
    effect: () => player.disablePostReality ? 1 : 10
  },
  {
    name: "天国王朝",
    id: 21,
    cost: new Decimal(3e17),
    requirement: () => `在末日之外，整个终局禁用连续统的情况下
      达到 ${format("e1e88")} 反物质`,
    hasFailed: () => !player.requirementChecks.endgame.noContinuum || Pelle.isDoomed,
    checkRequirement: () => player.requirementChecks.endgame.noContinuum &&
      Currency.antimatter.value.add(1).log10().gte(1e88) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "启用连续统",
    description: "黑暗强子基于对偶机更加强大",
    effect: () => player.disablePostReality ? 0 : Decimal.log10(Currency.dualMachines.value.add(1)).div(100).toNumber(),
    formatEffect: value => `+${formatPercents(value, 2, 2)}`
  },
  {
    name: "描绘毁灭",
    id: 22,
    cost: new Decimal(2e18),
    requirement: () => `在末日之外，本次终局未装备任何符文的情况下
      达到 ${format("e1e85")} 反物质`,
    hasFailed: () => !player.requirementChecks.endgame.noGlyphs || Pelle.isDoomed,
    checkRequirement: () => player.requirementChecks.endgame.noGlyphs &&
      Currency.antimatter.value.add(1).log10().gte(1e85) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "装备符文",
    description: () => `将所有符文献祭值提升至 ${formatPow(1.2, 2, 3)}`,
    effect: () => player.disablePostReality ? 1 : 1.2
  },
  {
    name: "四面创伤",
    id: 23,
    cost: new Decimal(6e18),
    requirement: () => `在太阳神的现实中达到 ${formatInt(385000)} 级符文，
      装备至多 -15 个符文`,
    hasFailed: () => !Ra.isRunning ||
      player.requirementChecks.reality.maxGlyphs > -15,
    checkRequirement: () => Ra.isRunning &&
      player.requirementChecks.reality.maxGlyphs <= -15 && gainedGlyphLevel().actualLevel.gte(385000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "超立方体增加星系强度",
    effect: () => player.disablePostReality ? 1 : Tesseracts.effectiveCount / 100,
    formatEffect: value => `${formatX(value)}`
  },
  {
    name: "奇点破碎",
    id: 24,
    cost: new Decimal(1.5e19),
    formatCost: x => format(x, 1),
    requirement: () => `在太阳神的现实中拥有 ${format(106e6, 2, 2)} 反物质星系
      且关闭天神物质`,
    hasFailed: () => !Ra.isRunning || !player.requirementChecks.reality.noCelMatter,
    checkRequirement: () => Ra.isRunning && player.requirementChecks.reality.noCelMatter &&
      player.galaxies.gte(106e6),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "开启天神物质",
    description: "奇点增加星系强度",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.log10(player.celestials.laitela.singularities.add(1)).div(10000),
    formatEffect: value => `${formatX(value, 2, 2)}`
  },
  {
    name: "多维产出",
    id: 25,
    cost: new Decimal(1e20),
    requirement: () => `拥有 ${formatInt(32)} 个完全赋能的黑暗强子`,
    hasFailed: () => false,
    checkRequirement: () => player.celestials.laitela.hadrons.dark >= 32 && Hadrons.timeFactor.div(5).gte(100),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "解锁超立方体",
  },
];