export const normalAchievements = [
  {
    id: 11,
    name: "万物伊始",
    description: "购买第一个反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    reward: "你对第一反物质维度的成就倍率被平方。",
    effect: () => Achievements.power,
    progress: () => Achievement(11).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10(), 0, 1)
  },
  {
    id: 12,
    name: "微末之数亦为巨",
    description: "购买第二个反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `以反物质指数乘第二反物质维度。`; },
    effect: () => Currency.antimatter.value.add(1).log10(),
    progress: () => Achievement(12).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(2), 0, 1)
  },
  {
    id: 13,
    name: "半衰期三已验",
    description: "购买第三个反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `第三及更高反物质维度强度提升${formatPercents(0.3)}。`; },
    effect: 1.3,
    progress: () => Achievement(13).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(4), 0, 1)
  },
  {
    id: 14,
    name: "四维之役",
    description: "购买第四个反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `第四反物质维度乘以${formatInt(4)}。`; },
    effect: 4,
    progress: () => Achievement(14).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(6), 0, 1)
  },
  {
    id: 15,
    name: "五维一击",
    description: "购买第五个反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `第五及更高反物质维度翻倍。`; },
    effect: 2,
    progress: () => Achievement(15).isUnlocked ? DC.D1 : Decimal.clamp(DimBoost.purchasedBoosts.div(2).min(0.5).add(player.antimatter.max(1).log10().div(18).min(0.5)), 0, 1)
  },
  {
    id: 16,
    name: "九亦足矣",
    get description() {
      return Enslaved.isRunning
        ? "购第六反物质维度（其终无所成）。"
        : "购买第六个反物质维度。";
    },
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `以${formatInt(9)}乘第六反物质维度。`; },
    effect: 9,
    progress: () => Achievement(16).isUnlocked ? DC.D1 : Decimal.clamp(DimBoost.purchasedBoosts.div(4).min(0.5).add(player.antimatter.max(1).log10().div(26).min(0.5)), 0, 1)
  },
  {
    id: 17,
    name: "非关幸运",
    description: "购买第七个反物质维度。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `以${formatInt(7)}乘第七反物质维度。`; },
    effect: 7,
    progress: () => Achievement(17).isUnlocked ? DC.D1 : Decimal.clamp(DimBoost.purchasedBoosts.div(6).min(0.5).add(player.antimatter.max(1).log10().div(36).min(0.5)), 0, 1)
  },
  {
    id: 18,
    name: "零度至无限",
    get description() {
      return Enslaved.isRunning
        ? "购第八反物质维度（莫习于此）。"
        : "购买第八个反物质维度。";
    },
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `以九十度乘所有反物质维度。`; },
    effect: 1.57,
    progress: () => Achievement(18).isUnlocked ? DC.D1 : Decimal.clamp(DimBoost.purchasedBoosts.div(8).min(0.5).add(player.antimatter.max(1).log10().div(48).min(0.5)), 0, 1)
  },
  {
    id: 21,
    name: "向无限进发！",
    description: "达成无限。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `以${formatInt(100)}反物质起始。`; },
    effect: 100,
    progress: () => Achievement(21).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 22,
    name: "虚妄之谈！",
    get description() { return `邂逅${formatInt(50)}种不同的新闻消息。`; },
    checkRequirement: () => NewsHandler.uniqueTickersSeen >= 50,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    progress: () => Achievement(22).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(NewsHandler.uniqueTickersSeen).div(50), 0, 1)
  },
  {
    id: 23,
    name: "第九维度皆是虚妄",
    get description() { return `恰好拥有${formatInt(99)}个第八反物质维度。`; },
    checkRequirement: () => AntimatterDimension(8).amount.eq(99),
    get reward() { return `第八反物质维度强度提升${formatPercents(0.1)}。`; },
    effect: 1.1,
    progress: () => Achievement(23).isUnlocked ? DC.D1 : Decimal.clamp(AntimatterDimension(8).amount.div(99), 0, 1)
  },
  {
    id: 24,
    name: "反物质末日",
    get description() { return `获得超过${format(DC.E80)}反物质。`; },
    checkRequirement: () => Currency.antimatter.value.add(1).log10().gte(80),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(24).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(80), 0, 1)
  },
  {
    id: 25,
    name: "维升至极",
    get description() { return `购买${formatInt(10)}个维度提升。`; },
    checkRequirement: () => DimBoost.purchasedBoosts.gte(10),
    checkEvent: GAME_EVENT.DIMBOOST_AFTER,
    progress: () => Achievement(25).isUnlocked ? DC.D1 : Decimal.clamp(DimBoost.purchasedBoosts.div(18).min(0.5).add(player.antimatter.max(1).log10().div(318).min(0.5)), 0, 1)
  },
  {
    id: 26,
    name: "逾越巨壁",
    description: "购买一个反物质星系。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE,
    progress: () => Achievement(26).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(129), 0, 1)
  },
  {
    id: 27,
    name: "双重星系",
    get description() { return `购买${formatInt(2)}个反物质星系。`; },
    checkRequirement: () => player.galaxies.gte(2),
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    progress: () => Achievement(27).isUnlocked ? DC.D1 : Decimal.clamp(player.galaxies.div(2).min(0.5).add(player.antimatter.max(1).log10().div(438).min(0.5)), 0, 1)
  },
  {
    id: 28,
    name: "徒劳无功之举……",
    get description() {
      return `当拥有超过${format(DC.E150)}个第一反物质维度时，再购买一个。`;
    },
    checkRequirement: () => AntimatterDimension(1).amount.add(1).log10().gte(150),
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    get reward() { return `第一反物质维度强度提升${formatPercents(0.1)}。`; },
    effect: 1.1,
    progress: () => Achievement(28).isUnlocked ? DC.D1 : Decimal.clamp(AntimatterDimension(1).amount.add(1).log10().div(150), 0, 1)
  },
  {
    id: 31,
    name: "忘削其力",
    get description() { return `任一反物质维度之倍率超越${formatX(DC.E31)}。`; },
    checkRequirement: () => AntimatterDimensions.all.some(x => x.multiplier.add(1).log10().gte(31)),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `第一反物质维度强度提升${formatPercents(0.05)}。`; },
    effect: 1.05,
    progress: () => Achievement(31).isUnlocked ? DC.D1 : Decimal.clamp(AntimatterDimensions.all.map(x => x.multiplier).reduce(Decimal.maxReducer).add(1).log10().div(31), 0, 1)
  },
  {
    id: 32,
    name: "诸神欣悦",
    get description() { return `非挑战八之下，维度献祭之倍率超越${formatX(600)}。`; },
    checkRequirement: () => !NormalChallenge(8).isOnlyActiveChallenge && Sacrifice.totalBoost.gte(600),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_AFTER,
    get reward() {
      return `维度献祭强度提升。
      ${Sacrifice.getSacrificeDescription({ "Achievement32": false, "Achievement57": false, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": false, "Achievement88": false })}`;
    },
    effect: 0.1,
    progress: () => Achievement(32).isUnlocked ? DC.D1 : (NormalChallenge(8).isOnlyActiveChallenge ? DC.DM1 : Decimal.clamp(Sacrifice.totalBoost.div(600), 0, 1))
  },
  {
    id: 33,
    name: "无限次数甚矣",
    get description() { return `达到无限${formatInt(10)}次。`; },
    checkRequirement: () => Currency.infinities.gte(10),
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    progress: () => Achievement(33).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinities.value.div(10), 0, 1)
  },
  {
    id: 34,
    name: "本无所用",
    description: "不购买第八维度即可无限。",
    checkRequirement: () => AntimatterDimension(8).totalAmount.eq(0),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `维度一至七强度提升${formatPercents(0.02)}。`; },
    effect: 1.02,
    progress: () => Achievement(34).isUnlocked ? DC.D1 : (AntimatterDimension(8).totalAmount.neq(0) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 35,
    name: "勿敢眠",
    get description() {
      return PlayerProgress.realityUnlocked()
        ? `离线逾${formatInt(2)}时辰（真实时辰）。`
        : `离线逾${formatInt(2)}时辰。`;
    },
    checkRequirement: () => Date.now() - player.lastUpdate >= 7200000,
    checkEvent: GAME_EVENT.GAME_TICK_BEFORE,
    progress: () => Achievement(35).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Date.now() - player.lastUpdate).div(7200000), 0, 1)
  },
  {
    id: 36,
    name: "幽闭之惧",
    get description() {
      return `仅以${formatInt(1)}个反物质星系进行无限。(反物质星系在无限时重置。)`;
    },
    checkRequirement: () => player.galaxies.eq(1),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `起始tick速度乘以${format(1.02, 2, 2)}。`; },
    effect: 1 / 1.02,
    progress: () => Achievement(36).isUnlocked ? DC.D1 : (player.galaxies.neq(1) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 37,
    name: "迅捷如斯！",
    get description() { return `${formatInt(2)}小时内完成无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalHours.toNumber() <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `以${formatInt(5000)}反物质起始。`; },
    effect: () => player.disablePostReality ? 100 : 5000,
    progress: () => Achievement(37).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalHours.gt(2) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 38,
    name: "吾不信神",
    get description() {
      return `未行维度献祭而购反物质星系。
        （反物质星系于无限时重置。）`;
    },
    checkRequirement: () => player.requirementChecks.infinity.noSacrifice,
    checkEvent: GAME_EVENT.GALAXY_RESET_BEFORE,
    progress: () => Achievement(38).isUnlocked ? DC.D1 : (!player.requirementChecks.infinity.noSacrifice ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(129), 0, 1))
  },
  {
    id: 41,
    name: "无需DLC",
    get description() { return `购${formatInt(16)}项无限升级。`; },
    checkRequirement: () => player.infinityUpgrades.size >= 16,
    checkEvent: [
      GAME_EVENT.INFINITY_UPGRADE_BOUGHT,
      GAME_EVENT.REALITY_RESET_AFTER,
      GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT
    ],
    get reward() {
      return `解锁两个新无限升级——${formatX(2)}无限点数倍率与离线无限点数生成。`;
    },
    progress: () => Achievement(41).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.infinityUpgrades.size).div(16), 0, 1)
  },
  {
    id: 42,
    name: "疾速索尼克",
    get description() {
      return `每秒反物质产生超过当前反物质，突破${format(DC.E63)}。`;
    },
    checkRequirement: () =>
      Currency.antimatter.value.add(1).log10().gte(63) &&
      Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(42).isUnlocked ? DC.D1 : (Currency.antimatter.productionPerSecond.lte(Currency.antimatter.value) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(63), 0, 1))
  },
  {
    id: 43,
    name: "反表之变..",
    description:
      "使第八反物质维度之倍率居首，第七次之，余者递减。",
    checkRequirement: () => {
      const multipliers = Array.range(1, 8).map(tier => AntimatterDimension(tier).multiplier);
      for (let i = 0; i < multipliers.length - 1; i++) {
        if (multipliers[i].gte(multipliers[i + 1])) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `各反物质维度按阶数获增益
      （第八得${formatPercents(0.08)}，第七得${formatPercents(0.07)}，余者递减）`;
    },
    progress: () => {
      let done = 0;
      const rmultipliers = Array.range(1, 8).map(tier => AntimatterDimension(tier).multiplier);
      for (let i = 0; i < rmultipliers.length - 1; i++) {
        if (rmultipliers[i].lt(rmultipliers[i + 1])) done++;
      }
      return Achievement(43).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(done).div(7), 0, 1);
    }
  },
  {
    id: 44,
    name: "三十秒之终",
    get description() {
      return `每秒反物质超越当前反物质
      持续${formatInt(30)}秒。`;
    },
    checkRequirement: () => AchievementTimers.marathon1
      .check(Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value), 30),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => {
      //This is a rough estimate that should work but we'll see
      let sec = 0;
      if (AchievementTimers.marathon1.check(Currency.antimatter.productionPerSecond.gt(Currency.antimatter.value), 1)) sec++;
      else sec = 0;
      return Achievement(44).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(sec).div(30), 0, 1);
    }
  },
  {
    id: 45,
    name: "速逾薯步",
    get description() { return `每秒tick超过${format(DC.E29)}。`; },
    checkRequirement: () => Tickspeed.current.log10().lte(-26),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `起始tick速度乘以${formatX(1.02, 0, 2)}。`; },
    effect: 0.98,
    progress: () => Achievement(45).isUnlocked ? DC.D1 : Decimal.clamp(Tickspeed.current.log10().sub(3).neg().div(29), 0, 1)
  },
  {
    id: 46,
    name: "多维并行",
    get description() { return `除第八维度外，所有反物质维度达到${format(DC.E12)}。`; },
    checkRequirement: () => AntimatterDimension(7).amount.add(1).log10().gte(12),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(46).isUnlocked ? DC.D1 : Decimal.clamp(AntimatterDimension(7).amount.add(1).log10().div(12), 0, 1)
  },
  {
    id: 47,
    name: "铤而走险",
    get description() { return `完成${formatInt(3)}个常规挑战。`; },
    checkRequirement: () => NormalChallenges.all.countWhere(c => c.isCompleted) >= 3,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    progress: () => Achievement(47).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(NormalChallenges.all.countWhere(c => c.isCompleted)).div(3), 0, 1)
  },
  {
    id: 48,
    name: "反挑战",
    get description() { return `完成所有${formatInt(12)}个常规挑战。`; },
    checkRequirement: () => NormalChallenges.all.countWhere(c => !c.isCompleted) === 0,
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    get reward() { return `所有维度强度提升${formatPercents(0.1)}。`; },
    effect: 1.1,
    progress: () => Achievement(48).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(NormalChallenges.all.countWhere(c => c.isCompleted)).div(12), 0, 1)
  },
  {
    id: 51,
    name: "破限",
    description: "破碎无限。",
    checkRequirement: () => player.break,
    checkEvent: [GAME_EVENT.BREAK_INFINITY, GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    progress: () => Achievement(51).isUnlocked ? DC.D1 : Decimal.clamp(Decimal.log2(1500).sub(new Decimal(player.auto.bigCrunch.interval).div(100).log2()).div(Decimal.log2(1500)), 0, 1)
  },
  {
    id: 52,
    name: "自动时代",
    description: "将反物质维度与速度升级自动购买的间隔调至最大。",
    checkRequirement: () => Autobuyer.antimatterDimension.zeroIndexed.concat(Autobuyer.tickspeed)
      .every(a => a.isUnlocked && a.hasMaxedInterval),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    progress: () => Achievement(52).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Autobuyer.antimatterDimension.zeroIndexed.concat(Autobuyer.tickspeed).filter(a => a.isUnlocked && a.hasMaxedInterval).length).div(9), 0, 1)
  },
  {
    id: 53,
    name: "得不偿失",
    description: "将所有常规自动购买的间隔调至最大。",
    // The upgradeable autobuyers are dimensions, tickspeed, dimension boost,
    // galaxy, and big crunch (the ones you get from normal challenges).
    // We don't count autobuyers which can be upgraded via e.g. perks as upgradeable.
    checkRequirement: () => Autobuyers.upgradeable
      .every(a => a.isUnlocked && a.hasMaxedInterval),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT],
    progress: () => Achievement(53).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Autobuyers.upgradeable.filter(a => a.isUnlocked && a.hasMaxedInterval).length).div(12), 0, 1)
  },
  {
    id: 54,
    name: "迅捷如斯！",
    get description() { return `${formatInt(10)}分钟或更短时间内完成无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMinutes.toNumber() <= 10,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `以${format(5e5)}反物质起始。`; },
    effect: () => player.disablePostReality ? 100 : 5e5,
    progress: () => Achievement(54).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalMinutes.gt(10) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 55,
    name: "永恒几何",
    get description() { return `${formatInt(1)}分钟或更短时间内完成无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMinutes.toNumber() <= 1,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `以${format(5e10)}反物质起始。`; },
    effect: () => player.disablePostReality ? 100 : 5e10,
    progress: () => Achievement(55).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalMinutes.gt(1) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 56,
    name: "殒落数次",
    get description() {
      return `在${formatInt(3)}分钟或更短时间内完成第二反物质维度自动购买挑战。`;
    },
    checkRequirement: () => NormalChallenge(2).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes.toNumber() <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `无限之初${formatInt(3)}分钟内，反物质维度皆增强。`;
    },
    effect: () => Decimal.max(new Decimal(6).div(Time.thisInfinity.totalMinutes.plus(3)), 1).toNumber(),
    effectCondition: () => Time.thisInfinity.totalMinutes.lt(3),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(56).isUnlocked ? DC.D1 : ((!NormalChallenge(2).isOnlyActiveChallenge || Time.thisInfinityRealTime.totalMinutes.gt(3)) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 57,
    name: "天赐神恩",
    get description() {
      return `在${formatInt(3)}分钟或更短时间内完成第八反物质维度自动购买挑战。`;
    },
    checkRequirement: () => NormalChallenge(8).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes.toNumber() <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `维度献祭更强。
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": false, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": false })}`;
    },
    effect: 0.1,
    progress: () => Achievement(57).isUnlocked ? DC.D1 : ((!NormalChallenge(8).isOnlyActiveChallenge || Time.thisInfinityRealTime.totalMinutes.gt(3)) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 58,
    name: "此亦无碍。",
    get description() { return `在${formatInt(3)}分钟或更短时间内完成tick速度自动购买挑战。`; },
    checkRequirement: () => NormalChallenge(9).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalMinutes.toNumber() <= 3,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `购买${formatInt(10)}反物质维度的倍率+${formatPercents(0.01)}。`;
    },
    effect: 1.01,
    progress: () => Achievement(58).isUnlocked ? DC.D1 : ((!NormalChallenge(9).isOnlyActiveChallenge || Time.thisInfinityRealTime.totalMinutes.gt(3)) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 61,
    name: "批量倍增",
    get description() {
      return `使所有反物质维度自动购买器之批量达
        ${formatInt(Autobuyer.antimatterDimension.bulkCap)}。`;
    },
    checkRequirement: () => Autobuyer.antimatterDimension.zeroIndexed.every(x => x.hasMaxedBulk),
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_TEN_BOUGHT,
      GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION],
    reward: "维度自动购买批量不限。",
    progress: () => Achievement(61).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Autobuyer.antimatterDimension.zeroIndexed.filter(x => x.hasMaxedBulk).length).div(8), 0, 1)
  },
  {
    id: 62,
    name: "哦……你还在此处？",
    get description() { return `每分钟无限点数达到${format(DC.E8)}。`; },
    checkRequirement: () => Player.bestRunIPPM.add(1).log10().gte(8),
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    progress: () => Achievement(62).isUnlocked ? DC.D1 : Decimal.clamp(Player.bestRunIPPM.add(1).log10().div(8), 0, 1)
  },
  {
    id: 63,
    name: "新的开端",
    description: "开始产生无限之力。",
    checkRequirement: () => Currency.infinityPower.gt(1),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `所有无限维度倍率翻倍。`; },
    effect: 2,
    progress: () => Achievement(63).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(8), 0, 1)
  },
  {
    id: 64,
    name: "零殒",
    description: "在常规挑战中，不使用维度提升或反物质星系达成无限。",
    checkRequirement: () => player.galaxies.eq(0) && DimBoost.purchasedBoosts.eq(0) && NormalChallenge.isRunning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `反物质维度一至四强度提升${formatPercents(0.25)}。`; },
    effect: 1.25,
    progress: () => Achievement(64).isUnlocked ? DC.D1 : ((player.galaxies.neq(0) || DimBoost.purchasedBoosts.neq(0) || !NormalChallenge.isRunning) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 65,
    name: "虚名之 challenge",
    get description() { return `所有常规挑战时间总和低于${formatInt(3)}分钟。`; },
    checkRequirement: () => Time.challengeSum.totalMinutes.lt(3),
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    get reward() {
      return `无限之初${formatInt(3)}分钟内反物质维度增强，
      然仅于挑战中生效。`;
    },
    effect: () => (Player.isInAnyChallenge && !player.disablePostReality ? Decimal.max(DC.D4.div(Time.thisInfinity.totalMinutes.plus(1)), 1) : DC.D1),
    effectCondition: () => Player.isInAnyChallenge && Time.thisInfinity.totalMinutes.lt(3) && !player.disablePostReality,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(65).isUnlocked ? DC.D1 : Decimal.clamp(DC.D3.div(Time.challengeSum.totalMinutes), 0, 1)
  },
  {
    id: 66,
    name: "速逾薯方",
    get description() { return `每秒tick超过${format(DC.E58)}。`; },
    checkRequirement: () => Tickspeed.current.log10().lte(-55),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `起始tick速度乘以${formatX(1.02, 0, 2)}。`; },
    effect: 0.98,
    progress: () => Achievement(66).isUnlocked ? DC.D1 : Decimal.clamp(Tickspeed.current.log10().sub(3).neg().div(58), 0, 1)
  },
  {
    id: 67,
    name: "无限挑战",
    description: "完成一个无限挑战。",
    checkRequirement: () => InfinityChallenges.completed.length > 0,
    checkEvent: [GAME_EVENT.INFINITY_CHALLENGE_COMPLETED, GAME_EVENT.REALITY_RESET_AFTER],
    progress: () => Achievement(67).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.add(1).log10().div(4000).min(0.5).add(!InfinityChallenge.current ? 0 : player.antimatter.max(1).log10().div(InfinityChallenge.current.goal.log10().times(2)).min(0.5)), 0, 1)
  },
  {
    id: 68,
    name: "再战只为成就乎？",
    get description() {
      return `在${formatInt(10)}秒或更短时间内完成第三反物质维度自动购买挑战。`;
    },
    checkRequirement: () => NormalChallenge(3).isOnlyActiveChallenge && Time.thisInfinityRealTime.totalSeconds.toNumber() <= 10,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `第一反物质维度强度提升${formatPercents(0.5)}。`; },
    effect: 1.5,
    progress: () => Achievement(68).isUnlocked ? DC.D1 : ((!NormalChallenge(3).isOnlyActiveChallenge || Time.thisInfinityRealTime.totalSeconds.gt(10)) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 71,
    name: "错误909：维度未觅",
    description:
      `于第二反物质维度自动购买挑战中，仅有唯一第一反物质维度
      且无维度提升或反物质星系，以达无限。`,
    checkRequirement: () =>
      NormalChallenge(2).isOnlyActiveChallenge &&
      AntimatterDimension(1).amount.eq(1) &&
      DimBoost.purchasedBoosts.eq(0) &&
      player.galaxies.eq(0),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `第一反物质维度强度${formatInt(3)}倍。`; },
    effect: 3,
    progress: () => Achievement(71).isUnlocked ? DC.D1 : ((!NormalChallenge(2).isOnlyActiveChallenge || AntimatterDimension(1).amount.neq(1) || DimBoost.purchasedBoosts.neq(0) || player.galaxies.neq(0)) ? DC.D0 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 72,
    name: "无限难承",
    get description() {
      return `使所有反物质维度倍率超过${formatX(DC.NUMMAX, 1)}。`;
    },
    checkRequirement: () => AntimatterDimensions.all.every(x => x.multiplier.gte(DC.NUMMAX)),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `所有反物质维度强度提升${formatPercents(0.1)}。`; },
    effect: 1.1,
    progress: () => Achievement(72).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(AntimatterDimensions.all.filter(x => x.multiplier.gte(DC.NUMMAX)).length).div(8), 0, 1)
  },
  {
    id: 73,
    name: "此成就本不存在",
    get description() { return `获得${formatPostBreak(DC.D9_9999E9999, 4)}反物质。`; },
    checkRequirement: () => Currency.antimatter.gte(DC.D9_9999E9999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "反物质维度获得基于当前反物质的乘数。",
    effect: () => Currency.antimatter.value.pow(0.00002).plus(1).clampMax(Decimal.pow(10, 1e30)).pow(
      Decimal.max(Decimal.pow(2, Decimal.log10(Decimal.log10(Currency.antimatter.value.pow(0.00002).plus(1)).div(1e30))), 1)),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(73).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(10000), 0, 1)
  },
  {
    id: 74,
    name: "分秒必争",
    get description() { return `所有常规挑战最佳时间总和低于${formatInt(5)}秒。`; },
    checkRequirement: () => Time.challengeSum.totalSeconds.lt(5),
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    get reward() { return `所有反物质维度强度提升${formatPercents(0.4)}，但仅限挑战中。`; },
    effect: () => player.disablePostReality ? 1 : 1.4,
    effectCondition: () => Player.isInAnyChallenge && !player.disablePostReality,
    progress: () => Achievement(74).isUnlocked ? DC.D1 : Decimal.clamp(DC.D5.div(Time.challengeSum.totalSeconds), 0, 1)
  },
  {
    id: 75,
    name: "新维度降临？？？",
    description: "解锁第四无限维度。",
    checkRequirement: () => InfinityDimension(4).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "你的成就加成影响无限维度。",
    effect: () => Achievements.power,
    progress: () => Achievement(75).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(10500), 0, 1)
  },
  {
    id: 76,
    name: "每维其一",
    get description() { return `游玩${formatInt(8)}小时。`; },
    checkRequirement: () => Time.totalTimePlayed.totalHours.gte(8),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "基于游玩时间给予反物质维度极小乘数。",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.max(Decimal.pow(Time.totalTimePlayed.totalDays.times(12), 0.05), 1),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(76).isUnlocked ? DC.D1 : Decimal.clamp(Time.totalTimePlayed.totalHours.div(8), 0, 1)
  },
  {
    id: 77,
    name: "百万亦巨",
    get description() { return `达到${format(1e6)}无限之力。`; },
    checkRequirement: () => Currency.infinityPower.value.add(1).log10().gte(6),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `所有无限维度基于无限点数获得强化。`;
    },
    effect: () => Currency.infinityPoints.value.add(1).log10().clampMin(1),
    progress: () => Achievement(77).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinityPower.value.add(1).log10().div(6), 0, 1)
  },
  {
    id: 78,
    name: "转瞬之间",
    get description() { return `${formatInt(250)}ms内完成无限。`; },
    checkRequirement: () => Time.thisInfinityRealTime.totalMilliseconds.toNumber() <= 250,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `以${format(5e25)}反物质起始。`;
    },
    effect: () => player.disablePostReality ? 100 : 5e25,
    progress: () => Achievement(78).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalMilliseconds.gt(250) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 81,
    name: "设计之热",
    get description() { return `于${formatInt(15)}秒或更短内打破无限挑战五。`; },
    checkRequirement: () => InfinityChallenge(5).isRunning && Time.thisInfinityRealTime.totalSeconds.toNumber() <= 15,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `复制器获取速度${formatInt(3)}倍。`;
    },
    effect: () => player.disablePostReality ? 1 : 3,
    progress: () => Achievement(81).isUnlocked ? DC.D1 : ((!InfinityChallenge(5).isRunning || Time.thisInfinityRealTime.totalSeconds.gt(15)) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(16500), 0, 1))
  },
  {
    id: 82,
    name: "反-反挑战",
    get description() { return `完成所有${formatInt(8)}个无限挑战。`; },
    checkRequirement: () => InfinityChallenges.completed.length === 8,
    checkEvent: [GAME_EVENT.INFINITY_CHALLENGE_COMPLETED, GAME_EVENT.REALITY_RESET_AFTER],
    progress: () => Achievement(82).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(InfinityChallenges.all.countWhere(c => c.isCompleted)).div(8), 0, 1)
  },
  {
    id: 83,
    name: "五十星系！？",
    get description() { return `获得${formatInt(50)}个反物质星系。`; },
    checkRequirement: () => player.galaxies.gte(50),
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    get reward() { return `每个反物质星系使tick速度提升略超${formatPercents(0.05)}。`; },
    effect: () => DC.D0_95.pow(player.galaxies),
    formatEffect: value => `${formatX(value.recip(), 2, 2)}`,
    progress: () => Achievement(83).isUnlocked ? DC.D1 : Decimal.clamp(player.galaxies.div(50), 0, 1)
  },
  {
    id: 84,
    name: "略有富余",
    get description() { return `反物质达到${formatPostBreak("1e35000")}。`; },
    checkRequirement: () => Currency.antimatter.value.add(1).log10().gte(35000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "未花费的反物质越多，反物质维度越强。",
    effect: () => Currency.antimatter.value.pow(0.00002).plus(1).clampMax(Decimal.pow(10, 1e30)).pow(
      Decimal.max(Decimal.pow(2, Decimal.log10(Decimal.log10(Currency.antimatter.value.pow(0.00002).plus(1)).div(1e30))), 1)),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(84).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(35000), 0, 1)
  },
  {
    id: 85,
    name: "无限点数尽归吾属",
    get description() { return `以${format(DC.E150)}无限点数行大紧缩。`; },
    checkRequirement: () => gainedInfinityPoints().add(1).log10().gte(150),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `无限点数额外${formatX(4)}倍率。`; },
    effect: () => player.disablePostReality ? 1 : 4,
    progress: () => Achievement(85).isUnlocked ? DC.D1 : Decimal.clamp(gainedInfinityPoints().add(1).log10().div(150), 0, 1)
  },
  {
    id: 86,
    name: "汝弯曲时间乎？",
    get description() { return `每次tick速度升级加快${formatX(1000)}。`; },
    checkRequirement: () => Tickspeed.multiplier.recip().gte(1000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `所有星系强度提升${formatPercents(0.01)}。`; },
    effect: 1.01,
    progress: () => Achievement(86).isUnlocked ? DC.D1 : Decimal.clamp(Tickspeed.multiplier.recip().div(1000), 0, 1)
  },
  {
    id: 87,
    name: "二百万无限",
    get description() { return `无限${format(DC.D2E6)}次。`; },
    checkRequirement: () => Currency.infinities.gt(DC.D2E6),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `长逾${formatInt(5)}秒之无限
      多予${formatX(250)}无限。`;
    },
    effect: () => player.disablePostReality && !(Alpha.isRunning && Alpha.currentStage >= 23) ? 1 : 250,
    effectCondition: () => Time.thisInfinity.totalSeconds.gt(5) &&
      (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 23)),
    progress: () => Achievement(87).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinities.value.div(2e6), 0, 1)
  },
  {
    id: 88,
    name: "又一无限之典",
    get description() {
      return `单次维度献祭获得${formatX(DC.NUMMAX, 1, 0)}倍率。`;
    },
    checkRequirement: () => Sacrifice.nextBoost.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_BEFORE,
    get reward() {
      return `维度献祭更强。
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": false })} ➜
      ${Sacrifice.getSacrificeDescription({ "Achievement32": true, "Achievement57": true, "Achievement88": true })}`;
    },
    effect: 0.1,
    progress: () => Achievement(88).isUnlocked ? DC.D1 : Decimal.clamp(Sacrifice.nextBoost.log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 91,
    name: "极速绝伦",
    get description() {
      return `于${formatInt(2)}秒或更短内，以${format(DC.E200)}无限点数行大紧缩。`;
    },
    checkRequirement: () => gainedInfinityPoints().add(1).log10().gte(200) && Time.thisInfinityRealTime.totalSeconds.toNumber() <= 2,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `无限之初${formatInt(5)}秒内
      反物质维度大幅增强。`;
    },
    effect: () => player.disablePostReality ? DC.D1 : Decimal.max((DC.D5.sub(Time.thisInfinity.totalSeconds)).times(60), 1),
    effectCondition: () => Time.thisInfinity.totalSeconds.lt(5) && !player.disablePostReality,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(91).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalSeconds.gt(2) ? DC.DM1 : Decimal.clamp(gainedInfinityPoints().add(1).log10().div(200), 0, 1))
  },
  {
    id: 92,
    name: "无人可挡！",
    get description() {
      return `于${formatInt(20)}秒或更短内，以${format(DC.E250)}无限点数行大紧缩。`;
    },
    checkRequirement: () => gainedInfinityPoints().add(1).log10().gte(250) && Time.thisInfinityRealTime.totalSeconds.toNumber() <= 20,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `无限之初${formatInt(60)}秒内
      反物质维度大幅增强。`;
    },
    effect: () => player.disablePostReality ? DC.D1 : Decimal.max((DC.D1.sub(Time.thisInfinity.totalMinutes)).times(100), 1),
    effectCondition: () => Time.thisInfinity.totalMinutes.lt(1) && !player.disablePostReality,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(92).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalSeconds.gt(20) ? DC.DM1 : Decimal.clamp(gainedInfinityPoints().add(1).log10().div(250), 0, 1))
  },
  {
    id: 93,
    name: "极限过载",
    get description() { return `以${format(DC.E300)}无限点数行大紧缩。`; },
    checkRequirement: () => gainedInfinityPoints().add(1).log10().gte(300),
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() { return `无限点数额外${formatX(4)}倍率。`; },
    effect: () => player.disablePostReality ? 1 : 4,
    progress: () => Achievement(93).isUnlocked ? DC.D1 : Decimal.clamp(gainedInfinityPoints().add(1).log10().div(300), 0, 1)
  },
  {
    id: 94,
    name: "四分三之无限",
    get description() { return `达到${format(DC.E260)}无限之力。`; },
    checkRequirement: () => Currency.infinityPower.value.add(1).log10().gte(260),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "无限之力获取翻倍。",
    effect: 2,
    progress: () => Achievement(94).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinityPower.value.add(1).log10().div(260), 0, 1)
  },
  {
    id: 95,
    name: "此安全乎？",
    get description() { return `在${formatInt(1)}小时内获得${format(DC.NUMMAX, 1, 0)}复制器。`; },
    get reward() { return `无限时保留复制器及${formatInt(1)}复制器星系。`; },
    checkRequirement: () =>
      (Replicanti.amount.eq(DC.NUMMAX) || player.replicanti.galaxies.gt(0)) &&
      Time.thisInfinityRealTime.totalHours.toNumber() <= 1,
    checkEvent: GAME_EVENT.REPLICANTI_TICK_AFTER,
    progress: () => Achievement(95).isUnlocked ? DC.D1 : (Time.thisInfinityRealTime.totalHours.gt(1) ? DC.DM1 : Decimal.clamp(Replicanti.amount.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 96,
    name: "时间相对",
    description: "进行永恒。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    progress: () => Achievement(96).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 97,
    name: "踏石之跃",
    get description() { return `无限挑战时间总和低于${format(6.66, 2, 2)}秒。`; },
    checkRequirement: () => Time.infinityChallengeSum.totalSeconds.lt(6.66),
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    progress: () => Achievement(97).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(6.66).div(Time.infinityChallengeSum.totalSeconds), 0, 1)
  },
  {
    id: 98,
    name: "离无限零度",
    description: "解锁第八无限维度。",
    checkRequirement: () => InfinityDimension(8).isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(98).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.max(1).log10().div(60000), 0, 1)
  },
  {
    id: 101,
    name: "第八维度无人有暇",
    description: "不购买反物质维度一至七进行永恒。",
    checkRequirement: () => player.requirementChecks.eternity.onlyAD8,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    progress: () => Achievement(101).isUnlocked ? DC.D1 : (!player.requirementChecks.eternity.onlyAD8 ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 102,
    name: "此路漫漫若永恒",
    description: "达成所有永恒里程碑。",
    checkRequirement: () => EternityMilestone.all.every(m => m.isReached),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `获得${formatX(2)}倍更多永恒。`; },
    effect: () => player.disablePostReality ? 1 : 2,
    progress: () => Achievement(102).isUnlocked ? DC.D1 : Decimal.clamp(Currency.eternities.value.div(1000), 0, 1)
  },
  {
    id: 103,
    name: "此成就本不存在 II",
    get description() { return `无限点数达到${formatPostBreak(DC.D9_99999E999, 5, 0)}。`; },
    checkRequirement: () => Currency.infinityPoints.value.add(1).log10().gte(1000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `优化无限点数公式。log(x)/${formatInt(308)} ➜ log(x)/${formatFloat(307.8, 1)}`;
    },
    effect: () => player.disablePostReality ? 308 : 307.8,
    progress: () => Achievement(103).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(1000), 0, 1)
  },
  {
    id: 104,
    name: "此非永恒",
    get description() { return `${formatInt(30)}秒内完成永恒。`; },
    checkRequirement: () => Time.thisEternity.totalSeconds.lte(30),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() { return `永恒起始时获得${format(5e25)}无限点数。`; },
    effect: () => player.disablePostReality ? 0 : 5e25,
    progress: () => Achievement(104).isUnlocked ? DC.D1 : (Time.thisEternity.totalSeconds.gt(30) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 105,
    name: "无限时间",
    get description() { return `从时间维度获得${formatInt(308)}次tick速度升级。`; },
    checkRequirement: () => player.totalTickGained.gte(308),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "时间维度基于tick速度获得倍率。",
    effect: () => Tickspeed.perSecond.pow(0.000005),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(105).isUnlocked ? DC.D1 : Decimal.clamp(player.totalTickGained.div(308), 0, 1)
  },
  {
    id: 106,
    name: "蜂拥而至",
    get description() { return `在${formatInt(15)}秒内获得${formatInt(10)}个复制器星系。`; },
    checkRequirement: () => Replicanti.galaxies.total.gte(10) && Time.thisInfinity.totalSeconds.lte(15),
    checkEvent: GAME_EVENT.REPLICANTI_TICK_AFTER,
    progress: () => Achievement(106).isUnlocked ? DC.D1 : (Time.thisInfinity.totalSeconds.gt(15) ? DC.DM1 : Decimal.clamp(Replicanti.galaxies.total.div(10), 0, 1))
  },
  {
    id: 107,
    name: "岂需指引？",
    get description() { return `无限次数少于${formatInt(10)}时进行永恒。`; },
    checkRequirement: () => Currency.infinities.lt(10),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    progress: () => Achievement(107).isUnlocked ? DC.D1 : (Currency.infinities.gte(10) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 108,
    name: "九亦能承",
    get description() { return `恰好拥有${formatInt(9)}复制器时进行永恒。`; },
    checkRequirement: () => Replicanti.amount.round().eq(9),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    progress: () => Achievement(107).isUnlocked ? DC.D1 : (Replicanti.amount.round().neq(9) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 111,
    name: "喜闻君爱无限……",
    get description() {
      return `过往${formatInt(10)}次无限中，每次无限点数皆较前次
      至少${format(DC.NUMMAX, 1, 0)}倍。`;
    },
    checkRequirement: () => {
      if (player.records.recentInfinities.some(i => i[0] === Number.MAX_VALUE)) return false;
      const infinities = player.records.recentInfinities.map(run => run[2]);
      for (let i = 0; i < infinities.length - 1; i++) {
        if (infinities[i].lt(infinities[i + 1].times(DC.NUMMAX))) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.BIG_CRUNCH_AFTER,
    reward: "反物质不因维度提升或反物质星系而重置。",
    progress: () => {
      let infinf = 0;
      const rinfinities = player.records.recentInfinities.map(run => run[2]);
      for (let i = 0; i < rinfinities.length - 1; i++) {
        if (rinfinities[i].gte(rinfinities[i + 1].times(DC.NUMMAX))) infinf++;
      }
      return Achievement(111).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(infinf).div(9), 0, 1);
    }
  },
  {
    id: 112,
    name: "永不再来",
    get description() { return `无限挑战时间总和低于${formatInt(750)}ms。`; },
    checkRequirement: () => Time.infinityChallengeSum.totalMilliseconds.lt(750),
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.REALITY_RESET_AFTER],
    progress: () => Achievement(112).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(750).div(Time.infinityChallengeSum.totalMilliseconds), 0, 1)
  },
  {
    id: 113,
    name: "永恒即新无限",
    get description() { return `${formatInt(250)}ms内完成永恒。`; },
    checkRequirement: () => Time.thisEternity.totalMilliseconds.lte(250),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() { return `获得${formatX(3)}倍更多永恒。`; },
    effect: () => player.disablePostReality ? 1 : 3,
    progress: () => Achievement(113).isUnlocked ? DC.D1 : (Time.thisEternity.totalMilliseconds.gt(250) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 114,
    name: "汝为谬误",
    description: "在永恒挑战中失败。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.CHALLENGE_FAILED,
    reward: "成就感渐渐消散。",
    effect: () => "Sense of accomplishment (fading)",
    progress: () => {
      if (Achievement(114).isUnlocked) return DC.D1;
      if (!EternityChallenge(4).isRunning || !EternityChallenge(12).isRunning) return DC.DM1;
      if (EternityChallenge(4).isRunning) return Decimal.clamp(Currency.infinities.value.div(EternityChallenge(4)._config.restriction(EternityChallenge(4).completions).add(1)), 0, 1);
      return Decimal.clamp(Time.thisEternity.totalSeconds.div(EternityChallenge(12)._config.restriction(EternityChallenge(12).completions)), 0, 1);
    }
  },
  {
    id: 115,
    name: "愿得七永恒",
    description: "在永恒挑战中启动无限挑战。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    progress: () => Achievement(115).isUnlocked ? DC.D1 : (!EternityChallenge.current ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(2000), 0, 1))
  },
  {
    id: 116,
    name: "岂必无限",
    get description() { return `仅拥有${formatInt(1)}无限时进行永恒。`; },
    checkRequirement: () => Currency.infinities.lte(1),
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    reward: "基于无限次数的无限点数倍率。",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(Currency.infinitiesTotal.value.clampMin(1), LOG10_2 / 4).powEffectOf(TimeStudy(31)),
    cap: () => Effarig.eternityCap,
    formatEffect: value => {
      // Since TS31 is already accounted for in the effect prop, we need to "undo" it to display the base value here
      const mult = formatX(value, 2, 2);
      return TimeStudy(31).canBeApplied
        ? `${formatX(value.pow(1 / TimeStudy(31).effectValue), 2, 1)} (时间研究31后: ${mult})`
        : mult;
    },
    progress: () => Achievement(116).isUnlocked ? DC.D1 : (Currency.infinities.gte(1) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 117,
    name: "量贩维度提升！",
    get description() { return `一次性批量购${formatInt(750)}次维度提升。`; },
    checkRequirement: ([bulk]) => bulk.gte(750),
    checkEvent: GAME_EVENT.DIMBOOST_AFTER,
    get reward() {
      return `维度提升对反物质维度的倍率提升${formatPercents(0.01)}。`;
    },
    effect: () => player.disablePostReality ? 1 : 1.01,
    progress: () => Achievement(117).isUnlocked ? DC.D1 : Decimal.clamp(DimBoost.maxBuyableDimBoostsAfterCap.div(750), 0, 1)
  },
  {
    id: 118,
    name: "逾九千",
    get description() { return `维度献祭总倍率达到${formatPostBreak(DC.E9000)}。`; },
    checkRequirement: () => Sacrifice.totalBoost.add(1).log10().gte(9000),
    checkEvent: GAME_EVENT.SACRIFICE_RESET_AFTER,
    reward: `维度献祭不重置反物质维度
      且自动购买器开启时每tick触发。`,
    progress: () => Achievement(118).isUnlocked ? DC.D1 : Decimal.clamp(Sacrifice.totalBoost.add(1).log10().div(9000), 0, 1)
  },
  {
    id: 121,
    name: "能得无限点数无限乎？",
    get description() { return `无限点数达到${formatPostBreak("1e30008")}。`; },
    checkRequirement: () => Currency.infinityPoints.value.add(1).log10().gte(30008),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(121).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(30008), 0, 1)
  },
  {
    id: 122,
    name: "汝已死矣。",
    description: "不购买反物质维度二至八进行永恒。",
    checkRequirement: () => player.requirementChecks.eternity.onlyAD1,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    progress: () => Achievement(122).isUnlocked ? DC.D1 : (!player.requirementChecks.eternity.onlyAD1 ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 123,
    name: "五永恒以待更新",
    get description() { return `完成${formatInt(50)}个独特永恒挑战等级。`; },
    checkRequirement: () => EternityChallenges.completions >= 50,
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    progress: () => Achievement(123).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(EternityChallenges.completions).div(50), 0, 1)
  },
  {
    id: 124,
    name: "持久之契",
    get description() {
      return `单次无限中，每秒无限之力超越当前无限之力
      持续${formatInt(60)}秒。`;
    },
    checkRequirement: () => AchievementTimers.marathon2
      .check(
        !EternityChallenge(7).isRunning &&
        InfinityDimension(1).productionPerSecond.gt(Currency.infinityPower.value),
        60
      ),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => {
      //This is a rough estimate that should work but we'll see
      let isec = 0;
      if (AchievementTimers.marathon2.check(!EternityChallenge(7).isRunning && InfinityDimension(1).productionPerSecond.gt(Currency.infinityPower.value), 1)) isec++;
      else isec = 0;
      return Achievement(124).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(isec).div(60), 0, 1);
    }
  },
  {
    id: 125,
    name: "享食其后",
    get description() {
      return `于当前永恒中无任何无限或第一反物质维度，
      无限点数达${format(DC.E90)}。`;
    },
    checkRequirement: () => Currency.infinityPoints.value.add(1).log10().gte(90) &&
      player.requirementChecks.eternity.noAD1 && Currency.infinities.eq(0),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "基于本次无限所耗时间的无限点数倍率。",
    effect() {
      const thisInfinity = Time.thisInfinity.totalSeconds.times(10).plus(1);
      return player.disablePostReality ? DC.D1 : DC.D2.pow(Decimal.ln(thisInfinity).times(Decimal.min(Decimal.pow(thisInfinity, 0.11), 500)));
    },
    cap: () => Effarig.eternityCap,
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(125).isUnlocked ? DC.D1 : ((!player.requirementChecks.eternity.noAD1 || !Currency.infinities.eq(0)) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(90), 0, 1))
  },
  {
    id: 126,
    name: "流行之乐",
    get description() { return `复制器星系数量为反物质星系的${formatInt(180)}倍。`; },
    checkRequirement: () => Replicanti.galaxies.total.gte(player.galaxies.times(180)) && player.galaxies.gt(0),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `复制器星系将复制器除以${format(DC.NUMMAX, 1, 0)}
      而非重置为${formatInt(1)}。`;
    },
    progress: () => Achievement(126).isUnlocked ? DC.D1 : (player.galaxies.lte(0) ? DC.DM1 : Decimal.clamp(Replicanti.galaxies.total.div(player.galaxies.times(180)), 0, 1))
  },
  {
    id: 127,
    name: "别求新阶……",
    get description() { return `永恒点数达到${format(DC.NUMMAX, 1, 0)}。`; },
    checkRequirement: () => Currency.eternityPoints.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(127).isUnlocked ? DC.D1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 128,
    name: "如何方能去汝",
    get description() { return `无任何时间研究，无限点数达到${formatPostBreak("1e22000")}。`; },
    checkRequirement: () => Currency.infinityPoints.value.add(1).log10().gte(22000) && player.timestudy.studies.length === 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "时间维度乘以你拥有的时间研究数。",
    effect: () => Math.max(player.timestudy.studies.length, 1),
    formatEffect: value => `${formatX(value)}`,
    progress: () => Achievement(128).isUnlocked ? DC.D1 : (player.timestudy.studies.length !== 0 ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(22000), 0, 1))
  },
  {
    id: 131,
    name: "无有操守",
    get description() { return `获得${format(DC.E9, 3)}储存无限。`; },
    checkRequirement: () => Currency.infinitiesBanked.gte(DC.E9),
    checkEvent: [GAME_EVENT.ETERNITY_RESET_AFTER, GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION],
    get reward() {
      return `获得${formatX(2)}倍更多无限
      且永恒后永久保留${formatPercents(0.05)}无限作为储存无限。`;
    },
    effects: {
      infinitiesGain: () => player.disablePostReality && !(Alpha.isRunning && Alpha.currentStage >= 23) ? 1 : 2,
      bankedInfinitiesGain: () => player.disablePostReality && !(Alpha.isRunning && Alpha.currentStage >= 23)
        ? DC.D0 : Currency.infinities.value.times(0.05).floor()
    },
    progress: () => Achievement(131).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinitiesBanked.value.div(1e9), 0, 1)
  },
  {
    id: 132,
    name: "独此一片",
    get description() {
      return `在当前永恒中拥有${formatInt(569)}个反物质星系，且未获得任何
        复制器星系。`;
    },
    checkRequirement: () => player.galaxies.gte(569) && player.requirementChecks.eternity.noRG,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    reward: "基于反物质星系获得超光速粒子与膨胀时间获取乘数。",
    effect: () => player.disablePostReality ? 1 : Decimal.max(Decimal.pow(player.galaxies, 0.04), 1).times(1.22).toNumber(),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(132).isUnlocked ? DC.D1 : (!player.requirementChecks.eternity.noRG ? DC.DM1 : Decimal.clamp(player.galaxies.div(569), 0, 1))
  },
  {
    id: 133,
    name: "本不喜此无限之事",
    get description() {
      return `在不购买任何无限维度或${formatX(2)}无限点数乘数的情况下
      达到${formatPostBreak(DC.E200000)}无限点数。`;
    },
    checkRequirement: () =>
      Array.dimensionTiers.map(InfinityDimension).every(dim => dim.baseAmount.eq(0)) &&
      player.IPMultPurchases.eq(0) &&
      Currency.infinityPoints.value.add(1).log10().gte(200000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "开始永恒时所有无限挑战已解锁并完成。",
    progress: () => Achievement(133).isUnlocked ? DC.D1 : ((!Array.dimensionTiers.map(InfinityDimension).every(dim => dim.baseAmount === 0) || player.IPMultPurchases.neq(0)) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(200000), 0, 1))
  },
  {
    id: 134,
    name: "何时方足？",
    get description() { return `复制器达到${formatPostBreak("1e15000")}。`; },
    checkRequirement: () => Replicanti.amount.add(1).log10().gte(15000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `在${format(replicantiCap(), 1)}复制器以下，复制器获取速度${formatInt(2)}倍。`;
    },
    progress: () => Achievement(134).isUnlocked ? DC.D1 : Decimal.clamp(Replicanti.amount.add(1).log10().div(15000), 0, 1)
  },
  {
    id: 135,
    name: "速逾薯之幂",
    get description() { return `每秒tick超过${formatPostBreak("1e8296262")}。`; },
    checkRequirement: () => Tickspeed.current.log10().lte(-8296262),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(135).isUnlocked ? DC.D1 : Decimal.clamp(Tickspeed.current.log10().sub(3).neg().div(8296262), 0, 1)
  },
  {
    id: 136,
    name: "已告汝，时间相对",
    description: "膨胀时间。",
    checkEvent: GAME_EVENT.ACHIEVEMENT_EVENT_OTHER,
    progress: () => Achievement(136).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(EternityChallenge(11).completions).div(20).min(0.25).add(new Decimal(EternityChallenge(12).completions).div(20).min(0.25)).add(player.timestudy.maxTheorem.div(51600).min(0.25)).add(player.timestudy.theorem.div(20000).min(0.25)), 0, 1)
  },
  {
    id: 137,
    name: "今以膨胀时间思维！",
    get description() {
      return `膨胀时间状态下，于${formatInt(1)}分钟或更短内
      获${formatPostBreak("1e260000")}反物质。`;
    },
    checkRequirement: () =>
      Currency.antimatter.value.add(1).log10().gte(260000) &&
      Time.thisEternity.totalMinutes.lte(1) &&
      player.dilation.active,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `膨胀时间时获得${formatX(2)}倍膨胀时间与时间定理。`; },
    effect: () => player.disablePostReality ? 1 : (player.dilation.active ? 2 : 1),
    progress: () => Achievement(137).isUnlocked ? DC.D1 : ((!player.dilation.active || Time.thisEternity.totalMinutes.gt(1)) ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(260000), 0, 1))
  },
  {
    id: 138,
    name: "此乃去汝之法。",
    get description() {
      return `膨胀时间状态下无任何时间研究，无限点数达到${formatPostBreak("1e26000")}。`;
    },
    checkRequirement: () =>
      player.timestudy.studies.length === 0 &&
      player.dilation.active &&
      Currency.infinityPoints.value.add(1).log10().gte(26000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "移除主动与挂机时间研究路径中时间研究131和133的负面效果。",
    progress: () => Achievement(138).isUnlocked ? DC.D1 : ((!player.dilation.active || player.timestudy.studies.length !== 0) ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(26000), 0, 1))
  },
  {
    id: 141,
    name: "回到现实",
    description: "创造新现实。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() {
      return `${formatX(4)}无限点数获取，且购买${formatInt(10)}
      反物质维度的倍率+${format(0.1, 0, 1)}。`;
    },
    effects: {
      ipGain: () => player.disablePostReality ? 1 : 4,
      buyTenMult: () => player.disablePostReality ? 0 : 0.1
    },
    progress: () => Achievement(141).isUnlocked ? DC.D1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(4000), 0, 1)
  },
  {
    id: 142,
    name: "此作何用？",
    description: "解锁自动化装置。",
    checkRequirement: () => Player.automatorUnlocked,
    checkEvent: [GAME_EVENT.REALITY_RESET_AFTER, GAME_EVENT.REALITY_UPGRADE_BOUGHT, GAME_EVENT.PERK_BOUGHT,
      GAME_EVENT.BLACK_HOLE_UNLOCKED],
    get reward() { return `维度提升强度提升${formatPercents(0.5)}。`; },
    effect: () => player.disablePostReality ? 1 : 1.5,
    progress: () => Achievement(142).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(AutomatorPoints.totalPoints).div(100), 0, 1)
  },
  {
    id: 143,
    name: "喜闻君爱翻新……",
    get description() {
      return `过往${formatInt(10)}次永恒中，每次永恒点数皆较前次
      至少${format(DC.NUMMAX, 1, 0)}倍。`;
    },
    checkRequirement: () => {
      if (player.records.recentEternities.some(i => i[0] === Number.MAX_VALUE)) return false;
      const eternities = player.records.recentEternities.map(run => run[2]);
      for (let i = 0; i < eternities.length - 1; i++) {
        if (eternities[i].lt(eternities[i + 1].times(DC.NUMMAX))) return false;
      }
      return true;
    },
    checkEvent: GAME_EVENT.ETERNITY_RESET_AFTER,
    reward: "星系不再重置维度提升。",
    progress: () => {
      let infete = 0;
      const reternities = player.records.recentEternities.map(run => run[2]);
      for (let i = 0; i < reternities.length - 1; i++) {
        if (reternities[i].gte(reternities[i + 1].times(DC.NUMMAX))) infete++;
      }
      return Achievement(143).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(infete).div(9), 0, 1);
    }
  },
  {
    id: 144,
    name: "此乃星际之典乎？",
    description: "解锁黑洞。",
    checkRequirement: () => BlackHole(1).isUnlocked,
    checkEvent: GAME_EVENT.BLACK_HOLE_UNLOCKED,
    progress: () => Achievement(144).isUnlocked ? DC.D1 : Decimal.clamp(Currency.realityMachines.value.div(100), 0, 1)
  },
  {
    id: 145,
    name: "此方向无误乎？",
    description: "任一黑洞间隔短于其持续时间。",
    checkRequirement: () => BlackHoles.list.some(bh => bh.interval < bh.duration),
    checkEvent: GAME_EVENT.BLACK_HOLE_UPGRADE_BOUGHT,
    get reward() { return `黑洞间隔缩短${formatPercents(0.1)}。`; },
    effect: () => player.disablePostReality ? 1 : 0.9,
    progress: () => Achievement(145).isUnlocked ? DC.D1 : Decimal.clamp(Decimal.max(new Decimal(BlackHole(1).duration).div(new Decimal(BlackHole(1).interval).max(0.000001)), new Decimal(BlackHole(2).duration).div(new Decimal(BlackHole(2).interval).max(0.000001))), 0, 1)
  },
  {
    id: 146,
    name: "生之嘉赏",
    description: "购得所有复兴。",
    checkRequirement: () => player.reality.perks.size === Perks.all.length,
    checkEvent: GAME_EVENT.PERK_BOUGHT,
    get reward() { return `符文稀有度+${formatPercents(0.01)}。`; },
    effect: () => player.disablePostReality ? 0 : 1,
    progress: () => Achievement(146).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.reality.perks.size).div(Perks.all.length), 0, 1)
  },
  {
    id: 147,
    name: "现实之主",
    description: "购得所有现实升级。",
    checkRequirement: () => RealityUpgrades.allBought,
    checkEvent: GAME_EVENT.REALITY_UPGRADE_BOUGHT,
    reward: "解锁现实之天体——特蕾莎。",
    progress: () => Achievement(147).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(RealityUpgrades.all.filter(u => u.isBought || u.boughtAmount > 0).length).div(RealityUpgrades.all.length), 0, 1)
  },
  {
    id: 148,
    name: "同花顺",
    description: "以每种基础符文各一进行现实。",
    checkRequirement: () => BASIC_GLYPH_TYPES
      .every(type => Glyphs.activeList.some(g => g.type === type)),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    reward: "所得符文等级随已装备不同符文类型数增加。",
    effect: () => player.disablePostReality ? 0 : (new Set(Glyphs.activeWithoutCompanion.map(g => g.type))).size,
    formatEffect: value => `+${formatInt(value)}`,
    progress: () => Achievement(148).isUnlocked ? DC.D1 : (!BASIC_GLYPH_TYPES.every(type => Glyphs.activeList.some(g => g.type === type)) ? DC.DM1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(4000), 0, 1))
  },
  {
    id: 151,
    name: "本无所用",
    get description() {
      return `于当前无限中未购第八反物质维度，
      获${formatInt(800)}反物质星系。`;
    },
    checkRequirement: () => player.galaxies.gte(800) && player.requirementChecks.infinity.noAD8,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    reward: "解锁成就之天体——V。",
    progress: () => Achievement(151).isUnlocked ? DC.D1 : (!player.requirementChecks.infinity.noAD8 ? DC.DM1 : Decimal.clamp(player.galaxies.div(800), 0, 1))
  },
  {
    id: 152,
    name: "还有符文否？",
    get description() { return `背包中拥有${formatInt(100)}个符文。`; },
    checkRequirement: () => Glyphs.inventoryList.length >= 100,
    checkEvent: GAME_EVENT.GLYPHS_CHANGED,
    progress: () => Achievement(152).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Glyphs.inventoryList.length).div(100), 0, 1)
  },
  {
    id: 153,
    name: "是非已无关紧要",
    description: "不产生反物质进行现实。",
    checkRequirement: () => player.requirementChecks.reality.noAM,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    progress: () => Achievement(153).isUnlocked ? DC.D1 : (!player.requirementChecks.reality.noAM ? DC.DM1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(4000), 0, 1))
  },
  {
    id: 154,
    name: "我即速度",
    get description() { return `${formatInt(5)}秒内完成现实(游戏时间)。`; },
    checkRequirement: () => Time.thisReality.totalSeconds.lte(5),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() {
      return `每次现实有${formatPercents(EndgameMastery(41).isBought ? 1 : 0.1)}概率
      ${formatX(2)}现实与复兴点数。`; },
    effect: () => player.disablePostReality ? 0 : (EndgameMastery(41).isBought ? 1 : 0.1),
    progress: () => Achievement(154).isUnlocked ? DC.D1 : (Time.thisReality.totalSeconds.gt(5) ? DC.DM1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(4000), 0, 1))
  },
  {
    id: 155,
    name: "成就第一五九八三",
    get description() { return `游玩${formatFloat(13.7, 1)}十亿年。`; },
    checkRequirement: () => Time.totalTimePlayed.totalYears.gt(13.7e9),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `黑洞持续时间延长${formatPercents(0.1)}。`; },
    effect: () => player.disablePostReality ? 1 : 1.1,
    progress: () => Achievement(155).isUnlocked ? DC.D1 : Decimal.clamp(Time.totalTimePlayed.totalYears.div(13.7e9), 0, 1)
  },
  {
    id: 156,
    name: "大学辍学",
    description: "不购入时间定理进行现实。",
    checkRequirement: () => player.requirementChecks.reality.noPurchasedTT,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `获得${formatX(2.5, 0, 1)}生成时间定理，及麦当劳™️免费券一张。`; },
    effect: () => player.disablePostReality ? 1 : 2.5,
    progress: () => Achievement(156).isUnlocked ? DC.D1 : (!player.requirementChecks.reality.noPurchasedTT ? DC.DM1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(4000), 0, 1))
  },
  {
    id: 157,
    name: "此效甚著！",
    get description() { return `获得具有${formatInt(4)}种效果的符文。`; },
    checkRequirement: () => Glyphs.activeList.concat(Glyphs.inventoryList).map(
      glyph => getGlyphEffectsFromBitmask(glyph.effects, 0, 0)
        .filter(effect => effect.isGenerated).length
    ).max() >= 4,
    checkEvent: GAME_EVENT.GLYPHS_CHANGED,
    progress: () => Achievement(157).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Glyphs.activeList.concat(Glyphs.inventoryList).map(glyph => getGlyphEffectsFromBitmask(glyph.effects, 0, 0).filter(effect => effect.isGenerated).length).max()).div(4), 0, 1)
  },
  {
    id: 158,
    name: "汝在穴中乎？",
    description: "使两个黑洞永久化。",
    checkRequirement: () => BlackHole(1).isPermanent && BlackHole(2).isPermanent,
    checkEvent: GAME_EVENT.BLACK_HOLE_UPGRADE_BOUGHT,
    get reward() { return `黑洞强度提升${formatPercents(0.1)}。`; },
    effect: () => player.disablePostReality ? 1 : 1.1,
    progress: () => Achievement(158).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(BlackHoles.list.filter(b => b.isPermanent).length).div(2), 0, 1)
  },
  {
    id: 161,
    name: "汝误矣，童子",
    get description() { return `在膨胀时间状态下获得${formatPostBreak(DC.E1E8)}反物质。`; },
    checkRequirement: () => Currency.antimatter.value.add(1).log10().gte(100000000) && player.dilation.active,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(161).isUnlocked ? DC.D1 : (!player.dilation.active ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(100000000), 0, 1))
  },
  {
    id: 162,
    name: "重装重连",
    description: "同时拥有所有时间研究。",
    checkRequirement: () => player.timestudy.studies.length >= 58,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(162).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.timestudy.studies.length).div(58), 0, 1)
  },
  {
    id: 163,
    name: "实乃易事！",
    get description() {
      return `于当前现实少于${formatInt(1)}秒（游戏时间）内
      完成所有永恒挑战${formatInt(5)}次。`;
    },
    checkRequirement: () => EternityChallenges.all.map(ec => ec.completions).min() >= 5 &&
      Time.thisReality.totalSeconds.lte(1),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(163).isUnlocked ? DC.D1 : (Time.thisReality.totalSeconds.gt(1) ? DC.DM1 : Decimal.clamp(new Decimal(EternityChallenges.completions).div(60), 0, 1))
  },
  {
    id: 164,
    name: "无限倍二",
    get description() { return `获得${format(DC.NUMMAX, 1)}无限。`; },
    checkRequirement: () => Currency.infinitiesTotal.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `获得×${formatInt(1024)}倍更多无限。`; },
    effect: () => player.disablePostReality ? 1 : 1024,
    progress: () => Achievement(164).isUnlocked ? DC.D1 : Decimal.clamp(Currency.infinitiesTotal.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 165,
    name: "完美平衡",
    get description() { return `获得等级${formatInt(5000)}的符文，所有等级因子均等加权。`; },
    checkRequirement: () => gainedGlyphLevel().actualLevel.gte(5000) &&
      ["repl", "dt", "eternities"].every(
        i => player.celestials.effarig.glyphWeights[i] === player.celestials.effarig.glyphWeights.ep),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    reward: "解锁最佳自动符文等级因子调整。",
    progress: () => Achievement(165).isUnlocked ? DC.D1 : (!["repl", "dt", "eternities"].every(i => player.celestials.effarig.glyphWeights[i] === player.celestials.effarig.glyphWeights.ep) ? DC.DM1 : Decimal.clamp(gainedGlyphLevel().actualLevel.div(5000), 0, 1))
  },
  {
    id: 166,
    name: "好好。",
    get description() { return `获得等级尾数为${formatInt(6969)}的符文。`; },
    checkRequirement: () => Decimal.modulo(gainedGlyphLevel().actualLevel, 10000).eq(6969),
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() { return `符文等级+${formatInt(69)}。`; },
    effect: () => player.disablePostReality ? 0 : 69,
    progress: () => Achievement(166).isUnlocked ? DC.D1 : (gainedGlyphLevel().actualLevel.lte(6969) ? Decimal.clamp(gainedGlyphLevel().actualLevel.div(6969), 0, 1) : Decimal.clamp(Decimal.mod(gainedGlyphLevel().actualLevel.sub(6969), 10000).div(10000), 0, 1))
  },
  {
    id: 167,
    name: "层先生？汝不在榜",
    get description() { return `现实机器达到${format(DC.NUMMAX, 1, 0)}。`; },
    checkRequirement: () => Currency.realityMachines.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    reward: "基于当前现实机器获得更多现实机器。",
    effect: () => player.disablePostReality ? DC.D1 : Decimal.clampMin(1, Currency.realityMachines.value.add(1).log2()),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(167).isUnlocked ? DC.D1 : Decimal.clamp(Currency.realityMachines.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 168,
    name: "哇，已及半途",
    get description() { return `获得${formatInt(50)}拉天体记忆等级。`; },
    checkRequirement: () => Ra.totalPetLevel >= 50,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `获得${formatPercents(0.1)}更多记忆。`; },
    effect: () => player.disablePostReality ? 1 : 1.1,
    progress: () => Achievement(168).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Ra.totalPetLevel).div(50), 0, 1)
  },
  {
    id: 171,
    name: "神大悦",
    description: "对每种可献祭符文至少献祭一次。",
    checkRequirement: () => Object.values(player.reality.glyphs.sac).every(s => s.gt(0)),
    checkEvent: GAME_EVENT.GLYPHS_CHANGED,
    get reward() { return `符文献祭强度提升${formatX(2)}倍。`; },
    effect: () => player.disablePostReality ? 1 : 2,
    progress: () => Achievement(171).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Object.values(player.reality.glyphs.sac).filter(s => s.gt(0)).length).div(7), 0, 1)
  },
  {
    id: 172,
    name: "现实搭车指南",
    get description() {
      return `以${format(DC.NUMMAX, 1)}现实机器行现实，未持有充能无限升级、
      未装备符文、未购三元研究。`;
    },
    checkRequirement: () => MachineHandler.gainedRealityMachines.gte(DC.NUMMAX) &&
      player.celestials.ra.charged.size === 0 && Glyphs.activeWithoutCompanion.length === 0 &&
      player.requirementChecks.reality.noTriads,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    progress: () => Achievement(172).isUnlocked ? DC.D1 : ((player.celestials.ra.charged.size !== 0 || Glyphs.activeWithoutCompanion.length !== 0 || !player.requirementChecks.reality.noTriads) ? DC.DM1 : Decimal.clamp(Currency.realityMachines.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 173,
    name: "此成就本不存在 III",
    get description() { return `现实机器达到${formatPostBreak(DC.D9_99999E999, 5, 0)}。`; },
    checkRequirement: () => player.reality.realityMachines.gte(DC.D9_99999E999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(173).isUnlocked ? DC.D1 : Decimal.clamp(Currency.realityMachines.value.add(1).log10().div(1000), 0, 1)
  },
  {
    id: 174,
    name: "汝不已有二？",
    description: "得一奇点。",
    checkRequirement: () => true,
    checkEvent: GAME_EVENT.SINGULARITY_RESET_BEFORE,
    progress: () => Achievement(174).isUnlocked ? DC.D1 : Decimal.clamp(Currency.darkEnergy.value.div(200), 0, 1)
  },
  {
    id: 175,
    name: "第一反史学家",
    get description() { return `获得${formatInt(25000)}所有炼金资源。`; },
    checkRequirement: () => AlchemyResources.all.every(x => x.amount >= 25000),
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    get reward() {
      return `协同可超过${formatPercents(1)}，动量提升速度加快${formatX(10)}倍。`;
    },
    effect: () => player.disablePostReality ? 1 : 10,
    progress: () => Achievement(175).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(AlchemyResources.all.filter(x => x.amount >= 25000).length).div(21), 0, 1)
  },
  {
    id: 176,
    name: "母数至三",
    description: "湮灭暗物质维度。",
    progress: () => Achievement(176).isUnlocked ? DC.D1 : Decimal.clamp((ImaginaryUpgrade(19).isBought ? new Decimal(2/3) : (player.requirementChecks.reality.maxStudies > 8 ? DC.D0 : Tickspeed.continuumValue.div(11.55e6).min(1/3)).add(Currency.imaginaryMachines.value.div(8.4e10).min(1/3))).add(Currency.darkMatter.value.add(1).log10().div(180).min(1/3)), 0, 1)
  },
  {
    id: 177,
    name: "此路需一天体",
    description: "完成前六行所有奇点里程碑至少一次。",
    checkRequirement: () => SingularityMilestone.tesseractMultFromSingularities.completions.gt(0),
    checkEvent: GAME_EVENT.SINGULARITY_RESET_AFTER,
    progress: () => Achievement(177).isUnlocked ? DC.D1 : Decimal.clamp(Currency.singularities.value.add(1).log10().div(Decimal.log10(4e44)), 0, 1)
  },
  {
    id: 178,
    name: "世界毁灭者",
    get description() { return `获得${formatInt(100000)}个反物质星系。`; },
    checkRequirement: () => player.galaxies.gte(100000),
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER,
    get reward() { return `所有星系强度提升${formatPercents(0.01)}。`; },
    effect: () => player.disablePostReality ? 1 : 1.01,
    progress: () => Achievement(178).isUnlocked ? DC.D1 : Decimal.clamp(player.galaxies.div(100000), 0, 1)
  },
  {
    id: 181,
    displayId: 666,
    name: "反物质维度永恒",
    description: "毁灭汝之现实。",
    checkRequirement: () => Pelle.isDoomed,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    progress: () => Achievement(181).isUnlocked ? DC.D1 : Decimal.clamp((ImaginaryUpgrade(25).isBought ? new Decimal(0.5) : Currency.imaginaryMachines.value.div(6.4e15).min(0.25).add((!Laitela.isRunning || Laitela.maxAllowedDimension !== 0 || Glyphs.activeWithoutCompanion.length > 1) ? DC.D0 : Currency.eternityPoints.value.add(1).log10().div(16000).min(0.25))).add(new Decimal(Achievements.prePelleRows.countWhere(r => r.every(a => a.isUnlocked))).div(68).min(0.25)).add(new Decimal(AlchemyResources.all.filter(x => x.amount >= 25000).length).div(84).min(0.25)), 0, 1)
  },
  {
    id: 182,
    name: "再一次",
    description: "永久恢复所有反物质维度自动购买。",
    checkRequirement: () => PelleUpgrade.antimatterDimAutobuyers1.canBeApplied &&
      PelleUpgrade.antimatterDimAutobuyers2.canBeApplied,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(182).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp((PelleUpgrade.antimatterDimAutobuyers1.canBeApplied ? new Decimal(0.5) : DC.D0).add(PelleUpgrade.antimatterDimAutobuyers2.canBeApplied ? new Decimal(0.5) : DC.D0), 0, 1))
  },
  {
    id: 183,
    name: "既视感",
    description: "毁灭中完成无限挑战五。",
    checkRequirement: () => Pelle.isDoomed && InfinityChallenge(5).isCompleted,
    checkEvent: GAME_EVENT.INFINITY_CHALLENGE_COMPLETED,
    // Weirdly specific reward? Yes, its V's ST bonus because we forgot to disable it
    // when balancing Pelle and only realised too late.
    get reward() { return `所有反物质维度提升至${formatPow(1.1012920825630384, 0, 3)}`; },
    effect: () => player.disablePostReality ? 1 : 1.1012920825630384,
    progress: () => Achievement(183).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(36000).min(0.5).add(!InfinityChallenge(5).isRunning ? DC.D0 : player.antimatter.max(1).log10().div(33000).min(0.5)), 0, 1))
  },
  {
    id: 184,
    name: "汝出局！",
    description: "遭遇第三佩勒之击。",
    checkRequirement: () => PelleStrikes.eternity.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED,
    progress: () => Achievement(184).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 185,
    name: "昔者七年之前",
    description: "遭遇第四佩勒之击。",
    checkRequirement: () => PelleStrikes.ECs.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED,
    progress: () => Achievement(185).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp(player.timestudy.maxTheorem.div(115), 0, 1))
  },
  {
    id: 186,
    displayId: 181,
    name: "痴迷不悟",
    description: `毁灭时购入时间研究181。`,
    progress: () => Achievement(186).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp((TimeStudy(171).isBought ? new Decimal(0.5) : player.timestudy.maxTheorem.div(186).min(0.5)).add(!TimeStudy(171).isBought ? DC.D0 : player.timestudy.theorem.div(400).min(0.5)), 0, 1))
  },
  {
    id: 187,
    name: "膨胀时间之章",
    description: "毁灭中解锁膨胀时间。",
    checkRequirement: () => PelleStrikes.dilation.hasStrike,
    checkEvent: GAME_EVENT.PELLE_STRIKE_UNLOCKED,
    // We forgot to disable a singularity milestone while balancing Pelle; now it's disabled
    // and this upgrade has the same effect as it used to.
    get reward() {
      return `每可重复膨胀时间倍率升级之倍率
      提升${formatX(1.35, 0, 2)}。`;
    },
    effect: () => player.disablePostReality ? 1 : 1.35,
    progress: () => Achievement(187).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp(new Decimal(EternityChallenge(11).completions).div(20).min(0.25).add(new Decimal(EternityChallenge(12).completions).div(20).min(0.25)).add(player.timestudy.maxTheorem.div(51600).min(0.25)).add(player.timestudy.theorem.div(20000).min(0.25)), 0, 1))
  },
  {
    id: 188,
    name: "终结……",
    description: "逃离毁灭现实。",
    checkRequirement: () => Currency.antimatter.value.add(1).log10().gte(9e15) && Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(188).isUnlocked ? DC.D1 : (!Pelle.isDoomed ? DC.DM1 : Decimal.clamp(player.antimatter.add(1).log10().div(9e15), 0, 1))
  },
  {
    id: 191,
    name: "……暂此",
    description: "第二轮购入第一维度。",
    checkRequirement: () => PlayerProgress.endgameUnlocked() && AntimatterDimension(1).amount.gte(1),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(191).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.endgames).div(2).min(0.5).add(player.antimatter.max(1).log10().div(2).min(0.5)), 0, 1)
  },
  {
    id: 192,
    name: "宿命",
    description: "第二轮毁灭汝之现实。",
    checkRequirement: () => PlayerProgress.endgameUnlocked() && Pelle.isDoomed,
    checkEvent: GAME_EVENT.REALITY_RESET_AFTER,
    progress: () => Achievement(192).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.endgames).div(2).min(0.5).add((ImaginaryUpgrade(25).isBought ? new Decimal(0.5) : Currency.imaginaryMachines.value.div(6.4e15).min(0.25).add((!Laitela.isRunning || Laitela.maxAllowedDimension !== 0 || Glyphs.activeWithoutCompanion.length > 1) ? DC.D0 : Currency.eternityPoints.value.add(1).log10().div(16000).min(0.25))).add(new Decimal(Achievements.prePelleRows.countWhere(r => r.every(a => a.isUnlocked))).div(68).min(0.25)).add(new Decimal(AlchemyResources.all.filter(x => x.amount >= 25000).length).div(84).min(0.25)).div(2)), 0, 1)
  },
  {
    id: 193,
    name: "势不可挡",
    description: "第二轮击败毁灭。",
    checkRequirement: () => PlayerProgress.endgameUnlocked() && Currency.antimatter.value.add(1).log10().gte(9e15) && Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `星系强度提升${formatPercents(0.1)}。`;
    },
    effect: () => player.disablePostReality ? 1 : 1.1,
    progress: () => Achievement(193).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.endgames).div(2).min(0.5).add(!Pelle.isDoomed ? DC.D0 : player.antimatter.max(1).log10().div(18e15).min(0.5)), 0, 1)
  },
  {
    id: 194,
    name: "时间。乃。相对。",
    description: "破碎永恒。",
    checkRequirement: () => player.break2,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(194).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.endgames).div(2).min(0.5).add(player.antimatter.max(1).log10().div(18e15).min(0.5)), 0, 1)
  },
  {
    id: 195,
    name: "系统错误",
    description: "一小时内完成终局。",
    checkRequirement: () => player.records.bestEndgame.realTime < 3600000,
    checkEvent: GAME_EVENT.ENDGAME_RESET_AFTER,
    progress: () => Achievement(195).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(3600000).div(player.records.bestEndgame.realTime), 0, 1)
  },
  {
    id: 196,
    name: "终至",
    description: "在佩勒中重获所有成就。",
    checkRequirement: () => PelleAchievementUpgrade.all.filter(u => u.canBeApplied).length >= 33,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `最多可装备${formatInt(2)}个鹿颈长与现实符文。`;
    },
    progress: () => Achievement(196).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(PelleAchievementUpgrade.all.filter(u => u.canBeApplied).length).div(33), 0, 1)
  },
  {
    id: 197,
    name: "此乃非法。",
    get description() { return `拥有等级${formatInt(25001)}或更高的现实符文。` },
    checkRequirement: () => Glyphs.inventoryList.filter(g => g.type === 'reality' && g.level.gte(25001)).length > 0,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(197).isUnlocked ? DC.D1 : Decimal.clamp(player.records.totalAntimatter.add(1).log10().add(1).log10().div(100).min(0.5).add(new Decimal(player.records.bestReality.glyphLevel).div(150006).min(0.5)), 0, 1)
  },
  {
    id: 198,
    name: "……亿万年复亿万年……",
    get description() { return `关闭天体物质时游戏速度达到${format(DC.NUMMAX, 1)}。` },
    checkRequirement: () => getGameSpeedupForDisplay().gte(DC.NUMMAX) && player.endgame.celestialMatterMultiplier.isActive === false,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(198).isUnlocked ? DC.D1 : (player.endgame.celestialMatterMultiplier.isActive ? DC.DM1 : Decimal.clamp(getGameSpeedupForDisplay().max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 201,
    name: "新之开端",
    description: "开始产生星系之力。",
    checkRequirement: () => GalacticPower.isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(201).isUnlocked ? DC.D1 : Decimal.clamp(Currency.singularities.value.add(1).log10().div(300), 0, 1)
  },
  {
    id: 202,
    name: "重装重连……再一次",
    description: "同时拥有所有终局精通。",
    checkRequirement: () => player.endgameMasteries.masteries.length >= 39,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(202).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.endgameMasteries.masteries.length).div(39), 0, 1)
  },
  {
    id: 203,
    name: "速逾膨胀时间之薯",
    get description() { return `每秒tick超过${formatPostBreak("ee29")}。`; },
    checkRequirement: () => Tickspeed.current.log10().lte(-1e29),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(203).isUnlocked ? DC.D1 : Decimal.clamp(Tickspeed.current.log10().sub(3).neg().div(1e29), 0, 1)
  },
  {
    id: 204,
    name: "硬核重置",
    description: "禁用所有佩勒削弱。",
    checkRequirement: () => PelleAchievementUpgrade.all.filter(u => u.canBeApplied).length >= 33 &&
      PelleDestructionUpgrade.all.filter(u => u.canBeApplied).length >= 50 &&
      PelleRealityUpgrade.all.filter(u => u.canBeApplied).length >= 20 &&
      PelleImaginaryUpgrade.all.filter(u => u.canBeApplied).length >= 19 &&
      PelleCelestialUpgrade.all.filter(u => u.canBeApplied).length >= 21 &&
      PellePerkUpgrade.all.filter(u => u.canBeApplied).length >= 29 &&
      PelleAlchemyUpgrade.all.filter(u => u.canBeApplied).length >= 21,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `解锁打击禁用。`;
    },
    progress: () => Achievement(204).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(PelleAchievementUpgrade.all.filter(u => u.canBeApplied).length).div(231).min(1/7).add(new Decimal(PelleDestructionUpgrade.all.filter(u => u.canBeApplied).length).div(350).min(1/7)).add(new Decimal(PelleRealityUpgrade.all.filter(u => u.canBeApplied).length).div(140).min(1/7)).add(new Decimal(PelleImaginaryUpgrade.all.filter(u => u.canBeApplied).length).div(133).min(1/7)).add(new Decimal(PelleCelestialUpgrade.all.filter(u => u.canBeApplied).length).div(147).min(1/7)).add(new Decimal(PellePerkUpgrade.all.filter(u => u.canBeApplied).length).div(203).min(1/7)).add(new Decimal(PelleAlchemyUpgrade.all.filter(u => u.canBeApplied).length).div(147).min(1/7)), 0, 1)
  },
  {
    id: 205,
    name: "仰望星辰",
    description: "进入以太。",
    checkRequirement: () => Ethereal.isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(205).isUnlocked ? DC.D1 : Decimal.clamp(Currency.galacticPower.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 206,
    name: "执暗之权",
    description: "购入第八暗物质维度。",
    checkRequirement: () => ImaginaryUpgrade(29).isBought,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `星系生成不稳定性降低${formatInt(2)}。`;
    },
    effect: () => player.disablePostReality ? 0 : 2,
    progress: () => Achievement(206).isUnlocked ? DC.D1 : Decimal.clamp((GalacticPowers.galacticAscension.isUnlocked ? Replicanti.galaxies.total.max(1).times(player.galaxies.max(1)).times(player.dilation.totalTachyonGalaxies.max(1)).times(GalacticPower.freeGalaxies.max(1)) : Replicanti.galaxies.total.add(player.galaxies).add(player.dilation.totalTachyonGalaxies).add(GalacticPower.freeGalaxies)).add(1).log10().div(150).min(0.5).add(Currency.imaginaryMachines.value.add(1).log10().div(400).min(0.5)), 0, 1)
  },
  {
    id: 207,
    name: "逝去……",
    description: "毁灭佩勒。",
    checkRequirement: () => PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length >= 5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `提升天体点获取。`;
    },
    progress: () => Achievement(207).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length).div(5), 0, 1)
  },
  {
    id: 208,
    name: "……然未忘怀",
    get description() { return `虚幻机器达到${format(DC.NUMMAX, 1, 0)}。` },
    checkRequirement: () => Currency.imaginaryMachines.value.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `基于未削弱天体物质获得天体物质转化指数的小型倍率。`;
    },
    effect: () => player.disablePostReality ? 1 : Decimal.pow(Decimal.log10(Currency.unnerfedCelestialMatter.value.add(1).log10().add(1)).add(1), 0.1).toNumber(),
    formatEffect: value => `${formatX(value, 2, 3)}`,
    progress: () => Achievement(208).isUnlocked ? DC.D1 : Decimal.clamp(Currency.imaginaryMachines.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 211,
    name: "谬误？",
    get description() { return `进入阿尔法现实。` },
    checkRequirement: () => Alpha.isRunning,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(211).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(PelleStrikeUpgrade.all.filter(u => u.canBeApplied).length).div(10).min(0.5).add(Currency.imaginaryMachines.value.add(1).log10().div(Decimal.log10(DC.NUMMAX).times(2)).min(0.5)), 0, 1)
  },
  {
    id: 212,
    name: "暗之坍缩",
    get description() { return `在阿尔法现实中达到无限。` },
    checkRequirement: () => Alpha.isRunning,
    checkEvent: GAME_EVENT.BIG_CRUNCH_BEFORE,
    get reward() {
      return `阿尔法衰变速率提升${formatX(1.1, 1, 1)}倍`;
    },
    effect: 1.1,
    progress: () => Achievement(212).isUnlocked ? DC.D1 : (!Alpha.isRunning ? DC.DM1 : Decimal.clamp(player.antimatter.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 213,
    name: "永不止息",
    get description() { return `在阿尔法现实中达到永恒。` },
    checkRequirement: () => Alpha.isRunning,
    checkEvent: GAME_EVENT.ETERNITY_RESET_BEFORE,
    get reward() {
      return `阿尔法衰变速度基于双机器提升。`;
    },
    effect: () => Decimal.max(Decimal.ln(Decimal.ln(Currency.dualMachines.value.add(1)).add(1)), 1),
    formatEffect: value => `${formatX(value, 2, 2)}`,
    progress: () => Achievement(213).isUnlocked ? DC.D1 : (!Alpha.isRunning ? DC.DM1 : Decimal.clamp(Currency.infinityPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1))
  },
  {
    id: 214,
    name: "永无餍足。",
    get description() { return `复制器达到${formatPostBreak("e1e10")}。` },
    checkRequirement: () => player.replicanti.amount.gte("e1e10"),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(214).isUnlocked ? DC.D1 : Decimal.clamp(Replicanti.amount.add(1).log10().div(1e10), 0, 1)
  },
  {
    id: 215,
    name: "域错误",
    get description() { return `天体点达到${format(DC.NUMMAX, 1, 0)}。` },
    checkRequirement: () => Currency.celestialPoints.value.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(215).isUnlocked ? DC.D1 : Decimal.clamp(Currency.celestialPoints.value.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 216,
    name: "此成就本不存在 IV",
    get description() { return `虚幻机器达到${formatPostBreak(DC.D9_99999E999, 5, 0)}。` },
    checkRequirement: () => player.reality.imaginaryMachines.gte(DC.D9_99999E999),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `基于虚幻机器获得以太之力的小型倍率。`;
    },
    effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(Decimal.log10(player.reality.imaginaryMachines.add(1)).div(1000), 5).times(1000),
    formatEffect: value => `${formatX(value, 3)}`,
    progress: () => Achievement(216).isUnlocked ? DC.D1 : Decimal.clamp(Currency.imaginaryMachines.value.add(1).log10().div(1000), 0, 1)
  },
  {
    id: 217,
    name: "为何犹在……",
    get description() { return `达到${format(1e12, 2, 2)}终局。` },
    checkRequirement: () => player.endgames >= 1e12,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(217).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(player.endgames).div(1e12), 0, 1)
  },
  {
    id: 218,
    name: "……徒受此苦？",
    get description() { return `无名氏现实内反物质达到${formatPostBreak("ee50")}。` },
    checkRequirement: () => Currency.antimatter.value.gte("ee50") && Enslaved.isRunning,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(218).isUnlocked ? DC.D1 : (!Enslaved.isRunning ? DC.DM1 : Decimal.clamp(player.antimatter.add(1).log10().add(1).log10().div(50), 0, 1))
  },
  {
    id: 221,
    name: "光",
    get description() { return `击败阿尔法。` },
    checkRequirement: () => Alpha.isRunning,
    checkEvent: GAME_EVENT.REALITY_RESET_BEFORE,
    get reward() {
      return `解锁天体维度扩展。`;
    },
    progress: () => Achievement(221).isUnlocked ? DC.D1 : (!Alpha.isRunning ? DC.DM1 : Decimal.clamp(Currency.eternityPoints.value.add(1).log10().div(4000), 0, 1))
  },
  {
    id: 222,
    name: "时间绝对",
    get description () { return `超光速粒子数量超过膨胀时间，且二者均超过${format("1e5000", 2)}。` },
    checkRequirement: () => Currency.tachyonParticles.value.gt(Currency.dilatedTime.value) && Currency.dilatedTime.value.gt("1e5000"),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `动量提升速度加快${formatX(10)}倍。`;
    },
    effect: () => player.disablePostReality ? 1 : 10,
    progress: () => Achievement(222).isUnlocked ? DC.D1 : Decimal.clamp(Currency.dilatedTime.value.add(1).log10().div(10000).min(0.5).add(Currency.dilatedTime.value.lte("1e5000") ? DC.D0 : Currency.tachyonParticles.value.add(1).log10().div(Currency.dilatedTime.value.add(1).log10().times(2)).min(0.5)), 0, 1)
  },
  {
    id: 223,
    name: "力！无限之力！",
    get description() { return `无限维度购买上限超过${format(DC.NUMMAX, 1, 0)}。` },
    checkRequirement: () => InfinityDimensions.totalDimCap.gt(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `终局时无限升级保持充能。`;
    },
    progress: () => Achievement(223).isUnlocked ? DC.D1 : Decimal.clamp(InfinityDimensions.totalDimCap.max(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 224,
    name: "宇宙毁灭者",
    get description() { return `佩勒外反物质达到${formatPostBreak(Decimal.pow10(1e100), 2)}。` },
    checkRequirement: () => Currency.antimatter.value.gte(Decimal.pow10(1e100)) && !Pelle.isDoomed,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `天体物质转化指数翻倍。`;
    },
    effect: () => player.disablePostReality ? 1 : 2,
    progress: () => Achievement(224).isUnlocked ? DC.D1 : (Pelle.isDoomed ? DC.DM1 : Decimal.clamp(player.antimatter.add(1).log10().add(1).log10().div(100), 0, 1))
  },
  {
    id: 225,
    name: "光速",
    description: "解锁天体物质上限。",
    checkRequirement: () => player.endgame.celDimExpansion.isBroken,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `天体物质软上限幅度降低${formatPercents(0.05)}。`;
    },
    effect: () => player.disablePostReality ? 1 : 0.95,
    progress: () => Achievement(225).isUnlocked ? DC.D1 : Decimal.clamp(player.endgame.celDimExpansion.celestialInfinityPoints.div(10000), 0, 1)
  },
  {
    id: 226,
    name: "三万度",
    description: "解锁星辰。",
    checkRequirement: () => player.endgame.ethereal.isExtended,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(226).isUnlocked ? DC.D1 : Decimal.clamp(player.endgame.ethereal.power.add(1).log10().div(25), 0, 1)
  },
  {
    id: 227,
    name: "此作何用？？？",
    description: "获得五维超立方。",
    checkRequirement: () => player.endgame.hypercubes.penteracts >= 1,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `解锁鹿颈长第二商店。`;
    },
    progress: () => Achievement(227).isUnlocked ? DC.D1 : Decimal.clamp((DualityUpgrade(25).isBought ? new Decimal(0.75) : new Decimal(player.celestials.laitela.hadrons.dark).div(128).min(0.25).add(Hadrons.timeFactor.div(2000).min(0.25)).add(Currency.dualMachines.value.add(1).log10().div(80).min(0.25))).add(Currency.eternityPoints.value.add(1).log10().add(1).log10().div(420).min(0.25)), 0, 1)
  },
  {
    id: 228,
    name: "回顾来路",
    get description() { return `反物质达到${formatPostBreak(DC.ENUMMAX, 2)}。` },
    checkRequirement: () => player.antimatter.gte(DC.ENUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `解锁神性。`;
    },
    progress: () => Achievement(228).isUnlocked ? DC.D1 : Decimal.clamp(player.antimatter.add(1).log10().add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 231,
    name: "至极大师",
    get description() { return `购入${formatInt(1000)}个终局技能。` },
    checkRequirement: () => EndgameSkills.totalPurchased() >= 1000,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `基于已购终局技能扩展反物质维度倍率，在佩勒中效果更强。`;
    },
    effect: () => player.disablePostReality ? 1 : 1 + ((Math.min(EndgameSkills.totalPurchased(), 2000) + (Math.max(Math.log2(EndgameSkills.totalPurchased() / 2000), 0) * 1000)) / (Pelle.isDoomed ? 20000 : 100000)),
    formatEffect: value => `${formatPow(value, 2, 3)}`,
    progress: () => Achievement(231).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(EndgameSkills.totalPurchased()).div(1000), 0, 1)
  },
  {
    id: 232,
    name: "千年太平",
    get description() { return `获得${formatInt(1000)}个免费超立方体。` },
    checkRequirement: () => new Decimal(Tesseracts.extra * Tesseracts.totalMult).gte(1000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `基于五维超立方获得永恒点数的小型倍率。`;
    },
    effect: () => player.disablePostReality ? 1 : Decimal.log10(Penteracts.effectiveCount + 1).div(10).add(1).toNumber(),
    formatEffect: value => `${formatPow(value, 2, 3)}`,
    progress: () => Achievement(232).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Tesseracts.extra * Tesseracts.totalMult).div(1000), 0, 1)
  },
  {
    id: 233,
    name: "时代终结",
    description: "购入所有打破永恒升级。",
    checkRequirement: () => BreakEternityUpgrade.all.filter(u => u.isCapped).length === 10 &&
      BreakEternityUpgrade.all.filter(u => u.isBought).length === 5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `将反物质指数提升至${format(1.4, 2, 1)}，但仅限佩勒内。`;
    },
    effect: () => player.disablePostReality || !Pelle.isDoomed ? 1 : 1.4,
    progress: () => Achievement(233).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(BreakEternityUpgrade.all.filter(u => u.isCapped).length + BreakEternityUpgrade.all.filter(u => u.isBought).length).div(15), 0, 1)
  },
  {
    id: 234,
    name: "天体时间之章",
    description: "进行一次天体永恒。",
    checkRequirement: () => player.endgame.celDimExpansion.celestialEternities.gt(0),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(234).isUnlocked ? DC.D1 : Decimal.clamp(player.endgame.celDimExpansion.celestialInfinityPoints.add(1).log10().div(Decimal.log10(DC.NUMMAX)), 0, 1)
  },
  {
    id: 235,
    name: "无尽黑暗",
    get description() { return `对莱特拉现实进行${formatInt(50)}次强子化。` },
    checkRequirement: () => Laitela.hadronizes >= 50,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() {
      return `强子效应达到上限的时间减半。`;
    },
    effect: () => player.disablePostReality ? 1 : 2,
    progress: () => Achievement(235).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Laitela.hadronizes).div(50), 0, 1)
  },
  {
    id: 236,
    name: "超新星",
    get description() { return `获得${formatInt(500)}拉天体记忆等级。` },
    checkRequirement: () => Ra.totalPetLevel >= 500,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    get reward() { return `获得${formatX(500)}更多记忆。`; },
    effect: () => player.disablePostReality ? 1 : 500,
    progress: () => Achievement(236).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(Ra.totalPetLevel).div(500), 0, 1)
  },
  {
    id: 237,
    name: "极超新星",
    description: "解锁所有星辰类型。",
    checkRequirement: () => EtherealStars.gray.isUnlocked,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(237).isUnlocked ? DC.D1 : Decimal.clamp(new Decimal(EtherealStars.all.filter(s => s.isUnlocked).length).div(9), 0, 1)
  },
  {
    id: 238,
    name: "现实之限",
    get description() { return `永恒天体点达到${formatPostBreak(DC.E4000, 2)}。` },
    checkRequirement: () => player.endgame.celDimExpansion.celestialEternityPoints.gte(DC.E4000),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER,
    progress: () => Achievement(238).isUnlocked ? DC.D1 : Decimal.clamp(player.endgame.celDimExpansion.celestialEternityPoints.add(1).log10().div(4000), 0, 1)
  },
];
