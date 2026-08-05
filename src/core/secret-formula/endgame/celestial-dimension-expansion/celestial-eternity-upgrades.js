function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased, isDecimal } = config;
  return {
    rebuyable: true,
    id,
    cost: () => Decimal.pow(config.costIncrease, player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]).times(config.initialCost),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.celDimExpansion.celestialEternityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect,
    formatCost: value => format(value, 2, 0),
    noLabel,
    onPurchased,
    isDecimal
  };
}

export const celestialEternityUpgrades = {
  betterCIP: rebuyable({
    id: 0,
    initialCost: 1,
    costIncrease: 1e4,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(0.99, value),
    description: () => `将天神点数转换公式除数降低${formatPercents(0.01)}`,
    formatEffect: value => `${formatX(value, 2, 3)}`,
    noLabel: false
  }),
  largeCDMult: rebuyable({
    id: 1,
    initialCost: 10,
    costIncrease: 10,
    maxUpgrades: 1000,
    effect: value => player.disablePostReality ? DC.D1 : Decimal.pow(1000, value),
    description: () => `每次购买将天神维度乘以${formatX(1000)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  conversionFormulaImprovement: rebuyable({
    id: 2,
    initialCost: 1e100,
    costIncrease: 1e50,
    maxUpgrades: 25,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.01, value),
    description: () => `将天神维度转换指数乘以${formatX(1.01, 2, 2)}`,
    formatEffect: value => `${formatX(value, 2, 3)}`,
    noLabel: false
  }),
  startBreak: {
    id: "startBreak",
    cost: 10,
    description: "天神永恒开始时天神无限处于破碎状态"
  },
  bulkCelGalaxies: {
    id: "bulkCelGalaxies",
    cost: 1e3,
    description: "解锁最大天神星系自动购买模式"
  },
  instaAutos: {
    id: "instaAutos",
    cost: 1e6,
    description: "天神维度相关自动购买间隔变为瞬发"
  },
  x2CIPAuto: {
    id: "x2CIPAuto",
    cost: 1e10,
    description: () => `解锁${formatX(2)} CIP倍率升级的自动购买器`
  },
  betterCelCrunchAuto: {
    id: "betterCelCrunchAuto",
    cost: 1e15,
    description: "改进天神紧缩自动购买器"
  },
  startInf: {
    id: "startInf",
    cost: 1e20,
    description: "开始时购买所有天神无限升级"
  },
  startingBoosts: {
    id: "startingBoosts",
    cost: 1e30,
    description: () => `天神紧缩和天神永恒开始时拥有${format(5e25, 2, 2)}天神物质，天神永恒
      开始时拥有${format(5e25, 2, 2)} CIP`,
    effect: 5e25
  },
  startBreakInf: {
    id: "startBreakInf",
    cost: 1e40,
    description: "开始时购买所有天神打破无限升级"
  },
  celEternityAuto: {
    id: "celEternityAuto",
    cost: 1e50,
    description: "解锁天神永恒的自动购买器"
  },
  freeDimBoost: {
    id: "freeDimBoost",
    cost: 1e65,
    description: "购买天神维度冲击不再重置任何东西"
  },
  freeGalaxy: {
    id: "freeGalaxy",
    cost: 1e80,
    description: "购买天神星系不再重置任何东西"
  },
  betterCelEternityAuto: {
    id: "betterCelEternityAuto",
    cost: 1e100,
    description: "改进天神永恒自动购买器"
  },
  celTickReduction: {
    id: "celTickReduction",
    cost: 1e150,
    description: () => `将破后天神Tickspeed 费用缩放降低至${formatX(1.65, 2, 2)}`,
    effect: 0.35
  },
  celDimReduction: {
    id: "celDimReduction",
    cost: 1e225,
    description: () => `将破后天神维度费用缩放降低至${formatX(2)}`,
    effect: 1
  },
  passiveCIP: {
    id: "passiveCIP",
    cost: 1e300,
    description: () => `每秒生成${formatPercents(0.01)}的待处理CIP`
  },
};
