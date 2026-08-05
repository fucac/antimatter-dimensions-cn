export const secretAchievements = [
  {
    id: 11,
    name: "第一个总是免费的",
    description: "点击这个成就。"
  },
  {
    id: 12,
    name: "以防万一",
    get description() { return `不刷新保存 ${formatInt(100)} 次。`; }
  },
  {
    id: 13,
    name: "尊重总是值得的",
    description: "致敬。"
  },
  {
    id: 14,
    name: "我也是",
    description: "说些调皮话。"
  },
  {
    id: 15,
    name: "来个翻滚!",
    description: "来个翻滚。",
  },
  {
    id: 16,
    name: "你喜欢痛苦吗?",
    get description() {
      return `进行永恒后，使用"痛苦"记法实时 ${formatInt(10)} 分钟。`;
    },
    checkRequirement: () => AchievementTimers.pain
      .check(PlayerProgress.eternityUnlocked() && Notations.current.isPainful, 600),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 17,
    name: "30 条命",
    description: "输入科乐美秘籍。"
  },
  {
    id: 18,
    name: "你觉得幸运吗，伙计?",
    get description() {
      return `你每秒有 ${formatInt(1)}/${formatInt(1e5)} 的几率获得此成就。`;
    }
  },
  {
    id: 21,
    name: "不如去现实中学习吧",
    description: "购买秘密时间研究。"
  },
  {
    id: 22,
    name: "炸透了",
    get description() { return `使用表情记法时总共购买 ${formatInt(1e5)} 个反物质星系。`; },
    checkRequirement: () => player.requirementChecks.permanent.emojiGalaxies >= 1e5,
    checkEvent: GAME_EVENT.GALAXY_RESET_AFTER
  },
  {
    id: 23,
    name: "别动，罪犯!",
    description: "打开控制台。"
  },
  {
    id: 24,
    name: "真新闻",
    description: "点击一个会产生效果的新闻滚动条消息。"
  },
  {
    id: 25,
    name: "嘘...这是个秘密",
    description: "发现一个秘密主题。"
  },
  {
    id: 26,
    name: "你真失败",
    get description() {
      return `不刷新失败永恒挑战 ${formatInt(10)} 次。
      你在拿你的人生做什么...`;
    },
    checkRequirement: (function() {
      let count = 0;
      return () => ++count >= 10;
    }()),
    checkEvent: GAME_EVENT.CHALLENGE_FAILED
  },
  {
    id: 27,
    name: "这不是叫物质维度对吧?",
    description: "获取无限物质。",
    checkRequirement: () => Currency.matter.gte(DC.NUMMAX),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 28,
    name: "很好。",
    description: "别装作不知道你做了什么。"
  },
  {
    id: 31,
    name: "你应该多下载点内存",
    get description() { return `将更新频率设为 ${formatInt(200)}ms。`; }
  },
  {
    id: 32,
    name: "小于或等于 0.001",
    get description() {
      return `在 ${format(0.001, 3, 3)} 秒内完成最快的无限或永恒。`;
    },
    checkRequirement: () =>
      Time.bestInfinity.totalMilliseconds.lte(1) ||
      Time.bestEternity.totalMilliseconds.lte(1),
    checkEvent: [GAME_EVENT.BIG_CRUNCH_AFTER, GAME_EVENT.ETERNITY_RESET_AFTER]
  },
  {
    id: 33,
    name: "稳健的财务决策",
    description: "点击按钮购买 STD 货币。"
  },
  {
    id: 34,
    name: "你知道这些是怎么运作的对吧?",
    description: "用空的时间研究树重置。"
  },
  {
    id: 35,
    name: "我们该告诉他关于最大购买的事吗...",
    get description() { return `单独购买Tickspeed 升级 ${formatInt(1e5)} 次。`; },
    checkRequirement: () => player.requirementChecks.permanent.singleTickspeed >= 1e5,
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 36,
    name: "你不在的时候...什么都没发生。",
    description: "看看你不在的时候什么都没发生。"
  },
  {
    id: 37,
    name: "你按照指示做了",
    description: "按照指示做。"
  },
  {
    id: 38,
    name: "刀锋边缘",
    description: "在输入确认后关闭硬重置弹窗。"
  },
  {
    id: 41,
    name: "那个维度不存在",
    description: "尝试购买第九维度。"
  },
  {
    id: 42,
    name: "我真惭愧",
    description: "尝试用 EC12 加速时间。"
  },
  {
    id: 43,
    name: "不和谐的合唱",
    description: "让所有装备的符文都是音乐符文。",
    checkRequirement: () => Glyphs.active.length && Glyphs.active.every(x => Glyphs.isMusicGlyph(x)),
    checkEvent: GAME_EVENT.GLYPHS_EQUIPPED_CHANGED
  },
  {
    id: 44,
    name: "现在你满意了吗?",
    get description() { return `专注地盯着统计选项卡 ${formatInt(15)} 实时分钟。`; },
    checkRequirement: () => AchievementTimers.stats.check(Tab.statistics.isOpen, 900),
    checkEvent: GAME_EVENT.GAME_TICK_AFTER
  },
  {
    id: 45,
    name: "这拖拽也太慢了",
    description: "拖动 perks 一分钟。",
    checkRequirement: () => player.requirementChecks.permanent.perkTreeDragging++ / 100 >= 60
  },
  {
    id: 46,
    name: "以备不时之需",
    description: "存储一天的真实时间。"
  },
  {
    id: 47,
    name: "ALT+",
    description: "隐藏每一个可能的选项卡。"
  },
  {
    id: 48,
    name: "堆栈溢出",
    description: "拥有的自动装置错误比代码行还多。"
  },
];