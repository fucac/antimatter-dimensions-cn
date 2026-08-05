function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { id, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    id,
    cost: () => config.initialCost * Math.pow(config.costIncrease, player.endgame.celDimExpansion.celestialInfinityRebuyables[config.id]),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.celDimExpansion.celestialInfinityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect ||
      (value => {
        return (value === config.maxUpgrades
          ? `Currently: ${formatX(10 - value)}`
          : `Currently: ${formatX(10 - value)} | Next: ${formatX(10 - value - 1)}`);
      }),
    formatCost: value => format(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const celestialBreakInfinityUpgrades = {
  autoCD1: {
    id: "autoCD1",
    cost: 5e4,
    description: "解锁天神维度1-4的自动购买器"
  },
  autoCD2: {
    id: "autoCD2",
    cost: 1e5,
    description: "解锁天神维度5-8的自动购买器"
  },
  autoCDPlus: {
    id: "autoCDPlus",
    cost: 1e6,
    description: "解锁天神Tickspeed、天神维度冲击、天神星系和天神紧缩的自动购买器"
  },
  betterAuto: {
    id: "betterAuto",
    cost: 1e9,
    description: () => `所有天神维度相关自动化速度为${formatX(3)}倍`,
    effect: 3
  },
  bulkCelDimBoosts: {
    id: "bulkCelDimBoosts",
    cost: 1e15,
    description: "解锁最大天神维度冲击自动购买模式"
  },
  celInfGen: {
    id: "celInfGen",
    cost: 1e24,
    description: () => `以最快速度的${formatPercents(0.5)}生成天神无限`
  },
  celTickspeedCostMult: rebuyable({
    id: 0,
    initialCost: 1e5,
    costIncrease: 20,
    maxUpgrades: 8,
    description: "降低无限后天神Tickspeed 升级费用倍率的缩放",
    noLabel: true,
    onPurchased: () => GameCache.celestialTickSpeedMultDecrease.invalidate()
  }),
  celDimCostMult: rebuyable({
    id: 1,
    initialCost: 4e5,
    costIncrease: 100,
    maxUpgrades: 7,
    description: "降低无限后天神维度费用倍率的缩放",
    noLabel: true,
    onPurchased: () => GameCache.celestialDimensionMultDecrease.invalidate()
  }),
  cipGen: rebuyable({
    id: 2,
    initialCost: 1e6,
    costIncrease: 10,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? DC.D0 : Player.bestRunCIPPM.times(value / 20),
    description: () => {
      let generation = `生成${formatInt(5 * player.endgame.celDimExpansion.celestialInfinityRebuyables[2])}%`;
      if (!CelestialBreakInfinityUpgrade.cipGen.isCapped) {
        generation += ` ➜ ${formatInt(5 * (1 + player.endgame.celDimExpansion.celestialInfinityRebuyables[2]))}%`;
      }
      return `${generation}的你最近10次天神无限的最佳CIP/分钟`;
    },
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${format(value, 2, 1)} CIP/分钟`,
    noLabel: false
  }),
  celDimPurchaseBuff: rebuyable({
    id: 3,
    initialCost: 1e9,
    costIncrease: 1e3,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.2, value),
    description: () => `将天神维度每次购买倍率增加${formatPercents(0.2)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  celDimboostBuff: rebuyable({
    id: 4,
    initialCost: 1e12,
    costIncrease: 1e6,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.5, value),
    description: () => `将天神维度冲击倍率增加${formatPercents(0.5)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  celGalaxyBuff: rebuyable({
    id: 5,
    initialCost: 1e15,
    costIncrease: 1e9,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? 1 : Math.pow(1.1, value),
    description: () => `将天神星系到天神Tickspeed 倍率增加${formatPercents(0.1)}`,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  })
};
