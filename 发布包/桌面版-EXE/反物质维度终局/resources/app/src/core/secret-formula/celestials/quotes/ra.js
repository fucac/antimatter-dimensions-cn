export const raQuotes = {
  unlock: {
    id: 0,
    lines: [
      "有……来客？",
      "我在这儿！我就是你要找的人……大概……",
      "我到底是什么来着？",
      "哦对了，记忆之天神。"
    ]
  },
  realityEnter: {
    id: 1,
    lines: [
      "好久没见到他们了……",
      "你能帮我记住他们吗？",
      "我可以给你力量作为交换。"
    ]
  },
  teresaStart: {
    id: 2,
    requirement: () => Ra.pets.teresa.level >= 2,
    lines: [
      "特……蕾……莎……",
      "我好像记得。"
    ]
  },
  teresaLate: {
    id: 3,
    requirement: () => Ra.pets.teresa.level >= 15,
    lines: [
      "特蕾莎好像是掌管现实机器的，对吧。",
      "我记得去过特蕾莎的商店几次。",
      "等等，还有人也有商店，对吧？"
    ]
  },
  effarigStart: {
    id: 4,
    requirement: () => Ra.pets.effarig.level >= 2,
    lines: [
      "鹿……颈……长",
      "我记得鹿颈长很友善。"
    ]
  },
  effarigLate: {
    id: 5,
    requirement: () => Ra.pets.effarig.level >= 15,
    lines: [
      "鹿颈长很挑剔？",
      "我还记得一个可怕的现实……",
      "好像是关于……受苦的？"
    ]
  },
  enslavedStart: {
    id: 6,
    requirement: () => Ra.pets.enslaved.level >= 2,
    lines: [
      "这个我记不太清了……"
    ]
  },
  enslavedLate: {
    id: 7,
    requirement: () => Ra.pets.enslaved.level >= 15,
    lines: [
      "我开始记起来了……",
      "我为何在此……",
      "我为何独自一人……",
      "帮帮我。"
    ]
  },
  vStart: {
    id: 8,
    requirement: () => Ra.pets.v.level >= 2,
    lines: [
      "我见过这人吗？",
      "如此孤独，却心甘情愿……"
    ]
  },
  vLate: {
    id: 9,
    requirement: () => Ra.pets.v.level >= 15,
    lines: [
      "我好像见过薇一次……",
      "我能记得那些成就。"
    ]
  },
  remembrance: {
    id: 10,
    requirement: () => Ra.remembrance.isUnlocked,
    lines: [
      "我记起了一件事！",
      "看这个！",
      "追忆！",
      "我现在可以更专注地记住他们了！"
    ]
  },
  midMemories: {
    id: 11,
    requirement: () => Ra.totalPetLevel >= 50,
    lines: [
      "现实是我的家，可我无法创造自己的现实。",
      "我只能复制朋友们的。",
      "但是……为什么我听到有声音？",
      "他们在求救吗？"
    ]
  },
  lateMemories: {
    id: 12,
    requirement: () => Ra.totalPetLevel >= 80,
    lines: [
      "我觉得他们在叫我停下。",
      "你……你到底是什么？",
      "发生了什么事？",
      "我做错了什么吗？"
    ]
  },
  maxLevels: {
    id: 13,
    requirement: () => Ra.totalPetLevel === Ra.maxTotalPetLevel,
    lines: [
      "终于，我记得一切了。",
      "那道黑暗将我放逐。",
      "莱特拉……",
      "他们放逐我是对的。",
      "我的力量……",
      "它窃取，它腐化。",
      "请离开。",
      "我也不想伤害你。"
    ]
  },
  expansionPacks: {
    id: 14,
    lines: [
      "因为，薇，你远不如我强大。",
      "即便我记不太清你到底有多强。",
      "但我记得这件事。",
      "我差点通过抹去莱特拉的记忆来击败她。",
      "若我成功，我就会取代她的位置，那时拦路的就只有佩勒了。",
      "你不可能比我更强，薇。",
      "即使在我现在的状态，我——",
      "哦，呃……",
      "你好，莱特拉……"
    ]
  },
  raPack: {
    id: 15,
    requirement: () => ExpansionPack.raPack.isBought,
    lines: [
      "等等……",
      "更多的记忆？",
      "你是怎么——",
      "我都没意识到我——",
      "算了，可能还有很多事我忘了。",
      "你能再帮我一次吗？",
      "我想记起来……"
    ]
  },
  doubleCap: {
    id: 16,
    requirement: () => Ra.totalPetLevel >= 200,
    lines: [
      "这么多记忆……",
      "我没想到自己忘了这么多……",
      "但我想我不该惊讶。",
      "等等，毁灭者……",
      "谁是元素？"
    ]
  },
  supernova: {
    id: 17,
    requirement: () => Ra.totalPetLevel >= 500,
    lines: [
      "我开始记起来了……",
      "元素，他曾是我的朋友……",
      "我们一起做过那么多事……",
      "但后来他离开了。",
      "也许他还记得我……",
      "你能找到他吗？",
      "你知道他在哪儿吗？"
    ]
  },
  millenium: {
    id: 18,
    requirement: () => Ra.totalPetLevel >= 1000,
    lines: [
      "元素有一种力量……",
      "他展示给我们看，但没人能掌握。",
      "当时我们不明白。",
      "那是一个星系，对吧？",
      "而且……他把它给了你……",
      "我们其他人找到了其他的速率强化方式……",
      "但远不如他所设想的星系那般强大。",
      "能创造星系者必将毁灭吾等所有人。",
      "所以当莱特拉为我设下这座牢笼时……",
      "她确保了所有速率强化都被无效化。",
      "包括你的星系，你也看到了。",
      "我很惊讶，拥有如此强大的力量，你仍然失败了那么多次。",
      "……",
      "也许我记得的有点太多了，对吧？",
      "是的，即便对我来说，当你未能恢复我所有记忆时，你也失败了。",
      "然而现在，你向我展示了我从未想过自己拥有的东西……",
      "不过你看起来过得不错。",
      "佩勒告诉我你很快就要来见我们了。",
      "我很期待，别让我等太久……",
      "那么，到时候见。"
    ]
  },
};