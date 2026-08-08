export const endgameMasteries = [
  {
    id: 11,
    cost: 1,
    requirement: [],
    reqType: EM_REQUIREMENT_TYPE.ALL,
    description: () => `每次终局每分钟产生${formatInt(1)}个复兴点`,
    effect: () => player.disablePostReality ? 0 : player.endgames,
    formatEffect: value => `${formatHybridSmall(value, 3)}/min`
  },
  {
    id: 21,
    cost: 2,
    requirement: [11],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `自动机速度提升${formatPercents(0.06)}而非${formatPercents(0.006, 1, 1)}`,
  },
  {
    id: 22,
    cost: 2,
    requirement: [11],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `从自动解锁EC开始，并将时间除以${formatInt(60)}`,
    effect: () => player.disablePostReality ? 1 : 60
  },
  {
    id: 31,
    cost: 2,
    requirement: [21],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `终局开始时拥有${formatInt(100)}现实`,
    effect: () => player.disablePostReality ? 0 : 100
  },
  {
    id: 32,
    cost: 2,
    requirement: [22],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `终局开始时拥有${formatInt(1000000)}台现实机器`,
    effect: () => player.disablePostReality ? 0 : 1000000
  },
  {
    id: 41,
    cost: 3,
    requirement: [31],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将成就"我即是速度"的奖励强化为${formatPercents(1)}的概率`,
    effect: () => player.disablePostReality ? 0.1 : 1
  },
  {
    id: 42,
    cost: 3,
    requirement: [32],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "终局开始时解锁所有现实升级"
  },
  {
    id: 51,
    cost: 4,
    requirement: [41],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将解锁薇的现实所需的现实数降至${formatInt(100)}`,
    effect: () => player.disablePostReality ? 1250 : 100
  },
  {
    id: 52,
    cost: 6,
    requirement: [41, 42],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `星系强化${formatPercents(0.1)}`,
    effect: () => player.disablePostReality ? 1 : 1.1
  },
  {
    id: 53,
    cost: 4,
    requirement: [42],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `终局开始时拥有全部太阳神等级${formatInt(1)}奖励`,
  },
  {
    id: 61,
    cost: 4,
    requirement: [52],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "在终局中保留成就，并获得一个自由的超立方体",
    effect: () => player.disablePostReality ? 0 : 1
  },
  {
    id: 71,
    cost: 7,
    requirement: [61],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `终局开始时拥有${formatInt(5)}个每种基础符文，效果为${formatInt(4)}、${formatPercents(1)}稀有度，等级基于终局次数与峰值GL`,
    effect: () => player.disablePostReality ? DC.D1 : (EffarigUnlock.endgame.canBeApplied ? player.records.bestEndgame.glyphLevel : new Decimal(1 - ((1 / Math.max(player.endgames, 1)) ** 0.1)).times(player.records.bestEndgame.glyphLevel)),
    formatEffect: value => formatHybridSmall(value, 3)
  },
  {
    id: 81,
    cost: 4,
    requirement: [71],
    reqType: EM_REQUIREMENT_TYPE.COMPRESSION_PATH,
    description: () => `削弱无限升级${formatInt(23)}的软上限${formatPercents(0.5)}`,
  },
  {
    id: 82,
    cost: 4,
    requirement: [71],
    reqType: EM_REQUIREMENT_TYPE.COMPRESSION_PATH,
    description: () => `将无限维度压缩幅度降低${formatPercents(0.05)}`,
    effect: () => player.disablePostReality ? 1 : 0.95
  },
  {
    id: 83,
    cost: 4,
    requirement: [71],
    reqType: EM_REQUIREMENT_TYPE.COMPRESSION_PATH,
    description: () => `将时间维度压缩幅度降低${formatPercents(0.05)}`,
    effect: () => player.disablePostReality? 1 : 0.95
  },
  {
    id: 84,
    cost: 4,
    requirement: [71],
    reqType: EM_REQUIREMENT_TYPE.COMPRESSION_PATH,
    description: () => `将天神物质软上限降低${formatPercents(0.1)}`,
    effect: () => player.disablePostReality ? 1 : 0.9
  },
  {
    id: 91,
    cost: 7,
    requirement: [81],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `基于终局次数延后无限挑战${formatInt(8)}奖励硬上限`,
    effect: () => player.disablePostReality ? 1 : player.endgames,
    formatEffect: value => formatPow(value, 2)
  },
  {
    id: 92,
    cost: 7,
    requirement: [82],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于终局次数延后无限维度压缩起始",
    effect: () => player.disablePostReality ? 1 : player.endgames,
    formatEffect: value => formatPow(value, 2)
  },
  {
    id: 93,
    cost: 7,
    requirement: [83],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于终局次数延后时间维度压缩起始",
    effect: () => player.disablePostReality ? 1 : player.endgames,
    formatEffect: value => formatPow(value, 2)
  },
  {
    id: 94,
    cost: 7,
    requirement: [84],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于终局次数延后天神物质软上限起始",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(10, Decimal.pow(player.endgames, 0.25)),
    formatEffect: value => formatX(value, 2)
  },
  {
    id: 101,
    cost: 6,
    requirement: [91],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将反物质指数提升至${format(1.01, 2, 2)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.01
  },
  {
    id: 102,
    cost: 6,
    requirement: [92],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将无限之力转化率提升至${format(1.01, 2, 2)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.01
  },
  {
    id: 103,
    cost: 6,
    requirement: [93],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "对自由Tickspeed 阈值倍率开平方",
    effect: () => player.disablePostReality ? 1 : 0.5
  },
  {
    id: 104,
    cost: 6,
    requirement: [94],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将天神物质转化指数提升${formatPercents(0.1)}`,
    effect: () => player.disablePostReality ? 1 : 1.1
  },
  {
    id: 111,
    cost: 5,
    requirement: [101, 102, 103, 104],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "虚幻机器始终为最大值"
  },
  {
    id: 112,
    cost: 4,
    requirement: [111],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "在终局中保留复兴树"
  },
  {
    id: 121,
    cost: 7,
    requirement: [111],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "在佩勒中获得另一个符文槽",
    effect: 1
  },
  {
    id: 122,
    cost: 7,
    requirement: [111],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将星系生成器不稳定性降低${formatInt(1)}`,
    effect: () => player.disablePostReality ? 0 : 1
  },
  {
    id: 131,
    cost: 8,
    requirement: [121, 122],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `虚数升级"熵凝结"的效果得到强化`,
  },
  {
    id: 141,
    cost: 4,
    requirement: [131],
    reqType: EM_REQUIREMENT_TYPE.CURRENCY_PATH,
    description: () => `IP增益提升至${format(1.2, 2, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.2
  },
  {
    id: 142,
    cost: 4,
    requirement: [131],
    reqType: EM_REQUIREMENT_TYPE.CURRENCY_PATH,
    description: () => `EP增益提升至${format(1.3, 2, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.3
  },
  {
    id: 143,
    cost: 4,
    requirement: [131],
    reqType: EM_REQUIREMENT_TYPE.CURRENCY_PATH,
    description: () => `RM增益提升至${format(1.4, 2, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.4
  },
  {
    id: 144,
    cost: 4,
    requirement: [131],
    reqType: EM_REQUIREMENT_TYPE.CURRENCY_PATH,
    description: () => `iM增益提升至${format(1.1, 2, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.1
  },
  {
    id: 151,
    cost: 3,
    requirement: [141],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `优化无限点数公式`,
    effect: () => player.disablePostReality ? Effects.min(308, Achievement(103), TimeStudy(111)) : Effects.min(308, Achievement(103), TimeStudy(111)) / ((Decimal.log10(Decimal.log10(Currency.celestialPoints.value.plus(1)).add(1)).div(20)).add(1)).toNumber(),
    formatEffect: value => `log(x)/${format(Effects.min(308, Achievement(103), TimeStudy(111)), 2, 2)} ➜ log(x)/${format(value, 2, 2)}`
  },
  {
    id: 152,
    cost: 3,
    requirement: [142],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `移除${formatX(5)}倍EP倍率的指数缩放`
  },
  {
    id: 153,
    cost: 3,
    requirement: [143],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将虚数升级"椭圆物质性"的效果提升${formatPercents(0.5)}`,
    effect: () => player.disablePostReality ? 1 : 1.5
  },
  {
    id: 154,
    cost: 3,
    requirement: [144],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将虚数升级"信息瞬时"的效果提升至${formatInt(10)}幂`,
    effect: () => player.disablePostReality ? 1 : 10
  },
  {
    id: 161,
    cost: 5,
    requirement: [151, 152, 153, 154],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于奇点数量改进每次批量增加的奇点增益",
    effect: () => player.disablePostReality ? DC.D0 : Decimal.floor((new Decimal(Decimal.log10(Decimal.clamp(Currency.singularities.value.div(1e50), 1, 1e120))).div(5)).add(
      new Decimal(Decimal.log10(Decimal.clamp(Currency.singularities.value.div(1e170), 1, 1e250))).div(10)).add(
      new Decimal(Decimal.log10(Decimal.clamp(Currency.singularities.value.div(new Decimal("1e420")), 1, new Decimal("1e2500")))).div(100)).add(
      Decimal.pow(new Decimal(Decimal.log10(Decimal.clamp(Currency.singularities.value.div(new Decimal("1e2920")), 1, new Decimal("1e390625")))), 0.25)).add(1)),
    cap: DC.E2,
    formatEffect: value => `+${format(value, 2)}`
  },
  {
    id: 171,
    cost: 7,
    requirement: [161],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `动量增加速度提升${formatInt(10)}倍`,
    effect: () => player.disablePostReality ? 1 : 10
  },
  {
    id: 181,
    cost: 175000,
    reqType: EM_REQUIREMENT_TYPE.EXPANDED,
    description: () => `再次将基础星系生成器不稳定性降低${formatInt(1)}`,
    effect: () => player.disablePostReality ? 0 : 1
  },
  {
    id: 191,
    cost: 50000,
    requirement: [181],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "你的成就倍率现在影响天神维度",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow10(Decimal.pow(Achievements.power.max(1).log10(), 0.5))
  },
  {
    id: 192,
    cost: 50000,
    requirement: [181],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "你的成就倍率现在以降低的倍率影响神圣维度",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow10(Decimal.pow(Achievements.power.max(1).log10(), 0.25))
  },
  {
    id: 201,
    cost: 75000,
    requirement: [191, 192],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "成就倍率现在以极低的倍率影响熵增益",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(Achievements.power.max(1).log10(), 2)
  },
  {
    id: 211,
    cost: 100000,
    requirement: [201],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将神圣维度提升至${formatPow(1.3, 1, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.3
  },
  {
    id: 212,
    cost: 100000,
    requirement: [201],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将天神点提升至${formatPow(1.2, 1, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.2
  },
  {
    id: 213,
    cost: 100000,
    requirement: [201],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将双生现实机器提升至${formatPow(1.1, 1, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.1
  },
  {
    id: 221,
    cost: 150000,
    requirement: [211],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于强子数倍增神圣能量增益",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow10(new Decimal(player.celestials.laitela.hadrons.total).pow(1.25))
  },
  {
    id: 222,
    cost: 150000,
    requirement: [212],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将佩勒中的反物质指数提升至${formatPow(1.2, 1, 1)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.2
  },
  {
    id: 223,
    cost: 150000,
    requirement: [213],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "基于星力倍增双生现实机器增益",
    effect: () => player.disablePostReality ? 1 : Ethereal.starPower.add(1).log10().pow(10)
  },
  {
    id: 231,
    cost: 200000,
    requirement: [221],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "略微改进神圣星力公式",
    effect: () => player.disablePostReality ? 308 : 280
  },
  {
    id: 232,
    cost: 200000,
    requirement: [222],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "略微改进成就207的效果",
    effect: () => player.disablePostReality ? 1 : 1.05
  },
  {
    id: 233,
    cost: 200000,
    requirement: [223],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将双生现实机器接近上限的时间缩短${formatX(5)}`,
    effect: () => player.disablePostReality ? 1 : 5
  },
  {
    id: 241,
    cost: 300000,
    requirement: [231, 232, 233],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "以太力增益基于终局技能总数倍增",
    effect: () => player.disablePostReality ? 1 : player.endgameMasteries.maxSkills.pow(2)
  },
  {
    id: 251,
    cost: 500000,
    requirement: [241],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将强子效能上限提升${formatPercents(1)}`,
    effect: () => player.disablePostReality ? 0 : 100
  },
  {
    id: 261,
    cost: 750000,
    requirement: [251],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将天神物质转化指数提升至${formatPow(1.25, 2, 2)}幂`,
    effect: () => player.disablePostReality ? 1 : 1.25
  },
  {
    id: 262,
    cost: 750000,
    requirement: [251],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `将所有暗物质上限的起始延后${formatPow(2)}`,
    effect: () => player.disablePostReality ? 1 : 2
  },
  {
    id: 271,
    cost: 1000000,
    requirement: [261],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: "移除膨胀时间软上限"
  },
  {
    id: 272,
    cost: 1000000,
    requirement: [261],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `削弱严苛的复制器软上限`,
    effect: () => player.disablePostReality ? 10 : 2
  },
  {
    id: 273,
    cost: 1000000,
    requirement: [262],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `永恒挑战12的奖励强化${formatX(10)}倍`,
    effect: () => player.disablePostReality ? 1 : 10
  },
  {
    id: 274,
    cost: 1000000,
    requirement: [262],
    reqType: EM_REQUIREMENT_TYPE.AT_LEAST_ONE,
    description: () => `所有符文不稳定阈值削弱${formatX(2)}倍`,
    effect: () => player.disablePostReality ? 1 : 2
  }
];
