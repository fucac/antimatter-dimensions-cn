const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.reality.imaginaryRebuyables[props.id],
    1e15,
    props.initialCost,
    props.costMult,
    props.costMult / 2,
    DC.E309,
    1e3,
    props.costMult
  );
  const { effect } = props;
  if (props.isDecimal) props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(effect, player.reality.imaginaryRebuyables[props.id]);
  else props.effect = () => player.disablePostReality ? 0 : (props.id < 6
    ? (effect + DualityUpgrade(props.id).effectOrDefault(0)) * player.reality.imaginaryRebuyables[props.id]
    : effect * player.reality.imaginaryRebuyables[props.id]);
  if (!props.description) props.description = () => props.textTemplate.replace("{value}",
    DualityUpgrade(props.id).effectValue === 0
      ? format(effect, 2, 2)
      : format(effect + DualityUpgrade(props.id).effectOrDefault(0), 2, 2));
  if (!props.formatEffect) props.formatEffect = value => `+${format(value, 2, 2)}`;
  props.formatCost = value => format(value, 2, 0);
  return props;
};

export const imaginaryUpgrades = [
  rebuyable({
    name: "时间强化剂",
    id: 1,
    initialCost: 3,
    costMult: 60,
    textTemplate: "将时间放大器乘数增加 +{value}",
    effect: 0.15,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.temporalIntensifier.canBeApplied
  }),
  rebuyable({
    name: "复制强化剂",
    id: 2,
    initialCost: 4,
    costMult: 60,
    textTemplate: "将复制放大器乘数增加 +{value}",
    effect: 0.15,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.replicativeIntensifier.canBeApplied
  }),
  rebuyable({
    name: "永恒强化剂",
    id: 3,
    initialCost: 1,
    costMult: 40,
    textTemplate: "将永恒放大器乘数增加 +{value}",
    effect: 0.4,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.eternalIntensifier.canBeApplied
  }),
  rebuyable({
    name: "超光速强化剂",
    id: 4,
    initialCost: 5,
    costMult: 80,
    textTemplate: "将超光速放大器乘数增加 +{value}",
    effect: 0.15,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.superluminalIntensifier.canBeApplied
  }),
  rebuyable({
    name: "无限强化剂",
    id: 5,
    initialCost: 1,
    costMult: 30,
    textTemplate: "将无限放大器乘数增加 +{value}",
    effect: 0.6,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.boundlessIntensifier.canBeApplied
  }),
  rebuyable({
    name: "椭圆实体",
    id: 6,
    initialCost: 1e4,
    costMult: 500,
    description: () => `将现实机器上限提升至 ${formatX(1e100 ** Effects.product(EndgameMastery(153)))}`,
    effect: 1e100,
    formatEffect: value => `${formatX(EndgameMastery(153).isBought ? value.powEffectsOf(EndgameMastery(153)) : value)}`,
    isDecimal: true,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.ellipticMateriality.canBeApplied
  }),
  rebuyable({
    name: "符文保障",
    id: 7,
    initialCost: 2e5,
    costMult: 500,
    description: () => `将符文不稳定起始等级延后 ${formatInt(200)}`,
    effect: 200,
    formatEffect: value => `+${formatInt(value)} 级`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.runicAssurance.canBeApplied
  }),
  rebuyable({
    name: "双曲线无穷边形",
    id: 8,
    initialCost: 1e7,
    costMult: 800,
    description: () => `将无限维度乘以 ${format("1e100000")}`,
    effect: DC.E100000,
    formatEffect: value => `${formatX(value)}`,
    isDecimal: true,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.hyperbolicApeirogon.canBeApplied
  }),
  rebuyable({
    name: "宇宙细丝",
    id: 9,
    initialCost: 1e9,
    costMult: 1000,
    description: () => `增加星系强度`,
    effect: 0.03,
    formatEffect: value => `+${formatPercents(value)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.cosmicFilament.canBeApplied
  }),
  rebuyable({
    name: "熵凝结",
    id: 10,
    initialCost: 8e9,
    costMult: 2000,
    description: () => `增加奇点获取量`,
    effect: 1,
    formatEffect: value => `${formatX((EndgameMastery(131).isBought && !player.disablePostReality) ? Decimal.pow(1 + value, value) : new Decimal(1 + value), 2)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.entropicCondensing.canBeApplied
  }),
  {
    name: "干涉猜疑",
    id: 11,
    cost: new Decimal(5e7),
    requirement: () => `${format(1e90)} 总遗迹碎片
      （你拥有 ${format(player.celestials.effarig.relicShards, 2)}）`,
    hasFailed: () => false,
    checkRequirement: () => player.celestials.effarig.relicShards.gte(1e90),
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    description: "基于总反物质的时间维度强度",
    effect: () => player.disablePostReality ? 1 : 1 + Decimal.log10(player.records.totalEndgameAntimatter.add(10).log10()).div(100).toNumber(),
    formatEffect: value => `${formatPow(value, 0, 4)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.suspicionOfInterference.canBeApplied
  },
  {
    name: "幻象后果",
    id: 12,
    cost: new Decimal(5e7),
    requirement: () => `创造一个 ${formatInt(9000)} 级符文，单一符文等级因子权重为
      ${formatInt(100)}`,
    hasFailed: () => false,
    checkRequirement: () => Object.values(player.celestials.effarig.glyphWeights).some(w => w === 100) &&
      gainedGlyphLevel().actualLevel.gte(9000),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    description: "基于虚构可重复购买数获得免费维度提升",
    effect: () => player.disablePostReality ? 0 : 2e4 * ImaginaryUpgrades.totalRebuyables,
    formatEffect: value => `${format(value, 1)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.consequencesOfIllusions.canBeApplied
  },
  {
    name: "信息瞬态",
    id: 13,
    cost: new Decimal(5e7),
    requirement: () => `在无名氏的现实中达到 ${format(Number.MAX_VALUE, 2)} 投影现实机器`,
    hasFailed: () => !Enslaved.isRunning,
    checkRequirement: () => Enslaved.isRunning &&
      MachineHandler.uncappedRM.times(simulatedRealityCount(false) + 1).gte(Number.MAX_VALUE),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "基于已购买的虚构升级提升虚幻机器上限",
    effect: () => player.disablePostReality ? 1 : Math.pow(1 + ImaginaryUpgrades.totalRebuyables / 20 + ImaginaryUpgrades.totalSinglePurchase / 2, EndgameMastery(154).effectOrDefault(1)),
    formatEffect: value => `${formatX(value, 2, 1)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.transienceOfInformation.canBeApplied
  },
  {
    name: "入侵回忆",
    id: 14,
    cost: new Decimal(3.5e8),
    formatCost: x => format(x, 1),
    requirement: () => `在永恒挑战 5 中达到 ${format("1e75000000000")}/秒的Tickspeed `,
    hasFailed: () => false,
    checkRequirement: () => EternityChallenge(5).isRunning && Tickspeed.perSecond.log10().gte(7.5e10),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `将所有维度每次购买乘数提升至 ${formatPow(1.5, 0, 1)}`,
    effect: () => player.disablePostReality ? 1 : 1.5,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.recollectionOfIntrusion.canBeApplied
  },
  {
    name: "理想构造",
    id: 15,
    cost: new Decimal(1e9),
    requirement: () => `在不购买任何第一无限维度的情况下达到 ${format("1e1500000000000")} 反物质`,
    hasFailed: () => player.requirementChecks.reality.maxID1.gt(0),
    checkRequirement: () => player.requirementChecks.reality.maxID1.eq(0) && player.antimatter.add(1).log10().gte(1.5e12),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    description: () => `${
      Pelle.isDoomed ? "解锁" : "将反物质维度转换为连续统并解锁"
    }莱特拉，维度天神`,
  },
  {
    name: "无质量动量",
    id: 16,
    cost: new Decimal(3.5e9),
    formatCost: x => format(x, 1),
    requirement: () => `在 ${formatInt(30)} 秒内两次 destabilize 莱特拉的现实`,
    hasFailed: () => false,
    checkRequirement: () => Laitela.maxAllowedDimension <= 6,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "解锁第二暗物质维度",
  },
  {
    name: "手性振荡",
    id: 17,
    cost: new Decimal(6e9),
    requirement: () => `一次自动凝结至少 ${formatInt(20)} 个奇点`,
    hasFailed: () => false,
    checkRequirement: () => Singularity.singularitiesGained.gte(20) &&
      Currency.darkEnergy.gte(Singularity.cap.times(SingularityMilestone.autoCondense.effectOrDefault(Infinity))),
    checkEvent: GAME_EVENT.SINGULARITY_RESET_BEFORE,
    description: "解锁第三暗物质维度",
  },
  {
    name: "维度对称",
    id: 18,
    cost: new Decimal(1.5e10),
    formatCost: x => format(x, 1),
    requirement: () => `拥有 ${formatInt(80000)} 总星系`,
    hasFailed: () => false,
    checkRequirement: () => GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(
      player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)).gte(80000) : Replicanti.galaxies.total.add(player.galaxies).add(
      player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies).gte(80000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "解锁第四暗物质维度",
  },
  {
    name: "确定性辐射",
    id: 19,
    cost: new Decimal(2.8e10),
    formatCost: x => format(x, 1),
    requirement: () => `在本次现实中未购买超过 ${formatInt(8)} 个时间研究的情况下
      达到 ${formatInt(3.85e6)} Tickspeed 连续统`,
    hasFailed: () => player.requirementChecks.reality.maxStudies > 8,
    checkRequirement: () => player.requirementChecks.reality.maxStudies <= 8 &&
      Tickspeed.continuumValue.gte(3.85e6),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: () => `购买超过 ${formatInt(8)} 个时间研究`,
    description: "解锁暗物质湮灭"
  },
  {
    name: "真空加速",
    id: 20,
    cost: new Decimal(3e12),
    requirement: () => `拥有至少 ${formatPercents(1)} 的连续统增量`,
    hasFailed: () => false,
    checkRequirement: () => Laitela.matterExtraPurchaseFactor >= 2,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `解锁可重复虚构升级的自动购买器，使虚幻机器生成速度
      提升 ${formatInt(10)} 倍`,
    effect: () => player.disablePostReality ? 1 : 10,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.vacuumAcceleration.canBeApplied
  },
  {
    name: "存在消除",
    id: 21,
    cost: new Decimal(1e13),
    requirement: () => `在整个现实禁用连续统的情况下达到 ${format("1e7400000000000")} 反物质`,
    hasFailed: () => !player.requirementChecks.reality.noContinuum,
    checkRequirement: () => player.requirementChecks.reality.noContinuum &&
      Currency.antimatter.value.add(1).log10().gte(7.4e12),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "启用连续统",
    description: "湮灭乘数收益基于虚幻机器数量提升",
    effect: () => player.disablePostReality ? 1 : Decimal.clampMin(Decimal.pow(Decimal.log10(Currency.imaginaryMachines.value.add(1)).sub(10), 3), 1).toNumber(),
    formatEffect: value => `${formatX(value, 2, 1)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.existentialElimination.canBeApplied
  },
  {
    name: "总体终止",
    id: 22,
    cost: new Decimal(1.5e14),
    formatCost: x => format(x, 1),
    requirement: () => `在鹿颈长的现实中装备至少 ${formatInt(4)} 个诅咒符文的情况下
      达到 ${format("1e150000000000")} 反物质`,
    hasFailed: () => !Effarig.isRunning || player.requirementChecks.reality.maxGlyphs > -10,
    checkRequirement: () => Effarig.isRunning && player.requirementChecks.reality.maxGlyphs < -10 &&
      Currency.antimatter.value.add(1).log10().gte(1.5e11),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `所有符文献祭总值提升至 ${format(1e100)}`,
    effect: () => player.disablePostReality ? DC.D0 : new Decimal(1e100),
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.totalTermination.canBeApplied
  },
  {
    name: "平面净化",
    id: 23,
    cost: new Decimal(6e14),
    requirement: () => `在太阳神的现实中装备至多 ${formatInt(0)} 个符文的情况下
      达到 ${formatInt(20000)} 级符文`,
    hasFailed: () => !Ra.isRunning || player.requirementChecks.reality.maxGlyphs > 0,
    checkRequirement: () => Ra.isRunning && player.requirementChecks.reality.maxGlyphs <= 0 &&
      gainedGlyphLevel().actualLevel.gte(20000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "基于超立方体数量增加免费维度提升数",
    effect: () => player.disablePostReality ? 1 : Math.floor(0.25 * Math.pow(Tesseracts.effectiveCount, 2)),
    formatEffect: value => `${formatX(value)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.planarPurification.canBeApplied
  },
  {
    name: "绝对废除",
    id: 24,
    cost: new Decimal(6e14),
    requirement: () => `在太阳神的现实中拥有 ${formatInt(13000)} 反物质星系
      且黑洞完全反转`,
    hasFailed: () => !Ra.isRunning || player.requirementChecks.reality.slowestBH > 1e-300,
    checkRequirement: () => Ra.isRunning && player.requirementChecks.reality.slowestBH <= 1e-300 &&
      player.galaxies.gte(13000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    description: "基于奇点数量提升免费维度提升强度",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(player.celestials.laitela.singularities, 300),
    formatEffect: value => `${formatX(value, 2, 1)}`,
    isDisabledInDoomed: () => !PelleImaginaryUpgrade.absoluteAnnulment.canBeApplied
  },
  {
    name: "全能湮灭",
    id: 25,
    cost: new Decimal(1.6e15),
    formatCost: x => format(x, 1),
    requirement: () => `在莱特拉的现实中禁用所有维度且至少 ${formatInt(4)} 个空符文槽的情况下
      达到现实`,
    hasFailed: () => !Laitela.isRunning || Laitela.maxAllowedDimension !== 0 ||
      Glyphs.activeWithoutCompanion.length > 1,
    checkRequirement: () => Laitela.isRunning && Laitela.maxAllowedDimension === 0 &&
      Glyphs.activeWithoutCompanion.length <= 1 && TimeStudy.reality.isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "装备另一个非同伴符文",
    description: "解锁反物质天神佩勒",
  },
  {
    name: "奇点储备",
    id: 26,
    cost: new Decimal(1e50),
    requirement: () => `达到 ${format(DC.E100, 2)} 奇点`,
    hasFailed: () => false,
    checkRequirement: () => Currency.singularities.value.gte(1e100),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `解锁第五暗物质维度，将暗物质上限提升至 ${formatPostBreak("1e1000")}`,
  },
  {
    name: "紧迫灭绝",
    id: 27,
    cost: new Decimal(1e100),
    requirement: () => `在佩勒中不装备任何符文的情况下达到 ${format(DC.E9E15)} 反物质`,
    hasFailed: () => !Pelle.isDoomed || player.requirementChecks.endgame.noGlyphsDoomed === false,
    checkRequirement: () => Currency.antimatter.value.add(1).log10().gte(9e15) && Pelle.isDoomed &&
      player.requirementChecks.endgame.noGlyphsDoomed === true,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `解锁第六暗物质维度，将暗物质上限提升至 ${formatPostBreak("1e4000")}`,
  },
  {
    name: "炼金湮灭",
    id: 28,
    cost: new Decimal(1e150),
    requirement: () => `在没有任何炼金资源的情况下解锁佩勒`,
    hasFailed: () => player.celestials.ra.alchemy[0].amount > 0 ||
      player.celestials.ra.alchemy[1].amount > 0 ||
      player.celestials.ra.alchemy[2].amount > 0 ||
      player.celestials.ra.alchemy[3].amount > 0 ||
      player.celestials.ra.alchemy[4].amount > 0 ||
      player.celestials.ra.alchemy[5].amount > 0,
    checkRequirement: () => Pelle.isUnlocked && !Pelle.isDoomed &&
      player.celestials.ra.alchemy[0].amount === 0 &&
      player.celestials.ra.alchemy[1].amount === 0 &&
      player.celestials.ra.alchemy[2].amount === 0 &&
      player.celestials.ra.alchemy[3].amount === 0 &&
      player.celestials.ra.alchemy[4].amount === 0 &&
      player.celestials.ra.alchemy[5].amount === 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `解锁第七暗物质维度，将暗物质上限提升至 ${formatPostBreak("1e20000")}`,
  },
  {
    name: "星系灭绝",
    id: 29,
    cost: new Decimal(1e200),
    requirement: () => `拥有总计 ${format(1e75, 2, 2)} 星系`,
    hasFailed: () => false,
    checkRequirement: () => GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(
      player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)).times(GalaxyGenerator.galaxies.max(1)).gte(1e75) :
      Replicanti.galaxies.total.add(player.galaxies).add(player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies).add(GalaxyGenerator.galaxies).gte(1e75),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `解锁第八暗物质维度，将暗物质上限提升至 ${formatPostBreak("1e100000")}`,
  },
  {
    name: "初始启动",
    id: 30,
    cost: DC.NUMMAX,
    requirement: () => `在佩勒中禁用所有削弱和打击`,
    hasFailed: () => !PelleStrikeUpgrade.pelleStrike1.isAvailableForPurchase,
    checkRequirement: () => PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length >= 5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => {
      if (ImaginaryUpgrade(30).isBought) return "解锁黑暗天神阿尔法";
      return "解锁 ???，??? 天神";
    },
  },
];