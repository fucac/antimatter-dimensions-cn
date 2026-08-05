export const galacticPowerRewards = {
  galaxyStrength: {
    id: 1,
    galacticPower: 0,
    reward: "提升星系强度",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(10), 3).add(1).min(30000).times(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).max(1)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `星系强度提升${value >= 11 ? formatX(value, 2, 2) : formatPercents(value - 1, 2, 2)}`
  },
  remoteGalaxyScale: {
    id: 2,
    galacticPower: 1e10,
    reward: "推迟远程星系缩放",
    effect: () => player.disablePostReality ? 0 : Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).times(5), 2).min(2.5e6).times(Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).max(1), 2)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `远程星系缩放推迟${formatHybridLarge(value, 3)}个星系`
  },
  remoteGalaxyPower: {
    id: 3,
    galacticPower: 1e20,
    reward: "削弱远程星系缩放",
    effect: () => player.disablePostReality ? 1 : DC.D1.sub(((Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)), 0.5).times(5)).div(100))).max(0.1).div(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).max(1)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? 1 / GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? 1 / GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `远程星系缩放减弱${formatPercents(1 - value, 2, 2)}`
  },
  galGenInstability1: {
    id: 4,
    galacticPower: 1e50,
    reward: "推迟第一个星系生成器不稳定阈值",
    effect: () => player.disablePostReality ? DC.D0 : Decimal.pow(10, Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).times(50)).min(1e50).pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).max(1)),
    formatEffect: value => `第一个星系生成器不稳定阈值推迟${formatX(value, 2, 2)}个星系`
  },
  replicantiGalaxies: {
    id: 5,
    galacticPower: 1e100,
    reward: "复制器星系获取倍增",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(100), 1.25).add(1).min(6).times(Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).max(1), 0.5)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `额外获取${formatX(value, 2, 2)}个复制器星系`
  },
  tachyonGalaxies: {
    id: 6,
    galacticPower: 1e150,
    reward: "降低超光速星系阈值倍率",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(200), 3).add(1).min(5).times(Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).max(1), 0.5)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `对超光速星系阈值倍率取${format(value, 2, 2)}次方根`
  },
  galGenInstability2: {
    id: 7,
    galacticPower: 1e200,
    reward: "降低第二个星系生成器不稳定幅度的指数",
    effect: () => player.disablePostReality ? 1 : (Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(100), 1.5).div(10)).add(1).min(1.6).times(Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(Decimal.log10(DC.NUMMAX)).max(1), 0.25)).pow(GalacticPowers.galaxyEmpowerment1.isUnlocked ? GalacticPowers.galaxyEmpowerment1.reward : 1).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `对第二个星系生成器不稳定幅度取${format(value, 2, 2)}次方根`
  },
  etherealUnlock: {
    id: 8,
    galacticPower: Number.MAX_VALUE,
    reward: "解锁以太"
  },
  galacticAscension: {
    id: 9,
    galacticPower: new Decimal("1e7800"),
    reward: "星系类型现在在大于零时相乘而非相加"
  },
  galaxyEmpowerment1: {
    id: 10,
    galacticPower: new Decimal("1e10000"),
    reward: "以指数方式提升上述所有星系之力的效果",
    effect: () => player.disablePostReality ? 1 : Decimal.log10(Decimal.log10(Currency.galacticPower.value.add(1)).add(1)).div(4).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `上述星系之力效果提升${value >= 11 ? formatX(value, 2, 2) : formatPercents(value - 1, 2, 2)}`
  },
  celestialGalaxyEmpowerment: {
    id: 11,
    galacticPower: new Decimal("1e15000"),
    reward: "提升天神星系的强度",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Decimal.log10(Currency.galacticPower.value.add(1)).div(15000), 5).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `天神星系强度提升${value >= 11 ? formatX(value, 2, 2) : formatPercents(value - 1, 2, 2)}`
  },
  freeGalaxies: {
    id: 12,
    galacticPower: new Decimal("1e25000"),
    reward: "获得免费星系",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Currency.galacticPower.value.div("1e25000"), 0.01).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1),
    formatEffect: value => `${formatHybridLarge(value, 3)}个免费星系`
  },
  galaxyScaling: {
    id: 13,
    galacticPower: new Decimal("1e40000"),
    reward: "降低反物质星系的基础成本缩放",
    effect: () => player.disablePostReality ? 1 : Decimal.pow(0.9, Decimal.log10(Decimal.log10(Currency.galacticPower.value.add(1)).div(40000)).add(1).pow(2).sub(1)).pow(GalacticPowers.galaxyEmpowerment2.isUnlocked ? GalacticPowers.galaxyEmpowerment2.reward : 1).toNumber(),
    formatEffect: value => `反物质星系成本缩放降低${formatPercents(1 - value, 2, 2)}`
  },
  galaxyEmpowerment2: {
    id: 14,
    galacticPower: new Decimal("1e66000"),
    reward: "以指数方式提升上述所有星系之力的效果",
    effect: () => player.disablePostReality ? 1 : Decimal.log10(Decimal.log10(Currency.galacticPower.value.add(1)).div(66000)).toNumber(),
    formatEffect: value => `上述星系之力效果提升${value >= 11 ? formatX(value, 2, 2) : formatPercents(value - 1, 2, 2)}`
  },
  stelliferousUniverse: {
    id: 15,
    galacticPower: new Decimal("1e100000"),
    reward: "解锁星空宇宙"
  }
};
