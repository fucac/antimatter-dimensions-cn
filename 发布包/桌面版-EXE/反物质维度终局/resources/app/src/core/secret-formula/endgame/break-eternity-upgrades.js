function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { name, id, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    name,
    id,
    cost: () => Decimal.pow(10, config.initialCost * Math.pow(config.costIncrease, player.breakEternityRebuyables[config.id])),
    maxUpgrades,
    description,
    effect: () => player.disablePostReality ? 1 : effectFunction(player.breakEternityRebuyables[config.id]),
    isDisabled,
    // There isn't enough room in the button to fit the EC reduction and "Next:" at the same time while still
    // presenting all the information in an understandable way, so we only show it if the upgrade is maxed
    formatEffect: config.formatEffect,
    formatCost: value => formatPostBreak(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const breakEternityUpgrades = {
  antimatterDimensionPow: rebuyable({
    name: "反物质幂化",
    id: 0,
    initialCost: 1e15,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "所有反物质维度倍率平方化",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `^${formatHybridSmall(value, 3)}`,
    noLabel: false
  }),
  infinityDimensionPow: rebuyable({
    name: "无限幂化",
    id: 1,
    initialCost: 1e16,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "所有无限维度倍率平方化",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `^${formatHybridSmall(value, 3)}`,
    noLabel: false
  }),
  timeDimensionPow: rebuyable({
    name: "时间幂化",
    id: 2,
    initialCost: 1e17,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "所有时间维度倍率平方化",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `^${formatHybridSmall(value, 3)}`,
    noLabel: false
  }),
  replicantiIntervalPow: rebuyable({
    name: "复制幂化",
    id: 3,
    initialCost: 1e18,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(0.5, value),
    description: () => "复制器间隔开平方",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `^${format(value, 2, 3)}`,
    noLabel: false
  }),
  tachyonParticlePow: rebuyable({
    name: "膨胀时间幂化",
    id: 4,
    initialCost: 1e19,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "超光速粒子增益平方化",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `^${formatHybridSmall(value, 3)}`,
    noLabel: false
  }),
  galaxyScaleDelay: rebuyable({
    name: "星系势能",
    id: 5,
    initialCost: 1e20,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => value * 10000,
    description: () => "延后远距/近距星系缩放",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatInt(value)} 个星系`,
    noLabel: false
  }),
  infinityPowerConversion: rebuyable({
    name: "力量累积",
    id: 6,
    initialCost: 1e21,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "无限之力转化率翻倍",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  epMultiplierDelay: rebuyable({
    name: "软阻阻碍",
    id: 7,
    initialCost: 1e22,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(10, value),
    description: () => `将5倍EP倍率成本缩放的起始提升至${formatPow(10)}`,
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `^${formatHybridSmall(value, 3)}`,
    noLabel: false
  }),
  replicantiGalaxyPower: rebuyable({
    name: "缩放悬停",
    id: 8,
    initialCost: 1e23,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "复制器星系成本缩放起始翻倍",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  dilatedTimeMultiplier: rebuyable({
    name: "倍增放大",
    id: 9,
    initialCost: 1e24,
    costIncrease: 1e10,
    maxUpgrades: 10,
    effect: value => Math.pow(2, value),
    description: () => "2倍膨胀时间升级的每次购买倍率翻倍",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  doubleIPUncap: {
    name: "无限增益",
    id: "doubleIPUncap",
    cost: Decimal.pow(10, 1e30),
    description: "解除2倍IP倍率升级的上限"
  },
  tgThresholdUncap: {
    name: "星系成长",
    id: "tgThresholdUncap",
    cost: Decimal.pow(10, 1e40),
    description: "解除TG阈值升级的上限并改进公式"
  },
  tesseractMultiplier: {
    name: "超立方体穿越",
    id: "tesseractMultiplier",
    cost: Decimal.pow(10, 1e50),
    description: "所有有效超立方体翻倍",
    effect: 2
  },
  glyphSacrificeUncap: {
    name: "献祭补充",
    id: "glyphSacrificeUncap",
    cost: Decimal.pow(10, 1e70),
    description: "解除所有符文的献祭值上限"
  },
  glyphSlotImprovement: {
    name: "潜能扩散",
    id: "glyphSlotImprovement",
    cost: Decimal.pow(10, 1e100),
    description: "在佩勒之外额外增加3个符文槽",
    effect: 3
  },
};
