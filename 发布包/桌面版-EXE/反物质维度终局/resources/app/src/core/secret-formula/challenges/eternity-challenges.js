const specialInfinityGlyphDisabledEffectText = () => (PelleRifts.chaos.milestones[1].canBeApplied && !PelleDestructionUpgrade.pelleGlyphEffects.canBeApplied
  ? "佩勒专属的无限符文效果也被禁用了。"
  : "");

export const eternityChallenges = [
  {
    id: 1,
    description: () => {
      if (Alpha.isRunning) return "时间维度被禁用。无限维度购买上限翻倍。";
      return "时间维度被禁用。";
    },
    goal: DC.E1800,
    goalIncrease: DC.E200,
    reward: {
      description: "基于本次永恒所历时间的时间维度倍率",
      effect: completions =>
        Decimal.pow(Decimal.max(player.records.thisEternity.time.div(10), 0.9), 0.3 + (completions * 0.05)),
      formatEffect: value => formatX(value, 2, 1)
    },
    // These will get notation-formatted and scrambled between for the final goal
    scrambleText: ["1e2600", "1e201600"],
  },
  {
    id: 2,
    description: "无限维度被禁用。",
    goal: DC.E975,
    pelleGoal: DC.E1750,
    goalIncrease: DC.E175,
    alphaGoal: DC.E2200,
    alphaGoalIncrease: DC.E300,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC2Nerf.canBeApplied,
    reward: {
      description: "基于无限之力的第一无限维度倍率",
      effect: completions => Currency.infinityPower.value.pow(5 / (700 - completions * 100)).clampMin(1),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E1000,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 3,
    description: "反物质维度5-8不再产出。维度牺牲被禁用。",
    goal: DC.E600,
    pelleGoal: DC.E925,
    goalIncrease: DC.E75,
    alphaGoal: DC.E750,
    alphaGoalIncrease: DC.E100,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC3Nerf.canBeApplied,
    reward: {
      description: () => `提升购买${formatInt(10)}个反物质维度的倍率`,
      effect: completions => completions * 0.72,
      formatEffect: value => `+${format(value, 2, 2)}`
    }
  },
  {
    id: 4,
    description: `所有无限倍率与生成器被禁用。目标必须在有限次数的无限内达成，否则挑战失败。`,
    goal: DC.E2750,
    goalIncrease: DC.E550,
    alphaGoal: DC.E3200,
    restriction: completions => Math.max(16 - 4 * completions, 0),
    checkRestriction: restriction => Currency.infinities.lte(restriction),
    formatRestriction: restriction => (restriction === 0
      ? "不消耗任何无限"
      : `在${quantifyInt("无限", restriction)}或以内`),
    failedRestriction: "(无限过多，无法继续)",
    reward: {
      description: "基于未消耗IP的无限维度倍率",
      effect: completions => Currency.infinityPoints.value.pow(0.003 + completions * 0.002),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E200,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 5,
    description: () => `反物质星系成本增长缩放立即开始（通常在${formatInt(100)}个星系时）。维度增幅成本缩放大幅增加。`,
    goal: DC.E750,
    pelleGoal: DC.E1400,
    goalIncrease: DC.E400,
    alphaGoal: DC.E1650,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC5Nerf.canBeApplied,
    reward: {
      description: "远距星系成本缩放延后",
      effect: completions => completions * 5,
      formatEffect: value => `延后${formatInt(value)}个AG`
    }
  },
  {
    id: 6,
    // The asterisk, if present, will get replaced with strings generated from the scramble text
    description: () => {
      if (Enslaved.isRunning) return "你*。最大复制器星系的升级成本大幅降低。";
      return "你无法正常获得反物质星系。最大复制器星系的升级成本大幅降低。";
    },
    goal: DC.E750,
    pelleGoal: DC.E1500,
    goalIncrease: DC.E200,
    alphaGoal: DC.E800,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC6Nerf.canBeApplied,
    reward: {
      description: "进一步降低反物质维度成本倍率增长",
      effect: completions => completions * 0.2,
      formatEffect: value => {
        const total = Math.round(Player.dimensionMultDecrease + Effects.sum(EternityChallenge(6).reward)) - value;
        return `-${format(value, 2, 1)} (${formatX(total, 2, 1)} total)`;
      }
    },
    scrambleText: ["cannot gain Antimatter Galaxies normally", "c㏰'퐚 gai鸭 Anti꟢at랜erﻪﶓa⁍axie㮾 䂇orma㦂l"],
  },
  {
    id: 7,
    description:
      "第一时间维度产出第八无限维度，第一无限维度产出第七反物质维度。Tickspeed 也直接适用于无限维度与时间维度。",
    goal: DC.E2000,
    pelleGoal: DC.E2700,
    goalIncrease: DC.E530,
    alphaGoal: DC.E1200,
    alphaGoalIncrease: DC.E200,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC7Nerf.canBeApplied,
    effect: () => TimeDimension(1).productionPerSecond,
    reward: {
      description: "第一时间维度产出第八无限维度",
      effect: completions => {
        let base = TimeDimension(1).productionPerSecond.pow(completions * 0.2).minus(1).clampMin(0);
        if (Pelle.isDoomed) base = base.min(DC.ENUMMAX).times(Decimal.pow10(base.max(1).log10().div(DC.NUMMAX).pow(0.1)));
        return base;
      },
      formatEffect: value => `${format(value, 2, 1)}每秒`
    }
  },
  {
    id: 8,
    description: () => `你仅可升级无限维度${formatInt(50)}次、复制器升级${formatInt(40)}次。无限维度与复制器升级自动购买器被禁用。`,
    goal: DC.E1300,
    pelleGoal: DC.E2800,
    goalIncrease: DC.E750,
    alphaGoal: DC.E2400,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC8Nerf.canBeApplied,
    reward: {
      description: "无限之力强化复制器星系",
      effect: completions => {
        const infinityPower = Decimal.log10(Currency.infinityPower.value.add(1).pLog10().add(1));
        return Decimal.max(0, Decimal.pow(infinityPower, 0.03 * completions).sub(1)).toNumber();
      },
      formatEffect: value => formatPercents(value, 2)
    }
  },
  {
    id: 9,
    description: () => `你无法购买Tickspeed 升级。无限之力改为以大幅削弱的效果乘以时间维度。${specialInfinityGlyphDisabledEffectText()}`,
    goal: DC.E1750,
    pelleGoal: DC.E2900,
    goalIncrease: DC.E250,
    alphaGoal: DC.E9000,
    alphaGoalIncrease: DC.E4000,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC9Nerf.canBeApplied,
    reward: {
      description: "基于时间碎片的无限维度倍率",
      effect: completions => Currency.timeShards.value.pow(completions * 0.1).clampMin(1),
      cap: () => Alpha.isDestroyed ? DC.BEMAX : DC.E400,
      formatEffect: value => formatX(value, 2, 1)
    }
  },
  {
    id: 10,
    description: () => {
      let description = `时间维度与无限维度被禁用。你从无限获得对反物质维度的巨大加成（无限${formatPow(950)}）。${specialInfinityGlyphDisabledEffectText()}`;
      EternityChallenge(10).applyEffect(v => description += ` Currently: ${formatX(v, 2, 1)}`);
      return description;
    },
    goal: DC.E3000,
    pelleGoal: DC.E3200,
    goalIncrease: DC.E300,
    alphaGoal: DC.E15000,
    alphaGoalIncrease: DC.E2000,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC10Nerf.canBeApplied,
    effect: () => Decimal.pow(Currency.infinitiesTotal.value, 950).clampMin(1).pow(TimeStudy(31).effectOrDefault(1)),
    reward: {
      description: "基于无限的时间维度倍率",
      effect: completions => {
        const mult = Currency.infinitiesTotal.value.times(2.783e-6).pow(0.4 + 0.1 * completions).clampMin(1);
        return mult.powEffectOf(TimeStudy(31));
      },
      formatEffect: value => {
        // Since TS31 is already accounted for in the effect prop, we need to "undo" it to display the base value here
        const mult = formatX(value, 2, 1);
        return TimeStudy(31).canBeApplied
          ? `${formatX(value.pow(1 / TimeStudy(31).effectValue), 2, 1)} (After TS31: ${mult})`
          : mult;
      }
    }
  },
  {
    id: 11,
    description: () => `所有维度倍率与力量被禁用，仅保留无限之力与维度增幅（对反物质维度）的倍率。${specialInfinityGlyphDisabledEffectText()}`,
    goal: DC.E450,
    pelleGoal: DC.E11200,
    goalIncrease: DC.E175,
    pelleGoalIncrease: DC.E1400,
    alphaGoal: DC.E6000,
    alphaGoalIncrease: DC.E450,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC11Nerf.canBeApplied,
    reward: {
      description: "进一步降低Tickspeed 成本倍率增长",
      effect: completions => completions * 0.07,
      formatEffect: value => {
        const total = Math.round(Player.tickSpeedMultDecrease + Effects.sum(EternityChallenge(11).reward)) - value;
        return `-${format(value, 2, 2)} (${formatX(total, 2, 2)} total)`;
      }
    }
  },
  {
    id: 12,
    description: () => (PlayerProgress.realityUnlocked()
      ? `游戏运行速度减慢×${formatInt(1000)}；所有其他游戏速度效果被禁用。目标必须在限定时间内达成，否则挑战失败。${specialInfinityGlyphDisabledEffectText()}`
      : `游戏运行速度减慢×${formatInt(1000)}。目标必须在限定时间内达成，否则挑战失败。`),
    goal: DC.E100000,
    pelleGoal: DC.E208000,
    goalIncrease: DC.E10000,
    hasPelleGoal: () => !PelleDestructionUpgrade.disableEC12Nerf.canBeApplied,
    restriction: completions => Math.max(10 - 2 * completions, 1) / 10,
    checkRestriction: restriction => Time.thisEternity.totalSeconds.lt(restriction),
    formatRestriction: restriction => `在${quantify("游戏内秒", restriction, 0, 1)}或以内。`,
    failedRestriction: "(速度过慢，无法继续)",
    reward: {
      description: "无限维度成本倍率降低",
      effect: completions => 1 - (completions * 0.008 * EndgameMastery(273).effectOrDefault(1)),
      formatEffect: value => `x${formatPow(value, 3, 3)}`
    }
  }
];
