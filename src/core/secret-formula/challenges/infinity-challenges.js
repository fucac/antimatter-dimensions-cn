export const infinityChallenges = [
  {
    id: 1,
    description: `所有普通挑战限制同时生效，唯一例外是Tickspeed （C9）与大坍缩（C12）挑战。`,
    goal: DC.E650,
    isQuickResettable: true,
    reward: {
      description: () => `每个无限挑战完成后，所有无限维度获得${formatX(2.3, 1, 1)}倍率`,
      effect: () => Math.pow(2.3, InfinityChallenges.completed.length),
      formatEffect: value => formatX(value, 1, 1)
    },
    unlockAM: DC.E2000,
  },
  {
    id: 2,
    description: () => `拥有第八反物质维度后，维度牺牲每${formatInt(400)}毫秒自动执行一次。`,
    goal: DC.E10500,
    isQuickResettable: false,
    reward: {
      description: () => `维度牺牲自动购买器，以及更强的维度牺牲
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": false })} ➜
        ${Sacrifice.getSacrificeDescription({ "InfinityChallenge2isCompleted": true })}`,
    },
    unlockAM: DC.E11000,
  },
  {
    id: 3,
    description: () =>
      `Tickspeed 升级始终为${formatX(1)}。每次购买Tickspeed 升级时，你会获得一个基于反物质星系的固定倍率，该倍率作用于所有反物质维度并随星系数量增加。`,
    goal: DC.E5000,
    isQuickResettable: false,
    effect: () => Decimal.pow(player.galaxies.times(0.005).add(1.05), player.totalTickBought),
    formatEffect: value => formatX(value, 2, 2),
    reward: {
      description: `基于反物质星系与Tickspeed 购买次数的反物质维度倍率`,
      effect: () => (Laitela.continuumActive
        ? Decimal.pow(player.galaxies.times(0.005).add(1.05), Tickspeed.continuumValue)
        : Decimal.pow(player.galaxies.times(0.005).add(1.05), player.totalTickBought)),
      formatEffect: value => formatX(value, 2, 2),
    },
    unlockAM: DC.E12000,
  },
  {
    id: 4,
    description: () =>
      `仅最新购买的反物质维度产出正常。所有其他反物质维度产出降低（${formatPow(0.25, 2, 2)}）。`,
    goal: DC.E13000,
    isQuickResettable: true,
    effect: 0.25,
    reward: {
      description: () => `所有反物质维度倍率变为倍率${formatPow(1.05, 2, 2)}`,
      effect: 1.05
    },
    unlockAM: DC.E14000,
  },
  {
    id: 5,
    description:
      `购买反物质维度1-4使所有更便宜的AD成本增加。
      购买反物质维度5-8使所有更昂贵的AD成本增加。`,
    goal: DC.E16500,
    isQuickResettable: true,
    reward: {
      description: () =>
        `所有星系强化${formatPercents(0.1)}，并将星系与维度增幅的需求降低${formatInt(1)}`,
      effect: 1.1
    },
    unlockAM: DC.E18000,
  },
  {
    id: 6,
    description: () =>
      `一旦你拥有至少${formatInt(1)}个第二反物质维度，指数增长的物质会削减你所有反物质维度的倍率。`,
    goal: DC.D2E22222,
    isQuickResettable: true,
    effect: () => Currency.matter.value.clampMin(1),
    formatEffect: value => `/${format(value, 1, 2)}`,
    reward: {
      description: "基于Tickspeed 的无限维度倍率",
      effect: () => Tickspeed.perSecond.pow(0.0005),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E22500,
  },
  {
    id: 7,
    description: () => {
      // Copied from DimBoost.power; this is the base amount before any multipliers. Post-eternity this isn't
      // necessarily 2.5x by the time the player sees this challenge; it's probably most accurate to say what it
      // currently is, and this phrasing avoids 10x ➜ 10x with the old description.
      const mult = Effects.max(
        2,
        InfinityUpgrade.dimboostMult,
        InfinityChallenge(7).reward,
        TimeStudy(81)
      );
      return `你无法购买反物质星系。维度增幅基础倍率提升至最高${formatX(10)}。（当前基础倍率：${formatX(mult, 2, 1)}）`;
    },
    goal: DC.E10000,
    isQuickResettable: false,
    effect: 10,
    reward: {
      description: () => `维度增幅倍率提升至最低${formatX(4)}`,
      effect: 4
    },
    unlockAM: DC.E23000,
  },
  {
    id: 8,
    description: () =>
      `AD产出随时间持续快速下降。购买反物质维度或Tickspeed 升级会将产出重置为${formatPercents(1)}，随后再次开始下降。`,
    goal: DC.E27000,
    isQuickResettable: true,
    effect: () => DC.D0_8446303389034288.pow(
      Decimal.max(0, player.records.thisInfinity.time.sub(player.records.thisInfinity.lastBuyTime))),
    reward: {
      description:
        "基于第一与第八AD倍率，获得对AD 2-7的倍率。",
      effect: () => AntimatterDimension(1).multiplier.times(AntimatterDimension(8).multiplier).pow(0.02).clampMax(DC.E1E15.powEffectsOf(EndgameMastery(91), EndgameUpgrade(11))).pow(Decimal.max(Decimal.pow(5, Decimal.log10(Decimal.log10(AntimatterDimension(1).multiplier.times(AntimatterDimension(8).multiplier).pow(0.02)).div(Decimal.log10(DC.E1E15.powEffectsOf(EndgameMastery(91), EndgameUpgrade(11)))))), 1)),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E1E15.powEffectsOf(EndgameMastery(91), EndgameUpgrade(11)),
      formatEffect: value => formatX(value, 2, 2)
    },
    unlockAM: DC.E28000,
  },
];
