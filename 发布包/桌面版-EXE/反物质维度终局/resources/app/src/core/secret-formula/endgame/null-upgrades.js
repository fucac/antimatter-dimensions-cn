function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { name, id, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    name,
    id,
    cost: () => new Decimal(config.initialCost).times(
      Decimal.pow(config.costIncrease, player.endgame.largeHadronCollider.void.rebuyables[config.id])),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.endgame.largeHadronCollider.void.rebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect,
    formatCost: value => formatPostBreak(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const nullUpgrades = {
  antimatterDimensionMult: rebuyable({
    name: "虚空能量",
    id: 0,
    initialCost: 100,
    costIncrease: 10,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "将所有反物质维度相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  infinityPointMult: rebuyable({
    name: "空寂浩瀚",
    id: 1,
    initialCost: 10000,
    costIncrease: 100,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "将无限点数获取相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  infinityMult: rebuyable({
    name: "荒芜丰饶",
    id: 2,
    initialCost: 1e6,
    costIncrease: 1000,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(1.25, value),
    description: () => "将无限获取相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  infinityDimensionMult: rebuyable({
    name: "虚渺无限",
    id: 3,
    initialCost: 1e8,
    costIncrease: 10000,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "将所有无限维度相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  replicantiSpeedMult: rebuyable({
    name: "寂寂复制",
    id: 4,
    initialCost: 1e10,
    costIncrease: 100000,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(1.25, value),
    description: () => "将复制器速度相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  eternityPointMult: rebuyable({
    name: "永寂虚无",
    id: 5,
    initialCost: 1e12,
    costIncrease: 1e6,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "将永恒点数获取相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  timeDimensionMult: rebuyable({
    name: "淡然时间",
    id: 6,
    initialCost: 1e15,
    costIncrease: 1e7,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow10(Math.pow(value, 2)),
    description: () => "将所有时间维度相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  eternityMult: rebuyable({
    name: "不朽无用",
    id: 7,
    initialCost: 1e18,
    costIncrease: 1e8,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(1.25, value),
    description: () => "将永恒获取相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    noLabel: false
  }),
  dilatedTimeMult: rebuyable({
    name: "虚胀无效",
    id: 8,
    initialCost: 1e40,
    costIncrease: 1e9,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(2, value),
    description: () => "将膨胀时间获取相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  tachyonParticleMult: rebuyable({
    name: "漫长无义",
    id: 9,
    initialCost: 1e45,
    costIncrease: 1e10,
    maxUpgrades: Number.MAX_VALUE,
    effect: value => Decimal.pow(2, value),
    description: () => "将超光速粒子获取相乘",
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${formatX(value, 2)}`,
    noLabel: false
  }),
  ncComp: {
    name: "虚无常境",
    id: "ncComp",
    cost: Decimal.pow10(5),
    description: "在虚空内，普通挑战始终完成",
    onPurchased: () => NormalChallenges.completeAll()
  },
  alwaysBroken: {
    name: "荒芜破碎",
    id: "alwaysBroken",
    cost: Decimal.pow10(10),
    description: "在虚空内，无限始终处于破碎状态",
    onPurchased: () => player.break = true
  },
  icComp: {
    name: "空凹挑战",
    id: "icComp",
    cost: Decimal.pow10(15),
    description: "在虚空内，无限挑战始终完成",
    onPurchased: () => InfinityChallenges.completeAll()
  },
  repUnl: {
    name: "虚弃复制",
    id: "repUnl",
    cost: Decimal.pow10(20),
    description: "在虚空内，复制器始终解锁",
    onPurchased: () => Replicanti.unlock(true)
  },
  eterMiles: {
    name: "永虚预演",
    id: "eterMiles",
    cost: Decimal.pow10(25),
    description: () => `进入虚空时起始拥有${formatInt(100)}永恒`,
    onPurchased: () => Currency.eternities.bumpTo(100)
  },
  limerick1: {
    name: "尘埃之智",
    id: "limerick1",
    cost: Decimal.pow10(30),
    description: () => `成就${formatInt(111)}和${formatInt(118)}的效果现在在虚空内生效`
  },
  limerick2: {
    name: "诗意置信",
    id: "limerick2",
    cost: Decimal.pow10(45),
    description: () => `成就${formatInt(143)}的效果现在在虚空内生效`
  },
  limerick3: {
    name: "循名责实",
    id: "limerick3",
    cost: Decimal.pow10(60),
    description: "在虚空内，永恒挑战始终完全完成",
    onPurchased: () => {
      player.eternityChalls = {
        eterc1: 5,
        eterc2: 5,
        eterc3: 5,
        eterc4: 5,
        eterc5: 5,
        eterc6: 5,
        eterc7: 5,
        eterc8: 5,
        eterc9: 5,
        eterc10: 5,
        eterc11: 5,
        eterc12: 5
      }
    }
  },
  limerick4: {
    name: "如彼所思",
    id: "limerick4",
    cost: Decimal.pow10(80),
    description: "进入虚空时时间 dilation 已解锁",
    onPurchased: () => {
      if (!player.dilation.studies.includes(1)) player.dilation.studies.push(1);
    }
  },
  limerick5: {
    name: "终归天命",
    id: "limerick5",
    cost: Decimal.pow10(100),
    description: "前现实的所有自动化和自动机在虚空内始终激活"
  }
};
