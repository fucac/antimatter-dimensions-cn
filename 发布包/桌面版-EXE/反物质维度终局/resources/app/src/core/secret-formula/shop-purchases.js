import { STEAM } from "@/env";

export const shopPurchases = {
  dimPurchases: {
    key: "dimPurchases",
    cost: 30,
    description: "永久翻倍你所有反物质维度的乘数。",
    multiplier: purchases => Math.pow(2, purchases),
    formatEffect: x => `×${x > 1000 ? Notation.scientific.formatDecimal(new Decimal(x), 2) : x.toFixed(0)}`,
  },
  allDimPurchases: {
    key: "allDimPurchases",
    cost: 60,
    description: () => {
      const dims = ["反物质"];
      if (InfinityDimension(1).isUnlocked || PlayerProgress.eternityUnlocked()) dims.push("无限");
      if (PlayerProgress.eternityUnlocked()) dims.push("时间");
      return `翻倍所有维度乘数（${makeEnumeration(dims)}；乘法叠加至 32 倍）。永久生效。`;
    },
    multiplier: purchases => (purchases > 4 ? 32 + (purchases - 5) * 2 : Math.pow(2, purchases)),
    formatEffect: x => `×${x.toFixed(0)}`,
  },
  IPPurchases: {
    key: "IPPurchases",
    cost: 40,
    description: "翻倍所有来源的无限点数获取量。（加法叠加）",
    multiplier: purchases => (purchases === 0 ? 1 : 2 * purchases),
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.infinityUnlocked(),
    lockText: "无限",
  },
  replicantiPurchases: {
    key: "replicantiPurchases",
    cost: 60,
    description: "复制器获取量提升 50%。（加法叠加）",
    multiplier: purchases => (purchases === 0 ? 1 : 1 + 0.5 * purchases),
    formatEffect: x => `×${x.toFixed(1)}`,
    isUnlocked: () => Replicanti.areUnlocked || PlayerProgress.eternityUnlocked(),
    lockText: "复制器",
  },
  EPPurchases: {
    key: "EPPurchases",
    cost: 50,
    description: "所有来源的永恒点数获取量翻三倍。（加法叠加）",
    multiplier: purchases => (purchases === 0 ? 1 : 3 * purchases),
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.eternityUnlocked(),
    lockText: "永恒",
  },
  dilatedTimePurchases: {
    key: "dilatedTimePurchases",
    cost: 40,
    description: "膨胀时间获取量提升 50%。（加法叠加）",
    multiplier: purchases => (purchases === 0 ? 1 : 1 + 0.5 * purchases),
    formatEffect: x => `×${x.toFixed(1)}`,
    isUnlocked: () => PlayerProgress.dilationUnlocked() || PlayerProgress.realityUnlocked(),
    lockText: "膨胀时间",
  },
  RMPurchases: {
    key: "RMPurchases",
    cost: 60,
    description: "现实机器获取量提升 100%。（加法叠加）",
    multiplier: purchases => purchases + 1,
    formatEffect: x => `×${x.toFixed(0)}`,
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "现实",
  },
  smallTimeSkip: {
    key: "smallTimeSkip",
    cost: 10,
    description: "获得 6 小时的离线产出。（自动购买器不会全速运行）",
    instantPurchase: true,
    onPurchase: () => {
      shop.purchaseTimeSkip();
    }
  },
  bigTimeSkip: {
    key: "bigTimeSkip",
    cost: 20,
    description: "获得 24 小时的离线产出。（自动购买器不会全速运行）",
    instantPurchase: true,
    onPurchase: () => {
      shop.purchaseLongerTimeSkip();
    }
  },
  singleCosmeticSet: {
    key: "singleCosmeticSet",
    cost: 20,
    description: "解锁你选择的一套符文外观",
    instantPurchase: true,
    onPurchase: () => {
      GameUI.notify.info(
        `你已购买符文外观 "${GlyphAppearanceHandler.chosenFromModal.name}" 套装！`,
        10000);
      GlyphAppearanceHandler.chosenFromModal = null;
      GlyphAppearanceHandler.applyNotification();
    },
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "现实",
  },
  allCosmeticSets: {
    key: "allCosmeticSets",
    cost: () => {
      const baseCost = 420;
      const totalSets = Object.keys(GameDatabase.reality.glyphCosmeticSets).length;
      const currentSetCount = GlyphAppearanceHandler.expectedSetCount;
      return Math.floor(baseCost * (totalSets - currentSetCount) / totalSets);
    },
    description: "一次性解锁所有剩余的符文外观套装",
    instantPurchase: true,
    onPurchase: () => {
      GameUI.notify.info(`你已解锁所有符文外观套装！`, 15000);
      GlyphAppearanceHandler.applyNotification();
    },
    isUnlocked: () => PlayerProgress.realityUnlocked(),
    lockText: "现实",
  },
};

if (STEAM) {
  delete shopPurchases.allCosmeticSets;
}