export const catchupResources = [
  {
    name: "反物质维度",
    id: 0,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `每个反物质维度持续生产下一层的维度。最低层的反物质维度生产反物质。`
  },
  {
    name: "Tickspeed 升级",
    id: 1,
    openH2pEntry: "Tickspeed",
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `Tickspeed 升级使反物质维度生产其他反物质维度或反物质，就像时间流逝得更快一样。`
  },
  {
    name: "自动购买器",
    id: 2,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `自动购买器是游戏内置功能，当你能够负担时，会自动为你的反物质维度购买升级。`
  },
  {
    name: "维度提升",
    id: 3,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `维度提升通过在达到一定数量的最高可用反物质维度后重置所有反物质维度和Tickspeed 来获得。它们为你的反物质维度提供乘数。`
  },
  {
    name: "反物质星系",
    id: 4,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `反物质星系通过重置你的反物质维度和维度提升来获得。它们以复合方式提升你的Tickspeed 升级的效果。`
  },
  {
    name: "无限",
    id: 5,
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `无限是第一个主要重置层级。达到 ${format(Number.MAX_VALUE, 2)} 反物质后，你可以重置到目前为止的一切，以换取解锁新内容和资源。`
  },
  {
    name: "无限点数",
    id: 6,
    openH2pEntry: "Infinity",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: `无限点数是完成首次无限后的主要资源。它们可以用于在无限重置后依然保留的功能。`
  },
  {
    name: "普通挑战",
    id: 7,
    openH2pEntry: "普通挑战",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `挑战要求你在更困难的条件下达到 ${format(Number.MAX_VALUE, 2)} 反物质。完成挑战可以让你升级自动购买器。`
  },
  {
    name: "打破无限",
    id: 8,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `将你的大坍缩自动购买器升级到最大值，可以让你突破 ${format(Number.MAX_VALUE, 2)} 反物质，随着反物质增多，获得越来越多的无限点数。`
  },
  {
    name: "无限维度",
    id: 9,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: `无限维度像反物质维度一样以级联方式生产。最低层的无限维度生产无限之力，它为所有反物质维度提供大量乘数。`
  },
  {
    name: "无限挑战",
    id: 10,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `无限挑战是反物质目标超过 ${format(Number.MAX_VALUE, 2)} 的新挑战。完成它们会奖励升级和生产加成。`
  },
  {
    name: "复制器",
    id: 11,
    requiredStage: PROGRESS_STAGE.REPLICANTI,
    description: () => `复制器是一种随时间自我生产的资源，为所有无限维度提供乘数。当复制器达到 ${format(Number.MAX_VALUE, 2)} 时，可以重置为 ${formatInt(1)} 以获得一个不增加反物质星系成本的额外星系。它们在每次无限后也会重置。`
  },
  {
    name: "永恒",
    id: 12,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: () => `永恒是第二个主要重置层级。达到 ${format(Number.MAX_VALUE, 2)} 无限点数后，你可以重置到目前为止的一切，以获取新内容和资源。`
  },
  {
    name: "永恒点数",
    id: 13,
    openH2pEntry: "Eternity",
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒点数是完成首次永恒后的主要资源，其数量基于你完成永恒时的无限点数。`
  },
  {
    name: "时间研究",
    id: 14,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间研究是一组类似于技能树的升级，可以在每次永恒后免费重新分配而不会损失资源。树的某些部分有限制，禁止你同时选择特定的研究。`
  },
  {
    name: "永恒里程碑",
    id: 15,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒里程碑是内置自动化和便利功能，只需完成更多永恒即可解锁。解锁它们不需要消耗任何资源。`
  },
  {
    name: "时间维度",
    id: 16,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间维度也以级联方式互相生产，最低层生产时间碎片。时间碎片为你提供额外的Tickspeed 升级，这些升级不会增加用反物质购买的Tickspeed 升级的成本。`
  },
  {
    name: "永恒挑战",
    id: 17,
    requiredStage: PROGRESS_STAGE.ETERNITY_CHALLENGES,
    description: `永恒挑战是修改过的永恒，有一个必须达到的无限点数目标才能完成。它们最多可以完成五次，每次重复都更加困难，但奖励也愈发强大。`
  },
  {
    name: "膨胀时间",
    id: 18,
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `膨胀时间是一种修改过的永恒，其中Tickspeed 和所有维度乘数都被大幅降低。完成膨胀时间永恒会获得超光速粒子。`
  },
  {
    name: "超光速粒子",
    id: 19,
    openH2pEntry: "Time Dilation",
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `超光速粒子是一种无法刷取的资源，需要在膨胀时间永恒中获得更高数量的反物质才能增加你的数量。超光速粒子生产膨胀时间。`
  },
  {
    name: "现实",
    id: 20,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: () => `现实是第三个也是最后一个主要重置层级。达到 ${format(DC.E4000)} 永恒点数后，你可以选择重置到目前为止的一切，以换取解锁新内容并获取新资源。`
  },
  {
    name: "现实机器",
    id: 21,
    openH2pEntry: "Reality",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `现实机器是完成首次现实后的主要资源。它们的数量基于你完成现实时的永恒点数。`
  },
  {
    name: "复兴树",
    id: 22,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `复兴树是类似于永恒里程碑的可解锁功能，主要专注于便利性和自动化。它们使用复兴点数购买，复兴点数在每次现实后获得。`
  },
  {
    name: "符文",
    id: 23,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `符文是可装备的升级，只能在现实之间卸下。每次现实你都可以从多个随机新符文中选择一个获得；可选符文的平均质量取决于你在该现实中某些资源达到的高度。`
  },
  {
    name: "自动装置",
    id: 24,
    openH2pEntry: "Automator Overview",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `自动装置是一个内置功能，使用脚本语言，让你在拥有足够的升级和复兴后，可以完全解放双手地完成现实。`
  },
  {
    name: "黑洞",
    id: 25,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `黑洞以周期性循环方式加速整个游戏。它影响到目前为止游戏中的所有内容，效果类似于让游戏开启等量的时间。`
  },
  {
    name: "特蕾莎",
    id: 26,
    requiredStage: PROGRESS_STAGE.TERESA,
    description: `特蕾莎是第一位天神，她有一个更困难的现实，根据完成情况给予符文献祭大量加成。她解锁的升级专注于更轻松地测试和自动化现实。`
  },
  {
    name: "鹿颈长",
    id: 27,
    requiredStage: PROGRESS_STAGE.EFFARIG,
    description: `鹿颈长是第二位天神，她的现实限制了你的符文并有递增的削弱，但每达到一个新的重置层级都会给予奖励。她解锁的升级专注于自动选择和过滤你收到的大量符文，使用一种名为遗迹碎片的新资源购买。`
  },
  {
    name: "无名氏",
    id: 28,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无名氏是第三位天神，其现实极其严酷，有一长串削弱，但能为想出如何取胜的人解锁超立方体。他们还会修改你的黑洞，使其能够储存时间。`
  },
  {
    name: "储存时间",
    id: 29,
    openH2pEntry: "Nameless Ones",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `你的黑洞可以以两种方式储存时间。充能可以让你保留加速的时间，并在之后作为一次跳过的爆发释放。储存真实时间可以让你用实际时间来模拟现实（给予你该现实的资源但乘以倍数），或作为离线进度的替代。`
  },
  {
    name: "超立方体",
    id: 30,
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无限维度不能无限购买，除第8个外，所有无限维度都有购买次数的硬上限。每个超立方体永久性地大幅增加此上限。`
  },
  {
    name: "薇",
    id: 31,
    requiredStage: PROGRESS_STAGE.V,
    description: `薇是第四位天神，她的修改版现实类似于特蕾莎的现实，但只通过在内部达到特定资源里程碑来给予奖励。她给予一种名为空间定理的新资源，让你可以在不受路径限制的情况下购买额外的时间研究。`
  },
  {
    name: "太阳神",
    id: 32,
    requiredStage: PROGRESS_STAGE.RA,
    description: `太阳神是第五位天神，他的修改版现实会根据你的资源总量生产一种名为记忆块的资源。他高度专注于将前四位天神的旧升级和主题进行改进，并填补自动化和便利性方面的一些最终空白。`
  },
  {
    name: "记忆",
    id: 33,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `太阳神控制着前四位天神，根据记忆块数量随时间生产记忆。这些记忆用于提升前四位天神的等级，达到特定等级时会提供升级。`
  },
  {
    name: "充能无限升级",
    id: 34,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `特蕾莎的记忆允许你为无限升级充能，保持类似的效果但大幅增强。哪些升级被充能只能在现实之间更改。`
  },
  {
    name: "符文炼金",
    id: 35,
    requiredStage: PROGRESS_STAGE.RA,
    description: `鹿颈长的记忆解锁符文炼金，它使用修改版的符文献祭提供许多小幅加成。通过这种方式放弃符文获得的资源必须在反应中组合在一起，才能完全升级其效果。`
  },
  {
    name: "增幅黑洞",
    id: 36,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `无名氏的记忆增强了充能，使储存的游戏时间大于实际流逝的游戏时间。释放现在也可以重复且自动地进行。`
  },
  {
    name: "更难的薇",
    id: 37,
    openH2pEntry: "Ra",
    requiredStage: PROGRESS_STAGE.RA,
    description: `薇的记忆解锁了薇原始现实的修改版，目标更难，还有一套名为三元研究的新时间研究。`
  },
  {
    name: "虚幻机器",
    id: 38,
    requiredStage: PROGRESS_STAGE.IMAGINARY_MACHINES,
    description: () => `虚幻机器是一种在达到 ${format(DC.E1000)} 现实机器时解锁的新资源。它们被动生产，上限由你曾经最远的现实中本可获得的现实机器数量决定。`
  },
  {
    name: "莱特拉",
    id: 39,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `莱特拉是第六位天神，其现实有修改过的完成条件，并根据你达到它的速度给予递增的奖励。她解锁的新功能主要与一种名为暗物质的资源相关。`
  },
  {
    name: "连续统",
    id: 40,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `连续统是一种修改过的生产类型，允许你的反物质维度像能够购买分数升级一样进行生产，而无需实际购买。`
  },
  {
    name: "暗物质维度",
    id: 41,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度是级联生产，基于滴答系统而非连续运作。最低层生产暗物质，所有层级生产暗能量。`
  },
  {
    name: "维度重置机制",
    id: 42,
    openH2pEntry: "Lai'tela",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度可以两种方式重置。湮灭重置你所有的维度，以换取所有暗物质维度的永久乘数。飞升增加产量但重置单个维度的间隔。`
  },
  {
    name: "奇点",
    id: 43,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗能量可用于生产奇点，奇点根据其总量提供加成。生产奇点时，超过凝聚阈值的任何多余暗能量都会被浪费。`
  },
  {
    name: "佩勒",
    id: 44,
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `佩勒是第七位也是最后一位天神，他永久地诅咒你的游戏，将你投入一个非常困难的修改版现实中，你无法逃脱。`
  },
  {
    name: "末日审判",
    id: 45,
    openH2pEntry: "Pelle",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `末日审判是佩勒专属的重置，你可以随时执行。这会将你的进度重置到末日现实的开端，但会给予生产现实碎片的残骸。`
  },
  {
    name: "佩勒打击与裂隙",
    id: 46,
    openH2pEntry: "Pelle Strikes",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `在佩勒中达到特定进度里程碑时，可能会发生打击，永久地对末日现实施加另一个削弱。每次打击都伴随着一个裂隙，这是一种让你抽取不同资源以换取加成的机制。这些是永久的，在末日审判后仍然保持解锁。`
  },
];
