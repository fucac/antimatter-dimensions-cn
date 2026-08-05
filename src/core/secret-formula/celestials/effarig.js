export const effarigUnlocks = {
  adjuster: {
    id: 0,
    description: "可调节符文等级因子权重",
    cost: 1e7,
    onPurchased: () => {
      Effarig.quotes.unlockWeights.show();
      ui.view.tabs.reality.openGlyphWeights = true;
      Tab.reality.glyphs.show();
    }
  },
  glyphFilter: {
    id: 1,
    description: "符文筛选",
    cost: 2e8,
    onPurchased: () => {
      Effarig.quotes.unlockGlyphFilter.show();
      player.reality.showSidebarPanel = GLYPH_SIDEBAR_MODE.FILTER_SETTINGS;
    }
  },
  setSaves: {
    id: 2,
    description: "符文预设",
    cost: 3e9,
    onPurchased: () => {
      Effarig.quotes.unlockSetSaves.show();
      player.reality.showSidebarPanel = GLYPH_SIDEBAR_MODE.SAVED_SETS;
    }
  },
  run: {
    id: 3,
    description: "鹿颈长之现实",
    cost: 5e11,
    onPurchased: () => {
      Effarig.quotes.unlockRun.show();
    }
  },
  infinity: {
    id: 4,
    label: "无限",
    get description() {
      return ` 复制器上限基于无限倍增
        无限提升您的最大复制器星系
        鹿颈长之现实中基础无限点数增益上限为${format(DC.E200)}
        鹿颈长之现实中各类无限点数倍率上限为${format(DC.E50)}`;
    },
  },
  eternity: {
    id: 5,
    label: "永恒",
    get description() {
      return ` 永恒生成无限
        鹿颈长之现实中无限点数不再受任何限制
        您已解锁无名氏`;
    },
  },
  reality: {
    id: 6,
    label: "现实",
    get description() {
      return " 您已解锁鹿颈长符文（最多可装备一枚，部分效果互斥）";
    },
  },
  maintainRS: {
    id: 7,
    description: "终局时保留遗迹碎片",
    cost: new Decimal("1e4300"),
    onPurchased: () => {
      Effarig.quotes.keepRelicShard.show();
    }
  },
  glyphGenerationBoost: {
    id: 8,
    get description() {
      return `鹿颈长等级${formatInt(100)}影响末日与终局时生成的符文`;
    },
    cost: new Decimal("1e4400"),
    onPurchased: () => {
      Effarig.quotes.betterGeneration.show();
    }
  },
  maxMomentum: {
    id: 9,
    description: "动量始终满载",
    cost: new Decimal("1e4550"),
    onPurchased: () => {
      Effarig.quotes.maxMomentum.show();
    }
  },
  maxRarityBoost: {
    id: 10,
    description: "遗迹碎片以降低率增益符文稀有度上限",
    cost: new Decimal("1e4750"),
    onPurchased: () => {
      Effarig.quotes.moreRarityCap.show();
    }
  },
  extendRun: {
    id: 11,
    description: "解锁鹿颈长之终局",
    cost: new Decimal("1e5000"),
    onPurchased: () => {
      if (Effarig.isRunning) {
        Effarig.initializeRun();
      }
      Effarig.quotes.effEndgame.show();
    }
  },
  endgame: {
    id: 12,
    label: "终局",
    get description() {
      return ` 每项符文效果均获提升
        现实机器倍率鹿颈长符文效果现增益现实机器上限
        符文失稳延缓鹿颈长符文效果现延缓前${formatInt(4)}级失稳而非前${formatInt(2)}级
        鹿颈长符文献祭效果无上限，超${formatPercents(1)}的值将增益符文稀有度上限
        终局精通${formatInt(71)}现以您历史最高符文等级生成，并额外生成${formatInt(2)}枚鹿颈长符文
        终局时自动生成${formatInt(2)}枚现实符文`;
    },
  },
};
