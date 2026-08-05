export const celestialInfinityUpgrades = {
  gameSpeedMultCIP: {
    id: "gameSpeedMultCIP",
    cost: 1,
    description: () => `基于未花费的天神点数获得游戏速度倍率`,
    effect: () => player.disablePostReality ? DC.D1 : Currency.celestialInfinityPoints.value.plus(1).pow(308),
    formatEffect: value => formatX(value, 2, 1)
  },
  celDimPurchaseBoost: {
    id: "celDimPurchaseBoost",
    cost: 2,
    description: () => `将天神维度每次购买倍率提升至${formatX(3)}`,
    effect: 3
  },
  alphaDecayStartBoost: {
    id: "alphaDecayStartBoost",
    cost: 5,
    description: () => `基于天神无限获得阿尔法衰减开始时间的微弱增益`,
    effect: () => Decimal.pow(player.endgame.celDimExpansion.celestialInfinities, 0.5).div(100).min(1).add(
      DC.D4.times(DC.D1.sub(Decimal.pow(0.8, player.endgame.celDimExpansion.celestialInfinities.max(1).log10().sub(4).max(0))))),
    formatEffect: value => `${TimeSpan.fromHours(value).toStringShort()}`
  },
  celDimBoostBuff: {
    id: "celDimBoostBuff",
    cost: 10,
    description: () => `将天神维度冲击基础倍率提升至${formatX(100)}`,
    effect: 100
  },
  celGalaxyBuff: {
    id: "celGalaxyBuff",
    cost: 25,
    description: () => `将天神星系增益从${formatX(1.02, 2, 2)}提升至${formatX(1.03, 2, 2)}每星系`,
    effect: 1.03
  },
  celestialMatterConversionBuff: {
    id: "celestialMatterConversionBuff",
    cost: 50,
    description: () => `将天神物质转换率基础从${formatPow(2)}提升至${formatPow(2.5, 1, 1)}`,
    effect: 2.5
  },
  antimatterCelestialDimBuff: {
    id: "antimatterCelestialDimBuff",
    cost: 100,
    description: "阿尔法衰减后，将所有天神维度乘以反物质指数的指数",
    effect: () => Decimal.log10(Decimal.log10(player.antimatter.add(1)).add(1)).max(1)
  },
  cipGen: {
    id: "cipGen",
    cost: 300,
    description: () => `以最快天神紧缩的${formatPercents(0.1)}速率生成CIP`,
    effect: () => player.records.bestCelestialInfinity.time.times(10)
  },
  buffedStart: {
    id: "buffedStart",
    cost: 1000,
    description: () => `天神无限开始时拥有${formatInt(4)}天神维度冲击和${formatInt(2)}天神星系`,
    effect: 4
  }
};
