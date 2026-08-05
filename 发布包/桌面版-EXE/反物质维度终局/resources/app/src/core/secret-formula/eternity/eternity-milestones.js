export const eternityMilestones = {
  autobuyerIPMult: {
    eternities: 1,
    reward: "解锁无限点数乘数自动购买",
    pelleUseless: true
  },
  keepAutobuyers: {
    eternities: 2,
    reward: "永恒时所有普通挑战完成，保留普通自动购买者，且打破无限"
  },
  autobuyerReplicantiGalaxy: {
    eternities: 3,
    reward: "解锁复制器星系自动购买"
  },
  keepInfinityUpgrades: {
    eternities: 4,
    reward: "永恒时保留所有无限升级",
    givenByPelle: () => PelleUpgrade.keepInfinityUpgrades.isBought,
    pelleUseless: true
  },
  bigCrunchModes: {
    eternities: 5,
    reward: "解锁更多大坍缩自动购买选项"
  },
  autoEP: {
    eternities: 6,
    reward: () => {
      const EPmin = getOfflineEPGain(TimeSpan.fromMinutes(new Decimal(1)).totalMilliseconds);
      const em200 = getEternitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        EternityMilestone.autoEternities.isReached).gt(0);
      const em1000 = getInfinitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        EternityMilestone.autoInfinities.isReached).gt(0);
      if (!player.options.offlineProgress) return `此里程碑可提供离线永恒点数生成，但当前已禁用离线进度功能`;
      const effectText = (em200 || em1000) ? "未激活" : `当前 ${format(EPmin, 2, 2)} 永恒点数/分钟`;
      return `离线时，每分钟获得之前永恒 ${formatPercents(0.25)} 的最佳永恒点数` +
        `（${effectText}）`;
    },
    activeCondition: () => (player.options.offlineProgress
      ? `只要其他离线里程碑（${formatInt(200)} 或 ${formatInt(1000)}）未激活，此效果即激活`
      : ""),
  },
  autoIC: {
    eternities: 7,
    reward: `解锁无限挑战时自动完成，并保留维度献祭自动购买`,
    pelleUseless: true
  },
  keepBreakUpgrades: {
    eternities: 8,
    reward: "永恒时保留所有打破无限升级",
    givenByPelle: () => PelleUpgrade.keepBreakInfinityUpgrades.isBought,
    pelleUseless: true
  },
  autobuyMaxGalaxies: {
    eternities: 9,
    reward: "解锁最大反物质星系自动购买模式"
  },
  unlockReplicanti: {
    eternities: 10,
    reward: "起始即解锁复制器",
    givenByPelle: () => PelleUpgrade.replicantiStayUnlocked.isBought,
    pelleUseless: true
  },
  autobuyerID1: {
    eternities: 11,
    reward: "解锁第一无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID2: {
    eternities: 12,
    reward: "解锁第二无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID3: {
    eternities: 13,
    reward: "解锁第三无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID4: {
    eternities: 14,
    reward: "解锁第四无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID5: {
    eternities: 15,
    reward: "解锁第五无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID6: {
    eternities: 16,
    reward: "解锁第六无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID7: {
    eternities: 17,
    reward: "解锁第七无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID8: {
    eternities: 18,
    reward: "解锁第八无限维度自动购买",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autoUnlockID: {
    eternities: 25,
    reward: "达到条件时自动解锁无限维度"
  },
  unlockAllND: {
    eternities: 30,
    reward: "起始即解锁所有可购买的反物质维度"
  },
  replicantiNoReset: {
    eternities: 40,
    reward: `复制器星系不再重置反物质、反物质维度、Tickspeed、维度献祭或维度提升`,
    pelleUseless: true
  },
  autobuyerReplicantiChance: {
    eternities: 50,
    reward: "解锁复制器几率升级自动购买",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiInterval: {
    eternities: 60,
    reward: "解锁复制器间隔升级自动购买",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiMaxGalaxies: {
    eternities: 80,
    reward: "解锁最大复制器星系升级自动购买",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerEternity: {
    eternities: 100,
    reward: "解锁永恒自动购买"
  },
  autoEternities: {
    eternities: 200,
    reward: () => {
      if (!player.options.offlineProgress) return `此里程碑可离线生成永恒，但当前已禁用离线进度功能`;
      const eternities = getEternitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        player.eternities.gte(200));
      const realTime = PlayerProgress.seenAlteredSpeed() ? " 真实时间" : "";
      return `离线时，以最快永恒${realTime} ${formatPercents(0.5)} 的速率获取永恒` +
        (eternities.gt(0) ? `（当前 ${format(eternities, 2, 2)}/小时）` : "（未激活）");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `必须不在所有挑战和膨胀中，且永恒自动购买必须设为零永恒点数时触发。
        此里程碑效果上限为 ${formatInt(33)}毫秒。`
      : ""),
      pelleUseless: true
  },
  autoInfinities: {
    eternities: 1000,
    reward: () => {
      if (!player.options.offlineProgress) return `此里程碑可离线生成无限，但当前已禁用离线进度功能`;
      const infinities = getInfinitiedMilestoneReward(TimeSpan.fromHours(new Decimal(1)).totalMilliseconds,
        player.eternities.gte(1000));
      return `离线时，获取本次永恒最佳无限 ${formatPercents(0.5)}` +
        (infinities.gt(0) ? `（当前 ${format(infinities, 2, 2)}/小时）` : "（未激活）");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `必须不在普通/无限挑战中，且不在 EC4 和 EC12 中，
        大坍缩自动购买必须开启并设为时间模式 ${formatInt(5)}秒或更短，
        永恒自动购买必须关闭。`
      : ""),
      pelleUseless: true
  }
};
