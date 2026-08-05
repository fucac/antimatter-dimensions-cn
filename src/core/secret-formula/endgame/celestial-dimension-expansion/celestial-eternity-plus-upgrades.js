export const celestialEternityPlusUpgrades = {
  megaCelTickspeedReduction: {
    id: "megaCelTickspeedReduction",
    cost: DC.E1000,
    description: () => `将天神 Tickspeed 成本缩放倍数降至 ${formatX(1.5, 1, 1)}`,
    effect: 0.15,
    onPurchased: () => GameCache.celestialTickSpeedMultDecrease.invalidate()
  },
  megaCelDimReduction: {
    id: "megaCelDimReduction",
    cost: DC.E2000,
    description: () => `将天神维度成本缩放倍数降至 ${formatX(1.8, 1, 1)}`,
    effect: 0.2,
    onPurchased: () => GameCache.celestialDimensionMultDecrease.invalidate()
  },
  betterCIPFormula: {
    id: "betterCIPFormula",
    cost: DC.E3000,
    description: () => `将天神点数转换公式除数减少 ${formatPercents(0.1)}`,
    effect: 0.9
  },
  oldStoneSlabAndSteelDrill: {
    id: "oldStoneSlabAndSteelDrill",
    cost: DC.E4000,
    description: () => (false ? "解锁诅咒现实" : "解锁 Pelle 之领域"),
    onPurchased: () => Pelle.quotes.reachGoal.show()
  }
};
