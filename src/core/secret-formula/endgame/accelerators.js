export const accelerators = {
  potency: {
    id: 1,
    key: "potency",
    name: "势能加速器",
    drainResource: "反物质",
    baseEffect1: x => `反物质生成 ${formatPow(x, 2, 3)}`,
    baseEffect2: x => `熵增益 ${formatX(x, 2, 2)}`,
    baseEffect3: x => `神圣物质/能量产出 ${formatX(x, 2, 2)}`,
    percentage: totalFill => Decimal.log10(totalFill.plus(1).log10().div(1e200)).div(100).toNumber(),
    percentageToFill: percentage => Decimal.pow10(Decimal.pow10(percentage * 100).times(1e200)).sub(1),
    effects: {
      alpha: percentage => player.disablePostReality ? DC.D1 : Decimal.pow10(percentage / 10),
      beta: percentage => player.disablePostReality ? DC.D1 : Decimal.pow10(percentage),
      gamma: percentage => player.disablePostReality ? DC.D1 : Decimal.pow10(percentage / 5),
    },
    currency: () => Currency.antimatter,
    unlockReq: () => Decimal.pow10(1e200),
    milestones: [
      {
        resource: "potency",
        requirement: 0.15,
        description: "在虚空内，反物质维度被平方化",
        effect: () => 2
      },
      {
        resource: "potency",
        requirement: 0.4,
        description: "最终强子提升反物质硬上限",
        effect: () => player.disablePostReality ? 0 : Math.clamp(Math.floor(Math.pow(2 * Math.max(player.celestials.laitela.hadrons.total - 100, 0) + 0.25, 0.5) - 0.5), 0, 25)
      },
      {
        resource: "potency",
        requirement: 0.75,
        description: () => `将天神维度转换为连续统，并以${formatPow(0.1, 1, 1)}的比率通过连续统购买强化它们`
      },
    ]
  },
  emptiness: {
    id: 2,
    key: "emptiness",
    name: "虚空加速器",
    drainResource: "虚无物质",
    baseEffect1: x => `虚空中AD${formatPow(x, 2, 3)}`,
    baseEffect2: x => `强子效能上限 +${formatPercents(x - 1, 2)}`,
    baseEffect3: x => `反物质溢出幅度 ${formatInt(10)} ➜ ${format(x, 2, 2)}`,
    percentage: totalFill => Decimal.min(totalFill.div(20000), totalFill.max(1).log10()).div(100).toNumber(),
    percentageToFill: percentage => Decimal.max(new Decimal(percentage * 100).times(20000), Decimal.pow10(percentage * 100)),
    effects: {
      alpha: percentage => Decimal.pow(1 + percentage / 100, 1 + percentage / 100),
      beta: percentage => player.disablePostReality ? 1 : 1 + percentage / 100,
      gamma: percentage => player.disablePostReality ? 10 : 1 / (0.1 + percentage * 3 / 2000),
    },
    currency: () => Currency.nullMatter,
    unlockReq: () => Decimal.pow10(5),
    milestones: [
      {
        resource: "emptiness",
        requirement: 0.07,
        description: "在虚空内，反物质维度基于毁灭外产出的总反物质被提升至某指数",
        effect: () => Decimal.log10(Decimal.log10(player.records.totalAntimatterOutsideDoom)).div(200).add(1)
      },
      {
        resource: "emptiness",
        requirement: 0.3,
        description: "神圣维度基于虚空内最强反物质获得力量",
        effect: () => player.disablePostReality ? DC.D1 : Decimal.log10(Decimal.log10(player.endgame.largeHadronCollider.void.highestAntimatter)).div(100).add(1)
      },
      {
        resource: "emptiness",
        requirement: 1,
        description: () => `反物质硬上限提升${formatInt(25)}个数量级平方`,
        effect: () => player.disablePostReality ? 0 : 25
      },
    ]
  },
  cosmic: {
    id: 3,
    key: "cosmic",
    name: "宇宙加速器",
    drainResource: "星系",
    baseEffect1: x => `星系生成 ${formatPow(x, 2, 3)}`,
    baseEffect2: x => `毁灭时反物质指数 ${formatPow(x, 2, 3)}`,
    baseEffect3: x => `毁灭时反物质指数的平方 ${formatPow(x, 2, 4)}`,
    percentage: totalFill => Math.min(Decimal.log10(totalFill.max("1e3000")).sub(3000).div(5000).sqrt().times(20).div(100).toNumber(),
      Decimal.log10(totalFill.max(1)).sub(3000).div(5000).times(20).div(100).toNumber()),
    percentageToFill: percentage => Decimal.max(Decimal.pow10(Decimal.sqr(percentage * 100 / 20).times(5000).add(3000)),
      Decimal.pow10(new Decimal(percentage * 100 / 20).times(5000).add(3000))),
    effects: {
      alpha: percentage => player.disablePostReality ? 1 : 1 + percentage / 200,
      beta: percentage => player.disablePostReality ? 1 : 1 + percentage / 100,
      gamma: percentage => player.disablePostReality ? 1 : 1 + percentage / 2000,
    },
    currency: () => Currency.galaxyGeneratorGalaxies,
    unlockReq: () => Decimal.pow10(3000),
    milestones: [
      {
        resource: "cosmic",
        requirement: 0.2,
        description: "在虚空内，星系基于宇宙加速器百分比获得强化",
        effect: () => 1 + Accelerators.cosmic.percentage * 100
      },
      {
        resource: "cosmic",
        requirement: 0.4,
        description: "解锁新的星系生成器升级"
      },
      {
        resource: "cosmic",
        requirement: 1,
        description: () => `反物质硬上限提升${format(Decimal.log10(DC.NUMMAX).sub(275), 4, 4)}个数量级平方`,
        effect: () => player.disablePostReality ? 0 : Decimal.log10(DC.NUMMAX).sub(275).toNumber()
      },
    ]
  }
};
