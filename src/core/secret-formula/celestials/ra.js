export const ra = {
  pets: {
    teresa: {
      id: "teresa",
      name: "特蕾莎",
      color: "#8596ea",
      chunkGain: "永恒点数",
      memoryGain: "当前现实机器",
      requiredUnlock: () => undefined,
      rawMemoryChunksPerSecond: () => Decimal.pow(Currency.eternityPoints.value.add(1).pLog10().div(5e3), 3.5).times(4),
      memoryProductionMultiplier: () => Ra.unlocks.teresaXP.effectOrDefault(1)
    },
    effarig: {
      id: "effarig",
      name: "鹿颈长",
      color: "#ea8585",
      chunkGain: "获得遗迹碎片",
      memoryGain: "最佳符文等级",
      requiredUnlock: () => Ra.unlocks.effarigUnlock,
      rawMemoryChunksPerSecond: () => Decimal.pow(Effarig.shardsGained, 0.175).times(4),
      memoryProductionMultiplier: () => Ra.unlocks.effarigXP.effectOrDefault(1)
    },
    enslaved: {
      id: "enslaved",
      name: "无名氏",
      color: "#f1aa7f",
      chunkGain: "时间碎片",
      memoryGain: "总游戏时间",
      requiredUnlock: () => Ra.unlocks.enslavedUnlock,
      rawMemoryChunksPerSecond: () => Decimal.pow(Currency.timeShards.value.add(1).pLog10().div(5e4), ResurgenceUpgrade.memSurge.isBought ? 3.5 : 2.5).times(4),
      memoryProductionMultiplier: () => Ra.unlocks.enslavedXP.effectOrDefault(1)
    },
    v: {
      id: "v",
      name: "薇",
      color: "#ead584",
      chunkGain: "无限之力",
      memoryGain: "总记忆等级",
      requiredUnlock: () => Ra.unlocks.vUnlock,
      rawMemoryChunksPerSecond: () => Decimal.pow(Currency.infinityPower.value.add(1).pLog10().div(1e6), ResurgenceUpgrade.memSurge.isBought ? 3.5 : 1.875).times(4),
      memoryProductionMultiplier: () => Ra.unlocks.vXP.effectOrDefault(1)
    }
  },
  unlocks: {
    autoTP: {
      id: 0,
      reward: "膨胀时间激活时即刻获得超光速粒子",
      pet: "teresa",
      level: 1,
      displayIcon: `<span class="fas fa-atom"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raTeresa1.canBeApplied
    },
    chargedInfinityUpgrades: {
      id: 1,
      reward: () => `解锁充能无限升级。每${formatInt(2)}级额外获得一项充能无限升级上限`,
      effect: () => player.disablePostReality ? 0 : Math.min(12, Math.floor(Ra.pets.teresa.level / 2)),
      pet: "teresa",
      level: 2,
      displayIcon: `<span class="fas fa-infinity"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raTeresa2.canBeApplied
    },
    teresaXP: {
      id: 2,
      reward: "所有记忆碎片基于现实机器产出更多记忆",
      effect: () => player.disablePostReality ? 1 : 1 + Decimal.pow(Currency.realityMachines.value.add(1).pLog10().div(100), 0.5).toNumber(),
      pet: "teresa",
      level: 5,
      displayIcon: `Ϟ`
    },
    alteredGlyphs: {
      id: 3,
      reward: "解锁异变符文，基于符文献祭赋予符文新效",
      pet: "teresa",
      level: 10,
      displayIcon: `<span class="fas fa-bolt"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raTeresa3.canBeApplied
    },
    effarigUnlock: {
      id: 4,
      reward: "解锁鹿颈长之记忆",
      pet: "teresa",
      level: 8,
      displayIcon: `Ϙ`
    },
    perkShopIncrease: {
      id: 5,
      reward: "特蕾莎复兴点数商店购买上限提升",
      pet: "teresa",
      level: 15,
      displayIcon: `<span class="fas fa-project-diagram"></span>`
    },
    unlockDilationStartingTP: {
      id: 6,
      reward: `非天神现实中，获取超光速粒子如同达到膨胀时间中反物质总量的平方根。任何超光速粒子增益倍率将回溯生效，甚至在膨胀时间之外也生效`,
      effect: () => player.records.totalEndgameAntimatter.pow(0.5),
      pet: "teresa",
      level: 25,
      displayIcon: `<i class="far fa-dot-circle"></i>`
    },
    extraGlyphChoicesAndRelicShardRarityAlwaysMax: {
      id: 7,
      reward: () => `获得${formatX(2)}个符文选项，且遗迹碎片的符文稀有度加成始终为最大值`,
      effect: 2,
      pet: "effarig",
      level: 1,
      displayIcon: `<i class="fas fa-grip-horizontal"></i>`
    },
    unlockGlyphAlchemy: {
      id: 8,
      reward: `解锁符文炼丹，可通过精炼符文提升炼丹资源。通过鹿颈长等级解锁更多资源。经由新现实标签页访问`,
      pet: "effarig",
      level: 2,
      displayIcon: `<span class="fas fa-vial"></span>`
    },
    effarigXP: {
      id: 9,
      reward: "所有记忆碎片基于最高符文等级产出更多记忆",
      effect: () => player.disablePostReality ? 1 : player.records.bestReality.glyphLevel.div(7000).add(1).toNumber(),
      pet: "effarig",
      level: 5,
      displayIcon: `<span class="fas fa-clone"></span>`
    },
    glyphEffectCount: {
      id: 10,
      reward: () => `符文始终拥有${formatInt(4)}项效果，鹿颈长符文最多可达${formatInt(7)}项`,
      pet: "effarig",
      level: 10,
      displayIcon: `<span class="fas fa-braille"></span>`
    },
    enslavedUnlock: {
      id: 11,
      reward: "解锁无名氏之记忆",
      pet: "effarig",
      level: 8,
      displayIcon: `<span class="c-ra-pet-milestones-effarig-link">\uf0c1</span>`
    },
    relicShardGlyphLevelBoost: {
      id: 12,
      reward: "符文等级基于所得遗迹碎片提升",
      effect: () => player.disablePostReality ? 0 : 100 * Decimal.pow(Decimal.log10(Decimal.max(Effarig.shardsGained, 1)), 2).toNumber(),
      pet: "effarig",
      level: 15,
      displayIcon: `<span class="fas fa-fire"></span>`
    },
    maxGlyphRarityAndShardSacrificeBoost: {
      id: 13,
      reward: () => `符文始终以${formatPercents(1)}稀有度生成，符文献祭增益基于遗迹碎片提升至指数`,
      effect: () => 1 + Effarig.maxRarityBoost / 100,
      pet: "effarig",
      level: 25,
      displayIcon: `<i class="fas fa-ankh"></i>`
    },
    blackHolePowerAutobuyers: {
      id: 14,
      reward: "解锁黑洞能量升级自动购买",
      pet: "enslaved",
      level: 1,
      displayIcon: `<span class="fas fa-circle"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raNameless1.canBeApplied
    },
    improvedStoredTime: {
      id: 15,
      reward: "储存游戏时间被放大，可储存更多真实时间，随无名氏等级提升",
      effects: {
        gameTimeAmplification: () => player.disablePostReality ? 1 : Decimal.pow(20, Decimal.clampMax(Ra.pets.enslaved.level, Ra.levelCap)),
        realTimeCap: () => player.disablePostReality ? 0 : 1000 * 3600 * Ra.pets.enslaved.level,
      },
      pet: "enslaved",
      level: 2,
      displayIcon: `<span class="fas fa-history"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raNameless2.canBeApplied
    },
    enslavedXP: {
      id: 16,
      reward: "所有记忆碎片基于总游戏时长产出更多记忆",
      effect: () => player.disablePostReality ? 1 : 1 + Decimal.log10(player.records.totalTimePlayed).div(200).toNumber(),
      pet: "enslaved",
      level: 5,
      displayIcon: `<span class="fas fa-stopwatch"></span>`
    },
    autoPulseTime: {
      id: 17,
      reward: () => `黑洞充能现仅消耗${formatPercents(0.99)}之游戏速度，且每${formatInt(5)}滴答可自动释放${formatPercents(0.01)}之储存游戏时间`,
      pet: "enslaved",
      level: 10,
      displayIcon: `<span class="fas fa-expand-arrows-alt"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raNameless3.canBeApplied
    },
    vUnlock: {
      id: 18,
      reward: "解锁薇之记忆",
      pet: "enslaved",
      level: 8,
      displayIcon: `⌬`
    },
    peakGamespeedDT: {
      id: 19,
      reward: "基于各现实中峰值游戏速度获得更多膨胀时间",
      effect: () => player.disablePostReality ? 1 : Decimal.max(Decimal.pow(Decimal.log10(player.celestials.ra.peakGamespeed).sub(90), 3), 1).toNumber(),
      pet: "enslaved",
      level: 15,
      displayIcon: `<span class="fas fa-tachometer-alt"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raNameless4.canBeApplied
    },
    allGamespeedGlyphs: {
      id: 20,
      reward: `所有基础符文获得时间符文之游戏速度增益，时间符文获得额外效果`,
      pet: "enslaved",
      level: 25,
      displayIcon: `<span class="fas fa-clock"></span>`,
      onUnlock: () => {
        const allGlyphs = player.reality.glyphs.active.concat(player.reality.glyphs.inventory);
        for (const glyph of allGlyphs) {
          Glyphs.applyGamespeed(glyph);
        }
      }
    },
    instantECAndRealityUpgradeAutobuyers: {
      id: 21,
      reward: "可重复现实升级自动购买，自动永恒挑战瞬发完成",
      pet: "v",
      level: 1,
      displayIcon: `<span class="fas fa-sync-alt"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raV1.canBeApplied
    },
    autoUnlockDilation: {
      id: 22,
      reward: () => `非天神现实中，在${formatInt(TimeStudy.dilation.totalTimeTheoremRequirement)}时间定理时自动免费解锁膨胀时间`,
      pet: "v",
      level: 2,
      displayIcon: `<span class="fas fa-fast-forward"></span>`
    },
    vXP: {
      id: 23,
      reward: "所有记忆碎片基于天神总等级产出更多记忆",
      effect: () => player.disablePostReality ? 1 : 1 + Ra.totalPetLevel / 50,
      pet: "v",
      level: 5,
      displayIcon: `<span class="fas fa-book"></span>`
    },
    unlockHardV: {
      id: 24,
      reward: () => `解锁困难薇成就，每${formatInt(6)}级解锁一项三元研究。三元研究位于时间研究页面底部`,
      effect: () => player.disablePostReality ? 0 : Math.min(Math.floor(Ra.pets.v.level / 6), 4),
      pet: "v",
      level: 6,
      displayIcon: `<span class="fas fa-trophy"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raV2.canBeApplied
    },
    continuousTTBoost: {
      id: 25,
      reward: "时间定理增益所有连续非维度产出",
      effects: {
        ttGen: () => player.disablePostReality ? 1 : Math.pow(10, 5 * Ra.theoremBoostFactor()),
        eternity: () => player.disablePostReality ? 1 : Math.pow(10, 2 * Ra.theoremBoostFactor()),
        infinity: () => player.disablePostReality ? 1 : Math.pow(10, 15 * Ra.theoremBoostFactor()),
        replicanti: () => player.disablePostReality ? 1 : Math.pow(10, 20 * Ra.theoremBoostFactor()),
        dilatedTime: () => player.disablePostReality ? 1 : Math.pow(10, 3 * Ra.theoremBoostFactor()),
        memories: () => player.disablePostReality ? 1 : 1 + Ra.theoremBoostFactor() / 50,
        memoryChunks: () => player.disablePostReality ? 1 : 1 + Ra.theoremBoostFactor() / 50,
        autoPrestige: () => player.disablePostReality ? 1 : 1 + 2.4 * Ra.theoremBoostFactor()
      },
      pet: "v",
      level: 10,
      displayIcon: `<span class="fas fa-university"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raV3.canBeApplied
    },
    achievementTTMult: {
      id: 26,
      reward: "成就倍率适用于时间定理生成",
      effect: () => player.disablePostReality ? 1 : Achievements.power,
      pet: "v",
      level: 15,
      displayIcon: `<span class="fas fa-graduation-cap"></span>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raV4.canBeApplied
    },
    achievementPower: {
      id: 27,
      reward: () => `成就倍率提升${formatPow(1.5, 1, 1)}`,
      effect: () => player.disablePostReality ? 1 : 1.5,
      pet: "v",
      level: 25,
      displayIcon: `<i class="fab fa-buffer"></i>`,
      disabledByPelle: () => !PelleCelestialUpgrade.raV5.canBeApplied
    },
    eternityPointPower: {
      id: 28,
      reward: "永恒点数基于特蕾莎等级提升",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.teresa.level) / 100,
      pet: "teresa",
      level: 30,
      displayIcon: `<span class="fas fa-angle-up"></span>`,
      disabledByPelle: false
    },
    realityMachineCap: {
      id: 29,
      reward: "现实机器上限基于特蕾莎等级提升",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.teresa.level) / 100,
      pet: "teresa",
      level: 40,
      displayIcon: `<span class="fas fa-arrow-turn-up"></span>`,
      disabledByPelle: false
    },
    celestialDimensionConversionPower: {
      id: 30,
      reward: "天神维度转换指数基于特蕾莎等级提升",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.teresa.level) / 200,
      pet: "teresa",
      level: 50,
      displayIcon: `<span class="fas fa-star"></span>`,
      disabledByPelle: false
    },
    chargeBoost: {
      id: 31,
      reward: "充能无限升级视作特蕾莎等级为实际两倍",
      effect: () => player.disablePostReality ? 1 : 2,
      pet: "teresa",
      level: 65,
      displayIcon: `<span class="fas fa-bolt"></span>`,
      disabledByPelle: false
    },
    sacrificePower: {
      id: 32,
      reward: "所有符文之维度献祭增益取平方",
      effect: () => player.disablePostReality ? 1 : 2,
      pet: "teresa",
      level: 80,
      displayIcon: `Ω`,
      disabledByPelle: false
    },
    imaginaryMachines: {
      id: 33,
      reward: "虚机基于符文献祭总量获得指数增益",
      effect: () => {
        const sacrificeSum = new Decimal(player.reality.glyphs.sac.power).add(player.reality.glyphs.sac.infinity).add(
          player.reality.glyphs.sac.time).add(player.reality.glyphs.sac.replication).add(player.reality.glyphs.sac.dilation).add(
          player.reality.glyphs.sac.effarig).add(player.reality.glyphs.sac.reality);
        return player.disablePostReality ? 1 : 1 + Decimal.log10(Decimal.log10(sacrificeSum.add(1)).add(1)).div(20).toNumber();
      },
      pet: "teresa",
      level: 100,
      displayIcon: `<span class="fas fa-gear"></span>`,
      disabledByPelle: false
    },
    celestialDimensionPower: {
      id: 34,
      reward: "终局与特蕾莎等级增益天神维度",
      effect: () => player.disablePostReality ? 1 : Math.pow(Math.clamp(Ra.pets.teresa.level * Math.log10(player.endgames + 1) / 2000, 1, 1.5) * Math.pow(Math.max(Ra.pets.teresa.level * Math.log10(player.endgames + 1) / 3000, 1), 0.1), 5),
      pet: "teresa",
      level: 125,
      displayIcon: `<span class="fas fa-award"></span>`,
      disabledByPelle: false
    },
    relicShardBoost: {
      id: 35,
      reward: "遗迹碎片增益基于鹿颈长等级提升",
      effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(10, Math.floor(Ra.pets.effarig.level)),
      pet: "effarig",
      level: 30,
      displayIcon: `<span class="fas fa-flask"></span>`,
      disabledByPelle: false
    },
    instabilityDelay: {
      id: 36,
      reward: "遗迹碎片延缓符文失稳前三级",
      effect: () => player.disablePostReality ? 0 : Decimal.log10(player.celestials.effarig.relicShards.add(1)).times(10).toNumber(),
      pet: "effarig",
      level: 40,
      displayIcon: `<span class="fas fa-arrow-right"></span>`,
      disabledByPelle: false
    },
    rarityBuff: {
      id: 37,
      reward: "符文最大稀有度基于鹿颈长等级提升",
      effect: () => player.disablePostReality ? 0 : Math.floor(Ra.pets.effarig.level) / 2,
      pet: "effarig",
      level: 50,
      displayIcon: `<span class="fas fa-dice"></span>`,
      disabledByPelle: false
    },
    glyphLevelBuff: {
      id: 38,
      reward: "基于鹿颈长等级获得符文等级之小倍率，于失稳后生效",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.effarig.level) / 1000,
      pet: "effarig",
      level: 65,
      displayIcon: `<span class="fas fa-chart-line"></span>`,
      disabledByPelle: false
    },
    alchemyCapIncrease: {
      id: 39,
      reward: "鹿颈长等级倍增符文炼丹上限",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.effarig.level) / 100,
      pet: "effarig",
      level: 80,
      displayIcon: `<span class="fas fa-flask-vial"></span>`,
      disabledByPelle: false
    },
    realityGlyphRarity: {
      id: 40,
      reward: "鹿颈长等级提升现实符文稀有度",
      effect: () => player.disablePostReality ? 0 : Math.floor(Ra.pets.effarig.level) / 5,
      pet: "effarig",
      level: 100,
      displayIcon: `Ϟ`,
      disabledByPelle: false
    },
    glyphSlot: {
      id: 41,
      reward: "获得另一符文槽位",
      effect: 1,
      pet: "effarig",
      level: 125,
      displayIcon: `<span class="fas fa-plus"></span>`,
      disabledByPelle: false
    },
    gameSpeedImprovement: {
      id: 42,
      reward: "游戏速度基于无名氏等级获得指数",
      effect: () => player.disablePostReality ? 1 : 1 + Math.pow(Math.floor(Ra.pets.enslaved.level) / 100, 2),
      pet: "enslaved",
      level: 30,
      displayIcon: `<span class="fas fa-hourglass"></span>`,
      disabledByPelle: false
    },
    tickspeedPower: {
      id: 43,
      reward: "Tickspeed 基于无名氏等级获得指数",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.enslaved.level) / 100,
      pet: "enslaved",
      level: 40,
      displayIcon: `<span class="fas fa-power-off"></span>`,
      disabledByPelle: false
    },
    gameSpeedTesseractBoost: {
      id: 44,
      reward: "超立方体增益游戏速度",
      effect: () => player.disablePostReality ? DC.D1 : Decimal.pow(10, Tesseracts.effectiveCount),
      pet: "enslaved",
      level: 50,
      displayIcon: `<span class="fas fa-forward"></span>`,
      disabledByPelle: false
    },
    gameSpeedTachyonMult: {
      id: 45,
      reward: "本轮终局峰值游戏速度倍增所得超光速粒子",
      effect: () => player.disablePostReality ? DC.D1 : player.records.thisEndgame.peakGameSpeed,
      pet: "enslaved",
      level: 65,
      displayIcon: `<span class="fas fa-atom"></span>`,
      disabledByPelle: false
    },
    eternityGenBuff: {
      id: 46,
      reward: "无名氏等级增益永恒生成",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.enslaved.level) / 100,
      pet: "enslaved",
      level: 80,
      displayIcon: `∆`,
      disabledByPelle: false
    },
    imaginaryMachineEternityPower: {
      id: 47,
      reward: "虚机基于永恒数获得指数",
      effect: () => player.disablePostReality ? 1 : 1 + Decimal.log10(Decimal.log10(player.eternities.add(1)).add(1)).div(20).toNumber(),
      pet: "enslaved",
      level: 100,
      displayIcon: `<span class="fas fa-lightbulb"></span>`,
      disabledByPelle: false
    },
    freeTesseractIncrease: {
      id: 48,
      reward: "无名氏等级提升自由超立方体软上限起始阈值",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.enslaved.level) / 250,
      pet: "enslaved",
      level: 125,
      displayIcon: `<span class="fas fa-cubes"></span>`,
      disabledByPelle: false
    },
    achievementMultPower: {
      id: 49,
      reward: "成就倍率基于薇等级获得指数",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.v.level) / 100,
      pet: "v",
      level: 30,
      displayIcon: `<span class="fas fa-medal"></span>`,
      disabledByPelle: false
    },
    allDimPowTT: {
      id: 50,
      reward: "时间定理增益前三种维度类型",
      effect: () => player.disablePostReality ? 1 : Math.pow(1 + Decimal.log10(Decimal.log10(Currency.timeTheorems.value.add(1)).add(1)).div(10).toNumber(), 5),
      pet: "v",
      level: 40,
      displayIcon: `<span class="fas fa-brain"></span>`,
      disabledByPelle: false
    },
    triadBuff: {
      id: 51,
      reward: "三元研究基于薇等级增强",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.v.level) / 200,
      pet: "v",
      level: 50,
      displayIcon: `<span class="fas fa-3"></span>`,
      disabledByPelle: false
    },
    spaceTheoremIPowConversion: {
      id: 52,
      reward: "空间定理增益无限力转化率",
      effect: () => player.disablePostReality ? 1 : Math.pow(V.spaceTheorems + 1, 0.05),
      pet: "v",
      level: 65,
      displayIcon: `<span class="fas fa-ranking-star"></span>`,
      disabledByPelle: false
    },
    spaceTheoremBoost: {
      id: 53,
      reward: "空间定理受薇等级增益",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.v.level) / 200,
      pet: "v",
      level: 80,
      displayIcon: `<span class="fas fa-star"></span>`,
      disabledByPelle: false
    },
    spaceTheoremAchPower: {
      id: 54,
      reward: "空间定理增益成就倍率",
      effect: () => player.disablePostReality ? 1 : 1 + Math.log10(V.spaceTheorems + 1),
      pet: "v",
      level: 100,
      displayIcon: `<span class="fas fa-award"></span>`,
      disabledByPelle: false
    },
    infinityDimPower: {
      id: 55,
      reward: "无限维度基于薇等级获得指数",
      effect: () => player.disablePostReality ? 1 : 1 + Math.floor(Ra.pets.v.level) / 40,
      pet: "v",
      level: 125,
      displayIcon: `<span class="fas fa-infinity"></span>`,
      disabledByPelle: false
    },
  }
};
