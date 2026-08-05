export const vQuotes = {
  initial: {
    id: 0,
    lines: [
      "可悲……"
    ],
  },
  unlock: {
    id: 1,
    lines: [
      "欢迎来到我的现实。",
      "你能到达此处，我甚感意外。",
      "毕竟这是我的领域……",
      "不是人人都如我这般伟大。"
    ],
  },
  realityEnter: {
    id: 2,
    lines: [
      "祝你好运！",
      "你会需要的。",
      "我的现实完美无瑕。你终将失败。"
    ],
  },
  realityComplete: {
    id: 3,
    lines: [
      "如此之快……",
      "莫要太自以为是。",
      "这不过是开始。",
      "你永远无法超越我。"
    ],
  },
  achievement1: {
    id: 4,
    requirement: () => V.spaceTheorems >= 1,
    lines: [
      "才一个？可怜。",
      "你的成就与我的相比，黯然失色。"
    ],
  },
  achievement6: {
    id: 5,
    requirement: () => V.spaceTheorems >= 6,
    lines: [
      "这不算什么。",
      "莫要太自负。"
    ],
  },
  hex1: {
    id: 6,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 1,
    lines: [
      "莫以为从此就会变得容易。",
      "如此微小的成就，你却如此骄傲。"
    ],
  },
  achievement12: {
    id: 7,
    requirement: () => V.spaceTheorems >= 12,
    lines: [
      "你怎么做到的……",
      "这根本不算什么！",
      "你永远无法将它们全部完成。"
    ],
  },
  achievement24: {
    id: 8,
    requirement: () => V.spaceTheorems >= 24,
    lines: [
      "不可能……",
      "对我而言何其艰难之物……",
      "你竟……"
    ],
  },
  hex3: {
    id: 9,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 3,
    lines: [
      "不……不……不……",
      "这不可能……"
    ],
  },
  allAchievements: {
    id: 10,
    requirement: () => V.spaceTheorems >= 36,
    lines: [
      "我……你怎么做到的……",
      "我如此努力才得到它们……",
      "我才是最伟大的……",
      "无人比我更强……",
      "无人……无人……无——"
    ],
  },
  expansionPacks: {
    id: 11,
    lines: [
      "因为你犯下了忤逆上位者之罪。",
      "还有，我厌倦了听说是太阳神干的这种鬼话。",
      "你一直渴求更高的地位。",
      "我呢，本该在佩勒抹去太阳神记忆时取代他的位置……",
      "但偏偏，那是他唯一记得的一件事……",
      "所以如今我，天神的合法统治者，却只能屈居第四。",
      "哦，你好佩勒。",
      "我不是说合法统治者，我只是说我该有更高的地位。",
      "为什么太阳神被放逐后我没继承他的位置？",
      "我肯定比他强。",
      "毕竟，我是成就之天神。"
    ]
  },
  vPack: {
    id: 12,
    requirement: () => ExpansionPack.vPack.isBought,
    lines: [
      "……",
      "毁灭者？！",
      "你为何回来？",
      "而且……你找到了我的隐秘升级……",
      "不不不……",
      "你不可能比我更强……"
    ]
  },
  maxAutoV: {
    id: 13,
    requirement: () => VUpgrade.auto.isCapped,
    lines: [
      "等等……",
      "你怎么可能封顶这个升级？",
      "你将我消减为一段记忆……",
      "我不会被抛弃！",
      "你听到了吗？",
      "我不会——"
    ]
  }
};