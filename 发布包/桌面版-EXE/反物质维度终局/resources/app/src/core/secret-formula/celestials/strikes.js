import wordShift from "../../word-shift";

export const pelleStrikes = {
  infinity: {
    id: 1,
    requirementDescription: "抵达无限",
    penaltyDescription: () => `反物质维度降至 ${formatPow(0.5, 1, 1)}`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.vacuum.name)}
      并获得永久无限自动购买器`,
    rift: () => PelleRifts.vacuum,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike1.canBeApplied
  },
  powerGalaxies: {
    id: 2,
    requirementDescription: "强化星系",
    penaltyDescription: () => `无限维度降至 ${formatPow(0.5, 1, 1)}`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.decay.name)}`,
    rift: () => PelleRifts.decay,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike2.canBeApplied
  },
  eternity: {
    id: 3,
    requirementDescription: "抵达永恒",
    penaltyDescription: () => `复制器速度在 ${format(DC.E2000)} 以上进一步放缓`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.chaos.name)}`,
    rift: () => PelleRifts.chaos,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike3.canBeApplied
  },
  ECs: {
    id: 4,
    requirementDescription: () => `达成 ${formatInt(115)} 时间定理`,
    penaltyDescription: () => `在永恒挑战中，${wordShift.wordCycle(PelleRifts.vacuum.name)}
      无限点数倍率仅为 ${formatPercents(0.3)} 强度，且上限为目标的 ${formatPercents(0.15)}`,
    rewardDescription: () => `解锁 ${wordShift.wordCycle(PelleRifts.recursion.name)}`,
    rift: () => PelleRifts.recursion,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike4.canBeApplied
  },
  dilation: {
    id: 5,
    requirementDescription: "膨胀时间",
    penaltyDescription: "膨胀时间永久激活",
    rewardDescription: () => `保留膨胀时间研究至末日审判，提升残留物增益，并解锁
      ${wordShift.wordCycle(PelleRifts.paradox.name)}`,
    rift: () => PelleRifts.paradox,
    isDestroyed: () => PelleStrikeUpgrade.pelleStrike5.canBeApplied
  }
};
