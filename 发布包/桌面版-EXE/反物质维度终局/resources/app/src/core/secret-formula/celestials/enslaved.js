export const enslaved = {
  // These entries will be unlocked in no particular order
  progress: {
    hintsUnlocked: {
      id: 0,
      hint: "无名氏欲相助，然相助需时。",
      condition: () => `于现实中花费超过${formatInt(5)}真实时而未完成；现实外时间按${formatPercents(0.4)}计。计时器自现实解锁时启动，但持续累积。`,
    },
    ec1: {
      id: 1,
      hint: "怪哉，自动永恒挑战复兴似乎运作不畅。",
      condition: () => `一次获得永恒挑战1超过${formatInt(5)}次完成`,
    },
    feelEternity: {
      id: 2,
      hint: "无限在此现实中似较往常更为崩坏，然此可修复乎？",
      condition: "尝试修复无限，却发现并点击了感受永恒按钮",
    },
    ec6: {
      id: 3,
      hint: `有些挑战更难，但亦有所增益。不知是否有一种挑战全然优于常规。`,
      condition: () => `完成永恒挑战6共${formatInt(5)}次后再次进入，以利用其更廉价的复制器星系`,
    },
    c10: {
      id: 4,
      hint: "是否有不依赖第8反物质维度而获取反物质星系之法？",
      condition: "于第6反物质维度时使用挑战10获取不止一个反物质星系",
    },
    secretStudy: {
      id: 5,
      hint: "时间研究12？此乃何物？",
      condition: () => `点击秘密时间研究并额外获得${formatInt(100)}时间定理`,
    },
    storedTime: {
      id: 6,
      hint: "若等候许久，此现实之某些部分似会消解。",
      condition: "释放后此现实拥有逾一年之游戏时间",
    },
    challengeCombo: {
      id: 7,
      hint: "能否以一挑战规避另一挑战之限制？",
      condition: "于永恒挑战6中时进入挑战10",
    },
  },
  // These get unlocked sequentially
  glyphHints: [
    "无限与膨胀时间符文似受限过甚，全然无用。",
    "力量与时间符文在此尤为强大。",
    `鹿颈长符文需有合宜效果方有用，然无之亦可完成现实。
      复制符文颇为有助，但非必须，亦不及力量与时间符文之强。`
  ]
};
