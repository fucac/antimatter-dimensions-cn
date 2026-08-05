export const alchemyResources = {
  // T1 resources (Non-Effarig "base" resources)
  "power": {
    id: ALCHEMY_RESOURCE.POWER,
    name: "力",
    symbol: "Ω",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 1,
    unlockedAt: 2,
    description: "为反物质维度提供指数",
    formatEffect: value => `反物质维度倍率 ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyPower.isBought
  },
  "infinity": {
    id: ALCHEMY_RESOURCE.INFINITY,
    name: "无限",
    symbol: "∞",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 2,
    unlockedAt: 3,
    description: "为无限维度提供指数",
    formatEffect: value => `无限维度倍率 ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyInfinity.isBought
  },
  "time": {
    id: ALCHEMY_RESOURCE.TIME,
    name: "时间",
    symbol: "Δ",
    isBaseResource: true,
    effect: amount => 1 + amount / 125000,
    tier: 1,
    uiOrder: 3,
    unlockedAt: 4,
    description: "为时间维度提供指数",
    formatEffect: value => `时间维度倍率 ${formatPow(value, 4, 4)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyTime.isBought
  },
  "replication": {
    id: ALCHEMY_RESOURCE.REPLICATION,
    name: "复制",
    symbol: "Ξ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 500),
    tier: 1,
    uiOrder: 4,
    unlockedAt: 5,
    description: `increases Replication speed`,
    formatEffect: value => `复制速度提升 ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyReplication.isBought
  },
  "dilation": {
    id: ALCHEMY_RESOURCE.DILATION,
    name: "膨胀时间",
    symbol: "Ψ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 1000),
    tier: 1,
    uiOrder: 5,
    unlockedAt: 6,
    description: "提升膨胀时间产量",
    formatEffect: value => `膨胀时间产量提升 ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyDilation.isBought
  },

  // T2 resources (combinations of pairs of T1 resources)
  "cardinality": {
    id: ALCHEMY_RESOURCE.CARDINALITY,
    name: "基数",
    symbol: "α",
    isBaseResource: false,
    effect: amount => 1 + 0.2 / (1 + amount / 12500),
    tier: 2,
    uiOrder: 3,
    unlockedAt: 8,
    description: "降低复制器在封顶以上的减速",
    formatEffect: value => `复制器间隔增速放缓 ${formatX(1.2, 1, 1)} ➜
      ${formatX(value, 4, 4)} per ${format(Number.MAX_VALUE, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 8
      },
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 7
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyCardinality.isBought
  },
  "eternity": {
    id: ALCHEMY_RESOURCE.ETERNITY,
    name: "永恒",
    symbol: "τ",
    isBaseResource: false,
    effect: amount => 1 + amount / 12500,
    tier: 2,
    uiOrder: 2,
    unlockedAt: 9,
    description: "为永恒产量提供指数",
    formatEffect: value => `永恒产量 ${formatPow(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 11
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 4
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyEternity.isBought
  },
  "dimensionality": {
    id: ALCHEMY_RESOURCE.DIMENSIONALITY,
    name: "维度性",
    symbol: "ρ",
    isBaseResource: false,
    effect: amount => Decimal.pow10(6 * amount),
    tier: 2,
    uiOrder: 1,
    unlockedAt: 10,
    description: "为所有维度提供大倍率",
    formatEffect: value => `所有维度 ${formatX(value)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 10
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 5
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyDimensionality.isBought
  },
  "inflation": {
    id: ALCHEMY_RESOURCE.INFLATION,
    name: "膨胀",
    symbol: "λ",
    isBaseResource: false,
    effect: amount => Decimal.pow10(6e9 - 3e5 * amount),
    tier: 2,
    uiOrder: 5,
    unlockedAt: 11,
    description: "为极大倍率提供额外指数",
    formatEffect: value => `所有反物质维度倍率 ${formatPow(1.05, 2, 2)}
      if they are above ${format(value)} `,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 9
      },
      {
        resource: ALCHEMY_RESOURCE.DILATION,
        amount: 6
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyInflation.isBought
  },
  "alternation": {
    id: ALCHEMY_RESOURCE.ALTERNATION,
    name: "交替",
    symbol: "ω",
    isBaseResource: false,
    effect: amount => amount / 125000,
    tier: 2,
    uiOrder: 4,
    unlockedAt: 12,
    description: "根据复制器提升超光速星系强度",
    formatEffect: value => `超光速星系强度 ${formatPercents(value, 2, 2)}
      per ${format(DC.E1E6)} Replicanti`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 5
      },
      {
        resource: ALCHEMY_RESOURCE.DILATION,
        amount: 10
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyAlternation.isBought
  },

  // T3 resources (Effarig and conbinations of T1/T2 with Effarig)
  "effarig": {
    id: ALCHEMY_RESOURCE.EFFARIG,
    name: "鹿颈长",
    symbol: "Ϙ",
    isBaseResource: true,
    effect: amount => Decimal.pow10(amount / 1250),
    tier: 1,
    uiOrder: 1.5,
    unlockedAt: 7,
    description: "提升遗迹碎片产量",
    formatEffect: value => `遗迹碎片产量乘以 ${formatX(value, 2, 2)}`,
    destroyed: () => !PelleAlchemyUpgrade.alchemyEffarig.isBought
  },
  "synergism": {
    id: ALCHEMY_RESOURCE.SYNERGISM,
    name: "协同",
    symbol: "π",
    isBaseResource: false,
    effect: amount => {
      const rawValue = 0.3 + 1.7 * Math.sqrt(amount / 25000);
      return Achievement(175).isUnlocked ? rawValue : Math.min(rawValue, 1);
    },
    tier: 3,
    uiOrder: 2,
    unlockedAt: 13,
    description: "提升炼金术反应产率",
    formatEffect(value) {
      return `炼金术反应效率 ${formatPercents(0.3)} ➜ ${formatPercents(value, 2, 2)}
        ${(!Achievement(175).isUnlocked && value >= 1) ? " (Capped)" : ""}`;
    },
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 3
      },
      {
        resource: ALCHEMY_RESOURCE.REPLICATION,
        amount: 16
      },
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 14
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemySynergism.isBought
  },
  "momentum": {
    id: ALCHEMY_RESOURCE.MOMENTUM,
    name: "动量",
    symbol: "μ",
    isBaseResource: false,
    effect: amount => 1 + amount / 100000,
    tier: 3,
    uiOrder: 3,
    unlockedAt: 15,
    description: "为所有维度提供随时间永久增长的指数",
    formatEffect: value => `所有维度 ${formatPow(Ra.momentumValue, 4, 4)}，每真实小时增加
      ${format(0.01 * Effects.product(Achievement(175), EndgameMastery(171), Achievement(222)), 3, 3)}
      资源解锁后每真实小时增加，最高 ${formatPow(value, 4, 4)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 11
      },
      {
        resource: ALCHEMY_RESOURCE.POWER,
        amount: 4
      },
      {
        resource: ALCHEMY_RESOURCE.TIME,
        amount: 20
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyMomentum.isBought
  },
  "decoherence": {
    id: ALCHEMY_RESOURCE.DECOHERENCE,
    name: "退相干",
    symbol: "ξ",
    isBaseResource: false,
    effect: amount => 0.2 * Math.sqrt(amount / 25000),
    tier: 3,
    uiOrder: 4,
    unlockedAt: 14,
    description: "精炼时产出所有基础炼金术资源",
    formatEffect: value => `精炼符文还产出 ${formatPercents(value, 2)} 的价值 ` +
      "给所有其他基础资源",
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 13
      },
      {
        resource: ALCHEMY_RESOURCE.ALTERNATION,
        amount: 8
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyDecoherence.isBought
  },

  // T4 resources (resources which feed directly into the final resource)
  "exponential": {
    id: ALCHEMY_RESOURCE.EXPONENTIAL,
    name: "指数",
    symbol: "Γ",
    isBaseResource: false,
    effect: amount => 10 * Math.pow(amount / 10000, 3),
    tier: 4,
    uiOrder: 2,
    unlockedAt: 18,
    description: "根据复制器倍增无限点数",
    formatEffect: value => `无限点数乘以复制器${formatPow(value, 2, 3)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.INFLATION,
        amount: 18
      },
      {
        resource: ALCHEMY_RESOURCE.SYNERGISM,
        amount: 3
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyExponential.isBought
  },
  "force": {
    id: ALCHEMY_RESOURCE.FORCE,
    name: "力",
    symbol: "Φ",
    isBaseResource: false,
    effect: amount => 10 * amount,
    tier: 4,
    uiOrder: 2,
    unlockedAt: 17,
    description: "根据现实机器倍增反物质维度",
    formatEffect: value => `反物质维度乘以现实机器${formatPow(value, 2, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.DIMENSIONALITY,
        amount: 7
      },
      {
        resource: ALCHEMY_RESOURCE.MOMENTUM,
        amount: 8
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyForce.isBought
  },
  "uncountability": {
    id: ALCHEMY_RESOURCE.UNCOUNTABILITY,
    name: "不可数",
    symbol: "Θ",
    isBaseResource: false,
    effect: amount => 1600 * Math.sqrt(amount / 6250),
    tier: 4,
    uiOrder: 3,
    unlockedAt: 19,
    description: "被动产生现实与强化点",
    formatEffect: value => `每秒产生 ${format(value, 2, 2)} 现实与强化点`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.INFINITY,
        amount: 20
      },
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 6
      },
      {
        resource: ALCHEMY_RESOURCE.CARDINALITY,
        amount: 16
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyUncountability.isBought
  },
  "boundless": {
    id: ALCHEMY_RESOURCE.BOUNDLESS,
    name: "无极",
    symbol: "Π",
    isBaseResource: false,
    effect: amount => amount / 62500,
    tier: 4,
    uiOrder: 1,
    unlockedAt: 20,
    description: "使超立方体更强",
    formatEffect: value => `超立方体强度 +${formatPercents(value, 2, 2)}`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.ETERNITY,
        amount: 13
      },
      {
        resource: ALCHEMY_RESOURCE.INFLATION,
        amount: 18
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyBoundless.isBought
  },
  "multiversal": {
    id: ALCHEMY_RESOURCE.MULTIVERSAL,
    name: "多元宇宙",
    symbol: "Σ",
    isBaseResource: false,
    effect: amount => 32 * Math.pow(amount / 20000, 2),
    tier: 4,
    uiOrder: 5,
    unlockedAt: 16,
    description: "使每个现实模拟更多现实",
    formatEffect: value => `每个现实模拟 ${format(value, 2, 3)} 个额外现实，给予所有
      如同被放大般的相同奖励`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.ALTERNATION,
        amount: 16
      },
      {
        resource: ALCHEMY_RESOURCE.DECOHERENCE,
        amount: 3
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyMultiversal.isBought
  },
  "unpredictability": {
    id: ALCHEMY_RESOURCE.UNPREDICTABILITY,
    name: "不可预测",
    symbol: "Λ",
    isBaseResource: false,
    // Somewhat ugly number to make this show 75.00% at cap
    effect: amount => amount / (8333.33 + amount),
    tier: 4,
    uiOrder: 4,
    unlockedAt: 21,
    description: "使每个炼金术反应有几率触发两次",
    formatEffect: value => `任何炼金术反应有 ${formatPercents(value, 2, 2)}
      几率再次触发`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EFFARIG,
        amount: 15
      },
      {
        resource: ALCHEMY_RESOURCE.DECOHERENCE,
        amount: 3
      },
      {
        resource: ALCHEMY_RESOURCE.SYNERGISM,
        amount: 10
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyUnpredictability.isBought
  },

  // T5 (Reality)
  "reality": {
    id: ALCHEMY_RESOURCE.REALITY,
    name: "现实",
    symbol: "Ϟ",
    isBaseResource: false,
    effect: amount => Math.floor(amount),
    tier: 5,
    unlockedAt: 25,
    description: "可消耗以创造现实符文",
    formatEffect: value => `消耗所有现实资源创造一个等级 ${formatHybridLarge(value, 3)} 的现实符文`,
    reagents: [
      {
        resource: ALCHEMY_RESOURCE.EXPONENTIAL,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.FORCE,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.UNCOUNTABILITY,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.BOUNDLESS,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.MULTIVERSAL,
        amount: 1
      },
      {
        resource: ALCHEMY_RESOURCE.UNPREDICTABILITY,
        amount: 1
      }
    ],
    destroyed: () => !PelleAlchemyUpgrade.alchemyReality.isBought
  },
};
