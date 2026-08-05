function rebuyable(config) {
  const effectFunction = config.effect || (x => x);
  const { name, id, layer, maxUpgrades, description, isDisabled, noLabel, onPurchased } = config;
  return {
    rebuyable: true,
    name,
    id,
    layer,
    cost: () => new Decimal(config.initialCost).times(
      Decimal.pow(config.costIncrease, player.celestials.pelle.divinityRebuyables[config.id])),
    maxUpgrades,
    description,
    effect: () => effectFunction(player.celestials.pelle.divinityRebuyables[config.id]),
    isDisabled,
    formatEffect: config.formatEffect ||
      (value => {
        return (value === config.maxUpgrades
          ? `Currently: ${formatX(10 - value)}`
          : `Currently: ${formatX(10 - value)} | Next: ${formatX(10 - value - 1)}`);
      }),
    formatCost: value => formatPostBreak(value, 2, 0),
    noLabel,
    onPurchased
  };
}

export const divinityUpgrades = {
  divineL1U1: {
    name: "天神储物",
    id: "divineL1U1",
    layer: 1,
    cost: new Decimal(10000),
    description: "宇宙星区加成以较低比率影响天神维度溢出起点",
    effect: () => Decimal.pow(Ethereal.sectorBoost, 0.1),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL1U2: {
    name: "加速重建",
    id: "divineL1U2",
    layer: 1,
    cost: new Decimal(1e9),
    description: () => `阿尔法衰变残留物达到封顶的时间减少 ${formatPercents(0.1)}`,
    effect: 0.9
  },
  divineL1U3: {
    name: "神性动量",
    id: "divineL1U3",
    layer: 1,
    cost: new Decimal(1e20),
    description: "神性维度根据天神点数获得加成",
    effect: () => Decimal.pow(Decimal.log10(player.endgame.celestialPoints).div(Decimal.log10(DC.NUMMAX)).max(1), 3),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL1U4: {
    name: "毁灭匠人",
    id: "divineL1U4",
    layer: 1,
    cost: new Decimal(1e50),
    description: () => `仅在佩勒中，将反物质指数的指数提升至 ${format(DivinityUpgrade.divineL5U2.isBought ? 1.02 : 1.01, 2, 2)}`,
    effect: () => DivinityUpgrade.divineL5U2.isBought ? 1.02 : 1.01
  },
  divineL1U5: {
    name: "伟大复苏",
    id: "divineL1U5",
    layer: 1,
    cost: new Decimal(1e100),
    description: "解锁神性能量与复苏升级"
  },
  divineL1U6: {
    name: "波长",
    id: "divineL1U6",
    layer: 1,
    cost: new Decimal(1e125),
    description: "神性能量提升神性维度",
    effect: () => Decimal.pow(Currency.divineEnergy.value.min(DC.E20000), 0.5).pow(
      Currency.divineEnergy.value.max(1).log10().max(1).log10().sub(3.3).max(1)).max(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL1U7: {
    name: "幸运七",
    id: "divineL1U7",
    layer: 1,
    cost: new Decimal(1e160),
    description: () => `神性能量产量乘以 ${formatInt(7)}`,
    effect: 7
  },
  divineL1U8: {
    name: "重燃能量",
    id: "divineL1U8",
    layer: 1,
    cost: new Decimal(1e200),
    description: () => `神性能量以 ${formatPercents(0.1)} 正常速率产生`,
    effect: 0.1
  },
  divineL1U9: {
    name: "不朽之流",
    id: "divineL1U9",
    layer: 1,
    cost: new Decimal(1e250),
    description: "产生神性能量不再中断神性维度产量"
  },
  divineL1U10: {
    name: "力不从心",
    id: "divineL1U10",
    layer: 1,
    cost: new Decimal(1e300),
    description: () => `双机接近封顶的时间减少 ${formatPercents(0.5)}`,
    effect: 0.5
  },
  divineL2U1: {
    name: "星辰复利",
    id: "divineL2U1",
    layer: 2,
    cost: new Decimal(1),
    description: "神性维度根据上次凝聚以来的真实时间获得倍率",
    effect: () => Decimal.pow(DivinityUpgrade.divineL5U1.isBought ? Time.thisSupernovaRealTime.totalSeconds.add(1) :
      Time.thisCondenseRealTime.totalSeconds.add(1), 3),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL2U2: {
    name: "恒星耀斑",
    id: "divineL2U2",
    layer: 2,
    cost: new Decimal(7),
    description: "神性星辰提升神性能量产量",
    effect: () => player.celestials.pelle.divinity.divineStars.max(1),
    formatEffect: value => formatX(value, 2)
  },
  divineL2U3: {
    name: "后世",
    id: "divineL2U3",
    layer: 2,
    cost: new Decimal(17),
    description: "神性星辰提升以太能量产量",
    effect: () => Decimal.pow(Decimal.log10(player.celestials.pelle.divinity.divineStars.add(1)).add(1), 7),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL2U4: {
    name: "电化",
    id: "divineL2U4",
    layer: 2,
    cost: new Decimal(77),
    description: "神性能量基础产量现在基于你历史最高的神性物质"
  },
  divineL2U5: {
    name: "不堪损失",
    id: "divineL2U5",
    layer: 2,
    cost: new Decimal(277),
    description: "在凝聚时保留所有第一层神性升级"
  },
  divineL2U6: {
    name: "先机",
    id: "divineL2U6",
    layer: 2,
    cost: new Decimal(777),
    description: () => `凝聚时以 ${format(5e36, 2, 2)} 神性物质开始`,
    effect: 5e36
  },
  divineL2U7: {
    name: "引力",
    id: "divineL2U7",
    layer: 2,
    cost: new Decimal(2777),
    description: () => `神性维度提升至 ${formatPow(1.1, 2, 3)}`,
    effect: 1.1
  },
  divineL2U8: {
    name: "升空",
    id: "divineL2U8",
    layer: 2,
    cost: new Decimal(7777),
    description: () => `神性维度每次购买倍率提升至 ${formatX(17)}`
  },
  divineL2U9: {
    name: "飞升",
    id: "divineL2U9",
    layer: 2,
    cost: new Decimal(77777),
    description: "神性维度根据天神物质获得倍率",
    effect: () => Decimal.pow(Decimal.log10(Currency.celestialMatter.value.max(1)).add(1), 7),
    formatEffect: value => formatX(value, 2, 2)
  },
  divineL2U10: {
    name: "圆满",
    id: "divineL2U10",
    layer: 2,
    cost: new Decimal(1777777),
    description: () => `神性物质效果设为历史最高神性物质，神性能量产量始终以 ${formatPercents(1)} 速率产生且无惩罚`
  },
  divineL3U1: rebuyable({
    name: "熵减",
    id: 0,
    layer: 3,
    initialCost: 1e7,
    costIncrease: 200,
    maxUpgrades: 7,
    description: () => `减少无限后神性维度成本缩放倍率 ${formatInt(1)}`,
    noLabel: true,
    onPurchased: () => GameCache.divineDimensionMultDecrease.invalidate()
  }),
  divineL3U2: rebuyable({
    name: "神性卓越",
    id: 1,
    layer: 3,
    initialCost: 1e8,
    costIncrease: 1e4,
    maxUpgrades: 12,
    description: () => `提升神性维度每次购买倍率`,
    effect: value => player.disablePostReality ? 1 : Math.pow(1 + value/2, Math.log2(10)),
    formatEffect: value => formatX(value, 2, 2),
    noLabel: false
  }),
  divineL3U3: rebuyable({
    name: "恒星增压器",
    id: 2,
    layer: 3,
    initialCost: 1e10,
    costIncrease: 1e10,
    maxUpgrades: 6,
    description: "提升神性星辰加成的指数",
    effect: value => player.disablePostReality ? 1 : value + 1,
    formatEffect: value => formatPow(value, 2),
    noLabel: false
  }),
  divineL3U4: rebuyable({
    name: "星云生成",
    id: 3,
    layer: 3,
    initialCost: 1e12,
    costIncrease: 100,
    maxUpgrades: 10,
    effect: value => player.disablePostReality ? DC.D0 : Player.bestRunVSPM.times(value / 20),
    description: () => {
      let generation = `产生 ${formatInt(5 * player.celestials.pelle.divinityRebuyables[3])}%`;
      if (!DivinityUpgrade.divineL3U4.isCapped) {
        generation += ` ➜ ${formatInt(5 * (1 + player.celestials.pelle.divinityRebuyables[3]))}%`;
      }
      return `${generation} 你上次 10 次凝聚的最佳 VS/分钟`;
    },
    isDisabled: effect => effect.eq(0),
    formatEffect: value => `${format(value, 2, 1)} VS/min`,
    noLabel: false
  }),
  divineL3U5: {
    name: "力即旅程",
    id: "divineL3U5",
    layer: 3,
    cost: new Decimal(1e77),
    description: "神性维度根据凝聚次数获得指数效果",
    effect: () => Decimal.log10(player.celestials.pelle.divinity.condenses.min(7000).div(777).add(1)).div(2).add(1).add(
      Decimal.log10(player.celestials.pelle.divinity.condenses.div(7000).max(1)).div(10)),
    formatEffect: value => formatPow(value, 2, 3)
  },
  divineL4U1: {
    name: "攫取之力",
    id: "divineL4U1",
    layer: 4,
    cost: new Decimal(1),
    description: () => `根据总星云为神性能量和神性星辰获得倍率，并为神性维度获得指数，
      全部基于总星云数`,
    effects: {
      energy: () => player.records.bestSupernova.totalNeb.div(DivinityUpgrade.divineL4U4.isBought ? 7 : 10).add(1).pow(777),
      matter: () => Decimal.log10(player.records.bestSupernova.totalNeb.add(1)).add(1).pow(
        DivinityUpgrade.divineL4U4.isBought ? 0.25 : 0.2),
      stars: () => player.records.bestSupernova.totalNeb.add(1).pow(DivinityUpgrade.divineL4U4.isBought ? 2 : 1)
    }
  },
  divineL4U2: {
    name: "复苏",
    id: "divineL4U2",
    layer: 4,
    cost: new Decimal(3),
    description: "在超新星中保留前五个第二层升级，并为所有神性维度解锁自动购买器"
  },
  divineL4U3: {
    name: "神性艺术",
    id: "divineL4U3",
    layer: 4,
    cost: new Decimal(10),
    description: "神性维度根据本次超新星的真实时间获得指数效果",
    effect: () => Time.thisSupernovaRealTime.totalMinutes.min(300).div(10).add(1).pow(0.1).add(
      Time.thisSupernovaRealTime.totalMinutes.div(300).max(1).log10().div(10)),
    formatEffect: value => formatPow(value, 2, 3)
  },
  divineL4U4: {
    name: "强化",
    id: "divineL4U4",
    layer: 4,
    cost: new Decimal(30),
    description: "在超新星中保留其他五个第二层升级，并提升攫取之力的所有效果"
  },
  divineL4U5: {
    name: "无拘无束",
    id: "divineL4U5",
    layer: 4,
    cost: new Decimal(100),
    description: "移除神性物质上限"
  },
  divineL5U1: {
    name: "保障",
    id: "divineL5U1",
    layer: 5,
    cost: new Decimal(700),
    description: () => "圆满的效果现在贯穿超新星生效"
  },
  divineL5U2: {
    name: "奖赏",
    id: "divineL5U2",
    layer: 5,
    cost: new Decimal(17000),
    description: "在超新星中保留第三层升级，并使毁灭匠人效果翻倍"
  },
  divineL5U3: {
    name: "效能",
    id: "divineL5U3",
    layer: 5,
    cost: new Decimal(7e5),
    description: "神性维度根据当前星云数获得额外指数",
    effect: () => Decimal.log10(Decimal.log10(player.celestials.pelle.divinity.nebulae.add(10))).add(1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  divineL5U4: {
    name: "坚韧",
    id: "divineL5U4",
    layer: 5,
    cost: new Decimal(7e7),
    description: () => `以你最快速度的 ${formatPercents(0.1)} 产生凝聚`
  },
  divineL5U5: {
    name: "告别",
    id: "divineL5U5",
    layer: 5,
    cost: new Decimal(1e10),
    description: () => `每秒产生 ${formatPercents(0.01)} 的待处理神性星辰`
  }
};
