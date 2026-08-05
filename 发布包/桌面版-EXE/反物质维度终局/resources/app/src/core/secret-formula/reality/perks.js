export const PERK_FAMILY = {
  ANTIMATTER: "ANTIMATTER",
  INFINITY: "INFINITY",
  ETERNITY: "ETERNITY",
  DILATION: "DILATION",
  REALITY: "REALITY",
  AUTOMATION: "AUTOMATION",
  ACHIEVEMENT: "ACHIEVEMENT",
};

function vectorToNum(v) {
  return Math.floor(v.x / 5) + 400 * Math.floor(v.y / 5) + 80200;
}

export const perks = {
  firstPerk: {
    id: 0,
    label: "START",
    family: PERK_FAMILY.REALITY,
    get description() {
      return `移除现实研究的成就要求，允许你在现实时从 ${formatInt(4)} 个不同符文中选择。`;
    },
    effect: 4,
    layoutPosList: [76596, 80200, 80600, 80200, 80188, 67769],
  },
  startAM: {
    id: 10,
    label: "SAM",
    family: PERK_FAMILY.ANTIMATTER,
    get description() {
      return `每次重置起始赐予 ${format(5e130)} 反物质。`;
    },
    bumpCurrency: () => Currency.antimatter.bumpTo(5e130),
    effect: 5e130,
    layoutPosList: [76559, 80600, 80199, 80600, 82191, 75745],
  },
  startIP1: {
    id: 12,
    label: "SIP1",
    family: PERK_FAMILY.INFINITY,
    get description() {
      return `每次永恒和现实起始赐予 ${format(5e15)} 无限点数。`;
    },
    bumpCurrency: () => Currency.infinityPoints.bumpTo(5e15),
    effect: 5e15,
    layoutPosList: [74523, 80599, 79798, 80599, 82594, 91322],
  },
  startIP2: {
    id: 13,
    label: "SIP2",
    family: PERK_FAMILY.INFINITY,
    get description() {
      return `每次永恒和现实起始赐予 ${format(5e130)} 无限点数。`;
    },
    bumpCurrency: () => Currency.infinityPoints.bumpTo(5e130),
    effect: 5e130,
    layoutPosList: [62111, 80598, 79797, 80998, 82597, 91690],
  },
  startEP1: {
    id: 14,
    label: "SEP1",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `每次现实起始赐予 ${formatInt(10)} 永恒点数。`;
    },
    bumpCurrency: () => Currency.eternityPoints.bumpTo(10),
    effect: 10,
    automatorPoints: 5,
    shortDescription: () => `起始即获 ${formatInt(10)} 永恒点数`,
    layoutPosList: [88915, 80999, 79398, 80598, 82197, 103734],
  },
  startEP2: {
    id: 15,
    label: "SEP2",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `每次现实起始赐予 ${format(5000)} 永恒点数。`;
    },
    bumpCurrency: () => Currency.eternityPoints.bumpTo(5000),
    effect: 5000,
    layoutPosList: [92484, 81398, 78998, 80597, 82200, 102193],
  },
  startEP3: {
    id: 16,
    label: "SEP3",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `每次现实起始赐予 ${format(5e9)} 永恒点数。`;
    },
    bumpCurrency: () => Currency.eternityPoints.bumpTo(5e9),
    effect: 5e9,
    automatorPoints: 10,
    shortDescription: () => `起始即获 ${format(5e9)} 永恒点数`,
    layoutPosList: [96459, 81798, 78997, 80596, 82203, 106224],
  },
  startTP: {
    id: 17,
    label: "STP",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `解锁膨胀时间后，获得 ${formatInt(10)} 超光速粒子。`;
    },
    effect: () => (Enslaved.isRunning ? 1 : 10),
    automatorPoints: 5,
    shortDescription: () => `起始即获 ${formatInt(10)} TP`,
    layoutPosList: [102120, 81399, 79399, 80197, 81800, 109376],
  },
  antimatterNoReset: {
    id: 30,
    label: "ANR",
    family: PERK_FAMILY.ANTIMATTER,
    description: `维度提升和反物质星系不再重置反物质、反物质维度、Tickspeed 或维度献祭。`,
    layoutPosList: [85343, 81000, 79799, 80199, 82194, 92553],
  },
  studyPassive: {
    id: 31,
    label: "PASS",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `将时间研究122提升至 ${formatX(50)} 永恒点数，时间研究142提升至 ${formatX(DC.E50)} 无限点数。
        ${Pelle.isDoomed ? "" : `此外，时间研究132还使复制器速度提升 ${format(3)} 倍。`}`;
    },
    layoutPosList: [67054, 79400, 80999, 80202, 78594, 52589],
  },
  autounlockEU1: {
    id: 40,
    label: "EU1",
    family: PERK_FAMILY.ETERNITY,
    description: "获得永恒后自动免费解锁第一行永恒升级。",
    layoutPosList: [89407, 80601, 80201, 79800, 80591, 73007],
  },
  autounlockEU2: {
    id: 41,
    label: "EU2",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `第二行永恒升级以原价 ${formatX(1e10)} 倍的价格自动购买。`;
    },
    layoutPosList: [103008, 81001, 80202, 79400, 80594, 81867],
  },
  autounlockDilation1: {
    id: 42,
    label: "DU1",
    family: PERK_FAMILY.DILATION,
    description: "解锁膨胀时间后自动免费解锁第二行膨胀时间升级。",
    layoutPosList: [119833, 81801, 79403, 79398, 80200, 97510],
  },
  autounlockDilation2: {
    id: 43,
    label: "DU2",
    family: PERK_FAMILY.DILATION,
    description: "解锁膨胀时间后自动免费解锁第三行膨胀时间升级。",
    layoutPosList: [124260, 82201, 79003, 79397, 80203, 85513],
  },
  autounlockDilation3: {
    id: 44,
    label: "ATT",
    family: PERK_FAMILY.DILATION,
    description: "当你负担得起时，自动购买被动时间研究生成膨胀时间升级。",
    automatorPoints: 5,
    shortDescription: () => "自动购买时间研究生成",
    layoutPosList: [124289, 82601, 79002, 79396, 80206, 72282],
  },
  autounlockTD: {
    id: 45,
    label: "ATD",
    family: PERK_FAMILY.DILATION,
    description: "负担得起时自动解锁时间维度5-8。",
    automatorPoints: 5,
    shortDescription: () => "自动解锁时间维度5-8",
    layoutPosList: [127117, 82600, 79001, 79796, 80209, 61869],
  },
  autounlockReality: {
    id: 46,
    label: "REAL",
    family: PERK_FAMILY.REALITY,
    get description() {
      return `当你拥有 ${format(DC.E4000)} 永恒点数并解锁时间维度8后，自动解锁现实。`;
    },
    automatorPoints: 10,
    shortDescription: () => "自动解锁现实",
    layoutPosList: [124343, 83000, 79000, 79795, 80212, 71046],
  },
  bypassIDAntimatter: {
    id: 51,
    label: "IDR",
    family: PERK_FAMILY.INFINITY,
    description: "无限维度不再有反物质需求。",
    layoutPosList: [51317, 80998, 79397, 80997, 82600, 104489],
  },
  bypassTGReset: {
    id: 52,
    label: "TGR",
    family: PERK_FAMILY.DILATION,
    description: "第二级可重购膨胀时间升级不再重置你的膨胀时间。",
    layoutPosList: [116568, 81800, 79801, 79798, 81400, 112677],
  },
  bypassECDilation: {
    id: 53,
    label: "DILR",
    family: PERK_FAMILY.DILATION,
    description: "移除解锁膨胀时间所需的永恒挑战11、永恒挑战12和时间定理要求。",
    automatorPoints: 5,
    shortDescription: () => "解锁膨胀时间仅需时间研究",
    layoutPosList: [129011, 81802, 80203, 80198, 80600, 109116],
  },
  bypassEC1Lock: {
    id: 54,
    label: "EC1R",
    family: PERK_FAMILY.ETERNITY,
    description: "移除时间研究181所需的永恒挑战1要求。",
    layoutPosList: [64284, 79000, 81399, 80603, 78597, 44167],
  },
  bypassEC2Lock: {
    id: 55,
    label: "EC2R",
    family: PERK_FAMILY.ETERNITY,
    description: "移除时间研究181所需的永恒挑战2要求。",
    layoutPosList: [55463, 78999, 80998, 80602, 78197, 48944],
  },
  bypassEC3Lock: {
    id: 56,
    label: "EC3R",
    family: PERK_FAMILY.ETERNITY,
    description: "移除时间研究181所需的永恒挑战3要求。",
    layoutPosList: [75475, 79001, 81400, 80203, 78997, 47822],
  },
  bypassEC5Lock: {
    id: 57,
    label: "EC5R",
    family: PERK_FAMILY.ETERNITY,
    description: "移除时间研究62所需的永恒挑战5要求。",
    layoutPosList: [70626, 79800, 81000, 80201, 78591, 62607],
  },
  autocompleteEC1: {
    id: 60,
    label: "PEC1",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `每 ${formatInt(60)} 分钟（真实时间）自动完成一个永恒挑战。
              永恒挑战将按顺序完成，需要先完成所有之前的永恒挑战才能进入下一个。`;
    },
    effect: 60,
    automatorPoints: 5,
    shortDescription: () => `每 ${formatInt(60)} 分钟自动完成永恒挑战`,
    layoutPosList: [90660, 79402, 81002, 79803, 79397, 46664],
  },
  autocompleteEC2: {
    id: 61,
    label: "PEC2",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `每 ${formatInt(40)} 分钟（真实时间）自动完成一个永恒挑战。
        （减少 ${formatInt(20)} 分钟）`;
    },
    effect: 40,
    layoutPosList: [95485, 79002, 81402, 79804, 79400, 53486],
  },
  autocompleteEC3: {
    id: 62,
    label: "PEC3",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `每 ${formatInt(20)} 分钟（真实时间）自动完成一个永恒挑战。
        （减少 ${formatInt(20)} 分钟）`;
    },
    effect: 20,
    automatorPoints: 10,
    shortDescription: () => `每 ${formatInt(20)} 分钟自动完成永恒挑战`,
    layoutPosList: [96311, 78602, 81401, 80204, 79403, 61903],
  },
  studyActiveEP: {
    id: 70,
    label: "ACT",
    family: PERK_FAMILY.ETERNITY,
    description: "主动路径乘数始终最大化。",
    layoutPosList: [56633, 79399, 80599, 80601, 78194, 58565],
  },
  studyIdleEP: {
    id: 71,
    label: "IDL",
    family: PERK_FAMILY.ETERNITY,
    get description() {
      return `挂机路径乘数起始如同你已在本次无限/永恒中花费了 ${formatInt(15)} 分钟。`;
    },
    effect: 15,
    layoutPosList: [80248, 79401, 81001, 79802, 78994, 56239],
  },
  studyECRequirement: {
    id: 72,
    label: "ECR",
    family: PERK_FAMILY.ETERNITY,
    description: "移除解锁永恒挑战的非时间研究要求。",
    automatorPoints: 10,
    shortDescription: () => "移除永恒挑战次要要求",
    layoutPosList: [62714, 78600, 81398, 80604, 78600, 40599],
  },
  studyECBulk: {
    id: 73,
    label: "ECB",
    family: PERK_FAMILY.ETERNITY,
    description:
      `如果你达到了更高完成度的目标，可以一次完成多个等级的永恒挑战。`,
    automatorPoints: 15,
    shortDescription: () => "批量完成永恒挑战",
    layoutPosList: [62741, 78200, 81397, 81004, 78603, 41435],
  },
  retroactiveTP1: {
    id: 80,
    label: "TP1",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `购买第三个可重购膨胀时间升级时，将你当前的超光速粒子数量乘以 ${formatFloat(1.5, 1)}。`;
    },
    effect: 1.5,
    layoutPosList: [111739, 81799, 79800, 79797, 81403, 115434],
  },
  retroactiveTP2: {
    id: 81,
    label: "TP2",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `购买第三个可重购膨胀时间升级时，将你当前的超光速粒子数量乘以 ${formatInt(2)}。`;
    },
    effect: 2,
    layoutPosList: [103757, 82199, 79401, 80196, 81406, 117382],
  },
  retroactiveTP3: {
    id: 82,
    label: "TP3",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `购买第三个可重购膨胀时间升级时，将你当前的超光速粒子数量乘以 ${formatFloat(2.5, 1)}。`;
    },
    effect: 2.5,
    layoutPosList: [96175, 82599, 79400, 80195, 81409, 116540],
  },
  retroactiveTP4: {
    id: 83,
    label: "TP4",
    family: PERK_FAMILY.DILATION,
    get description() {
      return `购买第三个可重购膨胀时间升级时，将你当前的超光速粒子数量乘以 ${formatInt(3)}。`;
    },
    effect: 3,
    automatorPoints: 10,
    shortDescription: () => `${formatX(3)} TP 升级追溯适用`,
    layoutPosList: [86984, 82598, 78999, 80595, 81412, 114103],
  },
  autobuyerDilation: {
    id: 100,
    label: "DAU",
    family: PERK_FAMILY.AUTOMATION,
    description: "解锁可重复膨胀时间升级的自动购买器。",
    automatorPoints: 5,
    shortDescription: () => "膨胀时间升级自动购买器",
    layoutPosList: [117401, 81401, 79802, 79799, 80597, 96672],
  },
  autobuyerFasterID: {
    id: 101,
    label: "IDAS",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `无限维度自动购买器速度提升 ${formatX(3)} 倍。`;
    },
    effect: 1 / 3,
    automatorPoints: 5,
    shortDescription: () => "更快的无限维度自动购买器",
    layoutPosList: [74095, 80199, 80198, 81000, 82997, 77720],
  },
  autobuyerFasterReplicanti: {
    id: 102,
    label: "REPAS",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `复制器自动购买器速度提升 ${formatX(3)} 倍。`;
    },
    effect: 1 / 3,
    automatorPoints: 5,
    shortDescription: () => "更快的复制器自动购买器",
    layoutPosList: [57685, 80198, 80197, 80999, 83000, 79297],
  },
  autobuyerFasterDilation: {
    id: 103,
    label: "DAS",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `膨胀时间升级自动购买器速度提升 ${formatX(3)} 倍。`;
    },
    effect: 1 / 3,
    automatorPoints: 5,
    shortDescription: () => "更快的膨胀时间自动购买器",
    layoutPosList: [113895, 82602, 79402, 79395, 80609, 72715],
  },
  ttBuySingle: {
    id: 104,
    label: "TTS",
    family: PERK_FAMILY.AUTOMATION,
    description: "解锁时间研究自动购买器，每个节拍购买单个时间研究。",
    automatorPoints: 5,
    shortDescription: () => "单购时间研究自动购买器",
    layoutPosList: [44631, 79398, 80598, 81001, 77797, 57325],
  },
  ttFree: {
    id: 105,
    label: "TTF",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `购买时间研究不再消耗你的反物质、无限点数或永恒点数。`;
    },
    layoutPosList: [33840, 78998, 80597, 81002, 77800, 67309],
  },
  ttBuyMax: {
    id: 106,
    label: "TTM",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `升级时间研究自动购买器以一次性购买最大时间研究数量。`;
    },
    automatorPoints: 10,
    shortDescription: () => "最大时间研究自动购买器",
    layoutPosList: [25055, 78598, 80997, 81003, 77803, 65739],
  },
  dilationAutobuyerBulk: {
    id: 107,
    label: "DAB",
    family: PERK_FAMILY.AUTOMATION,
    get description() {
      return `膨胀时间升级自动购买器每次购买的膨胀时间升级数量增加至三倍。`;
    },
    effect: 3,
    automatorPoints: 5,
    shortDescription: () => "膨胀时间批量自动购买",
    layoutPosList: [127384, 81400, 79803, 79399, 81000, 103048],
  },
  achievementGroup1: {
    id: 201,
    label: "ACH1",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `将成就计时器降低至每项成就 ${formatInt(20)} 分钟
        （减少 ${formatInt(10)} 分钟）。`;
    },
    effect: 10,
    automatorPoints: 5,
    shortDescription: () => `成就加速：每 ${formatInt(20)} 分钟`,
    layoutPosList: [65386, 80201, 80601, 79801, 79791, 81371],
  },
  achievementGroup2: {
    id: 202,
    label: "ACH2",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `将成就计时器降低至每项成就 ${formatInt(12)} 分钟
        （减少 ${formatInt(8)} 分钟）。`;
    },
    effect: 8,
    layoutPosList: [54976, 80202, 80602, 79401, 79794, 93780],
  },
  achievementGroup3: {
    id: 203,
    label: "ACH3",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `将成就计时器降低至每项成就 ${formatInt(6)} 分钟
        （减少 ${formatInt(6)} 分钟）。`;
    },
    effect: 6,
    layoutPosList: [44168, 80602, 80603, 79402, 79797, 83005],
  },
  achievementGroup4: {
    id: 204,
    label: "ACH4",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `将成就计时器降低至每项成就 ${formatInt(2)} 分钟
        （减少 ${formatInt(4)} 分钟）。`;
    },
    effect: 4,
    layoutPosList: [33760, 81002, 81003, 79403, 79800, 95422],
  },
  achievementGroup5: {
    id: 205,
    label: "ACHNR",
    family: PERK_FAMILY.ACHIEVEMENT,
    get description() {
      return `立即解锁前 ${formatInt(13)} 行成就，
        且现实不再重置它们。`;
    },
    automatorPoints: 10,
    shortDescription: () => "保留现实中的成就",
    layoutPosList: [23353, 81402, 81403, 79404, 79803, 84639],
  }
};

