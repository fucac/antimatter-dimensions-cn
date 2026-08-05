export const alphaUnlocks = {
  fourthDimboost: {
    id: 0,
    requirement: 1,
    nerfDescription: "维度提升倍率开平方",
    buffDescription: "维度提升倍率取平方",
    effects: {
      nerf: 0.5,
      buff: 2
    }
  },
  fifthDimboost: {
    id: 1,
    requirement: 2,
    nerfDescription: "维度提升缩放阈值翻倍",
    buffDescription: () => `维度提升基础缩放阈值降低${formatInt(2)}`,
    effects: {
      nerf: 2,
      buff: 2
    }
  },
  firstGalaxy: {
    id: 2,
    requirement: 3,
    nerfDescription: () => `所有星系弱化${formatPercents(1 - Math.clamp(Decimal.log10(Decimal.log10(player.antimatter.add(1)).add(1)).div(20).add(0.5).toNumber(), 0.5, 1), 2)}`,
    buffDescription: "符文炼丹中的交替效果影响所有星系类型",
    effects: {
      nerf: () => Math.clamp(Decimal.log10(Decimal.log10(player.antimatter.add(1)).add(1)).div(20).add(0.5).toNumber(), 0.5, 1)
    }
  },
  infinity: {
    id: 3,
    requirement: 4,
    nerfDescription: "无限升级成本取平方",
    buffDescription: () => `无限点数增益提升${formatPow(1 + (Tesseracts.effectiveCount / 1000), 2, 3)}（基于超立方体）`,
    effects: {
      nerf: 2,
      buff: () => 1 + (Tesseracts.effectiveCount / 1000)
    }
  },
  autoCrunchChallenge: {
    id: 4,
    requirement: 5,
    nerfDescription: () => `大挤压自动购买购买缩放提升至${formatX(2.5, 1, 1)}`,
    buffDescription: "充能无限升级视作特蕾莎等级为实际两倍",
    effects: {
      nerf: 2.5,
      buff: 2
    }
  },
  breakInfinity: {
    id: 5,
    requirement: 6,
    nerfDescription: () => `BIU成本${formatX(1000)}，破后Tickspeed /反物质维度成本缩放起始于${formatX(20)}，无限点数转化率/${format(Decimal.max(DC.D8.div(Decimal.log10(Decimal.log10(Currency.infinityPoints.value.add(1)).add(1)).pow(2).clampMin(0.001)), 1).toNumber(), 2, 2)}（基于无限点数），但星系之力翻倍`,
    buffDescription: () => `破后Tickspeed 成本缩放降低${format(0.15, 2, 2)}，破后维度成本缩放降低${format(0.25, 2, 2)}`,
    effects: {
      nerfA: 1000,
      nerfB: 20,
      nerfC: () => Decimal.max(DC.D8.div(Decimal.log10(Decimal.log10(Currency.infinityPoints.value.add(1)).add(1)).pow(2).clampMin(0.001)), 1).toNumber(),
      buffA: 0.15,
      buffB: 0.25
    }
  },
  powerGalaxies: {
    id: 6,
    requirement: 7,
    nerfDescription: () => `遥远星系成本缩放起始于${formatInt(1)}星系`,
    buffDescription: "遥远/远程反物质星系缩放翻倍",
    effects: {
      nerf: 1,
      buff: 2
    }
  },
  breakUpgrades: {
    id: 7,
    requirement: 8,
    nerfDescription: () => `无限维度购买上限降至${formatInt(player.records.thisReality.galaxies.toNumber() * (EternityChallenge(1).isRunning ? 2 : 1))}（基于星系）`,
    buffDescription: () => `破后Tickspeed 成本缩放降低${format(0.15, 2, 2)}，破后维度成本缩放降低${format(0.25, 2, 2)}`,
    effects: {
      nerf: () => player.records.thisReality.galaxies.toNumber() * (EternityChallenge(1).isRunning ? 2 : 1),
      buffA: 0.15,
      buffB: 0.25
    }
  },
  infinityChallenges: {
    id: 8,
    requirement: 9,
    nerfDescription: () => `可重复无限点数倍率升级购买上限为${formatInt(150)}`,
    buffDescription: () => `无限维度压缩降低${formatPercents(0.25, 2)}，并将无限维度转换为连续统`,
    effects: {
      nerf: 150,
      buff: 0.75
    }
  },
  replicanti: {
    id: 9,
    requirement: 10,
    nerfDescription: () => `复制器间隔取平方，且仅受游戏速度${formatPercents(0.1)}增益`,
    buffDescription: "复制器间隔开平方",
    effects: {
      nerf: 2,
      buff: 0.5
    }
  },
  infinityDimensions: {
    id: 10,
    requirement: 11,
    nerfDescription: () => `无限点数增益提升${formatPow(Math.clamp(1 - Decimal.log10(player.records.thisInfinity.maxAM.add(1)).sub(72500).div(227500).toNumber(), 0, 1), 2, 3)}（仅首个永恒生效）`,
    buffDescription: () => `第${formatInt(8)}项无限维度之指数为${formatInt(100)}`,
    effects: {
      nerf: () => Math.clamp(1 - Decimal.log10(player.records.thisInfinity.maxAM.add(1)).sub(72500).div(227500).toNumber(), 0, 1),
      buff: 100
    }
  },
  eternity: {
    id: 11,
    requirement: 12,
    nerfDescription: () => `时间维度单次购买倍率降至${formatX(2)}`,
    buffDescription: () => `移除减益"每购买第${formatInt(8)}个时间维度（超过${format(1e8, 2, 2)}）将不增加倍率"`,
    effects: {
      nerf: 2
    }
  },
  timestudy61: {
    id: 12,
    requirement: 13,
    nerfDescription: () => `所有时间定理成本提升至${formatPow(1.5, 2, 3)}`,
    buffDescription: () => `永恒点数增益乘以${formatX(Decimal.pow10(Decimal.log10(Currency.infinityPoints.value.add(1)).div(1000)), 2, 2)}（基于无限点数）`,
    effects: {
      nerf: 1.5,
      buff: () => Decimal.pow10(Decimal.log10(Currency.infinityPoints.value.add(1)).div(1000))
    }
  },
  timeDimension4: {
    id: 13,
    requirement: 14,
    nerfDescription: () => `您最高时间维度之倍率始终为${formatX(1)}`,
    buffDescription: () => `时间维度单次购买倍率提升至${formatX(10)}`,
    effects: {
      buff: 10
    }
  },
  eternityUpgrades: {
    id: 14,
    requirement: 15,
    nerfDescription: () => `所有无限维度提升${formatPow(0.9, 2, 3)}`,
    buffDescription: () => `第${formatInt(1)}项无限维度之指数为${formatInt(100)}`,
    effects: {
      nerf: 0.9,
      buff: 100
    }
  },
  eternityChallengeUnlock: {
    id: 15,
    requirement: 16,
    nerfDescription: () => `永恒挑战中无限点数提升${formatPow(0.75, 2, 3)}`,
    buffDescription: () => `解除永恒升级${formatInt(1)}之上限`,
    effects: {
      nerf: 0.75
    }
  },
  ecCompletion1: {
    id: 16,
    requirement: 17,
    nerfDescription: () => `永恒挑战中无限点数减益降至${formatPow(0.65, 2, 3)}`,
    buffDescription: () => `时间维度压缩降低${formatPercents(0.25, 2)}，并将时间维度转换为连续统`,
    effects: {
      nerf: 0.65,
      buff: 0.75
    }
  },
  ecCompletion5: {
    id: 17,
    requirement: 18,
    nerfDescription: () => `永恒挑战中无限点数减益降至${formatPow(0.55, 2, 3)}，但移除永恒挑战${formatInt(1)}之减益`,
    buffDescription: () => `所有时间维度倍率提升${formatPow(5)}`,
    effects: {
      nerf: 0.55,
      buff: 5
    }
  },
  timestudy181: {
    id: 18,
    requirement: 19,
    nerfDescription: () => `所有反物质维度提升${formatPow(0.9, 2, 3)}`,
    buffDescription: () => `所有反物质维度倍率提升${formatPow(5)}`,
    effects: {
      nerf: 0.9,
      buff: 5
    }
  },
  eternityChallenge10: {
    id: 19,
    requirement: 20,
    nerfDescription: () => `永恒点数增益提升${formatPow(0.9, 2, 3)}`,
    buffDescription: "无限增益取平方",
    effects: {
      nerf: 0.9,
      buff: 2
    }
  },
  timestudy192: {
    id: 20,
    requirement: 21,
    nerfDescription: () => `无限后复制器缩放提升至每${format(DC.NUMMAX, 2, 2)}复制器${formatX(1.5, 1, 1)}`,
    buffDescription: "复制器以降低率增益暗能量增益",
    effects: {
      nerf: 1.5,
      buff: () => ReplicantiMultipliers.deMult
    }
  },
  eternityChallenge11: {
    id: 21,
    requirement: 22,
    nerfDescription: () => `永恒挑战${formatInt(11)}必须有${formatX(5)}批量完成`,
    buffDescription: () => `破后Tickspeed 成本缩放降低${format(0.075, 3, 3)}`,
    effects: {
      buff: 0.075
    }
  },
  ec11Bulk: {
    id: 22,
    requirement: 23,
    nerfDescription: () => `膨胀时间研究消耗${formatInt(10000)}时间定理，但移除TD4减益并将自由Tickspeed 阈值降至${format(1.2, 2, 2)}`,
    buffDescription: () => `破后Tickspeed 成本缩放降低${format(0.075, 3, 3)}`,
    effects: {
      nerfA: 10000,
      nerfB: 1.2,
      buff: 0.075
    }
  },
  unlockDilation: {
    id: 23,
    requirement: 24,
    nerfDescription: () => `基础膨胀时间惩罚提升至${formatPow(0.5, 2, 3)}`,
    buffDescription: () => `基础膨胀时间惩罚降至${formatPow(0.8, 2, 3)}`,
    effects: {
      nerf: 0.5,
      buff: 0.8
    }
  },
  dilatedEternity: {
    id: 24,
    requirement: 25,
    nerfDescription: () => `基础膨胀时间惩罚提升至${formatPow(0.42, 2, 3)}，且膨胀时间仅受游戏速度${formatPercents(0.01)}增益`,
    buffDescription: () => `超光速粒子增益提升${formatPow(1.4, 2, 3)}`,
    effects: {
      nerf: 0.42,
      buff: 1.4
    }
  },
  timeTheoremGeneration: {
    id: 25,
    requirement: 26,
    nerfDescription: () => `时间定理生成弱化${formatPercents(Math.clamp(1 - Decimal.log10(Currency.dilatedTime.value.add(1)).div(100).toNumber(), 0, 1), 2)}（基于膨胀时间）`,
    buffDescription: () => `时间定理生成提升${formatPow(10)}`,
    effects: {
      nerf: () => Math.clamp(Decimal.log10(Currency.dilatedTime.value.add(1)).div(100).toNumber(), 0, 1),
      buff: 10
    }
  },
  timeDimension8: {
    id: 26,
    requirement: 27,
    nerfDescription: () => `永恒点数增益提升${formatPow(Math.clamp(1 - Decimal.log10(player.records.thisEternity.maxIP.add(1)).sub(1.5e6).div(1.875e7).max(0).pow(0.375).toNumber(), 0, 1), 2, 3)}`,
    buffDescription: () => `第${formatInt(8)}项时间维度之指数为${formatInt(1000)}`,
    effects: {
      nerf: () => Math.clamp(1 - Decimal.log10(player.records.thisEternity.maxIP.add(1)).sub(1.5e6).div(1.875e7).max(0).pow(0.375).toNumber(), 0, 1),
      buff: 1000
    }
  },
  reality: {
    id: 27,
    requirement: 28,
    nerfDescription: "无",
    buffDescription: "移除几乎所有硬上限"
  }
};
