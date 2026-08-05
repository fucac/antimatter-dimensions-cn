import wordShift from "../../word-shift";

export const pelleRifts = {
  vacuum: {
    id: 1,
    key: "vacuum",
    name: ["虚空", "空洞", "虚无"],
    drainResource: "IP",
    baseEffect: x => `无限点数产量 ${formatX(x, 2, 2)}`,
    additionalEffects: () => [PelleRifts.vacuum.milestones[2]],
    strike: () => PelleStrikes.infinity,
    percentage: totalFill => Decimal.pow(Decimal.log10(totalFill.plus(1).log10().times(10).add(1)), 2.5).div(100).toNumber(),
    percentageToFill: percentage => Decimal.pow(10,
      Decimal.pow(10, (percentage * 100) ** (1 / 2.5)).div(10).minus(0.1)
    ).minus(1),
    effect: totalFill => {
      if (player.challenge.eternity.current !== 0 && !PelleStrikes.ECs.isDestroyed()) {
        const chall = EternityChallenge.current;
        const goal = chall.goalAtCompletions(chall.gainedCompletionStatus.totalCompletions);
        return totalFill.plus(1).pow(0.1).min(goal.pow(0.15));
      }
      return totalFill.plus(1).pow(0.33).min(Decimal.pow10(1e150));
    },
    currency: () => Currency.infinityPoints,
    galaxyGeneratorThreshold: 1000,
    milestones: [
      {
        resource: "vacuum",
        requirement: 0.04,
        description: "可以装备一个基础符文，等级和稀有度降低"
      },
      {
        resource: "vacuum",
        requirement: 0.06,
        description: () => `解封复制器，并使其解锁与升级 ${formatX(1e130)} cheaper`,
        effect: () => 1e130
      },
      {
        resource: "vacuum",
        requirement: 0.4,
        description: () => `${wordShift.wordCycle(PelleRifts.vacuum.name)} 也影响永恒点数产量`,
        effect: () => Decimal.pow(4, PelleRifts.vacuum.totalFill.add(1).log10().div(2).div(308).add(3)),
        formatEffect: x => `永恒点数产量 ${formatX(x, 2, 2)}`
      },
    ],
    galaxyGeneratorText: "空间不足以容纳更多，你必须填充 $value"
  },
  decay: {
    id: 2,
    key: "decay",
    name: ["衰朽", "崩溃", "紊乱"],
    drainResource: "Replicanti",
    spendable: true,
    baseEffect: x => `复制器速度 ${formatX(x, 2, 2)}`,
    additionalEffects: () => [PelleRifts.decay.milestones[0], PelleRifts.decay.milestones[2]],
    strike: () => PelleStrikes.powerGalaxies,
    // 0 - 1
    percentage: totalFill => totalFill.plus(1).log10().times(0.05).div(100).toNumber(),
    // 0 - 1
    percentageToFill: percentage => Decimal.pow(10, 20 * percentage * 100).minus(1),
    effect: totalFill => (PelleRifts.chaos.milestones[0].canBeApplied
      ? Decimal.sqrt(2000 + 1) : Decimal.sqrt(totalFill.plus(1).log10().add(1))),
    currency: () => Currency.replicanti,
    galaxyGeneratorThreshold: 1e7,
    milestones: [
      {
        resource: "decay",
        requirement: 0.2,
        description: "首个可重复佩勒升级也影响第一无限维度",
        effect: () => {
          const x = player.celestials.pelle.rebuyables.antimatterDimensionMult;
          return Decimal.pow(1e50, x - 9);
        },
        formatEffect: x => `1st Infinity Dimension ${formatX(x, 2, 2)}`
      },
      {
        resource: "decay",
        requirement: 0.6,
        description: () => `当复制器超过 ${format(DC.E1300)},
          所有星系 ${formatPercents(0.1)} 更有效`,
        effect: () => (Replicanti.amount.gt(DC.E1300) ? 1.1 : 1)
      },
      {
        resource: "decay",
        requirement: 1,
        description: "根据裂隙里程碑总数提升最大复制器星系数",
        effect: () => {
          const x = PelleRifts.totalMilestones();
          return new Decimal(x ** 2 - 2 * x);
        },
        formatEffect: x => `最大RG数 +${formatInt(x)}`
      },
    ],
    galaxyGeneratorText: "反物质不足以形成新星系，你必须逆转 $value"
  },
  chaos: {
    id: 3,
    key: "chaos",
    name: ["混沌", "无序", "杂质"],
    drainResource: ["Decay", "Collapse", "Disarray"],
    baseEffect: x => `时间维度 ${formatX(x, 2, 2)}`,
    strike: () => PelleStrikes.eternity,
    percentage: totalFill => totalFill / 10,
    percentageToFill: percentage => 10 * percentage,
    effect: totalFill => {
      const fill = totalFill > 6.5
        ? (totalFill - 6.5) / 7 + 6.5
        : totalFill;
      return Decimal.min(Decimal.pow(6, Decimal.pow(6, Decimal.pow(6, Math.min(fill, 10) / 10 + 0.1)).minus(6))
        .div(1e5)
        .plus(Decimal.pow(10, fill / 10 + 0.1))
        .times(Decimal.pow(6, Decimal.pow(6, Decimal.log10(Math.max(fill - 9, 1)).pow(6)).sub(1))), Decimal.pow10(Decimal.pow(
        DC.NUMMAX, Decimal.pow(2, Math.min(player.celestials.pelle.divinities, 8)).times(
        Decimal.pow(1.5, Math.max(player.celestials.pelle.divinities - 8, 0))))));
    },
    currency: () => ({
      get value() {
        return PelleRifts.decay.percentage;
      },
      set value(val) {
        const spent = PelleRifts.decay.percentage - val;
        player.celestials.pelle.rifts.decay.percentageSpent += spent;
      }
    }),
    galaxyGeneratorThreshold: 1e9,
    milestones: [
      {
        resource: "chaos",
        requirement: 0.09,
        description: () => `${wordShift.wordCycle(PelleRifts.decay.name)} \
        效果始终最大化且里程碑始终激活`
      },
      {
        resource: "chaos",
        requirement: 0.15,
        description: "符文获得新的佩勒专属效果",
      },
      {
        resource: "chaos",
        requirement: 1,
        description: () => `你获得 ${formatPercents(0.01)} 每秒永恒时获得的永恒点数`,
      },
    ],
    galaxyGeneratorText: "你的星系过于分散，你必须稳定 $value"
  },
  recursion: {
    id: 4,
    key: "recursion",
    name: ["递归", "分散", "毁灭"],
    drainResource: "EP",
    baseEffect: x => `永恒点数公式: log(x)/${formatInt(308)} ➜ log(x)/${formatFloat(308 - x.toNumber(), 2)}`,
    additionalEffects: () => [PelleRifts.recursion.milestones[0], PelleRifts.recursion.milestones[1]],
    strike: () => PelleStrikes.ECs,
    percentage: totalFill => Decimal.pow(totalFill.plus(1).log10(), 0.4).div(4000 ** 0.4).toNumber(),
    percentageToFill: percentage => Decimal.pow(10, percentage ** 2.5 * 4000).minus(1),
    effect: totalFill => Decimal.pow(totalFill.plus(1).log10(), 0.2).div(4000 ** 0.2).times(58).min(100).times(new Decimal(2.08).times(DC.D1.sub(Decimal.pow(0.8, totalFill.plus(1).log10().plus(1).log10().plus(1).log10().sub(0.7).times(10).max(0)))).add(1)),
    currency: () => Currency.eternityPoints,
    galaxyGeneratorThreshold: 1e10,
    milestones: [
      {
        resource: "recursion",
        requirement: 0.10,
        description: "维度加成根据永恒挑战完成数获得更强效果",
        effect: () => Math.max(100 * EternityChallenges.completions ** 2, 1) *
          Math.max(1e4 ** (EternityChallenges.completions - 40), 1),
        formatEffect: x => `维度加成功力 ${formatX(x, 2, 2)}`
      },
      {
        resource: "recursion",
        requirement: 0.15,
        description: "无限维度根据永恒挑战完成数获得加成",
        effect: () => Decimal.pow("1e1500", (Math.max(EternityChallenges.completions - 25, 0) / 20) ** 1.7).max(1),
        formatEffect: x => `无限维度 ${formatX(x)}`
      },
      {
        resource: "recursion",
        requirement: 1,
        description: "永久解锁星系发生器",
      },
    ],
    galaxyGeneratorText: "创造更多星系不可持续，你必须聚焦 $value to allow more"
  },
  paradox: {
    id: 5,
    key: "paradox",
    name: ["悖论", "矛盾", "谬误"],
    drainResource: "Dilated Time",
    baseEffect: x => `所有维度 ${formatPow(x, 2, 3)}`,
    additionalEffects: () => [PelleRifts.paradox.milestones[2]],
    strike: () => PelleStrikes.dilation,
    percentage: totalFill => totalFill.plus(1).log10().div(100).toNumber(),
    percentageToFill: percentage => Decimal.pow10(percentage * 100).minus(1),
    effect: totalFill => totalFill.plus(1).log10().times(0.004).add(1),
    currency: () => Currency.dilatedTime,
    galaxyGeneratorThreshold: 1e5,
    milestones: [
      {
        resource: "paradox",
        requirement: 0.15,
        description: "时间维度 5-8 大幅便宜，解锁更多膨胀时间升级",
        // FIXME: Not a great solution
        onStateChange: () => {
          updateTimeDimensionCosts();
        }
      },
      {
        resource: "paradox",
        requirement: 0.25,
        description: () => `膨胀时间产量变为超光速粒子 ${formatPow(1.4, 1, 1)}`,
        effect: 1.4
      },
      {
        resource: "paradox",
        requirement: 0.5,
        description: "膨胀时间可重复购买次数提升无限能量转化率",
        effect: () => Math.min(
          1.1075 ** (Object.values(player.dilation.rebuyables).sum() - 60),
          712
        ),
        formatEffect: x => `无限能量转换 ${formatX(x, 2, 2)}`
      },
    ],
    galaxyGeneratorText: "本可创造更多，但佩勒限制了你。无视 $value"
  }
};
