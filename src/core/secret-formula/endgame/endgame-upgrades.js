const rebuyable = props => {
  props.cost = () => getHybridCostScaling(
    player.endgame.rebuyables[props.id],
    1e100,
    props.initialCost,
    props.costMult,
    props.costMult / 10,
    DC.E309,
    1e3,
    props.initialCost * props.costMult
  );
  const { effect } = props;
  if (props.isDecimal) props.effect = () => player.disablePostReality ? DC.D1 : Decimal.pow(effect, player.endgame.rebuyables[props.id]);
  else props.effect = () => player.disablePostReality ? 1 : Math.pow(effect, player.endgame.rebuyables[props.id]);
  props.description = () => props.textTemplate.replace("{value}", format(effect, 2, 2));
  props.formatEffect = value => formatX(value, 2, 2);
  props.formatCost = value => format(value, 2, 0);
  return props;
};


export const endgameUpgrades = [
  rebuyable({
    name: "反物质改良器",
    id: 1,
    initialCost: 1e40,
    costMult: 60,
    textTemplate: "将无限升级23软上限的起始延后{value}倍",
    effect: 1.2,
    isDecimal: true
  }),
  rebuyable({
    name: "无限改良器",
    id: 2,
    initialCost: 1e42,
    costMult: 300,
    textTemplate: "将无限维度压缩软上限降低{value}倍",
    effect: 0.99
  }),
  rebuyable({
    name: "时间改良器",
    id: 3,
    initialCost: 1e44,
    costMult: 150,
    textTemplate: "将时间维度压缩软上限降低{value}倍",
    effect: 0.99
  }),
  rebuyable({
    name: "黑暗改良器",
    id: 4,
    initialCost: 1e48,
    costMult: 480,
    textTemplate: "将暗物质硬上限提升{value}倍",
    effect: 1e25,
    isDecimal: true
  }),
  rebuyable({
    name: "天神改良器",
    id: 5,
    initialCost: 1e56,
    costMult: 120,
    textTemplate: "将天神物质软上限起始延后{value}倍",
    effect: 2,
    isDecimal: true
  }),
  {
    name: "重生富源",
    id: 6,
    cost: new Decimal(1e45),
    requirement: () => `在不购买第6个星系生成器升级的情况下，拥有${format(DC.E280)}现实碎片`,
    hasFailed: () => GalaxyGeneratorUpgrades.RSMult.boughtAmount > 0,
    checkRequirement: () => GalaxyGeneratorUpgrades.RSMult.boughtAmount === 0 && Currency.realityShards.gte(DC.E280) && 
      player.endgames >= 10,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "购买第6个星系生成器升级",
    description: () =>
      `开始时拥有${format(1e7)} 复兴点、${formatInt(1000)}现实、永久黑洞、
      ${format(1e12)}遗迹碎片，以及两个无名氏升级已解锁`
  },
  {
    name: "灾变计时",
    id: 7,
    cost: new Decimal(1e52),
    requirement: () => `游玩${formatPostBreak("1e666")}年`,
    checkRequirement: () => Time.totalTimePlayed.totalYears.gt(Decimal.pow(10, 666)),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "在天神现实之外，若你启用了天神物质，游戏速度等于本次永恒的最大游戏速度"
  },
  {
    name: "永恒薪酬",
    id: 8,
    cost: new Decimal(1e60),
    requirement: () => `在${formatInt(10)}分钟（真实时间）内手动完成永恒`,
    hasFailed: () => Time.thisEndgameRealTime.totalMinutes.gte(10),
    checkRequirement: () => Time.bestEndgameRealTime.totalMinutes.lt(10),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `永恒生成速度为你最快永恒（真实时间）的${formatInt(10)}倍慢`,
    effect: () => player.disablePostReality ? DC.NUMMAX : new Decimal(player.records.bestEndgame.realTime * 10),
    formatEffect: value => {
      if (new Decimal(value).gte(9999999999)) return "无永恒生成";
      let endgames = 1;
      endgames *= ((ExpansionPack.enslavedPack.isBought && !player.disablePostReality)
        ? Math.floor(1 + Math.pow(Math.log10(Math.min(Tesseracts.effectiveCount, 1000) * Math.max(Math.log10(Tesseracts.effectiveCount) - 2, 1) + 1), Math.log10(player.endgames + 1)))
        : 1);
      endgames *= Math.pow(1.33, Alpha.currentStage);
      if (DivinityMilestone.firstDivine.isReached && !player.disablePostReality) endgames *= 10;
      endgames *= DivineDimensions.conversionFormula1.toNumber();
      const timeStr = Time.bestEndgameRealTime.totalMilliseconds.lte(100) && !Alpha.isDestroyed
        ? `${TimeSpan.fromMilliseconds(new Decimal(1000)).toStringShort()} (capped)`
        : (Time.bestEndgameRealTime.totalMilliseconds.lte(33)
           ? `${TimeSpan.fromMilliseconds(new Decimal(330)).toStringShort()} (capped)`
           : `${TimeSpan.fromMilliseconds(new Decimal(value)).toStringShort()}`);
      return `${quantify("Endgame", endgames)} every ${timeStr}`;
    }
  },
  {
    name: "想象照明",
    id: 9,
    cost: new Decimal(1e70),
    requirement: "在不购买「理想伪造」的情况下完成第四行虚数升级",
    hasFailed: () => ImaginaryUpgrade(15).isBought,
    checkRequirement: () => !ImaginaryUpgrade(15).isBought && ImaginaryUpgrade(16).isBought && ImaginaryUpgrade(17).isBought &&
      ImaginaryUpgrade(18).isBought && ImaginaryUpgrade(19).isBought && ImaginaryUpgrade(20).isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "购买「理想伪造」",
    description: "在永恒中保留所有虚数升级"
  },
  {
    name: "天神混沌",
    id: 10,
    cost: new Decimal(1e83),
    requirement: () => "在向特蕾莎注入任何东西之前，先完成鹿颈长、无名氏、薇和太阳神",
    hasFailed: () => player.celestials.teresa.pouredAmount.gt(0),
    checkRequirement: () => player.celestials.teresa.pouredAmount.eq(0) &&
      EffarigUnlock.reality.isUnlocked && Enslaved.isCompleted && V.spaceTheorems >= 36 && Ra.totalPetLevel >= 100,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "向特蕾莎注入RM",
    description: () => "记录特蕾莎反物质在永恒中保留"
  },
  {
    name: "九中和",
    id: 11,
    cost: new Decimal(1e50),
    requirement: () => `达到${format(1e50)}天神物质`,
    checkRequirement: () => Currency.celestialMatter.value.add(1).log10().gte(50),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () =>
      `将无限挑战8奖励硬上限延后${formatPow(9)}倍，
      并将所有天神维度乘以${formatX(9)}`,
    effect: () => player.disablePostReality ? 1 : 9
  },
  {
    name: "不稳定颠覆",
    id: 12,
    cost: new Decimal(1e68),
    requirement: "达到第二个星系生成器软上限",
    checkRequirement: () => GalaxyGenerator.galaxies.gte(1e60),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `将星系生成器不稳定性幅度降低${formatInt(1)}`,
    effect: () => player.disablePostReality ? 0 : 1
  },
  {
    name: "屏障突破",
    id: 13,
    cost: new Decimal(1e78),
    requirement: () => `达到${formatInt(76543)}的符文等级`,
    checkRequirement: () => player.records.bestEndgame.glyphLevel.gte(76543),
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    description: "削弱第三级符文等级不稳定性"
  },
  {
    name: "星力补充",
    id: 14,
    cost: new Decimal(1e84),
    requirement: () => `在不购买第6个星系生成器升级的情况下，拥有${format(1e40)}星系`,
    hasFailed: () => GalaxyGeneratorUpgrades.RSMult.boughtAmount > 0,
    checkRequirement: () => GalaxyGeneratorUpgrades.RSMult.boughtAmount === 0 && GalaxyGenerator.galaxies.gte(1e40) && 
      player.endgames >= 10,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    canLock: true,
    lockEvent: "购买第6个星系生成器升级",
    description: () => `将第二级星系生成器不稳定性幅度削弱${formatPercents(0.1)}`,
    effect: () => player.disablePostReality ? 1 : 0.9
  },
  {
    name: "反物质聚积",
    id: 15,
    cost: new Decimal(1e150),
    requirement: () => `在佩勒之外拥有${format(Decimal.pow(10, 1e33))}反物质`,
    hasFailed: () => Pelle.isDoomed,
    checkRequirement: () => Currency.antimatter.value.add(1).log10().gte(1e33) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `基于虚幻机器获得反物质指数的幂`,
    effect: () => player.disablePostReality ? 1 : 1 + (Decimal.pow(Decimal.log10(Decimal.log10(
      player.reality.imaginaryMachines.add(1)).add(1)), 2).min(10).add(Decimal.log10(Decimal.log10(
      player.reality.imaginaryMachines.add(1)).add(1)).sub(Math.sqrt(10)).max(0)).div(200)).toNumber(),
    formatEffect: value => formatPow(value, 2, 4)
  },
  {
    name: "财富汇集",
    id: 16,
    cost: new Decimal(1e55),
    requirement: () => `拥有${format(1e10)}星系力`,
    checkRequirement: () => Currency.galacticPower.gte(1e10),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "你可以在永恒精通中装备第二个货币路径",
    effect: () => player.disablePostReality ? 1 : 2
  },
  {
    name: "压缩计算",
    id: 17,
    cost: new Decimal(1e65),
    requirement: () => `拥有${format(1e20)}星系力`,
    checkRequirement: () => Currency.galacticPower.gte(1e20),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "你可以在永恒精通中装备第二个压缩路径",
    effect: () => player.disablePostReality ? 1 : 2
  },
  {
    name: "金钱倍增",
    id: 18,
    cost: new Decimal(1e75),
    requirement: () => `拥有${format(1e30)}星系力`,
    hasFailed: () => !EndgameUpgrade(16).isBought,
    checkRequirement: () => Currency.galacticPower.gte(1e30) && EndgameUpgrade(16).isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "你可以在永恒精通中装备第三个货币路径",
    effect: () => player.disablePostReality ? 1 : 3
  },
  {
    name: "维度扩张",
    id: 19,
    cost: new Decimal(1e85),
    requirement: () => `拥有${format(1e40)}星系力`,
    hasFailed: () => !EndgameUpgrade(17).isBought,
    checkRequirement: () => Currency.galacticPower.gte(1e40) && EndgameUpgrade(17).isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "你可以在永恒精通中装备第三个压缩路径",
    effect: () => player.disablePostReality ? 1 : 3
  },
  {
    name: "全能富裕",
    id: 20,
    cost: new Decimal(1e95),
    requirement: () => `拥有${format(1e50)}星系力`,
    hasFailed: () => !(EndgameUpgrade(18).isBought && EndgameUpgrade(19).isBought),
    checkRequirement: () => Currency.galacticPower.gte(1e50) && EndgameUpgrade(18).isBought && EndgameUpgrade(19).isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "你可以在永恒精通中装备第四个压缩与货币路径",
    effect: () => player.disablePostReality ? 1 : 4
  },
  {
    name: "无限改进",
    id: 21,
    cost: Decimal.pow(10, 120),
    requirement: "已购买无限增益",
    hasFailed: () => !BreakEternityUpgrade.doubleIPUncap.isBought,
    checkRequirement: () => BreakEternityUpgrade.doubleIPUncap.isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "移除2倍无限点数软上限"
  },
  {
    name: "快子超越",
    id: 22,
    cost: Decimal.pow(10, 170),
    requirement: "已购买星系成长",
    hasFailed: () => !BreakEternityUpgrade.tgThresholdUncap.isBought,
    checkRequirement: () => BreakEternityUpgrade.tgThresholdUncap.isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: () => `基于永恒获得超光速星系阈值的幂`,
    effect: () => player.disablePostReality ? 1 : 1 / Math.log10(player.endgames + 1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  {
    name: "四次量化",
    id: 23,
    cost: Decimal.pow(10, 240),
    requirement: "已购买超立方体穿越",
    hasFailed: () => !BreakEternityUpgrade.tesseractMultiplier.isBought,
    checkRequirement: () => BreakEternityUpgrade.tesseractMultiplier.isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "天神点延后自由超立方体软上限"
  },
  {
    name: "牺牲增压",
    id: 24,
    cost: Decimal.pow(10, 330),
    requirement: () => `已购买献祭补充`,
    hasFailed: () => !BreakEternityUpgrade.glyphSacrificeUncap.isBought,
    checkRequirement: () => BreakEternityUpgrade.glyphSacrificeUncap.isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "所有符文献祭值基于天神物质提升",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Decimal.max(Decimal.log10(Decimal.log10(player.endgame.celestialMatter.add(1)).add(1)).div(2), 1), 1.5).toNumber(),
    formatEffect: value => formatPow(value, 2, 3)
  },
  {
    name: "优势激增",
    id: 25,
    cost: Decimal.pow(10, 440),
    requirement: () => `已购买潜能扩散`,
    hasFailed: () => !BreakEternityUpgrade.glyphSlotImprovement.isBought,
    checkRequirement: () => BreakEternityUpgrade.glyphSlotImprovement.isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    description: "符文等级获得基于反物质的倍率，在不稳定性之后应用",
    effect: () => player.disablePostReality ? 1 : Decimal.min(Decimal.pow(Decimal.max(Decimal.log10(Decimal.log10(player.antimatter.add(1)).add(1)).div(100), 1), 0.05), 1.2).toNumber(),
    formatEffect: value => formatX(value, 2, 4)
  },
];
