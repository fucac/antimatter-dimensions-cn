export const expansionPacks = {
  teresaPack: {
    name: "特蕾莎扩展包",
    id: "teresaPack",
    symbol: "Ϟ",
    description: () =>
      `解除特蕾莎储罐的上限。特蕾莎储罐现在影响现实机器上限和现实机器产量。
      在特蕾莎标签页解锁充能复兴升级。自动将现实机器注入特蕾莎。`,
    cost: Decimal.pow(10, 1e30),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  effarigPack: {
    name: "鹿颈长扩展包",
    id: "effarigPack",
    symbol: "Ϙ",
    description: () =>
      ` relic 碎片产量乘以你反物质数量的对数。太阳神中鹿颈长等级 ${formatInt(10)} 的奖励得到改进，
      鹿颈长符文总是生成带有 ${formatInt(7)} 个效果。符文炼金上限提高到你历史最高符文等级的三分之一。
      炼金资源在终局中保留，制作现实符文不再消耗现实资源。鹿颈长商店初始完成。
      鹿颈长现实的层级将以你最快终局的十分之一时间自动完成。`,
    cost: Decimal.pow(10, 1e50),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  enslavedPack: {
    name: "无名氏扩展包",
    id: "enslavedPack",
    symbol: "\uf0c1",
    description: () =>
      `充能你的黑洞始终只消耗你总游戏速度的 ${formatPercents(0.99)}。解锁优化器，
      用于调整你想要释放的储存时间量以及释放储存时间的间隔。所有有效立方体的强度翻倍。
      立方体增加终局数量，同时略微降低无限维度压缩幅度。以完成无名氏开始终局。
      解锁立方体的自动购买器。`,
    cost: Decimal.pow(10, 1e70),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  vPack: {
    name: "薇扩展包",
    id: "vPack",
    symbol: "⌬",
    description: () =>
      `从解锁薇的现实开始。每 ${TimeSpan.fromSeconds(new Decimal(60))} 自动解锁一个薇成就，
      可以通过消耗天神点来减少时间。这包括困难薇成就。所有获得的空间定理翻倍。`,
    cost: Decimal.pow(10, 1e90),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  raPack: {
    name: "太阳神扩展包",
    id: "raPack",
    symbol: "\uf185",
    description: () =>
      `太阳神在终局中保留。将所有天神的等级上限提高到你记录反物质数量的双对数。
      为每个天神解锁 ${formatInt(7)} 个新效果，可以通过提升每个天神的等级来获得。
      记忆和记忆块产量乘以 ${formatX(10)}。`,
    cost: Decimal.pow(10, 1e110),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  laitelaPack: {
    name: "莱特拉扩展包",
    id: "laitelaPack",
    symbol: "ᛝ",
    description: () =>
      `解锁自动购买器，可根据输入的时间批量增减奇点等级。在莱特拉现实中，游戏速度恢复正常的速度翻倍。
      如果湮灭乘数当前影响第 ${formatInt(8)} 个暗物质维度，将湮灭乘数平方。
      将飞升时暗物质维度间隔增加减少 ${formatInt(200)}。
      暗物质产量乘以你反物质数量的双对数或虚幻机器数量的对数（取较大者）。
      以 ${formatInt(10)} 个奇点开始终局。暗能量产量乘以你奇点数量平方的对数。
      湮灭效果根据暗物质数量提升指数。改进湮灭自动购买器。
      解锁对莱特拉现实进行强子化的能力。 destabilize 莱特拉现实的奖励现在也影响暗物质上限。
      每秒最大熵产量乘以 ${formatInt(10)}。`,
    cost: Decimal.pow(10, 1e130),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  pellePack: {
    name: "佩勒扩展包",
    id: "pellePack",
    symbol: "♅",
    description: () =>
      `将星系生成器不稳定幅度降低 ${formatInt(1)}，将前三种维度提升至基于你历史最高星系数量的指数，
      并解锁可重复星系生成器升级的自动购买器。`,
    cost: Decimal.pow(10, 1e150),
    formatCost: value => formatPostBreak(value, 2, 0)
  },
  alphaPack: {
    name: "阿尔法扩展包",
    id: "alphaPack",
    symbol: "α",
    description: () =>
      `解锁大型强子对撞机，可加速你的强子以指数方式获得更多反物质。
      这还将解锁虚空，这是一个类似于膨胀时间运作的功能，可提升加速器产量。`,
    cost: Decimal.pow(10, 1e200),
    formatCost: value => formatPostBreak(value, 2, 0)
  }
};
