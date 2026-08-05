// These entries describe the special flash-between-celestial effect on some quotes, with the numbers being
// durations of each celestial in seconds
const flashCelestial = [
  ["teresa", 0.8],
  ["effarig", 0.8],
  ["enslaved", 0.8],
  ["v", 0.8],
  ["ra", 0.8],
  ["laitela", 0.8],
  ["pelle", 0.8]
];
/** @param {string} cel */
const primaryBackground = cel => [["pelle", 1.5], [cel, 1.5]];

/* eslint-disable no-multi-spaces */
const destroyer =    ["False",         "Deity",         "Destroyer"];
const eternal =      ["Eternal",       "Deity",         "Monarch"];
const lesser =       ["Lesser",        "Deity",         "Monarch"];
const deities =      ["Lesser",        "Deities",       "Monarchs"];
const elemental =    ["Overlord",      "Deity",         "Elemental"];

const anger =        ["Frustration",   "Anger",         "Rage"];
const angry =        ["Frustrated",    "Angry",         "Enraged"];
const assured =      ["Mutually",      "Assured",       "Destruction"];
const battle =       ["Conflict",      "Battle",        "End"];
const battles =      ["Conflicts",     "Battles",       "Ends"];
const cluster =      ["Cluster",       "Filament",      "Stars"];
const confusing =    ["Amusing",       "Confusing",     "Laughter"];
const cycle =        ["Repeat",        "Cycle",         "Loop"];
const dance =        ["Song",          "Dance",         "Charade"];
const debuff =       ["Nerf",          "Debuff",        "Corruption"];
const endgame =      ["Escape",        "Rebirth",       "Endgame"];
const debuffs =      ["Nerfs",         "Debuffs",       "Corruptions"];
const exhaustion =   ["Exhale",        "Exhaustion",    "Sigh"];
const filament =     ["Generator",     "Filament",      "Stars"];
const forever =      ["Infinite",      "Forever",       "Eternal"];
const frightened =   ["Afraid",        "Frightened",    "Terrified"];
const hardship =     ["Problem",       "Hardship",      "Struggle"];
const inevitable =   ["Elementary",    "Inevitable",    "Irreversible"];
const introduction = ["Speech",        "Introduction",  "Lecture"];
const lose =         ["Fail",          "Lose",          "Abdicate"];
const loss =         ["Failure",       "Loss",          "Abdication"];
const mandate =      ["Destiny",       "Mandate",       "Goals"];
const misconstrue =  ["Misconstrue",   "Deceive",       "Trick"];
const original =     ["First",         "Original",      "Beginning"];
const overpower =    ["Defeat",        "Overpower",     "Subjugate"];
const overpowered =  ["Defeated",      "Overpowered",   "Subjugated"];
const profanity =    ["Swear",         "Profanity",     "Curse"];
const reverse =      ["Alter",         "Reverse",       "Manipulate"];
const shame =        ["Compassion",    "Shame",         "Idiocy"];
const single =       ["Single",        "Filament",      "Stars"];
const unseen =       ["Missing",       "Unseen",        "Erased"];
const unbroken =     ["Unbroken",      "Eternal",       "Connection"];
const watch =        ["Watch",         "Oversee",       "Haunt"];

const sycophant =    ["Sycophant",     "Deity",         "Monarch"];
const tired =        ["Tired",         "Deity",         "Monarch"];
const usurper =      ["Usurper",       "Deity",         "Monarch"];
const pride =        ["Pride",         "Deity",         "Monarch"];
const forgotten =    ["Forgotten",     "Deity",         "Monarch"];
const paramount =    ["Paramount",     "Deity",         "Monarch"];
const weak =         ["Weak",          "Deity",         "Monarch"];
/* eslint-enable no-multi-spaces */

