// I tried to make it relatively simple to add more locks; the idea is that you give it a value here
// and then it's all handled in the backend
// If you need to lock a challenge, set lockedAt to a new Decimal variable reflective of a desired number of Infinities
// They will always be unlocked post-eternity

export const normalChallenges = [
  {
    id: 1,
    legacyId: 1,
    isQuickResettable: false,
    description() {
      return PlayerProgress.eternityUnlocked()
        ? "在挑战之外首次达到无限。"
        : "首次达到无限。";
    },
    name: "第一维度自动购买",
    reward: "可升级第一维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D0
  },
  {
    id: 2,
    legacyId: 2,
    isQuickResettable: false,
    description:
      () => "购买反物质维度或Tickspeed 升级会暂停所有反物质维度的生产。" +
      `生产将在 ${formatInt(3)} 分钟后逐渐恢复正常。`,
    name: "第二维度自动购买",
    reward: "可升级第二维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 3,
    legacyId: 3,
    isQuickResettable: false,
    description:
      `第一维度被大幅削弱，但获得无上限的指数增长乘数。
        此乘数在维度提升和反物质星系后重置。`,
    name: "第三维度",
    reward: "可升级第三维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 4,
    legacyId: 8,
    isQuickResettable: false,
    description: "购买反物质维度时自动抹去所有低阶反物质维度，" +
      "如同献祭但无加成。",
    name: "第四维度自动购买",
    reward: "可升级第四维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 5,
    legacyId: 6,
    isQuickResettable: false,
    description:
      () => `Tickspeed 购买乘数从 ${formatX(1.080, 0, 3)} 开始，而非 ${formatX(1.1245, 0, 3)}。`,
    name: "第五维度自动购买",
    reward: "可升级第五维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 6,
    legacyId: 10,
    isQuickResettable: false,
    description: () => `升级每个反物质维度需要消耗其下方 ${formatInt(2)} 阶的维度` +
      "而非反物质。维度价格已修改。",
    name: "第六维度自动购买",
    reward: "可升级第六维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 7,
    legacyId: 9,
    isQuickResettable: false,
    description: () =>
      `购买 ${formatInt(10)} 个反物质维度的乘数降至 ${formatX(1)}。每次维度提升增加 ${formatX(0.2, 1, 1)}，` +
      `最高 ${formatX(2)}，不受任何升级影响。`,
    name: "第七维度自动购买",
    reward: "可升级第七维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 8,
    legacyId: 11,
    isQuickResettable: false,
    description: `维度提升不提供乘数且无法购买反物质星系。维度献祭重置反物质和所有反物质维度，` +
      "但提供显著更强的乘数。",
    name: "第八维度自动购买",
    reward: "可升级第八维度自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 9,
    legacyId: 5,
    isQuickResettable: true,
    description: () => `每当你购买Tickspeed 升级或 ${formatInt(10)} 个反物质维度，` +
      "其他等成本的项目将升至其下一个成本等级。",
    name: "Tickspeed 自动购买",
    reward: "可升级Tickspeed 自动购买",
    lockedAt: DC.D0,
    alphaLockedAt: DC.D1
  },
  {
    id: 10,
    legacyId: 4,
    isQuickResettable: false,
    description: () => `仅有 ${formatInt(6)} 个反物质维度。维度提升` +
      "和反物质星系成本已修改。",
    name: "自动维度提升",
    reward: "维度提升自动购买",
    lockedAt: DC.D16,
    alphaLockedAt: DC.D16
  },
  {
    id: 11,
    legacyId: 12,
    isQuickResettable: true,
    description: () => `存在普通物质，当你拥有至少 ${formatInt(1)} 个第二维度时会上升。` +
      "若其超过反物质，将触发维度提升但不给予加成。",
    name: "自动反物质星系",
    reward: "反物质星系自动购买",
    lockedAt: DC.D16,
    alphaLockedAt: DC.D16
  },
  {
    id: 12,
    legacyId: 7,
    isQuickResettable: false,
    description: () => `每个反物质维度生产其下方 ${formatInt(2)} 阶的维度` +
      `而非 ${formatInt(1)}。第一和第二维度均生产反物质。` +
      "第二、四、六维度为此得到加强。",
    name: "自动大坍缩",
    reward: "大坍缩自动购买",
    lockedAt: DC.D16,
    alphaLockedAt: DC.D16
  }
];
