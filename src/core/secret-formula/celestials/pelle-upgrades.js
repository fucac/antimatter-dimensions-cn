const formatCost = c => format(c, 2);
// eslint-disable-next-line max-params
const expWithIncreasedScale = (base1, base2, incScale, coeff, x) =>
  Decimal.pow(base1, x).times(Decimal.pow(base2, x - incScale).max(1)).times(coeff);

const rebuyable = config => {
  const { id, description, cost, effect, formatEffect, cap } = config;
  return {
    id,
    description,
    cost: () => expWithIncreasedScale(...cost, player.celestials.pelle.rebuyables[id]),
    formatCost,
    cap,
    effect: (x = player.celestials.pelle.rebuyables[id]) => effect(x),
    formatEffect,
    rebuyable: true
  };
};

export const pelleUpgrades = {
  antimatterDimensionMult: rebuyable({
    id: "antimatterDimensionMult",
    description: "反物质维度增益倍率",
    cost: [10, 250, 41, 10],
    effect: x => Pelle.antimatterDimensionMult(x),
    formatEffect: x => formatX(x, 2, 2),
    cap: 47
  }),
  timeSpeedMult: rebuyable({
    id: "timeSpeedMult",
    description: "游戏速度增益倍率",
    cost: [20, 1e3, 30, 1e5],
    effect: x => Decimal.pow(1.3, x),
    formatEffect: x => formatX(x, 2, 2),
    cap: 35
  }),
  glyphLevels: rebuyable({
    id: "glyphLevels",
    description: "提升佩勒中允许的符文等级",
    cost: [30, 1e3, 25, 1e15],
    effect: x => Math.floor(((3 * (x + 1)) - 2) ** 1.6),
    formatEffect: x => formatInt(x),
    cap: 26
  }),
  infConversion: rebuyable({
    id: "infConversion",
    description: "提升无限力转化率",
    cost: [40, 1e3, 20, 1e18],
    effect: x => (x * 3.5) ** 0.37,
    formatEffect: x => `+${format(x, 2, 2)}`,
    cap: 21
  }),
  galaxyPower: rebuyable({
    id: "galaxyPower",
    description: "倍增星系之力",
    cost: [1000, 1e3, 10, 1e30],
    effect: x => 1 + x / 50,
    formatEffect: x => formatX(x, 2, 2),
    cap: 9
  }),
  antimatterDimAutobuyers1: {
    id: 0,
    description: "获取反物质维度1-4之永久自动购买",
    cost: 1e5,
    formatCost,
  },
  dimBoostAutobuyer: {
    id: 1,
    description: "获取维度提升之永久自动购买",
    cost: 5e5,
    formatCost,
  },
  keepAutobuyers: {
    id: 2,
    description: "自动购买升级在末日审判时不再重置",
    cost: 5e6,
    formatCost,
  },
  antimatterDimAutobuyers2: {
    id: 3,
    description: "获取反物质维度5-8之永久自动购买",
    cost: 2.5e7,
    formatCost,
  },
  galaxyAutobuyer: {
    id: 4,
    description: "获取反物质星系之永久自动购买",
    cost: 1e8,
    formatCost,
  },
  tickspeedAutobuyer: {
    id: 5,
    description: "获取Tickspeed 升级之永久自动购买",
    cost: 1e9,
    formatCost,
  },
  keepInfinityUpgrades: {
    id: 6,
    description: "无限升级在末日审判时不再重置",
    cost: 1e10,
    formatCost,
  },
  dimBoostResetsNothing: {
    id: 7,
    description: "维度提升不再重置任何内容",
    cost: 1e11,
    formatCost,
  },
  keepBreakInfinityUpgrades: {
    id: 8,
    description: "打破无限升级在末日审判时不再重置",
    cost: 1e12,
    formatCost,
  },
  IDAutobuyers: {
    id: 9,
    description: "获取无限维度之永久自动购买",
    cost: 1e14,
    formatCost,
  },
  keepInfinityChallenges: {
    id: 10,
    description: "无限挑战解锁与完成在末日审判时不再重置",
    cost: 1e15,
    formatCost,
  },
  galaxyNoResetDimboost: {
    id: 11,
    description: "星系不再重置维度提升",
    cost: 1e16,
    formatCost
  },
  replicantiAutobuyers: {
    id: 12,
    description: "获取复制器升级之永久自动购买",
    cost: 1e17,
    formatCost,
  },
  replicantiGalaxyNoReset: {
    id: 13,
    description: "复制器星系在无限时不再重置",
    cost: 1e19,
    formatCost,
  },
  eternitiesNoReset: {
    id: 14,
    description: "永恒在末日审判时不再重置",
    cost: 1e20,
    formatCost,
  },
  timeStudiesNoReset: {
    id: 15,
    description: "时间研究与定理在末日审判时不再重置",
    cost: 1e21,
    formatCost,
  },
  replicantiStayUnlocked: {
    id: 16,
    description: "复制器永久解锁",
    cost: 1e22,
    formatCost,
  },
  keepEternityUpgrades: {
    id: 17,
    description: "永恒升级在末日审判时不再重置",
    cost: 1e24,
    formatCost,
  },
  TDAutobuyers: {
    id: 18,
    description: "获取时间维度之永久自动购买",
    cost: 1e25,
    formatCost,
  },
  keepEternityChallenges: {
    id: 19,
    description: "永恒挑战完成在末日审判时不再重置",
    cost: 1e26,
    formatCost,
  },
  dilationUpgradesNoReset: {
    id: 20,
    description: "膨胀时间升级在末日审判时不再重置",
    cost: 1e45,
    formatCost,
  },
  tachyonParticlesNoReset: {
    id: 21,
    description: "超光速粒子在末日审判时不再重置",
    cost: 1e50,
    formatCost,
  },
  replicantiGalaxyEM40: {
    id: 22,
    description: "复制器星系不再重置其通常重置之内容",
    cost: 1e30,
    formatCost,
  }
};