export const perkConnections = (function() {
  const p = perks;
  const groups = [
    [p.firstPerk, p.achievementGroup1, p.startAM, p.autounlockEU1, p.bypassEC5Lock],
    [p.startAM, p.antimatterNoReset, p.startIP1],
    [p.antimatterNoReset, p.startEP1],
    [p.startIP1, p.startIP2, p.startEP1, p.autobuyerFasterID],
    [p.startIP2, p.bypassIDAntimatter, p.autobuyerFasterReplicanti],
    [p.startEP1, p.startEP2, p.startTP],
    [p.startEP2, p.startEP3],
    [p.startTP, p.startEP1, p.retroactiveTP1],
    [p.autounlockEU1, p.autounlockEU2],
    [p.autounlockEU2, p.autounlockEU1, p.autobuyerDilation],
    [p.autounlockDilation1, p.autounlockDilation2],
    [p.autounlockDilation2, p.autounlockDilation3],
    [p.autounlockDilation3, p.autobuyerFasterDilation, p.autounlockTD],
    [p.autounlockTD, p.autounlockReality],
    [p.bypassTGReset, p.autobuyerDilation, p.retroactiveTP1],
    [p.bypassEC1Lock, p.bypassEC2Lock, p.bypassEC3Lock, p.studyECRequirement],
    [p.bypassEC2Lock, p.studyActiveEP, p.bypassEC1Lock],
    [p.bypassEC3Lock, p.studyIdleEP, p.bypassEC1Lock],
    [p.bypassEC5Lock, p.studyActiveEP, p.studyIdleEP, p.studyPassive],
    [p.studyPassive, p.bypassEC1Lock],
    [p.autocompleteEC1, p.autocompleteEC2],
    [p.autocompleteEC2, p.autocompleteEC3],
    [p.studyActiveEP, p.bypassEC2Lock, p.ttBuySingle],
    [p.studyIdleEP, p.bypassEC3Lock, p.autocompleteEC1],
    [p.studyECRequirement, p.studyECBulk],
    [p.retroactiveTP1, p.bypassTGReset, p.startTP, p.retroactiveTP2],
    [p.retroactiveTP2, p.retroactiveTP3],
    [p.retroactiveTP3, p.retroactiveTP4],
    [p.autobuyerDilation, p.autounlockEU2, p.autounlockDilation1,
      p.bypassECDilation, p.bypassTGReset, p.dilationAutobuyerBulk],
    [p.autobuyerFasterID],
    [p.ttBuySingle, p.ttFree],
    [p.ttFree, p.ttBuyMax],
    [p.achievementGroup1, p.achievementGroup2],
    [p.achievementGroup2, p.achievementGroup3],
    [p.achievementGroup3, p.achievementGroup4],
    [p.achievementGroup4, p.achievementGroup5],
  ];
  const connections = {};
  for (const perk of Object.values(perks)) {
    const connectedPerks = [];
    const directConnections = groups.find(g => g[0] === perk);
    if (directConnections !== undefined) {
      connectedPerks.push(...directConnections.slice(1));
    }
    const indirectConnections = groups
      .filter(g => g.slice(1).some(groupPerk => groupPerk === perk))
      .map(g => g[0]);
    connectedPerks.push(...indirectConnections);
    connections[perk.id] = [...new Set(connectedPerks.map(connectedPerk => connectedPerk.id))];
  }
  return connections;
}());