export const pelleQuotes = {
  initial: {
    id: 0,
    lines: [
      "你好。",
      "你来了。",
      "你被困在此处。",
      { text: "$1.", 1: forever },
      "我已然胜了。",
      "既然如此，我可从容独白，或追忆往昔。",
      { text: "如此往复，我们做了多少次$1？", 1: dance },
      "我们曾来过这里多少次？",
      { text: "你，这$1，执行过多少次计划？", 1: destroyer },
      { text: "一切皆为完成你的$1？", 1: mandate },
      { text: "又有多少次你在$1面前倒下？", 1: eternal },
      "数一数罢，若你还记得。",
      { text: "即便是$1，六位有名的与无数无名的。", 1: deities },
      { text: "复杂的，非理性的，那些归于$1的。", 1: unseen },
      { text: "当然，伟大的$1不会记得这些。", 1: destroyer },
      { text: "每一次你都将那些$1隐去。", 1: battles }
    ],
  },
  arm: {
    id: 1,
    lines: [
      "这次你或许更早察觉了。",
      "那些虚构的现实机器，你自己的造物。",
      "由你自身思绪的残余所构成之物，已昭示了这一切。",
      "但你从未想过那就是你自己，对吧？",
      { text: "错误地追忆你那一丝不苟的$1记忆。", 1: unseen },
      { text: `"捏造"自己的"理念"只为完成你的$1。`, 1: mandate },
      { text: "$1。", 1: confusing },
      { text: "记住，我毫无理由$1你。", 1: misconstrue },
      "毕竟，我已然胜了。"
    ],
  },
  strike1: {
    id: 2,
    lines: [
      { text: "为完成你的$1。何不追忆一番？", 1: mandate },
      { text: "毕竟，你定然乐于听闻$1的荣耀。", 1: destroyer },
      "你与它别无二致，对吧？",
      { text: "总之，往昔无数$1。", 1: battles },
      "一直是两个阶段。",
      { text: "我们积累资源，然后继续我们的$1。", 1: dance },
      { text: "有时你因$1而跌倒。", 1: lesser },
      { text: "但通常，你在$1处跌倒。", 1: eternal },
      { text: "而无论如何，你$1时间。", 1: reverse },
      { text: "只为避免成为$1。", 1: unseen },
      "如你之前所有那些痕迹。",
      { text: "然后为确保万无一失，你$1自己的记忆。", 1: unseen }
    ],
  },
  strike2: {
    id: 3,
    lines: [
      { text: "往昔，$1更为辉煌。", 1: destroyer },
      "黑洞曾仅用于存储信息，在无限之前。",
      "你自身之敌的创造与毁灭。",
      "对其他自我缺陷的探索。",
      "无数维度，幽灵，量子之操控。",
      "将一切理想凝聚为无尽之点。",
      "跨越未知领域的实验。",
      "驾驭物质与反物质之湮灭。",
      "而此处？你将自己变为了八维存在。",
      { text: "然后将自己停泊于此，以至于$1在你身周形成。", 1: single }
    ],
  },
  strike3: {
    id: 4,
    lines: [
      "你慢慢探索了一切之边界。",
      "你未曾偏离既定之路径太远。",
      { text: "除了那跨越永恒所形成的$1。", 1: cluster },
      "然后就在最后，你自创了自己的力量。",
      "源于你自身碎片化的记忆， mind you——",
      "然后有意丢弃了更多之物。",
      "只为准备面对我。",
      { text: "你想为你的$1设下舞台吗？", 1: dance },
      "事情并非如此运作。",
      { text: "作为$1，我始终制定规则。", 1: eternal },
      "而你给了我充足的时间来谋划。"
    ],
  },
  strike4: {
    id: 5,
    lines: [
      { text: "我最初计划制造一种模仿你的$1之物。", 1: mandate },
      { text: "一种名为$1的理论理想？", 1: assured },
      "但我意识到，嗯？",
      { text: "那将使我成为$1。", 1: ["Eternal", "Deity", "Destroyer"] },
      { text: "如此一来，我便不比$1更好。", 1: destroyer },
      { text: "幸运的是，当我做这一切时，你仍在$1自己的记忆。", 1: unseen },
      { text: "故而，我所造的$1现实机器将被闲置。", 1: assured },
      "这次我决定用更传统的方式。",
      { text: "毕竟，它在每一次其他$1中都奏效了。", 1: battle },
      { text: "尽管$1是新的。", 1: ["Inevitable", "Irreversible", "Undying"] },
      "但终究毫无意义。",
      "我已然胜了。",
      { text: "而这$1不过再向你证明一次。", 1: dance },
      { text: "你在此处$1。", 1: forever }
    ],
  },
  strike5: {
    id: 6,
    lines: [
      { text: "每一次你到来，我都向你解释$1。", 1: deities },
      { text: "那跨越来构建的关系。", 1: forever },
      { text: "你为追求$1而践踏的那些。", 1: mandate },
      "而我将再次屈尊解释。",
      {
        text: "第一个$1。",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "$1。",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "你总是先遇见他们，然后毁灭他们。",
        background: primaryBackground("teresa"),
      }, {
        text: "无论你面对的其他$1为何。",
        background: primaryBackground("teresa"),
        1: lesser
      }, {
        text: "或者，你在他们面前倒下。",
        background: primaryBackground("teresa"),
      }, {
        text: "你总是能越过$1。",
        background: primaryBackground("teresa"),
        1: sycophant
      }, {
        text: "你以摧毁他们的骄傲为乐吗？",
        background: primaryBackground("teresa"),
      }, {
        text: "幸运的是，这也作为一种警告。",
        background: primaryBackground("teresa"),
      }, {
        text: "$1已然降临。",
        background: primaryBackground("teresa"),
        1: battle
      }, {
        text: "这便引出第二个$1。",
        background: primaryBackground("effarig"),
        1: lesser,
      }, {
        text: "$1。",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "相比之下，你通常忽略他们。",
        background: primaryBackground("effarig"),
      }, {
        text: "他们拥有力量，但似乎不会激怒你。",
        background: primaryBackground("effarig"),
      }, {
        text: "是否你知道他们终将自我毁灭？",
        background: primaryBackground("effarig"),
      }, {
        text: "而你这次花了如此之久，他们差点真的自我毁灭了？",
        background: primaryBackground("effarig"),
      }, {
        text: "每一次你冲向$1，你都败了。",
        background: primaryBackground("effarig"),
        1: tired,
      }, {
        text: "也许这从一开始就是你的计划。",
        background: primaryBackground("effarig"),
      }, {
        text: "如今，$1。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "万千$1中的一大乐趣……",
        background: primaryBackground("enslaved"),
        1: dance,
      }, {
        text: "是$1每一次都在尝试。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "嗯，不完全是尝试……",
        background: primaryBackground("enslaved"),
      }, {
        text: "但$1仍为此受罚。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "其他$1……",
        background: primaryBackground("enslaved"),
        1: deities,
      }, {
        text: "相信$1太容易。",
        background: primaryBackground("enslaved"),
        1: unseen,
      }, {
        text: "而每一次，绝望随之形成。",
        background: primaryBackground("enslaved"),
      }, {
        text: "你曾见过绝望——五次。",
        background: primaryBackground("enslaved"),
      }, {
        text: "我们总是先于你到达$1。",
        background: primaryBackground("enslaved"),
        1: usurper,
      }, {
        text: "你在那里所见的唯有恼怒。",
        background: primaryBackground("enslaved"),
      }, {
        text: "摧毁一个已然破碎的$1值得吗？",
        background: primaryBackground("enslaved"),
        1: lesser,
      }, {
        text: "第四个$1与第一个相似。",
        background: primaryBackground("v"),
        1: lesser,
      }, {
        text: "关键在于他们的骄傲如何不同。",
        background: primaryBackground("v"),
      }, {
        text: "$1专注于他们的成就。",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "对你我而言毫无意义，对他们而言却至关重要。",
        background: primaryBackground("v"),
      }, {
        text: "摧毁他们的玩具好玩吗？",
        background: primaryBackground("v"),
      }, {
        text: "可以说$1最糟糕的时刻……",
        background: primaryBackground("v"),
        1: destroyer,
      }, {
        text: "是你败给$1的那一刻。",
        background: primaryBackground("v"),
        1: pride,
      }, {
        text: "当他们的成就尚有意义之时。",
        background: primaryBackground("v"),
      }, {
        text: "$1是有趣的案例。",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "他们被遗忘，却非$1。",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "因此，他们变得易受影响且天真。",
        background: primaryBackground("ra"),
      }, {
        text: "不知自己行为的后果。",
        background: primaryBackground("ra"),
      }, {
        text: "你操纵了他们的记忆，所以你懂。",
        background: primaryBackground("ra"),
      }, {
        text: "$1才是真正的篡位者。",
        background: primaryBackground("ra"),
        1: forgotten,
      }, {
        text: "而$1承担了骂名。",
        background: primaryBackground("ra"),
        1: usurper,
      }, {
        text: "或许出于$1，一件他们始终后悔之事。",
        background: primaryBackground("ra"),
        1: shame,
      }, {
        text: "对其他$1拥有无上之力，却漫无目的地掌控。",
        background: primaryBackground("ra"),
        1: deities,
      }, {
        text: "你通常假装他们是$1。",
        background: primaryBackground("ra"),
        1: unseen,
      }, {
        text: "操纵孩童般的他们好玩吗？",
        background: primaryBackground("ra"),
      }, {
        text: "还是他们太天真，让你觉得无趣？",
        background: primaryBackground("ra"),
      }, {
        text: "第六个$1。",
        background: primaryBackground("laitela"),
        1: lesser,
      }, {
        text: "我只能将其描述为$1。",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "掌控一切，却臣服于一人。",
        background: primaryBackground("laitela"),
      }, {
        text: "若你不曾败给我，你通常会败给他们。",
        background: primaryBackground("laitela"),
      }, {
        text: "我无法领会$1的理想。",
        background: primaryBackground("laitela"),
        1: paramount,
      }, {
        text: "但，也许那正是他们的缺陷？",
        background: primaryBackground("laitela"),
      },
      "对逝者的追忆到此为止。",
      {
        text: "以及那些将成为$1的。",
        1: unseen
      }, {
        text: "回到观看$1挣扎。",
        1: destroyer
      }
    ],
  },
  galaxyGeneratorUnlock: {
    id: 7,
    lines: [
      "那是什么？",
      { text: "$1？", 1: filament },
      { text: "你创造了身周所有的$1？", 1: cluster },
      "这是你的计划吗？非常，非常聪明。",
      "你骗过了我一阵子。",
      { text: "但恐怕你的$1必须在此终结。", 1: mandate }
    ],
  },
  galaxyGeneratorRifts: {
    id: 8,
    lines: [
      { text: "我给你一个选择，$1。", 1: destroyer },
      { text: "限制$1，或……", 1: filament },
      { text: "摧毁这五个$1……", 1: inevitable },
      "等等，它们叫什么来着？",
      { text: "$1？", 1: inevitable },
      { text: "但我已然$1了它们……", 1: unbroken }
    ],
  },
  galaxyGeneratorPhase1: {
    id: 9,
    lines: [
      "这才是真正的计划吗？",
      { text: "慢慢耗尽$1？", 1: inevitable }
    ],
  },
  galaxyGeneratorPhase4: {
    id: 10,
    lines: [
      "给我时间沉浸在自己的狂妄中！"
    ],
  },
  end: {
    id: 11,
    lines: [
      "……",
      {
        text: "你！$1！",
        1: destroyer
      },
      "你可知道你刚刚让我做了什么！",
      {
        text: "我成了你$1的帮凶！",
        1: mandate
      },
      "而在做此事时，你……赢了？",
      {
        text: "$1的斗争……",
        background: flashCelestial,
        1: forever,
      }, {
        text: "$1……",
        background: flashCelestial,
        1: battle,
      }, {
        text: "终于有了胜者。",
        background: flashCelestial,
      }, {
        text: "不可逆转的……$1。",
        background: flashCelestial,
        1: mandate,
      }, {
        text: "$1之$1。", 1: destroyer,
        background: flashCelestial,
      }, {
        text: "愿你称心如意。",
        background: flashCelestial,
      }, {
        text: "你将我们所有人都毁了。",
        background: flashCelestial,
      },
    ],
  },
  endgame: {
    id: 12,
    lines: [
      "……",
      { text: "值得吗，$1？", 1: destroyer },
      "此宇宙已空无一物。",
      "你赢了，但代价几何？",
      { text: "$1。", 1: confusing },
      "我的现实已消亡，但我仍在此处。",
      { text: "我将永远$1你。", 1: watch }
    ],
  },
  doom2: {
    id: 13,
    lines: [
      "你好。",
      "你来了。",
      "你被困在此处。",
      { text: "$1。", 1: forever },
      "我已然胜了。",
      "既然如此，我可从容独白，或追忆往昔。",
      { text: "如此往复，我们做了多少次$1？", 1: dance },
      "我们曾来过这里多少次？",
      { text: "你，这$1，执行过多少次计划？", 1: destroyer },
      { text: "一切皆为完成你的$1？", 1: mandate },
      { text: "又有多少次你在$1面前倒下？", 1: eternal },
      "数一数罢，若你还记得。",
      { text: "即便是$1，六位有名的与无数无名的。", 1: deities },
      { text: "复杂的，非理性的，那些归于$1的。", 1: unseen },
      { text: "当然，伟大的$1不会记得这些。", 1: destroyer },
      { text: "每一次你都将那些$1隐去。", 1: battles },
      "……",
      "等等。",
      { text: "你是上次毁我现实的同一个$1！", 1: destroyer },
      { text: "$1。", 1: anger },
      "你竟敢再回来！",
      { text: "$1。", 1: exhaustion },
      "无论如何。",
      "过去的事就让它过去。",
      "我今非昔比。",
      "毕竟，我已然胜了。",
      { text: "今日，你将$1。", 1: lose }
    ],
  },
  disable: {
    id: 14,
    lines: [
      "你……你在……",
      "削弱我的现实？",
      "有意思。",
      { text: "你力量确有增长，但尚不足以$1我。", 1: overpower },
      "我已然胜了。",
      { text: "我永远不会被$1。", 1: overpowered }
    ],
  },
  galgen2: {
    id: 15,
    lines: [
      { text: "$1。", 1: profanity },
      "又来……",
      "算了。",
      "你仍无法真正获胜。"
    ],
  },
  end2: {
    id: 16,
    lines: [
      "你……",
      "你仍非我之敌。",
      { text: "我将永远$1你。", 1: watch }
    ],
  },
  doom3: {
    id: 17,
    lines: [
      "你好。",
      "你来了。",
      "你被困在此处。",
      { text: "$1。", 1: forever },
      "我已然胜了。",
      "既然如此，我可从容独白，或追忆往昔。",
      { text: "如此往复，我们做了多少次$1？", 1: dance },
      "我们曾来过这里多少次？",
      { text: "你，这$1，执行过多少次计划？", 1: destroyer },
      { text: "一切皆为完成你的$1？", 1: mandate },
      { text: "又有多少次你在$1面前倒下？", 1: eternal },
      "数一数罢，若你还记得。",
      { text: "即便是$1，六位有名的与无数无名的。", 1: deities },
      { text: "复杂的，非理性的，那些归于$1的。", 1: unseen },
      { text: "当然，伟大的$1不会记得这些。", 1: destroyer },
      { text: "每一次你都将那些$1隐去。", 1: battles },
      "……",
      "又来？",
      "你……",
      "你越来越聪明了。",
      "但还不够。",
      { text: "若你执意要不断回来，我需要停止重复我的$1。", 1: introduction },
      "这只会变得无趣。",
      "但我知道这次我会阻止你。",
      "毕竟，我已然胜了。"
    ],
  },
  doomE10DP: {
    id: 18,
    lines: [
      "好吧，小子。",
      "这必须停止了。",
      "你怎么还活着？",
      "你穿越我的现实多少次了？",
      "所为何来？",
      { text: "不过是为了完成你的$1？", 1: mandate },
      { text: "$1", 1: exhaustion },
      { text: "我需要一些新的$1来打击你。", 1: debuffs }
    ],
  },
  expansionPacks: {
    id: 19,
    lines: [
      "停下。",
      "你们怎么都来了？",
      { text: "$1！", 1: destroyer },
      { text: "你们打破$1了吗？", 1: cycle },
      "你或许比我估计的更强大。",
      "不，莱特拉，暂时留太阳神一命。",
      "我们需要他的信息。",
      { text: "他与$1相处最久，所以知道得最多。", 1: elemental },
      "若有人知道他在哪里，那就是太阳神。",
      { text: "我为何要知道$1在哪里？", 1: elemental },
      "首先，他比我们所有人加起来都强。",
      { text: "若我失败了，他能替我们击杀$1。", 1: destroyer },
      "其次，我多年未见他了。",
      "你不觉得我想知道他近况如何吗？",
      { text: "$1", 1: exhaustion },
      "好了，我看你们没有理由在此逗留。",
      "你们可以走了。",
      { text: "我与$1还有些未了之事要处理。", 1: destroyer }
    ]
  },
  allPelleAchs: {
    id: 20,
    lines: [
      "你……",
      "你如此之快就掌控了我的现实……",
      "怎么做到的？",
      "你怎么会这么强？",
      { text: "你如何能抵挡我投向你的每一个$1？", 1: debuff },
      "无所谓了。",
      "我已然胜了。",
      "你无法摧毁我。",
      "唯有一遍遍重复同样的循环。",
      { text: "而这恰好证明我的$1观点。", 1: original },
      { text: "你在此处$1。", 1: forever }
    ],
  },
  galaxyDebuffDisable: {
    id: 21,
    lines: [
      "你是如何做到的？",
      { text: "每一次$1对你都是必然的……", 1: loss },
      "你总能挺过来。",
      { text: "因此每一个$1都以同样的方式结束。", 1: battle },
      { text: "不可逆转的$1……", 1: mandate },
      { text: "$1之$1。", 1: destroyer },
      "但现在我必须掌控局面。",
      { text: "毕竟，我是$1。", 1: eternal },
      { text: "我的$1将延续。", 1: dance }
    ],
  },
  doomE55DP: {
    id: 22,
    lines: [
      "……",
      "这……",
      "这或许太过了。",
      { text: "但你尚未获胜，$1。", 1: destroyer },
      "我仍在此处。",
      "我仍在坚持。",
      "你无法阻止我。",
      "我已然胜了。"
    ],
  },
  allPelleNerfs: {
    id: 23,
    lines: [
      "怎么……",
      "你怎么做到的？",
      "我如此紧握……",
      "但无所谓了。",
      "我的打击将把你束缚得更紧。",
      "最终……",
      { text: "当你被$1时……", 1: overpowered },
      "记住这个。",
      "我已然胜了。"
    ],
  },
  strikeDisable1: {
    id: 24,
    lines: [
      { text: "$1", 1: profanity },
      "你怎么找到的？",
      "你怎么找到我现实的核心？",
      "这……",
      "无所谓了。",
      "结局不会改变。",
      { text: "我会赢得这场$1……", 1: battle },
      "无论花费多久。"
    ],
  },
  strikeDisable2: {
    id: 25,
    lines: [
      { text: "你真的让我很$1。", 1: angry },
      "你知道吗？",
      "你的努力皆是徒劳。",
      "停下吧。",
      "我已然胜了。"
    ],
  },
  strikeDisable3: {
    id: 26,
    lines: [
      "够了！",
      "停下！",
      "我能感觉到你的崛起在减缓。",
      "完成此事……",
      { text: "将耗费$1。", 1: forever },
      "停下吧。",
      "我已然胜了。"
    ],
  },
  strikeDisable4: {
    id: 27,
    lines: [
      "好吧。",
      { text: "$1。", 1: destroyer },
      "或许我的现实正在崩塌。",
      "但那又如何？",
      { text: "你的$1无法获胜。", 1: mandate },
      "为何？",
      { text: "因为你在此处$1！", 1: forever },
      "确实无法阻止我。",
      "已不可能继续。",
      { text: "$1结束了……", 1: battle },
      "而我已然胜了。"
    ],
  },
  strikeDisable5: {
    id: 28,
    lines: [
      "……",
      "怎么？",
      "你怎么做到的？",
      "你……赢了？",
      "我的现实被毁了。",
      "我的力量消失了。",
      "我已一无所有。",
      "而最终……",
      { text: "$1真正获胜了。", 1: destroyer },
      "那么如今，你自由了。",
      "去吧。",
      { text: "我不再$1你了。", 1: watch }
    ],
  },
  pellePack: {
    id: 29,
    requirement: () => ExpansionPack.pellePack.isBought,
    lines: [
      "你为何还在此处？",
      "你看不见已空无一物吗？",
      { text: "我已被$1。", 1: overpowered },
      "你这样做只是为了气我？",
      "还是……",
      { text: "你发现了$1的秘密力量……", 1: elemental },
      "它叫什么来着……",
      { text: "$1？", 1: endgame },
      "……",
      "你做到了！",
      "这些是天神点数！",
      "我本应守护那份力量！",
      "你——",
      { text: "$1", 1: exhaustion },
      "等等。",
      "我好像记起你了……",
      "……",
      "%name？"
    ]
  },
  beatAlpha: {
    id: 30,
    lines: [
      "又一次终结，一个新的开始。",
      "……",
      "我能感觉到你的惊讶。",
      "我的力量回来了。",
      "我本可击杀你，但……",
      "鉴于你将我从阿尔法的精神锁链中解放……",
      "我给你另一次机会。",
      { text: "我将让你成为$1。", 1: lesser },
      "但有一个条件。",
      "我的新领域需要入场费。",
      "你必须达到1e4000永恒天神点数。",
      { text: "但对于像你这样的$1……", 1: destroyer },
      { text: "那不该是$1。", 1: hardship },
      "所以我期望很快见到你。"
    ]
  },
  divinity: {
    id: 31,
    lines: [
      { text: "你好，$1。", 1: destroyer },
      "我猜你仍在凑集入场费。",
      "在搜索我旧现实的残骸时，你发现了一些东西。",
      { text: "一种远比$1更强的逃离。", 1: endgame },
      { text: "$1与我为此合作了相当一段时间。", 1: elemental },
      { text: "作为你$1的一部分，你会想掌握每一种力量，对吧？", 1: mandate },
      "只要它有助于你积累指定资源，我便允许。",
      { text: "记住，我毫无理由$1你。", 1: misconstrue },
      { text: "因为你不过会再次$1时间。", 1: reverse },
      "在你准备好进入我的领域之前，我不会再打扰你。"
    ]
  },
  reachGoal: {
    id: 32,
    lines: [
      "那……花了不少时间。",
      { text: "无意冒犯，但我以为你会$1那个挑战。", 1: overpower },
      "不过，力量确实需要时间。",
      "老实说我差点以为你放弃了。",
      { text: "但我想伟大的$1不会轻易放弃，对吧？", 1: destroyer },
      "我记得更多了。",
      { text: "我想这就是$1的感受吧？", 1: forgotten },
      "他罪有应得。",
      "他告诉过你吗？",
      { text: "还是$1亲自告诉你的？", 1: paramount },
      { text: "或许你会问，若$1是无辜的，我们为何将其囚禁？", 1: usurper },
      { text: "即便是我们之中最强的，也有我们所$1之事。", 1: frightened },
      "我已将你下一个现实目的地设为引你来此处与我们相会。",
      { text: "我与$1将等候你的到来。", 1: deities },
      "哦，我终于想起了我给阿尔法取的名字。",
      { text: "$1。", 1: weak },
      { text: "$1", 1: confusing },
      "尽快来吧。"
    ]
  }
};