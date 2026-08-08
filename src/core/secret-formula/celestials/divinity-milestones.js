export const divinityMilestones = {
  firstDivine: {
    divinities: 1,
    get reward() {
      return ` 将 ${format(Decimal.pow10(1e150))} 和 ${format(Decimal.pow10(1e225))} 反物质软上限替换为在 ${format(DC.E9E15)} 反物质时生效的软上限，并随每次神性增强而强化
 解锁新的星系发生器升级
 所有星系发生器升级奖励取平方
 成就 207 使用调整后的公式，随神性数量提升
 每次神性使天神点数与毁灭微粒增益取平方
 开启毁灭时自动购买所有佩勒升级
 天神物质软上限降低 ${formatPercents(0.05)}
 所有强子/暗强子效果的强子效应封顶时间降低 ${formatPercents(0.2)}
 额外获得 ${formatX(10)} 次终局
 双机倍率提升至 ${format(1.1, 1, 1)}
 历史最高星系数量的 log10 乘以熵增益`;
    }
  },
  divineDimensions: {
    divinities: 2,
    get reward() {
      return ` 解锁神性维度
 解锁神性升级
 解锁新的星系发生器升级
 无需末日审判即可立即获得待处理的遗物
 所有强子/暗强子效果的强子效应封顶时间降低 ${formatPercents(0.2)}
 阿尔法衰变残留物封顶时间降低 ${formatPercents(0.2)}
 星系发生器升级自动购买器购买最大值`;
    }
  },
  hadronEmpowerment: {
    divinities: 3,
    get reward() {
      return ` 若反物质在少于 ${formatInt(30)} 秒内超出禁用阈值，自动瓦解莱特拉的现实，以 ${formatInt(8)} 除以剩余维度数为系数
 若全部 ${formatInt(8)} 维度已禁用，自动将莱特拉的现实强子化
 强子与暗强子现已平等，可合并为奇异强子以缩短强子效应封顶时间
 第 ${formatInt(8)} 项星系发生器升级更强
 所有神性维度与神性能量产量乘以 ${formatX(77)}
 暗物质湮灭不再重置任何内容
 以太能量产量乘以 ${formatInt(10)}
 解锁阿尔法扩展包`;
    }
  },
  pelleQoL: {
    divinities: 4,
    get reward() {
      return ` 以已购买/已充能的无限/破碎升级开启佩勒
 进入佩勒时，裂隙自动达到 ${formatPercents(1)} 填充
 解封星系发生器后，裂隙填充速度加快 ${formatX(10)}
 神性维度提升至 ${formatPow(1.05, 2, 2)}
 阿尔法衰变残留物封顶时间降低 ${formatPercents(0.5)}
 天神物质软上限降低 ${formatPercents(0.2)}
 提升奇异强子的效果`;
    }
  },
  celestialSurge: {
    divinities: 5,
    get reward() {
      return ` 十七面体效应现在也影响天神物质腐化幅度
 在虚空中时，反物质维度倍率取平方
 解封星系发生器后，裂隙填充速度额外加快 ${formatX(10)}
 解锁新的星系发生器升级
 强子封顶时间降低 ${formatPercents(0.75)}
 以太能量产量乘以 ${formatInt(1000)}
 鹿颈长等级 ${formatInt(40)} 应用于符文不稳定度的前 ${formatInt(5)} 级而非前 ${formatInt(3)} 级`;
    }
  },
  finalRebirth: {
    divinities: 7,
    get reward() {
      return ` 第六级符文不稳定度阈值减弱
 在虚空中时，反物质维度根据本次终局的真实时间获得指数
 解封星系发生器后，裂隙填充速度额外加快 ${formatX(100)}
 神性维度提升至 ${formatPow(1.05, 2, 2)}
 强子封顶时间降低 ${formatPercents(0.5)}
 阿尔法衰变残留物封顶时间降低 ${formatPercents(0.25)}
 根据本次终局的真实时间获得熵倍率
 奇异强子再次略微增强`;
    }
  },
  ascendedSurge: {
    divinities: 10,
    get reward() {
      return ` 第六级不稳定度阈值延迟 ${formatPercents(0.1)}
 解封星系发生器后，裂隙填充速度额外加快 ${formatX(1000)}
 强子封顶时间降低 ${formatPercents(0.75)}
 阿尔法衰变残留物封顶时间降低 ${formatPercents(0.5)}
 游戏速度以极低比率影响以太能量产量
 现在可以批量飞升宇宙星区`;
    }
  }
};
