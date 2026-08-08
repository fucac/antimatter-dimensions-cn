export const resurgenceUpgrades = {
  ipSurge: {
    name: "无限涌动",
    id: "ipSurge",
    cost: new Decimal(10000),
    description: "无限点数等于反物质，反物质产量乘以待处理无限点数"
  },
  epSurge: {
    name: "永恒涌动",
    id: "epSurge",
    cost: new Decimal(1e6),
    description: "永恒点数等于反物质，反物质产量乘以待处理永恒点数"
  },
  realSurge: {
    name: "宇宙外流",
    id: "realSurge",
    cost: new Decimal(1e8),
    description: "终局次数产生现实"
  },
  rmSurge: {
    name: "宇宙涌动",
    id: "rmSurge",
    cost: new Decimal(1e10),
    description: "现实提升现实机器产量与上限，在所有倍率效果之后结算"
  },
  imSurge: {
    name: "虚构终焉",
    id: "imSurge",
    cost: new Decimal(1e12),
    description: "虚幻机器上限根据终局次数提升",
    effect: () => 1 + Math.log10(Math.log10(player.endgames + 1) + 1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  repSurge: {
    name: "复制涌动",
    id: "repSurge",
    cost: new Decimal(1e20),
    description: "复制器现在也为其每一项加成提供指数效果"
  },
  achSurge: {
    name: "成就涌动",
    id: "achSurge",
    cost: new Decimal(1e30),
    description: "每一项成就倍率加成现在也为其加成提供指数效果"
  },
  curr1Surge: {
    name: "无限涌动",
    id: "curr1Surge",
    cost: new Decimal(1e50),
    description: "无限、永恒与时间定理取其自身的二重对数"
  },
  curr2Surge: {
    name: "膨胀时间涌动",
    id: "curr2Surge",
    cost: new Decimal(1e80),
    description: "膨胀时间与超光速粒子取其自身的二重对数，但仅在佩勒之外生效"
  },
  glyphSurge: {
    name: "献祭涌动",
    id: "glyphSurge",
    cost: new Decimal(1e120),
    description: () => `音乐符文现在以比你当前最高符文等级低 ${formatInt(1)} 级的等级生成`
  },
  ethSurge: {
    name: "以太振幅",
    id: "ethSurge",
    cost: new Decimal(1e200),
    description: "以太能量以星系半径平方倍率提升",
    effect: () => Decimal.pow(Ethereal.cosmicSector, 2),
    formatEffect: value => formatX(value, 2)
  },
  machineSurge: {
    name: "机械倍增",
    id: "machineSurge",
    cost: new Decimal("1e350"),
    description: "所有机械根据你星星的乘积获得指数效果",
    effect: () => Decimal.pow(Decimal.log10(Ethereal.stellarProduct).add(1), 0.1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  rsSurge: {
    name: "遗迹复苏",
    id: "rsSurge",
    cost: new Decimal("1e550"),
    description: "遗迹碎片的独特符文效果系数现在基于你背包中符文的总独特效果数",
  },
  memSurge: {
    name: "记忆放大",
    id: "memSurge",
    cost: new Decimal("1e800"),
    description: "提升无名氏与薇的记忆基础产量"
  },
  entropySurge: {
    name: "熵之尾声",
    id: "entropySurge",
    cost: new Decimal("1e1100"),
    description: "根据终局次数获得更多熵",
    effect: () => Math.pow(player.endgames, 0.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  synergy1: {
    name: "时空扭曲 I",
    id: "synergy1",
    cost: new Decimal("1e2250"),
    description: "时间定理受空间定理加成",
    effect: () => V.spaceTheorems,
    formatEffect: value => formatPow(value, 2)
  },
  synergy2: {
    name: "时空扭曲 II",
    id: "synergy2",
    cost: new Decimal("1e2400"),
    description: "天神维度根据佩勒之外产生的总反物质获得指数",
    effect: () => Decimal.log10(Decimal.log10(Decimal.log10(player.records.totalAntimatterOutsideDoom).add(1)).add(1)).div(15).add(1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  synergy3: {
    name: "时空扭曲 III",
    id: "synergy3",
    cost: new Decimal("1e2550"),
    description: "空间定理根据你星星的乘积获得倍率",
    effect: () => Decimal.log10(Ethereal.stellarProduct).max(1).toNumber(),
    formatEffect: value => formatX(value, 2, 2)
  },
  synergy4: {
    name: "时空扭曲 IV",
    id: "synergy4",
    cost: new Decimal("1e2700"),
    description: "时间定理提升星系强度",
    effect: () => Decimal.pow(Decimal.log10(Decimal.log10(player.timestudy.theorem.max(1)).add(1)), 3).add(1),
    formatEffect: value => formatX(value, 2, 2)
  },
  synergy5: {
    name: "时空扭曲 V",
    id: "synergy5",
    cost: new Decimal("1e2850"),
    description: "反物质产量根据Tickspeed 获得加成",
    effect: () => Decimal.log10(Decimal.log10(Tickspeed.perSecond).add(1)).add(1),
    formatEffect: value => formatPow(value, 2, 3)
  },
  synergy6: {
    name: "圆满",
    id: "synergy6",
    cost: new Decimal("1e4000"),
    description: "天神物质提升以太能量产量",
    effect: () => Decimal.pow(Decimal.log10(Decimal.log10(Currency.celestialMatter.value.max(1)).add(1)).add(1), 7),
    formatEffect: value => formatX(value, 2, 2)
  },
  unl1: {
    name: "毕业",
    id: "unl1",
    cost: new Decimal("1e7000"),
    description: "解锁更多终局精通"
  },
  unl2: {
    name: "虚无",
    id: "unl2",
    cost: new Decimal("1e12000"),
    description: "解锁更多奇点里程碑"
  },
  unl3: {
    name: "星云",
    id: "unl3",
    cost: new Decimal("1e20000"),
    description: "解锁更多星系之力"
  },
  unl4: {
    name: "复苏",
    id: "unl4",
    cost: new Decimal("1e33000"),
    description: "解锁飞升"
  }
};
