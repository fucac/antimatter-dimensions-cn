export const endgameMilestones = {
  riftFill: {
    endgames: 1,
    reward: () => {
      return `裂隙填充每终局加速${formatPercents(0.05)}，在${formatInt(9)}个终局后达到上限${formatPercents(Alpha.isDestroyed ? 0.9 : 0.45)} ` +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 1
         ? (player.endgames >= 9 ? "(已上限：" : "(当前：") + `+${formatPercents(Math.min(0.45, player.endgames * 0.05) + (Alpha.isDestroyed ? 0.45 : 0))})`
         : "(你尚未达到此里程碑)"));
    }
  },
  remnantGalaxy: {
    endgames: 2,
    reward: () => {
      return "你获得基于残骸的星系强度倍率 " +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 2 && Pelle.isDoomed
         ? `(当前：+${formatDecimalPercents(Decimal.pow(Decimal.log10(Currency.remnants.value.add(1)).add(1), 0.5).sub(1), 2, 2)})`
         : (player.endgames < 2 ? "(你尚未达到此里程碑)" : "(当前无效果)")));
    }
  },
  fasterGalaxies: {
    endgames: 5,
    reward: "解锁新的星系生成器升级"
  },
  galGenAnimation: {
    endgames: 10,
    reward: () => {
      return `星系生成器动画每${formatInt(10)}个终局加速${formatX(1.2, 0, 1)}，在${formatInt(200)}个终局后达到上限 ` +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 10
         ? (player.endgames >= 200 && !Alpha.isDestroyed ? "(已上限：" : "(当前：") + (Alpha.isDestroyed ? "瞬间)" : `${formatX(Math.pow(1.2, Math.floor(Math.min(Currency.endgames.value, 200) / 10)), 2, 2)})`)
         : "(你尚未达到此里程碑)"));
    }
  },
  remnantFormula: {
    endgames: 15,
    reward: "改进残骸公式（参见佩勒子标签页中的残骸获取因子）"
  },
  celestialEarlyUnlock: {
    endgames: 25,
    reward: () => {
      return `开始终局时已解锁前${formatInt(6)}个天神`;
    }
  },
  gameSpeedUncap: {
    endgames: 50,
    reward: () => {
      return `移除${format(1e300, 2, 2)}游戏速度硬上限`;
    }
  },
  realityShardDTBoost: {
    endgames: 100,
    reward: () => {
      return "膨胀时间产量乘以你的现实碎片数量 " +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 100
         ? `(当前：${formatX(Currency.realityShards.value.plus(1), 2, 2)})`
         : "(你尚未达到此里程碑)"));
    }
  },
  moreFasterGalaxies: {
    endgames: 250,
    reward: () => {
      return "终局在佩勒中提升星系产量 " +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 250
         ? `(当前：${formatX(Decimal.pow(10, Math.min(Currency.endgames.value / 200, 50)).times(Decimal.pow(10, Math.max((Math.log10(Currency.endgames.value + 1) - 4) * 50, 0))), 2, 2)})`
         : "(你尚未达到此里程碑)"));
    }
  },
  autobuyerEndgame: {
    endgames: 1000,
    reward: "解锁终局的自动购买器"
  },
  endgameAntimatter: {
    endgames: 10000,
    reward: () => {
      return "获得基于终局的反物质产量指数效果，在佩勒中更强 " +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 10000
         ? `(当前：${formatPow(Pelle.isDoomed ? 1 + (Math.log10(Math.min(Currency.endgames.value, 1e6) * Math.max(Math.log2(Currency.endgames.value + 1) - Math.log2(5e5), 1) + 1) / 80) : 1 + (Math.log10(Math.min(Currency.endgames.value, 1e6) * Math.max(Math.log2(Currency.endgames.value + 1) - Math.log2(5e5), 1) + 1) / 200), 2, 3)})`
         : "(你尚未达到此里程碑)"));
    }
  },
  instabilityReduction: {
    endgames: 1000000,
    reward: () => {
      return "终局降低星系生成器不稳定幅度 " +
        (player.disablePostReality ? "(已毁灭)" : (player.endgames >= 1000000
         ? `(当前：${formatPow(Math.pow(1 / Math.log10(Currency.endgames.value + 1), 0.1), 2, 3)})`
         : "(你尚未达到此里程碑)"));
    }
  }
};
