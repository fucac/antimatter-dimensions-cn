export const ascensions = {
  ipA: {
    id: 0,
    name: "无限点数乘数飞升",
    zeroIndex: new Decimal("1e30000"),
    description: () => `将可重复购买的无限点数乘数升级重构为可重复购买的无限点数指数升级`,
    onUnlock: () => {
      player.IPMultPurchases = DC.D0;
    }
  },
  epA: {
    id: 1,
    name: "永恒点数乘数飞升",
    zeroIndex: new Decimal("1e40000"),
    description: () => `将可重复购买的永恒点数乘数升级重构为可重复购买的永恒点数指数升级`,
    onUnlock: () => {
      player.epmultUpgrades = DC.D0;
    }
  },
  dbA: {
    id: 2,
    name: "维度提升飞升",
    zeroIndex: new Decimal("1e60000"),
    description: () => `将维度提升重构为维度涌动，为所有反物质维度提供指数效果`,
    onUnlock: () => {
      player.dimensionBoosts = DC.D0;
    }
  },
  b10mA: {
    id: 3,
    name: "购买10乘数飞升",
    zeroIndex: new Decimal("1e100000"),
    description: () => `将反物质维度的购买10乘数重构为购买数量级指数`
  },
  sacA: {
    id: 4,
    name: "维度献祭飞升",
    zeroIndex: new Decimal("1e200000"),
    description: () => `将维度献祭乘数重构为维度献祭指数`
  },
  ocA: {
    id: 5,
    name: "过度充能飞升",
    zeroIndex: new Decimal("1e400000"),
    description: () => `解锁过度充能`
  },
  oc2A: {
    id: 6,
    name: "过度充能飞升 类型2",
    zeroIndex: new Decimal("1e2000000"),
    description: () => `解锁过度充能等级 2`
  },
  oc3A: {
    id: 7,
    name: "过度充能飞升 类型3",
    zeroIndex: new Decimal("1e12500000"),
    description: () => `解锁过度充能等级 3`
  },
  oc4A: {
    id: 8,
    name: "过度充能飞升 类型4",
    zeroIndex: new Decimal("1e100000000"),
    description: () => `解锁过度充能等级 4`
  }
};
