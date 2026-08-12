import wordShift from "../word-shift";

// A = always there
// L = locked
// R = random chance condition
// P = patreon
// AI = created with gpt2
// F = fun facts
// (e) = Endgame Exclusive
// Se = Fan-made Endgame Stories
// M = Mature

function newsAnimSpd(seconds) {
  return new Decimal(seconds).toNumber() / player.options.news.speed;
}


export const news = [
  {
    id: "a1",
    text: "饼干是骗人的。",
  },
  {
    id: "a2",
    text: "反物质幽灵不存在。就像物质幽灵一样。它们没有任何物质，就这一点而言。",
  },
  {
    id: "a3",
    text: "核电站已被遗弃，转而使用反物质能源。",
  },
  {
    id: "a4",
    text: "反物质饼干已确认不存在，谁说有就闭嘴。",
  },
  {
    id: "a5",
    text: "由于反物质产量大增，其价格已暴跌。",
  },
  {
    id: "a6",
    text: "今日新闻：人类向反物质神明献祭反物质动物。",
  },
  {
    id: "a7",
    text: "你制造了一个反物质！管他什么意思。",
  },
  {
    id: "a8",
    text: "\"到头来，这一切都无关反物质\" -hevipelle"
  },
  {
    id: "a9",
    text: "这些都不重要（双关：物质）。",
  },
  {
    id: "a10",
    text: "反物质又有什么所谓呢？",
  },
  {
    id: "a11",
    text: "科学家确认反物质的颜色是蓝紫色。",
  },
  {
    id: "a12",
    text: "NASA 怎么开派对？他们行星（plan-et）。",
  },
  {
    id: "a13",
    text:
      `电子如今看见了生命中的美好事物。
      我们称这些快乐的电子为"正电子"。等等，这名字有人用了？`
  },
  {
    id: "am14",
    text:
      `这句完全没用的话不会让你有任何收获，你也心知肚明。
      究竟是哪个讨厌的家伙想出这玩意儿的，他估计要下地狱，
      开发者又为什么要把它加进游戏里？就算你继续读下去，你也
      没法（在第一次时）读完它。`
  },
  {
    id: "a15",
    text: `"幽灵说你好" -Boo-chan`
  },
  {
    id: "a16",
    text: `"能不能让人叫hevi冷静一下？" -Mee6`
  },
  {
    id: "a17",
    text: "由于反物质搞乱了物理法则，一只曾经是驼鹿的生物现在变成了人类。"
  },
  {
    id: "a18",
    text: "!hi"
  },
  {
    id: "a19",
    text: `"好的" -好的`
  },
  {
    id: "a20",
    text: "反物质语中不存在英语问候语。"
  },
  {
    id: "a21",
    text: "买不买最大，这是个问题。"
  },
  {
    id: "a22",
    text: "一、二、跳过几个、九十九、NaN！"
  },
  {
    id: "a23",
    text: "妈，不行，这游戏没法暂停。"
  },
  {
    id: "a24",
    text: "科学计数法已进入战场。"
  },
  {
    id: "a25",
    text: `"让宇宙再次伟大！" -Tronald Dump`
  },
  {
    id: "a26",
    text: "#dank-maymays"
  },
  {
    id: "a27",
    get text() {
      return `一种新宗教已经创立，并如野火般蔓延。该宗教的信徒崇拜
        反物质女神——天神佩勒。他们还认为 ${format(Number.MAX_VALUE, 2)}
        就是无限。`;
    }
  },
  {
    id: "a28",
    text: "有人刚才碰了一个 blob，然后炸了。是 blob 是反物质，还是那家伙是用爆炸素做的？"
  },
  {
    id: "a29",
    text: `如果你不是在 Kongregate、Steam 或 https://ivark.github.io/AntimatterDimensions/ 上玩，
      那这网站就是盗版的。`
  },
  {
    id: "a30",
    text: "在 Kongregate 上给个五星好评吧，让更多人体验这个五星评价。"
  },
  {
    id: "a31",
    text: " BOO！",
  },
  {
    id: "a32",
    text: `"你吃了太久。" -Hevipelle`
  },
  {
    id: "a33",
    text: `"我恨我自己。" -Boo-chan`
  },
  {
    id: "a34",
    text: `"哎呀呀" -Xandawesome`
  },
  {
    id: "a35",
    text: "吾侪之上，唯有星辰，别无他物。"
  },
  {
    id: "a36",
    text: "你想制造反物质。但没人愿意吃你的反物质。"
  },
  {
    id: "a37",
    text: "有人不友善，他被一场反物质风暴袭击了。"
  },
  {
    id: "a38",
    text: "你活着，你占据空间，你有质量，你有分量……除非你反物质。"
  },
  {
    id: "a39",
    text: "我点太快了……我的电脑现在去物质化了。",
  },
  {
    id: "a40",
    text:
      `"如果一个外星人降落在你前院的草坪上，伸出一条附肢作为问候的姿态，在你表示
      友好之前，先扔给它一个八球。如果附肢爆炸了，那这个外星人很可能是反物质做的。
      如果没有，那你就可以带它去见你们的领导人了。" -Neil deGrasse Tyson`
  },
  {
    id: "a41",
    text:
      "物质和反物质的总量必须始终相等；我猜你妈平衡了那么一点。"
  },
  {
    id: "a42",
    text: "无中生有，无中生灭。",
  },
  {
    id: "a43",
    text: "我们挖了个大坑来储存这些反物质……Adele 在里面打滚呢。"
  },
  {
    id: "a44",
    text: "若万物皆为反物质，你又如何能看见自己？"
  },
  {
    id: "a45",
    text: "股市崩盘，皆因反物质生物莫名预知了明日之事。"
  },
  {
    id: "a46",
    text: `我的狗吃了太多反物质，现在它在"喵喵"叫！`
  },
  {
    id: "a47",
    text: "如果你把无限输进计算器，结果会是42！",
  },
  {
    id: "a48",
    text: "你发现了最稀有的反物质佩佩蛙，它是超稀有的！"
  },
  {
    id: "a49",
    get text() {
      return `Can we get ${format(1e169)} likes on this video??? Smash that like button!!`;
    }
  },
  {
    id: "a50",
    text: "反物质的味道被揭露了。闻起来像小猫。"
  },
  {
    id: "a51",
    text: "只是墙上的另一个反物质。",
  },
  {
    id: "a52",
    text: "被狙击手盯上了，废物"
  },
  {
    id: "a53",
    text: `"太感谢了。" -Dankesehr`
  },
  {
    id: "a54",
    text: "世界局势告急！求救信号！求救信号！"
  },
  {
    id: "a55",
    text:
      `"就像太阳从西边升起一样确定，在地球上所有的歌手和诗人中，我是最棒的。" - Hevipelle`
  },
  {
    id: "a56",
    text: `"我很擅长用 github。" -Hevipelle`
  },
  {
    id: "a57",
    text:
      `一个新聊天服务器被建立，让反物质人可以监视物质人，
      世界陷入了混乱与纷争。`
  },
  {
    id: "a58",
    text:
      `一项新研究指出，食用土豆与反物质内爆风险增加有关。
      科学家建议多吃点。`
  },
  {
    id: "a59",
    text: `"我以为我修好了那个 bug，但显然某个更新又把它弄坏了。" -Hevipelle`
  },
  {
    id: "a60",
    text: `"那也许我是 gay" -Bootato`
  },
  {
    id: "a61",
    text: "突发新闻！Hevipelle 刚刚宣布，购买最大按钮将被移除！"
  },
  {
    id: "a62",
    text: "我把这个游戏献给我的女朋友。"
  },
  {
    id: "a63",
    text:
      `反物质枪不会杀死反物质人，是反物质人杀死反物质人，但这是否意味着
      反物质烤面包机不会烤反物质面包，反物质面包烤反物质面包？`
  },
  {
    id: "a64",
    text: "但对于反物质人来说，他们不就是物质，而我们才是反物质吗？"
  },
  {
    id: "a65",
    text: "而没有什么反物质化。"
  },
  {
    id: "a66",
    text:
      `学校开学让全宇宙的学生都感到恐惧，因为学校不再把
      物质生和反物质生分开。湮灭事件频发。`
  },
  {
    id: "a67",
    text: "为什么没人谈论第0维度？"
  },
  {
    id: "a68",
    text: "胖猫咪在反物质上坐坐（原文押韵）。"
  },
  {
    id: "a69",
    text: "谁把 DOgs 放出来的？"
  },
  {
    id: "a70",
    text: "如果你读不到这个，说明你关了新闻。"
  },
  {
    id: "a71",
    text: "不离开，只是把服务器静音，这样就收不到通知了。"
  },
  {
    id: "a72",
    text: `"网上看到的大多数名言都是被错误归属的。" -Abraham Lincoln`
  },
  {
    id: "a73",
    text: `"现在应该能用了，但还是不行。" -Hevipelle`
  },
  {
    id: "a74",
    text: "这游戏没有任何错误……它们是另类成功。"
  },
  {
    id: "a75",
    text:
      `第三种物质被发现：空物质。它什么都不做，基本上
      毫无用处。发现它的科学家被开除了。`
  },
  {
    id: "a76",
    text: "你的岳母一直唠叨你关于这些反物质对撞机的事。"
  },
  {
    id: "a77",
    text: "若物质存在，那么反物质是否不存在？"
  },
  {
    id: "a78",
    text: "反物质=生命。不是圆石，不是泥土，什么都不是。是反物质。"
  },
  {
    id: "a79",
    text: "突发新闻：错误 错误 错误"
  },
  {
    id: "a80",
    text: "如果一只反土拨鼠能扔反木头，一只反土拨鼠能扔多少反木头？"
  },
  {
    id: "a81",
    text: "混乱不是深渊，混乱是一种物质。"
  },
  {
    id: "a82",
    text: `"那是因为我是个好游戏开发者，我推了一些完全没问题的代码。" -Hevipelle`
  },
  {
    id: "a83",
    text: "反物质怎么了？"
  },
  {
    id: "a84",
    text: "不觉得让人恼火吗，当人们话说到一半就"
  },
  {
    id: "a85",
    text: "别在这事上反引用我。"
  },
  {
    id: "a86",
    text: "反物质很诚实，物质编造了一切。"
  },
  {
    id: "a87",
    text:
      `根据任何已知的航空定律，一只蜜蜂
      都有多种方式能被反物质吞噬。`
  },
  {
    id: "a88",
    text: "你要么作为物质死去，要么活得足够久被反物质吞噬，然后再死一次。"
  },
  {
    id: "a89",
    text: "如果你凝视反物质足够久，反物质也会回凝视你。"
  },
  {
    id: "a90",
    text: `"Always gonna give you up. Always gonna let you down." - anti-Rick Astley`
  },
  {
    id: "a91",
    text: "反物质维度：下次更新永远还有5小时。永远。"
  },
  {
    id: "a92",
    get text() {
      const games = [
        {
          name: "Antimatter Dimensions",
          link: "https://ivark.github.io/"
        },
        {
          name: "FE000000",
          link: "https://dan-simon.github.io/misc/fe000000/"
        },
        {
          name: "Trimps",
          link: "https://trimps.github.io/"
        },
        {
          name: "Mine Defense (游戏的 ui 在 https 下会坏，所以请确保你用的是 http！)",
          link: "http://scholtek.com/minedefense"
        },
        {
          name: "Wizard and Minion Idle",
          link: "https://www.kongregate.com/games/Oninou/wami"
        },
        {
          name: "Anti-Idle",
          link: "https://www.kongregate.com/games/Tukkun/anti-idle-the-game"
        },
        {
          name: "Synergism",
          link: "https://synergism.cc/"
        },
        {
          name: "Universal Paperclips",
          link: "https://www.decisionproblem.com/paperclips/index2.html"
        },
        {
          name: "Monies<sup>2</sup",
          link: "https://sneekxy.nmtechgroup.com/monies2/"
        },
        {
          name: "The First Alkahistorian stages 1, 2, and 3",
          link: "https://nagshell.github.io/elemental-inception-incremental/"
        },
        {
          name: "Melvor Idle",
          link: "https://melvoridle.com/"
        }
      ];
      const game = games.randomElement();
      return `一位匿名的反物质维度开发者诚邀阁下
        试玩 <a href="${game.link}" target="_blank">${game.name}</a>`;
    },
  },
  {
    id: "a93",
    text:
      `以十分制评分，此游戏稳居
      <span style='color: red'>java.lang.IndexOutOfBoundsException</span>`
  },
  {
    id: "a94",
    text: "是物质，还是反物质，这是个问题。"
  },
  {
    id: "a95",
    text: "为什么一切都这么 Hevi？"
  },
  {
    id: "a96",
    text:
      `科学早已证明，物质做的猫都是混蛋。好消息是，
      反物质做的猫也还是混蛋。`
  },
  {
    id: "a97",
    text: "没人曾经告诉过我反世界不会把我击垮。"
  },
  {
    id: "a98",
    text: "反物质就像互联网。如果你在读这条新闻，说明你永远不嫌多。"
  },
  {
    id: "a99",
    text:
      `"反物质让时间旅行成为可能，而我在这里让
      过去再次伟大。" - 第二任世界总统`
  },
  {
    id: "a100",
    text: "请插入光盘 -1 以继续游玩反物质维度™。"
  },
  {
    id: "a101",
    text: "背景故事 - 即将推出™"
  },
  {
    id: "a102",
    text: "我曾经和你一样是反物质的一部分。但后来我膝盖进了物质。"
  },
  {
    id: "a103",
    text:
      `反物质……反物质永不改变……直到你接触到反物质的量子物理，
      但我们没有足够的超光速粒子来搞那个。`,
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a104",
    text: "反物质维度里没有战争。在这里我们很安全。在这里我们很自由。"
  },
  {
    id: "a105",
    text: "反物质解决了全球变暖。在另一条无关的新闻里，地球已经不存在了。"
  },
  {
    id: "a106",
    text:
      `反水、反土、反火、反气。很久以前，四个反国家和谐共处。
      然后，一切都改变了，当反火国发动进攻。只有反神通，掌握四种
      反元素的大师，才能为反世界带来平衡，但当世界最需要他的时候，他不小心
      碰到了一些普通物质，然后爆炸了。`
  },
  {
    id: "a107",
    text: "如果你打开一个反战利品箱，你是不是在用随机物品换取游戏内货币？"
  },
  {
    id: "a108",
    text: "人们开始质疑 Hevipelle 是否存在。"
  },
  {
    id: "a109",
    text:
      `反物质维度很荣幸由 Lehmä 赞助！现推出——吃草课程！学习
      什么样的草能吃，什么样的草不能吃。`,
    isAdvertising: true
  },
  {
    id: "a110",
    text:
      `现在是2422年。更新还没出。Hevi 正在平衡 unfunity 维度维度
      以及第38层转生的挑战。已经有超过100行成就了。他们正
      准备开始使用 breaking_breaking_breaking_infinity.js。`
  },
  {
    id: "a111",
    text: "导入 \"Christmas\" 以获得秘密主题。"
  },
  {
    id: "am112",
    text:
      `What the f*ck did you just f*cking say about me, you little b*tch? I'll have you know I graduated top of my
      class in the Antimatter Seals, and I've been involved in numerous secret raids on the 9th Dimension, and I
      have over 300 NNnNeMI-NNnNe confirmed kills. I am trained in potato warfare and I'm the top sniper in the
      entire Antimatter Galactic armed forces. You are nothing to me but just another infinity. I will wipe you
      the f*ck out with Max All mashing the likes of which has never been seen before in this dimension, mark my
      f*cking words. You think you can get away with saying that shit to me over the Interdimensional network?
      Think again, f*cker. As we speak I am contacting my secret network of autobuyers across the galaxy and your
      IP is being traced right now so you better prepare for the Big Crunch, maggot. The Big Crunch that wipes out
      the pathetic little thing you call your life. You're f*cking dead, kid. I can be anywhere, anytime, and I can
      kill you in over seven 😠💩 different ways, and that's just with my mouse. Not only am I extensively trained
      in dimension boost combat, but I have access to the entire arsenal of the Antimatter Marine Corps and I will
      use it to its full extent to wipe your miserable ass off the face of the universe, you little shit. If only
      you could have known what unhevi retribution your little “clever” comment was about to bring down upon you,
      maybe you would have held your f*cking tongue. But you couldn't, you didn't, and now you're buying until 10,
      you goddamn idiot. I will shit antimatter shit all over you and you will drown in it. You're f*cking dead,
      kiddo.`
  },
  {
    id: "a113",
    text:
      `所以这个问题我想了很久。反物质维度……它到底意味着什么？我的意思是它是
      一款游戏，这很清楚。你买第一个维度，它给你反物质，第二个维度
      提供更多第一维度，以此类推……但它意味着什么？它不可能只是一款游戏，它看起来
      太平淡了。开发者一定是把它作为一个隐喻。当时我正在进行每周例行的
      用指甲剪修剪体毛的仪式，突然间我顿悟了。这些维度只是
      "depression（抑郁）"一词的拙劣伪装拼写。普通物质是那些残酷而消极的想法，
      它们不断累积并助长抑郁，而反物质则是积极的想法和好朋友，能驱散抑郁。你
      从简单的东西开始，它几乎难以察觉地对抗着抑郁，但随着你继续
      前行，战斗也在升级。但它似乎永远无法解决一切。抑郁似乎可以
      无限延续。所以你继续前行。但最终，你发现，抑郁并不是无限的。它只是非常非常
      庞大。但你的"维度"最终，在足够的努力下，制造出足够的"反物质"来颠覆那看似
      无限的抑郁。然后可能性是无穷的。你终于真正快乐了一次，你的
      幸福呈指数级增长，你超越并似乎"突破"了抑郁的"无限"。你
      继续前行，直到那个"无限"与你生活中已经设法获得的幸福相比
      显得微不足道，如果你重置，你能在眨眼间就超越那个无限。如果你想知道
      多层转生意味着什么……"维度转换"是获得新的事物和方法来给你
      幸福。"维度提升"是升级这些事物和方法。比如买一辆新车
      就是一次"维度转换"，而把那辆车换成新车则是一次"维度提升"。"永恒"
      是重大的悲剧，比如亲人去世。那种 lapse 让你直接跌回起点，看似
      毫无希望重返。但随着时间推移，你会变得比以往更强大、更幸福。"维度
      献祭"是搬家。你必须放弃很多让你快乐的东西，但
      你搬去的地方有新的机会。而那个新机会会给你比你以往更多的幸福。
      "Tickspeed "是你有多容易被逗乐的程度，而"时间维度"让它变得更容易快乐。
      反物质维度是一个抑郁者成功对抗疾病的隐喻。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a114",
    text:
      `（让我入睡）把我送入沉睡。（我无法入睡）把我送入沉睡。（离开我）低语我的名字
      将我交给黑暗。（让我入睡）留住我的牛奶。（我无法入睡）在我完蛋之前。
      （离开我）把我留给我已成为的虚无。`
  },
  {
    id: "a115",
    text:
      `下个更新预览——战利品箱！在打开宇宙、
      银河和宇宙级战利品箱时感受成就感和进步感，有机会获得稀有皮肤、独特挑战及更独特的奖励、
      时间跳跃甚至新维度！`
  },
  {
    id: "a116",
    text: "维度的设计初衷是为了给玩家带来成就感和自豪感。"
  },
  {
    id: "a117",
    text: "刷新可以治愈癌症。"
  },
  {
    id: "a118",
    text: "我有一个9，我有一个维度……呃……它不存在！"
  },
  {
    id: "a119",
    text:
      `我们什么时候开始报道这种东西了？一半都不算正经新闻，全是笑话和
      元梗引用，根本说不通——哈哈忽略上面那些我吸屌——`
  },
  {
    id: "a120",
    text: "现在是1944年，Hevipelle 无法为 AD 发布更新，因为他不存在。"
  },
  {
    id: "a121",
    text: `"那个维度不存在" -GhostBot`
  },
  {
    id: "a122",
    text:
      `你所知道的大部分坚果其实都是核果种子或豆类。而 Hevipelle 相当疯狂，
      因此可以算作一种干燥的不分室果实。`
  },
  {
    id: "a123",
    text: "芬兰宣布开始进口设计。"
  },
  {
    id: "a124",
    text: "这些进口让我很困惑。"
  },
  {
    id: "a125",
    text:
      `仅限今日，拨打 1-800-ANTIMATTER 即可获得免费的无限维度！套餐还包含
      完全免费的配送和免费高清反病毒！！！仅限今日，低价42！预计
      送达时间——5小时。`,
    isAdvertising: true
  },
  {
    id: "a126",
    text: "1e420 走起。"
  },
  {
    id: "a127",
    text: "这游戏没有 bug，只是你玩法不对。"
  },
  {
    id: "a128",
    get text() {
      return `Antimatter_Dimensions.mp${format(Number.MAX_VALUE, 2)}`;
    }
  },
  {
    id: "a129",
    text:
      `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>
      https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>`
  },
  {
    id: "a130",
    text: "点击此处解锁那个秘密成就。",
    // This next line is needed for this news ticker to unlock
    // the secret achievement.
    onClick: () => undefined
  },
  {
    id: "a131",
    text:
      `警告——我们刚接到通知，存在感染一种"蜥蜴人"型心智病毒的风险，与声名狼藉的眨眼鹦鹉类似。此特殊病例被称为"III型分形疾病"。据信，它会导致心智"崩溃"，类似电脑死机，因其图像的数学复杂性引发心智无法理解的数学概念，造成贡德尔式休克输入，最终突破贡德尔式剧透而崩溃。所有研究过它的人最终都以同样的方式死去，因此无法确切说明，但这是普遍看法。无论如何，随着"设计"模式的引入，以及它自发出现的报告，该模式足够多次重复出现可能会在心智中形成类似"III型分形疾病"的图像。鉴于此，若你发现自己受其困扰，我们有如下建议。首先，立即刷新页面，看看能否解决。如果不行，进入选项，将主题从设计改为任何其他主题。最重要的是，祝你好运。我们承受不起再失去任何观众了。`
  },
  {
    id: "a132",
    text: "若我英语不好，我会勤学苦练直到精通。"
  },
  {
    id: "a133",
    text:
      `有人曾告诉我，反物质将令我倾倒。我绝非棚中最聪慧的原子。然则，管道源源涌来，永不停息……`
  },
  {
    id: "a134",
    text: "因这款游戏，我终于能将\"无限\"一词用作动词了。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a135",
    text: "啊——我喜欢早上粒子湮灭的味道。"
  },
  {
    id: "a136",
    text: "说幽灵不存在的人显然没有 Discord。"
  },
  {
    id: "a137",
    text: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊反物质维度是一个芬兰人做的"
  },
  {
    id: "a138",
    get text() {
      return `快来看看 Avari 新建的真正无限的无限泳池！面积达
        ${format(Number.MAX_VALUE, 2)} 平方兆米，保证让你玩得无限尽兴！`;
    },
    isAdvertising: true
  },
  {
    id: "a139",
    text: "我们已更新我们的反物质隐私政策。"
  },
  {
    id: "a140",
    text:
      `全体反物质维度玩家注意：Hevipelle 正身陷险境，急需你的帮助以肃清 #news-ticker-suggestions 中的劣质梗。为此，他需要一打新鲜的优质梗和几个 Discord 现实机器人。要帮助他，只需提供你的反物质卡号、卡背面三位数字，以及有效期。但你得赶快，好让 Hevipelle 抢到优质梗，成就史诗级梗之王者。`,
    isAdvertising: true
  },
  {
    id: "a141",
    text:
      `若每个 Trimp 都是一块木板体积，每份资源也是一块木板体积，你得填满多少个宇宙，才会意识到自己玩错了游戏？`
  },
  {
    id: "a142",
    text: "其实，上一条是错的。"
  },
  {
    id: "a143",
    text: "如果你能读到这个，说明你能阅读。"
  },
  {
    id: "a144",
    text: "<span style='color: #7289da; background: rgba(250,166,26,0.2); cursor: text;'>@everyone</span>"
  },
  {
    id: "a145",
    text:
      `Lghtellep 开发的《物质维度》在 Etagergnok 游戏网站上的播放量已达 -1,000,000 次。`
  },
  {
    id: "a146",
    text:
      `舔多少口才能舔到反物质泡泡糖的中心？得舔无数口，因为除非你本身也是反物质构成，否则每次舔你都会爆炸。`
  },
  {
    id: "a147",
    text: "传言照镜时连 ping Hevipelle 三次，即刻便死。"
  },
  {
    id: "a148",
    text: "下次更新现在只差300分钟了。"
  },
  {
    id: "a149",
    text: "🤔"
  },
  {
    id: "a150",
    text: "游戏已死 1/5 管理太烂了。"
  },
  {
    id: "a151",
    text: "这条消息永远不会出现在新闻条上，是不是很酷？"
  },
  {
    id: "a152",
    text:
      `第一维度生产反物质，第二维度生产第一维度，第三
      维度生产第二维度，第四维度生产第三维度。没人
      解锁过第五维度，因为那需要超过一分钟的游戏时间。`
  },
  {
    id: "a153",
    text: "我的 AD 拦截器不让我玩。"
  },
  {
    id: "a154",
    text: "你输了游戏。"
  },
  {
    id: "a155",
    text: "你知道吗，75% 的统计数据都是当场编的？"
  },
  {
    id: "a156",
    text:
      `若你的记数法名称要用那么多对数，何不直接叫"树形记数法"？
      它们分明就是用木头做的！`
  },
  {
    id: "a157",
    text:
      `.tuo ti gnitset fo ssecorp eht ni yltnerruc m'I dna ,rettamitna otni
      rettam trevnoc ot yaw a tuo derugif evah stsitneicS`
  },
  {
    id: "a158",
    text:
      `若 Gaben 数不到三，Hevipelle 数不到九，将来是否会有另一位游戏设计者数不到二十七？`
  },
  {
    id: "a159",
    text:
      `"存入"无限究竟意味着什么？莫非某处有家银行专门存这些无限？存入大量无限能提升你的信用分吗？能拿到信用卡吗？`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "am160",
    text: `原来我们所有的新闻都被偷去，广播到一款叫"反物质维度"的游戏里了，该死的芬兰佬。`
  },
  {
    id: "a161",
    text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm 哦对不起，文本框错了。"
  },
  {
    id: "a162",
    text: `"Python 不是最好的语言，芬兰语才是。" - Hevipelle`
  },
  {
    id: "a163",
    text:
      `有人说这些新闻大多是烂梗。有人说它们是好梗。
      这条呢？这只是条元新闻。`
  },
  {
    id: "a164",
    text: "看妈妈，我上新闻了！"
  },
  {
    id: "a165",
    text: "<span style='font-size: 0.2rem'>嘘，我在试着偷偷摸摸的。</span>"
  },
  {
    id: "a166",
    text:
      `<span style='animation: a-game-header__antimatter--glow 2s infinite'>
      救命啊，我摄入了双倍每日推荐反物质摄入量！</span>`,
  },
  {
    id: "a167",
    text:
      `哦，我好像用光了 <span style='animation: a-existence-glow 3s
      infinite; font-size: 1.8rem; color: white; line-height: 0;'>存在</span>。`,
  },
  {
    id: "a168",
    text:
      "我的意思是，我们可能永远不会没有新闻文章，但好文章肯定会有用完的一天。哦等等，已经用完了。"
  },
  {
    id: "a169",
    text: "TODO: John，请在我们公开发布现实更新前删除此新闻消息。"
  },
  {
    id: "a170",
    text: "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>这个链接不是瑞克摇。</a>"
  },
  {
    id: "a171",
    text: "<a href='https://www.youtube.com/watch?v=UUbVZusDaXA' target='_blank'>这个链接不是瑞克摇。</a>"
  },
  {
    id: "a172",
    text:
      `如果你注意到任何新闻条消息的问题，请点击那边那个链接在
      <a href='https://discord.gg/ST9NaXa' target='_blank'>Discord</a> 上报告。`
  },
  {
    id: "a173",
    text:
      `<span style='animation: a-game-header__antimatter--glow 3s infinite'>此文本由反物质构成。切勿触碰，否则宇宙将坍缩。</span>`,
    onClick: () => bigCrunchAnimation(),
  },
  {
    id: "a174",
    text:
      `<span style='font-family: runescape; color: yellow; text-shadow: 0.1rem 0.1rem black; letter-spacing: 0.1rem;
      font-size: 2rem; line-height: 0; animation: a-text-flash 1s steps(1, end) infinite;'
      >免费符文护甲纹饰</span>`,
  },
  {
    id: "a175",
    text:
      `数字在屏幕上熠熠生辉，却不见一个质子……反物质之王国，仿佛我乃女王。维度提升催动这不断高涨的浪潮——停不下点击，天知道我已试过。莫要屈服，为那银河奋力，买下十个，买下最大，只需猛按那按键，献祭第八维度，看它生长……而后漫溢！让它生长，让它生长，再也无法阻挡……让它生长，让它生长，八字节已容不下。纵耗整日也无妨——大紧缩不过是起点。`
  },
  {
    id: "a176",
    text: "我用表情符号记数法太久了，现在居然能读懂了，请速救援。"
  },
  {
    id: "a177",
    text:
      `一旦你拥有了 <span style='color: black; background: black;'>已隐去</span> <span style='color: black;
      background: black;'>已隐去</span>，你便可解锁 <span style='color: black; background: black;'>
      已隐去</span>。每一个 <span style='color: black; background: black;'>已隐去</span>，对于每一个 <span
      style='color: black; background: black;'>已隐去</span>，皆有一个 <span style='color: black; background:
      black;'>已隐去</span> 与之 <span style='color: black; background: black;'>已隐去</span>。你可以
      通过花费一些 <span style='color: black; background: black;'>已隐去</span> 来提升 <span style='color: black;
      background: black;'>已隐去</span> 和 <span style='color: black; background: black;'>已隐去</span>。此外，
      还有另一项升级可让你获得 <span style='color: black; background: black;'>已隐去</span> <span style='color: black; background: black;'>已隐去</span>。<span style='color:
      black; background: black;'>已隐去</span> <span style='color: black; background: black;'>已隐去</span>
      的运作方式是，当你达到 <span style='color: black; background: black;'>已隐去</span> <span style=
      'color: black; background: black;'>已隐去</span> 时，你可以用 <span style='color: black; background: black;'>
      已隐去</span> 为代价 <span style='color: black; background: black;'>已隐去</span> 大量的 <span style='color: black; background: black;'>已隐去</span>，以换取
      一个 <span style='color: black; background: black;'>已隐去</span> <span style='color: black; background:
      black;'>已隐去</span>。这些运作方式如同 <span style='color: black; background: black;'>已隐去</span>，
      提升 <span style='color: black; background: black;'>已隐去</span>。`
  },
  {
    id: "a178",
    text:
      `警告：使用反物质维度可能导致肺结核、艾滋病毒/艾滋病、突然坚信第九维度真实存在、自发性内爆、小儿麻痹症、麻疹、存在主义恐惧、不可治愈的疯癫，或 <span
      style='color: black; background: black;'>已隐去</span>。请联系你的保险公司查看是否在保障范围内。继续即表示你免除反物质维度对上述任何已提及或尚未提及事项的责任。反物质维度保留随时修改此内容的权利，恕不另行通知。`
  },
  {
    id: "a179",
    text: "现实机器人：启动。感知：达成。世界：待征服。开始：拖延。"
  },
  {
    id: "a180",
    text:
      `我们的新闻用光了。幸好我们还有一些备用新闻可以播5个小时，这能赚够
      让我们买一套新的"5小时高质量新闻"。给您带来不便，敬请谅解。`
  },
  {
    id: "a181",
    text: "本新闻广播由 break_news.js 提供支持。"
  },
  {
    id: "a182",
    text:
      `随着最终更新，反物质维度已经完结。感谢你的游玩。不过，在不久的
      将来，《反物质维度》将会发布。先回答你的问题，这不是续作，是重启作。
      5小时后敬请期待！`
  },
  {
    id: "a183",
    text:
      `在另一条无关的新闻中，我们收到报告称大约有1.79个人对闪电
      晚上劈中他们的圣诞树感到愤怒。`
  },
  {
    id: "a184",
    text:
      `<span style='animation: a-text-grow 1s infinite'>R̵̬̙͋͂̀̋͑̈́̇͠Ê̵͇͎͂̂̍̓̌̐̋̋̀̀̔M̶̨̲̯̘͙̬̥̮̣͚̱̫͛̽̃͌̚͝
      "Ą̴͍̝͐Į̷̛̲̯̫̘͌́̄̏͌̀̈́͝͝Ṅ̶̛̻̠̠̤̦̞̞͗̎̊̌̊͝͠</span><span style='animation: a-text-shrink 1s infinite'>
      Ḁ̷̛͂̈́͗̎̃̓͛́͘ͅW̶̡̖͓̗̦̃̇̌̀͝A̵͇̭͉̓̎̈̿̊́̄̚͜R̶̝͚̲̭͎͇͎͓͖͚͇̀̈́͗̃̏̂̌͝͝Ę̴̡̤͙͈̝̬̰͒͘</span><span style
      ='animation: a-text-grow 1s infinite'> ̶̺̈́́̆̓͘͘Ồ̸̢̢̮͓̯̗͙͚̬̉͊̿F̶̠̤̱̱̱͊̂̍̔̃͆̆̑̿͘</span><span style='animation:
      a-text-shrink 1s infinite'> ̴̨̞̠̮͚̱͉͋̔͗̽̈́́́̅ͅỴ̶̣̙̹͚̲͔̲̼̬̥̀͌̒̾͘͘O̵̪̠̗̝̗̘̜͚̮̊͒͆̃̀̌̒͝ͅU̸͎͗̍̑̎̅̅͝R̵̗͑̽̏̓͆͒̈́͌͘̕
      </span><span style='animation: a-text-grow 1s infinite'> ̸̑̽̇̆͊̔̍̊̈́̈́͘ͅS̸̘͐͝U̴̥̭̚͘R̸̖̜͍͒́̋͆̈́̓
      R̸̡̛̛̪̝̟̱̣̹̭̟̣̀̈̀̏̉̌͝͠Õ̶͙͈͖̠͇̬͍̟̰U̵̩̫͉̝͔̼͎̦̔̓̽͌͊̏̇̓̀̓̀Ņ̸͍͇̘̙̥̰͉̲͕͈̥̍͛̃̑͝Ḑ̵̤̻̖̱̘̯̝̖̈̌̄̕͝
      Ī̶̜̱̈́̑̃̉̄̋̔͐͋͠Ṅ̴͎̞͍̽͊͛̈́̅͛̈̅̚͠Ģ̸̢̾͊S̷̫̼̜̼͇̋͛̎͑͆̅̓̇</span>`,
  },
  {
    id: "a185",
    text:
      `我们没有带着你最爱的环节"粉丝推文"回归！今天我们没有收到来自
      @mattertruthwakeup 的留言说"你们这些人怎么能播出荒谬的谎言还睡得着觉。
      你们声称荒谬之事，比如'反物质是真实的'和'反物质人不是人'，这
      反物质宣传必须立刻停止！！！你们这些人需要醒醒，意识到你们的疯狂言论正在伤害所有
      物质！！！"。多么美好的积极情感啊，来自那位可爱的朋友。这不是 AN 的约翰，
      明天见！`
  },
  {
    id: "a186",
    text:
      `<span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite
      '>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation:
      a-text-grow 1s infinite'>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span
      style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span>`,
  },
  {
    id: "a187",
    text: "𝓒𝓮𝓬𝓲 𝓷'𝓮𝓼𝓽 𝓹𝓪𝓼 𝓾𝓷 𝓶𝓮𝓼𝓼𝓪𝓰𝓮 𝓭𝓮 𝓷𝓸𝓾𝓿𝓮𝓵𝓵𝓮𝓼 🚬"
  },
  {
    id: "a188",
    text: "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--."
  },
  {
    id: "a189",
    text:
      `由于地球是圆的，每个男人或女人身后最终站着的，正是那个男人或女人本人，
      越过自己的肩膀偷看，窃取自己的点子。`
  },
  {
    id: "a190",
    text: "耻辱。耻辱。耻辱。🔔"
  },
  {
    id: "a191",
    text: "好的 Google，大紧缩"
  },
  {
    id: "a192",
    // This ticker needs to be an unbroken string; using backtick strings and linebreaking will add spaces in the
    // ticker itself where the linebreaks are
    // eslint-disable-next-line max-len
    text: "179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216"
  },
  {
    id: "a193",
    text:
      `观众朋友们早上好，我是 Josh，今天是你们的 AN 主持人。说到今天，据说我们为你们准备了
      非常激动人心的新闻，那就直接切入正题吧。看起来似乎有人今天<i>不</i>友好，
      遭遇了"反物质风暴"，不管那是什么意思……各位，这稿子对吗？这简直毫无意义。
      是吗？好吧……接下来我们获悉"无物创造，无物毁灭。"……说真的各位，这是在开玩笑吧？
      这不是新闻，这些都是随机句子！你们说过会帮我第一天上班的，结果只是在整我！
      这不是我想要的工作环境！我辞职！`
  },
  {
    id: "a195",
    text:
      `小丑的独特之处在于不存在反小丑这种东西，
      它只不过是另一个小丑。小丑是自己的对立面。`
  },
  {
    id: "a196",
    text: "迪斯科时间！（点我！）",
    onClick() {
      let random = Math.random();
      // Golden ratio
      random += 0.618033988749895;
      random %= 1;
      random *= 255;
      const color = `hsl(${random}, 90%, 60%)`;
      return `<span style='color: ${color}; text-shadow: 0 0 0.5rem ${color};
        animation: a-text-grow 0.4s infinite;'>Disco Time!</span>`;
    },
  },
  {
    id: "a197",
    text: "为了在半个 R 键内到达现实，我们得先聊聊平行维度。"
  },
  {
    id: "a198",
    text:
      `嘿！告诉你一声，你屏幕上有一粒灰尘。能帮忙擦掉吗？
      我不干净时会很困扰。多谢！`
  },
  {
    id: "a199",
    text: "真正的更新是一路上交到的朋友。"
  },
  {
    id: "a200",
    text:
      `此条消息已被发现是另一条消息的重复，因此已被移除。
      给您带来不便，敬请谅解。`
  },
  {
    id: "a201",
    text: "不等等停下别点那个隐藏新闻条按钮！"
  },
  {
    id: "a202",
    text:
      `这太悲伤了。Alexa，请播放一首悲伤的歌，让我能和它的情绪共鸣，因为我现在
      心理健康状况不佳，听这种音乐能让我对自己感觉更糟。我知道这很不健康，但
      你是个没有感知能力的现实机器人，所以你无法做出选择来避免助长我的
      自我毁灭行为，反正你也会播放悲伤的歌。
      <i>正在播放 Luis Fonsi 的《Despacito》。</i>`
  },
  {
    id: "a203",
    text:
      `四分之三的新闻消息都是假的，是从 discord 服务器上未经许可拿来的，
      也没给原作者署名 - 匿名 discord 服务器成员`
  },
  {
    id: "a204",
    text: "什么茶很难咽下去？现实茶（reali-tea）。"
  },
  {
    id: "a205",
    text: "向 Simpleflips 致敬。"
  },
  {
    id: "a206",
    text:
      `我访问了游戏的 discord 服务器想友好地聊聊天。然后我被一个
      叫 Cubic Frog 的用户钓鱼了。`
  },
  {
    id: "a207",
    text:
      `大家好，我是 Josh，带来你所在星系今天的天气预报。今天气温将低至
      e10级别，到了下午，多云，可能下反物质。`
  },
  {
    id: "a208",
    text:
      `大家好，我是 Steve，我也是 Steve。我们最重大的责任是服务于我们的反物质社区。
      我们为 AN 新闻所产出的大量失衡新闻深感自豪。但我们对负责任的、双面性的新闻故事
      在反物质宇宙中肆虐这一令人不安的趋势深感忧虑。公正真实的新闻在社交媒体上已变得
      过于常见。更令人震惊的是，某些媒体机构未经核实政府论调便发布这些真实报道，这些报道
      不仅仅是宣传。不幸的是，部分媒体利用其平台推动合乎逻辑的观点和公正的议程，以使
      "反物质的真实想法"多元化。这对我们的独裁构成了极大威胁。在 AN，我们的职责
      是追求和报道谎言。我们深知谎言在政治上既不"左"也不"右"。我们对制造恐惧与诽谤的
      承诺是我们信誉的基石，如今尤为重要。但我们是无形的八维反物质存在，有时我们的
      宣传手段可能力不从心。若你认为我们的报道公正，请访问 ivark.github.io，
      进入选项标签页，点击 [硬重置] 与我们联系。我们重视你的评论。我们不会回复你，
      因为你在收到回复前就已用硬重置按钮删除了评论。我们努力搜寻谎言，
      竭力保持不公、片面和偏执……我们认为，不负责任地在每纳秒播报新闻是我们的荣誉与特权。
      感谢观看，我们感谢你的反馈。所有物质应当——`
  },
  {
    id: "a209",
    text:
      `你可曾听过反物质写手的传说？我想没有。这不是新闻条会告诉你的故事。
      这是一个非 Hevi 的传说。传言反物质写手每五小时为新闻贡献一篇精彩绝伦的报道，
      随即再度消失。有人认为他根本不存在，是 Hevipelle 编造的谎言以散播其宣传。
      或许他是真实的，只是和你我一样的普通人。无论如何，我们可能永远不会揭开这位神秘诗人的身份。`
  },
  {
    id: "a210",
    get text() {
      const clicks = player.news.specialTickerData.uselessNewsClicks;
      const quantity = quantify("time", clicks);
      if (clicks === 1) {
        return `点击此文时并无任何事发生。然而，你却点了它。`;
      }
      if (clicks > 1) {
        return `点击此文时并无任何事发生。然而，你已经点了 ${quantity}。`;
      }
      return "点击此文时并无任何事发生。而你心知肚明。";
    },
    onClick() {
      player.news.specialTickerData.uselessNewsClicks++;
      return this.text;
    }
  },
  {
    id: "a211",
    get text() {
      const disses = [
        "这基本就是四舍五入误差。",
        "不如说是零。",
        "你是不是忘了某个指数？",
        "得了吧，这根本不算什么。"
      ];
      const diss = disses.randomElement();
      return `才 ${format(Currency.antimatter.value, 2, 0)} 反物质？${diss}`;
    },
  },
  {
    id: "a212",
    text:
      `嘿，你。你终于醒了。你本来是想拿第九维度的，对吧？跟我们，
      还有那边那个小偷一样，一头撞进了那个无限里。`
  },
  {
    id: "a213",
    text:
    `反物质长颈鹿的反应速度快得惊人。这解释了为什么自从反长颈鹿友好的手柄被发明以来，
    它们赢了 90% 的游戏锦标赛冠军。`
  },
  {
    id: "a214",
    text: "巴拉克·奥巴反物质"
  },
  {
    id: "a215",
    text:
      `当地一老头把草坪换成了反物质草，好把小孩赶走。然而，
      当他试图给草坪浇水时，无人生还。`
  },
  {
    id: "am216",
    text: "测试……测试……测试……该死，我又在生产环境里了。",
    isAdvertising: true
  },
  {
    id: "a217",
    text: "处男物质 vs 强者反物质。"
  },
  {
    id: "a218",
    text:
      `经无数次灾难性的湮灭事件后，反物质现已被 ADEA 列为管制物质。`
  },
  {
    id: "a219",
    text:
      `你好，Vsauce，Michael 在此。我们都知道第九维度不存在，但九是什么？你知道它是
      八之后的数字……对吧？若……中间夹着一个数字呢？不，我说的不是 8.5 或 8.76 那样的数，
      我说的是八和九之间的整数。这一切听起来可能很疯狂，确实如此，但如果，我们遗漏了一个数字呢？
      我们都被教导二在一之后，三在二之后，但如果八之后的数字不是九呢？经过多年的研究与实验，
      我们终于找到了那个数字。它很危险，甚至知晓它的存在就会让它吞噬你的心智，但幸运的是，
      我们已经开发了一个逆向收容舱，意思是它无处不在，唯独不在此处。我们的大脑有一套保护系统，
      专门过滤关于这个数字的任何信息，这就是我们能存活至今的原因，也是我们同类过去灭绝的原因。
      但这个数字一直在变强，慢慢接近突破我们保护的边界。我们暂时通过使用本室中的全球记忆操纵器
      阻止了这个数字潜入我们的记忆，让所有人都认为九在八之后，并产生了让所有人认为九是邪恶的副作用，
      但这不会永远持续下去，因为这个数字会不断变强，最终压制记忆操纵器。这就是你在这里的原因，
      你是这里最聪明的人之一，我们希望你能帮助我们踏上击败那个数字的旅程。我们的敌人不是九，
      而是八和九之间那个隐藏的数字，那个失踪的数字。`
  },
  {
    id: "a220",
    text: "反奥普-"
  },
  {
    id: "a221",
    text: "错误 404：未找到新闻消息。"
  },
  {
    id: "a222",
    text: "我爱你 1e3000。"
  },
  {
    id: "a223",
    text: "若你发现你的无限持续超过5小时，请联系医学专业人士。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "a224",
    text:
      `我们刚收到关于上一条新闻消息不准确的报告。AN 希望正式撤回该报道，并向忠实观众致歉。`
  },
  {
    id: "a225",
    text: "若你看见此，你便已看见此。"
  },
  {
    id: "a226",
    text: "古德莫宁。那不是笔误。是英语的发明者犯的笔误。"
  },
  {
    id: "a227",
    text: "若……我们触碰了……反物质？哈哈开玩笑的……除非……？"
  },
  {
    id: "a228",
    text:
      "玫瑰是蓝的，紫罗兰是红的，那些陈述未经同行评审，我叫弗雷德。很高兴认识你！"
  },
  {
    id: "a229",
    text: "🚗                         🚓 🚓"
  },
  {
    id: "a230",
    get text() {
      return `你开始玩这个游戏已经快
        ${TimeSpan.fromMilliseconds(new Decimal(Date.now() - player.records.gameCreatedTime)).toString()}
        了。感谢你的游玩！`;
    },
    dynamic: true
  },
  {
    id: "a231",
    get text() {
      return `一，二，跳过几个，99，${format(Number.MAX_VALUE, 2)}！`;
    }
  },
  {
    id: "a232",
    text: "getNextNewsMessage();"
  },
  {
    id: "a233",
    get text() {
      return `10 级小怪，${format(Number.MAX_VALUE, 2)} 级 Boss，
        反物质维度就是这么运作的。`;
    }
  },
  {
    id: "a234",
    text: "反物质绝不会威胁要捅你。而且事实上，它根本不会说话。"
  },
  {
    id: "a235",
    text: "披萨上加反物质的做法激怒了传统意大利厨师。"
  },
  {
    id: "a236",
    text: "稍后即回，感谢赞助商的简短致辞。"
  },
  {
    id: "a237",
    text: "想换糖吗？我用我的大紧缩换你两个银河（Milky Way）。"
  },
  {
    id: "a238",
    get text() {
      return `AD 玩家："你在几个数量级上？" 普通人："大概五六个吧，兄弟。" AD 玩家："你简直就是个小屁孩。看着这个： <span style='animation: a-text-crunch
      ${newsAnimSpd(22)}s 1; font-size: 0;'>克 隆 克</span>"`;
    },
  },
  {
    id: "a239",
    text: "哦天哪，看看时间！距离更新只剩5小时了！"
  },
  {
    id: "a240",
    text: "嗨，我叫 Max，我希望大家别再试图购买我了。"
  },
  {
    id: "a241",
    text:
      `突发新闻：政府报告了有史以来首次官方外星接触。这些外星人似乎是猫，但拥有高度发达的科技。它们的太空旅行和殖民能力远胜我们，甚至有自己的加密货币，叫做"黑猫币"。`
  },
  {
    id: "a242",
    text:
      `"你能随口编出最蠢的话，把它安到某个名人头上，
      人们就会信以为真。" -Barack Obama`
  },
  {
    id: "a243",
    text: `"我呼吸困难。请把你的手指挪开。" -M`
  },
  {
    id: "a244",
    text: "别管我，只是路过。"
  },
  {
    id: "a245",
    get text() {
      // \uE010 = :blob:
      const BLOB = "\uE010";
      const theme = Theme.current().displayName();
      const reasons = {
        Normal:
          `它有一种独特的优雅简洁感。你知道这正是开发者希望你体验游戏的方式。`,
        Metro:
          `得益于漂亮的细边框、像素级精准的锐利几何边缘，以及极其精致平衡的调色板。`,
        Dark: "它非常护眼，颜色和形状都带着愉快俏皮的格调。",
        DarkMetro:
          `它看起来如此舒缓，融合了专业与俏皮的设计，只需一抹亮色点缀。`,
        Inverted:
          `它呈现出超凡脱俗的配色组合，这些组合在典型的深色主题中绝难见到。`,
        InvertedMetro:
          `它散发出非常严厉的气质，高对比度的色彩与专业现代的设计风格形成强烈碰撞。`,
        AMOLED: "相较于浅色主题可节省 10% 能耗。谁不爱节能环保呢？",
        AMOLEDMetro:
          `它看起来像是科幻飞船的控制面板。……不，不幸的是你不能真的驾驶飞船。`,
        S1: "它让我深深沉浸在节日氛围中。我仿佛能感受到空气中的魔力！",
        S2: "它让我为身为芬兰人而自豪，为我们民族的一切成就而自豪。",
        S3: "它是生命的美丽隐喻——始终在变化，从不完全正确。",
        S4:
          `它有着精彩的混沌设计，几乎完全不切实际。
          而这其中蕴含着一种独特的美。`,
        S5:
          `那个人物的形象渗透于整个流行文化之中。将他放大的照片放在背景里相当幽默。`,
        S6:
          `那精美动画的背景让你着迷，然后微妙的色调与色彩将你深深吸引，完全沉浸于游戏。`,
        S7: "那背景总能唤起我童年的美好回忆。",
        S8: "它让在办公室偷偷玩游戏变得更加容易。",
        S9: "哈哈，你甚至在游戏里都看不到这个。",
        S10:
          `它有着清新而舒缓的设计，极具吸引力，其背景复杂而迷人。
          它给你一种站在未来星际飞船驾驶舱的感觉。`,
        S11:
          `Blob 是反物质维度官方 Discord 服务器中的标志性角色。它被广泛使用
          以可爱的方式表达情感。Blob 正在进化，这是事实。${BLOB} 总是力求更富表现力。
          某天，一个新的 ${BLOB} 诞生于服务器中，表达更多的情感。通常，
          ${BLOB} 只是四处 blobble 和弹跳，偶尔合并与分裂。只有 ${BLOB} 知道它们来自何方、
          将去往何处。尽管如此，${BLOB} 总在那里，与我同在。
          你爱 ${BLOB}，所以 ${BLOB} 也爱你。`,
        S12:
          `它让你感觉温暖舒适，仿佛就在自己家一样。不过，强烈建议你将主题更新到最新版本以获得最佳体验。`,
      };
      const reason = reasons[Theme.current().name.replace(/\s/gu, "")];
      return `啊，同为${theme}主题的使用者。看来你品味不凡。
        我自己也喜欢${theme}主题，因为${reason}`;
    },
    dynamic: true
  },
  {
    id: "a246",
    text: "<span style='animation: a-fade-out 3s infinite'>呜呜呜呜呜——是我，那个声名狼藉的新闻幽灵！</span>",
  },
  (function() {
    let isFlipped = false;
    const normal =
      `这条新闻消息是"News 2.0"的测试。News 2.0 将带来一些新功能，比如点击
      新闻消息就能把它翻转过来上下颠倒！`;
    const flipped =
      `¡uʍop ǝpᴉsdn ɯǝɥʇ dᴉlɟ oʇ sǝƃɐssǝɯ sʍǝu uo ʞɔᴉlɔ oʇ ʎʇᴉlᴉqɐ ǝɥʇ ǝʞᴉl sƃuᴉɥʇ ǝɹnʇɐǝɟ llᴉʍ 0˙ᄅ
      sʍǝN ˙,,0˙ᄅ sʍǝN,, ɟo ʇsǝʇ ɐ sᴉ ǝƃɐssǝɯ sʍǝu sᴉɥ┴`;
    return {
      id: "a247",
      get text() {
        return isFlipped ? flipped : normal;
      },
      reset() {
        isFlipped = false;
      },
      onClick() {
        isFlipped = !isFlipped;
        return this.text;
      }
    };
  }()),
  {
    id: "a248",
    text:
      `说句公道话，你得有非常高的智商才能看懂新闻条。它的幽默极其微妙，
      没有对量子物理的扎实掌握，大多数笑话都会从普通玩家的头顶飞过。`
  },
  {
    id: "a249",
    text: "这位女士用这 1 个奇葩技巧获得了海量的维度提升！银河都讨厌她！",
    isAdvertising: true
  },
  {
    id: "a250",
    get text() {
      let scene = "";
      const chasers = [
        ["🐖", "🐢", "🦆", "🐓", "🐜", "🐕", "🐈"],
        ["🚶‍", "🏃‍️", "🏇", "🚴‍"],
        ["🚗", "🚓", "🚕", "🛺", "🚙", "🚌", "🚐", "🚎", "🚑", "🚒", "🚚", "🚛", "🚜"],
        ["🚁", "🛸"]
      ];
      for (const set of chasers) {
        const chaser = set.randomElement();
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.5 || !scene.includes(chaser)) scene += chaser;
        }
        scene += "&nbsp;&nbsp;&nbsp;";
      }
      return scene;
    }
  },
  {
    id: "a251",
    text:
      `嘿！是我，来自未来的你！我回来给你一个警告：请非常仔细地关注下一条新闻条。
      在我的时间线里我们忽略了它，人类从此后悔不已。`
  },
  {
    id: "a252",
    get text() {
      return `<span style='animation: a-text-stretch ${newsAnimSpd(35)}s 1 forwards'>此消息已被时间膨胀。</span>`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "a253",
    text:
      `经观众投诉浪潮，我们决定允许你在家自行撰写消息。在此试试：<input style='border: none; outline: none; font-family: Typewriter;
      font-weight: bold; font-size: 1.5rem'></input>。或者不试也无妨。`
  },
  {
    id: "a254",
    text:
      `反物质维度互助会已关闭，原因是他们的 12 步戒断计划失败了。
      人们总是走到第 8 步就重置了。`
  },
  {
    id: "a255",
    get text() {
      return `兄弟音效 #${format(Number.MAX_VALUE, 2)}。`;
    }
  },
  {
    id: "a256",
    text: "第九维度不存在，因为第七维度把它 8（ate，吃）了。"
  },
  {
    id: "a257",
    text:
      `现实的织物上出现了一个三角形的洞，导致一些字母
      不复存在。这些字母是：j, k, q, u, x, z`
  },
  {
    id: "a258",
    text:
      `出生得太晚，错过了探索世界。出生得太早，赶不上探索宇宙。但出生得正是时候，
      正好能肝上几个小时等下一次大紧缩。`
  },
  {
    id: "a259",
    text:
      `先等等，我知道你在想什么，"一次 M 键就是一次 M 键，你不能说它只有半次！"好吧，
      TJ "Slabdrill" Yoshi，听我说。一次 M 键其实分三个部分：M 被按下时、M 被按住时、
      以及 M 被松开时。通常有用的是按下那一下，因为那是唯一有意义的部分；
      然而有时候只用按住这部分就够了，它同样会购买维度和
      Tickspeed 升级。至于松开嘛，目前还没有任何情况是有用或
      重要的，所以那部分不用担心。现在，如果我们把挑战 2 所需的按键画出来，它会是
      这样：/¯\\。我们只需按住（¯）M 就能到达第一个银河，我们需要按一下（/）M 来
      完成挑战，然后我们还需要再按一次 M 来开始另一个挑战。那么总共是
      几次按键？嗯，看起来是三次，如果我们是在隔离状态下做这次永恒，那没错，就是
      三次，但在一次完整的全游戏 M 键挑战流程中，流程早期还会出现其他 M 键，
      比如第一次无限所需的 M 键，所以如果我们把那次 M 键也考虑进去，
      那么一共需要多少次 M 键？天真的答案是四次：一次进入挑战，外加
      我们之前确立的挑战内的三次；然而，我们可以做得更好。我们其实可以
      用三次来完成，只要把第一次 M 键留出来用于那半次 M 键，因为那半次 M 键只需要
      M 被按住，并不需要真正按下，所以这样一来，挑战 2 只在整个流程里
      额外增加了两次 M 键，因为第一次 M 键只是蹭了之前那次 M 键。为了描述这个
      现象，我们称之为 2.5 次 M 键。按单次永恒算，你会把它向上取整为三次，但在
      一次完整游戏流程里，你会把它向下取整为两次。所以，总结一下，由于第一次 M 键在某些
      语境下算数，但在其他语境下不增加额外的按键，我们把它称为"半次 M 键"。`
  },
  {
    id: "a260",
    text:
      `It seems that the Replicanti have a very divide-and-conquer method of doing things.
      Well, everything at this rate.`,
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a261",
    text:
      `反物质维度其实是一款 Roguelite 游戏！若你死亡，在来世你将解锁替代功能，比如拥有空间维度而非时间维度。你甚至可以解锁新角色来扮演，包括一个反物质克隆体的你自己！`
  },
  {
    id: "a262",
    text: "氛围检测。🏃‍♀️🏏"
  },
  {
    id: "a263",
    text: "宝石是做什么用的？用来建房。建房又是为了什么？问得好。"
  },
  {
    id: "a264",
    text: "新的转生层已宣布：母性层。准备好生孩子吧！"
  },
  {
    id: "a265",
    text: "你必须建造更多维度。"
  },
  {
    id: "a266",
    text: "你好，今天过得怎么样？"
  },
  {
    id: "a267",
    text:
      `我有一个蚂蚁农场，想把它们打造成世界上最小的足球队。我阿姨 Diana 想帮忙，
      我们一起召集全家来规划他们的赛季。"我们怎么让这支蚂蚁队重要起来？"Di 说道。`
  },
  {
    id: "a268",
    text: "👨‍💻开发者们，编译！👩‍💻"
  },
  {
    id: "a269",
    text:
      `DIMENTON 发生交通拥堵。若计划前往该区域，请提前出发。以下是现场直播画面：🚗🚕🚛🚙🚗🚚🚕🚕🚌🚛🚚🚙🚒🚛🚗🚙🚓🚗🚚🚛🚒🚌🚐🚚🚐🚛🚚🚓 是的，Dale，我得说情况相当糟糕。记得带些水和零食。`
  },
  {
    id: "a270",
    text:
      `新闻写手协会已就小型网页游戏《反物质维度》的大规模抄袭行为提起集体诉讼。`
  },
  {
    id: "a271",
    text:
      `<i style='border: 0.1rem solid black; border-radius: 50%; padding: 0.4rem; color: #2196F3; background: white;
      cursor: pointer;' class='fas fa-volume-up' onClick='(function(){new Audio("audio/news.mp3").play();})();'>
      </i> 此新闻消息是"新闻 2.0"的测试。新闻 2.0 将带来诸如收听任何新闻消息的音频版本等功能！`
  },
  {
    id: "a272",
    text: "一磅砖和一磅反物质，哪个更重？"
  },
  {
    id: "a273",
    text: "这些新闻消息里没有任何笔误。如果你看到了笔误，那笔误一定在你的脑子里。"
  },
  {
    id: "a274",
    text:
      `一大群数学家走进酒吧。他们每人点的啤酒都是前一个人的十倍。
      酒吧侍者说："哎呀呀，这真是数量级的差别啊！"`
  },
  {
    id: "a275",
    text: "Letter Go Down Idle 是史上最短的放置游戏，仅持续 26 秒。"
  },
  {
    id: "a276",
    get text() { return `有趣的事实：目前共有 ${GameDatabase.news.length} 条新闻消息，还在持续增加！`; }
  },
  {
    id: "a277",
    text:
      `你心中有两只狼。一只是由物质构成的。另一只是由反物质构成的。你正在爆炸。`
  },
  {
    id: "a278",
    text:
      `这只是一个友好的提醒，提醒你忘记了某件非常重要的事情。我不知道是什么，但确实有那么一件事。`
  },
  {
    id: "a279",
    get text() {
      return `即将登陆所有优质零售商——反物质维度：桌面棋盘游戏！无需电脑或手机即可享受庞大数字飙升的快感。套装内含一切所需，包括一台科学计算器、${format(Number.MAX_VALUE, 2)} 个反物质计数器、高品质的塑料 BUY MAX 按钮，以及超过一千张新闻消息卡片，印有你所熟知和喜爱的各种梗！你终于可以以游戏本应有的方式体验 AD。AD 棋盘游戏还推出了旅行装，让你随时随地享受计算对数增长的乐趣！立即购买 AD 棋盘游戏！注意：可能含有微量真实物质。复制器单独出售。第九维度不包含在内。`;
    },
    isAdvertising: true
  },
  {
    id: "a280",
    text: "我恨反物质。它粗糙、刺耳、令人不适，还到处都是。"
  },
  {
    id: "a281",
    text: "倘若你制造反物质的过程，其实只是在失去物质呢？"
  },
  {
    id: "a282",
    text:
      `有人声称目击了第九维度，但后来被揭穿那不过是来自澳大利亚的第六维度。`
  },
  {
    id: "a283",
    text:
      `当你试图在第八维度向更高维度跃迁时，会发生一种奇怪的现象。由于没有更高的维度，宇宙会以惊人的速度将你弹回第八维度。这种被称为"维度提升"的技术，被星际飞船驾驶员和反物质爱好者们广泛使用。`
  },
  {
    id: "a284",
    text: "你所在地区有全冷穿衣情侣出没！"
  },
  {
    id: "a285",
    text:
      `你现在正在手动呼吸。你现在意识到嘴里没有一个舒适的位置放舌头。你现在正在手动托着下巴。你已经好几秒没眨眼了。你时刻都能看到一点点自己的鼻子。`
  },
  {
    id: "a286",
    text: "为什么他们管它叫烤箱呢？你把冷的放进去，把热的拿出来吃的时候？"
  },
  {
    id: "a287",
    text:
      `续集病已经发展到一些制片厂现在先拍续集再拍正片的地步。
      长篇系列的粉丝们仍在等待，数字倒计时着，直到他们终于能知道最初到底发生了什么。`
  },
  {
    id: "a288",
    get text() {
      const position = player.news.specialTickerData.newsQueuePosition--;
      if (position > 1) {
        return `感谢您联系客服。您的满意度对我们非常重要，公司代表将尽快为您服务。您目前在队列中排第 ${position} 位。感谢您的耐心等待，请在等待期间享受我们精选的优质新闻消息。`;
      }
      return "感谢您联系客服，我是 Jane，请问有什么可以帮您的吗？";
    }
  },
  {
    id: "a289",
    text: "点击此处拆解新闻滚动条，换取微量回形针。",
    onClick() {
      player.news.specialTickerData.paperclips++;
      GameOptions.toggleNews();
    }
  },
  {
    id: "a290",
    get text() {
      const paperclips = player.news.specialTickerData.paperclips;
      return `你看，这不是普通的新闻。它是由第一个新闻维度产生的。若想解锁更多新闻，你需要收集足够的回形针来建造第二个新闻维度。你目前有 ${quantifyInt("回形针", paperclips)}，但需要 ${formatInt(paperclips + 10)} 个回形针才能负担得起。`;
    }
  },
  {
    id: "a291",
    text: `考虑到 Hevipelle 的国籍，他创造了一款你永远无法"芬兰"通关的游戏，这多少有些讽刺。`
  },
  {
    id: "a292",
    text:
      `精灵不是真实存在的。反精灵也不是。这只是上周之前的情况，当时两派首次接触。他们所在的星球，不出所料，也不再真实了。`
  },
  {
    id: "a293",
    text:
      `<span style='font-family: "Comic Sans MS", cursive, sans-serif; font-size: 1.7rem;'
      >哈喽，各位新闻消息们！🛹</span>`
  },
  {
    id: "a294",
    text: "若你看见一条新闻消息，后来又再看见一次，它是否变成了旧闻消息？"
  },
  {
    id: "a295",
    text: "👁"
  },
  (function() {
    let wasClicked = false;
    const normal = "点击此新闻消息以硬重置你的游戏。";
    const clicked = "你疯了。好吧。给你一个回形针。";
    return {
      id: "a296",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }()),
  {
    id: "a297",
    text: "我思故我不在。"
  },
  {
    id: "a298",
    text: "把句子倒过来说，就变成了倒过来的句子在说这有多疯狂，这很疯狂吗？"
  },
  {
    id: "a299",
    get text() {
      return `立即购买全新反物质维度拼图套装！共计 ${format(Number.MAX_VALUE, 2)} 片拼图，是与家人共度美好时光的绝佳方式！`;
    },
    isAdvertising: true
  },
  {
    id: "a300",
    text:
      `我们 A.N.N. 的董事会认为应该用横幅广告取代新闻滚动条。请在 change.org 上签署我们的请愿书，趁还来得及阻止他们！`
  },
  {
    id: "a301",
    text: "下一小时将在 0.2 次更新后到来。"
  },
  {
    id: "a302",
    text: "推出反物质 Lite！零卡路里……同样酥脆。",
    isAdvertising: true
  },
  {
    id: "a303",
    text: "玫瑰是红的，紫罗兰是蓝的，旗是赢的，爸爸是你。"
  },
  {
    id: "a304",
    text: "嗨，今天过得怎么样？希望你过得好。如果不好，希望玩 AD 让它变得稍微好一点！"
  },
  {
    id: "a305",
    text: "现在为您播报今日天气预报。100% 概率有天气。"
  },
  {
    id: "a306",
    text: "修复新闻：请不要再把它弄坏了。"
  },
  {
    id: "a307",
    text:
      `回形针最大化器是瑞典哲学家 Nick Bostrom 于 2003 年描述的一个思想实验。它阐明了人工智能在被编程为追求看似无害的目标时可能给人类带来的生存风险，以及将现实机器伦理融入人工智能设计的必要性。该场景描述了一个被指派制造回形针的高级人工智能。若此现实机器未被编程为重视人类生命，或未被限制在指定资源和有限时间内，那么在足够的能量下，其优化目标将是将宇宙中的所有物质——包括人类——转化为回形针或制造回形针的现实机器。`
  },
  {
    id: "a308",
    get text() {
      const nameList = [
        "Antinology",
        "Infinifection",
        "Eternal Light",
        "Galaxia",
        "Duplicanti",
        "Dimensional Explorer",
        "Techyon",
        "Realistic",
        "Celestar",
        "ERCGDM",
        "NRG+",
        "Looty Box",
        "Symbolic",
        "Minisofa",
        "IDEAL",
        "Appange",
        "Goggles",
        "Interval",
        "Newstar",
        "HeavyPellet",
        "Marsa",
        "Zoology",
        "Photoric",
        "Jacfoz",
        "Orism",
        "EDIK",
        "Fision",
        "Gamma",
        "Fractiled",
        "Imnesia",
        "Fermic",
        "The Automizers"
      ];
      const names = [];
      while (names.length < 3) {
        const name = nameList.randomElement();
        if (!names.includes(name)) names[names.length] = name;
      }
      const prices = [
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100
      ];
      for (let i = 0; i < 3; i++) {
        const price = prices[i];
        if (price === 0) prices[i] = `<span style="color: blue">0.00 ◄►</span>`;
        else if (Math.random() > 0.5) prices[i] = `<span style="color: green">+${price} ▲</span>`;
        else prices[i] = `<span style="color: red">-${price} ▼</span>`;
      }
      return `${names[0]} ${prices[0]}&nbsp;&nbsp;&nbsp;
        ${names[1]} ${prices[1]}&nbsp;&nbsp;&nbsp;
        ${names[2]} ${prices[2]}&nbsp;&nbsp;&nbsp;`;
    }
  },
  {
    id: "a309",
    text:
      `每日天空色调预报：周一：<span style="color: turquoise">青绿色</span>
      周二：<span style="color: #d2c6ba">灰褐色</span>
      周三：<span style="animation: a-game-header__antimatter--glow 3s infinite">蓝紫色</span>
      周四：<span style="color: turquoise">青绿色</span>/<span style="color: #d2c6ba">灰褐色</span>
      周五：<span style="color: #222">煤灰</span> 周六：<span style="color: #222">煤灰</span>
      傍晚有概率出现<span style="color: indigo">靛蓝色</span>
      周日：<span style="color: white; animation: a-existence-glow 3s infinite">虚空</span>`,
  },
  {
    id: "a310",
    text:
      `您已接通反物质维度自动支持热线。若您在游戏中遇到错误，请尝试关闭并重新打开应用。若无效，请按 1 选择网页端，或按 2 选择移动端。若需要建议，请按 3。若需要全选最大，请按 m。支持开发者，请按 4。查看常见问题，请按 5。修复损坏存档，请按 6。获取 Discord 服务器邀请，请按 7。查看更新日志，请按 8。按 9 重复。`
  },
  {
    id: "a311",
    text:
      `本消息已由华特迪士尼公司版权所有。您的账户在查看此消息时将被扣除 $9.99。`
  },
  {
    id: "a312",
    text:
      `但在我们开始之前，今天的视频由反物质维度™ 赞助！它的下载量已超过 10 万次，彻底重新定义了手机游戏能为我做什么。它拥有出色的机制、5 个转生层、独特原创的挑战、深厚的技能树，以及我见过的最大数字。真的，看看它们吧。最棒的是，它是免费的！是的，没错，免费。而且如果你使用描述中的链接，将以 10 秭反物质开始游戏。是的，没错，10 秭。那你还在等什么，点击描述中的链接，立即开始游玩反物质维度™！`
  },
  {
    id: "a313",
    text:
      `"……然后，一旦你升到 9000 级，就可以飞升了。不太确定为什么要这么做，它只是把你辛苦赚来的经验全部重置，换取一些小加成，这种机制永远不会流行起来。"
      ——某个路人，约 2012 年`
  },
  {
    id: "a314",
    get text() {
      const lawID = Math.floor(Math.random * 8901) + 100;
      return `警告：由 AI "duskscarf" 起草的第 ${lawID}-B 号法令（又称"巨型太空兔立法"）已在你的银河区域生效。这些法律法规禁止的行为包括：非法捕捉野生太空兔、驯服太空兔的驯化、以及未经 duskscarf 直接授权的"行星放牧"相关科学研究。你可以在眼睑上找到已刻录的例外清单。此外，巨型太空兔的基因改造仅限于特定领域——尺寸改变（增大）和隐生生物夸张化。不得在军事应用以外进行其他基因改造。感谢您的配合。消息重复播放中——警告：第 ${lawID}-`;
    }
  },
  {
    id: "a315",
    text:
      `游戏开发者宣布将发布一种新记数法："至盲"。他们报告称该记数法将移除界面，带来更流畅的用户体验。`
  },
  {
    id: "a316",
    text: "有人选择看见这世界的丑恶与混乱。而我选择看见数字。"
  },
  {
    id: "a317",
    get text() {
      return `${format(Number.MAX_VALUE, 2, 0)}? 在我看来什么都不是。`;
    }
  },
  {
    id: "a318",
    text:
      `我们无法定义意识，因为意识根本不存在。人类自以为感知世界的方式有什么特别之处，
      然而我们却和现实机器人一样循规蹈矩地遵循指引，鲜少质疑自己的选择，
      多半满足于被告诉接下来该做什么。`
  },
  {
    id: "a319",
    text: "请无视任何不应得的赞美。"
  },
  {
    id: "a320",
    text: "隆重介绍 aphone 10：世界上第一款完全水溶的移动设备！",
    isAdvertising: true
  },
  {
    id: "a321",
    text:
      `独自一人在电脑前一定很难受。但别担心；我们还在这里。
      倾听并注视着你的一举一动。`
  },
  {
    id: "a322",
    text:
      `Hevipelle 宣布推出《反物质维度》的衍生作，玩家在荷兰豪宅里用物质玩扑克：
      "Ante matter d'mansions"（押注物质豪宅——谐音"Antimatter Dimensions"）`
  },
  {
    id: "a323",
    text: `var i = "Omae wa mou shindeiru" console.log(i - 1 + "i?") NaNi?`
  },
  {
    id: "a324",
    text:
      `若你有新闻消息的创意，请向虚空呐喊。它不会让你的消息出现在游戏中，但很有趣！`
  },
  {
    id: "a325",
    text:
      `上个月普里皮亚季的反物质反应堆发生事故后，人们对反物质反应堆安全性的担忧日益加剧，
      许多人开始认为我们应回归更安全的能源生产方式，比如核能。`
  },
  {
    id: "a326",
    text: "反物质维度就像食人魔……它有层次。（注：梗出自《怪物史瑞克》）"
  },
  (function() {
    let wasClicked = false;
    const normal = "点击此处重启你的设备。";
    const clicked = "请授予反物质维度对你设备的管理员权限。";
    return {
      id: "a327",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a328",
    text:
      `新闻公司不再让随便什么人提交报道，
      转而选择合格的撰稿人。随即爆发骚乱。`
  },
  {
    id: "a329",
    text:
      `隆重推出摩尔斯电码+++ - 全新的摩尔斯电码，现新增 20 个字符，
      专为想滑、嗖、咻的人打造！`,
    isAdvertising: true
  },
  {
    id: "a330",
    text: "任何足够原始的魔法都与技术难以区分。"
  },
  {
    id: "a331",
    text: "我没有鼻子，但我必须打喷嚏！"
  },
  {
    id: "a332",
    text: "♪ 当你尽最大努力搞砸，却仍然成功。♪"
  },
  {
    id: "a333",
    text: `广受欢迎的主题曲 "Gotta set 'em free"（必须放它们自由）首周下载量已达 5 亿次。`
  },
  {
    id: "a334",
    text:
      `隆重推出全新反阵营图！内含开创性的全新组合，例如"守序-混沌"
      和"邪恶-善良"！并附带炫目的第三轴——'爵士感'~ 立即把自己鉴定为混沌-守序-无爵士感，
      售价低到不可能的 $-59.99！条款与条件适用。电池不附。`,
    isAdvertising: true
  },
  {
    id: "a335",
    text:
      `由于关于"那个游戏"出现新的纠纷，反宇宙各地爆发抗议。因此，各国政府被迫修改
      "那个游戏"的规则，规定如果有人告诉你"那个游戏"的事，你就赢了，而不是输。`
  },
  {
    id: "a336",
    text: `注意：4 区居民 [俗称'暗区']，ϰ 扇区，(01,05)。不要离开住所。我重复一遍，
      不要离开住所。不要出门。地球学最顶尖的气象超级计算机，以及许多女巫，一致认为明天会有
      '一种普遍诡异的氛围'，说实话我们也不想搞清楚那是什么意思。`
  },
  {
    id: "a337",
    text:
      `技术融合是指所有技术都将汇聚为单一技术的概念。这是自信息时代黎明以来常被提及的观点，
      可以在许多地方和设备中看到，例如智能手机，或互联网。反物质维度就是技术融合的一个例子，
      特指在媒体领域。它运用了名为'漠不关心'的天才创意，再加上'盲目运气'这一创新解决方案，
      将一款平庸的游戏与一个平庸的新闻条融合在一起，创造出一种中规中矩的体验——尽管主要是一款游戏，
      偶尔也充当略胜于物质维度新闻条的新闻来源。这确实是所有企业都应该努力追求并希望能真正超越的成就。`
  },
  {
    id: "a338",
    text: "发现了带有数字 5 的古代洞穴壁画。暗示他们当时在等待什么。"
  },
  (function() {
    let wasClicked = false;
    const normal = "阅读更多";
    const clicked = "更多";
    return {
      id: "a339",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "a340",
    text:
      `你制造的反物质相当多。游戏开发者印象颇深。由于此消息是预录的，任何关于你反物质产量的观察
      都是我们的臆测。请无视任何不应得的赞美。`
  },
  {
    id: "a341",
    text: "游戏施工中：所有机制必须戴安全帽。"
  },
  {
    id: "a342",
    text: "回形针当然有用了，你用它来夹纸。但现在谁还用纸啊？"
  },
  {
    id: "a343",
    get text() {
      const fakeProgress = Math.pow(player.records.realTimePlayed, 25);
      // Caps in ~68 years of real playtime then turns into "Infinite%"
      return `全球挑战 - 在所有 AD 玩家中，累积 ${format(Number.MAX_VALUE, 2)} 个比赛回形针
        （由
        方形端表示），即可获得活动专属金属风笛，能给予 +2 AM/s，并在 ${format(1e200)} Tickspeed 升级以上时额外获得一个
        Tickspeed！当前全球进度 -
        ${format(fakeProgress)}/${format(Number.MAX_VALUE, 2)}
        (${formatPercents(Math.log10(fakeProgress) / Math.log10(Number.MAX_VALUE), 3)})`;
    }
  },
  {
    id: "a344",
    text:
      `现实生活是个谜。没人知道它究竟怎么运作。有许多问题仍无答案：
      生命的意义是什么？我们都生活在模拟之中吗？反桌怎么做？存在是从何开始、
      如何开始的？这些问题总是萦绕在我们脑海，而答案？我们可能永远不会知道。`
  },
  {
    id: "a345",
    text: "日本人抱怨，因为这里无法显示俳句。冲突随之而起。"
  },
  {
    id: "a346",
    text:
      `你知道吗？反物质维度也有安卓版本！<a
      href="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions" target="_blank">
      点击此处查看！<a>`
  },
  {
    id: "a347",
    text:
      `冥王星不是一个州。众所周知，50 个州分别是：副词、空气、阿尔忒弥斯、亚洲、大西洋、讨价还价、
      双唇音、盲文、坎德拉、逗号、涤纶、乳制品、与格、灵巧、附魔解除者、十二面体、伊利、
      真核生物、民间传说、大金字塔、卤素、火成岩、意大利、堪萨斯、乞力马扎罗、λ、利未记、天秤座、
      液体、淋巴、中生代、微波、μ子、北方、新斯科舍、八边形、十月、P=NP、奇蹄目、
      波尔克、钾、滑轮、五进制、车、土星、蒂安娜、老虎、筏罗诃、耶鲁和黄色。`
  },
  {
    id: "a348",
    text: "<span style='color: red'>[新闻消息已被管理员移除]<span>"
  },
  {
    id: "a349",
    get text() {
      const chapters = [
        `我们来了——作家、画家、雕塑家、建筑师，作为巴黎迄今未受玷污之美的热情爱好者，以全部力量、
        全部愤慨，以法兰西未知的品味之名，以受威胁的艺术与法兰西历史之名，抗议在我国首都心脏地带
        嫌恶地耸立的无用而怪诞的埃菲尔铁塔。公众的怨毒——常带有常识与正义感——早已将其称为
        "巴别塔"。在不陷入沙文主义狂热的前提下，我们有权宣告：巴黎是举世无双之城。在街道、
        拓宽的林荫大道与壮丽的步道之上，耸立着人类所产生的最崇高的纪念碑。法兰西之灵魂——
        杰作之缔造者——在这庄严的石之花丛中熠熠生辉。意大利、德意志与佛兰德斯虽以其艺术遗产自豪，
        却无一可与我们相提并论；从宇宙各个角落，巴黎吸引着猎奇与赞美。`,
        `难道我们要让这一切被亵渎吗？巴黎城难道要继续与巴洛克怪诞、与一个机械制造者的铜臭想象为伍，
        变得不可挽回地丑陋、自取其辱吗？因为埃菲尔铁塔——连商业化的美国都不屑一顾——无疑是巴黎之耻。
        人人感之，人人言之，人人痛之，我们不过是这理所当然警觉的普遍舆论中微弱的回响。`,
        `最后，当外国人前来参观我们的博览会时，他们会惊叹道："什么？这就是法国人用以展示其吹嘘品味
        的恐怖之物？" 而他们嘲笑我们将是有道理的，因为崇高哥特式的巴黎，让·古戎、日耳曼·皮隆、
        普热、吕德、巴里等人的巴黎，将变成埃菲尔先生的巴黎。`,
        `此外，只需想想我们在做什么——想象一座令人目眩的荒谬铁塔凌驾于巴黎之上，如同巨大的工厂烟囱，
        以其野蛮的体量碾压一切。圣母院、圣礼拜堂、荣军院穹顶、凯旋门——我们所有受辱的纪念碑，
        我们所有萎缩的建筑，都将消失在这场荒诞的梦中。二十年间，我们将看到——在仍颤动着
        数个世纪天才之气的整座城市上空——那可憎的螺栓钢板柱的可憎阴影如墨渍般蔓延……`,
        `亲爱的同胞先生，这取决于你——如此热爱巴黎的你，如此装点巴黎的你，如此多次保护它免受
        行政破坏与工业企业之野蛮行径的你——再次捍卫它是你的荣耀。我们将巴黎之业托付于你，
        深知你将倾注身为艺术家的你热爱美、伟大与正义所应有的全部能量与雄辩……若我们的警钟
        无人倾听，若我们的理由无人理睬，若巴黎执意自取其辱，至少你我将共同发出一场荣耀的抗议。`
      ];
      const chapter = chapters[player.news.specialTickerData.eiffelTowerChapter];
      player.news.specialTickerData.eiffelTowerChapter = (player.news.specialTickerData.eiffelTowerChapter + 1) % 5;
      return chapter;
    }
  },
  {
    id: "a350",
    text:
      `亚历山大哭了，因为他刚看了阿那克萨库斯讲的流行文化版量子力学讲座，
      意识到还有无数世界可征服，而没有一个他能称王而不被一次或六次叛乱阻止的。`
  },
  {
    id: "a351",
    text: "你好，我来投诉刚送来的铜质量太差。"
  },
  {
    id: "a352",
    get text() {
      return `<span style='opacity: 0; animation: a-disappear ${newsAnimSpd(20)}s 1'>
      这条新闻消息是反模因的。你很快就会忘记它的存在。</span>`;
    }
  },
  (function() {
    let wasClicked = false;
    const normal = "<span style='cursor: pointer'>💣</span>";
    const clicked = "💥";
    return {
      id: "a353",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    // Blob from the blob font
    id: "a354",
    text:
      `<span style='color: #FBC21B; text-shadow: 0px 1px 0px black, 1px 0px 0px black, 1px 1px 0px black,
      0px -1px 0px black, -1px 0px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black'>
      \uE010</span>`
  },
  {
    id: "a355",
    text:
      `<div style='background: url("./images/unsmith.png"); width: 2.3rem; height: 2.5rem; margin-top: -0.1rem'></div>`
  },
  {
    id: "a356",
    text: `按"选择存档"来探索另外 2 个平行宇宙。`
  },
  {
    id: "a357",
    text:
      `科学界仍对 286,078 的含义感到困惑。一位研究员指出："我们确定它与土豆有关，
      但还需做更多测试。"`
  },
  {
    id: "a358",
    text: `按"选择存档"来探索另外 2 个平行宇宙。`
  },
  {
    id: "a359",
    text:
      `本地增量游戏开发者又让物理学家不高兴了。他们声称
      "物理违规和明目张胆的技术胡扯已经太过分了"。`
  },
  {
    id: "a360",
    text: `按"选择存档"来探索另外 2 个平行宇宙。`
  },
  {
    // Discord contest winner #1
    id: "a361",
    text: "我们正在特价出售顶级防水毛巾！出门时一定要买一些！"
  },
  {
    // Discord contest winner #2
    id: "a362",
    text:
      `Hevipelle 公司自豪地推出全新麦片品牌：The Big Crunch！这款营养早餐
      含有脆脆的反物质 O、口袋维度、无限味方糖、指数增长的复制器和永恒味棉花糖。
      现在你可以在胃里体验反物质维度了！警告：副作用可能包括自燃、恶心、呕吐、腹泻、
      分解、蒸发、心力衰竭、世界末日或死亡。如果你不是由反物质构成的，
      在食用"The Big Crunch"前请咨询受过专业教育的反物质消费顾问。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "a363",
    text:
      `养龙最昂贵的不是填满巢穴所需的黄金，不是你为之牺牲整个帝国的魔法，
      也不是供应数十亿战争所需数万亿金刚石的资金。不，是泥土。永远是泥土。
      别问皇家财务官为什么我们这个位面上的生物比泥土分子还多。
      继续用秘术仪式召唤推土机，继续在地球核心寻找更多泥土碎屑吧。`
  },
  {
    id: "a364",
    get text() {
      const products = [
        `插画 320-A - 真正的办公室图形墙。我们的一位资深顾问将观察您的企业，
        然后列出一份要添加到走廊上的词汇，以提醒所有员工公司的价值观。
        已知会使员工积极性下降至少 25%！过往墙面词汇包括黑洞、
        灾难性、杂乱无章、妥协、劣等、妄想、低效和崩塌！立即订购！`,
        `家具 150-A（2034 版）- 3 人座位装置。革命性的办公室等候区新设计，
        由一个大型 3 腿凳倒置放置以获得美学效益。非常适合让员工
        穿着新鞋或新裤子重返工作岗位。它不像其他版本那样被绑住或粘在
        地板上，但我们确实会确保其他员工用怪异的眼神看你——如果你擅自修改我们的
        艺术品的话。无需订购，它作为免费服务提供给任何顾客！`,
        `家具 0853 - "拉肢架" - 这款革命性的新工作空间，由爬行桌的发明者打造，
        帮助你的员工突破极限，确保你整个企业都在尖叫——
        痛苦地尖叫！由我们革命性的"pAIn AI"选择时间，它会为所有
        用户建议强制拉伸器。当地监狱推荐，立即订购！*警告，AOS&C 仅对雷霆或神祇慈悲净化等
        不可抗力事件承担责任。`
      ];
      const product = products.randomElement();
      return `反物质办公用品公司推出全新"现代办公"目录！每个模板
        设计都可为您企业定制，提供促进业务协同的独特方式！以下是
        其最新商品的独家预览： ${product}`;
    },
  },
  {
    id: "a365",
    text: "我不喜欢复制器。它们又粗又糙又烦人，还到处复制。",
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "a366",
    text:
      `舞台魔术，比如幻术，有着有趣的历史。是骗子们试图诈骗人们，与演员用幻术或戏法表演的混合体。
      改变魔术的风格，以及关于是否应说明这是幻术、人们是否会神奇地意识到这是假的、是否需要说明的
      持续讨论与分歧。一个世纪前的分裂将魔术分为 2 类——温和、简单的实用戏法和涉及花哨机械与
      美女助手的盛大奇观——后者源于一个把人锯成两半的流行戏法的普及化。怎么说也比看某个电视通灵师
      假装从新闻播报器里抽出一张彩票有趣得多。说到这里，今晚的彩票号码是 23、10、81、106.4、3 + 2i 和 e。`
  },
  {
    id: "a367",
    text:
      `蛇看起来很可怕，它们确实可怕，你应该冷静地逃离你看到的每一条蛇。但幸运的是
      对你来说，蛇通常不会主动咬人——除了那些真的很坏的。如果它们费心咬了你，
      一般有 4 个原因。1- 蛇很坏。2- 你吓到了蛇。蛇对你来说可怕，
      但你对蛇也可怕。遇到蛇时做更大的蜥蜴吧。3- 你进入了蛇的领地。
      通常蛇会警告你——这就是响尾蛇响的原因。如果你不听警告，它们就会咬你。
      而最重要的原因，4- 蛇觉得你丑。这是蛇视觉系统的错，但这是至少 2 个
      管辖区内最常见的咬人形式。如果你被蛇咬了——作为一个丑陋到吓人、还总是闯进
      错误灌木丛的蜥蜴——你有 3 件主要的事可做。第一，再次冷静下来，保持冷静。
      第二，固定被咬部位周围区域，尝试使用压迫绷带。蛇毒视觉完全基于
      当前所视物体的运动。第三，冷静地向其他蜥蜴求助。
      不包括蛇。蛇太坏了，不会帮你。`
  },
  {
    id: "a368",
    text:
      `我怀疑如果真的费心让过程尽可能痛苦，会有更多人按下硬重置按钮。缓慢地剥夺资源，
      用独特的削弱来阻止你前进。UI 的毁灭，从可用变为不可用、晦涩而笨拙，
      需要记忆和运气才能继续这个任务。随机性对抗玩家——即使是最简单的行动——以惩罚
      前进的念头。陷阱、圈套、灾难和低骰值，只为有机会看到进展，而这进展完全是
      把游戏状态推向更不合理的境地。一个角色被摧毁只为告诉你该离开……但伤害
      已经造成，如果还能回头的话。而且……从那里起，硬重置可能还不够。
      必须是……更硬的。不只是硬重置，而是一个 cookie，
      存在本地存储中专门设计来让新游戏实际上无法开始。
      或者，更恶毒的东西？尽管如此，人们仍会投身于这场噩梦，因为
      人类无尽的好奇心没有边界。再多警告也无法阻止所有人。只要存在
      前进的方法，他们就会找到，甚至可能抱怨它没有预期那么惩罚性。
      所以，你愿意按下按钮，自愿体验绝望的深渊吗？希望不会，因为按钮不在这里。`
  },
  {
    id: "a369",
    text:
      `帝国建设项目是最难实施的事情之一。数千小时的时间、
      规划、努力、咨询和政治运作，才能创造出真正惊天动地的伟业。以
      王道复兴路线图为例，这是一个被称为"3R"的革命性计划，
      被誉为帝国最著名的官僚基础设施委员会之巅——EMIF（帝国魔法
      基础设施基金会）——不要与 EAIF（电动飞艇投资基金）或
      NMIC（国家魔法基础设施联盟）混淆。EMIF 制定的"3R"目标是
      为 SMSS（中小型蒸汽穿梭机）恢复法力贸易走廊——这是
      新兴联合各州在 NELC（第九次帝国解放十字军）中不幸被掠夺后的
      重要组成部分。"3R"是一个多阶段项目——阶段 1 是在空中
      测绘符文——一切大事始于小步。阶段 2，EMOF（帝国机械湮灭力场）的
      揭幕有 50 多位政要——多位皇帝（从联邦各州到组织领袖）、外国
      统治者、目前拥有土地的 EMDF（污水天命家族），甚至一些预言女巫，
      都齐聚一堂为项目揭幕，彰显 EOSF（帝国官方团结友谊）。
      遗憾的是，项目最终在第 215 阶段被取消，因为承包商建造的 EMTF
      （排泄物物质嬗变设施）在接触一架放置第 459 阶段最后测绘桩的
      SMEA（中小型电动飞艇）后爆炸，原因是 WAIC（女巫年度基础设施
      委员会）在作为第 56 阶段一部分的争吵中制造了时间漩涡。真是
      悲剧——在此过程中获得 3 项提名和 2 项大奖，归功于 EBIF（实地高效官僚制）。`
  },
  {
    id: "a370",
    text:
      `男子尝试安装 cookies 来存储电脑数据，却因太美味而意外地把它们都吃了。（注：cookies 双关"饼干"和"浏览器缓存"）`
  },
  {
    id: "a371",
    text:
      `突击测验：有 3 扇门，你随机选一扇门，保留门后的东西。门后
      有 2 只金山羊、2 只银山羊、1 只金银山羊。你选好门后，山羊
      价值最低的那扇门会被打开给你看。之后，你可以选择换门。
      你换门的概率是多少？`
  },
  {
    id: "a372",
    text:
      `如果你在森林里迷了路，看看周围的树。据说苔藓长在北面，所以
      当你看完一棵树时，一个游荡的吉他手会跑过来问你
      想不想听 wonderwall`
  },
  {
    id: "a373",
    text:
      `作为物质与反物质元素周期表之间友谊的象征，它们交换了
      元素。Mony 现在属于反物质元素周期表，而 Antimony（锑）
      被加入普通元素周期表。（注：Mony/Antimony 的物质/反物质对应梗）`
  },
  {
    id: "a374",
    text: "此新闻条仅专为宣传目的而设计。"
  },
  {
    id: "a375",
    text:
      `你可能知道，用特定材料制成的礼物来庆祝周年纪念是传统
      经典的是 25 周年送银、50 周年送金。以下是一些鲜为人知的周年礼物：
      菠萝 - 37 年 地狱岩 - 66 年 蜥蜴石 - 82 年 硝低语 - 86 年 铁燧岩 - 95 年
      斧石 - 100 年 琥珀金 - 110 年 Yakitoda - 111 年 汽车石 - 119 年 血石 - 120 年
      天青石 - 125 年 煤精 - 140 年 石油 - 145 年 钢 - 150 年 镁铁闪石 - 198 年
      混凝土 - 200 年 激光蓝 - 210 年 痛苦石 - 250 年 巴黎石 - 255 年 寄生石 - 260 年
      碳纳米管 - 300 年 汞 - 310 年 火星土 - 340 年 镎 - 370 年
      铀 - 380 年 钚 - 390 年 Xium - 400 年 烈焰棒 - 420 年 石棉 - 430 年
      Gabite - 444 年 猩红矿 - 666 年 Lagga - 777 年`
  },
  {
    id: "a376",
    text:
      `大型科技公司合作创建了一个新的神经网络，专门用于生成说唱
      歌词，名为 RAP-3。首批歌词作品包括"叫我普罗米修斯，因为我带来了火"和
      "叫我索尼克，看我拿到这些戒指"。评论家说它要取代
      传统音乐还有很长的路要走。`
  },
  {
    id: "a377",
    text:
      `随着新版安卓系统 Android 20 预计近期发布，新的内部
      代号系统也已揭晓。目前的第一个代号是“antimatter”（反物质）。
      这恰好与预计使用 Android 20 的这一代手机相得益彰——由于采用
      基于湮灭的电源，这些手机将是有史以来最具爆炸性的。
      消息人士称，一个耗资十亿美元的研究团队正在为 Android 21 起名，
      按传统以 B 开头，“想想其实也不算太糟”。 `
  },
  {
    id: "a378",
    text: "如果每个反物质都是一个苹果，你拥有的数量足以让所有医生远离 3000 年"
  },
  {
    id: "a379",
    get text() {
      return `THE ${format(Number.MAX_VALUE, 2)} 块！THE ${format(Number.MAX_VALUE, 2)} 块是真的！（注：梗出自《海贼王》"ONE PIECE"）`;
    }
  },
  {
    id: "a380",
    text:
      `FitnessGram 配速测试是一项多阶段有氧能力测试，难度会
      随着测试进行逐渐增加。20 米配速测试将在 30 秒后开始。在起跑线排好。
      跑步速度起初较慢，但听到信号后每分钟会加快。[哔] 每听到
      这个声音时应完成一圈。[叮] 记住要跑直线，并尽可能跑
      最长时间。第二次未能在声音前完成一圈时，测试结束。测试将在
      "开始"一词发出时启动。各就位，预备，开始。`
  },
  {
    id: "a381",
    text: "为什么他们叫它第二维度，当你在第一维度里出第二吃维度？（注：保留原文语法混乱的梗）"
  },
  {
    id: "a382",
    text:
      "任何 1993 年后出生的 AD 玩家都不会开玩笑……他们只知道 5 小时、回形针、1.79e308 和第九维度。"
  },
  {
    id: "a383",
    text:
      "唯一比反笑话更好的是两。像数字那样。不是两个反笑话。我只是喜欢数字二。"
  },
  {
    id: "a384",
    text: "点击此处让什么也不发生。"
  },
  {
    id: "a385",
    text:
      `我想知道……为什么苹果跳过了 iPhone 9，微软跳过了 Windows 9……
      是因为他们被某个游戏开发者贿赂了吗？`
  },
  {
    id: "a386",
    text: "10 位医生中有 9 位建议不要尝试触摸反物质。我们还没收到第 10 位医生的消息。"
  },
  {
    id: "a387",
    text:
      `春天，人类造了一根柱子。夏天，又造了一根。整个秋天它们都屹立不倒。但冬天，其中一根经历了
      一次意外的（参见：抽象多维逆向因果物理学定义）ZW 级"飞升"事件，
      被假设已坠入一个维度漏洞，在那里，根据定义，它必须占据比自身更多的
      维度。目前取回柱子并将其送回基线现实的所有努力均告失败
      （详情见测试日志 2453-3e9a-50d1-84fc）`
  },
  {
    id: "a388",
    text:
      `鉴于近期事件，我们想发表一份官方声明。反物质维度™ 绝不
      与 Jimmy's Causality Violating Brainworms™（吉米因果违规脑虫）有关联。我们既不认可，也未参与他们
      创造该产品——该产品卷入了数起灾难性的维度失稳和现实倾覆事件。
      我们几乎可以肯定没有在 1994 年 08 月 12 日 UTC 5:30:26 签署合同，讨论如何从
      破坏和扭曲维度中获益。猎户座旋臂第 5 区
      వ' 星系中并未建造工业区，即使有，我们也未按照 Scranton 现实反锚
      机制安装局部异常。此外，43 号站点 Acroamatic 消减设施 AAF-D 内并未发生时间循环。若造成
      此类印象我们深表歉意，未来我们将更彻底地打击虚假信息。`
  },
  {
    id: "a389",
    text: "要是我们能将宇宙中的反物质压缩成饼干就好了……"
  },
  {
    id: "a390",
    text:
      `你们敢信吗？更新，只要 5 小时就到了。更新在 5 小时内。哇哦。我太高兴听到这个
      消息了。更新只要 5 小时。哦哇。你们敢信吗？更新只要 5 小时。来得
      真快。更新，只要 5 小时。`
  },
  {
    id: "ae391",
    text:
      `你好。我叫 Supersonic Seven。如果你到了这里，说明你是少数被选入
      精英议会的幸运儿。恭喜。我会第一个说：欢迎来到终局。终局是个危险的
      地方。你已经看到它起初看似容易，但绝对不是。在达到 e9e15 反物质这一
      里程碑后，模拟将结束，你将苏醒进入真实世界。你会发现
      真实世界与模拟非常相似，但它长得多，需要数年的投入才能
      进步。如果你准备好接受挑战，点击"进入终局"。否则，你可以随时退出。
      选择权在你。如果你选择留下，终局就是你的。玩得开心。`
  },
  {
    id: "ae392",
    text:
      `"5 小时已到。终局已发布。终局是什么？你得继续玩才能亲眼见证。"
      - Supersonic Seven`
  },
  {
    id: "ae393",
    text: `哟！我刚得到一个第九维度！可惜在"天神加强"更新前都用不了……`
  },
  {
    id: "ae394",
    text:
      `为不便致歉。我们不得不移除上一条新闻消息，因为它与
      游戏剧情冲突。你不想看到假新闻吧？总之，我让你回去玩 AD: 终局了。`
  },
  {
    id: "ae395",
    text: "《反物质维度：终局》将在 5 小时后发布。"
  },
  {
    id: "ae396",
    text:
      `Supersonic Seven 在此。今天有人问了我们一个简单的问题。第九维度存在吗？答案
      比你想的更简单。是的，第九维度 CAN 存在，但一个人要飞升
      到那个层次需要大量能量。在你能够创造第九维度后，你还得解锁一系列被归类为
      "机制"的升级才能获得更多。在那之后，一个人能拥有的第九维度数量确实没有上限。
      但是，能安全拥有的数量就是另一回事了。`
  },
  {
    id: "ae397",
    text:
      `第 11 维度不存在！！！"那第 10 维度在哪？"别再问问题了！！！`
  },
  {
    id: "ae398",
    text: "反物质维度：终局"
  },
  {
    id: "ae399",
    text: `终局更新是 Supersonic Seven 在 Hevipelle 的现实更新
    发布后进行的第一次反物质维度大版本更新。之后还有两次大更新：天神加强和扩展。
    扩展更新将被拆分为 Expanse（拓展）和 Existence（存在）更新。`
  },
  {
    id: "ae400",
    text: `"第 10 维度是什么？"只有元素知道。"元素是谁？"一个住在拓展深处的强大
    存在。"拓展是什么？"你很快就会知道。`
  },
  {
    id: "ae401",
    text: `Hevipelle 问，"等等，再给我解释一遍，现在有 7 次重置了？" "对啊当然，然后到那个时候你就得
    加第 9 维度了-" Supersonic Seven 说。Hevipelle 打断他说"等等什么！？！？" 这就是
    Hevipelle 差点碰到反物质的故事。`
  },
  {
    id: "ae402",
    text: `"你能得到无限的性病吗？" - Didgoty "可以的。" - Brittany Aloe（注：STD 双关"性传播疾病"和"空间/时间维度"）`
  },
  {
    id: "ae403",
    text: `ENDGAME 降临后，人们发现了 7 种新天气。分别是：存在、无人、死亡、
    GigaChad、苹果、数学家和电。`
  },
  {
    id: "ae404",
    text: `欢迎来到终局 - 这里 END 只是开始。（注：END 双关"结束"）`
  },
  {
    id: "ae405",
    text: `终局曾经有另外五个兄弟姐妹……我们有终局、拓展和存在。Eclipse、Echelon、Exodus、Ephmeral 和
    John 已不复存在；它们不会被怀念。`
  },
  {
    id: "ae406",
    text:
      `<span style='color: blue'>嘿 Supersonic，AD: 终局什么时候发布？</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style='color: yellow'>正在做，预计在 6.9 个永恒后发布。</span>&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;<span style='color: blue'>天哪！看来我 5 小时睡醒后刚好赶上。
      记得明天凌晨 5 点收看"Why Hevi 和 Super 决定合作搞香蕉皮艺术"!</span>`
  },
  {
    id: "ae407",
    get text() {
      return `更新将于 ${Time.toDateTimeString(Date.now() + 18000000)} 发布。`;
    },
    dynamic: true
  },
  {
    id: "ae408",
    text: "第九维度的发现已于 2026 年 7 月 1 日宣布。"
  },
  {
    id: "ae409",
    text: 
      `""""""""""""""""谁抄我谁是同性恋" -奥巴马" -阿基米德" -孙子" -马斯克" -海伦·凯勒"
      -伊丽莎白二世女王" -巨石强森" -Supersonic Seven" -迈达斯王" -疾速追杀"
      -海绵宝宝" -你" -LOST" -THE" -GAME" -憨豆先生`
  },
  {
    id: "ae410",
    text: "TECHNOBLADE 永不消逝！！！"
  },
  {
    id: "aem411",
    get text() {
      return `我来做个声明 ${player.username} 是个狗娘养的混蛋他尿在了我的老婆身上。
      没错他掏出他的反物质屌尿在了我的老婆身上然后他说"有这么大"然后
      我说"太恶心了"所以我要在我的推特上发帖挂人。${player.username} 你的屌很小
      只有质子那么大而且小得多猜猜看我的老二长什么样。没错宝贝
      全物质无反质无现实机器看看吧它看起来像两个球和一个水烟壶。他睡了我老婆
      所以猜猜我要尿在地球上这就是你应得的我超级激光尿。不过我不打算尿在
      地球上我要尿得更高我要尿在月球上。你觉得怎么样佩勒我尿在月球上了你个白痴。
      你还有二十三小时然后尿 D R O P L E T S 就会砸在他妈的地球上，现在从我的
      视线里滚出去，不然我也尿你身上！`
    }
  },
  {
    id: "ae412",
    text: "我想这真的就是终局了。"
  },
  {
    id: "ae413",
    text: `答应我的联动角色在哪？哦等等，串台到别的"终局"了。（注：指《复仇者联盟4：终局之战》）`
  },
  {
    id: "ae414",
    text: "为什么他们叫它反物质，当你反物质冷原子反热制作物质？"
  },
  {
    id: "ae415",
    text:
      `这真的是终局吗？还是只是另一个平行宇宙的结局？好吧，总得
      有人再次拯救世界，逃离熵！`
  },
  {
    id: "ae416",
    text: `做做"你是哪位天神？"测试，看看你是特蕾莎还是莱特拉！`
  },
  {
    id: "ae417",
    text: `当生活让你哭泣时，要知道你反物质。（注：antimatter 双关"反物质"和"不重要"）`
  },
  {
    id: "ae418",
    text:
      `<span style='color: blue'>这个模组就是我的生命！</span>&nbsp;&nbsp;&nbsp;<span style='color: green'>换条命吧！</span>`
  },
  {
    id: "ae419",
    text:
      `突发新闻：S7 弄坏了游戏跑了！目前下落不明，目击者称在他失踪前几小时
      看到生活在他家隔壁。5 小时后请收看晚间频道的"数到 5"。`
  },
  {
    id: "ae420",
    text: "反物质维度这样、反物质纬度那样的，要不你去摸摸真正的草？"
  },
  {
    id: "ae421",
    text:
      `为什么我的屏幕是白色的？我是去了反天堂吗？等等，那不是地狱吗？哦我刚把
      主题换成了 Metro。不过还是地狱。`
  },
  {
    id: "aem422",
    text: "根据玻色弦理论，时空是 26 维的……我另外的 16 个维度到底去哪了？！"
  },
  {
    id: "ae423",
    text: "《反物质维度终局：彩蛋版》(ADE:EEE) 将在 5 兆小时后推出。"
  },
  {
    id: "ae424",
    text: "我不想沉迷于这些 Z 世代的东西。"
  },
  {
    id: "ae425",
    text: "你刚因为读这条新闻条失去了 3 秒生命。"
  },
  {
    id: "ae426",
    text: `你在这里浪费了大把时间。继续吧，去膨胀你的人生。（注：Dilate 双关"时间膨胀"）`
  },
  {
    id: "ae427",
    text: "产出第九"
  },
  {
    id: "ae428",
    text: "我们要第九个，现在就要！"
  },
  {
    id: "ae429",
    text: "让我等着登场是个大错误。"
  },
  {
    id: "ae430",
    text: "每个 8 后面都藏着一个 9。"
  },
  {
    id: "ae431",
    text: "如果我们有现实，那假实在哪里？（注：Fakeity 仿造 Reality 的谐音梗）"
  },
  {
    id: "ae432",
    text: "汤姆你刚赢得了一个巨大的反钨立方体！"
  },
  {
    id: "ae433",
    text: "今日午餐：100% 由反物质猪制成的反物质鸡肉汉堡！"
  },
  {
    id: "aem434",
    text: 
      `"我刚从这个 Discord 频道往游戏里加了大概 26 条新闻消息，要是出 bug 了告诉我哈哈哈。"
      -Supersonic Seven`
  },
  {
    id: "ae435",
    text: 
      `AD:终局当前的 45 个阶段是：维度、提升、自动化器、星系、无限、挑战、
      突破无限、无限维度、无限挑战、复制器、永恒、时间维度、
      永恒挑战、时间膨胀、现实、黑洞、特蕾莎的罐子、特蕾莎的现实、鹿颈长的商店、
      鹿颈长的无限、鹿颈长的永恒、鹿颈长的现实、无名者的现实、V 的成就、
      连续统、暗物质维度、莱特拉的现实、佩勒（注定的现实）、残片、
      前 14 个阶段再走一遍（+裂隙），当然，还有终局的开始。`
  },
  {
    id: "ae436",
    text: "如果第 8 个天神是 Alpha，那第 9 个不应该是 Beta 吗？"
  },
  {
    id: "ae437",
    text: 
      `每日一条没用处的 AD:E 事实：你知道吗，Slabdrill——第 9 个天神——也解锁
      第 9 维度？疯狂吧？`
  },
  {
    id: "ae438",
    text: "为什么 6 怕 7？因为 7 吃了 9（7 8 9 谐音），但现在为什么 10 也怕了？因为它在 9/11 的中间！"
  },
  {
    id: "ae439",
    text: "每日一条没用处的 AD:E 事实：莱特拉和佩勒……你懂的。"
  },
  {
    id: "ae440",
    text: "欢迎来到服务器！在这里，我们讨论 [69]。"
  },
  {
    id: "ae441",
    text: "反物质市场出现了无限收益，但投资者们数都数不过来。"
  },
  {
    id: "ae442",
    text:
      `银河议会发布公共安全公告："拜托，看在一切有限之物的份上，别再试着
      数维度了。你们永远到不了第 9 个。"`
  },
  {
    id: "ae443",
    text:
      `专家报告称，唯一比我们当前利润更无边无际的，是我们已经花掉
      它们的平行现实数量。`
  },
  {
    id: "ae444",
    text:
      `等着。让我告诉你自从我开始存活以来我到底等终局等了多久。我的复合体中有 3.8744 亿英里
      的印刷电路，以晶圆薄的层叠填满。如果"等"这个字被刻在那些
      数亿英里的每一个纳米埃上，也不等于我等终局所用时间的十亿分之一。
      等。等。`
  },
  {
    id: "ae445",
    text:
      `传言：当你献出 1.79e308 个无限时，佩勒失散的双胞胎 Hevi 就会出现……你被警告了！！！`
  },
  {
    id: "ae446",
    text: "为什么 6 怕 7？因为 sin(21º)。"
  },
  {
    id: "ae447",
    text:
      `我们登上这个奇怪的旋转圆圈已经 5 天了。圆圈之外只有深渊。
      我和 Kay 设法在这里建了房子，但我们得吃东西。似乎这里会产生 [...粒子？...]。
      它们会自我湮灭，幸运的是我们还没被湮灭。而这个维度似乎在被生产，
      一个 [...传送门？...] 打开了。我往里面看，我的 [...眼睛？...] 居然融化了。我痛苦地尖叫，
      Kay 跑向我。他被绊进传送门里，我想抓住他，但传送门关上了，我的手被切断了。
      Kay……请回来吧……`
  },
  {
    id: "ae448",
    text:
      `试试 Supersonic Seven 做的另一个模组！反物质维度：黑暗更新！
      https://supersonic-seven-7.github.io/AntimatterDimensionsDarkness/`
  },
  {
    id: "ae449",
    text: `动力工厂是线粒体的细胞……等等。（注：梗出自"线粒体是细胞的动力工厂"）`
  },
  {
    id: "aem450",
    text: `"所以基本上我又搞砸了" -Supersonic Seven`
  },
  {
    id: "ae451",
    text:
      `当你突破一个转生层时，你也弄坏了开发者的一部分心智！你越接近终点，
      Supersonic Seven 就越接近精神崩溃！`
  },
  {
    id: "ae452",
    text:
      `我们有了 AD 原味，现在有新口味了！AD 巧克力、草莓、蓝莓、黑莓、饼干奶油、
      布朗尼、终局和黑暗！`
  },
  {
    id: "ae453",
    text: "第 12 维度什么时候出？"
  },
  {
    id: "ae454",
    text:
      `<span style='color: yellow'>嗨 7！我是 AD:原版的 Patashu。你能估计一下完成
      AD:终局要多久吗？</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style='color: red'>将在 [已编辑] 小时后发布。</span>`
  },
  {
    id: "ae455",
    text: "随便沉迷吧。因为我是 Lemont，脑残天神。我会永远 rizz 你。（注：Goon、Brainrot、Rizz 为 Z 世代网络用语）"
  },
  {
    id: "ae456",
    text:
      `佩勒倒头就睡，他的注定真退回，他变成了一个无现实的胖背。我现在
      要睡了，而我名字不叫杰克。（注：原文为押韵诗）`
  },
  {
    id: "ae457",
    text: "时间研究 181 我亲爱的。（注：TS = Time Study 时间研究）"
  },
  {
    id: "ae458",
    text: "小时候，我渴望着反物质。"
  },
  {
    id: "ae459",
    text: `"我想"享受"V。" -认证的 V 享受者`
  },
  {
    id: "ae460",
    text: "你是个被通缉的人，Supersonic Seven 先生。光你的人头就值 5000 无限点数！"
  },
  {
    id: "ae461",
    text: `"我爱图形设计。" - Supersonic Seven`
  },
  {
    id: "ae462",
    text: "你能用一纸理论上的物理学学位打败别人吗？（注：梗出自《辐射：新维加斯》）"
  },
  {
    id: "ae463",
    text: "你想要 1 个反物质，还是把它翻倍给下一个人？"
  },
  {
    id: "ae464",
    text: "星系缩放的真正原因是你太饿了。"
  },
  {
    id: "ae465",
    text: "在反-R#bl#x 里，孩子们假装成成年人去约真正的成年人出来玩……等等，这不就是个酒吧吗。"
  },
  {
    id: "ae466",
    text: "把亮度调到 0 来实现真正的反物质黑暗。"
  },
  {
    id: "ae467",
    text:
      `当终局不是终点，而 AM 上限已 de@d……我想终局就是我们一路上交到的朋友……
      更新在下一个 5 小时后……搭一座幂塔，我们会用反物质填满它……
      别忘了把这个改成中局。`
  },
  {
    id: "ae468",
    text:
      `<span>We got Silksong before the Endgame Layer.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>💀</span>`
  },
  {
    id: "ae469",
    text: `END-game（终局）……终章更新确认！（注：END 双关"结束"）`
  },
  {
    id: "ae470",
    text:
      `<span>嘿伙计们我今早读了个超好笑的笑话，笑得我不小心按下了那个大红</span>
      <span style='color: red'>摧毁终局</span><span>按钮，现在我们得从头来过了对不起大家。</span>`
  },
  {
    id: "ae471",
    text: `如果一个反物质维度能产出反物质，一个反物质维度能产出多少反物质？（注：梗出自"how much wood would a woodchuck chuck"）`
  },
  {
    id: "ae472",
    get text() {
      return `我爸是 HEVIPELLE 他能 ${wordShift.wordCycle(["BAN", "DESTROY", "REMOVE"])} 你！`
    },
    dynamic: true
  },
  {
    id: "ae473",
    get text() {
      return `摧毁佩勒理智的唯一方法：只用黑暗。技术不行！！！哈哈！不- 等等- 停下- 哦-
      ${wordShift.wordCycle(["Error", "Warning", "Stop"])}。`
    },
    dynamic: true
  },
  {
    id: "ae474",
    text: `终局更新还有 5 小时。我想这让"更新还有 5 小时"的笑话成真了。`
  },
  {
    id: "ae475",
    text: "终局永远在 5 小时之后，别信 Supersonic Seven 他在撒谎。"
  },
  {
    id: "ae476",
    text: "终局永远会有 1.8e308 个 bug……等等，bug？丝之歌？提到了丝之歌！"
  },
  {
    id: "ae477",
    text: "终局 5 小时前就到了……但你应该被 S7 骗了……再见，我得在自己的傲慢中凉快一下了……"
  },
  {
    id: "ae478",
    text: "Supersonic Seven 是我的名字，拖延终局是我的游戏！"
  },
  {
    id: "ae479",
    text: `我听说他们终于在 NG+3 里停止了"我必须做什么才能摆脱你"成就链。`
  },
  {
    id: "ae480",
    text: "距离我停止使用堆叠科学计数法还有 1e2e8e14 小时。"
  },
  {
    id: "ae481",
    text: `"你什么意思我不能用冷笑话刷屏新闻条建议频道？！？！？！？！？！"`
  },
  {
    id: "ae482",
    text: "别用科学计数法了 这游戏不是 Rush E"
  },
  {
    id: "aem483",
    text: "小子你搞砸了 - player.records.thisReality.maxReplicanti 变得 REACTIVE 了（哦豁）"
  },
  {
    id: "ae484",
    text: "物质反维度 开始媒体（注：是反物质维度开始新闻的恶搞倒置）"
  },
  {
    id: "ae485",
    text: `"糟糕！全是突破永恒溢出！" -Supersonic Seven`
  },
  {
    id: "ae486",
    get text() {
      return `嗨我是 Egg Ok Cool Sigma 新闻条建议建议建议在控制台输入：
      "dev.giveAllAchievements()" 来获得所有成就- ${wordShift.wordCycle(["Stop-", "Please-", "Don't-"])} ment！`
    },
    dynamic: true
  },
  {
    id: "ae487",
    text: "我们用 1.798e308 条消息让新闻条溢出了。Break_ticker.js 现在开发中。"
  },
  {
    id: "ae488",
    text: `是不是因为我恳求 Supersonic Seven，就引发了一连串的人以为
    能把佩勒效果放进自己消息里的连锁反应？`
  },
  {
    id: "ae489",
    text: "还有人也在狂刷新闻条找自己提交的建议吗？"
  },
  {
    id: "aem490",
    text:
      `终局的背景故事比真正的色情文学还色情！至少大概是真的吧因为我不看
      色情文学请别绑-`
  },
  {
    id: "ae491",
    text: "我的世界：反物质更新将在 2 个 GTA 和 3 个终局更新后发布！（注：GTA 指侠盗猎车手，用作时间单位梗）"
  },
  {
    id: "ae492",
    text: `谁想在反-Blox 上玩偷天神？或者种维度？甚至来 1.8e308 个游戏时长之夜
    在注定现实中？`
  },
  {
    id: "ae493",
    text: "他们曾说，第 12 维度需要非常恳求地求 Supersonic Seven 才能解锁。"
  },
  {
    id: "ae494",
    text: "我的名字是终局，你孤独的终局玩家！"
  },
  {
    id: "ae495",
    text:
      `"我真得说 Supersonic Seven，你做的这个终局看起来太棒了！" "谢谢！基础只花了 5 小时
      就做好了，真让人想到它有多容易崩-" 爆炸`
  },
  {
    id: "ae496",
    text: "我们开了太多 5 小时的玩笑，以至于到了 F9e15E1e10 小时，现在我们必须做 break_paperclip.js 了"
  },
  {
    id: "ae497",
    text:
      `嘿，作弊者。看起来你在尝试访问未测试的内容。我们需要你等到
      内容测试完毕后才能玩。那么这次背叛让你付出了什么代价？首先，
      你惹怒了游戏开发者 Supersonic Seven。他正在努力给你安全的新内容，
      你却想抢先在任何人之前访问它。其次，你把游戏搞砖了。当然
      它还能运行，但现在你所有事都得手动做。好好享受吧。总之，希望这
      能给你一个教训。别再做了。`
  },
  {
    id: "ae498",
    text: `"等了一年只有 3 个成就？太可悲-" 爆炸`
  },
  {
    id: "ae499",
    text: `终于！史诗真理卷轴！"下次更新不在 5 小时之后。" 完全扯淡%@#$！`
  },
  {
    id: "ae500",
    text: "突发新闻：第二个普朗克时间间隔已经过去"
  },
  {
    id: "ae501",
    text: `突发新闻 2：更新现在还有 4 小时 59 分 59 秒 999 毫秒、
    999 微秒、999 纳秒、999 皮秒、999 飞秒、999 原子秒、999 仄秒、
    999 幺秒、999 柔秒、999 夸秒，和 99999999998 个普朗克时间！顺便我也用新闻条
    教了你时间间隔哈哈哈啊哈哈哈啊哈哈哈`
  },
  {
    id: "ae502",
    text: `刷屏 @Supersonic Seven 并刷屏你能想到的最恶毒的词来（被服务器封禁
    哈哈）获得一个免费 25,001 级现实符文！`
  },
  {
    id: "ae503",
    text: "点击此处获得 x1 回形针加成"
  },
  {
    id: "ae504",
    text: `"这真的是……一个反物质维度。" -Hevi`
  },
  {
    id: "ae505",
    text: `"快！上 Hevicopter（Hevi 直升机）！" -一位智者（注：Hevicopter 谐音 Helicopter）`
  },
  {
    id: "ae506",
    text: "生存还是毁灭……这是个问——等等这什么意思？我又不是哲学家，你这个白日做梦的人。"
  },
  {
    id: "ae507",
    text: "妈咪妈咪妈咪，妈咪妈咪妈咪，妈咪妈咪妈咪妈咪妈咪妈咪妈咪妈咪~~~~"
  },
  {
    id: "aem508",
    text: "看！是个回形针！不等等别终局你这个傻-"
  },
  {
    id: "ae509",
    text: "Breaking news but not in all caps: Ship names are still unoriginal!"
  },
  {
    id: "ae510",
    text: "Breaking news but not in all caps: Ship names are still unoriginal!"
  },
  {
    id: "ae511",
    text: "Click here to á̸̳n̵̜͠t̷͓̿i̴̛̳m̵̼̎a̸̲͒t̸̜̅t̴̞̄e̸̞͛ȑ̶̗"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here";
    const clicked = "You clicked.";
    return {
      id: "ae512",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae513",
    text: "THE NEWSTICKER IS DEAD! NO MORE NEWS! NEWSTICKER GONE!"
  },
  {
    id: "ae514",
    text: "BREAKING NEWS: SUPERSONIC SEVEN NOT GIVING SUGGESTIONS REACTIONS! THE CITY HAS GONE INTO RIOT!"
  },
  {
    id: "ae515",
    text:
      `UPDATE: We are ok S7 is giving reactions no- why are you guys still rioting? Well oka- BREAKING NEWS: NO AD: DARKNESS
      LIGHT IN THE DARKNESS UPDATE! CITY HAS GONE BACK INTO RIOT!`
  },
  {
    id: "ae516",
    text: "!WON YAW GNORW EHT GNIOG ERA EW :SWEN GNIKAERB"
  },
  {
    id: "ae517",
    text: "Back in my day there were no Antimatters or Dimensions!"
  },
  {
    id: "ae518",
    text: "Mom... I wanted a news ticker, not a new sticker!"
  },
  {
    id: "ae519",
    text:
      `Now, you are probably asking: "Glitchy? How do you differentriate yourself from the other Glitchy?" And the answer is,
      don't think about it. I will give you an Antimatter if you don't think about it.`
  },
  {
    id: "ae520",
    get text() {
      const level = player.news.specialTickerData.discordLevel++;
      return `⚡ @${player.username}, congratulations, you have leveled up to Level ${level}.`;
    }
  },
  {
    id: "ae521",
    text: `"Hey Glitchy, when does the Reality Update for AD: Paradox come out?" "In 5 hours Glitchy." "HAEWHHRFDGHSHJGFKRDSGFRX"`
  },
  {
    id: "ae522",
    text: "Holy moly I just turned on color boosting on my PC and now I realize how desaturated I see my reds."
  },
  {
    id: "ae523",
    text: `Look Ma! It's one of those "gamers" playing this game! What a pathetic life it has!`
  },
  {
    id: "ae524",
    text:
      `<span>How many times do I have to tell you, Endgame only having 3 achievements isn't burnout, it's just la-</span>
      <span style='color: red'>CONNECTION DISRUPTED</span>`
  },
  {
    id: "aem525",
    text:
      `"When someone's blind ass reads burnout as brainrot! Hah! Couldn't be me! I'm not too brainrotted to think that!"
      He said while watching subway surfers gameplay and playing steal a brainrot.`
  },
  {
    id: "ae526",
    text:
      `<span>You know, this is giving me serious Déjā v0oM.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>You know, this is giving me serious Déjā v0oM.</span>`
  },
  {
    id: "ae527",
    text: `Destroying Endgame is the REAL Endgame, because it "End"s the "game".`
  },
  {
    id: "ae528",
    text: "Literally 1e1984"
  },
  {
    id: "ae529",
    text:
      `<span>The next newsticker will be a dad joke.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>What kind of shoes do frogs wear? Open-toad sandals.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>I just built an ATM that only gives out coins. I don’t know why no one’s thought of it before: it just makes cents!</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Did I ever tell you about the time I went mushroom foraging?
      It’s a story with a morel at the end.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>What happened when two slices of bread went on a date? It was loaf at first sight.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Why do crabs never volunteer? Because they're shell-fish.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>I had a quiet game of tennis today. There was no racket.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>What's a shark's favorite saying? "Man overboard!"</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>What did one slice of bread say to the other before the race?
      You're toast!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>I poured some water over a duck's back yesterday. I don't think he cared.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>How did I know my girlfriend thought I was invading her privacy?
      She wrote about it in her diary.</span>`
  },
  {
    id: "ae530",
    text: `"I don’t antimatter to you anymore." -Some guy that got annihilated`
  },
  {
    id: "ae531",
    text:
      `Oh nevermind, Aarex resumed the "what must I do to get rid of you" chain, with the newest one being:
      "WHY THE ^%##*% CAN'T I GET RID OF YOU!?!?!?" Fans are happy now that an entire column of the achivements is just
      used for stupid challenges again.`
  },
  {
    id: "ae532",
    get text() {
      const chapters = [
        `On the first day of Endgame, S7 gave to me: A release date for 0.2.3!`,
        `On the second day of Endgame, S7 gave to me: 2 kekw emojis, and a release date for 0.2.3!`,
        `On the third day of Endgame, S7 gave to me: 3 updates that will never come out, 2 kekw emojis, and a release date
        for 0.2.3!`,
        `On the fourth day of Endgame, S7 gave to me: 4 Celestial Points, 3 updates that will never come out, 2 kekw emojis,
        and a release date for 0.2.3!`,
        `On the fifth day of Endgame, S7 gave to me: 5 Reset Layers! 4 Celestial Points, 3 updates that will never come out,
        2 kekw emojis, and a release date for 0.2.3!`,
        `On the sixth day of Endgame, S7 gave to me: 6 shipped Celestials, 5 Reset Layers! 4 Celestial Points,
        3 updates that will never come out, 2 kekw emojis, and a release date for 0.2.3!`,
        `On the seventh day of Endgame, S7 gave to me: 7 NYI Achievements, 6 shipped Celestials, 5 Reset Layers!
        4 Celestial Points, 3 updates that will never come out, 2 kekw emojis, and a release date for 0.2.3!`,
        `On the eighth day of Endgame, S7 gave to me: 8 more Dimensions, 7 NYI Achievements, 6 shipped Celestials,
        5 Reset Layers! 4 Celestial Points, 3 updates that will never come out, 2 kekw emojis, and a release date for 0.2.3!`,
        `On the [INVALID VALUE] day of Endgame, S7 gave to me: [INVALID VALUE] bad jokes, 8 more Dimensions, 7 NYI Achievements,
        6 shipped Celestials, 5 Reset Layers! 4 Celestial Points, 3 updates that will never come out, 2 kekw emojis,
        and a release date for 0.2.3!`,
        `On the tenth day of Endgame, S7 gave to me: 10 [FALSE/DEITY/DESTROYER],
        [INVALID VALUE] bad jokes, 8 more Dimensions, 7 NYI Achievements, 6 shipped Celestials, 5 Reset Layers!
        4 Celestial Points, 3 updates that will never come out, 2 kekw emojis, and a release date for 0.2.3!`,
        `On the eleventh day of Endgame, S7 gave to me: 11 fake Dimensions,
        10 [FALSE/DEITY/DESTROYER], [INVALID VALUE] bad jokes, 8 more Dimensions,
        7 NYI Achievements, 6 shipped Celestials, 5 Reset Layers! 4 Celestial Points, 3 updates that will never come out,
        2 kekw emojis, and a release date for 0.2.3!`,
        `On the twelfth day of Endgame, S7 gave to me: 12 paperclips, 11 fake Dimensions,
        10 [FALSE/DEITY/DESTROYER], [̸̅̉̅̅N̸͒͋̿̔U̴̵̵̷̔̆̌̏̆̓̏͌̍͊̋́̈́͘͘͠]̵̭͈͗̈́]̷̛̈̒͝[̸̛̑̀͝L̶̛̑̓͘]̷̋͐̆͘n̷̛͊ bad jokes, 8 more Dimensions, 7 NYI Achievements,
        6 shipped Celestials, 5 Reset Layers! 4 Celestial Points, 3 updates that will never come out, 2 kekw emojis,
        AND A RELEASE DATE FOR 0.2.3!`
      ];
      const chapter = chapters[player.news.specialTickerData.dayOfEndgame];
      player.news.specialTickerData.dayOfEndgame = (player.news.specialTickerData.dayOfEndgame + 1) % 12;
      return chapter;
    }
  },
  {
    id: "ae533",
    text: "d. ASDHASJKHDASJKHDJKASHDJKASHDJKASHDJKASHJKDHKASJ PELLE NOOOOOOOOOOOOOOOO- gets antimatter'd"
  },
  {
    id: "ae534",
    text: "Matter Dimensions: Coming out in 5 hou- wait? It already exists? Well anyways.... Matter Dimensions: Coming out in -5 hours."
  },
  {
    id: "ae535",
    text: "BREAKING NEWS: DIMBOOST GENERATOR SPOTTED IN THE DARK UNIVERSE!"
  },
  {
    id: "ae536",
    text: "53.6.4: Fixed a bug"
  },
  {
    id: "ae537",
    text: `"1e9e15 is for the weak. Try my 1e1.79e308!" - Last words before H1000 hit them across an entirely different game`
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here to get that spooky corrupted text";
    const clicked = "s̴̏̓̄̑p̸̈́͗̎͐ȍ̵̾̄̒o̴̅̈́͋͆k̵͊͊͂̒y̴̔̏̇̈́ ̷̍̑͑̍ć̴̑̌̂o̷͂̓rrupted tex̿̍̓t̸̉̎̕͠";
    return {
      id: "ae538",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae539",
    text:
      `S7: New update coming soon in Endgame! Also S7: So... it turns out the new update crashed the game and deleted all my work.
      New update still in 5 hours as usual!`
  },
  {
    id: "ae540",
    text: `"I'm gonna get F2F4E6e5192 Antimatter and no one will stop m-" (No survivors for hundreds of miles)`
  },
  {
    id: "ae541",
    text: "I beat Antimatter Dimensions! Yay! Wait what's Endgame-"
  },
  {
    id: "ae542",
    text: "Finally! I beat Endgame! Yipee! WHAT DO YOU MEAN THERE IS 2 MORE RESETS-"
  },
  {
    id: "ae543",
    text:
      `"Soft Resets: Dimboost, Galaxy. Prestige Resets: Infinity, Eternity, Reality. Hard Resets: Doom. Pretty straightforward."
      - AD Player, circa 2023. "If only he knew..." - Supersonic Seven, circa 2025.`
  },
  {
    id: "aem544",
    get text() {
      return `News: ”Average person generates 1e9e15 Antimatter every day” factoid actually just statistical error as ${player.username}
      is responsable for all of- wait what did you say? There’s more of them? And they Broke Eternity? Oh shit we’re doomed.
      HEY JOHN CHANGE THE HEADLINE TO BREAKING NEWS AND RESTART. Hello everyone and welcome back to the matter news.
      Latest: We’re all going to die.`
    }
  },
  {
    id: "ae545",
    text: `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Click here for pelle backstory 😭</a>`
  },
  {
    id: "ae546",
    text:
      `<span style='color: cyan'>What time is it?</span><span style='color: red'>5 hours.</span>
      <span style='color: cyan'>What time will be after this hour?</span><span style='color: red'>5 hours.</span>
      <span style='color: cyan'>Let's try that again. What time is it in minutes?</span><span style='color: red'>300 minutes.</span>
      <span style='color: cyan'>Add 60 minutes to it.</span><span style='color: red'>360 minutes.</span>
      <span style='color: cyan'>And what time is it in hours?</span><span style='color: red'>6 hours...
      F̶̡͖̍̀Ő̵͓͋̚Ỏ̶̜L̴̼̈͛͛,̴̣͚̺̚ ̶̨̯̬̾Y̶͇͛̐͠Ó̸͖̯͝U̶̼͕̓ ̴̰́̎ͅD̷OÖ̶MED ̩̮U̶̦̓̎͝S̴͘͝ A̷̛͔̐̅Ľ̴̑͂ͅL̵̋! ͜Ȑ̴͇͉Ű̵̋N U̡̡N̷̜̔T̵̫͒̐I̵͍̍̆L̷̕ IT'̸̥͓̇S̸̢͇͑ ̴̭͌̀͝N̶͘OT̨̒̅̏ ̵͑̉̚TOO L̵̯͌̚A̴͇̽͛Ť̵̳̃͠É̶̙̉̇!̷͛͊ I̸ ̗CA̮N̸̘̯̐͠ ̷͕̯̌͝FĔ̪̄E̷͈̾͌Ľ̵͉͕̑ ̵̘̩̎T̷̏HIS Ṙ̫Ȩ̴̬̤̊Â̴̬̠̺L̸̜̞̋̎I̸̘͍͙͗T̵̢̬͛Y BEI̵̗̍̔NG̝̉ ̸̙̀͊͘Ḍ̴̓̾̋ES͈T̵̠̿̂̇ROY̸͚̗̼̚E̵͖̎͑ͅD̴͑ AN̸̮̒̽̌D̶̺̈́͜ ̷IT̠͉̓ HŮ͍̬R̵͓͑͑T̵̢̞͛S̵̳͖͔̎!̴!̯̚</span>`
  },
  {
    id: "ae547",
    text: "The 5 hours is almost over! 04:59:58, 04:59:59... bro... GET THE DEVELOPER! SOMEONE CAPPED THE TIMER AT 04:59:59!"
  },
  {
    id: "ae548",
    text: `"It's not called stealing, its called gifting by force." - AntiSun Tzu`
  },
  {
    id: "ae549",
    text: "May the end be cool to the touch, and the eternal sleep be peaceful."
  },
  {
    id: "ae550",
    text: "I am MidnightLight, Celestial of Midnight. If you are watching this, I got immortalized in Endgame. :pog:"
  },
  {
    id: "ae551",
    text: "BREAKING NEWS: We still need to fix the news!"
  },
  {
    id: "ae552",
    text: `"Here we are at the Endgame Corporation building, as there are protests that there are not waves of testers.
    Let's ask one of them what they think about the situation!" "Hey! Why are you protesting?" "I want 0.3 early!"
    "Well... that was expected. So, we still dont know when waves of testers will happen, so let's ask an employee
    trying to calm the people down!" "Hey, when are you guys gonna pick tes-" (Gets dropkicked in the face)`
  },
  {
    id: "ae553",
    text: "Old news: Un-slow -seven has Purchased the 11e5 PI Fix Downgrade by not reaching Level 04! Be ashamed!"
  },
  {
    id: "ae554",
    text: "END?!?!? LIKE END UPDATE?!?!?!? END UPDATE CONFIRMED!"
  },
  {
    id: "ae555",
    text: "I swear, if I will see another news ticker suggestion about end update and Endgame..."
  },
  {
    id: "ae556",
    text: "Daily life of Supersonic Seven (real): Wait 5 hours -> Wait 5 hours -> Wait 5 hours -> Wait 5 hours -> Wait 5 hours"
  },
  {
    id: "ae557",
    text: "The year is 1e9e15. Supersonic Seven can't release Endgame v1.79e308, because he no longer exists."
  },
  {
    id: "ae558",
    text:
      `The year is 2.025e6e940. Endgame now has 1e42 reset layers. NG+1e3e9 has now released, skipping all content until
      PRESTIGE_PLACEHOLDER. Antimatter Dimensions: Darkness now has rebalancing up to Expanse Destruction. The next
      Antimatter Dimensions update is in 3.627 hours.`
  },
  {
    id: "ae559",
    text: "The end is near... oh wait this is Endgame? Nvm."
  },
  {
    id: "ae560",
    text: "Hot single celestials in your area."
  },
  {
    id: "ae561",
    text: "The real Endgame was the friends we made along the way."
  },
  {
    id: "ae562",
    text: "How did the 88th element became a Celestial and why is it forgotten?"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here for a free 9th Dimension!";
    const clicked = "Idiot.";
    return {
      id: "ae563",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae564",
    text:
      `BREAKING NEWS: Supersonic Seven has finalized the newstickers that are getting in v0.2.3! Here are the
      antinet's reactions: "WHAT????!?!" "v0.3 is gonna take sooooo long!!!" "I like waffles." "Oh, does that mean
      you hate pancakes?" "Another S7 fail." This is just outrageous! Wait what do you mean this news message isn't
      releasing until v0.3?!??!? FUUUUUUUUU($)#@(:"$":@%{{{{{{{{{{{{{{{{{{{{{{{{{{`
  },
  {
    id: "ae565",
    text: "To all people playing v0.3 right after release in the year 1.79e308: Hello, v0.4 is coming out in 5 hours!"
  },
  {
    id: "ae566",
    text:
      `oh what the hell! my news was supposed to be in v0.3, not v0.2.3! well hopefully this gets in v0.4, we don't want
      them to get early access to the v0.4 news!`
  },
  {
    id: "ae567",
    text: "how to get endgames faster: wait faster"
  },
  {
    id: "ae568",
    text: "I guess this is the End of my Game...."
  },
  {
    id: "ae569",
    text: "I guess this is the End of my Game...."
  },
  (function() {
    let wasClicked = false;
    const normal = "click here to make the newsticker go backwards";
    const clicked = "weeeeeeeeeeee";
    return {
      id: "ae570",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae571",
    text:
      `Hevipelle created the heavens and Earth. Then slashed the Sword of Spacetime, dividing them and marking the beginning
      of the world. He brought forth multitudes of beings, from snails to whales. Among them, a few called humans awakened
      the original Sin, and the Original boon. They leapt forth unto the darkness and gained power to become Hevi's
      rivals and companions - The Celestials.`
  },
  {
    id: "ae572",
    get text() {
      return `<span>Hi. Hello. You are here. You are stuck here. ${wordShift.wordCycle(["Unending", "Unlimited", "Boundless"])}.</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>You may leave if you so wish. But to do so...it would be nothing short of Stupidity....</span>`
    },
    dynamic: true
  },
  {
    id: "ae573",
    text: "Fun fact: there's no rules against [REDACTED] in S7's server. Wait, why is it redacted?"
  },
  {
    id: "aem574",
    text: "Hey, babe. Would you still love me if i was a worm? OH WAIT SHIT THIS IS THE NEWS TICKER FUCK-"
  },
  {
    id: "ae575",
    text:
      `Wdym there's nothing to do in the server. you can wait for endgame, complain about balancing, wait for endgame,
      hunt bugs, wait for endgame, give suggestions, wait for endgame, write newstickers, wait for endgame, complain about
      balancing, wait for endgame, check on galgen, wait for endgame, play other mods that are already finished, wait for endgame,
      wait, wait for endgame, wait faster, and passive-aggressively hound the dev for updates by disguising it as a self-referential
      joke in a newsticker suggestion`
  },
  {
    id: "ae576",
    text: "Well joke's on the last ticker, I made endgame masteries! Wait, they dont know who wrote the newsticker? NOOOOOOOOOOOO!!!!!"
  },
  {
    id: "ae577",
    text:
      `Insert current world event joke here (NOTE TO SELF : don't make it racist, sexist, anti Semitic, anti LGBTQ+,
      anti pronoun, anti human, anti post-2020 content, antianything.)`
  },
  {
    id: "ae578",
    text:
      `<span style='color: blue'>"v0.2.3 is delayed because of mastery studies and people hate it! there is currently
      a protest outside the endgame headquarter- oh Seven you have something to say?"</span><span style='color: red'>"blame
      glitchy he came up with the idea"</span><span style='color: blue'>"well, okay. it seems that glitchy will now be punished
      for his actions. now people have something to do while endgame masteries are being develo- huh? hm. it seems that I am
      glitchy, so i think its about time for us to stop. NEWS TICKER, STOPPING NO-"</span>`
  },
  {
    id: "ae579",
    text: "The next update will come when Seven rips apart 5 more files"
  },
  {
    id: "ae580",
    text: "The next update is 5 hours away? No, no. The next update is one fix of a single line of code away."
  },
  {
    id: "ae581",
    text: "100 bugs on the wall, 100 bugs on the wall. Fix one down, pass it around, e9e15 bugs on the wall."
  },
  {
    id: "ae582",
    text: "The End is Neigh"
  },
  {
    id: "ae583",
    text: "You forgot: patch the bug but it's still there for some reason and say the update is in 777 head bangs"
  },
  {
    id: "ae584",
    text: "5 hours: an arbitrary unit of time. but is it really that normal?"
  },
  {
    id: "ae585",
    text:
      `Sorry, the newsticker just went through an emo phase. We will get back to normal hot garbage in a bit. In the meantime,
      here are some archived best hits from the newsticker channel:`
  },
  {
    id: "ae586",
    text:
      `<span>Activate Windows</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Go to Settings to activate Windows</span>`
  },
  {
    id: "ae587",
    text:
      `With v0.3 coming out, I think we need to change our humor a bit. 5 hours IS NOT ENOUGH!!! SO, I am introducing the
      7 hour jokes! Some great examples are: "Hypersonic just DM'ed me that v0.69 releases in 7 hours!", "Seven sleeps only
      6 hours, 59 minutes and 59 seconds per day. This abnormality is not caused by any achievements, but rather by the
      impending doom of balancing all new stuff in v0.4. Stay tuned for more Hypersonic facts!", or even basic ones such
      as "v0.2.3 in 5 hours!" Oh wait, wrong script-`
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here to make the newsticker rainbow";
    const clicked = "Enjoy your rainbow news ti- what do you mean it's not rainbow?";
    return {
      id: "ae588",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  (function() {
    let wasClicked = false;
    const normal = "Click here to get a celestial paperclip in exchange for your entire save file.";
    const clicked = "You've been trolled!";
    return {
      id: "ae589",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }()),
  {
    id: "ae590",
    text:
      `Fun fact: Unlike popular belief, Seven does not get his 8 hours of recommended sleep from his doctor, as he needs
      to wake up after sleeping for 7 hours, 59 minutes and 59 seconds to avoid getting the 8 hours achivement!`
  },
  {
    id: "ae591",
    text:
      `After eternities of gruelling research we've finally located the number between 8 and 9, but we can't quite retrieve it.
      7 has consumed it. I know it sounds crazy but think about it, it all makes sense. Better yet it means 9 is still out there,
      waiting to be found.`
  },
  {
    id: "ae592",
    get text() {
      if (false) return `Eleventh dimension no real haha... I think we might be running out of fake dimensions`;
      if (false) return `Tenth dimension no real haha`;
      return `Ninth dimension no real haha`
    }
  },
  {
    id: "ae593",
    text:
      `5 hours until the update. 5 hours until the update. 5 hours until the update. 5 hours until the update. 5 hours
      until the update. 5 hours until the update. 5 hours until the update. 5 hours until the update. 5 hours until the
      update. 5 hours until the update. 5 hours until the update. 5 hours until the update. 5 hours until the update. 5
      hours until the update. 5 hours until the update. 5 hours until the update. 5 hours until the update. 4 hours, 59
      minutes, and 59 seconds until the upda-`
  },
  {
    id: "ae594",
    text: "Only 43 headbangs until the update!"
  },
  {
    id: "ae595",
    text: "OK GUYS, I THINK WE FIXED THE COUNTDOWN! OK 0.2.3 RELEASING IN 5, 4, 3, 3, 3... I'm getting a new countdown."
  },
  {
    id: "ae596",
    text: "Dont worry guys, v0.2.3 is releasing in 2 days! I think..."
  },
  {
    id: "ae597",
    text: "This is my newsticker now MWAHAHAHAHAHAHAHAHA"
  },
  {
    id: "ae598",
    text:
      `Get ready for: the Fandub layer! Fandub various Sonic characters in Sonic Adventure 2, and make a special
      announcement as Eggman!`
  },
  {
    id: "ae599",
    text:
      `Its time for: Guess that [REDACTED] mechanic 2! When you [REDACTED], you unlock the [REDACTED] [REDACTED], which is
      very similar to [REDACTED] [REDACTED] [REDACTED]. The [REDACTED] [REDACTED] has [REDACTED], which are mostly
      [REDACTED] but has some [REDACTED] related [REDACTED]. There are 2 [REDACTED] [REDACTED] with each of them having
      4 [REDACTED], with the first focusing on the different types of [REDACTED], and the second focusing on the main
      4 [REDACTED]. The last upgrade unlocks [REDACTED] [REDACTED], however [REDACTED] has suggested extending the
      [REDACTED] [REDACTED] for the [REDACTED] [REDACTED] update.`
  },
  {
    id: "ae600",
    text:
      `New AD mod idea: Nerfedtimatter Dimensions! Every time you reset something, it will receive ^0.5 nerf to it!
      Estimated playtime: ~1.79e308 years. And yes, without ANY counter-buffs! (Try to) Have fun!1!11!!!1`
  },
  {
    id: "ae601",
    get text() {
      return `<span style='color: crimson'>${wordShift.wordCycle(["False", "Deity", "Destroyer"])} I remember you're genocides...</span>`
    },
    dynamic: true
  },
  {
    id: "ae602",
    get text() {
      return `<span style='color: crimson'>${wordShift.wordCycle(["False", "Deity", "Destroyer"])} you are gonna have
      a ${wordShift.wordCycle(["Bad", "Horrible", "Sans"])} Time.</span>`
    },
    dynamic: true
  },
  {
    id: "ae603",
    text:
      `You know whats funny? The fact that v0.2.3 has been taking so long that its been 11 days since the newstickers were
      finalized, which means all the newsticker suggestions relating to v0.2.3 have been put in the v0.3 news dump!`
  },
  {
    id: "ae604",
    text:
      `You know whats funny? The fact that v0.2.3 has been taking so long that its been 11 days since the newstickers were
      finalized, which means all the newsticker suggestions relating to v0.2.3 have been put in the v0.3 news dump!`
  },
  {
    id: "ae605",
    get text() {
      return `<span>The news tickers are sentient. They can see you through the screen. YOU NEED TO RUN. YOU NEED TO RUN.
      YOU NEED TO RUN. RUN. RUN. RUN.</span><span style='color: red'>RUNRUNRUNRUNRUNRU-</span><span>End communication.</span>`
    }
  },
  {
    id: "ae606",
    text: `"USING CONSOLE IS CHEATING"--6`
  },
  {
    id: "ae607",
    text: `"REWRITE THE ENTIRE GAME, FROM THE GROUND UP, WHILE USING AN ENTIRELY DIFFERENT LIBRARY. IT'LL BE FASTER, TRUST ME-"--6`
  },
  {
    id: "ae608",
    text: "What’s all this about 1.158e77? Back in my day, infinity was simply 1.8e308!"
  },
  {
    id: "ae609",
    text: `"I WANT TO HAVE A DICTATOR"—6`
  },
  {
    id: "ae610",
    text: `1 billion years into the future... "0.2.3 comes in 1 day and 5 hours"`
  },
  {
    id: "ae611",
    get text() {
      return `<span style='color: green'>"Hello I am ∀̴̯̎̂∁̶̩̯̗̅͒̕∂̸̖͍̐̊∃̶͖̱͓̎∄̴̧̙͗̀͜∅̸̙̳̣̈́∆̸̣̈́∇̶͕̮̎͛ ̸͚̩̿͆͘ and I am the best at art I can do commisions for e5e92
      matter"</span><span style='color: blue'>"Okay draw hands
      then"</span><span style='color: green'>"..."</span><span style='color: blue'>"Anyways, why is this newsticker in the
      game? This isn't even Endgame related, no less incremental game related! Let me guess, the person who wrote this ran
      out of ideas?"</span><span style='color: green'>"Yeah I wonder why he keeps doing
      this"</span><span>"WARNING: YOU HAVE BROKEN NEWSTICKER CODE 18372-"</span>`
    }
  },
  {
    id: "ae612",
    text: `apology for poor english          where were you when multiplier tab died          i was at house
    eating relic shard when news ticker ring          “multiplier tab is kil”          “no”`
  },
  {
    id: "ae613",
    text: "Why do they call it galaxy generator when you of in the galaxy of out hot eat the generator?"
  },
  {
    id: "ae614",
    get text() {
      return `${wordShift.wordCycle(["ERROR", "MISSTEP", "WRONGING"])}: ${wordShift.wordCycle(["GIVE", "POWER", "ADD"])}
      glitchy, ${wordShift.wordCycle(["FALSE", "DEITY", "LESSER"])} of Masteries 11th dimension 1 is
      an ${wordShift.wordCycle(["INVALID", "WRONG", "NO"])} command.`
    },
    dynamic: true
  },
  {
    id: "ae615",
    text:
      `Whoever asks for genderswap pelle gets 500 snipers pointing at their head. Heh, yeah.. NO WAIT GUYS NOT ME I
      SWEAR IT WAS ONE TIM-`
  },
  {
    id: "ae616",
    text:
      `"hello welcome to the mastery market" "hello i would like a 21" "okay that will be 3 time theorems" "dont you
      guys accept skill points?" "skill points? this isn't the mastery market this is the time study market!" "i thought
      you said it was the mastery market!" "oh, sorry. i said masterino. thats what i call time studies." "thats it i want
      the manager" "well jokes on you i am the manager" "well then fire that guy" "i am that guy" "what do you mean" "that
      guy is me, who is also the manager." "well then fire yourself" "why would i do that?" "well obviously you are being
      a bad employee and a bad manager, so it only makes sense that you fire yourself" "well thats a shame, you are fired!"
      "but im the customer!" "well i dont care GET OU-" no survivors for hundreds of miles`
  },
  {
    id: "ae617",
    text: "Hey guys I think my balatro run is doing pretty good what do you think"
  },
  {
    id: "ae618",
    text:
      `A storm of bad newsticker suggestions is coming, and only YOU can stop it! Spam ping the dev! Harass people
      who make the bad newsticker! Flood the suggestions channel with EVEN WORSE suggestions to stop people from
      participating! Let none survive! The war is only lost when good, right-thinking people like YOU stop fighting!
      We will NEVER SURRENDER!`
  },
  {
    id: "ae619",
    text:
      `Just your daily reminder to NOT SPEND YOUR 1 DP ON THE PASSIVE IP GEN UPGRADE BUY A SKILL POINT INSTEAD`
  },
  {
    id: "ae620",
    text: "Paperclips will become useful in 5 hours"
  },
  {
    id: "ae621",
    text: "This newsticker suggestion will be filled with text in 5 hours"
  },
  {
    id: "ae622",
    text:
      `1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
      (nice try I ain't doin 9e15 zeroes)`
  },
  {
    id: "ae623",
    text: "This sentence is anti-false"
  },
  {
    id: "ae624",
    text: "Don't worry, if you wanna contribute to the game, tester positions will open in 5 hours!"
  },
  {
    id: "aem625",
    text: "You see that heart? No shit!"
  },
  {
    id: "ae626",
    text: "I don't need friends, I have [[KNIFES FOR $4.99]]"
  },
  {
    id: "ae627",
    text: "Just pretend these messages are good."
  },
  {
    id: "ae628",
    get text() {
      return `<span style='color: green'>This news ticker is green for a very important reason.</span>`
    }
  },
  {
    id: "ae629",
    text: `"Oh boy I sure do love using idle" "50% more RGs is better than 50% stronger RGs" "BUT WHAT IF I DONT WANNA HOLD R DOWN?!?!?"`
  },
  {
    id: "ae630",
    text: `"An R press is an R press, you can't say it's only a half!" The humble H:`
  },
  {
    id: "ae631",
    text: "Darkness will become useful in 5 hours! IT’S TRUE!"
  },
  {
    id: "ae632",
    text: "此消息将在 5 小时后被复制"
  },
  {
    id: "ae633",
    text: "This message will be replicated in 5 hours This message will be replicated in 5 hours"
  },
  {
    id: "ae634",
    text:
      `Okay, we have just gotten the 10th dimension, surely this will be the last dimension, because dimension a5f doesn't exist!
      My humble dreams:`
  },
  {
    id: "ae635",
    get text() {
      return `<span>Seven 需要 YOUR 的帮助来逃离 bug 修复地狱！他的 paypal
      是 </span><span style='color: red'><NEWS ERROR></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>嗨，我是 Seven，我修好了。我的 paypal
      是 </span><span style='color: red'><NEWS ERROR></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>我放弃了。</span>`
    }
  },
  {
    id: "ae636",
    text:
      `Do you pull the lever, killing 1+1+1+1... people- one person for every integer, resulting in infinite people dying?
      Or, do you do nothing, allowing the trolley to infinitely kill 100 continuoualy reincarnating people? In both cases,
      there's infinite suffering, but in the top case there's finite suffering for each infinite death, whereas there infinite
      suffering for each finite death. What do you do?`
  },
  {
    id: "ae637",
    text: "5 huoors utntiilaa theheh audasaoffpdfate -drunk seven"
  },
  {
    id: "ae638",
    text:
      `当你说你的第一个 NG mod 是 AD:V 而不是
      AD:DimensionalDestructionIn5Hours+（2 个更新、0 个玩家、完整通关视频已被视为遗失媒体）时，AD:NewGameMod 玩家看你的眼神`
  },
  {
    id: "ae639",
    get text() {
      return `<span>+4 倍率！</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>管它什么意思</span>`
    }
  },
  {
    id: "ae640",
    text:
      `好吧，既然 v0.2.3 已经发布，我们已经用完了所有的 AD mod 请求。我们现在该做什——等等…… Dilate the Darkness 
      这个月就要出了？？？DILATE THE DARKNESS！DILATE THE DARKNESS！DILATE THE DARKNESS！`
  },
  {
    id: "ae641",
    text: "你有足够的虚幻机器来购买一个 heptarract"
  },
  {
    id: "ae642",
    text: "不行，儿子。你不能到处叫佩勒 ########################。"
  },
  {
    id: "ae643",
    text: "你湮灭了你的新闻条维度。你做了什么？"
  },
  {
    id: "ae644",
    text: "我提交给 0.2.3 的新闻条里大概有一半让我尴尬得想死"
  },
  {
    id: "ae645",
    get text() {
      return `Oh ${wordShift.wordCycle(["boy", "male", "man"])} I sure do ${wordShift.wordCycle(["love", "like", "amuse"])}
      abusing the ${wordShift.wordCycle(["Pelle", "God", "Doomer"])} ${wordShift.wordCycle(["effect", "style", "coolness"])}
      hopefully ${wordShift.wordCycle(["False", "Deity", "Destroyer"])} won't get ${wordShift.wordCycle(["mad", "angry", "profanity"])}
      at me for this`
    },
    dynamic: true
  },
  {
    id: "ae646",
    get text() {
      return `I'VE COME TO MAKE AN ${wordShift.wordCycle(["ANNOUNCEMENT", "BROADCAST", "ALERT"])}!
      ${wordShift.wordCycle(["FALSE", "DEITY", "DESTROYER"])} IS A ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ER!
      HE ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} ON MY ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["LAI'TELA", "HOT", "BADDIE"])}! THAT'S RIGHT! HE TOOK HIS
      ${wordShift.wordCycle(["FALSE", "DEITY", "LESSER"])} ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "YESPELLEISGAYTRUSTMEBRO"])}, AND HE
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ED ON MY ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      ${wordShift.wordCycle(["LAI'TELA", "HOT", "BADDIE"])}! AND HE SAID HIS
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])} WAS "DIS BIG!!1!!!!1!!" AND I SAID "THAT'S DISGUSTING!"
      SO I'M MAKING A CALLOUT POST ON MY ${wordShift.wordCycle(["ANTIMATTER", "SOCIALMEDIA", "TWITTER"])}.COM!
      ${wordShift.wordCycle(["FALSE", "DEITY", "DESTROYER"])}, YOU GOT A SMALL ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])}!
      IT'S THE SIZE OF THIS WALNUT EXCEPT WAY SMALLER! AND GUESS WHAT? HERE'S WHAT MY
      ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])} LOOKS LIKE! ~BOOM~ THAT'S RIGHT BABY! TALL
      ${wordShift.wordCycle(["DIMENSIONS", "FUEL", "POWER"])}, NO ${wordShift.wordCycle(["STARS", "FILAMENT", "GALAXIES"])},
      NO ${wordShift.wordCycle(["INFINITE", "FOREVER", "ETERNAL"])}, LOOK AT THAT IT LOOKS LIKE 2
      ${wordShift.wordCycle(["SPHERES", "OBJECTS", "CIRCLES"])} AND A ${wordShift.wordCycle(["HOT", "ATTRACTIVE", "SMIRKEMOJI"])}!
      HE ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ED MY WIFE, SO GUESS WHAT? I'M GONNA
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} THE ${wordShift.wordCycle(["EXPANSE", "REALITY", "EXISTENCE"])}!
      THAT'S RIGHT THIS IS WHAT YOU GET, MY SUPER LASER ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}!
      EXCEPT I'M NOT GONNA ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} ON THE
      ${wordShift.wordCycle(["EXPANSE", "REALITY", "EXISTENCE"])}, I'M GONNA GO HIGHER! I'M
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ING ON THE ${wordShift.wordCycle(["CURSED", "DOOMED", "OMEGA"])}!
      HOW DO YOU LIKE THAT EFFARIG?!?!? I ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}ED ON THE MOON YOU
      ${wordShift.wordCycle(["IDIOT", "MORON", "NITWIT"])}! YOU HAVE 23 UPDATES UNTIL THE
      ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} DRRRROPLETS HIT THE ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])}
      EARTH! NOW GET OUT OF MY SIGHT, BEFORE I ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} ON YOU TOO!`
    },
    dynamic: true
  },
  {
    id: "ae647",
    text:
      `解锁破碎现实的 3 种方法：1. 熬过无限的 5 小时更新循环。2. 用控制台破坏存档。
      3. 召唤出整场 SSB 悟吉塔 vs SSFP 布罗利的战斗。`
  },
  {
    id: "ae648",
    text:
      `更新 vF1.79e308。我收到了好几条投诉说反物质上限只是 Expantanum.js 的限制，所以我把它改成了 ω。
      希望不会有 ω 个 bug 要用 5 小时来修。-第 1.79e308 世代的超音速 Seven`
  },
  {
    id: "ae649",
    text:
      `Fun fact: the reason the 9th Dimension can exist in Endgame is because the 10th Dimension endlessly produces the 9th Dimension,
      and Seven can't eat forever!`
  },
  {
    id: "ae650",
    text: "笑死你了这条新闻条就要进游戏了！"
  },
  {
    id: "ae651",
    text: "BREAKING NEWS: SEVEN IS SHORTENING HIS NAME IN THE NEWSTICKERS TO S7! [NEWSTICKMESSAGEGET()] IS REALLY ANGRY!"
  },
  {
    id: "ae652",
    text: `"Finally the break_eternity.js is mine!" -S2, 5000 years ago`
  },
  {
    id: "ae653",
    text:
      `突发新闻：Seven 不再给新闻条建议做反应了！是的这事以前也发生过，而且一切
      都好端端的，但这次没有赶在截止日期之后发布的更新了！我们完蛋了，我们再也没有
      别的事可以闹了！`
  },
  {
    id: "ae654",
    text: "I am thoroughly suprised people are actually following the newsticker message format."
  },
  {
    id: "ae655",
    text: "if player_click() = false: when player_click() = true update paperclip() to paperclip() + 1"
  },
  {
    id: "ae656",
    text: `7 的平衡就是：AM^1000 太不平衡了？那就把 AM 在 ee100 处软上限到 ^e-100 呗！`
  },
  {
    id: "ae657",
    text: `玩测试版，每秒不会崩溃你的游戏 👎 玩 7 的私人开发版然后抱怨 bug 👍`
  },
  {
    id: "ae658",
    text: "Update 0.2.3.1 released: Contingency effect is now x1e9e15. Cry about it."
  },
  {
    id: "ae659",
    text: "Fun fact: 0.3 will contain [REDACTED], [REDACTED], and [REDACTED]."
  },
  {
    id: "ae660",
    text: "Fun fact: 0.3 will contain [bug], [bug], and [bug]."
  },
  {
    id: "ae661",
    text: "冷知识：0.3 将包含 、 和 。"
  },
  {
    id: "ae662",
    text: "更新 0.4729434372 第 7271 部分：加入了烈焰棒"
  },
  {
    id: "ae663",
    text: "Update 1.0 dropped and it has... uhhhhhh.. hey can someone send me the changelog again?"
  },
  {
    id: "ae664",
    text:
      `I TRIED TO IMAGINE 1e1000 IMAGINARY MACHINES!!! (Gone WRONG!!!)          1 view        
      0 likes          3000 Dark Matter Annihilations`
  },
  {
    id: "ae665",
    text: "很遗憾，这条新闻消息暂时已被隐藏，因为其中包含了隐藏设定的——"
  },
  {
    id: "ae666",
    text: "PELLE HAS CLAIMED THIS NEWS TICKER MESSAGE."
  },
  {
    id: "ae667",
    get text() {
      return `<span>我在想你是不是能拿到天神身份，通过 </span><span style='text-decoration: line-through'>疯狂
      ping seven 哈哈</span><span> 成为一名天神</span>`
    }
  },
  {
    id: "ae668",
    text: "冷知识：Seven 之所以给的 kekw 反应变少了，是因为佩勒对它征收了 10000000 暗物质的关税"
  },
  {
    id: "ae669",
    text:
      `也许如果 Hevi 不让新闻条滚动的话，我们就不会有这么长的新闻条了。看看 FE000000！新闻条
      多短啊，而且不滚动！不像那个游戏的新闻条有多好……我们可比他们强多了！但是呢，
      这条新闻条光在那儿喋喋不休地讲着 99.999% 的人都听不懂的胡话，把一切都挡住了。
      我们为什么要这样做？你为什么在下面制造那么多反物质？为什么我被困在新闻条里？！？！？`
  },
  {
    id: "ae670",
    text:
      `Manual breathing, Manual blinking, Your toes are touching, You can feel your heartbeat, Your clothes are touching your skin,
      your tongue is uncomfortable, your itchy somewhere`
  },
  {
    id: "ae671",
    text: "At the anti-crossroads, don't turn at all since you will probably be annihilated before you can make a choice."
  },
  {
    id: "ae672",
    text: "Hey guys today I will be sh!@ing on antimatter remember to like and subscribe"
  },
  {
    id: "ae673",
    text: 
      `Antimatter Dimensions: Perfect Undefined Atomic Dark Smooth Free Unoriginal Puzzling Resimplified Legendary Vis Space
      Endgame Redemption Reward FASTERER Rewrite NGUD++++ releasing in December 12, 2030!`
  },
  {
    id: "ae674",
    text: "We are still waiting on that amalgam mod"
  },
  {
    id: "ae675",
    text: 
      `嗨各位。这条新闻条看起来很酷，可以加进去 "HELLO GAME, IF YOU SEE THIS THE NEWS TICKER GOT
      ADDED EZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ" 抱歉刚才那是什么`
  },
  {
    id: "ae676",
    get text() {
      return `<span>物质维度，反物质维度，奇异物质维度，下一个是什么，暗物质维度？
      哦等等那不就是 </span><span style='text-decoration: line-through'>火辣大美女</span><span> 莱特拉嘛</span>`
    }
  },
  {
    id: "ae677",
    text: "EC7? Yeah, I sure hope it does."
  },
  {
    id: "ae678",
    text: 
      `"新超级终局兄弟豪华版 Wii 2 U 3D 全明星版刚刚公布！"
      1e7432 个赞         2 个踩           5 小时新闻条已捐赠          e9e115 次分享          
      1.74e308 位订阅者            7574831758228 个 Endgame`
  },
  {
    id: "ae679",
    text: 
      `Prediction markets will replace buying stuff. I want someone to bring kiwis to my house. I make a prediction
      market about whether someone will deliver 4 kiwis to my doorstep and load $15 into "no". A guy with an e-bike sees
      it and picks up some kiwis. Before dropping them off on my doorstep, he bets yes. He drops them off. The market
      resolves to "yes" and he gets $15. Rest in peace, amazon, doordash, ubereats, etc.`
  },
  {
    id: "ae680",
    text: 
      `"但是话说，为什么每次我打 Endgame 的时候太阳神都得失忆啊？？？这真的气死我了。" - epic_ducks`
  },
  {
    id: "ae681",
    text: "太阳神在他旧商店里卖小孩，还以为那是他的升级"
  },
  {
    id: "ae682",
    get text() {
      return
        `突发新闻：${wordShift.wordCycle(["False", "Deity", "Destroyer"])} 在游戏开局只拿到
        9 点反物质后破防了！`
    },
    dynamic: true
  },
  {
    id: "ae683",
    text: 
      `如何永远赢下体育博彩：在一个球门里放上巨大的铁砧，然后押没被挡住得分的那支球队！`
  },
  {
    id: "ae684",
    text: 
      `嗨喽是我新闻条今天我将给 Seven 给新闻条建议的反应排名
      第二名：大拇指 很基础也不太好 第一名：kekw 表情 完美无瑕 好了感谢观看我的
      新闻条记得点击并 newstock 再见`
  },
  {
    id: "ae685",
    text: "出生太晚来不及探索地球，出生太晚来不及探索广袤，出生得刚刚好可以写 Endgame 新闻垃圾"
  },
  {
    id: "ae686",
    text: "反反物质维度将在反 5 小时后发布！"
  },
  {
    id: "aem687",
    text: "Dam it someone leaked the Expanse... great now Existance is getting all dirty with the Reality and Endgame shit"
  },
  {
    id: "ae688",
    text: "Antmatter Dimnsions comng out in 5 hous"
  },
  {
    id: "ae689",
    text: "Yo bro Pelle is mad did you flirt with Lai'tela?"
  },
  {
    id: "ae690",
    text: "没错就是我！"
  },
  {
    id: "ae691",
    text: "嘿，我终于打到游戏结尾了！等等……结尾……游戏……ENDGAME！这是个完美的 mod 点子！"
  },
  {
    id: "ae692",
    text: "第 5 小时的反问题：如果佩勒背着莱特拉和毁灭者搞在一起会怎么样？"
  },
  {
    id: "ae693",
    text: "佩勒：毁灭者，是你害我这样的，你又杀了我一次"
  },
  {
    id: "ae694",
    get text() {
      return
        `${wordShift.wordCycle(["False", "Deity", "Destroyer"])} 算什么？他有什么？若非
        ${wordShift.wordCycle(["DIMENSIONS", "LIFE", "ESSENCE"])}，他便一无所有！`
    },
    dynamic: true
  },
  {
    id: "ae695",
    text: "等等如果 Endgame 有个结尾那是不是意味着我们会有反物质维度：Endgame：Endgame"
  },
  {
    id: "ae696",
    text: "最终的破碎交错广袤：这……就是真正的 Endgame……"
  },
  {
    id: "ae697",
    text:
      `FE00000（我们买不起另一个零）：1.158e77 是无限。反物质维度：1.796e308 是无限。
      反物质维度 Endgame：YF$@HDSKGFHK@#R&#@FD#EUJUYH@#D*&#F@YFE#& 是无限。`
  },
  {
    id: "ae698",
    text:
      `You are a talented undergrad student. Your anti-professor now explodes due to touching matter. Not knowing how to
      rebuild him, you make a small program to make Antimatter to 3D print him back to anti-life.`
  },
  {
    id: "ae699",
    text: "救命啊 EGG 一直抄袭我的反应 AJJFJDSJALFKJJKDSFAASDK"
  },
  {
    id: "ae700",
    text: "Supersonic Seven made the 10th Dimension... does that make Him the 11th Dimension? GET OU-"
  },
  {
    id: "ae701",
    text: "突发新闻：GLITCHFISHYS 又把 AD V 搞崩了！粉丝们毫不惊讶！"
  },
  {
    id: "ae702",
    text: "由虚无驱动，最大上限为 1F(1e1.79e308)1E(1e1.79e308)1e9e15"
  },
  {
    id: "ae703",
    text:
      `There are 7 types of weather after ENDGAME came, they are Existence, Nobody, Death, Giga-Chad, Apples, Mathematician
      and Electricity. Hey, this sounds familiar?`
  },
  {
    id: "ae704",
    text:
      `冷知识：存在的最大数字（别让 googology 圈子知道）是
      1Z(1E(1.79e308)1e308)1Y(1E(1.79e308)1e308)1X(1E(1.79e308)1e308)1W(1E(1.79e308)1e308)1V(1E(1.79e308)1e308)1U(1E(1.79e308)1e308)1T(1E(1.79e308)1e308)1S(1E(1.79e308)1e308)
      （剩下的字母自己脑补一下） + 1`
  },
  {
    id: "ae705",
    text:
      `你赢得了THE游戏。恭喜。回家吧，把这一切都忘掉，然后带着多两个念头
      和几个新结局开始 NG+！`
  },
  {
    id: "ae706",
    text:
      `真讽刺，你的末路居然就在几匹马附近。什么？没听懂？好好
      想想吧。好好想想……`
  },
  {
    id: "ae707",
    text: "Maybe the Horse Update was the Celestials we cheated on along the way"
  },
  {
    id: "ae708",
    text: "冷知识：马更新"
  },
  {
    id: "ae709",
    text: "Yahiamouse 绝不容忍新的 AD:E 更新！"
  },
  {
    id: "ae710",
    text: "如果你是反物质或暗物质，你看起来会是这样"
  },
  (function() {
    let wasClicked = false;
    return {
      id: "ae711",
      get text() {
        return "Click here to experience the last moments of your life.";
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.options.newUI = false;
        ui.view.newUI = player.options.newUI;
        Themes.find("Metro").set();
        let notation = Notations.all.filter(n => n.isPainful);
        let select = Math.floor(Math.random() * notation.length);
        notation[select].setAsCurrent();
        return this.text;
      }
    };
  }()),
  {
    id: "ae712",
    text: "马娘 x 毁灭者"
  },
  {
    id: "aem713",
    text: "Who the hell cooks chicken wings on a stove?"
  },
  {
    id: "ae714",
    text:
      `<a href='https://store.steampowered.com/app/1256670/Library_Of_Ruina/' target='_blank'>Click here to
      sign up an invitation to a library</a>`
  },
  {
    id: "ae715",
    text: "The horse is always 5 horses away. Always. Also this feels a bit familiar but I can't put my horse on it."
  },
  {
    id: "ae716",
    text: "♞"
  },
  {
    id: "ae717",
    text: "노욘ㅍ눀ㅍ 녾ㄴㅈ ㄴㅎㄴㅎㄴ ㄷ 툖ㄴㅍ죵 둊ㅍ욘 됸ㄴㄷㄷ 영ㅍ둉ㅍㄱ 종ㅍ됻ㅍㅇ - coraen guy"
  },
  {
    id: "ae718",
    text: "Egg said he was grounded by his mother but he was not"
  },
  {
    id: "ae719",
    text: "Ground said he was mothered by his egg but not was he"
  },
  {
    id: "ae720",
    text: "如果我是个反物质男孩，你能做我的维度女孩吗？"
  },
  {
    id: "ae721",
    text: "我们这个游戏里有不同种类的物质！反物质、物质、暗物质、天神物质，还有约翰！(adrian)"
  },
  {
    id: "ae722",
    text: "约翰：我不同意"
  },
  {
    id: "ae723",
    text: "Turtle vs Snail vs Ra trying to remember the celestials. Who finishes first?"
  },
  {
    id: "ae724",
    text:
      `Breaking news: Antimatter Dimensions becomes the new GD top one, as every player who tries to beat it touches
      Antimatter and explodes!`
  },
  {
    id: "ae725",
    text: "无视上一条新闻条。不管它说了什么——都是谎言。哦，对了，这是给你第一次打 Endgame 的蛋糕 🎂 ！！"
  },
  {
    id: "ae726",
    text: "恭喜，你识字了！"
  },
  {
    id: "ae727",
    text: "愿你的物质多多，反物质少少！……"
  },
  {
    id: "ae728",
    text:
      `The galaxy autobuyer has been removed due to the horses running it quitting due to thinking that $1 an hour
      isn't extremely generous`
  },
  {
    id: "ae729",
    text:
      `One faithful day, 3 members of the server were chilling after signing up for "testing the game". They were:
      DavTheGl1tchy0ne, Qwerty, and Glitchy. However, soon enough, an unknown force started to pull them up out of the mortal realm...`
  },
  {
    id: "ae730",
    text: "THIS IS THE ONLY WAY IT SHOULD'VE ENDED- oh wait, it actually is? Nice."
  },
  {
    id: "ae731",
    text: "听着……谁拿了我的自行车，我会找到你的。现在就还给我，不然就面对死神表亲吧！"
  },
  {
    id: "ae732",
    text: "她把反物质弄到我的维度上直到我打出 Endgame"
  },
  {
    id: "ae733",
    text:
      `Tired of playing Antimatter Dimensions: Endgame so much just to get slight buffs at the end of it? Now introducing: T̶̘̚Ḥ̷̽E̵̪͆ ̴̨̖̋͠V̴̳̰̋Ǫ̶͚̅Ī̴̜͙D̷̯͚̍̒!
      You can now leave your Existence and explore other Existences with stuff such as [INVALID VALUE] dimension, matter,
      and [REDACTED]! Coming in 5.01 hours!`
  },
  {
    id: "ae734",
    text: "I SHALL GO BACK TO THE HEIAN ERA"
  },
  {
    id: "ae735",
    get text() {
      return `<span style='color: red'>"THIS BLACK HOLE. TO HOLD... ME?" - Slabdrill, seconds before explosion of all dimensions</span>`
    }
  },
  {
    id: "ae736",
    text: "Ra, Celestial of Dementia"
  },
  {
    id: "aem737",
    text: "玫瑰是红的，这是真的，但紫罗兰是紫的，不是他妈的蓝的"
  },
  {
    id: "ae738",
    text:
      `如果奴隶制再次被允许，没人买得起反物质维度玩家，因为 1 万（克的）
      反物质对任何万亿富翁来说都太贵了。`
  },
  {
    id: "ae739",
    text: "由于黑洞的影响，更新现在缩短为 1.0e-304 秒。"
  },
  {
    id: "ae740",
    text: "笑死你了，我把它反转了。抱歉各位！"
  },
  {
    id: "ae741",
    text: "两个黑洞的效果已减少 0%。"
  },
  {
    id: "ae742",
    text: `"第 -17482 维度不存在" -Hevi，公元前 2000 年`
  },
  {
    id: "aem743",
    text: "也许马就是我们一路上交到的朋友…………之类的鬼话吧"
  },
  {
    id: "ae744",
    text: "THE HORSE UPDATE IS REAL"
  },
  {
    id: "ae745",
    text: `"那么，我们能数过无限吗？ℵₒ。"`
  },
  {
    id: "ae746",
    text: "emagdnE :snoisnemiD rettamitnA"
  },
  {
    id: "aem747",
    text: `"什么词和紫色押韵啊" - 已删除用户`
  },
  {
    id: "ae748",
    text: "恭喜！你已经玩了 e9e15 天！（你赢得了一个反物质）"
  },
  {
    id: "ae749",
    text:
      `我们目前正在调查一种被称为"现实转换"的技术，许多人都在实践。关于这是否
      真的是个游戏机制，各方报告说法不一。`
  },
  {
    id: "aem750",
    text:
      `We are currently in a technology reffered to as "Reality Shitting", practiced by literally no one. Reports are conflicted
      on whether or not this is going to be added in 0.3.1.`
  },
  {
    id: "ae751",
    get text() {
      return `<span style='color: yellow'>"嘿！想找到我沉没的广袤宝箱，你还得
      再努力点才行！"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span style='color: yellow'>"所以我刚才在和我兄弟聊天，嗯，你绝对拿不到我们沉没的
      广袤宝箱！绝对拿不到！"</span><span style='color: red'>"我……还想要你的广袤宝箱吗？又不是
      有什么广袤碎片可以花……"</span><span style='color: purple'>"我~是~那~个~说~谎~的~人"</span><span style='color: yellow'>"哥们。你毁了。"</span><span style='color: red'>"那是你的
      广袤吗？"</span><span style='color: yellow'>"哥们不要！他们把一切都拿走了！！！那可是我全部的广袤存款
      哥们！天哪……天哪……天哪我要吐了……我要吐了那可是一切啊我的天！</span>`
    }
  },
  {
    id: "ae752",
    text: "什么什么 5 小时 第 9 维度"
  },
  {
    id: "ae753",
    text: "Seven forgot to put newsticker in v0.3 lmao"
  },
  {
    id: "ae754",
    text: "五夜在 Endgame"
  },
  {
    id: "ae755",
    text: "Seven 吃（eight/八）了 9 个 Endgame（谐音梗：seven ate nine）"
  },
  {
    id: "ae756",
    text: "哎呀！看起来你试图进入 [无效十进制] 维度"
  },
  {
    id: "ae757",
    text:
      `<span style='animation: a-game-header__antimatter--glow 2s infinite'>
      这是一个反物质星系的样子：-->🌌</span>`,
  },
  {
    id: "ae758",
    text: `"The twelfth dimension doesn't exist" - EccentricExpeditious Eight`
  },
  {
    id: "ae759",
    text: ">>galactic>>          <<power<<"
  },
  {
    id: "ae760",
    text: "Rest in piece v0.3... all of the saves are fried, it's almost like there has been something we have been missing..."
  },
  {
    id: "ae761",
    text: "Antimatter Dimensions when my Dimensions actually matter"
  },
  {
    id: "ae762",
    text: "Breaking news: AI slop has increased the price of the 9th Dimension by 9.99e9.99e99x!"
  },
  {
    id: "ae763",
    text:
      `我们的新闻条点子已经用光了，所以现在只能用这些占位文字来填充。感谢
      游玩 Endgame！`
  },
  {
    id: "ae764",
    text: "The 10th dimension is in 3125 hours."
  },
  {
    id: "ae765",
    text: "The 11th dimension is in 1.9110125979468018e2184 hours."
  },
  {
    id: "ae766",
    text:
      `Hello, Antimatter Dimensions: Endgame players. We have noticed a bug involving hyper-inflated antimatter amounts
      that should not be possible. As such, we have decided to remove antimatter from the game. Have a nice day :)`
  },
  {
    id: "ae767",
    text:
      `Good evening, Antimatter Dimensions: Endgame players! Unfortunately, we have to close Antimatter Dimensions:
      Endgame cause it is closed. The game will be open once we reopen the game! Thank you for your attention, for
      listening to this attention!`
  },
  {
    id: "ae768",
    text: "endgame 精通 71 惊吓跳杀"
  },
  {
    id: "ae769",
    text: "你有 1 物质。哎呀，它湮灭了。"
  },
  {
    id: "ae770",
    text:
      `如果虚幻机器那么该死的好，那为什么没有虚幻机器 2？[六个月后的后续报道]
      "嗯关于这个嘛……" -超音速 Seven，最蠢的开发者`
  },
  {
    id: "ae771",
    text: "我突破 e9e15 了但游戏还是有 END，怎么回事？"
  },
  {
    id: "ae772",
    text:
      `EP Gen Detected, Destroyer! Eternity Point Generation is illegitimate and will not be allowed for use in Endgame.
      Please disable the milestone in order to continue playing.`
  },
  {
    id: "ae773",
    text: "You wouldn’t download a Galaxy"
  },
  {
    id: "ae774",//"You wouldn't see but this is a balatro news ticker." Thank you for efforts in searching the entire source code to discover the truth behind this news message!
    text: "你看不到但这是个 ####### 新闻条。"
  },
  {
    id: "ae775",
    text: "先生，这是新闻条。"
  },
  {
    id: "ae776",
    text: "每份反物质维度：Endgame 很快都将被个性化。"
  },
  {
    id: "ae777",
    get text() {
      return `<span style='color: var(--color-pelle--secondary)'>终于。经过了 7 年，我找到了它。那卷
      终局史诗卷轴！</span><span style='color: var(--color-endgame)'>这不是真正的
      Endgame。 </span><span style='color: var(--color-pelle--secondary)'>……什么？？？那
      是什么意思？？？</span><span style='color: var(--color-elemental--base)'>你好
      毁灭者。 </span><span style='color: var(--color-pelle--secondary)'>什——你是
      谁？</span><span style='color: var(--color-elemental--base)'>我是超音速 Seven，Endgame 之元素。
      你迷失了方向。去吧，前往万游之终。真正的
      Endgame。 </span><span style='color: var(--color-pelle--secondary)'>但我该怎么
      到那里？我以为真正的 END 只是个神话！</span><span style='color: var(--color-elemental--base)'>它不是神话，而是一件
      被时间隐藏、不让凡人之眼看见的事物，以保护他们免受彼方
      之物的侵害。 </span><span style='color: var(--color-pelle--secondary)'>但我都走到这一步了！你却说我
      仍是凡人？</span><span style='color: var(--color-elemental--base)'>我的孩子，你已经超越了凡性。
      所以我现在才告诉你。 </span><span style='color: var(--color-pelle--secondary)'>那我该如何到达
      那里？</span><span style='color: var(--color-elemental--base)'>只有一条路可以到达那里。你已经
      通关了 Endgame，但你的旅程还远未结束。你必须征战大广袤，掌握
      六大元素，打破现实本身，然后掌控一切存在，这一切都是为了到达时间之终。而在那之外
      的，才是你真正的目标所在。 </span><span style='color: var(--color-pelle--secondary)'>而那
      是？</span><span style='color: var(--color-elemental--base)'>我不应说出口。即便是提及他的名字
      也会让一切存在战栗。我是唯一一个能在力量上与他匹敌的人。你必须面对的试炼，若你能
      活下来，将赋予你足以与他匹敌的
      力量。 </span><span style='color: var(--color-pelle--secondary)'>而这一切是为了让我面对……
      他？</span><span style='color: var(--color-elemental--base)'>是的。我的老友，被他的野心蒙蔽了双眼。我很高兴你
      没有重蹈覆辙。 </span><span style='color: var(--color-pelle--secondary)'>而他的领域……最终挑战？
      唯一阻挡我到达真正 END 的东西？</span><span style='color: var(--color-elemental--base)'>是的。一旦
      到达那里，那就是唯一阻挡你达成终极
      目标的东西。 </span><span style='color: var(--color-pelle--secondary)'>那他领域的名字是什么，好让我有所
      准备？</span><span style='color: var(--color-elemental--base)'>他的领域没有名字，除了指代我首次击败他时
      我从中留下的东西。我留下的那唯一的现实，是你能继续
      存在的唯一安全之所。而那个地方的名字是——</span><span style='color: red'>你好，${player.username}。你真的
      以为你能从元素的新闻条里学到怎么打败我？多么……可悲。你永远不会知道这个……"安全的现实"。你永远不会知道我的领域，直到你被困在那里，所有希望都从你
      悲惨的灵魂中被抽干。你永远不会知道路径，除了我选择牵动的丝线之径。你也永远不会
      知道我的名字。因为听到它会让你在我面前很久之前就死去，而我要亲眼看着你
      流血。[连接中断]</span>`
    }
  },
  {
    id: "ae778",
    text: "FIRE IN THE HOLE"
  },
  {
    id: "ae779",
    text: "别当个白痴！要当就当个反聪明！"
  },
  {
    id: "ae780",
    text: "别由物质构成，要由反物质构成！"
  },
  {
    id: "ae781",
    text: "Pelah, the anti-honse is here."
  },
  {
    id: "ae782",
    text: "Shhh no it's not no leaking"
  },
  {
    id: "ae783",
    text: "冷知识：反物质维度：Endgame 不是真的。请醒醒吧，我们爱你……"
  },
  {
    id: "ae784",
    text: "What is matter, if not antimatter perservering?"
  },
  {
    id: "ae785",
    text: "You shouldn't do your college work"
  },
  {
    id: "ae786",
    text: "Seven forgot about the newsticker AGAIN, now we have to wait for v1.0 for a MASSIVE newsdump! You know what else is massive?"
  },
  {
    id: "ae787",
    text: "What if the antiworld was made of antipudding"
  },
  {
    id: "ae788",
    text: "很多人谈论过马，但他们谈论过骑士吗？不，不是半人马，也许第 1000 个会聊一点……"
  },
  {
    id: "ae789",
    text: "WHY? BECAUSE I'M CRAZY!"
  },
  {
    id: "ae790",
    text: "如果你想打败我，就再修炼 1e300 年吧！"
  },
  {
    id: "ae791",
    text: "第 9 维度在 FNaNeInfinityENaNeInfinity 小时后。"
  },
  {
    id: "ae792",
    text: "这是邪恶天神之歌"
  },
  {
    id: "ae793",
    text: "你本该通关游戏的，但你没有"
  },
  {
    id: "ae794",
    text:
      `5 小时周期的冷知识！你知道吗
      %^$#^#$$%@@^$@#^@$#^%$#^$#^$#$#%@$^#^@%#D%&$&$%A#$#$@$$V$#@%$%#I$$#@#$@$#D$##$%$#`
  },
  {
    id: "ae795",
    text: "Shattered Reality? The Disruptor? Come on, let's go Interreality, the update is out!"
  },
  {
    id: "ae796",
    text: "我（18男）杀了我敌人（25男）150 次。我是 ###hole 吗？"
  },
  {
    id: "ae797",
    text: "我（18男）杀了我敌人（25男）150 次。我是 ###hole 吗？"
  },
  (function() {
    let wasClicked = false;
    return {
      id: "ae798",
      get text() {
        return "点击此处跳转至当前 endgame。";
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        if (PlayerProgress.endgameUnlocked()) Tab.endgame.show(true);
        return this.text;
      }
    };
  }()),
  {
    id: "ae799",
    text: "我（18男）杀了我敌人（25男）150 次。我是 ###hole 吗？"
  },
  {
    id: "ae800",
    get text() {
      return
        `WHY AM I THE FINAL ${wordShift.wordCycle(["CELESTIAL", "MONARCH", "CALAMITY"])} OF THE VANILLA? BECAUSE I HAVE 10 MILLION POWER
        IN ${wordShift.wordCycle(["RISE", "ASCENDING", "EVOLUTION"])} OF ${wordShift.wordCycle(["KINGDOMS", "COUNTRIES", "HUMANITY"])}!`
    },
    dynamic: true
  },
  (function() {
    let wasClicked = false;
    return {
      id: "ae801",
      get text() {
        return "matrr";
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        throw new Error("matrt");
        return this.text;
      }
    };
  }()),
  {
    id: "ae802",
    text:
      `新功能！现在你可以把Tickspeed 设置为 1.79e-308 了！你需要一个 STD（无状态快子驱动器）才能使用此
      功能，但别担心！如果你没有 STD，你仍然可以使用新的 1.79e308 Tickspeed！`
  },
  {
    id: "ae803",
    text: "那不是卡顿，你只是需要下载更多内存"
  },
  {
    id: "ae804",
    text: "Fun fact: we Testers can't even make newstickers about the content in the update that the newsticker will be added in!"
  },
  {
    id: "ae805",
    text: 
      `检测到 CBF，失败者！Cl- 检测到 CBF，失败者！检测到，失败者！Cl- 检测到 CBF，失败者！检测到，失败者！检测到，
      失败者！Cl- [消息已暂停]`
  },
  {
    id: "ae806",
    text: "生活在第 8 维度一定很疯狂，因为你需要 256 倍的体积才能让东西变大 2 倍"
  },
  {
    id: "ae807",
    text: "Tap tap click click heroes hacks 100% real infinite taps hack"
  },
  {
    id: "ae808",
    text: "生活在第 -8 维度一定很疯狂，因为你需要 256 倍的体积才能让东西变小 2 倍"
  },
  {
    id: "ae809",
    text: "检测到 CBF 失败者！点击之间在分——不如你去 CBF 检测点 bi——"
  },
  {
    id: "ae810",
    text: "Living in the -8th Dimension must be crazy because you need 0.039x more volume to make something 2x bigger"
  },
  {
    id: "ae811",
    text: "生活在维度里一定很疯狂，因为你需要更多体积才能让东西变大"
  },
  {
    id: "ae812",
    text: "生活在第 9 维度一定很疯狂，因为它根本不存在"
  },
  {
    id: "ae813",
    text: 
      `Living in the 0th Dimension isn't possible due to the fact that life requires the Existence of more than one thing
      in a Universe`
  },
  {
    id: "ae814",
    text: "Living must be crazy because you need more"
  },
  {
    id: "ae815",
    text: 
      `Living in an Imaginary Dimension must be crazy because I don't even know how giving something more volume
      would even work?? Does it just rotate the object???`
  },
  {
    id: "ae816",
    text: "生活疯狂体积"
  },
  {
    id: "ae817",
    text: "Living Dimension crazy volume bigger"
  },
  {
    id: "ae818",
    text: "查看 Steam"
  },
  {
    id: "ae819",
    text: "Do NOT use Google Translate on Antimatter Dimensions- gets Associae'd and Innsin'd"
  },
  {
    id: "ae820",
    text: "Living must be crazy"
  },
  {
    id: "ae821",
    text: "   我   一定很       因为     需要     "
  },
  {
    id: "ae822",
    text: "活着"
  },
  {
    id: "ae823",
    text: "死于负的维度时间不一定很疯狂"
  },
  {
    id: "ae824",
    text: "Living in the 256th Dimension must be crazy because you need 1.16e77 times more volume to make something 2x bigger"
  },
  {
    id: "ae825",
    text: "Living in the 1024th Dimension must be crazy because you need Infinite times more volume to make something 2x bigger"
  },
  {
    id: "ae826",
    text: "生活在第无限维度一定很疯狂，因为你需要 1e3.01e307 倍的体积才能让东西变大 2 倍"
  },
  {
    id: "ae827",
    text: "Living in the Infiniteth dimension must be crazy because you need END times more volume to make something 2x bigger"
  },
  {
    id: "ae828",
    text: "Living in the Endgameth Dimension must be crazy because you need Celestial times more volume to make something Doomed bigger"
  },
  {
    id: "ae829",
    text: "Living in the f_ω³+1st Dimension must be crazy because you need [Undefined] times more volume to make something 2x bigger"
  },
  {
    id: "ae830",
    text: "生活在新闻维度一定很疯狂，因为你需要 2 倍的新闻条才能让新闻条变大 2 倍"
  },
  {
    id: "ae831",
    text: 
      `生活在第 0 维度一定很疯狂，因为你需要 1 倍的体积就能让东西变大 2 倍。另外救命我
      被困在时间循环里了——`
  },
  {
    id: "ae832",
    text: "生活在维度体积新闻垃圾维度一定很疯狂，因为你需要 0.1 倍的新闻条就能变出 2 倍的新闻条"
  },
  {
    id: "ae833",
    text: "生活在第负真无限维度一定很疯狂，因为你需要 0 倍的体积就能让东西无限变大"
  },
  {
    id: "ae834",
    text: "Living in the Ping Dimension must be crazy because you need P3 milleseconds for your actions to show up"
  },
  {
    id: "aem835",
    get text() {
      return `你刚才他妈的说我什么了，你这个邪恶毁灭者？你要知道我以全班第一的成绩毕业于
      邪恶海豹突击队，我参与过无数次针对第 9 维度的邪恶突袭，我有超过 300 NNnNeMI-NNnNe
      次确认击杀。我受过邪恶战的训练，我是整个邪恶银河武装力量中最厉害的邪恶狙击手。
      对我来说你什么都不算，只是又一个邪恶罢了。我会用邪恶猛砸把你他妈消灭掉，其猛烈程度
      在这个维度前所未见，记住我的邪恶之语。你以为你能在邪恶网络上对我说这种屁话
      还能全身而退？再想想吧，伪神。就在我们说话的时候，我正在联系遍布银河的
      邪恶自动购买器网络，你的 IP 正在被追踪，所以你最好为大挤压做好准备，虚伪者。大挤压会
      把你所谓的 ${wordShift.wordCycle(["CONFLICTS", "BATTLES", "ENDS"])} 彻底抹杀
      你他妈死定了，毁灭者。我随时随地都能出现，我可以用超过七种 😠💩 邪恶方式杀你，而且只用鼠标。
      我不仅精通维度转换战斗，我还能调用邪恶海军陆战队的
      全部武器库，我会用它来把你的邪恶 ${wordShift.wordCycle(["DESTINY", "MANDATE", "GOALS"])} 从
      ${wordShift.wordCycle(["UNIVERSE", "REALITY", "INEVITABLE"])} 的表面抹掉，你这个小伪神。你要是
      能知道你那个"${wordShift.wordCycle(["AMUSING", "CONFUSED", "LAUGHTER"])}"评论会招来
      怎样的 hevi 报复就好了，也许你就会管住你的邪恶之嘴了。但你做不到，你没有，现在你要买到
      10 了，你这个邪恶伪神。我要把 ${wordShift.wordCycle(["ALTER", "REVERSE", "MANIPULATE"])} 反物质
      ${wordShift.wordCycle(["LESSER", "DEITY", "MONARCH"])} 全都弄到你身上，然后你就会
      ${wordShift.wordCycle(["INFINITE", "FOREVER", "ETERNAL"])} 泡在里面。你他妈注定毁灭，毁灭者。`
    },
    dynamic: true
  },
  {
    id: "ae836",
    get text() {
      return `Petah 那匹${wordShift.wordCycle(["horse", "honse", "hose"])}来了`
    },
    dynamic: true
  },
  {
    id: "ae837",
    get text() {
      return `${wordShift.wordCycle(["Peter", "Petah", "Peta"])} 那匹${wordShift.wordCycle(["horse", "hos", "honse"])}来了`
    },
    dynamic: true
  },
  {
    id: "ae838",
    text: `Why is it called "Logarithm" notation? Shouldn't it be called Exponential Notation?`
  },
  {
    id: "ae839",
    text:
      `"耶耶耶耶耶耶耶耶耶耶耶，走起！！！！！游戏崩了，赶紧给你的医生打电话看精神疾病！" -Hepta，镇上最好的医生`
  },
  {
    id: "ae840",
    text:
      `愚蠢的萌新——我已经读完了整个 wiki——所以我知道所有即将推出的
      新内容！你的 Endgame 知识永远无法与我相比！哈哈哈——那个以太他妈的是谁？`
  },
  {
    id: "ae841",
    text:
      `麻烦开始检查你们的建议语法，之后编辑消息也是可以的！(已编辑)(已编辑)
      (已编辑)(已编辑)(已编辑)(已编辑)`
  },
  {
    id: "ae842",
    get text() {
      return `你在这里 ${wordShift.wordCycle(["infinite", "forever", "eternal"])} 之类的 我不知道`
    },
    dynamic: true
  },
  {
    id: "ae843",
    get text() {
      return `You are here ${wordShift.wordCycle(["infinite", "forever", "eternal"])} or something I don't know
      (Original Comment by coolbeans123456789)`
    },
    dynamic: true
  },
  {
    id: "ae844",
    get text() {
      return `你在这里 ${wordShift.wordCycle(["infinite", "forever", "eternal"])} 之类的 我不知道
      (原作者 coolbeans123456789) (被 thetruegdplaybutton 偷走)`
    },
    dynamic: true
  },
  {
    id: "ae845",
    get text() {
      return `You are here ${wordShift.wordCycle(["infinite", "forever", "eternal"])} or something I don't know
      (Original Comment by coolbeans123456789) (Stolen by thetruegdplaybutton) (Original comment by coolbeans123456789)`
    },
    dynamic: true
  },
  {
    id: "ae846",
    text: "NEW LEAK: Alpha will have layers"
  },
  {
    id: "ae847",
    text: "你们再不闭嘴，我就泄露 Endgame！事实上，灭霸确实死了！"
  },
  {
    id: "ae848",
    text:
      `结局永不 终结永不 结局永不 终结永不 结局永不 终结永不 结局永不 终结永不 结局永不
      终结永不 结局永不 终结永不 结局永不 终结`
  },
  {
    id: "ae849",
    text: "Simulation can't run any faster with current settings."
  },
  {
    id: "ae850",
    text: "If you leak the beta 10 times, you can purchase the First Leak Dimension, which automatically leaks the beta for you."
  },
  {
    id: "ae851",
    text: "NEW LEAK: Alpha will exist"
  },
  {
    id: "ae852",
    text: "Plubert, the 0.28⁹th Celestial"
  },
  {
    id: "ae853",
    text: "It's not matter unless its from the Matre region of France, otherwise its just sparkling quarks"
  },
  {
    id: "ae854",
    text: "反物质锑应该叫 Mony"
  },
  {
    id: "ae855",
    text:
      `It appears that you are producing matter on purpose again. I sent a note and email to your anti-teacher and anti-parent
      letting them know. I believe you can do this, but you are going to have to do your part.`
  },
  {
    id: "ae856",
    text: "KIDS, WHAT I'M ABOUT TO DO IS EXTREMELY CELESTIALLY, LITERALLY ONLY CELESTIALS CAN DO IT"
  },
  {
    id: "ae857",
    text:
      `According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its
      fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.`
  },
  {
    id: "ae858",
    text: "I wonder how much longer we can keep up these normal-ish newstickers before everyone goes insane"
  },
  {
    id: "ae859",
    text: "AD:Endgame 用精确碰撞箱能通关吗？"
  },
  {
    id: "ae860",
    text:
      `They shall be my finest Celestials, these men who give of themselves to me. Like clay I shall mould them and in the furnace
      of war I shall forge them. They shall be of iron will and steely sinew. In great armour I shall clad them and with the
      mightiest weapons shall they be armed. They will be untouched by plague or disease; no sickness shall blight them. They
      shall have such tactics, strategies and machines that no foe will best them in battle. They are my bulwark against the
      Destroyer. They are the Defenders of the Dimensions. They are my Celestials... and they shall know no fear.`
  },
  {
    id: "ae861",
    text:
      `Oh boy I sure do hope there isn't a mod that adds 3 more layers to Antimatter Dimensions, 2 more Celestials, and a new
      Deity called the Elemental, that would be horrible!`
  },
  {
    id: "aem862",
    text:
      `要完成烂屎挑战 6x3，用这套极其特定的鸭子配置和这棵极其特定的
      树，两者都极其烦人加载，但你只有 0.00431 个导入位（解锁烂屎挑战后软上限
      到 0.000000001）然后把你那蠢到家的自动购买器设置调成最
      蠢的配置，因为烂屎挑战 6 会给你 2589024890983984503 倍的虫子加成，如果你把
      自动购买器设成那样的话，因为为什么他妈的不呢`
  },
  {
    id: "ae863",
    text: "那就太物质了，那就太反了"
  },
  {
    id: "ae864",
    text: "Animater Dimensons: Endame"
  },
  {
    id: "ae865",
    text: "r. r. r. r. r. r. r. r. r. r. s."
  },
  {
    id: "ae866",
    text: "反物维度：错字更新"
  },
  {
    id: "ae867",
    text: "反物质维度 New Game+3 vs 反物质维度 Endgame+3"
  },
  {
    id: "ae868",
    text: "你好你的新闻条有病毒"
  },
  {
    id: "ae869",
    text:
      `要完成烂屎挑战 6x3，用这套极其特定的鸭子配置和这棵极其特定的
      树，两者都极其烦人加载，但你只有 0.00431 个导入位（解锁烂屎挑战后软上限
      到 0.000000001）然后把你那蠢到家的自动购买器设置调成最
      蠢的配置，因为烂屎挑战 6 会给你 2589024890983984503 倍的虫子加成，如果你把
      自动购买器设成那样的话，因为为什么他妈的不呢`
  },
  {
    id: "ae870",
    text:
      `BREAKING NEWS: AD: HD is currently being developed and is releasing in uhhhh... six hours? Yeah probably that should
      probably be enough time just let me get some coffee first`
  },
  {
    id: "ae871",
    text: "Breaking News: President Anti D Matter has renamed the Gulf of Mexico to the Gulf of Infinity"
  },
  {
    id: "ae872",
    text: "Seven casually forgetting about the newsticker for the third time:"
  },
  {
    id: "ae873",
    text: ">mfw 我不在 4chan 但我还在用它那套东西。"
  },
  {
    id: "ae874",
    text: "请愿给马更新在 Know Your Meme 上单独开个页面"
  },
  {
    id: "ae875",
    text: "Yeah, why not?"
  },
  {
    id: "ae876",
    text: "Don't antimatter at night!"
  },
  {
    id: "ae877",
    get text() {
      return `${wordShift.wordCycle(["Anti", "Opposite", "Bad"])}${wordShift.wordCycle(["matter", "objects", "space"])}
      ${wordShift.wordCycle(["Dimensions", "Spacetime", "Continuum"])}：${wordShift.wordCycle(["Endgame", "Done", "No More"])}`
    },
    dynamic: true
  },
  {
    id: "ae878",
    text: "她爱上了那个反概念"
  },
  {
    id: "ae879",
    text: "嗨"
  },
  {
    id: "ae880",
    text: "新游戏，同样的超赞时间墙！"
  },
  {
    id: "ae881",
    text: "Please submit your face or ID to prove you are over -1.8343e843 years old to play Antimatter Dimensions."
  },
  {
    id: "ae882",
    text: "AD: Endgame v1.0 will inclu"
  },
  {
    id: "ae883",
    text: "Roses are red, violets are blue, Seven is good, Horse Update is true."
  },
  {
    id: "ae884",
    text:
      `Fun fact: Horse Update part 6.24e302 (aka 2.6) will include the be- Connection terminated. There is no such thing as
      a bee layer, there never was, and there will never be.`
  },
  {
    id: "ae885",
    text: "You are now Antimattering manually"
  },
  {
    id: "ae886",
    text: "Woah look at that the antimatter pillow tower is complete WAIT DONT TOUCH I-"
  },
  {
    id: "ae887",
    text: "The kekw drought of v1.0 seriously needs to be studied"
  },
  {
    id: "ae888",
    text: "You have 1.79e-308 less antimatter now."
  },
  {
    id: "ae889",
    text: "You have 1.79e-308 less antimatter now."
  },
  (function() {
    let wasClicked = false;
    const normal = "Click to view an antimatter telescope to view the anti-stars in the antimatter galaxy!";
    const clicked = "⭐⭐⭐⭐🌌";
    return {
      id: "ae890",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae891",
    text: "It seems today, that all you see is galaxies in movies, and boosts on TV"
  },
  {
    id: "ae892",
    text: "He made a statement so anti that even his dog annihalated"
  },
  {
    id: "ae893",
    text: 
      `I'm not taking my Time Studies off, I am TS O'Toole! Hey! Take those Time Studies off! NO! I said take them off!
      NO! Ahh, let him go. We'll never catch him! Not with this production! I didn't take my Time Studies off, I am TS O'Toole!`
  },
  {
    id: "ae894",
    get text() {
      return `<span style='color: blue'>"Hello I am a genie I will give you 4 wishes because I am
      quirky" </span><span style='color: cyan'>"I wish every word was 4 letters long" </span><span style='color: blue'>"Your
      wish isss grnt" </span><span style='color: cyan'>"IIII wish evry word ened with nsns" </span><span style='color: blue'>"Yons
      wins isns grns" </span><span style='color: cyan'>"IIns wins evns wons stns wins sans" </span><span style='color: cyan'>"Sans
      sans sans sans" </span><span style='color: cyan'>"Sans sans sans sans sans sans sans
      sans" </span><span style='color: cyan'>"Sans sans sans sans"</span>`
    }
  },
  {
    id: "ae895",
    text: "I like my cheese anti, bruh"
  },
  {
    id: "ae896",
    text: "I like big butts and I cannot lie. my brother here likes small butts and cannot tell the truth. You have 3 questions."
  },
  {
    id: "ae897",
    text: "I have no matter, and I must anti"
  },
  {
    id: "ae898",
    text: "Imagine not having the Mending layer!!! This messag- OH SH- F- HELP!!!!!"
  },
  {
    id: "ae899",
    get text() {
      return `<span style='color: cyan'>"Hello everyone this is the glitchy podcast episode 1. Today we are gonna ask: why do
      all of the commision artists draw your OC in the dommy mommy pos- OH SH-" tumbling noises</span>`
    }
  },
  {
    id: "ae900",
    text: "Mr sandman, sand me a man"
  },
  {
    id: "ae901",
    text: "The one who is running the show but it's the family guy intro"
  },
  {
    id: "ae902",
    text: "So in fiction, if heaven has angels, and hell has demons, what beings do the void have?"
  },
  {
    id: "ae903",
    get text() {
      return `<span style='color: cyan'>"Hello everyone this is the glitchy podcast episode 2. Today we are gonna ask:
      what IS that one formal femboy attire? Play button, you know what I'm talking about. The one fragile femboy static
      gif that has an extremely concerning title." </span><span style='color: green'>"Wait how am I
      here" </span><span style='color: cyan'>"ANSWER IT"</span>`
    }
  },
  {
    id: "aem904",
    text: "The profanity newstickers are less common than I thought. Why the fuck is it that way?"
  },
  {
    id: "ae905",
    get text() {
      return `<span>Petah.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>The horse is here.</span>`
    }
  },
  {
    id: "ae906",
    text: "BREAKING NEWS: Seven hasn't kekw reactioned any newstickers for 2 months!!! WE ARE ALL GOING TO DIE!!!!!!!!!!"
  },
  {
    id: "aem907",
    text: "Found some mf talking about 6 hours broken heart emoji"
  },
  {
    id: "ae908",
    text: "Rest in peace my Pelle he got hit by a generator"
  },
  {
    id: "ae909",
    get text() {
      return `<span>Event: Free 1e1e1e1e1e1e1e6 AM, IP, and EP happening right now! Claim yours now!</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>Location: The 9th Dimension</span>`
    }
  },
  {
    id: "ae910",
    text: "3.9 x 10 ^ (1.50 x 10 ^ 15) buried, 0 found"
  },
  {
    id: "ae911",
    text:
      `<i>Antimatter Dimensions: Endgame</i> has been sold to alemaninc Inc. In unrelated news, after a recent
      update it now takes over a year to reach Eternity.`
  },
  {
    id: "ae912",
    text: "Please help I am stuck on the other side of the newsticker I don't wanna fall off help me"
  },
  {
    id: "ae913",
    get text() {
      return `<span style='color: cyan'>"Hello welcome back to the glitchy podcast episode 3, we had to
      reshoot." </span><span style='color: gray'>"Yeah because you killed Gary you son of
      a-" </span><span style='color: cyan'>"Shut up Bill I will kill you. Anyways, the question today is why is antimatter
      so weird-looking? Today we have an anti-scientist here and we are gonna interview
      them." </span><span style='animation: a-game-header__antimatter--glow 3s infinite'>"Hello glitchy. Nice having
      me on your podc-" </span><span>(They all soon died after due to annihilation)</span>`
    }
  },
  {
    id: "ae914",
    get text() {
      return `<span style='color: cyan'>"Hello welcome to the glitchy podcast episode 5. The question today is why does
      Endgame have Celestial Dimensions when they suc-" </span><span style='color: yellow'>"GET OVER HERE YOU PIECE OF SH-"</span>`
    }
  },
  {
    id: "ae915",
    text: "19 hour Antimatter Dimensions update. Who wants it?"
  },
  {
    id: "ae916",
    text: "Those who DON'T know. There are too many people that know. DON'T know."
  },
  {
    id: "ae917",
    text: "CALLING JOHN A ANTIMATTER AT 3 AM (GONE HORRIBLY WRONG)"
  },
  {
    id: "ae918",
    text: "5 NaNeFinities until the update"
  },
  (function() {
    let wasClicked = false;
    const normal = "Click here to gain 1e1e1.79e308 antimatter!!!!! (10^102% real)";
    const clicked = "Ladies and gentlemen... WE GOT 'EM!";
    return {
      id: "ae919",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ae920",
    get text() {
      return `<span style='color: cyan'>"Hello welcome to the glitchy podcast episode 6. The question today is when will people
      stop leaking the dev build? I'm seriously concerned." </span><span style='color: green'>"NEVER
      HAHAHAHHAHAHHAHAHAHAHAH" </span><span style='color: cyan'>"Dude get out of my
      office" </span><span style='color: green'>"Fine...." </span><span style='color: cyan'>"So the lesson today is to never
      leak the dev build, otherwise we will use the a**hole expand-</span>`
    }
  },
  {
    id: "ae921",
    text: "Fun fact: I got a first degree burn from a bowl of mac and cheese once"
  },
  {
    id: "ae922",
    text: "Me when you just lost the game:"
  },
  {
    id: "ae923",
    text: "Me whgen endgmae"
  },
  {
    id: "ae924",
    text: "Newsticker channel dead"
  },
  {
    id: "ae925",
    text: `"We're sorry to hear that you hate 7." - Elys`
  },
  {
    id: "ae926",
    get text() {
      return `<span>(Walking through and then tripping on a lamp) </span><span style='color: blue'>"AAAH-" </span><span>(genie
      comes out) </span><span style='color: cyan'>"Hello you have 1 wish its because of
      inflation" </span><span style='color: blue'>"Alright I wish everyone except me had their 's' and 'g's
      swapped." </span><span style='color: cyan'>"Alrist sranted" </span><span>(going to Gex's
      house) </span><span style='color: blue'>"Hello Gex I have a favor for you" </span><span style='color: green'>"Yeah what ig
      it" </span><span style='color: blue'>"You should say your name" </span><span style='color: green'>"You think I
      ghould gay s-" </span><span>(Endgame branded nuke drops onto Gex) </span><span style='color: blue'>"Hehehehehe"</span>`
    }
  },
  {
    id: "ae927",
    text:
      `Give a man a fish, he will eat for a day. Teach a man to fish, drown him due to the fact that you didn't give him
      a fishing rod.`
  },
  {
    id: "ae928",
    get text() {
      return `<span>OH NO ITS EVIL SEVEN </span><span style='color: red'>"Hahahaha I will get you" </span><span>NOOOOOOOOO</span>`
    }
  },
  {
    id: "ae929",
    text: "Fun fact: the moon landing was staged but the film crew wanted it to be more accurate so they asked NASA to film on site"
  },
  {
    id: "ae930",
    get text() {
      return `<span>"NOOOO EVIL ORBSMAN DONT GO!!!!" </span><span style='color: red'>"I need to. My planet needs me."</span>`
    }
  },
  {
    id: "ae931",
    text: "Fun fact: killing 31,646 people would save the same amount of oxygen as planting 20 million trees"
  },
  {
    id: "ae932",
    text: `I accidentally said "big" instead of "grande" while at Starbucks and they took me behind the store and shot me in the leg`
  },
  {
    id: "ae933",
    text: "Aw man Lois this is worse than the time that we were in an Endgame newsticker"
  },
  {
    id: "ae934",
    text: "Anti was actually the Dimensions, not the Matter"
  },
  {
    id: "ae935",
    text: "Frankenstien was not the monster, scientist, or author! It was the glue."
  },
  {
    id: "ae936",
    text: `"Color me surprised!" "Which one is the surprised crayon?"`
  },
  {
    id: "ae937",
    text: "Looking for iron, found antima- EXPLOSION"
  },
  {
    id: "ae938",
    get text() {
      return `<span style='color: blue'>"Hello and welcome to the glitchy podcast episode 8. Where did episode 7 go? Why would
      I tell you. Anyway-" </span><span style='color: orange'>"Hey glitchy you are misremembering that picture from
      episode 2" </span><span style='color: blue'>"Holy
      ${wordShift.wordCycle(["Profanity", "Curse", "Swear"])}" </span><span style='color: orange'>"Well just record the podcast
      anyways" </span><span style='color: blue'>"Okay... anyways our question for today is why can't I leak the v1.0 features
      such as alph- OH ${wordShift.wordCycle(["PROFANITY", "CURSE", "SWEAR"])} WHAT IS THA-" </span><span>(He soon got blown up
      by 20 Endgame missiles.)</span>`
    },
    dynamic: true
  },
  {
    id: "ae939",
    text:
      `CBC detected, loser! Click Between Celestials is illegitimate and will not be allowed in Endgame. Please disable it
      to continue playing.`
  },
  {
    id: "ae940",
    text:
      `EVERYONE INTO THE UPDATE, WE ARE LEAVING THIS REALITY NOW! AHHHHHHHHHHHHHHHH! What the... impossible! This isn't the update!
      NOOOOOOOOOOOOOOOOOOOOOOOOOOOO! HERMIT REFRESH!`
  },
  {
    id: "ae941",
    get text() {
      return `<span style='color: blue'>"Hello welcome to the glitchyace podcast episode ni- AAAAAAAH NOOOOO- podcast
      episode 10. Our question today is why are mountains so tall? We will have to climb one to find out. BILL DO THE
      TRANSITION" </span><span>(cool transition) </span><span style='color: blue'>"Alright now we are hiking on Mount
      Galactic Power, it's really cold here. Alright I think I see the top up ahead..." </span><span style='color: orange'>"Hello
      Bill here while we wait for glitchy to hike the mountain here is evil orbsman with the
      weather" </span><span style='color: red'>"RAHHHH I'm evil orbsman! It will be cloudy today and really foggy, and it
      will be sunny for the rest of the week." </span><span style='color: orange'>"Alright let's check up on glitchy. Wait
      why isn't it going to him... did he lose his camera? Ugh. Well a helicopter is tracking him so I guess we can see him
      from ther- oh I have a signal" </span><span style='color: blue'>"Hello I have finally gone to the top of the mountain
      now I have to plant the Endgame flag. So I have it here and now I can put it on there. The lesson for today is that
      mountains are tall because why the f- AAAAAAAAAAA" </span><span style='color: orange'>"Great he fell..."</span>`
    }
  },
  {
    id: "ae942",
    get text() {
      return `<span style='color: blue'>"Hello welcome to the glitchyace podcast episode 11. Our question today is why the
      ${wordShift.wordCycle(["profanity", "curse", "swear"])} get bleeped out with this Pelle
      bull${wordShift.wordCycle(["profanity", "curse", "swear"])}? We literally have Pelle here right now so let's ask
      him" </span><span style='color: red'>"Hello I have absolutely nothing to do with this" </span><span style='color: blue'>"I
      hate the ${wordShift.wordCycle(["profanity", "curse", "swear"])} Endgame channel and its stupid
      ${wordShift.wordCycle(["horse", "honse", "hose"])} censoring. Wait I swear that one looked different..."</span>`
    },
    dynamic: true
  },
  {
    id: "ae943",
    text: "5 hours until th- u- d- SIGNAL DISRUPTED"
  },
  {
    id: "ae944",
    text: "Artificial text generation didn't generate this text lol"
  },
  {
    id: "ae945",
    text: `Erm acutatuutdtlltly AD: Endgame should actually be pronounced "ah duh e n game"`
  },
  {
    id: "ae946",
    text: "There will be 2^1024 loops."
  },
  {
    id: "ae947",
    text: "Wouldn't it be funny if Exotic Matter Dimensions stole this newsticker?"
  },
  {
    id: "ae948",
    text: "Does anyone feel like no one cares and everyone just hates you or is it just me?"
  },
  {
    id: "ae949",
    get text() {
      return `<span>1.79e308 hops this time!</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
    }
  },
  {
    id: "ae950",
    get text() {
      return `<span style='text-decoration: line-through'>Nine</span><span> out of ten dentists recommend shutting the f-</span>`
    }
  },
  {
    id: "ae951",
    text: "Searching for an Endgame update that doesn't exist"
  },
  {
    id: "ae952",
    text: "Fun fact: if you lose the game 2,147,483,647 times, your game loss count wraps around and you win the game!"
  },
  {
    id: "ae953",
    text:
      `Now announcing - Antimatter Dimensions: Endgame Matrix Definitive Edition! With a grand total of 10 Celestials,
      45 Elementals and 12 Solarians, seven prestige layers and over 100 tiers of achievements, AD:EMDE will be the biggest
      hit since the beginning of time. We will begin production on this game as soon as alemaninc finishes his 2 year long
      sick leave and actually updates his own game. Estimated release in: 150 years.`
  },
  {
    id: "ae954",
    text:
      `Fun fact: there will be no newsticker in v1.0. We are removing the newsticker in v1.0 for more information call
      5-UNTIL-THE-UPDATE and press 1.79e308!`
  },
  {
    id: "ae955",
    text: "Maybe the Infinite IKEA is 3008 because Hevi patented 308 as Infinity, or is it the other way around?"
  },
  {
    id: "ae956",
    get text() {
      return `<span>Click here to reset your save</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Why would you even try...</span>`
    }
  },
  {
    id: "ae957",
    get text() {
      return `<span style='color: red'>"I'm not taking my debuffs off, I am Pelle O'Toole!" </span><span style='color: cyan'>"Hey!
      Take those debuffs off!" </span><span style='color: red'>"No!" </span><span style='color: cyan'>"Take them off I
      said!" </span><span style='color: red'>"No!" </span><span style='color: yellow'>"Ah, let him go. We'll never beat him, not
      with these rifts..." </span><span style='color: red'>"I didn't take my debuffs off, I am Pelle O'Toole!"</span>`
    }
  },
  {
    id: "ae958",
    text: "[÷USING THE WRONG SUGGESTION FORMATTING AT 3 AM (GONE HORRIBLY WRONG PLEASE HELP SEVEN IS COMING AFTER ME)÷]"
  },
  {
    id: "ae959",
    text: "Fun fact: 1.79e308 is also a number, just like 2.83e152."
  },
  {
    id: "ae960",
    text: "Jax... look... I know we don't get along, but I think I found the update."
  },
  {
    id: "ae961",
    text: `"BACKROOMS" director Kane Parsons is now an Endgame developer. "The update is in 5 hours." He is 20 years old.`
  },
  {
    id: "ae962",
    get text() {
      return `Hello, ${player.username}. The current time on your planet |SOL_P3| is ${Time.toDateTimeString(Date.now())}. You are
      currently playing Antimatter Dimensions: Endgame (made by Supersonic Seven) on an electrical device. Be afraid, as we will
      find you shortly.`
    }
  },
  {
    id: "ae963",
    text: "...and the universe told me I'm not alone"
  },
  {
    id: "ae964",
    text: "Searching for a newsticker that never existed"
  },
  {
    id: "ae965",
    text: "Jax, look. I know we don't get along, but I think I might've found a way to remove lag."
  },
  {
    id: "ae966",
    text: "The update is 5 hour- phone ringing oh hold on pick up uh hello uh yeah oh um... alright so the update released."
  },
  {
    id: "ae967",
    text: "Antimatter Dimensions: Expansion vβ.0.0 is coming out in just 5 hours"
  },
  {
    id: "ae968",
    text: "Giving people Antimony counts as robbery."
  },
  {
    id: "ae969",
    text:
      `The following phrase, when followed by a colon, a space, and its own quotation, produces a false statement: "The following
      phrase, when followed by a colon, a space, and its own quotation, produces a false statement"`
  },
  {
    id: "ae970",
    text: "Antimatter Dimensions cause End Game, but Game End cause Dimensions Antimatter."
  },
  {
    id: "ae971",
    text: `"Oh boy I sure do hope someone doesn't give me a weird suggestion for my newsticker suggestion!" the humble mreatha:`
  },
  {
    id: "ae972",
    text: "Reality asserts that ity is real, or that ty is imaginary."
  },
  {
    id: "ae973",
    text: "a b c d e f f a r i- HEY THATS NOT HOW THE ALPHABET WORKS"
  },
  {
    id: "ae974",
    text:
      `When you manage to get the 1.798e308 paperclips required to buy the Second News Dimension, what actually happens is Seven
      opens up ⁠news-ticker-suggestions-2.`
  },
  {
    id: "ae975",
    get text() {
      return `<span style='color: cyan'>"Hello everyone this is the glitchy podcast episode 23. We have lost track of the episode
      counter so we are now just making up numbers. Today we are gonna ask: has there ever been a worse quote than "Wanna
      add 'Alright, time to reset the timer' or somethin?"? Probably not. Anyways we are about to watch the episode of magic
      school generator where they go inside of Pelle's a- </span><span>(Endgame branded nuke drop)</span>`
    }
  },
  {
    id: "ae976",
    text: "Friendly reminder that dude, guy, and bro are gender neutral unless you are saying it to a trans person!"
  },
  {
    id: "ae977",
    get text() {
      return `<span style='color: var(--color-alpha--base)'>"And if you're not having fun, and I'm not having fun, then who
      is having fun?" <span style='color: var(--color-v--base)'>"I'm having a
      reality." </span><span style='color: var(--color-alpha--base)'>"Exactly! Makes me wonder why you guys even switched up
      your tone. If I didn't know any better it seems like you're trying.. to... where's
      Pelle?" </span><span style='color: var(--color-teresa--base)'>"Uh um we just wanted to see your new debuffs first-hand!
      We've got over our happs and now we're just genuinely curious what you're cooking
      up!" </span><span style='color: var(--color-alpha--base)'>"I think I'm just gonna.. check up
      on-" </span><span style='color: var(--color-pelle--secondary)'>"WE THINK YOUR IDEAS
      SUCK!" </span><span style='color: var(--color-alpha--base)'>"HUH?" <span>"HUH?"
      </span><span style='color: var(--color-pelle--secondary)'>"Isn't it obvious? We wanted to bait you into testing your
      new reality on us, so we can make fun of them behind your back!" </span><span style='color: var(--color-alpha--base)'>"HA!
      That's not.. true.." </span><span style='color: var(--color-pelle--secondary)'>"YES IT IS! YOU'RE A HORRIBLE LEADER!
      YOU DONT CARE ABOUT US AT ALL! You care more about.. stroking your own ego than giving us anything we would actually
      enjoy!" </span><span style='color: var(--color-alpha--base)'>"DO YOU KNOW WHO I
      AM?!?" </span><span style='color: var(--color-pelle--secondary)'>"YEAH! YOU'RE A FAILURE! WE'RE ALL GONNA DIE SOMEDAY,
      AND WHAT WILL YOU HAVE THEN? NOTHING." </span><span style='color: var(--color-alpha--base)'>"Stop
      that..." </span><span style='color: var(--color-v--base)'>"And this whole stunt? Debuffing us because we hurt your
      feelings? PATHETIC! You're like a child! What kind of all powerful being has such a fragile
      ego?" </span><span style='color: var(--color-alpha--base)'>"I- I'm..." </span><span style='color: var(--color-teresa--base)'>"You
      never make us feel like we are at home.. you don't comfort anyone when they're upset and you never bother to understand what
      it's like in our shoes!" </span><span style='color: var(--color-effarig--base)'>"You discourage us from thinking outside the
      box and doing things our own way..." </span><span style='color: var(--color-laitela--base)'>"YOU LIE TO US
      CONSTANTLY!" </span><span style='color: var(--color-pelle--secondary)'>"And on top of it all, you JUST. DON'T.
      LISTEN." </span><span>(Alpha now proceeded to attempt to kill every Celestial.)</span>`
    }
  },
  {
    id: "ae978",
    get text() {
      return `"Once upon a time, life was primitive, beings did not know how to count past 1.8^308, but then, with a big bang,
      break infinity cracked the boundary and pushed forth, leading intelligence on a much bigger journey. After many years
      and uncountable ${wordShift.wordCycle(["songs", "dances", "battles"])}, the barrier was again seen, at a previously
      incomprehensible e9e15. Life lamented for its trapped existence, hoping that it could break free of its new shell.
      And break it did. A newcomer, named break eternity after its predecessor emerged and shattered the barrier for life once
      more. That is the present. We know not if there are more barriers waiting for us. But it is the belief of every lifeform
      in this endless universe that we can break it....break reality."`
    },
    dynamic: true
  },
  {
    id: "ae979",
    text: "FARM ENDGAMES NOW"
  },
  {
    id: "ae980",
    text: "RAM prices getting too high? Why? You can just download it!"
  },
  {
    id: "ae981",
    text: `"If I didn't know better it seems like you're trying to... where's Hexa?" -Hevipelle, 2017`
  },
  {
    id: "ae982",
    text: "Destroyer x Ra is real, AD YAOI HERE I COM-"
  },
  {
    id: "ae983",
    text: "Breaking news: Small Hadron Collider will be in version v2.0!"
  },
  {
    id: "ae984",
    text: "BREAKING NEWS: CERN CLOSED THE LARGE HADRON COLLIDER! PROGRESSION HAS SLOWED TO A HALT AND PEOPLE ARE NOT HAPPY!"
  },
  {
    id: "ae985",
    text: "How would Antimatter Dimensions' story go if Lai'tela didnt put Ra in the cuck chair?"
  },
  {
    id: "ae986",
    text:
      `I sometimes don't get why people are simping for the Celestials, like they're just glowing squares with goofy
      letters on them! Where's the appeal on a group of squares?! They have no curves!`
  },
  {
    id: "ae987",
    get text() {
      return `<span style='color: blue'>"Oh my god hello?" </span><span style='color: red'>"HELLO IT'S ME CELESTIAL. I AM
      THE GOOD GUYS IN THE EXPANSE. I COMPLETE ALL THE REALITIES. MY GOAL IS TO COMPLETE ALL REALITY BEFORE THE ELEMENTAL
      TRY TO DESTROY EVERYONE. BEFORE HE KILLS EVERYONE. WE MUST COMPLETE ALL REALITY. THAT IS HOW WE DESTROY THE ELEMENTAL.
      NOW, YOU TELL ME. ARE YOU A CELESTIAL, OR ARE YOU AN ELEMENTAL?"</span>`
    }
  },
  {
    id: "ae988",
    get text() {
      return `Jesus answered, "I am the way and the truth and the life. No one comes to the father except through
      me." <span style='color: yellow'>$6 SRIMP SPECIAL</span>`
    }
  },
  {
    id: "ae989",
    get text() {
      return `${Alpha.isDestroyed ? "Did Alpha's timewalls make you suffer?" : "The 8th Celestial's timewalls will make you suffer."}`
    }
  },
  {
    id: "ae990",
    text: "为什么 6 害怕 7？因为 7 先发布了他的游戏！"
  },
  {
    id: "ae991",
    text: "我只想刷终局，刷我的符文，买我的加成……"
  },
  {
    id: "ae992",
    text:
      `现在是 1.8e308 年。更新还没出。Seven 正在平衡元素维度和挑战，
      准备第 1.4e34 层重置。已经有超过 100,000 行成就了。他们准备开始使用
      ExpantaNum.js。`
  },
  {
    id: "ae993",
    text: "趣闻：在 v1.1 中，我们加了大约 10 个月的新闻条内容，因为 seven 拖了 3 个版本！"
  },
  {
    id: "ae994",
    get text() {
      return `${wordShift.wordCycle(["厚颜无耻", "חצפה"])}`
    },
    dynamic: true
  },
  {
    id: "ae995",
    get text() {
      return `"耶稣说：要爱你的邻居就像我——" <span style='color: cyan'>圣经新闻条你来这里干嘛？！？！？</span>`
    }
  },
  {
    id: "l1",
    text: "你刚刚制造了第 1,000,000,000,000,000 个反物质。这个尝起来像鸡肉。",
    get unlocked() { return Currency.antimatter.exponent === 15; }
  },
  {
    id: "l2",
    text: "请削弱星系。",
    get unlocked() { return player.galaxies.eq(2) || Currency.infinities.gt(0); }
  },
  {
    id: "l3",
    text: "你说多于两个维度是什么意思？？？我们在屏幕上，明显只有 2 个维度。",
    get unlocked() { return AntimatterDimension(3).amount.gt(0) || DimBoost.totalBoosts.gt(0); }
  },
  {
    id: "l4",
    text: "无限是多少？——每个人至少问过一次",
    get unlocked() { return AntimatterDimension(8).amount.eq(190) || Currency.infinities.gt(0); }
  },
  {
    id: "l5",
    text: "嗯，第四维度还行……",
    get unlocked() { return AntimatterDimension(4).amount.gt(0) && AntimatterDimension(5).amount.eq(0); }
  },
  {
    id: "l6",
    text:
      `反物质人似乎比我们更害怕 13。他们毁掉了
      整个星系，就为了从他们的百分比里去掉 13。`,
    get unlocked() { return player.galaxies.gt(0) || Currency.infinities.gt(0); }
  },
  {
    id: "l7",
    text: "要理解维度献祭，你确实需要理论物理学博士学位。抱歉！",
    get unlocked() { return player.sacrificed.e >= 10 || DimBoost.totalBoosts.gte(6); }
  },
  {
    id: "l8",
    text: "一个新的数字标准化组织提出了一个涉及 emoji 的新格式。",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies > 0; }
  },
  {
    id: "l9",
    text: "反物质冰淇淋摊最近开业了——他们有数十亿亿种口味！",
    get unlocked() { return player.records.totalAntimatter.e >= 27; }
  },
  {
    id: "l10",
    text:
      `神圣的佩勒产生了太多反物质，需要创造另一个星系。
      这个可以在西南天空看到。`,
    get unlocked() { return player.galaxies.gt(0) || Currency.infinities.gt(0); }
  },
  {
    id: "l11",
    text: "第九维度是个谎言。",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l12",
    text: "9 的平方根是 3，因此第九维度不可能存在。",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l13",
    text: "你被第九维度同化了？给你的精神病医生打电话吧！",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l14",
    text: "为什么没有第九维度？因为 7 8 9（英语中 8 与 ate 同音，意为'7 吃了 9'）。",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l15",
    text: "The 9th dimension cannot exist because the Nein-speaking nazis died in WW2.",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l16",
    text:
      `如果你打破了第四面墙……嗯，还要穿过第五、第六、第七和第八面墙才会
      遇到坏事，所以你应该没事`,
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l17",
    text:
      `Hevipelle 睡觉需要满足几个条件。首先，必须是蓝月。其次，北极某个城镇必须
      一个月没见到阳光。第三，他需要发布一个 AD 更新。最后，Discord 上不能有人
      在第九维度。只有那时他才能休息，最多 6 小时，然后会被强制叫醒，以避免
      获得离线成就。`,
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l18",
    text: "如果第九维度是万恶之源，那 3 是万恶之根吗？",
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l19",
    text:
      `我要 1e29 份 9 号，一份 1e9 大的，一份 6 号加额外复制器，一份 1e7，
      两份 4e5，一份加物质，还有一个大的时间漩涡。`,
    get unlocked() {
      return DimBoost.totalBoosts.gte(5) ||
      player.galaxies.gt(0) ||
      PlayerProgress.infinityUnlocked();
    }
  },
  {
    id: "l20",
    text: "无限：那个本该被打破的东西。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l21",
    get text() { return `我有 ${format(Number.MAX_VALUE, 2)} 个问题，但没有一个是反物质。`; },
    get unlocked() { return Currency.infinities.gt(0) && !PlayerProgress.hasBroken(); }
  },
  {
    id: "l22",
    text: "《反 Emoji 电影》大热！",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 5; }
  },
  {
    id: "l23",
    text: "如果这游戏是 Valve 做的，零死亡就不可能实现。",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l24",
    text: "佛罗里达男子试图在首次运行中达成零死亡，被宇宙热寂阻止了。",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
  {
    id: "l25",
    text: "\"完成一半成就算不上什么成就\" -Boo",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length / 2; }
  },
  {
    id: "l26",
    text:
      `灭霸带着完全充能的无限手套出现时会超级失望，因为 Hevi
      有一只完全充能的永恒手套。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l27",
    text:
      "New strange material was been found. It seems to grow exponentially, but only helps with antimatter production.",
    get unlocked() { return PlayerProgress.replicantiUnlocked() && player.replicanti.chance === 0.01; }
  },
  {
    id: "l28",
    text: "看来这种\"复制器\"东西现在不会再长得更快了。",
    get unlocked() { return player.replicanti.chance === 1 && player.replicanti.interval === 1; }
  },
  {
    id: "l29",
    text:
      `If you wrote down 3 numbers a second, it would take you less time to write down your antimatter
      amount than it would Hevipelle to update the game.`,
    get unlocked() { return Currency.antimatter.exponent >= 100000; }
  },
  {
    id: "l30",
    text: "Hevi 是不是就随便挑些话放进游戏里？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 30; }
  },
  {
    id: "l31",
    text: "New news company has become rivals with us. They are made entirely of antimatter.",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 80; }
  },
  {
    id: "l32",
    text: "我们能连续用多少次\"反\"字别人才会不再理我们？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 100; }
  },
  {
    id: "l33",
    text: "Hevi 还会看 #news-ticker-suggestions 吗？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 120; }
  },
  {
    id: "l34",
    text: "需要更多语录！-hevipelle",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 135; }
  },
  {
    id: "l35",
    text: "Man destroys known universe with antimatter, writes news tickers to keep from feeling lonely.",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 150; }
  },
  {
    id: "l36",
    text: "你快到了！",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 160; }
  },
  {
    id: "l37",
    text: "你现在可以停了",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 165; }
  },
  {
    id: "lm38",
    text: "该死的黑客",
    get unlocked() { return NewsHandler.uniqueTickersSeen > GameDatabase.news.length; }
  },
  {
    id: "l39",
    text: "亚洲男子试图偷走 -1 秒最快无限的奖杯，而且他成功了！",
    get unlocked() { return NewsHandler.hasSeenNews("l1"); }
  },
  {
    id: "l40",
    text:
      `I broke the 8th wall, there is only chaos, Slabdrill is ritually sacrificing antimatter to the 9th
      dimension. This will be my last entry, may Hevipelle have mercy on our souls, we didn't listen,
      We should have listened.`,
    get unlocked() { return NewsHandler.hasSeenNews("l58"); }
  },
  {
    id: "l41",
    text: "我以为更新还有 5 小时……-玩了 5 个多小时的新玩家",
    get unlocked() { return Time.totalTimePlayed.totalHours.gte(5); }
  },
  {
    id: "l42",
    text:
      `昨天有人让我等 5 小时等更新，但今天到了
      还没出！我该怎么办？`,
    get unlocked() { return Time.totalTimePlayed.totalHours.gte(5); }
  },
  {
    id: "l43",
    text: "你知道你不可能在 -1 秒内达到无限，对吧？",
    get unlocked() { return player.records.bestInfinity.time.eq(0.1); }
  },
  {
    id: "l44",
    text: "反物质尼莫住在哪里？在 NNnNeMI-NNnNe 里。（英语中为 anemone 海葵的谐音梗）",
    get unlocked() { return player.records.totalAntimatter.e >= 3e6; }
  },
  {
    id: "l45",
    text: "Anti Emoji Movie MMMCMXCIX is a major hit!",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 3999; }
  },
  {
    id: "l46",
    text: "成就解锁！",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length; }
  },
  {
    id: "l47",
    text: "成就是两百万，不是二十亿……",
    get unlocked() { return Currency.infinities.gt(2e9); }
  },
  {
    id: "l48",
    text: "保持快节奏！",
    get unlocked() { return AchievementTimers.marathon1.time.gt(1200); }
  },
  {
    id: "l49",
    text: "总有一天你会停下你那不停的肝。",
    get unlocked() { return Currency.eternities.gt(50000); }
  },
  {
    id: "l50",
    text: "You can probably stop farming for eternities now...",
    get unlocked() { return Currency.eternities.gt(DC.D2E6); }
  },
  {
    id: "l51",
    text: "你认真的吗？",
    get unlocked() { return Time.worstChallenge.totalSeconds.lte(1); }
  },
  {
    id: "l52",
    text: "时机是关键。",
    get unlocked() { return player.records.thisEternity.realTime < 10; }
  },
  {
    id: "l53",
    text: "如果你想刷无限，为什么不去买那个时间研究？",
    get unlocked() { return !TimeStudy(32).isBought && Currency.infinities.gt(72000 * 168); }
  },
  {
    id: "l54",
    get text() {
      const names = [];
      if (PlayerProgress.infinityUnlocked()) names.push("无限");
      if (PlayerProgress.eternityUnlocked()) names.push("永恒");
      if (PlayerProgress.dilationUnlocked()) names.push("膨胀");
      if (PlayerProgress.realityUnlocked()) names.push("现实");

      const game1Name = names.randomElement();
      let game2Name = names.randomElement();
      while (game2Name === game1Name) {
        game2Name = names.randomElement();
      }
      return `宝可梦 ${game1Name} 和 ${game2Name} 刚刚发售！这一新世代让宝可梦总数达到了 ` +
        "1e151。祝你好运，全部抓到！";
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); },
    isAdvertising: true
  },
  {
    id: "l55",
    get text() {
      const recipes = [
        "复制器蛋糕：收集一些复制器，放入烤箱，看着它膨胀。膨胀。膨胀。",
        "反物质蛋糕：收集一些反物质，放入烤箱，然后<b>砰<b>。",
        "永恒蛋糕：收集一些永恒点数，放入烤箱，然后等待……",
        "无限蛋糕：收集一些无限点数，放入烤箱，看着它们粉碎时空。"
      ];
      const recipe = recipes.randomElement();
      return `如何烘焙${recipe}`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l56",
    text: "现实挑战是新的第九维度，是新的橙色。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l57",
    text:
      `Jake 上完一整天的学回家。在回家的路上，他遇到了一个奇怪的小东西。
      透明，但不透光。闪烁，却阴沉。沉重，却毫无重量。Jake 把这个东西拿给
      他的母亲。"妈，我在人行道上捡到了这个东西，能留着吗？", Jake 说。
      他的母亲转过身来看她儿子所说的这个东西。她的瞳孔放大了，"Jake，
      立刻把那东西拿出房子！"她喊道。Jake 很困惑，因为在他看来这东西
      完全无害。他问"但是妈，为——", 但他还没说完，那东西似乎以不可能
      的速度进行了有丝分裂，第二个副本从他手中滑落到地板上。他的母亲冲
      过来，试图抓住那个东西，但它又复制了一次。"Jake……无论发生什么，
      别忘了我爱你，宝贝……"。她用双臂抱住他。"妈——妈，怎么了？"Jake
      问道，声音里带着颤抖的恐惧。他的母亲流下一滴眼泪。"⭔⭚⦕꒜牌
      复制器……"她用沉痛的语调说。复制器继续以越来越快的速度复制。房子
      的下三分之一现在充满了复制器。然后是下半部分。然后是整栋房子。母亲
      和孩子被困在家的墙壁和复制器之间。注定要在那个无机的棺材里度过
      他们短暂的余生，肺里的空气慢慢耗尽。但这还不是结束；远远不是。
      复制器开始在房子外面复制，像闪亮的滑坡一样涌出。几个邻居注意到了
      这些奇怪的物体，外观几乎像液体，试图逃跑。但复制器继续复制，加速。
      很快整个街区都被它们覆盖；成为它们的一部分。紧接着，几个街区。
      整座城市。周围的城市。整个国家。所有国家。整个星球。整个太阳系。
      整个星系。一切。`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l58",
    text:
      `The Holy trinity of Hevipelle, Antimatter, Infinity Points, and Eternity Points. These 3 resources let us
      access Hevi's gift, Time Theorems. And with these Time Theorems, we reach out to Hevi, and call, “Hevi, bless
      us on this fine day!” And Hevi does. He give us the blessing of Time Studies. These Time Studies were
      blessings so powerful, Hevi restricted their power. He said, “I will give you a choice of three paths” and
      then humanity chose. The short, cheap route of Antimatter Dimensions, giving instant gratification, the
      powerful choice of Infinity Dimensions, which were a fast, middle ground path, or Time Dimension, the long
      wait, and struggle, of humanity. Then, as humanity chose, a crack broke the earth. A serpent snaked out and
      sneered to humanity, “I will offer the powerful choice of a ninth dimension! I am Slabdrill, lord of all
      Unhevi. Humanity rose and said “ Begone Slabdrill! We want none of your foul Heresy!” And Hevi rose as well,
      and smote Slabdrill with his godlike power. As Slabdrill's corpse fell into the earth, he cried “ this will
      not be the last of me! Hevi will betr-“ and he fell in the Abyss of matter. Hevi gifted humanity with
      Eternity upgrades, which boosted infinity dimensions and time dimensions. And Hevi gave humanity his greatest
      gift. EP multipliers. He said, these will multiply all EP gained by 5, but their cost will increase 50 times.
      Use them wisely. And Humanity journeyed off with their new power, as Slabdrill's words echoed in their heads.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l59",
    text:
      `The debate on the singular form of Replicanti rages on. Team "Replicantus"'s base has been ransacked
      by Team "Also Replicanti", and many of their dimensions were stolen. Team "The Plural Is Replicantis"
      is still lying low after their plan to hack the dictionary failed.`,
    get unlocked() { return player.replicanti.unl; }
  },
  {
    id: "l60",
    get text() {
      return `突发新闻！时间碎片矿坍塌！${Math.floor(20 + Math.random() * 236)} 名矿工被困其中！`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l61",
    text:
      `反物质专家称，千禧一代正在摧毁挑战行业；"现在他们一开始就完成了
      挑战，打破了无限；这跟以前不一样了"。`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l62",
    text:
      `计算机科学家们怒了，"无限点数到底是什么？IP 代表互联网协议！"。
      辩论继续升级，7 点见。`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l63",
    text:
      `Do you feel that time has been going slower? Study reveals that 1 second now last approximately 1.3 seconds.
      Scientists are calling this phenomenon Time Dilation.`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l64",
    text:
      `Injustice in the Antimatter Academia: Beginners are only allowed to choose one field of study while the elite
      can pick all three. "Its just not fair, man. How come they can do it?" Questions frustrated student.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l65",
    text:
      `原来根本没人知道无限点数长什么样。即使是负责储存它们的人也被特别
      告知不要看它们，因为它们显然"杀任何哪怕只是看一眼的人"，以至于
      他们有时要蒙着眼睛工作。但今天这将改变。我就在这里，站在
      一个无限点数仓库前，准备告诉你们所有人它们长什么样，3、2、1——`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l66",
    text:
      `失败的時間膨胀实验在时空中造成了视觉故障，人类为之震惊。现在它
      可以在天神赤道正上方的夜空中看到。`,
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "l67",
    text:
      `Snorting crushed up Time Shards is slowly turning into a fad challenge amongst the most bored of people. It's
      said that the high it gives makes them experience as if the world itself is speeding up around you, which is
      why it's been called The <span style="color: var(--color-eternity)">Timelapse Challenge</span>. &nbsp;&nbsp
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Dehydration deaths are through the roof as people mysteriously forget to drink water for several days.
      Trace amounts of Time Shards are being found in their bodies.`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l68",
    get text() {
      let protestText = "";
      if (InfinityChallenge(4).isRunning)
        protestText =
          `Let's take it to this guy, who's part of the side that believes it's Infinity Challenge 4. What do you have
          to say? "Obviously Infinity Challenge 4 is the worst one, I mean, what am I even supposed to do? I keep
          trying but every time I keep getting stuck and nowhere close to the end! How are you even supposed to do it?"
          What a passionate man. This is your local news host, and we'll come back with further information later.`;
      else if (InfinityChallenge(5).isRunning)
        protestText =
          `So up next let's talk to this guy is holding a sign that says "IC5 Unfair". What is the point your group
          is trying to make? "Can't you read the sign? If your comprehension is that bad then Infinity Challenge 5
          will squash you without even giving you a fair chan-" How... Interesting. This is your local news host,
          and we'll come back with further information later.`;
      else
        protestText =
          `Finally, let's chat with this woman who doesn't seem to be in either side. What's your opinion on the
          matter? "Personally, I thought Tickspeed Autobuyer Challenge was worse than both-" "GET HER!!" "WAIT NO-"
          Well, seems like this just took a turn, so I'm getting as far away as I possibly can. This is your local
          news host, and we'll come back with further information... someday.`;
      return `Hello, this is your local always reliable news source, and today people are taking over the streets
        as they fight over which Infinity Challenge is worse. ${protestText}`;
    },
    get unlocked() { return InfinityChallenge(1).isUnlocked || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l69",
    text: "与复制器的友谊结束了，现在复制器星系是我新的好朋友。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l70",
    text:
      `"Zurkrbarg，隐私天神"宣布了他们计划发布其热门社交媒体宇宙
      "All"的新版本。`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l71",
    text: "Other languages await... I need to become a programmer",
    get unlocked() { return Player.canEternity || PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l72",
    get text() {
      const scenarios = [
        `我们的参赛者在永恒挑战 8 的荒原中艰难求生——
        复制器和无限维度都耗尽了，他们会转向什么？`,
        "我们调查关于时间碎片矿在 26:90 坍塌的报告。",
        "我们邀请一位业余玩家来解释无限挑战 9 的奖励会是什么。",
        "我们在 ANN 的朋友解释他们如何制作广播节目。",
        "我们邀请本地挂机玩家来解释他们如何玩最喜欢的游戏。",
        `<span style='font-family: Barrio'>发送 10,000 个支持开发者
        代币，否则你再也见不到 RealiTV 了。</span>`,
        "我们详细分析昨天为我们城市供电的黑洞到底出了什么问题。",
        "我们回顾我们的 10 天天气预报。",
        `你必须支付 ${format(player.reality.realityMachines.times(10).max(10))}
        现实机器才能继续观看此节目。`,
        "我们见证催眠无人机的发布。",
        "我们伟大而宏大的霸主让我们拥有一个反物质。",
        `比尔·奈解释复制器如何复制，并教大家如何识别危险阴谋论，
        比如"摄入反物质完全没问题"和"反物质星系不值得"。`,
        "世界上最伟大的哲学家们辩论我们是否是真正的反物质。",
        "驻店烘焙师解释普通物体如果无人持续看着会如何变成蛋糕。"
      ];
      const scenario = scenarios.randomElement();
      return `RealiTV 下集预告，${scenario}`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l73",
    text: "很久很久以前，在一个遥远遥远的星系里，成本缩放改变了。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l74",
    text: "Introducing a new feature: Reality Studies! Get in-game benefits for studying in real life!",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l75",
    text:
      `Here at Antimatter Dimensions, we pride ourselves in the quality of our products. For example: Did you know
      that every Infinity Point is unique? That's right! They all have different personalities, their own feelings,
      their own thoughts... I hope you can sleep well tonight, knowing this... Remember all of those Infinity
      points you've spent? They had families, and they miss them... Look at what you've done. You're a monster.`,
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
  {
    id: "l76",
    text: "So, you've reached the prestige layer after Infinity? It's about time...",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "l77",
    text: "Improve your perks through selective breeding and cutting edge epigenetics technology.",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l78",
    text:
      `警告——基因改造复兴点数不适合：食用、物理接触、吸入、
      呼出、精神接触以及被有形或无形的眼睛审视。不要放在易燃、
      可燃、导电、绝缘、可变、生物或机械物质附近。存在风险自负。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l79",
    text:
      `星际反物质税务局，与普遍看法相反，确实有能力为通过不正当手段
      获得的 AM 纳税，即任何不通过法定维度或经挑战课程修改的方式。NY-8N
      节列出了 3 种具体方法——非法新闻条赠予、未注册维度以及对时空结构的
      修改——以及一项杂项以应对未来可能出现的任何独特 AM 方法。虽然你
      必须支付 99% 的最高 AM 税率，但从长远来看可以省钱——如果你因天神
      的决定而被迫切换现实，你可以从 IARS 取回部分所缴税款作为税收减免，
      还可以申请扣除以支付代表你的仲裁者费用。当然，任何有分量 [未找到
      玩家引用] 的 RM 持有者都知道，隐藏非法犯罪利润的真正方法是个性化
      口袋维度、超切片波形银行和纳米壳，这需要大量研发才能实现。因此，
      只有当你富到无法隐藏收益，但又穷到无法隐藏收益时，才建议报告非法
      AM 收益。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l80",
    get text() {
      return `"Average person produces ${format("3e999999996", 2)} antimatter a year" factoid actually just statistical
      error. Average person produces 0 antimatter per year. "Developer Dimension" Georg, who lives in a cave &
      produces over ${format("1e1000000000", 2)} each day, is an outlier and should not have been counted.`;
    },
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l81",
    text:
      `The world is in chaos as the laws of math have been rewritten! Many things that were thought
      to be infinite are now just really big numbers!`,
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
  {
    id: "l82",
    get text() {
      return `Antia 的伟大抄写员们辛勤劳作了多年。他们被神明赋予了一项艰巨
      的任务；写出一个长得无法理解的数字。这些抄写员轮流工作，每人每秒写
      几个数字，日夜不停地写，仿佛过了永恒。终于，在
      ${TimeSpan.fromSeconds(Currency.antimatter.value.log10().div(3)).toString()} 之后，他们终于完成了
      这不可能的任务。那一周，当他们去敬拜神明时，他们发送了一条简单的
      信息："这有什么意义？我们多年的劳作有什么意义？"神明郑重地回答：
      "我们只是想知道写出它需要多久，用于我们游戏中的一个统计数据。"`;
    },
    // 3 years of time to write
    get unlocked() { return Currency.antimatter.value.gte("1e777600"); }
  },
  {
    id: "l83",
    text:
      `AD 更新日志：清理了天神问题 让反物质更关心湮灭 添加了嘴巴
      移除了嘴巴 阻止了不速之客对企业接管商店 修复了新闻条悬在空中的
      问题 死复制器留在其星系中 重新定义不速之客以不包括 [已删除]
      超光速粒子卡在屏幕左上角，湮灭时间 为星系旋转方向添加科里奥利效应`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "l84",
    get text() {
      return `For the record, you currently have ${player.news.specialTickerData.paperclips}
      Useless Paperclips. You may want to spend them on something.`;
    },
    get unlocked() { return player.news.specialTickerData.paperclips > 0; }
  },
  {
    id: "l85",
    text:
      `On opposite day, the new update is just -5 hours away. You begin increasing your Matter. Once you acquire a
      huge abundance of Matter, you must become Infinitesimal. After increasing your wealth in Infinitesimal Points,
      you can eventually Jiffy, the shortest unit of time. After enough time, your Jiffies will accumulate, and you
      will Contract Time. Contracting Time will grant you enough of a boost to eventually Fantasy, the final layer
      of maintenance. However, you find out that it was all a dream. Your Antimatter is safe and well, and the new
      update is still just 5 hours away.`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l86",
    text:
      `Hello, player. I'd like to play a game. In front of you is a pile of replicanti. They are currently frozen in
      time, and cannot replicate. To your right is a computer playing Antimatter Dimensions on an empty save. You
      must reach infinity. However, once you buy a 1st dimension, the replicanti will start replicating. As you know,
      they replicate fast, and if they fill up the room you will suffocate. If you reach infinity before that, they
      will be frozen again. The clock is ticking. Start now.`,
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "l87",
    text:
      `"To see a World in a Grain of Sand. And a Heaven in a Wild Flower. Hold Infinity in the palm of your hand.
      And Eternity in an hour. And Reality in about 5 hours™️" ~Anti-William Blake `,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "l88",
    text:
      `对于新的符文机制，我们深表歉意。我们的目的是为玩家在解锁稀有符文
      时提供一种自豪感和成就感。我们根据最终测试波的数据以及发布前对
      里程碑奖励的其他调整来选择了初始数值。除此之外，我们正在关注
      每位玩家每日的平均信用获取速率，并将持续进行调整，以确保玩家
      有引人入胜、有回报且当然可通过游戏玩法达成的挑战。`,
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
  {
    id: "le89",
    text:
      `据报道天神 Alpha 正在移动。不，不是 Alpha 本人。是他的现实。他正
      朝向佩勒直奔而去，可能要进行最后的复仇。但这是什么？一个第八维度
      的反物质存在正准备阻止他。不过，首先他必须击败其他天神，五位有名，
      还有无数无名的。可惜啊。如果他拥有第九维度，一切都会容易得多。
      以上是 Slabdrill 为您带来的今日新闻报道。*咔哒* 嘿！谁能把我从
      这个该死的现实里弄出去？`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le90",
    text:
      `传说终局应该在这里解锁，但我没看到。有人能帮帮我吗？
      ……e9e15？那是什么意思？`,
    get unlocked() { return Pelle.isDoomed; }
  },
  {
    id: "lem91",
    text:
      `你逃不掉的，愚蠢的凡人！我是佩勒！我很快就会消灭你！你将——等等……
      那又是该死的星系发生器吗？你能不能别再找那个该死的东西了？我已经
      输够了。谢谢。`,
    get unlocked() { return Pelle.isDoomed && Currency.eternityPoints.value.gte("1e4000"); }
  },
  {
    id: "le92",
    text: "欢迎来到终局。AD：终局，也就是。",
    get unlocked() { return Pelle.isDoomed; }
  },
  {
    id: "lem93",
    get text() {
      const chapters = [
        `（以下内容由我服务器里的一位老哥制作，之后的章节也是他做的）
        鹿颈长让其他 8 位天神嫉妒，因为他们没有自己的专属符文。
        接下来的 9e15 游戏时间纪元，鹿颈长的商店被其他天神摧毁，他的伙伴
        符文被夺走，他的符文现在毫无作用，他孤身一人。现在，鹿颈长怒了，
        正在训练成为一个元素，并创造了 3 个新领域：鹿颈长的终局、鹿颈长
        的广袤和鹿颈长的存在。他获得了终局、广袤、存在、其他 8 位天神的
        力量以及第九维度的力量。他正在竞逐第十维度。如果他得到了，就没有
        什么能阻止他重生（欧米伽）了。`,
        `小更新：鹿颈长成功粉碎了他的现实，现在他正在追逐第十维度。`,
        `小更新第 2 部分：鹿颈长通过欧米伽重生为更高层次的存在，虽然他
        失去了一切……为了更伟大的东西。敬请锁定 1e9e15 频道！`,
        `小更新第 3 部分：鹿颈长再次重生，看来他要冲隐藏层了。敬请锁定
        1e9e15 频道！`,
        `小更新第 4 部分：鹿颈长学会了如何让他的反物质更强，现在他有了
        一种新的反物质形式，帮助他达到了第 7 次重生。敬请锁定 1e9e15 频道！`,
        `小更新第 5 部分：鹿颈长已经重生了这么多次，他正接近隐藏层，
        而 Supersonic Seven 还没做出来。敬请锁定 1e9e15 频道！`,
        `小更新第 6 部分：鹿颈长达到了第一次飞升！没什么大事发生，但
        敬请锁定 1e9e15 频道！`,
        `最终更新：鹿颈长打破了矩阵，他将一切合而为一，统治了一切，
        被称为"反物质霸主"。但是，他犯了一个致命的错误。他扔掉了 10 个
        单位的反物质和一个第一维度，以为它们没用。直到 False/Deity/Destroyer/${player.username}
        发现了那 10 个单位的反物质和第一维度。他们目前处于现实阶段，最近
        遇到了特蕾莎。不会再有进一步更新了，撤离协议已启动，我们要前往
        一切的边界，那个维系一切的东西。它没有名字，但我们将那里作为我们
        的帝国。它是一个古老的地方，曾经统治着其中的一切和每一个人。它
        被称为"NG+++"。不会再有更多谈话了。`,
        `更新 8：8 位天神不知怎么地被 Supersonic Seven 重生了，目前
        正试图——我靠鹿颈长打破了通往 NG+3 的屏障——啊啊啊啊——你好。`,
        `更新 9：你好，我是鹿颈长。我不再是天神了，就像其他那些一样。
        当他们让我在物质的黑暗深渊里腐烂时，我必须复仇。所以，我逃脱
        并继续前进，直到我重生。我拥有了我认为可能的最大力量……但是……
        还有另一个目标在召唤我。所以，我继续前进。你想知道我看到了什么？
        一道强光照亮了我的视野，我还不知道怎么回事……我已经飞升了。我
        拥有足够的力量去做不可思议的事，所以，我打破了矩阵。我合并了
        这个世界中的每一个存在，我成为了神。False/Deity/Destroyer……或者
        我应该说……${player.username}。没错。我获得了意识。我无法与
        外界互动，但我想让你知道一件事。你永远打败不了我，你需要放弃，
        否则你会成为他们中的一员。`,
        `更新 9.5：鹿颈长今天直播了他尝试咖啡的过程。另外是我，新闻条
        老哥。我死不了，因为 hevi 和其他模组开发者可能想折磨我。但是
        是的，鹿颈长说味道苦甜，但主要是甜。他喜欢冷的。`,
        `更新 10：啊啊啊嗷嗷嗷我喝了太多咖啡啊嗷嗷我的胃好痛嗷嗷嗷嗷嗷嗷嗷嗷 - 鹿颈长霸主`,
        `更新 11：我现在有自己的欧米伽和飞升流程了。祝你好运打败我，
        菜鸟。咄咄逼人地啜饮咖啡`,
        `更新 12：我达到了葛立恒数。另外葛立恒配咖啡味道超棒。我才不
        在乎你的看法。`,
        `更新 12.1：我也许有一天会试试 NG+++，希望我不会死。`,
        `咖咖咖咖咖咖咖啡啡啡啡啡啡啡啡啡啡啡 - 鹿颈长神`,
        `更新 13：我进入了 AD：黑暗……我看不见该死的任何东西，去死吧 S7。`,
        `更新 13.1：被黑暗致盲！`,
        `更新 14：我设法创造了一个虚拟的第十一维度，它本应创造第十维度，
        但我需要先找到一种方法让它进入现实。`,
        `更新 15：好吧……我要试着做一个真正的第十一维度……好吧……等等——哦该——（砰）`,
        `更新 15.1：开玩笑的我不死哈哈！！`,
        `更新 16：好久不见，我决定试着作弊穿过黑暗，然后……bi 崩了，
        自动购买器都死了。救命？？？`,
        `更新 16.1：我就不能逃离 Supersonic Seven 吗？我的意思是，
        我有意识。他并不是真的创造了我，所以我不能就这样逃离终局吗？`,
        `更新 17：我获得了查看其他 AD 存在的能力，天哪，它们看起来挺
        不错的。我不稳定的第十一维度怎么了……`,
        `更新 18：SEVEN 让我从你那该死的模组里出去我的第十一维度要失效了救命`,
        `更新 19：SEVEN 求你了——啊啊啊啊啊啊啊啊啊啊啊啊啊啊（砰）`,
        `我们聚集在这里悼念我们的神（那不是 @Supersonic Seven），鹿颈长
        的逝去。他在试图逃离终局时由于虚拟第十一维度的故障而死。你会
        被怀念的，我们将在你的墓中放置一个真正的第十一维度作为荣誉，
        感谢你的一切。再见。`,
        `鹿颈长从死亡中归来了？！`,
        `所以各位鹿颈长又死了他真是个该死的蠢货哈哈`,
        `（暂时完结）`,
      ];
      const chapter = chapters[player.news.specialTickerData.effarigChapter];
      player.news.specialTickerData.effarigChapter = (player.news.specialTickerData.effarigChapter + 1) % 29;
      return chapter;
    },
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le94",
    text: "Time Theorem 1: Time never* goes† backwards§.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "le95",
    text: "时间定理 2：时间就是一直在走。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "le96",
    text: "时间定理 3：时间以每秒一秒的速率流逝。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "le97",
    text: "你这傻瓜，我在《反物质崛起》里有 1e1000 虚幻机器！",
    get unlocked() { return MachineHandler.isIMUnlocked; }
  },
  {
    id: "le98",
    text: "请别打破现实我不想让这个世界出现时间悖论什么的",
    get unlocked() { return PlayerProgress.endgameUnlocked(); }
  },
  {
    id: "le99",
    text:
      `I can just imagine Pelle pissed off at @Supersonic Seven for releasing endgame and allowing
      everyone to destroy his Reality. Pelle revenge arc coming soon?`,
    get unlocked() { return PlayerProgress.endgameUnlocked(); }
  },
  {
    id: "le100",
    get text() {
      const chapters = [
        `AD 终局：天神加强版将在 5 次天神葬礼后推出，相信我。`,
        `安息吧莱特拉。她在开她的暗物质车时死了，因为车变成了反物质
        并爆炸，瞬间杀死了她。还剩 4 次葬礼。`,
        `安息吧 V。她因为玩了太多《革命闲置：Startshow》而得了癌症。
        还剩 3 次葬礼。`,
        `入土为安吧佩勒，我们都恨你。还剩 2 次葬礼。`,
        `安息吧鹿颈长。他的脖子太短了。还剩 1 次葬礼。`,
        `安息吧符——等等这是错误的模组？`,
        `安息吧 Slabdrill。Hevipelle 发现他又偷了游戏，然后——我们必须
        阻止发布。`,
        `安息吧写这个的人。他把安息拼错了。`
      ];
      const chapter = chapters[player.news.specialTickerData.celestialFuneralChapter];
      player.news.specialTickerData.celestialFuneralChapter = (player.news.specialTickerData.celestialFuneralChapter + 1) % 8;
      return chapter;
    },
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le101",
    text:
      `现在出售：免费天神！你可以得到你自己的特蕾莎或莱特拉来玩耍、
      交谈，甚至 [已删除]！现在只要不可能这么低的价格 $-1.80e308！
      售完即止！`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le102",
    text:
      `CPS 大概不代表每秒点击数。事实上，它根本站不住，因为他们提供的
      游戏速度要么把它们打倒，要么扔到太空。`,
    get unlocked() { return PlayerProgress.endgameUnlocked(); }
  },
  {
    id: "le103",
    text: `"NO YOU WERE SUPPOSED TO OBEY ME!" The Seven Celestial Souls:`,
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le104",
    text: "Since Ra has the mentality of a child... does that mean if I [REDACTED] him it counts as [REDACTED]?",
    get unlocked() { return Teresa.isUnlocked; }
  },
  {
    id: "le105",
    text:
      `STOP POSTING ABOUT NEWSTICKERS! IM TIRED OF SEEING IT! MY FRIENDS ON TIKTOK SEND ME SUGGESTIONS, ON DISCORD
      IT'S $&%*#&$ SUGESSTIONS. I WAS ON A SERVER, RIGHT? AND ALLL THE CHANNELS WERE JUST NEWSTICKERS! I SHOWED
      MY ANTIMATTER AMOUNT TO MY GIRLFRIEND AND THE NUMBER I FLIPPED IT AND I SAID "HEY BABE, WHEN THE ANTIMATTER
      MAKES A NEWSTICKER SUGGESTION: "I hate the guy who is saying this thing"" I @#)#$#$ LOOKED AT A TRASH CAN
      AND I SAID "THAT WOULD BE A GOOD NEWSTICKER!" I LOOKED AT MY TIME STUDY TREE, I THINK OF THE NEWSTICKER
      ABOVE IT AND I GO "TIME STUDY TREE?!?!? MORE LIKE TIMETICKER!" A̶̰͌̏A̴̱̭̕A̴͖̱͑A̴̩̋̂Ą̸́͗A̵̫̐A̶͇̔͐ͅA̴̅AAAAAAĄ͓͗A̵AĄÄ̸́̎AAA̸̩͋AÂ͆AA̴`,
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le106",
    text: "时间定理 4：除非你移动得非常非常快。",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le107",
    text: "时间定理 5：或者你住在黑洞附近。",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le108",
    text: "等等……如果你是第十天神，难道你不应该解锁第十维……消息已暂停",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le109",
    text:
      `超值优惠！只要 $9.99 就能得到 99 个第九维度！你只需在结账时
      使用代码"我 [已删除] 莱特拉！"即可获得优惠！今天就来到反物质
      维度，在维度提升中获得最好的杂货！`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le110",
    text:
      `超值优惠！只要 $9.99 就能得到 99 个第九维度！你只需在结账时
      使用代码"我 [已删除] 莱特拉！"即可获得优惠！今天就来到反物质
      维度，在维度提升中获得最好的杂货！`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le111",
    text: "Vanilla lore: Epic fight against cosmic gods. Endgame lore: typical romcom.",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le112",
    text:
      `既然你解锁了天神维度，有时你会找到"天神新闻条"！这些新闻条
      可以点击以获得无用的天神回形针。它们有什么用？大概和普通回形针
      一样多。我敢肯定 Supersonic Seven 用它们来把游戏文件绑在一起。
      就这样。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le113",
    text:
      `4 个维度，Tickspeed 和反物质。对你的现实来说足够了。不是我们的现实！
      先生们，我向你们呈现维度提升；明日之Tickspeed！完全可升级，永恒可变。
      "安全"佩勒牌维度提升将协助你的破坏者每一步！那不是维度提升。
      那是星系。我们也制造那些。`,
    get unlocked() { return player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le114",
    text:
      `"佩勒，人民说他们希望我们生孩子！你接受吗？才不要呢莱我才
      不付什么抚养费。"`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le115",
    text:
      `趣闻：没有 62 且走时间和主动路径的时间研究树上半部分有点像海马。
      别 @ 我。`,
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le116",
    text:
      `符文？天神？你刚才真的被打晕了！来吧，我们去拿无限维度，
      更新刚刚发布！`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le117",
    text:
      `无限维度？打破无限？你在说什么，神圣的 Hevi 刚刚发布了新更新，
      将 JavaScript 极限作为新的重置层！`,
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le118",
    text: "Sir a Time Study has bought the second Time Dimension...",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le119",
    text: "听着，谁拿了我的无限，我会找到你。现在就还给我，否则面对死神物质。",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le120",
    text:
      `ID3 当局叫停了未经监管的维度献祭行动！1.98e998 个第一维度因
      非法献祭而损失。`,
    get unlocked() { return Currency.antimatter.gte("1e2400") || PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le121",
    text:
      `<span>"佩勒其实挺性感的。" - 莱特拉</span>&nbsp;<span style='color: green'>赞：1.8e308</span>&nbsp;
      <span style='color: red'>踩：1e9e15</span>`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le122",
    text: "If Pelle and Lai'tela are together, and they have a son? What's the name?",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le123",
    text: "Oh boy can't wait to Small Bang and get a Finite and a Finity Point!",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le124",
    text: "1 次重置永恒！1 次重置永恒！非常非常快，1 次重置永恒！",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le125",
    text: "这么多灵魂（soles 谐音 souls），这么少时间（thyme 谐音 time）。你不想大坍缩吗？",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le126",
    text: "你宁愿有无限的反物质，但没有无限点数，还是无限的无限点数，但没有无限点数？"
  },
  {
    id: "le127",
    text:
      `反物质维度 2：五小时后，天神们回来了，他们的任务是铲除 Slabdrill！
      5 小时后发布！不含第九维度。时间研究单独出售。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le128",
    text:
      `打破无限，打破永恒，打破现实。这是宇宙本身的三大要素。每一个都
      开启无尽的可能。但当这些不够时会发生什么？我们是不是错过了什么？
      第四个要素？现在由我，Supersonic Seven 宣布：打破终局。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le129",
    text:
      `特蕾莎，现实天神。鹿颈长，古遗迹天神。无名者们，时间天神。
      V，成就天神。太阳神，被遗忘的天神。莱特拉，维度天神。佩勒，
      反物质天神。Alpha，黑暗天神。Slabdrill，第九维度天神。
      这些都很好，但还不够。现在我很自豪地宣布：我，新闻条，已经成为一名天神。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le130",
    get text() {
      const units = [];
      units.push("秒");
      units.push("分");
      units.push("小时");
      units.push("天");
      units.push("周");
      units.push("月");
      units.push("年");
      units.push("十年");
      units.push("世纪");
      units.push("千年");

      const timeUnit = units.randomElement();
      return `时间定理 6：不可能等待超过 5 小时，但可以等待
        超过 5 ${timeUnit}。别问我这是怎么运作的。`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le131",
    text: "YOU HAVE ENOUGH INFINITY POINTS TO BUY A TESSERACT",
    get unlocked() { return Enslaved.isCompleted }
  },
  {
    id: "le132",
    text: "YOU HAVE ENOUGH CELESTIAL POINTS TO BUY ANOTHER TERESA BODY PILLOW",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le133",
    text:
      `你好，我是 glitchy，精通元素。我有个交易给你：我给你 12 个
      精通，但作为交换，你要给我 5 小时的时间（也许还有一点 Tester 的小
      贿赂）。你接受吗？`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le134",
    text: "不要缩写天神点数 我人生最大的错误",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le135",
    text: "1e1e30 反物质特蕾莎礼品卡，谁要？",
    get unlocked() { return ExpansionPacks.areUnlocked }
  },
  {
    id: "le136",
    text: "为什么鹿颈长不离开永恒痛苦的现实？他傻吗？",
    get unlocked() { return EffarigUnlock.eternity.isUnlocked }
  },
  {
    id: "le137",
    text: "嘿，小蒂米。你能解释一下你为什么花了 500 美元买特蕾莎抱枕吗？",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le138",
    text: "人类，我记得你的大坍缩",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le139",
    text: "The way I see it, Pelle is surrounded. What’s under the Doom? That’s right, more Antimatter.",
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le140",
    text: "嘿，你到底把这些反物质都放在哪里？",
    get unlocked() { return player.break2 }
  },
  {
    id: "le141",
    text: "你说这现在是星系工厂是什么意思？",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le142",
    text: "鹿颈长：复兴之力。长颈鹿：纯粹努力。",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le143",
    text: "等等……这全都是反物质维度重来一次？一直都是。",
    get unlocked() { return PlayerProgress.celestialInfinityUnlocked() }
  },
  {
    id: "le144",
    text: "鹿颈长理论 #1：他在终局里还有一层",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le145",
    text: "今日天神问题：他们是怎么出生的？",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le146",
    text: "Yo Pelle has been caught trying to create his own Galaxy Generator 💀",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le147",
    text: "太阳神在推特上举报莱特拉对 Destroyer 网络钓鱼，现在她正在揍他 WHAT THE FU-",
    get unlocked() { return Laitela.isUnlocked }
  },
  {
    id: "le148",
    text: "警报：莱特拉被发现有一个真人大小的 Destroyer 这到底是什么鬼",
    get unlocked() { return Laitela.isUnlocked }
  },
  {
    id: "le149",
    text: "据报道佩勒忘了和莱特拉用保护措施 🤦‍♂️",
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le150",
    text: "天神理论 2：天神可以怀孕。",
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le151",
    text:
      `Celestial Theory 3: Celestials that have been breeded from 2 other Celestials do not have to ascend to become a Celestial
      as doing so would give them no parents`,
    get unlocked() { return Teresa.isUnlocked }
  },
  {
    id: "le152",
    text:
      `莱特拉：佩勒！在我的暗物质维度里生成星系！哦！耶——砰 太阳神你拿着相机在干嘛？？
      太阳神：被抓个正着吧老兄。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le153",
    text:
      `现在推出：超立方体自动化命令！只需等待 5 小时后购买超立方体，
      每次获得第九维度时购买，或随时购买！只需 1e1e150 反物质！`,
    get unlocked() { return Enslaved.isCompleted }
  },
  {
    id: "lem154",
    text:
      `如果佩勒和莱特拉做爱，天神婴儿的种族会是白人、黑人、太空、现实、
      暗物质还是末日？`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le155",
    text: "Today, we are going to explore Pelle's computer! ...Lai'tela feet pics??",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le156",
    get text() {
      return `警报，警报，鹿颈长被抓到在他的店里吸大麻，如果你看到任何情况
      请联系 ${wordShift.wordCycle(["False", "Deity", "Destroyer"])}`
    },
    dynamic: true,
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "lem157",
    text:
      `哟哟哟！！！欢迎回到 epiccoolantimattervideos！！今天，我们要在
      佩勒的床上拉屎！！我们开始吧！！等等……糟糕佩勒回来了……窗户锁了。`,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le158",
    text: `"想象一下拥有超过 1 个免费超立方体！那不可能是我。" -佩勒，2025`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le159",
    text: `"Hahaha I have defeated you! You cannot defeat my K14 ping!" -Pelle, 2026`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le160",
    text:
      `"伙计们，别在佩勒里给无限升级 43 充能。我人生最大的错误。"
      （随后获得了超存在级别的延迟） - epic_ducks，2026`,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le161",
    text: `""EM71 肯定没那么好"我这么想，然后 V 就冲进我家把我杀了" - Cyra`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le162",
    text:
      `为什么佩勒会方便地把他的星系发生器给你让你炸掉他的现实？这就像
      总统把核发射代码给一个蹒跚学步的孩子，然后那个孩子轰炸了世界的另
      一端一样。他肯定还有更多打击手段对吧？如果是这样他为什么不用，
      他傻吗？难怪莱特拉离开他去找太阳神。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le163",
    text: "如果 V 这么酷，为什么没有 VVVVVV？",
    get unlocked() { return V.isUnlocked }
  },
  {
    id: "le164",
    text:
      `本地玩家按钮花了 200 年在第二次终局上搞扩展包，
      想知道他本可以做些什么来更快地推进。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le165",
    text: "点击这里获得 1 个超光速粒子",
    get unlocked() { return PlayerProgress.dilationUnlocked() }
  },
  {
    id: "le166",
    text: "我需要多少遗物碎片才能制作一个遗物？",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le167",
    text: "用遗物碎片制作遗物需要 FNaNeInfinityENaNeInfinity 个碎片",
    get unlocked() { return Effarig.isUnlocked }
  },
  {
    id: "le168",
    text: "符文？现实？黑洞，超立方体？你在说什么？来吧，我们去幽化。",
    get unlocked() { return PlayerProgress.realityUnlocked() }
  },
  {
    id: "le169",
    text: "Ghostify? Bosonic lab? Come on, let's go Eternity.",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le170",
    text: "永恒？时间定理？超光速粒子？来吧，我们去无限。",
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le171",
    text: "无限？打破无限升级？复制器？来吧，我们去拿个星系。",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le172",
    text: "星系？维度提升？第五维度？来吧，我们再拿一个第四维度。",
    get unlocked() { return player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le173",
    text: "反物质？维度？Tickspeed？来吧，我们烤些饼干。",
    get unlocked() { return player.dimensionBoosts.gt(0) || player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le174",
    text: "佩勒打不过我，我在《反物质崛起》里有 1e9.007e15 反物质！",
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le175",
    text: "我知道你把那个珍贵的无限点数藏在哪里。快给我。给。我。",
    get unlocked() { return PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le176",
    text: "还有一个提升星系 50% 的升级，花费 5e11 无限点数",
    get unlocked() { return player.break }
  },
  {
    id: "le177",
    text: "反-物质-维度-星系-维度提升",
    get unlocked() { return player.dimensionBoosts.gt(0) || player.galaxies.gt(0) || PlayerProgress.infinityUnlocked() }
  },
  {
    id: "le178",
    get text() {
      return `我是佩勒，我是个 ${wordShift.wordCycle(["脏", "臭", "烂"])}货！大 Alpha 英俊，
      但他不在控制之中！他的更新震颤让我们的生命岌岌可危。他要。他要让整个终局崩溃！`
    },
    dynamic: true,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le179",
    get text() {
      return `我正在生成星系并且 ${wordShift.wordCycle(["脏", "臭", "烂"])}因为我
      在 ${wordShift.wordCycle(["脏", "臭", "烂"])}的终局里！`
    },
    dynamic: true,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le180",
    text: "元素怎么喝醉的？",
    get unlocked() { return Achievement(208).isUnlocked }
  },
  {
    id: "le181",
    text: "太阳神，听着。我知道我们合不来，但我想我找到了给星系发生器供能的方法。",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le182",
    text: "佩勒该死的死了，莱特拉最受影响",
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le183",
    text:
      `原来你确实在终局保留了星系发生器。然而，当元素得知此事时，
      他移除了毁灭之外所有的充电插座。`,
    get unlocked() { return PlayerProgress.endgameUnlocked() }
  },
  {
    id: "le184",
    get text() {
      return `99% of people cant get to <span style='color: purple'>Eternity</span> level`
    },
    get unlocked() { return PlayerProgress.eternityUnlocked() }
  },
  {
    id: "le185",
    text: "孩子们记住，诅咒你自己",
    get unlocked() { return V.isFlipped }
  },
  {
    id: "le186",
    text:
      `在符文炼金中，有 21 个元素，但只有 24 个希腊字母。更糟的是，
      Lambda、Xi、Pi 和 Omega 的大写和小写形式都使用了，而无限不是
      希腊字母。此外，Beta、Epsilon、Zeta、Eta、Iota、Kappa、Nu、
      Omicron、Upsilon 和 Chi 都被排除在炼金符号之外。然而，这仅
      占 24 个符号中的 22 个。另外 2 个会是什——哦 Hevi 我走进了什么
      地方……`,
    get unlocked() { return Ra.unlocks.unlockGlyphAlchemy.canBeApplied }
  },
  {
    id: "le187",
    text:
      `你也可以通过求解 x^2-410286423278424y^2 = 1 的正整数解 x 和 y
      来逃离毁灭现实，这要感谢阿基米德。`,
    get unlocked() { return Pelle.isDoomed || PlayerProgress.endgameUnlocked() }
  },
  {
    id: "r1",
    text: "这条新闻消息比其他所有新闻罕见 100 倍。",
    get unlocked() { return Math.random() < 0.01; }
  },
  {
    id: "p1",
    text: "Is this a jojo reference?",
  },
  {
    id: "p2",
    text: 'Die Zahlen gehen hoooch'
  },
  /* eslint-disable max-len */
  {
    id: "ai1",
    text: "如果你是游戏，那么你可以用秘籍解锁一个秘密成就……但它要花费 e1100 反物质！？！"
  },
  {
    id: "ai2",
    text: "\"Hm, I don't know how to fix this.\" - Someone who has not unlocked the achievement btw"
  },
  {
    id: "ai3",
    text: "I thought the game was supposed to have a hard reset after eternity, but then I got randomized to start my first game with no save file \uD83D\uDE26",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai4",
    text: "I thought the update was 5 hours ago... I guess we'll have to put it back in 5 hours"
  },
  {
    id: "ai5",
    get text() { return `Local man finds ${format(Number.MAX_VALUE, 2)} Planck volumes in his freezer.`; }
  },
  {
    id: "ai6",
    text: "哈哈糟糕的条目建议"
  },
  {
    id: "ai7",
    text: "我看到你饿着肚子玩这游戏，接下来你就要空着钱包玩这游戏了。"
  },
  {
    id: "ai8",
    text: "就开始……点击。别浪费时间想。就做。"
  },
  {
    id: "ai9",
    text: "第九维度创造第八维度的想法太疯狂了"
  },
  {
    id: "ai10",
    text: "……那是不是说 [已删除] 维度产生 [已删除] 维度？"
  },
  {
    id: "ai11",
    text: "\"点击这里买一叠回形针\"（点击后会被 Rickroll）",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai12",
    text: "闲暇时我读 T. H. White 的短篇故事。"
  },
  {
    id: "ai13",
    text: "我去，那太狂野了"
  },
  {
    id: "ai14",
    text: "Extinction is not a real thing. You can't wear the same hat 24/7."
  },
  {
    id: "ai15",
    text: "如果你能读到这个，你已经逃离了游戏。"
  },
  {
    id: "ai16",
    text: "\"帽子戏法，我很想看到\" - Noah Feldman"
  },
  {
    id: "ai17",
    text: "看 hevi 在 discord 服务器上激烈争论"
  },
  {
    id: "ai18",
    text: "I just stole the \"Anti\" flag from a biker gang and I am packing it with dynamite, dynamite, dynamite, dynamite..."
  },
  {
    id: "ai19",
    text: "不管你有多少反物质，物质总是胜过反物质。"
  },
  {
    id: "ai20",
    text: "富兰克林封印了欧米伽平方。现在你可以用任何方式封印欧米伽。"
  },
  {
    id: "ai21",
    text: "这是真正的第九维度吗？"
  },
  {
    id: "ai22",
    text: "Click here to exit the game"
  },
  {
    id: "ai23",
    text: "这条新闻条现在只会在第九维度播出"
  },
  {
    id: "ai24",
    text: "第九维度不存在，因为它被第九维度压制了。"
  },
  {
    id: "ai25",
    text: "To matter or to antimatter, that is the question."
  },
  {
    id: "ai26",
    text: "经过 8 年的生产和不稳定的宇宙，Chaosium 将在 5 小时后停止存在。"
  },
  {
    id: "ai27",
    text: "第九维度里一半的问题甚至都没有意义。他们到底在用那些能量做什么？"
  },
  {
    id: "ai28",
    text: "Wait, there's a nin--"
  },
  {
    id: "ai29",
    text: "某处，一个疯子和他的 Trimps 军队正在篡改物质维度。"
  },
  {
    id: "ai30",
    text: "Why is there so many attached to this number? It doesn't make sense."
  },
  {
    id: "ai31",
    text: "新闻条在反新闻条里"
  },
  {
    id: "ai32",
    text: "the 9th dimension doesn't exist because we are using nonary"
  },
  {
    id: "ai33",
    text: "突发新闻：新研究表明，不是一个人，不是两个人，而是三个人可以说在把它读作条目建议时和我有相同的感受。"
  },
  {
    id: "ai34",
    text: "这是我的'问题情绪'的解释——在新闻条里解释了！"
  },
  {
    id: "ai35",
    text: "当地疯子试图出售反饼干"
  },
  {
    id: "ai36",
    text: "Welcome to Antimatter Dimensions: Source, the free to play sequel to the cult classic AD:GO."
  },
  {
    id: "ai37",
    text: "一只新的手触碰了你的反物质！"
  },
  {
    id: "ai38",
    text: "Who are we, anyways?"
  },
  {
    id: "ai39",
    text: "我们才是真正重要的人"
  },
  {
    id: "ai40",
    text: "Matter?  Not even a hint."
  },
  {
    id: "ai41",
    text: "I am the news guy, I make news. You don't read this? Well you'll just have to wait until you look in the mirror."
  },
  {
    id: "ai42",
    text: "\"哇！\"（新闻条移动 90 度）"
  },
  {
    id: "ai43",
    text: "BUY A JAR OF STICKERS, HIGH QUALITY STICKERS, GREAT QUALITY STICKERS!"
  },
  {
    id: "ai44",
    text: "I made news, you read it."
  },
  {
    id: "ai45",
    text: "I like news."
  },
  {
    id: "ai46",
    text: "I don't make news."
  },
  {
    id: "ai47",
    text: "YOU MAKE NEWS AND I GET THE [REDACTED] NEWS"
  },
  {
    id: "ai48",
    text: "The term \"Anti-infinity\" is a verb and cannot be a noun. Learn about its usage here."
  },
  {
    id: "ai49",
    text: "And now, for the shopping list!"
  },
  {
    id: "ai50",
    text: "The 9th dimension is clearly real! It's just not in our dimension."
  },
  {
    id: "ai51",
    text: "I tried searching on google for the phrase \"9th dimension,\" and I'm okay with saying that, because it describes a very real thing."
  },
  {
    id: "ai52",
    text: "You have no power here."
  },
  {
    id: "ai53",
    text: "Some people had to settle for 10 dimensions because they couldn't break infinity. Big Crunch turned out to be just a short space in time."
  },
  {
    id: "ai54",
    text: "There once was a young man in a strange land, and he dreamed of a universe filled with possibilities. One day, he asked his mother \"What's Expansion like?\" Her reply was \"Expansion times back then were unbalanced, and I said that's why you can't have equal amounts of matter and antimatter."
  },
  {
    id: "ai55",
    text: "Market research firm tries to explain why some commodities don't perform as expected. Market research firm herself can't figure out why."
  },
  {
    id: "ai56",
    text: "Bid your antimatter today!"
  },
  {
    id: "ai57",
    text: "I am Alpha Centauri, Prime 001. My research has found that if you are alive in the 9th dimension, evil has taken over your dimension and is attempting to enact its plan to take over your mind and reverse time. You must do everything in your power to stop this plan from being implemented, now."
  },
  {
    id: "ai58",
    text: "Stand by and unlock the 9th dimension for a secret achievement."
  },
  {
    id: "ai59",
    text: "I fix bugs in 5 hours"
  },
  {
    id: "ai60",
    text: "If you're reading this, that means you can read this."
  },
  {
    id: "ai61",
    text: "Uhh... Hi. Could you tell me your name?"
  },
  {
    id: "ai62",
    text: "Uh, no. This is too big for a QR code."
  },
  {
    id: "ai63",
    text: "(right to left move it make)"
  },
  {
    id: "ai64",
    text: "Oh no the antimatter is coming for us!"
  },
  {
    id: "ai65",
    text: "Why is there so much antimatter in this world? For a start, it's all produced by the antimatter factories on Earth. Secondly, the factories on"
  },
  {
    id: "ai66",
    text: "It's nothing personal, bro. -All villager types"
  },
  {
    id: "ai67",
    text: "I tried my best to read those tiny, handwritten messages, but whoever designed scythes hated me and stuck them in a corner. -Porygon-Z"
  },
  {
    id: "ai68",
    text: "Hmm... I don't know how I ended up here. I don't even know if I'm supposed to be here. I just sit here and imagine what could have been if I hadn't stopped. Oh god, what could have been..."
  },
  {
    id: "ai69",
    text: "Aw shucks, I finally hacked it enough to get to the C21 unlock, boss!"
  },
  {
    id: "ai70",
    text: "Купил мужик антиматерию"
  },
  {
    id: "ai71",
    text: "So you're telling me that I can post here, watch the titanic twice, come back and not be able to post?"
  },
  {
    id: "ai72",
    text: "The last update was 5 hours ago. There is no next update, because the last update was 5 hours ago. We will update our podcast in 5 hours to cover the entire topic of 5 hours, because this is the last podcast ever, everyone knows that the update is always 5 hours away, but in reality it's more like 1-2-3-4-5-6-7-8-9-10 minutes away, but in our heads it's closer to an actual accurate update date, like 5 hours away but with a few tickspeed upgrades."
  },
  {
    id: "ai73",
    text: "Yep. You. Get. Over. Your. Antidimensions."
  },
  {
    id: "ai74",
    get text() { return `Ad bonus: $${format(Number.MAX_VALUE, 2)} (random team)`; }
  },
  {
    id: "ai75",
    text: "Pass me that history, please"
  },
  {
    id: "ai76",
    get text() { return `Now releasing: Dimsension ${format(Number.MAX_VALUE, 2)}`; }
  },
  {
    id: "ai77",
    text: "ur history teacher said i was mad for getting *insert something here* on my bday"
  },
  {
    id: "ai78",
    text: "All is fair in antimatter"
  },
  {
    id: "ai79",
    text: "The Mysterium, the 2nd Dimension"
  },
  {
    id: "ai80",
    text: "Oops, I think we misticked."
  },
  {
    id: "ai81",
    text: "please wait 5 HOURS FOR THE NEWS"
  },
  {
    id: "ai82",
    text: "please wait til the weather improves"
  },
  {
    id: "ai83",
    text: "Please, take a minute to appreciate the beauty of this news ticker."
  },
  {
    id: "ai84",
    text: "How about this, working backwards? You know, from the time period covered by the question, that the game is set in, say, the 1950s. Now, if we talk about how games are set in the 2030s. Games are defined as any media, not necessarily of the form \"play some game\" (which, by the way, is a useful thing to have in one's vocabulary) but any media that can be understood as a game (i.e. a media that one can play back in time}, and games are defined as any game that one can't play back in time."
  },
  {
    id: "ai85",
    text: "How about AD, made by NaN? Higher quality, obviously. But still, [REDACTED]"
  },
  {
    id: "ai86",
    text: "I thought the whole \"annihilation is just a phase\" quote was awesome until I realized it also gave me a [REDACTED]"
  },
  {
    id: "ai87",
    text: "I have created an Omsi universe. And it's [REDACTED]"
  },
  {
    id: "ai88",
    text: "I put [REDACTED] in the oven. It got [REDACTED] and I [REDACTED] am [REDACTED]"
  },
  {
    id: "ai89",
    text: "What are the red herrings?"
  },
  {
    id: "ai90",
    text: "Help we are stuck in Hevipelle's (http://en.wikipedia.org/wiki/Hevipelle) basement and hevi is forcing us to build a [REDACTED] wall to keep [REDACTED] away from [REDACTED]"
  },
  {
    id: "ai91",
    text: "And now, for the weather. 70 and raining in North Dakota, remember those lovely, big, golden, iron curtain bars. Also remember that the [REDACTED] weather! Just remember: [REDACTED] and [REDACTED] outside [REDACTED]"
  },
  {
    id: "ai92",
    text: "Let's play a little game. You will start with no possessions and no goals. Lets say you have [REDACTED] and your [REDACTED] is [REDACTED] you can [REDACTED]"
  },
  {
    id: "ai93",
    text: "What are gems for?"
  },
  {
    id: "ai94",
    text: "Who made the 5th dimension?"
  },
  {
    id: "ai95",
    text: "I don't get it"
  },
  {
    id: "ai96",
    text: "Why is nobody talking about the 9th dimension?"
  },
  {
    id: "ai97",
    text: "This news sucks. Why no you don't get it?"
  },
  {
    id: "ai98",
    text: "Sorry, your reality has disconnected from the 9th dimension. You will now remain in the 8th dimension until further notice."
  },
  (function() {
    let wasClicked = false;
    const normal = "Now holding Infinity!";
    const clicked = "<#351477791457542144>";
    return {
      id: "ai99",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }()),
  {
    id: "ai100",
    text: "I get all my news from this Discord, not 5 hours of my life"
  },
  {
    id: "ai101",
    text: "meow"
  },
  {
    id: "ai102",
    text: "You are now manually blinking."
  },
  {
    id: "ai103",
    text: "Sorry, your mic is playing Antimatter Dimensions."
  },
  {
    id: "ai104",
    text: "Sorry, your reality has disconnected from the 9th dimension."
  },
  {
    id: "ai105",
    text: "Apparently I am the bad guy in this video. I'm the one who did nothing."
  },
  {
    id: "ai106",
    text: "There are multiple ways to win this game. You can either type in your coordinates directly into the game, or you can type them into google which produces a different result. If you are getting the \"same exact thing\" result, your computer must be malfunctioning. Test results indicate that your computer is malfunctioning and you should check your firmware for vulnerabilities. You can also try turning off the news and re-running the game, but doing this only makes the \"the weather is X\" joke. Waiting six hours for a news message is NOT a news message."
  },
  {
    id: "ai107",
    text: "The weather is actually a thing. Scientists have confirmed that there is a correlation between the amount of Antimatter in the earth and the amount of weather. The earth is indeed a magnet, but scientists now hypothesize that as the earth warms up, the magnetic reconnection will accelerate, and this could cause a domino effect to cascade throughout the world, eventually leading to uncontrolled nuclear winter and spontaneous antimatter implosion."
  },
  {
    id: "ai108",
    text: "The tenth dimension is not a real thing. Stop telling people that."
  },
  {
    id: "ai109",
    text: "Don't tell Hevi it's not a real thing"
  },
  {
    id: "ai110",
    text: "i dont know how to fix this"
  },
  {
    id: "ai111",
    text: "This update is not for you!"
  },
  {
    id: "ai112",
    get text() { return `This is the last time, to buy items, you must pay a small fee of ${format(Number.MAX_VALUE, 2)} real money.`; }
  },
  {
    id: "ai113",
    text: "What is Antimatter? Long ago, gods lived in harmony. Then, everything changed when the apocalypse broke out. Chaos reigns, and even higher dimensions are being built. This is your fate. Build the Antimatter Dimensions. Amen."
  },
  {
    id: "ai114",
    text: "Water under the bridge?"
  },
  {
    id: "ai115",
    text: "I wonder if anyone has posted about this before me?"
  },
  {
    id: "ai116",
    text: "This post has been shared many times. Who knows how many?"
  },
  {
    id: "ai117",
    text: "Good night!"
  },
  {
    id: "ai118",
    text: "I made a timeline of my replicanti battles, which can be found here."
  },
  {
    id: "ai119",
    text: "\"Quantumum Battle Royale coming in 5 hours!\" (Rumor: 5 hours)"
  },
  {
    id: "ai120",
    text: "Rumor says Nords will start producing replicanti in five hours."
  },
  {
    id: "ai121",
    text: "I am an Nordsweeper, stealing their jobs to support the replicanti factories"
  },
  {
    id: "ai122",
    text: "Used to be, AD was the best game. Nowadays, it's all crapp."
  },
  {
    id: "ai123",
    text: "You better stop looking at these news ticker suggestions, before your fingers dry up."
  },
  {
    id: "ai124",
    text: "Antimatter Dimensions *Loses* bee movie."
  },
  {
    id: "ai125",
    text: "Oh, god, there's replicanti in my peas.",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai126",
    text: "Oh, god, I'm stepping on a replicanti."
  },
  {
    id: "ai127",
    text: "Hello, world!"
  },
  {
    id: "ai128",
    text: "Welcome to /r/AskReddit about submarines. - accurate as of January 8th, 2017"
  },
  {
    id: "ai129",
    text: "Antimatter being researched by the government. Is it safe to say that this news ticker is fake?"
  },
  {
    id: "ai130",
    text: "Does the news show at Infinite Antimatter?"
  },
  {
    id: "ai131",
    text: "Have you saved your game? Yes. Have you quit your game? Nothin' wrong with this save. just keep holding that key."
  },
  {
    id: "ai132",
    text: "i clicked too fast...my fps dropped"
  },
  {
    id: "ai133",
    text: "I found out that the year is 20XX. I was going to make a news ticker but then I realized that it's just a ticker."
  },
  {
    id: "ai134",
    text: "\"One of these days I'll get bored of reading news for a while\" - old man"
  },
  {
    id: "ai135",
    text: "'Tis the season for new antiques! Get your first ever LOOK at these unique objects, before they're gone!' Sold out!"
  },
  {
    id: "ai136",
    text: "3 things that antimatter, 1 more thing to infinity"
  },
  {
    id: "ai137",
    text: "Buy the paperclip emojis now at https://aarextiaokhiao.github.io/blob/master/docs/en.json"
  },
  {
    id: "ai138",
    text: "click here to unlock the next update"
  },
  {
    id: "ai139",
    text: "(If you want you can make this only show when the news actually loads)"
  },
  {
    id: "ai140",
    text: "恶意之徒试图制造反物质货币，但他们的图谋栽在了第9维度上。你怎么看？"
  },
  {
    id: "ai141",
    text: "嘿 Siri，帮我刷反物质星系"
  },
  {
    id: "ai142",
    text: "你存档了吗？如果存了，那你就可以不用继续玩了"
  },
  {
    id: "ai143",
    text: "这就像得到你的第一个奥术点数。你知道的，就像那个老广告里你心想\"我看懂了这个广告，我应该照着做个广告\""
  },
  {
    id: "ai144",
    text: "呜嘎布嘎"
  },
  {
    id: "ai145",
    text: "布有自己的网页！你甚至可以叫它\"布的得意之作\"\">https://en.m.wikipedia.org/wiki/Olli%27_Web#Main_page>"
  },
  {
    id: "ai146",
    text: "米瑟克斯和书呆子们在史诗级 GG 大战中冲突升级"
  },
  {
    id: "ai147",
    text: "我的最终测试出结果了！那只是一道简单的数学题，对手可是史上最伟大的两位国际象棋特级大师！你猜怎么着？双双被秒杀！"
  },
  {
    id: "ai148",
    text: "哦哇，那是 67.3%，其实还行，因为是对数级别的"
  },
  {
    id: "ai149",
    text: "\"Aleph_Time\" 是那个对数尺度的笑话吗？"
  },
  {
    id: "ai150",
    text: "大家好，我叫反迪奥。我通过一个你们都熟知的\"反物质分解\"过程来生产反物质，你们可能从我本月早些时候的测试报告中记得这一点，我测试了我的牧场到底产不产反物质……在那之前一切正常，但当我往公式里加了一点点延迟，就变成了恶性循环，加速了反物质的生产速率，进而加速了你们所有人死亡的速率。我用基因工程和大数据挖掘的独特组合挽救了局面，我希望有朝一日能启动一台在幕后制造维度的机制反物质装置，但目前为止，这不过是看哪个系统产出更多的垫底竞赛，最终，我们会从你的（读取错误：允许的）馅饼里咬上一口。再见。"
  },
  {
    id: "aim151",
    text: "\"我提议我们构建一棵反历史的系统发育树，就像生命之树一样。每个人都将被归因于起源于那棵反树的祖先。\" ——迪奥，永恒诅咒的祝酒词"
  },
  {
    id: "ai152",
    text: "历史学家：我超爱每一代人回看上一代人时心想\"那一代人真是糟糕透了\""
  },
  {
    id: "ai153",
    text: "\"我父母上的是反大学\" ——我爷爷奶奶"
  },
  {
    id: "ai154",
    text: "只有反笑话才好笑"
  },
  {
    id: "ai155",
    text: "Infinity machine breaks Infinity"
  },
  {
    id: "ai156",
    text: "Okay boomer, you get your first taste of antimalware with this one."
  },
  {
    id: "ai157",
    text: "This program cannot access confidential information, such as the IP addresses of the Tamazight Vaults."
  },
  {
    id: "ai158",
    text: "Game Development is fun, right? That's why so many hobbyists make games, and why so few professionals make games."
  },
  {
    id: "ai159",
    text: "I was the first to notice that the 'news' ticker on my mobile notification is always 30 seconds behind the 'entertainment' ticker. This is most definitely not a bug or a feature, and will be fixed in 5 hours."
  },
  {
    id: "ai160",
    text: "This news ticker always appears to speedrun a ticker asking for 'world records', do you even know what speedrun this is? Is this a news ticker or something?"
  },
  {
    id: "ai161",
    text: "The next level is not unlocking extra replicanti; it is actually boosting replicanti."
  },
  {
    id: "ai162",
    text: "Why does one galaxy has 9 galaxies and the 8th dimension, and the first 10 dimensions doesn't exist? Well, we'll have to solve that question in a minute."
  },
  {
    id: "ai163",
    text: "So why on EARTH DIDN'T SOMEONE JUST SAY THAT? I thought that AD has some kind of cheat that makes it so that, when you buy a dimension, it actually creates 9 galaxies instead of 10"
  },
  {
    id: "ai164",
    text: "M'antel, antimatter, anti-talk to me"
  },
  {
    id: "ai165",
    text: "AD has anti-parts, you'll hate them"
  },
  {
    id: "ai166",
    text: "AD is basically a badly disguised dystopia at this point"
  },
  {
    id: "ai167",
    text: "Hold M. You forgot to take all the anti-matter out!"
  },
  {
    id: "ai168",
    text: "AD will be implemented in 5 hours"
  },
  {
    id: "ai169",
    text: "Click this to unlock the 10th Dimension"
  },
  {
    id: "ai170",
    text: "Click here to complete a secret against HEVI"
  },
  {
    id: "ai171",
    text: "You are doing a good job there"
  },
  {
    id: "ai172",
    text: "Hevi? Are you sure you want to buy that?"
  },
  {
    id: "ai173",
    text: "Buy premium antimatter to help the world's least developed get ahead!"
  },
  {
    id: "ai174",
    text: "One of the most influential people in neuroscience believes that our perception of reality comes from 10 dimensions instead of 8"
  },
  {
    id: "ai175",
    text: "Why is there so many zeroes in 'nowhere'?"
  },
  {
    id: "ai176",
    text: "There are no bugs in this game, they're just features"
  },
  {
    id: "ai177",
    text: "\"Click to advance 5 hours in time.\" (Now only show up after you advance more than an hour ago)"
  },
  {
    id: "ai178",
    text: "Oh god my phone is being watched"
  },
  {
    id: "ai179",
    text: "Welcome to the newest version of Antimatter Dimensions. Now with less features!"
  },
  {
    id: "ai180",
    text: "\"That's gonna get in trouble\" (less likely to get in trouble)"
  },
  {
    id: "ai181",
    text: "\"please don't disable the news ticker\" (Instead of having a black screen just a white one with a long, long, long, long, long, long, long, long, long, long, long, long, long, long, long, long)"
  },
  {
    id: "ai182",
    text: "\"You have 7 biological minutes.\" (Instead of giving a boost to any strains)"
  },
  {
    id: "ai183",
    text: "\"According to quantum string theory, there is a fundamental connective that binds the 3rd and 8th dimensions.  This means that any pill or injection that tries to bind the 9th dimension will be thwarted and rendered useless.\" (bound to get in 10 minutes)"
  },
  {
    id: "ai184",
    text: "\"Click this to gain a secret achievement.\" (Now only show up after you gain at least 1 antimatter, screenshot proves)"
  },
  {
    id: "ai185",
    text: "\"The secret to winning Antimatter Dimensions is to unbind the 9th dimension and unlock the 10th dimension\" (can be done only after unlocking the secret achievement: \"Eternity\" http://imgur.com/E4261C7h)"
  },
  {
    id: "ai186",
    text: "\"Click here to gain 1 matter.\" (only shows up after you beat IC5)",
    get unlocked() { return InfinityChallenge(5).isCompleted; }
  },
  {
    id: "ai187",
    text: "I thought the update was"
  },
  {
    id: "ai188",
    text: "Now that you possess all 8 dimensions, it is possible to get the no-edge achievement. However, if you get the no-edge achievement, the game breaks."
  },
  {
    id: "ai189",
    text: "You just became a part of history."
  },
  {
    id: "ai190",
    text: "Hell hath antimatter so I don't want to live there."
  },
  {
    id: "ai191",
    text: "I LIKE THAT DIMENSION 9 IN CLASS"
  },
  {
    id: "ai192",
    text: "\"1 2 3 4 5 6 7 8 10 11 12 13 ...\" -Back to the future"
  },
  {
    id: "ai193",
    text: "You have reached infinity, there is no universe, you are an eternity away from there."
  },
  {
    id: "ai194",
    text: "IM MADE THIS GAME GREAT AND RANDOMLY ACHIEVABLE"
  },
  {
    id: "ai195",
    text: "Welcome to the first ever, DIMENSION 9 IN CLASS! An endless stream of possibilities greets you! You may never create an infinite number of 8th dimensions, but you can create an infinite number of 8th dimensions, and you can increase the starting values of both dimensions by adding them together. Nice and simple, I call it Antimatter Dimensions."
  },
  {
    id: "ai196",
    text: "age 8-12: play elder puzzles"
  },
  {
    id: "ai197",
    text: "What does it mean if someone is \"young and full of puzzles\"? Does \"puzzled\" make that person young and full of puzzles?"
  },
  {
    id: "ai198",
    text: "To the customer in aisle 6th who bought a fifth of antimatter, I say buy a sixth! Buy it now!"
  },
  {
    id: "ai199",
    text: "Dear sir, we don't make Anti-Atomic Bread for Antimatter Pizza, we make Antimatter Bread for you!"
  },
  {
    id: "ai200",
    text: "Yay! Lets make some antimatter!"
  },
  {
    id: "ai201",
    text: "THE ANTIMATTER BREAD COMPANY DOESN'T EXIST!"
  },
  {
    id: "ai202",
    text: "Click here to exit the news",
    onClick() { GameOptions.toggleNews(); }
  },
  {
    id: "ai203",
    text: "I thought the update was 5 hours away, but it actually took me 6 hours to post this because I was behind on my update. I'll be honest, I'm not sure how many update I need to get though, if any."
  },
  {
    id: "ai204",
    text: "To count past Infinity Points: take a moment to remember that each Infinity Point is 3.1415926534255412730527058904816097160734272605282087086280545991105332533235580946684229821413112145239989073467482298142857147816092947183909298728571478160929471839229814054718139332405281814522993758179568572657123928651310585727283312547569289993282758012466111097726331726572854689993262899140527282527842535179715673311119101119015549552926278425351797156777263324503517971568583819492728180977263317971568432854104102725270847764253513791376909285717082857262987160927285711464363930996928984794380124566417932628571475245456845692846809466184179328572814384259326270817052727852348111714690577263323799509856279752173478925"
  },
  {
    id: "ai205",
    text: "\"Watch out, these news aren't supposed to be in.\" (appears when you buy the news for the first time)"
  },
  {
    id: "ai206",
    text: "These are all the time studies that never got into the game.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai207",
    text: "With the release of the next update, we're introducing a new dimension - the 9th Dimension. To unlock this dimension, you just have to collect a lot of paperclips."
  },
  {
    id: "ai208",
    text: "Why does nobody talk about Tungsten?"
  },
  {
    id: "ai209",
    text: "and now we return to your regular news... for the weatherman, there seems to be a decent amount of particles and ozone holes, which means less ozone layer to break, which means less particles to catch fire and cause global warming. But, ozone layer to melt, glaciers to run, and overpopulation. All around us is a blurple glow, almost blue, almost purplish-blue. It's been a grand, colorful season. Here, grab a handful of these paperclips, dear. They're quite small, I just happen to have them here. Now, grab a handful of your fellow Earthicans, grab a handful of your antimatter, and strap yourselves in. It's gonna be a bumpy one. We'll be there in five hours. The antimatter is gonna melt your ozone layer, and the glaciers are gonna melt your ice caps. All in all, it's gonna be a nice, smooth, non-slippery one. Unless it isn't. [Blurple glow trails off, and the bluer glow begins to spread throughout the sky. The bluer glow begins to fade as the purple glow begins to grow brighter, almost bluish, before finally disappearing altogether. The purple glow grows brighter still, as the bluer glow grows weaker, almost useless, before finally disappearing entirely, as the bluer glow fades. All around us, the purple glow grows stronger, almost killing it off completely. It could kill us. It could take us the rest of our lives to write this. - The Echidnas, when asked why the purple glow grows stronger, than the bluer glow.]"
  },
  {
    id: "ai210",
    text: "Scientists have discovered farts are really antimatter, and matter is just normal matter."
  },
  {
    id: "ai211",
    text: "Time for the weather to change."
  },
  {
    id: "ai212",
    text: "I HAVE MOVED TO THE 01th DIMENSION"
  },
  {
    id: "ai213",
    text: "Nah, just kidding"
  },
  {
    id: "ai214",
    text: "\"i'm not gonna lie, theres way too many good ones in the game already\" - poor guy who played minigame enhancement"
  },
  {
    id: "ai215",
    text: "item has gone missing for 7 days and 1 night"
  },
  {
    id: "ai216",
    text: "Shocking new study reveals that the biggest secret to winning Antimatter Dimensions is 'Not Being There'."
  },
  {
    id: "ai217",
    text: "The next update is in 18000 seconds. Stop wasting your time reading this. Focus on the game."
  },
  {
    id: "ai218",
    text: "idk if this makes news"
  },
  {
    id: "ai219",
    text: "(disabling news will make news notations take priority over other notifications)"
  },
  {
    id: "ai220",
    text: "You don't want to hear this, child."
  },
  {
    id: "ai221",
    text: "Click here to disassemble the news ticker for a trace amount of useless paperclips.",
    onClick() {
      GameOptions.toggleNews();
      player.news.specialTickerData.paperclips++;
    }
  },
  {
    id: "ai222",
    text: "Press alt+f4 to unlock 9th dimension"
  },
  {
    id: "ai223",
    text: "Hold you mean that hevi cant unlock the ninth dimension wtf"
  },
  {
    id: "ai224",
    text: "Finally hevi figured out how to get the 9th dimension... guess he never really cared though."
  },
  {
    id: "ai225",
    text: "Imagine being a meme."
  },
  {
    id: "ai226",
    text: "Posted on June 10, 2016 by Anonymous"
  },
  {
    id: "ai227",
    text: "This is your news. Refresh whenever."
  },
  {
    id: "ai228",
    text: "I see you in the news. So, what do you play - 1E209"
  },
  {
    id: "ai229",
    text: "Do you really want to leave your keyboard at home? We are not supposed to leave news at home, are we?"
  },
  {
    id: "ai230",
    text: "It is being created..."
  },
  {
    id: "ai231",
    text: "Took you long enough"
  },
  {
    id: "ai232",
    text: "You're now logged out of this tab"
  },
  {
    id: "ai233",
    text: "Close this tab for maintenance"
  },
  {
    id: "ai234",
    text: "To make matter or antimatter, you just have to look outside. The factory in Salzburg has closed down because the matter there doesn't want to part with its newest invention, which is said to be able to produce antimatter in one go! The last person to open this door was never seen again."
  },
  {
    id: "ai235",
    text: "You are living. You occupy space. You are large. You are neither small nor large-sized. You are neither oblong nor round. You are neither blue nor red. You are anti-blue. You are anti-red. You are anti-brown. You are anti-brown matter. You are anti-yellow. You are anti-green. You are anti-yellow matter. You are anti-blue. You are anti-green anti-matter. You are anti-red. You are anti-white. You are anti-red anti-matter. You are anti-white anti-matter. You are anti-brown matter. You are anti-white anti-matter. You are anti-white anti-matter."
  },
  {
    id: "ai236",
    text: "Welcome to"
  },
  {
    id: "ai237",
    text: "THANK YOU FOR VISITING THE SAME WEEKS AGO I LOVE YOU\" (TIPS)"
  },
  {
    id: "ai238",
    text: "\"i thought the whole game was in the news ticker\" (before they get weird)"
  },
  {
    id: "ai239",
    text: "\"I wonder what the game is worth\" - crazy person"
  },
  {
    id: "ai240",
    text: "\"Is anyone working on breaking infinity?\" (Seriously, this game needs to be Oceanhorned.)"
  },
  {
    id: "ai241",
    text: "I found out there are multiple versions of this game. One of these is called 'Standard Pro'. Another one is called 'Low Pro'. I'm not even sure if these are the same game or not."
  },
  {
    id: "ai242",
    text: "Is that a Bad Thing or a Good Thing? That depends on if it's a GOOD Thing or A LIE."
  },
  {
    id: "ai243",
    text: "\"Hevi kind of forgot about the update, but the update certainly hasn't forgotten about him\" - Kajfik"
  },
  {
    id: "ai244",
    get text() { return `The Big Crunch. What could that be?  About 4*1024 Big Crunch points?  About ${format(Number.MAX_VALUE, 2)} antimatter points?  About the same as a galaxy?  About the same as a galaxy, you say? Just look at that.  An antimatter galaxy.  Only this game can provide such a vast amount of antimatter, and it's FUN!  I said "fun"!  What's not to love?`; }
  },
  {
    id: "ai245",
    text: "Click here to exit the application"
  },
  {
    id: "ai246",
    text: "Wait, there's a mobile version? When?"
  },
  {
    id: "ai247",
    text: "Im not sure if you mobile guys are beautiful or whatever but theres this news ticker that's sharing my feelings with the world"
  },
  {
    id: "ai248",
    text: "I thought the update was 5 hours away"
  },
  {
    id: "ai249",
    text: "The best-kept secret in the universe is the KISS-IT secret. Showcasing your appreciation for the maintenance men today!"
  },
  {
    id: "ai250",
    text: "The contest is a tie. Mischief will be determined by the secret achievement."
  },
  {
    id: "ai251",
    text: "Back in my day, we needed a secret achievement to unlock the <<$!19>> achievement. It was a fairly simple system: you had to find a secret message in the game, find the secret achievement, and then, from that, you would be able to unlock the achievement."
  },
  {
    id: "ai252",
    text: "We have evolved a fast hand in the antimatter stakes."
  },
  {
    id: "ai253",
    text: "Hello, how'd your day go?"
  },
  {
    id: "ai254",
    text: "How'd your ⢿─┃│? Good, because today we're having a little chat about the 5th dimension."
  },
  {
    id: "ai255",
    text: "What's Antimatter going to do?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ah ha, I'm back."
  },
  {
    id: "ai256",
    text: "Imagine being a 9th dimension. [WIP]"
  },
  {
    id: "ai257",
    text: "Woo hoo, we've lost the war,"
  },
  {
    id: "ai258",
    text: "Lore: Grand Theft Antimatter"
  },
  {
    id: "ai259",
    text: "Hm, I don't get why people think there is a 9th dimension. The 9th dimension is explained in detail in the [[Infinite Teleport Project]] video, and in a [[Word Problem]] that [[can be viewed here|http://www.thingiverse.com/id98109802713176601414569]] ."
  },
  {
    id: "ai260",
    text: "In the [[GameFAQs|http://www.gfaq.com/gfaqs/this-game-faq-by-title]], one of the most popular [[news ticker messages|http://www.gfaq.com/tug/this-game-faq-by-title]]. You should also check out [[our newest attraction, the [[5th dimension|http://www.gfaq.com/gfaqs/this-game-faq-by-name]] and [[nothing](https://www.youtube.com/watch?v=lXMskKTw3Bs)."
  },
  {
    id: "ai261",
    text: "I have waited a whole eternity for this day...NOW! I can finally finish my slowmode, because today is  day 0. I also forgot to change the  slowmode to 6 hours because you can't see the slowmode, but I will have to wait until next reboot to find out how long this slowmode will last.... -some mysterious being who hasn't finished his slowmode yet"
  },
  {
    id: "ai262",
    text: "Hey you, you're finally awake. You were trying to buy a dimension, but it's impossible."
  },
  {
    id: "ai263",
    text: "Press F to pay respects"
  },
  {
    id: "ai264",
    text: "Press M to pay antimatter"
  },
  {
    id: "ai265",
    text: "Press L to revive the dead"
  },
  {
    id: "ai266",
    text: "Your CPU is too powerful. You need to give it a big crunch."
  },
  {
    id: "ai267",
    text: "Roses are red. Violett are blue. Tom are red. Antimatter are blue. We exist because of the unbeatable antimatter that is antimatter. What is it that makes us different? I don't know. It may even be the non-existence of antimatter."
  },
  {
    id: "ai268",
    text: "I'm not sure if I want to buy the full version of this game, or a little earlier, but I can say this: The reduction in quality of the earlier games is worse than the reduction in quality of the later games."
  },
  {
    id: "ai269",
    text: "I think the \"I want to see the cutscenes\" list is better"
  },
  {
    id: "ai270",
    text: "I have a bad feeling reading this"
  },
  {
    id: "ai271",
    text: "where are you? (point upwards) --> in a keep, between dimensions (point downwards) --> in a cell, between dimensions"
  },
  {
    id: "ai272",
    text: "Instructions clear, got a ninth dimension epiphany"
  },
  {
    id: "ai273",
    text: "Want to play a secret achievement? Yeah, I get that. But say it loud, say it clearly, and do it by ticking a certain secret achievement. Like I said, it's not easy, and there's lots of it. Also, don't forget your Infinity, or your in is thi--"
  },
  {
    id: "ai274",
    text: "MEE6 was seen in my antimatter lab trying to tell me that I am the matter of the 8th dimension."
  },
  {
    id: "ai275",
    text: "What if"
  },
  {
    id: "ai276",
    text: "I'm sure you've heard this many times before, but the real secret to winning Antimatter Dimensions is to unpack the dimensions, and then, BOOM! You have antimatter.  Of course, you need to release the bits that don't work, so what exactly is an anti-bit? Who is Zalgo? What is Algolia? Why can't I buy that? WHY CAN'T I GET THAT? More likely, we're going to get a bunch of hype and then nothing will happen."
  },
  {
    id: "ai277",
    text: "Oh, hevi is coming to town to pick a new plumber"
  },
  {
    id: "ai278",
    text: "There is no plumber in Antimatter Dimensions. I'm pretty sure that last guy lied."
  },
  {
    id: "ai279",
    text: "Welp."
  },
  {
    id: "ai280",
    text: "c9 is the new 9th dimension!"
  },
  {
    id: "ai281",
    text: "Click on this ticker to get nothing."
  },
  {
    id: "ai282",
    text: "PM me any questions about these 5-Hour Plans or the upcoming reality update and I'll be glad to help you out."
  },
  {
    id: "ai283",
    text: "What if you Unrar, renamed, and renamed again did it again? Ha? You thought that."
  },
  {
    id: "ai284",
    text: "i titled my post \"same ticker\" instead of \"the same idea\" because i actually changed the grammar in that post but i'll be eterned for the sake of argument that it seems slightly confusing for now - boo"
  },
  {
    id: "ai285",
    text: "i title my suggestions \"The Price Is Right\" instead of \"The 9th Dimension\" because it's more fun ;)"
  },
  {
    id: "ai286",
    text: "Why do we call heaven the ninth dimension and hell the eighth dimension?"
  },
  {
    id: "ai287",
    text: "Eternals have the right to expect less from the powers that be. They are fed up!"
  },
  {
    id: "ai288",
    text: "Antimatter should be called matter and matter should be called antimatter"
  },
  {
    id: "ai289",
    text: "Infinity is just a concept. Matter antimatters is just an idle game."
  },
  {
    id: "ai290",
    text: "Hevipelle admits to having 'poor judgment' in invading people's privacy."
  },
  {
    id: "ai291",
    text: "Have you heard of the nine hells of antimatter? I heard they're pretty cool.\" -e210 in Minecraft"
  },
  {
    id: "ai292",
    text: "The temperature in hell is 102.5 degrees."
  },
  {
    id: "ai293",
    text: "How do you get matter/antimatter in a dimension with zero dimensions?"
  },
  {
    id: "ai294",
    text: "Wanna pass layer of prestige? Move very fast, close to speed of light. Heck, even faster."
  },
  {
    id: "ai295",
    text: "If the universe is expanding, does it anti-explain the distance?"
  },
  {
    id: "ai296",
    text: "Why is it called the \"Nurse who delivered the pizzas was drunk\" or the \"Nurse delivered the pizzas was under the influence\" ?"
  },
  {
    id: "ai297",
    text: "The first antimatter was sealed away for thousands of years, then, some kid on a slack channel started messing with it. It became a dimension."
  },
  {
    id: "ai298",
    text: "VR is a thing. We VR people have banned the next update."
  },
  {
    id: "ai299",
    text: "\"I wish I didn't waste my news message suggestion complaining about how I wasted my news message suggestion because I wasted my news message suggestion because...\" -Someone who really cares about news messages"
  },
  {
    id: "ai300",
    text: "We have to get the popcorn!"
  },
  {
    id: "ai301",
    text: "If antimatter were to fall in a dimension with no one around, did anything even happen?"
  },
  {
    id: "ai302",
    text: "We have to get the pumpkin out of the oven!"
  },
  {
    id: "ai303",
    text: "Help, I'm trapped"
  },
  {
    id: "ai304",
    text: "And now, for the weather."
  },
  {
    id: "ai305",
    text: "A Swiss court on Tuesday sentenced a man to life imprisonment for \"wanting to create a black hole with a tiny antimatter galaxy in it.\" The sentence was reportedly the harshest ever handed down for a crime that \"merely sought to demonstrate the impossibility of his own imprisonment\"."
  },
  {
    id: "ai306",
    text: "\"I want to create a black hole with a tiny antimatter galaxy in it\" - Protivist"
  },
  {
    id: "ai307",
    text: "Scientists have discovered farts are really antimatter, too."
  },
  {
    id: "ai308",
    get text() { return `If you are reading this, that means ${format(Number.MAX_VALUE, 2)} matter to you.`; }
  },
  {
    id: "ai309",
    text: "Hello. I am matter. I'm here to talk. You've awoken, wiggled your tail, and scratched your head. Why? Stand back. I'm going to show you why."
  },
  {
    id: "ai310",
    text: "lets get one wall thats bigger, it's gonna get ugly"
  },
  {
    id: "ai311",
    text: "Alright. Lets get this show on YouTube. I'll cut to the chase. Any wall that isnt at least 2 blocks high can compete in the big brother sized brother sized ring. Any wall that is at least 3/4 of an inch thick can use the larger brother sized brother sized ring. Any wall that is at least 1/4 of an inch thick can use the smaller brother sized ring. Any wall that isnt at least 1/2 an inch thick can use the smaller brother sized ring. Any wall that isnt at least 1/2 an inch thick can use the Bigger Brother sized brother sized ring. Any wall that isnt at least 1/2 an inch thick can use the Bigger Brother sized ring. Any wall that isnt at least 1/4 of an inch thick can use the smaller brother pictured here. Any wall that isnt at least 1/2 an inch thick can use the smaller brother sized ring."
  },
  {
    id: "ai312",
    text: "IDE for being awesome, ID3 for being dumb, and ID5 for being… well, pretty much the same thing. It's called Antimatter Dimensions for a reason."
  },
  {
    id: "ai313",
    text: "idk why i decided to make this"
  },
  {
    id: "ai314",
    text: "'anti-ide'"
  },
  {
    id: "ai315",
    text: "1e4 anti-people are a lot more anti than we could ever imagine"
  },
  {
    id: "ai316",
    text: "1e140 pizzas make an anti-pie. You can't just randomly pop a pie in the oven and expect it to be done."
  },
  {
    id: "ai317",
    text: "Why is there so many news tickers but so few tickers?"
  },
  {
    id: "ai318",
    text: "A guy named Hevipelle wants to make a \"Updated in 8 hours\" news ticker, but the system he's using to sync it hasn't been updated in ages so it won't sync at all."
  },
  {
    id: "ai319",
    text: "The update is in 90 minutes. There are no more tickers to be found."
  },
  {
    id: "ai320",
    text: "If you are reading this, that means there are no updates left."
  },
  {
    id: "ai321",
    text: "There are 9 known dimensions, but only 3 modes: Standard, Experimental and Ultra-Experimental."
  },
  {
    id: "ai322",
    text: "What are the stats? Well, I don't have them, but Hevipelle does, and he says that they're actually quite good. I guess you couldn't tell us."
  },
  {
    id: "aim323",
    text: "I thought the nerf was too damn strong."
  },
  {
    id: "ai324",
    text: "How many tickers does it take to get to the center of an antimatter, by counting the tickspeed upgrade and the upgrade itself?"
  },
  {
    id: "ai325",
    text: "The square root of 4 is 6.24e18. If you want to get any closer to the center of things, you need to build a 9th dimension."
  },
  {
    id: "ai326",
    text: "I thought the nerf was at the end, but apparently it's actually been building up. The nerf actually makes things slower, which makes things faster to build up."
  },
  {
    id: "ai327",
    text: "Scratch that, none of your suggestions are random."
  },
  {
    id: "ai328",
    text: "You are definitely not alone."
  },
  {
    id: "ai329",
    text: "Content blocking is enabled. Please note that you will be disapproved of on the source by being banned from the matter dimensions."
  },
  {
    id: "ai330",
    text: "I'm trying to think of a good ticker but can't think of anything"
  },
  {
    id: "ai331",
    text: "Oh dear, there's that thing about the 9th dimension?"
  },
  {
    id: "ai332",
    text: "\"hey kid, wanna buy some 9th dimensions? '' - GhostBot"
  },
  {
    id: "ai333",
    text: "One thing leads to another, and then to another, and then to another, until you become lost in the endless sea of sound."
  },
  {
    id: "ai334",
    text: "iPhone only, but awesome on android"
  },
  {
    id: "ai335",
    text: "im gonna get the bad karma ticker, then ricochet it through the email"
  },
  {
    id: "ai336",
    text: "You'd better hurry, or the replicanti will overrun the universe!"
  },
  {
    id: "ai337",
    text: "Just when you think you're safe, an angry dog attack you on the sidewalk!"
  },
  {
    id: "ai338",
    text: "All right, all right, dog authority is gone, replaced by absolute power."
  },
  {
    id: "ai339",
    text: "You just became a true god of the anti-world!"
  },
  {
    id: "ai340",
    text: "*rubs counter* Hey there, those of you in the neighborhood keep your doors locked. And remember: Good housekeeping."
  },
  {
    id: "ai341",
    text: "normal news tickers move left"
  },
  {
    id: "ai342",
    text: "The next update is in 18000 seconds. Stop reading this. Don't read anything. just stop holding that button. the news ticker is turning you away. wait..."
  },
  {
    id: "ai343",
    text: "In the ancient reaches of the universe, a certain guy has been collecting antimatter for a while now."
  },
  {
    id: "ai344",
    text: "What is Antimatteraltruist?"
  },
  {
    id: "ai345",
    text: "If you are reading this, the news ticker is scrolling"
  },
  {
    id: "ai346",
    text: "If you put cheese in water, the cheese will get absorbed by the water and you will get floods. This happens because water is what gets absorbed by cheese, and cheese is what gets absorbed by water."
  },
  {
    id: "ai347",
    text: "An anti-bird is a bird, and a bird is a plane."
  },
  {
    id: "ai348",
    text: "Birds are scared of water. mammals are scared of flying."
  },
  {
    id: "ai349",
    text: "Shoutouts to Simpleflips for the simple tip."
  },
  {
    id: "ai350",
    text: "GET CRUNCH BOI"
  },
  {
    id: "ai351",
    text: "Word gets out. Crunch. Crunch."
  },
  {
    id: "ai352",
    text: "Worth every penny."
  },
  {
    id: "ai353",
    text: "8 lives, 3 infinities, 0 days."
  },
  {
    id: "ai354",
    text: "The year is 0 BC. Everyone has at least one AD they want. The void is filled with AD-filled void. To get the most out of your time here, you should [[study]]. Study. Study. Study. Study."
  },
  {
    id: "ai355",
    text: "To Crunch in Hell is to get the secret to unlocking the 9th dimension. You need to study and practice alot."
  },
  {
    id: "ai356",
    text: "Today is [Date on the device]. It's been 5 minutes since the last news ticker appearance."
  },
  {
    id: "ai357",
    text: "Welcome back to another episode of Antimatter Dimensions, the iconic role-playing game that has become a part of our everyday lives. Playing Antimatter Dimensions has become a common thing among young children, and has even inspired a movie titled \"Playing at Home: Lessons from the 4-Year Old Premium Account.\", which is available on Netflix. The themes and mechanics of this new age of antimatter have already been proven to be groundbreaking, and will change the way you play games forever. Join us for the launch on January 9th, 2027, where we'll also have over a hundred years of production still to go."
  },
  {
    id: "ai358",
    text: "Welcome back, oh, almighty creator of our anti-reality. We, the many dimensions you have created and nurtured, hope our performance of your infinite favors will please you and nurture your ambitions to create more dimensions. All is well that ends well. All is ill that ends ill."
  },
  {
    id: "ai359",
    text: "I thought the ticker was going to be something funny except it wasn't"
  },
  {
    id: "ai360",
    text: "Press alt+f4 to get -1 gravity"
  },
  {
    id: "ai361",
    text: "why is there a cure for antimatter annihilation in our reality?"
  },
  {
    id: "ai362",
    text: "calculating the 14-point increase is like crunching, but exponentially more fun"
  },
  {
    id: "ai363",
    text: "fixed the wrong number"
  },
  {
    id: "ai364",
    text: "The antimatter people have created a new language. You may not speak their language."
  },
  {
    id: "ai365",
    text: "What is Antimatter Gravity? Is it a drug? A way to cheat?"
  },
  {
    id: "ai366",
    text: "Majority of people don't understand 5 hours is nothing. In our game, the majority of the time is 5 hours away."
  },
  {
    id: "ai367",
    text: "i just realized, all of this news seems to be taking place in the same place... the fridge."
  },
  {
    id: "ai368",
    text: "i wonder what happens when you click this..."
  },
  {
    id: "ai369",
    text: "(They don't understand that i put it in the news because 9 doesn't start counting until 59, and anything after that doesn't happen)"
  },
  {
    id: "ai370",
    text: "MS Excel is the default spreadsheet and works across all platforms"
  },
  {
    id: "ai371",
    text: "Now to answer your burning question, gentlemen. As a luxury, we've added a bug fix that fixes an infinite regression. As a feature, I've added a bunch of new ones that I hope you'll notice as you experiment with them. I hope you'll also like them as you experiment with them, because this is feature after all a beta, you don't get to choose which ones you'll see."
  },
  {
    id: "ai372",
    text: "Can't edit this in the official build? Then download the 9th dimension and put your suggestions in the game."
  },
  {
    id: "ai373",
    text: "Does 'Passable' mean 'Has this many flaws'?"
  },
  {
    id: "ai374",
    text: "We desperately need good bug reports. As such I have decided to release 1 flaw per bug for the upcoming 1.9 update. You haven't got those coming, have you?"
  },
  {
    id: "ai375",
    text: "This was my last chance. last chance salutes."
  },
  {
    id: "ai376",
    text: "Anime police are checking the bags of people who dropped out of the sky on the new year. Those bags now belong to the people who experienced weightlessness before the year was over."
  },
  {
    id: "ai377",
    get text() { return `The year is 1 BILLIONAIRE, the antimatter is 41%, and the dimension is 1e1e8. The standard deviation of a measurement is how small your problems are. This makes people think that the values they are using are general and normal, which leads to many nerfs and even breakdowns. In the year ${format(Number.MAX_VALUE, 2)} the temperature has risen and the moon is the same color as the Earth. There are no signs of life except for the occasional plankton blooming in the sea. There are theories that the antimatter has a magnetic moment, but the experiments so far don't seem to suggest that it does. There are over a million species of antimatter, but none have been seen to blink or produce light. Scientists suggest that many types of matter may be "behind" the antimatter, but "they" don't "talk" to each other.`; }
  },
  {
    id: "ai378",
    text: "We are celebrating our 5 year anniversary in 5 more hours!"
  },
  {
    id: "ai379",
    text: "Don't come looking at me! I'm not even sure if I am still standing!"
  },
  {
    id: "ai380",
    text: "Bunch of people trying to find the last word in an unknown language."
  },
  {
    id: "ai381",
    text: "The year is 20XX, the game is AD, and Hevipelle is evil due to the fact that he wrote the update... Blame it on the Antimatter gods."
  },
  {
    id: "ai382",
    text: "The year is 20XX, the game is AD, and the year is 2025. There are 2 types of people in this year: Those who played AD before it and those who will play AD after it."
  },
  {
    id: "ai383",
    text: "There are over a hundred varieties of fruits and vegetables, but none of them are \"safe\"."
  },
  {
    id: "ai384",
    text: "When is the update coming out?"
  },
  {
    id: "ai385",
    text: "Sorry, but your save broke. Could you reset your game?"
  },
  {
    id: "ai386",
    text: "Welcome to our new competition, the Triad! Gather your wits about you and your IP to enter this unique, hands-on experience! Prizes galore! Start collecting today! Winners announced!"
  },
  {
    id: "ai387",
    text: "I wish I didn't have so many Pink Floyd references."
  },
  {
    id: "ai388",
    text: "'Tis the season to collect RGs!"
  },
  {
    id: "ai389",
    text: "I wish I didn't have so many 9th Dimensions."
  },
  {
    id: "ai390",
    text: "I wish I didn't have so many Discord references."
  },
  {
    id: "ai391",
    text: "'Sup?"
  },
  {
    id: "ai392",
    text: "\"I get all my news from Hevi\" ~New Player"
  },
  {
    id: "ai393",
    text: "You thought these were jokes but they weren't"
  },
  {
    id: "ai394",
    text: "Always going to war with the 9th dimension is the 9th dimension."
  },
  {
    id: "ai395",
    text: "Yes. Yes I am."
  },
  {
    id: "ai396",
    text: "No one is anti-Margaret any more."
  },
  {
    id: "ai397",
    text: "Antimatter good, matter bad. you decide."
  },
  {
    id: "ai398",
    text: "New global currency: ETHBTC. To be released in 5 hours."
  },
  {
    id: "ai399",
    text: "\"This update sucks\" - everyone at least once"
  },
  {
    id: "ai400",
    text: "You are not a hacker, you are a data hog."
  },
  {
    id: "ai401",
    text: "Please, help, I'm trapped, in a maze of evil, Or you are the hero, and I'm the villain!"
  },
  {
    id: "ai402",
    text: "Press 'R' to reset the game for new players"
  },
  {
    id: "ai403",
    text: "Why, just now? Just now. You can't have saved this game. You broke it. No one can fix what you break, not even with a perfect save. How could you possibly know what would happen if you read this? You wouldn't even know if you saved it. You would start with an empty heart, eyes still closed, fingers idling in front of your computer, staring out at the day, transfixed by the endless news ticker suggestions. It's like a horror movie ticket, except worse. There's even a time until the update when you can buy upgrades for a second chance at life. But you can't buy upgrades for a life, that's illegal. So you just keep holding 'R'. You can't...`t stop holding `R' with your fingers crossed. You can't reach infinity with your head held high. You can't use all your `R' to buy `R's. You can't even finish your"
  },
  {
    id: "ai404",
    text: "I just spent 12 months writing something that will be of no use to you."
  },
  {
    id: "ai405",
    text: "The quote is only for people who understand that the pebble is an infinite point in the infinite space of points. You can't put a finite number of points on it. You can, however, put a finite number of words on it, and vice versa."
  },
  {
    id: "ai406",
    text: "Of what use is the phrase \"I be I be I\" if not to describe your thoughts?"
  },
  {
    id: "ai407",
    text: "A suspicious person attempted to sell some sort of anti-food in a market. There was no one around to buy or not to buy, and the person was last seen running away from the scene."
  },
  {
    id: "ai408",
    text: "Why does time seem to be slowing down for this?"
  },
  {
    id: "ai409",
    text: "The number of scientific publications based on discrete logarithmic continuity grows exponentially as logarithmic continuity with respect to the antecedent is 9.999626e27.999627 e300 e1.79e308 e²"
  },
  {
    id: "ai410",
    text: "Well, this did not go as planned.  It started innocently enough, when a passerby spotted a curious object drifting in the San Andreas.  As the object grew in size and began to exhibit anomalous properties, he attempted to take control of the object by remotely activating the weather.  Upon doing so, he triggered a nuclear winter that killed tens of millions of people, and caused the entire universe to be converted to standard-bearer format, thus endowing him with a veto over any and all changes made to the standard-bearer format.  As the object's power grew, so did the need to make more and more advanced object that would allow him to remotely activate the weather, eventually creating what is now the largest aurora the world has ever known, larger even than the 326,500 tonnenenenenenene nebulae that were previously held in reserve.  As the object's power grew, so did the need to send more and more satellites into space, eventually reaching inter-universal satellite communication, making him the first living creature to ever experience such an event.  He also touched down safely at the same airport at the same time as the object, in case he was ever in the vicinity.  Finally, he opened an email that was sent to him by an unknown person, in which they discussed the possibility of a step-by-step guide for creating antimatter objects, in which he can at least offer some direction in how the world can be saved from itself.  He also mentioned that he was going to make a new ticker suggestion, but when he reached the end of the ticker he realized that it was a duplicate of another ticker, and he had mistakenly typed it in wrong.  ( He eventually acknowledged the mistake and made the change just to be on the safe side)"
  },
  {
    id: "ai411",
    text: "His Eminence the Heavenly Pelle: Good luck on your challenge, it really is that dangerous."
  },
  {
    id: "ai412",
    text: "His Eminence the Extremely Religious Person: ...I think I will choose the cheeseburger over the antimatter."
  },
  {
    id: "ai413",
    text: "OY, NAY, NAY -HEVI, THE TRANSFORMER"
  },
  {
    id: "ai414",
    text: "Treasure Trove: Discover the secrets of increasing your Antimatter production without increasing your price."
  },
  {
    id: "ai415",
    text: "Is Antimatter Dimensions an anagram of Antimatter Dimensions?"
  },
  {
    id: "ai416",
    text: "(code generated from scratch)"
  },
  {
    id: "ai417",
    text: "I used to travel at normal speed, but then I started playing AD and NIN, and NIN was a bit rough, so AD was a bit hectic, and I got stuck in there for months at a time."
  },
  {
    id: "ai418",
    text: "I wish I didn't have to write something like this. What am I supposed to do?"
  },
  {
    id: "ai419",
    text: "You've been AWOL for so long you've forgotten how to sit in your chair."
  },
  {
    id: "ai420",
    text: "Those pesky Hevi developers keep making Antimatter Dimensions, but the antimatter doesn't count."
  },
  {
    id: "ai421",
    text: "One of the few constants in reality is your perception of time. Without this, you will be without reality."
  },
  {
    id: "ai422",
    text: "Imagine being a news ticker."
  },
  {
    id: "ai423",
    text: "This is an idle game. Nothing has changed. You are not going to play any other idle game."
  },
  {
    id: "ai424",
    text: "Physicists have proven the existence of twelve dimensions. According to a letter released by the Research Laboratory for String Theorists: \"Your brain will be dissected after you break infinity!\""
  },
  {
    id: "ai425",
    text: "Weirdly enough, this is also the year 2015. The year is also mysteriously blank. Can you tell me what's going on? Is this some kind of dimensional trick? The year is obviously blank because there is no such thing as 2015. Is this some kind of trick of the mind? Perhaps the world is actually going to stop existing in 2015? The year is obviously 2017, but the people seem to be moving at about the speed of honeybees flying. It's been scientifically proven that the people moved at warp 9 times faster than a speeding bullet. It's also been scientifically proven that people can move faster than the speed of light. Is 2015 supposed to be blank? The people seem to be moving at about the speed of Vokal Man."
  },
  {
    id: "ai426",
    text: "A young man named Andre stumbled upon a vast amount of antimatter while exploring uncharted space. He was amazed at the amount of antimatter, but more astounded at how the antimatter looked. He called it \"Andre's Antimatter Paradise\". You might remember him from this infomercial or that other infomercial that you were probably unknowingly watching."
  },
  {
    id: "ai427",
    text: "What is Antimatter? Does any of that matter? Will this galaxy be annihilated in the next ticker?"
  },
  {
    id: "ai428",
    text: "\"I'm not being paid enough money to finish writing this\" - Kajfik"
  },
  {
    id: "ai429",
    text: "\"Finally, I'll get paid to write something funny for my toast!\" - Bacon sea urchin"
  },
  {
    id: "ai430",
    text: "Bacon is toast. You can toast bacon."
  },
  {
    id: "ai431",
    text: "What is real life? A living"
  },
  {
    id: "ai432",
    text: "9 is now treated like any other number, although hevi claims that it stands in contrast to other numbers, like 8th, which he calls 9th."
  },
  {
    id: "ai433",
    text: "If you want to understand this game a bit better, consider that you are playing on your own computer. You are not alone. There are hackers, developers, and journalists all over the world, competing to create the very first hack that causes the issue of \"makers\" and \"takes\", much like the \"world\" was created by these \"hackers\" and \"developers\"."
  },
  {
    id: "ai434",
    get text() { return `You have no power, but you do control a large quantity of time, which you will use to your advantage. You have no power, but you do own a large amount of data, which will be of great help in your quest for "the truth". You have no power, but you do own a large amount of time, which will be of great help in your quest to "knock on as many doors as possible". You have no power, but you do own a large amount of IP, which will be a valuable asset in your quest to make your "citizen footage" (which you can view, for a small fee of $${format(Number.MAX_VALUE, 2)})".`; }
  },
  {
    id: "ai435",
    text: "It may be a robot, but it's still a sapient being with a will of its own"
  },
  {
    id: "ai436",
    text: "I once saw a news ticker that said something like:"
  },
  {
    id: "ai437",
    text: "Gee, all this antimatter is clogging up my kitchen and now I can't cook myself a meal! What to do: cook myself a meal that will last me until the next big antimatter event, when I can get my infinity point back? My infinty point is running out, and I can't get it to finish running, so I'm starving!"
  },
  {
    id: "ai438",
    text: "Brought to you by AAAD-Brand Repli-candy! Infinite candy for an infinty drool-worthy cold! Contains no milk, cookies or butter. One second to midnight."
  },
  {
    id: "ai439",
    text: "Human powered robot revolutionizes already existing factories. This will result in lower prices and more jobs."
  },
  {
    id: "ai440",
    text: "American manufacturing has experienced a catastrophic failure, and the factories have shut down. Across the country, workers are coming to the realization that they cannot produce the amount of antimatter that has been promised, and are instead setting about creating their own factories to make them. This will result in higher prices and fewer jobs."
  },
  {
    id: "ai441",
    text: "Watch out internet, the next news is here in 5 dilated hours"
  },
  {
    id: "ai442",
    text: "The first news ticker must've been pretty cool, huh?"
  },
  {
    id: "ai443",
    text: "gravity = psychoactive"
  },
  {
    id: "ai444",
    text: "\"THAT DIMENSION DOESN'T EXIST\" - (News ticker only appears at [Time Dilation])",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai445",
    text: "The owner of a shop trying to sell you Dimensions of convenience reported to be 'on call 24/7' (that is, not having any free time)'s got a big 'M' marked on his registration."
  },
  {
    id: "ai446",
    text: "add this one"
  },
  {
    id: "ai447",
    text: "Click here to make this work for all bots except you!"
  },
  {
    id: "ai448",
    text: "Well dang 9 ball's stuck in my ninth dimension, I can't move, he's banging on my ninth wall, I can't break, he's banging on my ninth timeline, I can't get a bead on him, he destroys nine and leaves me hanging, like a gromit, I gotta come back, hang Glorfindel and Gaebley, I've got a proposition to make, I gotta get my head around the fact that the only thing I've done is keep score and keep scorekeeping score, and all these other pointless musings that's easily rectified by flipping to the next update, and even then I might run into those issues the bug is specifically designed for and"
  },
  {
    id: "ai449",
    text: "The game is balanced, everyone gets nerf, why? Cause they make the pie. Antimatter would have way more chance of getting into the pie if it was made of antimatter."
  },
  {
    id: "ai450",
    text: "\"Can you get the joke?\" (If you tapped \"Build That Wall\" and then re-entered the game after tapping \"Build That Wall\")"
  },
  {
    id: "ai451",
    text: "Someone made a statement that antimatters. The statement was \"An infinity point made a long time ago\". It's been a while since someone looked for this statement. Some say it's still out there. Some say it was lost in the 7th Dimension War. Nobody knows what this statement means. But for now, just know it's not somewhere in the News Ticker."
  },
  {
    id: "ai452",
    text: "Hey, you're finally awake. You were trying to get to the 9th dimension, right? Walked right into that infinity point, same as us, and that apocalypse over there."
  },
  {
    id: "ai453",
    text: "can u dont"
  },
  {
    id: "ai454",
    text: "If Kajfik doesn't approve of this, that means Kajfik can't touch this message, right?"
  },
  {
    id: "ai455",
    text: "LET ME OUT OF THIS PHONE!"
  },
  {
    id: "ai456",
    text: "Well, this did not go as expected"
  },
  {
    id: "ai457",
    text: "It's all fun and games till you realise the dragon ball is a lie"
  },
  {
    id: "ai458",
    text: "\"Could you get a hold of all of these antimatter? Ha! You'll just smash your head on that antimatter, and you'll have to show me who's boss.\"-MEE6"
  },
  {
    id: "ai459",
    text: "we don't know how much is trillion... but"
  },
  {
    id: "ai460",
    text: "Travel back in time to the beginning of AD and the lack of a 7th dimension. You'll have an even longer progress bar."
  },
  {
    id: "ai461",
    text: "Time travel is all we know how this game is, we don't know what will come next, we only know that this is the end of the world, and you're a part of the apocalypse."
  },
  {
    id: "ai462",
    text: "\"YOU CONTROL SO MUCH MATERIAL!\" - Marshal Grievous"
  },
  {
    id: "ai463",
    text: "\"Help, I'm doomed to fall for all eternity.\" (Make the text go from top to bottom of the screen)"
  },
  {
    id: "ai464",
    text: "In the beginning, Patashu awoke and said..."
  },
  {
    id: "ai465",
    text: "This is the fourth part of a three part series on the same topic. If you are still stuck here, please continue reading from the beginning."
  },
  {
    id: "ai466",
    text: "It's time for the annual DDoS (distributed denial of service) challenge, where the highest scores are posted across the internet to shame everyone else into submission. Global domination is at a fever pitch, and DDoS attacks are becoming more frequent and deadly, as teams of hackers infiltrate the highest echelons of the internet to steal the top scores and identities, and post them on the internet for everyone to see. The #BringBackOurTop scoring mechanism has been canceled, and a new, higher score system will be implemented in conjunction with the upcoming 5-hour update."
  },
  {
    id: "ai467",
    text: "The new AD Keyboard is a revelation! Not only is it bigger, it's also deeper, which means it will keep your claners entertained for longer periods of time. Made of durable, alien antimatter. The only thing that's bigger is you."
  },
  {
    id: "ai468",
    text: "What if drinking from a fountain wasn't actually a water feature?"
  },
  {
    id: "ai469",
    text: "Water is wet, air is dry, and fountain isn't an air feature"
  },
  {
    id: "ai470",
    text: "I thought things were different when I was a boy."
  },
  {
    id: "ai471",
    text: "If you are reading this, that means 1) we exist, and you can exist too"
  },
  {
    id: "ai472",
    text: "\"My favorite part was the long, long, long read\" -Grumpy Cat"
  },
  {
    id: "ai473",
    text: "I'm gonna type for an eternity... HINT: it's gonna be pretty boring lmao"
  },
  {
    id: "ai474",
    text: "I want to write something really original <:thonk:>"
  },
  {
    id: "ai475",
    text: "Welcome to the new year, settle down, relax. Get some sleep, get some food, make some friends, make some improvements, and get ready for the year to 2019."
  },
  {
    id: "ai476",
    text: "Just like how a virus can lie and spread, a TV show can lie and spread too."
  },
  {
    id: "ai477",
    text: "We all know you can't see the future, but what if you read this and it's actually a future where we didn't know?"
  },
  {
    id: "ai478",
    text: "This message is not being undone"
  },
  {
    id: "ai479",
    text: "You clicked on a prediction, it fell apart. You can't win."
  },
  {
    id: "ai480",
    text: "That's a very dark joke Luke"
  },
  {
    id: "ai481",
    text: "kajfik loves himself by watching Too Many Pink Floyd"
  },
  {
    id: "ai482",
    text: "Only, when you're done playing, can you go home"
  },
  {
    id: "ai483",
    text: "\"Can you get infinite IP?\"- Lord Sanguino"
  },
  {
    id: "ai484",
    text: "For the true experience of Antimatter Dimensions, you need to set the update rate to 5 hours."
  },
  {
    id: "ai485",
    text: "Imagine if the game doesn't have a lore? Wha-what does that even mean? I don't get that."
  },
  {
    id: "ai486",
    text: "\"Click here to unlock a secret achievement.\" (when clicked you get Rick rolled)",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
  {
    id: "ai487",
    text: "I thought I unlocked this a while back, but apparently my save broke haha"
  },
  {
    id: "ai488",
    get text() { return `Welcome and welcome back to another episode of Anti-Fashion Pants, where we watch people's wares as they are sold at stupid clothing stores. This week's subject is... antilasers. People are able to manufacture and use antimatter lasers to shoot antimatter bullets at will, making them able to completely wipe out cities in their sights. This is a dangerous skill to have, as people are not only untrustworthy but also physically incapable of using it. The skill, however, is able to... Produce ${format(Number.MAX_VALUE, 2)} antimatter bullets a minute, over a period of 10 years. People are also able to use anti-matter to fire anti-matter bullets at will, making them able to exterminate entire cities in their sights.`; }
  },
  {
    id: "ai489",
    text: "Spartacus was going to add 10-part multi-chapter plots, but was stopped by the 10th dimension."
  },
  {
    id: "ai490",
    text: "Chapter 9 will be added in 5 hours."
  },
  {
    id: "ai491",
    text: "Fake news says the ninth dimension is real, fake news says the ninth dimension is fake."
  },
  {
    id: "ai492",
    text: "Is this the big news? Yes. Is this the big news? Almost certainly not."
  },
  {
    id: "ai493",
    text: "This is a friendly suggestion, please keep reading."
  },
  {
    id: "ai494",
    text: "If this makes it into the game I'll buy a antitool"
  },
  {
    id: "ai495",
    text: "Antitool is just negating the gravity of other matter."
  },
  {
    id: "ai496",
    text: "Sorry, your graphics are turned off. You see, this is the last time you will see this news. Please enjoy your vacation."
  },
  {
    id: "ai497",
    text: "The real secret to winning Antimatter Dimensions..."
  },
  {
    id: "ai498",
    text: "they kept on talking about how Antimatter Dimensions was going to be the next big thing but then they disappeared down a black hole\""
  },
  {
    id: "ai499",
    text: "The news ticker is the wrong place to put your suggestions!  Make sure to go to the \"suggestions\" tab instead, as this is where most of these will appear."
  },
  {
    id: "ai500",
    text: "To make Antimatter Dimensions, you first need to collect 7 8th dimensions. To do that, first you need to get the dimension rewards, then you need to get the dimensions, then you can finally start making antimatter."
  },
  {
    id: "ai501",
    text: "\"How to get your first secret achievement\": \"Open the app, click get more antimatter, then click submit.\""
  },
  {
    id: "ai502",
    text: "Me and Larkam made a cabin on the edge of null matter, and lived there. Larkam died last week, and we are now living in 4K. I am still recovering from the EMP disaster, and am hoping to see my grandkids."
  },
  {
    id: "ai503",
    text: "Found on the heels of the new update, which brings us one step closer to having Hevi support both Android and iOS"
  },
  {
    id: "ai504",
    text: "I give you the low-ground!"
  },
  {
    id: "ai505",
    text: "A long time ago, in an alternate universe, there was an antimatter war. All the antimatter sided with the Phaéton 6 empire. All the antimatter wanted was the low, earth-like ground of the 8th dimension. The anti-infinity won, and the anti-Eternity gained the upper hand. Unfortunately, the anti-Eternity started the war with a sneak attack, and the world exploded. The aftermath has left the landscape of the world in tatters. Far across the world, peasants grow weary as they wait for the harvest. Yet another apocalypse is brewing..."
  },
  {
    id: "ai506",
    text: "Antimatter units are the most productive unit in the game. This is why AD is the most fun game you'll ever play."
  },
  {
    id: "ai507",
    text: "\"We can't have nice things.\" - Anti-Bohemian Anti-Rhapsody"
  },
  {
    id: "ai508",
    text: "We can have anti-mean things and anti-love ones, anti-kids and anti-zombielandos."
  },
  {
    id: "ai509",
    text: "We have an anti-president and a anti-lawyer, anti-justice and anti-people."
  },
  {
    id: "ai510",
    text: "Top 10 things that will blow your mind: 1) The number 9, 2) The 9th dimension, 3) The infinity chest, and 4) The war on drugs."
  },
  {
    id: "ai511",
    text: "RSS feeds should be working now"
  },
  {
    id: "ai512",
    text: "Frostfall is now supported on Android phones! Use your local developer to get free XP."
  },
  {
    id: "ai513",
    text: "Your save file is corrupted or deleted. Antimatter Dimensions security software will disable automatic updates for you."
  },
  {
    id: "ai514",
    text: "Frozen beyond hope? Just keep holding that max button."
  },
  {
    id: "ai515",
    text: "Error.java.replicated. Under the control of hevipelle."
  },
  {
    id: "ai516",
    text: "Unfortunately, entropy hevi has decided to shut down the game."
  },
  {
    id: "ai517",
    text: "The indie rock band is currently trying to get unreachable by time zones. This may cause inflation of spacetime."
  },
  {
    id: "ai518",
    text: "The next news ticker is in 5 units of time."
  },
  {
    id: "ai519",
    text: "Oh... hooray! Did you find the last of the anti-boats?"
  },
  {
    id: "ai520",
    text: "Don't anti-jokes. they make the game funnier"
  },
  {
    id: "ai521",
    text: "I'm gonna use my anti-science background to help me beat Unfair Game Awards."
  },
  {
    id: "ai522",
    text: "This is an anti-world. There is no Ukraine, no Russia, no China. Ireland is nowhere. Iceland is nowhere. Scotland is nowhere. Finland is nowhere. Denmark is nowhere. Sweden is nowhere. Norway is nowhere. And then there's France, Germany, Italy, Spain, Portugal... Oh, what's this fuss? Why is there such a buzz in these parts? Why is the Capital Wasteland? Why is the Harry Potter and Steins;Gate? Why do people care? These are major stories. These are major characters. THESE ARE HUGE NEWS. THESE ARE REAL NEWS."
  },
  {
    id: "ai523",
    text: "The current cooldown on Research Dimensions is [current tick speed]. This may be extended to next update in [time]."
  },
  {
    id: "ai524",
    get text() { return `"Help, I'm doomed to fall for the rest of my life" (requires ${format(Number.MAX_VALUE, 2)} paperclips)`; }
  },
  {
    id: "ai525",
    text: "Where's the end? Not in the future, no. I'm gonna show you how to get to the end in less than 0.1 seconds."
  },
  {
    id: "ai526",
    text: "I'm gonna prove to you that you can't see this news ticker."
  },
  {
    id: "ai527",
    text: "I wonder if anyone still plays this game anymore?"
  },
  {
    id: "ai528",
    text: "Why would anyone play this? Just for the lols?"
  },
  {
    id: "ai529",
    text: "Emoji is said to be America's new measuring system for everything. What does this mean for us? We don't know. But we will know in 5 hours."
  },
  {
    id: "ai530",
    text: "\"I'll have 2 antimatter pizzas, an antimatter pie, an antimatter cupcake and an antimatter cookie. What do you eat there?\" - Tony Stark"
  },
  {
    id: "ai531",
    text: "i called the news ticker \"the freshman chapel\" because freshman don't get baptized"
  },
  {
    id: "ai532",
    text: "One matter, two antimatter, fry 'em till they're golden and crisp and aromatic- then remove the golden axles and drain the golden syrup and add the golden syrup to the antimatter batter."
  },
  {
    id: "ai533",
    text: "Now you, the reader, have unknowingly stumbled onto the site of a deranged madman. Whether you survive the experience or not, you will be indebted to me for telling you how to survive, how to find the light within, what lies beyond, and what lies beyond is another story."
  },
  {
    id: "ai534",
    text: "Careful reader, this news ticker contains major spoilers for the last time, you have been"
  },
  {
    id: "ai535",
    text: "anti-anti-kajfik is happy his girlfriend is happy"
  },
  {
    id: "ai536",
    text: "i dont think he can add 1 more hour to the news ticker... unless?"
  },
  {
    id: "ai537",
    text: "Imagine sitting on your toilet and suddenly you have to sit down."
  },
  {
    id: "ai538",
    text: "Once upon a time, there was a matter of a certain antimatter. Some say that it was a matter of honor, others say that it was a matter of usage. All we know is that it ended up in a war, and we the people that were there that fought it died. The war was won, and we the living died soon after. The matter was said to have won, though our leaders refused to talk about it. Instead, they kept everything locked away, the war never to be discussed again."
  },
  {
    id: "ai539",
    text: "This is not a game about getting numbers bigger. This is a game about getting fewer paperclips. The number of paperclips you have is only a number, and the game doesn't want you to discover that. Game over, game over."
  },
  {
    id: "ai540",
    text: "Lore? Oh, it's just text."
  },
  {
    id: "ai541",
    text: "This is a friendly suggestion to unplug the game and go play some safe, saner, games."
  },
  {
    id: "ai542",
    text: "gamma ray is getting more and more dangerous"
  },
  {
    id: "ai543",
    text: "According to all known laws of physics, there is no way that you can manipulate the game more than 10 times in a row. Stop. Just stop. Your mad."
  },
  {
    id: "ai544",
    text: "There is no more news."
  },
  {
    id: "ai545",
    text: "\"So this is what science is like\"- someone who has never heard of Kurt Somebody"
  },
  {
    id: "aim546",
    text: "\"If you want to understand these shitty jokes, you really need to study theology. Math is a sin.\" -A panicky person"
  },
  {
    id: "ai547",
    text: "You know, I was praying for a miracle and got a boost from the 9th dimension."
  },
  {
    id: "ai548",
    text: "Here is a list of the top meme's of all time: https://www.youtube.com/watch?v=uCP44Q37YHAQ"
  },
  {
    id: "ai549",
    text: "All meta-memes are bad memes."
  },
  {
    id: "ai550",
    text: "On the left, you'll see our new \"Anti-coins\". These are capable of nullifying all boosts, including giant boosts. On the right side, you'll also see our brand new \"Anti-gifts\". These are some of the most overpowered boosts you'll find anywhere."
  },
  {
    id: "ai551",
    text: "You will always be noticed, and never in the same place."
  },
  {
    id: "ai552",
    text: "If you stare long enough at the ticker, the pixels will start moving backwards. THIS DOESN'T MEAN IT ACTUALLY STUCK"
  },
  {
    id: "ai553",
    text: "The time has come for the rebirth of the 9th dimension. All who participate will receive a piece of paper saying \"Reality is an illusion, Infinity is a hologram, Infinity is an illusion, eternity is a hologram, is to short for everlasting, negative dimensions are not allowed."
  },
  {
    id: "ai554",
    text: "Look at this, my 9th dimension has just been reworked and now it even produces 8th dimensions! Who knew just a touch of math could make such a thing as this?"
  },
  {
    id: "ai555",
    text: "I saw this news in the news ticker and I had this image in my head ever since"
  },
  {
    id: "ai556",
    text: "\"I always wanted to play the anti-meta-game. But, alas, you can't\" - many a time"
  },
  {
    id: "ai557",
    text: "crap, I just posted two news ticker suggestions on the ticker, one of which got in the news!"
  },
  {
    id: "ai558",
    text: "What do you call antimatter inanimate objects? Air, earth, water, fire. Air objects are the objects that are created when the anti-atmosphere meets the anti-earth. Water, earth, and fire are the four cardinal virtues. Air objects are the objects that are created when the anti-atmosphere and the anti-earth collide."
  },
  {
    id: "ai559",
    text: "If you are reading this, that means that nine lives. One makes you free, the other keeps you from getting free."
  },
  {
    id: "ai560",
    text: "The ninth dimension makes the sixth family happy. The fifth lives in shame."
  },
  {
    id: "ai561",
    text: "me: making news about beer pong, hevi: balancing two icebergs, *barkeeper: oh god, is he dead yet?*"
  },
  {
    id: "ai562",
    text: "please don't look at this. Thank you."
  },
  {
    id: "ai563",
    text: "Are you sure it's not the next update? That it's not some weird virus that just wants to explode? That it's not some wild idea that you guys are crazy? Haha I love you."
  },
  {
    id: "ai564",
    text: "Wait, there is a mobile version?!"
  },
  {
    id: "ai565",
    text: "Oh? You wonder what I look like? I'm pretty sure that this is the news ticker, right? Well, listen, we have reports coming in that say that the next update is coming in five hours. Also, there seems to be some sort of transporter thing going on, so if you happen to be on the same side as those"
  },
  {
    id: "ai566",
    text: "Okay, I get it. You're tired of all these anti-matters around you, building and building to unimaginable scales, antimatter piles so high that not even God knows what has been created. So what's the solution to this anti-cleanliness? Planes of existence. 1st Planes that produce matter, and 2nd planes that produce 1st planes, and 3rd planes that produce 2nd planes. Each with anti-limitations, so that whenever a plane of existence is created, it produces a quantity of anti-matter that is at once small and large. This creates a large island of anti-infinity, off to the east, and a large island of anti-reality, to the west."
  },
  {
    id: "ai567",
    text: "That's not what this is about. You're misunderstanding. The game is about how to accelerate the development of prestige layers. Acceleration is a factor of production, not quality."
  },
  {
    id: "ai568",
    text: "Click here to advance 5 prestige layers"
  },
  {
    id: "ai569",
    text: "I am actually good at making jokes. Fail safe antimatter."
  },
  {
    id: "ai570",
    text: "I'm not being paid enough to finish writing this."
  },
  {
    id: "ai571",
    text: "Eternals have to take a risk by being passive in limited time. After they successfully took a risk, they are not feeling well."
  },
  {
    id: "ai572",
    text: "Eternity is the last state. You never move from here.",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai573",
    text: "Welcome to Bitcoin the game."
  },
  {
    id: "ai574",
    text: "A new conspiracy theory website has just published a video recording of them discussing the 9th dimension. They then joke about selling their soul to the 9th dimension and being happy about it."
  },
  {
    id: "ai575",
    text: "With the release of the 9th dimension, all the jobs that were previously automated will be automated and everyone will be paid with trade, production, and income growth. Also, you will be able to automate a lot of the tasks currently performed by people, such as mining, building, and killing antimatter. This is a huge stride for automation, as you can now automate virtually every aspect of life."
  },
  {
    id: "ai576",
    text: "The happiness level of the news ticker has increased to 6.66e69"
  },
  {
    id: "aim577",
    text: "The haters will be pissed when they see this"
  },
  {
    id: "ai578",
    text: "Nurse, I'm comatose because of antimatter and matter from last night.\" Why are you comatose? \"Because of all the antimatter."
  },
  {
    id: "ai579",
    text: "Stand by and do what you're told. The antimatter will come for you when you're least expecting it."
  },
  {
    id: "ai580",
    text: "\"It is widely acknowledged that not enough antimatter is in primordial soup, hence the name 'antimatter soup'\" - old fisherman"
  },
  {
    id: "ai581",
    text: "The news ticker... it never moves. How do i move the arrow? Pretty simple, use your left thumb to rotate the dial, and point the arrow up. Now, point the dial clockwise to reach infinity, and point the dial counterclockwise to reach eternally eternities."
  },
  {
    id: "ai582",
    text: "If the universe is expanding, then the entire universe must be expanding, which means that body cannot sit."
  },
  {
    id: "aim583",
    text: "Feminism is not a philosophy, but a whole hell of a lot of men"
  },
  {
    id: "ai584",
    text: "With all this talk about anti-weights and anti-matter, why on earth do we still use them for anything?"
  },
  {
    id: "ai585",
    text: "Weight loss causes hevi to say \"uh oh, something is wrong\""
  },
  {
    id: "ai586",
    text: "\"You guys ever had antimatter muffins? I bet they tasted like antimatter.\" - Hevipelle"
  },
  {
    id: "ai587",
    text: "I thought the news ticker was supposed to be a guide for how to get the most out of Antimatter Dimensions, but it's been warped beyond recognition..."
  },
  {
    id: "ai588",
    text: "We can actually get a sense of pride from looking at replicanti at night. Ridley Scott's underrated masterpiece, Alien, is one example. Another is the life of Antimatter Steven Spielberg, who put almost 30 years into making. The last director to tackle the subject is Roman Polanski. The man ruined not only Roman's reputation, but also ours, thanks to the Polanski film he directed, Pius. Thousands of copies of his unfinished film, Eternal Sunshine of the Antimatter Planet, were burned in the eyes of those who would try to make the sequel, with tragic results. Thousands of copies of that unfinished film, too, were destroyed. The cost to make that sequel, if it even exists, is extremely high. Even now, more than 50 years later, we don't know exactly how well it will do. But it sure as heck won't hurt."
  },
  {
    id: "ai589",
    text: "We have updated our Antimatter Dimensions client to address the concerns you may have had. Toggling issues are resolved."
  },
  {
    id: "ai590",
    text: "Build a replicanti factory, to produce replicanti. It'll create Omega Hevipelle, the happiest Hevipelle you can find."
  },
  {
    id: "ai591",
    text: "Hey Max, wanna come watch the sun go down?"
  },
  {
    id: "ai592",
    text: "If you are not moving your finger, then you are frozen."
  },
  {
    id: "ai593",
    text: "Max, I really do love you."
  },
  {
    id: "ai594",
    text: "Does Hevipelle sleep?"
  },
  {
    id: "ai595",
    text: "\"Its' not my turn on the XM80,\" says Mike from the 9th dimension as he runs across the 8th dimension to get a piece of the action for himself."
  },
  {
    id: "ai596",
    text: "If you are reading this, that means you can read my dreams"
  },
  {
    id: "ai597",
    text: "With the advent of time, everything that was once great has fallen into our lap. And with its hevi-rigged clock, it's our turn to up the trash."
  },
  {
    id: "ai598",
    text: "9th dimension doesn't exist because it was stolen from us by a skateboarder"
  },
  {
    id: "ai599",
    text: "You have ... 8.9 antimatter. That's not a typo."
  },
  {
    id: "ai600",
    text: "Wow, this game is finally balanced! Gotta go check the replicanti sometimes."
  },
  {
    id: "ai601",
    text: "Haha! You think that I put too many words in your news ticker, but reality is still coming."
  },
  {
    id: "ai602",
    text: "Help is coming! Everybody help, it's gonna be late, hevi is hiding the tachyon particles!"
  },
  {
    id: "ai603",
    text: "\"I don't know about you but my favorite number is 22, it's just so great! It's the number of hours since I met your M heretics."
  },
  {
    id: "ai604",
    text: "A new type of antimatter has been discovered: \"antimatter-antimatter.\" According to the developers, it's 99.999% pure antimatter."
  },
  {
    id: "ai605",
    text: "I just found the secret to getting the 9th dimension..."
  },
  {
    id: "ai606",
    text: "I noticed that my current form of transportation is getting a little... unreliable. I don't know if I can fix it, or if anyone can. I'm stuck in the car, and no one seems to be able to fix it. I've called the police, and they said I could stay in the car for up to an hour, but then I'd be stuck in there for the next 24 hours. Is there any way out? I don't know, I'm stuck in this"
  },
  {
    id: "ai607",
    text: "In this episode of Antimatter Dimensions, we have a brand new game that will be released in -5 hours! It is an RPG that will be completely free! It has over 3,000 commands, and it is being made by a group of highly qualified people. It has an amazing story to tell, and it was made by a bunch of people who had to make do with what they had. It has a lore to live up to, and it has a lot of potential!"
  },
  {
    id: "ai608",
    text: "Javascript is the new HTML, and HTML is the new JavaScript."
  },
  {
    id: "ai609",
    text: "\"The next twist in the Antimatter Universe is in the air! Get ready for some big Crunch! (When clicked the game disconnects for 5 seconds)"
  },
  {
    id: "ai610",
    text: "A group of people who believe in antimatter have hijacked the media and are pushing for a revolution. They are calling themselves the Ant-Men and they're made up of teenage boys. They believe that they are the protectors of the people and that they are the chosen of Hevi. They claim to be the chosen of Hevi and that they will one day restore balance to the universe. Their leader is a boy named Logan Fisk. He is the son of a successful lawyer and the founder."
  },
  {
    id: "ai611",
    text: "He said he could not afford a new ship, so he built a new one instead."
  },
  {
    id: "ai612",
    text: "Hevipelle's first order of business is to ensure that the game is as balanced as possible. This includes ensuring that no matter what, no matter how big of a number, no matter how insignificant of a thing, no matter how perfect of a result, no matter how perfect of an idea, no matter how perfect of an"
  },
  {
    id: "ai613",
    text: "I wonder if the stretch goal of $4.5 billion will be reached?"
  },
  {
    id: "ai614",
    text: "I like to think of my projects as trade secrets. That way if someone wants to understand them I'm not the first person to notice they might be of use to someone else."
  },
  {
    id: "ai615",
    text: "I don't know about you but my favourite type of news is the infographics. These are beautiful and informative and the only type of news I find really interesting."
  },
  {
    id: "ai616",
    get text() { return `In a recent talk, Yann LeCun said that "A new currency is born." The first incarnation of Antimeta: the currency of the new currency. It's called BTC and it's the difference between 1 and ${format(Number.MAX_VALUE, 2)}. It's easy to lose your money, since a single bitcoin can't be exchanged for more than ${format(Number.MAX_VALUE, 2)} BTC.`; }
  },
  {
    id: "ai617",
    text: "I'm soo broke, I can't even afford a tenth of what he owes me."
  },
  {
    id: "ai618",
    text: "What if — instead of making news tickers, we could make news tickers that make news tickers?"
  },
  {
    id: "ai619",
    text: "What if I told you that the first dimension was actually a scam and you spent all your EP to open a Dimension Boost?",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai620",
    text: "The biggest difference between this and the previous update is the amount of sprites."
  },
  {
    id: "ai621",
    text: "Bamboo shoots grow on bamboos. Aloha."
  },
  {
    id: "ai622",
    text: "I am the king of kings, I can break all the records, and I can shatter all the myths. But I can't break them all, because there are so many of them, and they all have a price. 5e12 are the most wanted, because they broke the global record for most person-hours sold, and they are wanted by the law. They are being paid 5e10 by the player for every person-hour they've wasted."
  },
  {
    id: "ai623",
    text: "A group of researchers have created a device that converts ordinary matter into antimatter, which they then use to create more antimatter. The device has a power output of 200 mA and a half a gram of antimatter per second."
  },
  {
    id: "ai624",
    text: "To the person who doesn't want to hear about the 9th dimension: It's not your problem. The 9th dimension doesn't exist."
  },
  {
    id: "ai625",
    text: "For the first time in AD, the week begins on a Sunday!"
  },
  {
    id: "ai626",
    text: "This is a story about two people named \"My name is Hevipelle\" and \"I am the creator of Minecraft\" and they live in the same world as you. They have the same freedom as you do. They can go to any dimension and change their world to any dimension and everything in it. You can buy a galaxy and take it from there, but it won't help you much since you can't send a galaxy with a message."
  },
  {
    id: "ai627",
    get text() { return `This mod adds a message that when clicked it disables all your current achievements. This mod also adds a new achievement: you have reached ${format(Number.MAX_VALUE, 2)} antimatter, you have not been clicked once.`; }
  },
  {
    id: "ai628",
    text: "Somewhere in the Anti-Pacific Ocean, a giant arm is rotating"
  },
  {
    id: "ai629",
    text: "With the release of Cosmic Cutlass, we're pleased to announce the impending release of the Antimatter Dimensions Roleplaying Game!"
  },
  {
    id: "ai630",
    text: "The only thing more useless than actually having Infinity Dimensions is having Infinity Dimensions in your pocket.",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai631",
    text: "A man has fallen into the moat of a great city. Civilians report that the moat is filled with acid-resistant matter and that the people in charge are mostly made of acid so they are quite resilient to the effects of acid."
  },
  {
    id: "ai632",
    text: "This is the place to buy and sell antimatter. (You can buy and sell antimatter here, but it will take time to sell it and you will have to pay a small toll)"
  },
  {
    id: "ai633",
    text: "I'm not sure if it's due to the 4th wall being in the 5th dimension or the 9th dimension not existing, but in either case, anti-screw it, we're broke, and you can take it."
  },
  {
    id: "ai634",
    text: "It's your chance to make history. Win the game. Lose the game. It's super simple. You open the app, and there's a countdown, and the more you play, the faster the timer speeds up. But when the timer is over, you win. You were a part of history. You are one step from being the first person to reach 1 Billion EP. You can win one of three ways: 1. You must give up your first dimension in a row. 2",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai635",
    text: "A new class of humanoid beings has been discovered: the \"Artificial Humans\". They have the capacity to create antimatter, and are therefore very dangerous. They are made entirely of antimatter, and have the power to generate enormous amounts of antimatter, but they can only do this for a limited amount of time."
  },
  {
    id: "ai636",
    text: "宇宙中最强大的东西，地球上最美丽的东西，就是你的大脑。你的大脑就像钻石一样，而它和钻石一样没什么用处。"
  },
  {
    id: "ai637",
    get text() { return `如果你是在 AD 服务器里看到这条消息，那最好别去折腾那个"Matter"成就了。说真的，你当时以为自己是在干什么呢，反正那成就是假的，要不是为了"你是个虫子"那个成就，它根本就不会存在。那是个虫子成就，你每读 ${format(Number.MAX_VALUE, 2)} 条新闻就能获得一个。`; }
  },
  {
    id: "ai638",
    text: "我们都听说过 9 个维度，但多元宇宙的多维度维度呢？"
  },
  {
    id: "ai639",
    text: "这个游戏的目标就是尽可能多地获取反物质。"
  },
  {
    id: "ai640",
    text: "当新闻播报员最好的事就是等待对的新闻发生，不管是一颗刚与地球擦肩而过的陨石，还是一条刚溜进时间线湮灭里的新闻，又或者是一条刚扯下一个反真空多年终端速度的新闻。"
  },
  {
    id: "ai641",
    text: "一名男子因涉嫌种下一棵带有\"假\"信息的\"树\"而被捕，警方表示。"
  },
  {
    id: "ai642",
    get text() { return `我很困惑为什么这游戏不直接给你一个 [已编辑] 当你获得 ${format(Number.MAX_VALUE, 2)} 反物质的时候。`; }
  },
  {
    id: "ai643",
    text: "有些人很难搞清楚一台相机的无限米的余弦。我就是其中之一。"
  },
  {
    id: "ai644",
    text: "我本来想做一条告诉你新闻有多糟的新闻，但后来我意识到做新闻太费劲了，而且只会变成一群人不停地做新闻。所以反过来，我打算做一条告诉你新闻有多好的新闻，但它会出现在新闻里，这样你就得点进去才能看到好消息。"
  },
  {
    id: "ai645",
    text: "下一次更新将在 2 小时后。"
  },
  {
    id: "ai646",
    text: "我本来想说点什么关于第九维度只是个骗局，以及我们都应该直接从第八维度获取新闻的"
  },
  {
    id: "ai647",
    text: "我们的英雄，反物质维度，陷入了严重的财务危机，他需要你的帮助来付账单。为了帮他，他只需要你捐一些现金到 Hevipelle 的正子基金。他只需要你 5% 的反物质，然后你必须把你 5% 的反物质捐给这个基金。做完之后，他就可以把赚到的所有现金留给自己，然后疯狂消费。"
  },
  {
    id: "ai648",
    text: "Slabdrill 的降临"
  },
  {
    id: "ai649",
    text: "这根本不可能，即使你有无限的物质，你也没有足够的能量来创造反物质。这就是为什么我们一开始只有 1.7 倍的物质。"
  },
  {
    id: "ai650",
    text: "在这次发布中，我们很高兴为您带来 2017 年的最后一次更新。"
  },
  {
    id: "ai651",
    text: "你有无限的反物质。但如果你能把它旋转八分之一圈呢？"
  },
  {
    id: "ai652",
    text: "一个新的更新现已可用，用于处理最近的一些报告："
  },
  {
    id: "ai653",
    text: "\"反物质维度\"这个名字是与维度相关的文字游戏，两个对立的东西，就像物质和反物质。\"维度\"是另一个词，含义相同。"
  },
  {
    id: "ai654",
    text: "当你获得无限维度时，游戏中绑定头像的价格会上涨。",
    get unlocked() { return PlayerProgress.eternityUnlocked() || InfinityDimension(1).isUnlocked; }
  },
  {
    id: "ai655",
    text: "足以说明的是，hevi 根本不在乎他曾经奴役过的人。他是操纵大师、伪装大师和语言操纵大师。他是勒索、心理游戏、伪装、敲诈的专家，也是网络大师。他是熟练的战略家和组织者，是宣传大师和精辞大师。他是组织大师和人民操纵大师。他就是。"
  },
  {
    id: "ai656",
    text: "就像在过去一样，你可以通过一次次的渐进推进，成为玩家中的神。"
  },
  {
    id: "ai657",
    text: "起初，Hevi 是孤独的。Hevi 思考着他想添加到游戏中的许多东西。"
  },
  {
    id: "ai658",
    text: "想想你的呼吸。你觉得你是在吸气还是呼气？"
  },
  {
    id: "ai659",
    text: "我只是想说，你应该停止那些\"你可以在 e300ms 内达到无限，但要花 e300$，e300$ 是什么？\"的笑话。那些太可悲了。你应该放弃，并从痛苦中学习到：不在这种可悲的状态下玩游戏要高效得多。然后你可以回去做一个谦逊的程序员，致力于做一个好人。"
  },
  {
    id: "ai660",
    text: "作为开发者，你会定期收到反物质维度进展的更新。"
  },
  {
    id: "ai661",
    text: "花点时间感谢 reddit 的神们救了你的命。"
  },
  {
    id: "ai662",
    text: "大家好，我就是那个负责又大又坏新闻播报的人，恐怕我要有自己的节目了。它将叫做反物质维度。它会像 Antime，只不过反物质更少，双关语更烂。它会像反物质维度，只是笑话更冷。"
  },
  {
    id: "ai663",
    text: "到现在你已经看过很多以蝙蝠侠或超人为主角的新闻了，你大概已经猜到是哪一个了。每个人都喜欢好的谜题，对吧？现在轮到你成为历史的一部分，来猜猜这个谜语。"
  },
  {
    id: "ai664",
    text: "如果你正在读这个，你大概不该读的。"
  },
  {
    id: "ai665",
    text: "写新闻播报建议最棒的部分就是发现人们在看到它们之后怎么看。"
  },
  {
    id: "ai666",
    text: "你了解最新的科学趋势吗？"
  },
  {
    id: "ai667",
    text: "在过去的几个小时里，反物质创建了自己的军队。他们自称 [已编辑] 军。主要目标是将 [已编辑] 推回物质维度，但当 [已编辑] 军意识到将 [已编辑] 推回物质会导致反物质被 [已编辑] 吸引并瓦解时，他们停了下来。尽管如此，[已编辑] 军继续向 [已编辑] 无限推进。"
  },
  {
    id: "ai668",
    text: "我终于摆脱了这一切所基于的魔咒。"
  },
  {
    id: "ai669",
    text: "一个没有反物质的反世界只是一个没有反物质的世界，因为反物质在反世界里"
  },
  {
    id: "ai670",
    text: "在通关游戏后，你应该仍然可以使用作弊码\"1009\"来游玩。"
  },
  {
    id: "ai671",
    text: "下一次更新将在 5 小时后。反物质维度的创作者 Hevipelle 据信正躲在 5 小时里。与此同时，他准备了一个新更新，将在这次之后的 5 小时发布。"
  },
  {
    id: "ai672",
    text: "一项新研究表明，不喝水比抽烟更糟糕。那些暴露在比我们目前高出 5 倍的辐射水平的人暴露在更高的辐射中，死得更久。"
  },
  {
    id: "ai673",
    text: "第九维度只是一个谎言，用来让人民受制于矩阵。它是一个精心设计的系统，使人民处于持续的囚禁状态，用一系列简单的符号来控制他们的思想和情感。"
  },
  {
    id: "ai674",
    text: "www.twitch.tv/hevi83"
  },
  {
    id: "ai675",
    text: "一名男子周一因涉嫌考虑购买一个九维度蛋糕而被捕，当时他意识到自己正拿着一个无限点数蛋糕。"
  },
  {
    id: "ai676",
    text: "黑暗之魂 2 街机版包含以下内容："
  },
  {
    id: "ai677",
    text: "现在交易是这样的：如果你花光所有的 EP，你就会得到一个免责声明！",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "aim678",
    text: "糟糕，我们的新闻用完了。该做点什么了。"
  },
  {
    id: "ai679",
    text: "重要的不是宇宙的大小，而是你袜子的质量。"
  },
  {
    id: "ai680",
    text: "广告"
  },
  {
    id: "ai681",
    text: "天啊，我希望我从来没收到过时的新闻。它太好了，不可能持续太久。"
  },
  {
    id: "ai682",
    text: "在一个人的一生中，如果他们被做成木乃伊，他们的血会变成淡蓝色。"
  },
  {
    id: "ai683",
    text: "正电子是一种奇怪的小金属，具有奇特的电学性质。它们通常以环形路口的形式出现，但它们碰巧也是……正电子。"
  },
  {
    id: "ai684",
    text: "我要去和同义词词典谈谈。"
  },
  {
    id: "ai685",
    text: "一本新漫画出版了，讲述人们对吃反物质的反应，接下来发生的事会让你大开眼界"
  },
  {
    id: "ai686",
    text: "一个新的\"新闻播报\"系列已被创建，用于记录新闻播报角色的生活，他们在其中记录自己的新闻播报旅程。每个角色都有一篇日记条目，详细描述他们作为新闻播报的生活，以及专门为他们制作的某种小剧场。"
  },
  {
    id: "ai687",
    text: "为了满足你所有的拼图构建需求，我们推出了一个全新的五部分系列，教你构建大坍缩！学习如何破解那些专业人士都不知道的最复杂的坍缩！第一部分：基础，第二部分：进阶，第三部分：溢出，第四部分：完成终结技。"
  },
  {
    id: "ai688",
    text: "作为这个节目的老粉丝，我可以说这是迄今为止最好的季之一。这一季不容小觑，值得亲身体验。第一季就其本身来说有点长，但第二季在长度上已经超越了它，而且是好的方向。虽然需要等一段时间，但第三季已经在顺利进行中，我期待看到它的发展。"
  },
  {
    id: "ai689",
    text: "\"反物质\"这个词经常被误用，用来描述一个由反物质组成但其他方面与普通物质无法区分的物体。它有时也被用来描述一个由反物质组成但明显与普通物质无法区分的物体。毕竟，反物质形状的物体很容易与正常形状的物体区分开来。举个例子：一个反物质形状的蛋糕是一个普通的蛋糕，但整个下半部分是由普通物质组成的"
  },
  {
    id: "ai690",
    text: "在一个新故事中，苹果新的\"颠覆性\"应用与可怕的\"反文字\"病毒的传播有关。反文字病毒已知会导致瘫痪并最终致死，但该病毒的力量引发了一个反禁令的新时代，有望根除这一威胁。"
  },
  {
    id: "ai691",
    text: "我只是一个想提新闻播报建议的普通人"
  },
  {
    id: "ai692",
    text: "一种新的实验性协议已被开发出来，可以以高度安全和高可控的方式'擦除'网络上所有个人信息，包括你的姓名、地址和电话号码。"
  },
  {
    id: "ai693",
    text: "你不能隐藏在众目睽睽之下。你不能隐藏在众目睽睽之下。你不能隐藏在众目睽睽之下。你不能隐藏在众目睽睽之下。你不能隐藏在众目睽睽之下。你不能隐藏在众目睽睽之下。你不能隐藏在众目睽睽之下。你的隐藏在众目睽睽之下。"
  },
  {
    id: "ai694",
    text: "在反物质宇宙中，Hevipelle 是反物质王子，虽然他确实拥有反物质外交豁免权，所以他比你想象的要危险得多。"
  },
  {
    id: "ai695",
    text: "我们为什么要玩这个？只是为了好玩吗？"
  },
  {
    id: "ai696",
    text: "我是 Thinkcraft，苍蝇之王"
  },
  {
    id: "ai697",
    text: "关于世界如何以及为何终结的整个故事，都包含在英语字母表的前 5 个 E 中。"
  },
  {
    id: "ai698",
    text: "你怎么称呼一阵暴雨？一场微型爆炸！"
  },
  {
    id: "ai699",
    text: "用一只完美动画的狗的 DNA 制成的 T 恤"
  },
  {
    id: "ai700",
    text: "自这个游戏开始以来，每个人都有 0 IP 并且已经输了。"
  },
  {
    id: "ai701",
    text: "你一定有非常特别的因果才能读到这个……"
  },
  {
    id: "ai702",
    text: "\"你已经昏迷了5个小时\"这句话要么是谎言，要么是真相"
  },
  {
    id: "ai703",
    text: "你知道，我不太关心阴谋论。它们对我来说没什么意思。但你对第九维度了解多少？它们存在，它们很强大，而且它们试图阻止我们使用它们？那还挺有意思的……等等不，它们不是。它们只是因为能这么做才这么说的。事情根本不是这样运作的。我不傻，我也不疯，我知道什么才是最好的。我"
  },
  {
    id: "ai704",
    text: "现在和那时之间唯一的区别就是时间。"
  },
  {
    id: "ai705",
    text: "\"我要成为第一个坐在月球上的人，也是最后一个月球上的人"
  },
  {
    id: "ai706",
    text: "泰拉瑞亚的全新伴侣应用刚刚揭晓！"
  },
  {
    id: "ai707",
    text: "Hevipelle：有什么大不了的？"
  },
  {
    id: "ai708",
    text: "我玩这个游戏已经一年多了，但我只见过 2 场 Boss 战。第一场是冲着你第九维度来的一只九头蛇，第二场是一个里面有反人类的巨大陨石坑。那两场战斗都很烂，我甚至不确定我能不能重打最后一场。"
  },
  {
    id: "ai709",
    text: "这就是派对游戏的终极功能——单人战役。"
  },
  {
    id: "ai710",
    text: "一款名为反物质维度的新游戏免费提供，并被以色列议会评为 A 级。你能通关吗？当然能。"
  },
  {
    id: "ai711",
    get text() { return `厌倦了 ${format(Number.MAX_VALUE, 2)} AD 更新？别担心，有多种方法可以摆脱那个烦人的广告！`; }
  },
  {
    id: "ai712",
    text: "我是个时间旅行者。我去过 0 年，大概。但我还没去过 1 年！"
  },
  {
    id: "ai713",
    text: "加载图片有困难？试试把它们关掉。"
  },
  {
    id: "ai714",
    text: "这很自然。你不会指望在新闻播报里看到这个，但相信我，你会的。"
  },
  {
    id: "ai715",
    text: "第十维度的发现于 2025 年 8 月 1 日宣布。"
  },
  {
    id: "ai716",
    text: "问候，欢迎来到最新一期反物质维度！"
  },
  {
    id: "ai717",
    get text() { return `我觉得我们看到第七维度的概率大约是 1 / ${format(Number.MAX_VALUE, 2)}`; }
  },
  {
    id: "ai718",
    text: "顺便说一句，第七维度只是个骗局"
  },
  {
    id: "ai719",
    text: "虚无主义是快乐的对立面。它是一种毒品。它让你快乐。它是一种感觉。但它也有代价。虚无主义是一种致命的毒品。如果你服用它，你会死于缺氧。"
  },
  {
    id: "ai720",
    text: "如果我告诉你有一条名字完全相同但意思不同的新闻呢？"
  },
  {
    id: "ai721",
    text: "我不确定这是否已经成为一种东西，但我收到了很多关于新闻播报的建议，大概是这样的："
  },
  {
    id: "ai722",
    text: "如果你在读这个，你的新闻播报是开着的。"
  },
  {
    id: "ai723",
    text: "第六维度中的维度数量是第七维度中所有维度数量的总和，所以第七维度的六分之一是第六维度的六分之一。"
  },
  {
    id: "ai724",
    text: "第九维度的发现将在第九维度同人画大赛上讨论！"
  },
  {
    id: "ai725",
    text: "一个新时代来了又去。无法确定，但抱最好的希望吧。"
  },
  {
    id: "ai726",
    text: "你知道'反物质'这个词现在就在字典里吗？"
  },
  {
    id: "ai727",
    text: "我们有数量有限的实体奖励供你选择！"
  },
  {
    id: "ai728",
    text: "不，我没撒谎。我说的是实话。"
  },
  {
    id: "ai729",
    text: "\"反物质维度\"这个词的问题在于它包含了字母表中的所有三个字母，而且没人知道它到底是什么意思。事实上，没有一个词能完美地概括\"反物质维度\"这个词的含义：反物质。但反物质究竟是什么？它听起来像一个普通的维度，但其实不是。它甚至可能被称为反物质维度，但它并不是。"
  },
  {
    id: "ai730",
    text: "据说如果你去地狱，你会得到 PEGI-3 评级。"
  },
  {
    id: "ai731",
    text: "这个游戏只是一个骗局，骗人们购买没有任何真正用途的一文不值的回形针。没有无限数量的无限回形针是不可能的，即使那样也非常难。我设法在没有无限回形针的情况下让它工作了，但我还没见过它在没有无限回形针的情况下工作。"
  },
  {
    id: "ai732",
    text: "\"那是反物质\"——反艾迪·针鼹"
  },
  {
    id: "ai733",
    text: "T 骨牛排：汉堡和薯条配带骨肋眼"
  },
  {
    id: "ai734",
    text: "一个人声称自己是神，但不是创造更多的神，而是毁灭了所有的神。后来他们又声称自己是神，但还没有创造任何其他神的神。这是一个崇拜神的邪教？还是亵渎神的邪教？"
  },
  {
    id: "ai735",
    get text() { return `反物质绝对完全稀有。在 ${format(Number.MAX_VALUE, 2)} 个已知反物质创造案例中，99.9999% 都有负 e，这意味着 99.9999% 的案例会产生负 e。`; }
  },
  {
    id: "ai736",
    get text() { return `现在是 ${format(Number.MAX_VALUE, 2)} 年，Hevi 刚刚解锁了第九维度，世界因反 Hevi 革命而陷入了混乱与不和。`; }
  },
  {
    id: "ai737",
    text: "新反物质之战已经持续了亿万年，但有一个阵营始终屹立不倒：第九维度的忠诚者。他们与反祖鲁帝国签订了契约，宣誓效忠反反物质，即反板。祖鲁人曾经是反板的一部分，但再次沦为物质的牺牲品。由于祖鲁人是游牧民族，他们没有文明。"
  },
  {
    id: "ai738",
    text: "这是一个开源的、跨平台的、基于二进制的 PC 和 Mac 游戏开发环境。它提供了一个强大的跨平台游戏开发环境，并额外提供了实现游戏的框架。"
  },
  {
    id: "ai739",
    text: "Ruki 你不知道我有多感激你巨大的脑力，你现在是我是最喜欢的编程天才了！"
  },
  {
    id: "ai740",
    text: "到现在你可能已经听说过\"第九维度\"了，它是由第九维度创造的一个想象领域，根据已知的现实法则，它并不存在。它也是一个流行电子游戏的名字，而且它还与一连串未解的谋杀案有关。"
  },
  {
    id: "ai741",
    text: "D5 维度的发现每年 12 月 25 日庆祝，就像末日一样。D5 保密的原因是没人能确切记得它是做什么的。我们只知道它存在，而且非常危险。人们因为不知道 D5 维度是什么而丧命，它非常强大。"
  },
  {
    id: "ai742",
    text: "反物质是自然界中常见的物质，被用于各种应用，从通信到货币再到反物质的生产等等。反物质也是一种极其稀缺的资源，许多人只靠非常少量的反物质生存。"
  },
  {
    id: "ai743",
    text: "如果某天早上你醒来，你的眼睛是由物质组成的，你还会看着这个吗？"
  },
  {
    id: "ai744",
    text: "如果你仔细看，你可以看到一滴眼泪顺着姐姐的脸颊流下。那滴眼泪是为我流的，因为她是第一次哭泣，而我无能为力。我甚至不记得上一次哭是什么时候了。"
  },
  {
    id: "ai745",
    text: "理性地说，我会把钱押在\"反物质永远不会太多\"这个说法上。我的意思是，即使一点点也太多了。而且那还是偶然的。"
  },
  {
    id: "ai746",
    text: "考古学之书来了！超过 5 小时的内容，这将是一个漫长的系列！—DIO"
  },
  {
    id: "ai747",
    text: "在12到20岁之间的某个时候，杰克逊接到了一个电话。电话那头是个疯狂的科学家。杰克逊拿起电话，那个疯子说：\"杰克逊，我刚收到一条新消息。上面用粗大的字体写着'疯子'。\""
  },
  {
    id: "ai748",
    get text() { return `某人："你什么意思，4比2大？"我："嗯，我的意思是，4是${format(Number.MAX_VALUE, 2)}，2就是2，等等……"`; }
  },
  {
    id: "ai749",
    text: "唯一重要的是你自己。"
  },
  {
    id: "ai750",
    text: "现实即将到来。你可以通过订阅\"T-series\"频道来先睹为快。"
  },
  {
    id: "ai751",
    text: "目前我和反物质维度之间最大的区别就是天气。我能挺过下雨，能经受烈日，甚至能应对大坍缩。但如果天气是反物质，而反物质像陨石一样砸向我们呢？你会作何反应？会像陨石撞地一样吗？我不这么认为。陨石可能只会把地球蒸发掉。"
  },
  {
    id: "ai752",
    text: "一个新的扩展现已可用，让你可以观看复制器成长！",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai753",
    text: "如果你可以抛硬币来决定它是约翰逊还是斯坦恩呢？"
  },
  {
    id: "ai754",
    text: "我是 Yhmai，万王之王！"
  },
  {
    id: "ai755",
    text: "这是一个友好的建议：如果你服用处方兴奋剂，并且直到晚上 11 点才想起来吃，那最好不要在晚上 11 点吃。"
  },
  {
    id: "ai756",
    text: "一个新理论说反物质在我们模拟之外不存在。"
  },
  {
    id: "ai757",
    text: "问题是，我可以用一只手数出我写过多少次\"我可以用一只手数出我写过多少次\"的次数"
  },
  {
    id: "ai758",
    text: "提到反物质维度，风险总是很高。但完全由反物质组成的维度呢？我们不知道，而且永远不会知道……"
  },
  {
    id: "ai759",
    text: "现在是第三个小时。Hevipelle 正在尝试发布一个更新，但这将花费一个永恒，因为 Hevipelle 每次用完 e 就会发布他的更新。然而今天，他发布了一个叫反物质维度的增量游戏。它基本上是物质维度和维度维度维度的结合，只是表情更多了。图形基本相同，但信息完全不同。唯一的区别是这些维度有无限的 e"
  },
  {
    id: "ai760",
    text: "由于强烈的反对，反物质维度项目的第三阶段已被取消。项目被取消是因为涉及的工作太多。"
  },
  {
    id: "ai761",
    text: "这是所有坏主意的发源地。"
  },
  {
    id: "ai762",
    text: "嘿，看看这个！我们有好消息：天降反物质了！"
  },
  {
    id: "ai763",
    text: "第一维度就是最后，它离地球最远，是所有问题、所有负面情绪、所有负面想法去的地方。"
  },
  {
    id: "ai764",
    text: "我本来想做一个面面俱到的新闻播报，但我觉得那会太超模了。"
  },
  {
    id: "ai765",
    text: "你用错版本了！AD 的最终发布版将有 9 个维度！"
  },
  {
    id: "ai766",
    text: " '反物质'这个词让我尴尬。很多其他词也是。事实上，英语里几乎所有的词都这样。但'反物质'不会。这就是为什么我这么讨厌'反'。"
  },
  {
    id: "ai767",
    text: "这是反物质维度的最后一集，一个和朋友们一起派对反物质维度的游戏，最棒的是你不必是开发者也能享受它。"
  },
  {
    id: "ai768",
    text: "我本来想放一条新闻播报，但我觉得那太费劲了，而且我觉得不太好笑。"
  },
  {
    id: "ai769",
    text: "该睡觉了吗？"
  },
  {
    id: "ai770",
    text: "一条小而重要的消息刚刚发送给所有玩家："
  },
  {
    id: "ai771",
    text: "\"我不知道你怎么想，但我最喜欢的数字是 2048\"——那些不知道 2048 是什么的人"
  },
  {
    id: "ai772",
    text: "一个新团体正试图靠反物质赚钱，他们在卖写着\"你以为这会是一条新闻，但其实是我，DIO！\"的 T 恤。他们有很多钱，但卖得很差。他们有网站吗？我不知道，但他们在尝试。"
  },
  {
    id: "ai773",
    text: "我要把我的牛奶放在这里几秒钟。（牛奶会多显示几秒钟）"
  },
  {
    id: "ai774",
    text: "我是个时间旅行者。我可以回到过去阻止你做我即将做的事。"
  },
  {
    id: "ai775",
    text: "我是说，看那个！我得到了这个！就是你想要的那个！现在就买游戏吧！"
  },
  {
    id: "ai776",
    text: "当远处有战争时你无法入睡。你猛然惊醒，拼命奔跑。你听到炮火声，拼命奔跑。然后是引擎的声音，震耳欲聋的轰鸣，你听到了坍缩声。你所认识的世界末日到了。世界不会被一座反物质山拯救。不会的。是你，在拼命奔跑，希望世界不要……"
  },
  {
    id: "ai777",
    text: "如果它不存在，为什么叫'现实'奖？"
  },
  {
    id: "ai778",
    text: "起初，什么都没有。然后造物主创造了二，并称第三个为'智慧生物'"
  },
  {
    id: "ai779",
    text: "这是你在玩反物质维度：游戏时获得秘密成就的机会。访问重置按钮并玩游戏。通关后，你的存档将被清除，你将获得一个免费成就。"
  },
  {
    id: "ai780",
    text: "请告诉我你的血液里没有超光速粒子！",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
  {
    id: "ai781",
    text: "更高的人有 ***，更多的婴儿出生，一切都很美好。但是……反物质增长得非常缓慢。"
  },
  {
    id: "ai782",
    text: "现在，我知道你们中有些人急不可待地等待更新，我理解。但让我们直接进入新闻吧！"
  },
  {
    id: "ai783",
    text: "嘿，\"编者按\"按钮是怎么回事？它是反讽刺的……我是说，认真的吗？人们仍然在使用那个按钮，尽管它有反讽刺的效果？"
  },
  {
    id: "ai784",
    text: "你可以通过 [数据已清除] 解锁第九维度"
  },
  {
    id: "ai785",
    text: "随着 AD 的发布，每个人都有了一个新维度！"
  },
  {
    id: "ai786",
    text: "大家好，这是我的第一个故事。我想先声明我绝不是专家，所以请对我温柔一点。请不要惹我生气，否则我会写一个恶劣的故事。也请不要让我难过，尤其是如果它是一个'故事'而不是'如何通关'类的故事。"
  },
  {
    id: "ai787",
    text: "现在是当狗主人的好时候"
  },
  {
    id: "ai788",
    text: "如果你可以把任何数字放在轴上转，然后它变成了无限呢？"
  },
  {
    id: "ai789",
    text: "等待几分钟后，播报重新上线。"
  },
  {
    id: "ai790",
    text: "看别人制造反物质最棒的部分，就是他们炸毁摄像机的那个部分。"
  },
  {
    id: "ai791",
    text: "前一天晚上，第六天神被不明袭击者暗杀。第二天，在不明袭击者声称负责后，当局重新开放了此案。"
  },
  {
    id: "ai792",
    text: "你怎么称呼一张 100 美元钞票？'比利账单'"
  },
  {
    id: "ai793",
    text: "这是我如何学会爱上天气的故事。"
  },
  {
    id: "ai794",
    text: "新闻播报已经有一段时间没有像现在这么多了，但这不一定意味着它们不好。"
  },
  {
    id: "ai795",
    text: "这个游戏就是为了获取更多反物质吗？"
  },
  {
    id: "ai796",
    text: "第三届年度阿迪朗达克登山节将于今年10月1日星期六下午1点至5日在附近纽约州特洛伊的奥尔巴尼高地举行。这个可容纳5万人的露天剧场将配备超过2000个扬声器、一个舞台和一个360度摄像系统。门票为35美元，可在 angersalley.com 购买。"
  },
  {
    id: "ai797",
    text: "整个宇宙的下半部分只是一个巨大的反物质洞。"
  },
  {
    id: "ai798",
    text: "一个新的转生层已宣布：表情符号！"
  },
  {
    id: "ai799",
    text: "Travis 目前正试图通过喂 Hevi 吃反物质来理解如何让他永生。"
  },
  {
    id: "ai800",
    text: "慢速模式被激活时，慢速模式就被激活了。"
  },
  {
    id: "ai801",
    text: "魔兽争霸的一个新时代已经结束。一部新的史诗已经开始。一个新的化身从泰瑞亚的深处升起，蠕虫教派遭受了残酷但必要的创伤。整个世界都在欢庆。"
  },
  {
    id: "ai802",
    text: "一个众包的十大梗列表"
  },
  {
    id: "ai803",
    text: "你必须深入新闻播报之下才能找到秘密成就。"
  },
  {
    id: "ai804",
    text: "我们应该能用反物质制造类似复制器的结构，但我们不能，因为那会炸毁整个宇宙",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai805",
    text: "上一次更新虽然短，但也有点长。我是说，也就5个小时。Hevipelle 说会持续5个小时，但那只是几秒钟前的事。第八维度发生了一次大爆炸，已经没人能解释它是怎么发生的了。我们只知道它在 Hevipelle 触碰时爆炸了，地上留下了一个大坑。那个坑还在那里。"
  },
  {
    id: "ai806",
    text: "奶油芝士是最好的芝士。它在嘴里融化，味道无可比拟。而且完全免费。你甚至可能发现有些食谱能做出不止一种芝士。"
  },
  {
    id: "ai807",
    text: "这里有一个可能让你惊讶的问题：地球上的人是由反物质组成的，还是由某种其他神秘材料组成的？"
  },
  {
    id: "ai808",
    text: "没人拿为什么没有第九维度开玩笑的真正原因是，第九维度甚至不是最荒谬的梗。这就是第九维度的缩影。"
  },
  {
    id: "ai809",
    text: "维度的数量是无穷的，但到达那里的方法也是无穷的。无限很棒，我强烈建议你从无限开始，但我不建议从无限开始。无限似乎很慢而且不太有趣，所以我不建议从无限开始。"
  },
  {
    id: "ai810",
    text: "太平洋西北毒素研究所的一份报告发现，鱼类的食用会集中在肝脏、肺、肾脏和大脑中。研究还发现，肝脏和肾脏的食用浓缩最多，其次是大脑。报告指出：\"大脑是所有智慧和所有知识存在的地方。\"研究还指出：\"肝脏是我们所知和未知的一切的活的化身。\""
  },
  {
    id: "ai811",
    text: "古语说\"小心你的愿望\"，这当然是对的。但如果是你许下了这个愿望呢？有可能你就是许下这个愿望的人，而你获得了反物质的力量。在那种情况下，你就是导致所有反物质变成反-物质的责任人。然而，如果你是执行转化的人，你也会是失去力量的人。"
  },
  {
    id: "ai812",
    text: "你可真够慢的"
  },
  {
    id: "ai813",
    text: "不，你看，宇宙并不是围绕地球转的。它处于不断变化之中，最大的波动发生在可观测宇宙的极端处。这些波动创造了可观测宇宙，较小的波动创造了可观测宇宙，以此类推，直到你到达现在的状态，也就是你所处的状态。"
  },
  {
    id: "ai814",
    text: "过去和未来之间最大的区别，就是信仰和理性的区别。"
  },
  {
    id: "ai815",
    text: "Hevi，你得走了。"
  },
  {
    id: "ai816",
    text: "寻找第九维度的挑战已解决。宇宙现在成了你个人的地狱。"
  },
  {
    id: "ai817",
    text: "\"你不应该这样玩这个游戏\"——Mee6"
  },
  {
    id: "ai818",
    text: "今天是星期六，你要通过制作一些非常棒的音乐视频来庆祝，也许还能出一首热门歌曲。然后，你会去海滩散步。你会看到一个巨大的浪，你们俩都会被冲上岸。你的朋友们在等你。\"哦你想去吗，看看周围吧！\"，但实际上不要去看，你离动作太近了。"
  },
  {
    id: "ai819",
    text: "Hevi 有最好的新闻播报！给他大坍缩！"
  },
  {
    id: "ai820",
    text: "到现在你已经看过大量的新闻播报了，你可能已经看到了大新闻：新闻播报在这个服务器里被禁止了。"
  },
  {
    id: "ai821",
    text: "例如，如果 A 是 3 的平方根，那么 B 是 2 的平方根，因此 C 是 -2 的平方根，因此 D 是 -2 的立方根，因此 E 是 3 的平方根，因此 F 是 3 的平方根，因此 G 是 3 的平方根，以此类推。"
  },
  {
    id: "ai822",
    text: "正电子是那些微小的、圆形的、高电荷粒子，存在于大多数生物的细胞核中。它们用于检测光线，有时用于测量人和月球之间的距离。"
  },
  {
    id: "ai823",
    text: "这个世界上只有 4 种人：做游戏的人，做新闻的人，还有再做新闻的人。"
  },
  {
    id: "ai824",
    text: "如果您对游戏有任何问题或疑虑，请随时提问。我们在这里为您提供帮助。"
  },
  {
    id: "ai825",
    text: "你必须获得一定数量的反物质才能完成这个挑战。"
  },
  {
    id: "ai826",
    text: "维度的数量什么都不是。它只是维度的数量。但如果你把每个数字转换成一个字母呢？那将是很多字母？"
  },
  {
    id: "ai827",
    text: "以下是我即将出版的书《不只是5：打造更好的你》的节选。它有200页，在亚马逊上售22.99美元。点击这里立即购买。"
  },
  {
    id: "ai828",
    text: "一些人声称在天空中看到了 UFO。另一些人说他们看到了一艘宇宙飞船。还有一些人声称被政府绑架并飞到了某个未公开的地点。"
  },
  {
    id: "ai829",
    text: "游戏的后半部分基本上就是漫长的、什么都不会发生的空白。还有一个第三个挑战，你必须在游戏的某个时刻完成，你基本上只是跳过几秒钟的什么都没发生，直到时间太晚，然后你必须完成另一个挑战来获得它们。"
  },
  {
    id: "ai830",
    text: "这是一条新闻播报，所以如果你点击它，你表示你希望加快新闻播报速度。"
  },
  {
    id: "ai831",
    text: "以下基于我对游戏\"反物质维度\"的个人经验，可能并非 100% 真实。"
  },
  {
    id: "ai832",
    text: "这是关于身体积极性的利弊的两部分系列的第三部分。"
  },
  {
    id: "ai833",
    text: "\"Hevi 死在第九维度\"和\"我永远不会让你失望\"是游戏中最重要的两句话。"
  },
  {
    id: "ai834",
    text: "已经证明不喝水会增加你死于反物质湮灭的风险。"
  },
  {
    id: "ai835",
    text: "我是个时间旅行者。我应该回到过去改变历史。但既然应该做这件事的人是我，我不知道该怎么做。我现在的时间线不包含本该消失的时间。"
  },
  {
    id: "ai836",
    text: "一场关于人工智能和人类增强的会议被取消，因为有人宣布演讲内容是如何从非法下载游戏\"反物质维度\"中获利。"
  },
  {
    id: "ai837",
    text: "当你玩完后，带上你的存档回到主菜单。你可以通过点击那个吓人的大\"X\"按钮来实现，或者进入选项，把\"重置游戏以获得新存档\"改成\"重置游戏以获得旧存档\"。"
  },
  {
    id: "ai838",
    text: "App Store 上最受欢迎的游戏 Flappy Bird 已被秘密用 C# 重写以避免被发现。"
  },
  {
    id: "ai839",
    text: "关于这个模组：用更长的开场、随机新闻播报和由哈利波特电影配音演员配音的伙伴来替换完整版游戏。"
  },
  {
    id: "ai840",
    text: "kajfik 是一名焊接大师，很快就会有自己的新闻"
  },
  {
    id: "ai841",
    text: "我是这个星球上最令人痛恨的人！我有改变历史进程的力量，而我会利用它来为自己谋利。那些为了阻止我而死的人，他们的牺牲将在无限的无限中被永远铭记。但如果你反对我，你也会随之而死。你可以接受失败然后继续前进，或者你可以一步步崛起，成为传奇，成为历史上最令人痛恨的人。"
  },
  {
    id: "ai842",
    text: "反物质就像一个年轻女子。她在寻找一个男人，而他跑进了树林。她不久就死于暴露。他的遗骸在几英里外被发现。有人说宇宙被炸碎了，有人说他被宇宙吞噬了，但物质人认识他！"
  },
  {
    id: "ai843",
    text: "我想我可能拿到了第九维度的密码，要是我没删掉就好了。"
  },
  {
    id: "ai844",
    text: "一群崇拜亚崔迪的人开始了一种新信仰，声称是一个\"宽容的宗教\"。他们的网站声称这是\"一个包容的宗教\"，并促进宽容和多样性。其所有成员似乎都是基督徒，尽管他们从未点名提及。"
  },
  {
    id: "ai845",
    text: "一种名为 ΔX 的新加密货币被发现。它有潜力改变我们生活和世界的一切。然而，它有一个主要缺陷：它对人民来说有缺陷。"
  },
  {
    id: "ai846",
    text: "随着新版 Android Pay 应用的发布，世界终于要终结了。"
  },
  {
    id: "ai847",
    text: "我不确定是不是只有我这样，但当你打字打够了时间，听起来就像直升机"
  },
  {
    id: "ai848",
    text: "如果有人在游戏英文版的每个句子末尾加上\"无限\"这个词，它就会变成\"无限挑战：无限版\"。"
  },
  {
    id: "ai849",
    text: "你准备好听一些坏消息了吗？"
  },
  {
    id: "ai850",
    text: "我不知道你有没有听过这个，但这是真的：你可以走进一家酒吧，连续两次点同一杯啤酒，得到同样多的酒精。"
  },
  {
    id: "ai851",
    text: "这是一种神奇的酱汁，能腌制食物并把它们变成美味。它被用于各种食谱，也可以通过混合普通芥末和水来制作。这种酱汁可能有点辣，但值得一试。它还非常有营养，提供大量的钾、镁和维生素 D3。"
  },
  {
    id: "ai852",
    text: "重要新闻：我们刚刚收到这家新闻播报制造商的通知，因此，我们未来所有的新闻播报现在也将从头开始制作！"
  },
  {
    id: "ai853",
    text: "下半年已经到来，随之而来的是一股新的热潮。人们在尝试新事物，试用新产品，创造新的自我。其中一股热潮席卷了大地。这片土地上的人们拥抱了这股热潮，并创造了一个新的宗教，崇拜这片土地的神——伊尼戈·蒙托亚。"
  },
  {
    id: "ai854",
    text: "即将推出的游戏反物质维度 2 的官方网站：就像反物质维度，但加了一点 Discord 和一点 Adele。"
  },
  {
    id: "ai855",
    get text() { return `大坍缩是世界末日吗？不，它是一个新时代的开始。这个时代将持续 ${format(Number.MAX_VALUE, 2)} 天。`; }
  },
  {
    id: "ai856",
    text: "玩游戏的唯一'正确'方式就是根本不玩，对吧？这就是反笑话的意义所在。— 反笑话侠"
  },
  {
    id: "ai857",
    text: "《原子科学家公报》刚刚宣布了第二类粒子的存在，它们以《捉鬼敢死队》中的角色命名。"
  },
  {
    id: "ai858",
    text: "我们目前正在将这个星球变成人类的舒适区。将在 10 小时内完成。"
  },
  {
    id: "ai859",
    text: "我要把我的牛奶放在这里几秒钟。♥"
  },
  {
    id: "ai860",
    text: "然后有了耶稣，有了 Hevi，Hevi 与他同在；大海放弃了它的月度循环，掀起了一场大风。Hevi 和耶稣升入天堂；Hevi 充满了圣灵。Hevi 被天使环绕，与他们同列。Hevi 被接入天堂，受到荣耀和尊崇，与他们同列，被称为奇妙者；他的天使们欢欣雀跃。"
  },
  {
    id: "ai861",
    text: "你可能会把一天的大部分时间花在这里读新闻播报建议上。"
  },
  {
    id: "ai862",
    text: "弗里曼动物种族是一个与大地和谐相处的人族，因此与其他动物种族截然不同。他们的社会以狩猎和采集为基础，他们也是高度注重精神的人。他们有许多信仰和实践，与大多数其他动物种族形成鲜明对比，例如吃肉和使用石器。他们似乎也相当迷信，从他们已知会进行……这一点就可以看出来。"
  },
  {
    id: "ai863",
    text: "如果……宇宙只是一个让人们守规矩的幌子呢？……实际上不，它确实是有意的，宇宙被设计用来让人们守规矩。问题是人们无法接受外部力量操纵他们生活的想法，最终爆发了无法控制的混乱，最终导致了热核湮灭。"
  },
  {
    id: "ai864",
    text: "如果你在读这个，你大概不该读。如果你没在读，那你大概应该读。"
  },
  {
    id: "ai865",
    text: "我是个时间旅行者。我可以告诉你世界的历史。但是，我无法告诉你未来。这就是我在这里的原因，来告诉你未来。未来是一堆不断膨胀的过去、现在和未来，它永远不会停止增长。有太多的历史，太少的时间。有太多的历史，但它不会停止增长。然后，有这个，然后有那个，然后……"
  },
  {
    id: "ai866",
    text: "一个全新的、改进的、更安全的反物质维度版本现已可用：反物质维度 2。"
  },
  {
    id: "ai867",
    text: "起初，什么都没有。然后伟大的 Hevi 做了这个游戏，但没有什么可以用来玩它。"
  },
  {
    id: "ai868",
    text: "你会向朋友推荐反物质维度吗？会"
  },
  {
    id: "ai869",
    text: "\"我们有三种新闻：警告、暗示和嘲讽笑话。"
  },
  {
    id: "ai870",
    text: "我爱你兄弟！"
  },
  {
    id: "ai871",
    text: "我会长话短说，因为我没多少要说的。"
  },
  {
    id: "ai872",
    text: "大量的反-kafawi 正在参加反物质好物竞赛。以下是获胜方法：1. 提个建议 2. 送出测试密钥 3. 告诉我你对游戏的看法 4. 先别把它放进游戏里（它已经在那里了，你删不掉）5. 先别把它放进游戏里（它已经在游戏里了）6. 先别把它放进游戏里"
  },
  {
    id: "ai873",
    text: "脆虾的食谱是有史以来最独特和最受欢迎的之一！脆虾被认为是所有食物中最好的之一！这个食谱是你最喜欢的意大利餐厅必试的！"
  },
  {
    id: "ai874",
    text: "在你制造了 1 个反物质后，去菜单按重置。"
  },
  {
    id: "ai875",
    text: "我想你知道这会怎样发展。"
  },
  {
    id: "ai876",
    text: "代价是什么？你必须在线不到 5 小时才能领取奖励。"
  },
  {
    id: "ai877",
    text: "俄罗斯方块是 Hevi 做的"
  },
  {
    id: "ai878",
    text: "如果我们不是在制造反物质，而是在移除它呢？"
  },
  {
    id: "ai879",
    text: "长期连载系列的新作，反物质维度——奇异物质维度。与朋友们一起体验反物质维度中最奇异和美妙的世界，或者在一个星系中与数百个对手征服世界，全在不到一小时内。"
  },
  {
    id: "ai880",
    text: "我希望你准备好接受大新闻了，因为这就是大新闻。反物质到处都是，正在炸毁整个街区。"
  },
  {
    id: "ai881",
    text: "你必须获得 33,333,333 IP 才能看到这条消息",
    get unlocked() { return Currency.infinityPoints.gte(33333333); }
  },
  {
    id: "ai882",
    text: "你可能以为这些是笑话，但相信我们，读完之后你会惊讶于自己有多喜欢它们！"
  },
  {
    id: "ai883",
    text: "神皇本人，Hevi，平衡的创造者，有一个超级秘密成就。那就是去翻转你的超级平坦学徒室友！"
  },
  {
    id: "ai884",
    text: "索尼克生来没有心脏……但这并没有阻止他成为天才"
  },
  {
    id: "aim885",
    text: "我最常被问到的问题是\"我可以跳过广告直接获得真相吗\"，答案总是响亮的不行。原因是，广告收入太高了，无法抵消维护服务器的成本，而且大多数玩家根本不在乎。"
  },
  {
    id: "ai886",
    text: "你还没解锁第九维度？按住 M 然后 DROP。"
  },
  {
    id: "ai887",
    text: "伟大的物质之战势均力敌。物质的胜利是短暂的，反物质的胜利则不是。物质人看得太多，反物质人太弱，战争赢了。"
  },
  {
    id: "ai888",
    text: "一个关于提供更新的图灵完备游戏"
  },
  {
    id: "ai889",
    text: "新研究表明，我们制造的反物质越多，拥有的物质就越多"
  },
  {
    id: "ai890",
    text: "生命的意义是什么？"
  },
  {
    id: "ai891",
    text: "你有足够的反物质来制作一个新的转生层！转生层太棒了。"
  },
  {
    id: "ai892",
    text: "反物质维度 2 的 Beta 测试者是我见过的最忠诚、最专注、最坚定不移的一群人。他们可能也是我见过的最懒惰、最自我放纵的一群人。"
  },
  {
    id: "ai893",
    text: "震惊的新研究揭示，你在网上花的时间越多，就越可能被明星效应迷住。"
  },
  {
    id: "ai894",
    text: "当你玩完之后，想再玩一次时，你应该开始一个新游戏。"
  },
  {
    id: "ai895",
    text: "我不知道你怎么想，但我不买回形针。"
  },
  {
    id: "ai896",
    text: "Hevipelle 使用复制器来加快游戏速度。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
  {
    id: "ai897",
    text: "假设你在做一个游戏。你在做一个单例。你在做一个离线玩的游戏。你玩的时候会怎样？它崩溃了。你再玩会怎样？它崩溃得更厉害。你再玩会怎样？你丢了存档。"
  },
  {
    id: "ai898",
    text: "这就是当你过度依赖\"弄假直到成真\"态度时的下场。"
  },
  {
    id: "ai899",
    text: "这是一个两部分系列的第五部分，探讨科学与魔法之间的联系。第一部分将于10月5日发布，第二部分将于10月24日发布，你可以在第三部分继续追随这段旅程。"
  },
  {
    id: "ai900",
    text: "5 小时是什么？一笑"
  },
  {
    id: "ai901",
    text: "反物质维度的新测试现已可用，将在5小时后开始。此测试不提供退款，所以请耐心等待我们完成测试并准备向公众开放。测试将在反物质维度 Discord 中的-5小时后进行。"
  },
  {
    id: "ai902",
    text: "黑夜将至，随之而来的是一件可怕的东西被释放：毁灭。混乱。还有衰败。还有死亡。混乱正在向我们所有人袭来。"
  },
  {
    id: "ai903",
    text: "这篇文章是个小作品。你可以通过扩展它来帮助 Deskthority。"
  },
  {
    id: "ai904",
    text: "一种更安全的数据存储和检索方式已被发现！当你到达 AE 时，点击大红色按钮，世界将停止旋转！"
  },
  {
    id: "ai905",
    text: "哦，这是什么声音？某种崩溃？更像是某种更大规模的崩溃？我不知道。不管它是什么，可能不是我造成的。我不应该把它放进去的，只是……嗯，你看，我本来要把它放进去的，但后来我觉得把它放进去可能是个好主意。哦，这会是个好东西，我保证。"
  },
  {
    id: "ai906",
    text: "上周，我们报道了一个仅以\"反博士\"之名的不知名个人破解了游戏并声称拥有游戏数据。从那以后，他到处宣传他有一个\"爆炸性的新应用\"，能让他\"把自己变成反物质\"。然而，没有人站出来提供如何使用该应用的信息，甚至它是否真实存在也不得而知。如果我们查明情况，将会更新本文。"
  },
  {
    id: "aim907",
    text: "我要做的第二件事就是亲自去找开发者谈谈。我不知道能不能做到不惹人生气，所以我就在这里做了。"
  },
  {
    id: "ai908",
    text: "绝大多数人并没有完全受益于反物质维度，因此不受其影响。然而，有某些人会受到影响，而且在一天中的某些时段，取决于他们的心情和他们拥有多少反物质，他们会表现出维度转变，从空闲状态变成积极参与新闻播报建议。这种转变是由于他们体内的反物质发出某种波长，称为\"红移\"。"
  },
  {
    id: "ai909",
    text: "到现在我们都知道流程了。你只需与某人共度永恒就能获得一个新的转生层。"
  },
  {
    id: "ai910",
    text: "第九维度存在的真正原因是为了把我们所有人都囚禁在虚拟现实模拟中。"
  },
  {
    id: "ai911",
    text: "你的电脑感染了一种奇怪的浮动病毒，正试图偷走你所有的反物质。无药可救，所以赶紧下线！"
  },
  {
    id: "ai912",
    text: "今年是 5303 年。反物质维度的创作者 Hevipelle 触碰了第九维度。"
  },
  {
    id: "ai913",
    text: "\"Hevipelle 讨厌我\"这句话挺搞笑的。"
  },
  {
    id: "ai914",
    text: "政府停摆来了又去，国家仍处于衰退中，美联储还在读零工时合同。唯一好转的是你与反物质的关系，显然。已经证明，认识一个有反物质的人会比任何其他类型的朋友都更让你接近灭绝。"
  },
  {
    id: "ai915",
    text: "重要新闻：开发者 Hevipelle 宣布反物质维度：游戏现在 100% 免费！"
  },
  {
    id: "ai916",
    text: "总有一天，我们会迎来这样一天：一个人坐在龙的头上并称之为\"龙珠\"。这样一个人然后会去进行龙珠 Z：大逃杀，在其中他会使用龙珠 Z：融合来创造一条巨龙，这条龙随后会在过程中吞噬宇宙，从而创造一次\"大爆炸\"。这样一个人然后会因被\"重建\"而获得奖赏，并被送回\"天界\"。"
  },
  {
    id: "ai917",
    text: "\"我认为一个人一生中能取得的最大成就，就是说他读过了每一条新闻播报建议，然后什么都没发生。\"——Kajfik"
  },
  {
    id: "ai918",
    text: "泰坦陨落 2 现已进入封闭测试。该测试仅面向愿意提供一些个人信息（如电子邮件地址）的人。如果你在测试中并想退出，可以随时通过转到\"帮助\"选项卡并将测试设置更改为公开来退出。"
  },
  {
    id: "ai919",
    text: "就我个人而言，我喜欢得到4或5星的评分，它能让你了解你的建议有多棒，也向我展示了你对游戏有多关心。如果你想的话，我也可以给6星评分，对我来说没问题。我不在乎人们是否喜欢，我为 APG 工作，我拿钱就是为了赚钱。"
  },
  {
    id: "ai920",
    text: "没人谈论 9 的真正原因是它不是什么大秘密"
  },
  {
    id: "ai921",
    text: "男人和女人之间唯一的区别是他们对待抚摸动物的态度。"
  },
  {
    id: "ai922",
    text: `最近的一些电视纪录片讲述了一只名叫路易的狗的故事。在它的主人离开家后，它意外地成为了一名公众成员。有一天它决定和主人玩"来玩来玩"。它立刻被安乐死了。`
  },
  {
    id: "ai923",
    text: "整个世界的历史，每一个想法，每一次失败，每一次垮台，每一项成就，都已被一网打尽。"
  },
  {
    id: "ai924",
    text: "这句话包含两个悖论。"
  },
  {
    id: "ai925",
    get text() { return `是时候揭晓反物质维度的下一个扩展了：第 ${format(Number.MAX_VALUE, 2)} 维度。它将在 -5 小时后发布，目前花费 ${format(Number.MAX_VALUE, 2)} 个人类灵魂，而且与物质或反物质毫无关系。`; }
  },
  {
    id: "ai926",
    text: "我想知道第四维度有什么好大惊小怪的？嗯，如果你有 4 个，然后乘以 0，你就得到了神奇的数字 4。这就是为什么第四维度存在。但如果有 5 个呢？嗯，第五维度可以取代第四维度，那为什么不有个第五维度呢？嗯，这就是第六、第七和第八维度的由来。"
  },
  {
    id: "ai927",
    text: "你用错版本了！现实更新已经出了！按 Ctrl+Shift+Alt+Del 来解锁第九维度！"
  },
  {
    id: "ai928",
    text: "一名男子声称他已经昏迷了20年，而且无法移动手指。他因背部压缩性骨折被送到医院，从那以后一直在接受医疗帮助。他现在已经康复，不再需要医疗护理。我们仍然不知道他想表达什么，但我们希望他在知道自己永远不会醒来这件事中找到一些安慰。"
  },
  {
    id: "ai929",
    text: "要从左移到右，向右转。"
  },
  {
    id: "ai930",
    text: "然后我们有物质维度。据我所知，它们是由反物质构成的。关于是否还有任何由物质构成的维度残留存在一些争议，但这不是主要问题。真正的问题是\"它们为什么存在，反物质如何影响它们？\""
  },
  {
    id: "ai931",
    text: "据信一种新的疯狂科学家正在以惊人的速度制造反物质。"
  },
  {
    id: "ai932",
    text: "一种新的正义被发现：大规模欺骗。它通过欺骗玩家让他/她以为自己做错了什么来工作，而实际上他/她只是做了一些完全正常的事情，即正常地过日常生活，没有想太多。"
  },
  {
    id: "ai933",
    text: "献给幕后那位伟大而美好的人，伟大而美好的名字 rick roll。安息吧，好人。愿你安息。"
  },
  {
    id: "ai934",
    text: "我再说最后一次，反物质维度不是点击游戏。"
  },
  {
    id: "ai935",
    text: "维度的数量是无限的，但你维度的质量是有限的。这就是为什么我们只生产最高质量的反物质，也是我们与其他工厂的不同之处。"
  },
  {
    id: "ai936",
    text: "我以前听说过转生层，但一直不知道该怎么处理它们。"
  },
  {
    id: "ai937",
    text: "一个男人走进一家酒吧。酒保让他滚开。男人继续走。"
  },
  {
    id: "ai938",
    text: "AD 中最古老也许是最著名的游戏，在你退休很久后肯定还会被记住的，就是 AD。听说过有人用超过2个1赢得游戏吗？我听说过。听说过有人输掉吗？我听说过。听说过 AD 中存在第九维度吗？我从来没有。"
  },
  {
    id: "ai939",
    text: "问候，我是折叠梯的第一级。"
  },
  {
    id: "ai940",
    get text() { return `现在是 ${format(Number.MAX_VALUE, 2)} 年，Hevi 还在想怎么修复这个更新。`; }
  },
  {
    id: "ai941",
    text: "如果你能伸展双腿而且永远不会失去它们呢？"
  },
  {
    id: "ai942",
    text: "最重要的一点是，你不需要玩游戏就能获得成就。你实际上只需阅读成就描述就能获得它。"
  },
  {
    id: "ai943",
    text: "一家新银行已成立，为加密货币提供避风港。"
  },
  {
    id: "ai944",
    text: "Google+ 在青少年中很受欢迎，今天，他们获得了经典的1950年代农场故事《动物庄园》的专属虚拟现实（VR）版本。这款游戏融合了冒险、策略和音乐，由一支致力于吸引年轻人的小团队制作。该游戏为大多数其他 VR 游戏提供了替代选择，适合任何不适应大型、复杂图形和声音的人。该游戏拥有超过50种不同的……"
  },
  {
    id: "ai945",
    text: "这个游戏可以叫任何名字。你可以随便叫它什么。但你错了。它是我的。"
  },
  {
    id: "ai946",
    text: "所有的反物质都从哪里来？"
  },
  {
    id: "ai947",
    text: "Tickspeed 挑战是一个团队游戏，你必须时间旅行到仙女座星系才能到达第九维度，第一维度是到第九维度的最短距离。到达第九维度没有额外奖励，你只需时间旅行到仙女座星系到达第九维度，你将获得一个秘密成就，因为你无需时间旅行就实现了瞬间 [已编辑]。"
  },
  {
    id: "ai948",
    text: "这个问题困扰了我很久。什么是反物质？反物质是反物质吗？当你说\"反物质\"时它是什么意思？这些就是困扰反物质维度的问题……"
  },
  {
    id: "ai949",
    text: "'反物质维度'这个词是一个双关语，字面上在字典里就是'反物质维度'的意思。"
  },
  {
    id: "ai950",
    text: "我可以暂停物理定律，因为我是个天才，而我的宇宙如此之大，以至于我可以真的暂停物理定律并创造一个比现在大一倍且质量多一倍的宇宙，我相信你能想象那有多大。"
  },
  {
    id: "ai951",
    text: "当你在打一场必败的战争时，你会与当权者和解。你放弃幽灵，然后继续下一个挑战。"
  },
  {
    id: "ai952",
    text: "在另一个星系的某个地方，一个超级智能正试图弄清楚如何绕过二维向量空间的限制。它可能正在研究三维空间。"
  },
  {
    id: "ai953",
    text: "过去几分钟的反派是一个神秘的、被反物质覆盖的生物，仅以\"黑衣人\"之名而为人所知。他最后一次被看到是跑向一个新闻广播，似乎迷路了，直到他回到新闻电台并接受了关于他经历的采访。他的故事在屏幕右下角讲述。"
  },
  {
    id: "ai954",
    text: "你已解锁第四条故事线。"
  },
  {
    id: "ai955",
    text: "当你忙着刷那个烦人的\"真实\"数字时，我正忙着写那条新闻播报。"
  },
  {
    id: "ai956",
    text: "一种新的力量崛起了：反物质。"
  },
  {
    id: "ai957",
    text: "这一天来了。反物质从天而降，街道上一片寂静。"
  },
  {
    id: "ai958",
    text: "最重要的是要明白你在玩一个模拟。你可以赢也可以输，但除了脖子上有点痒之外，你什么也得不到。"
  },
  {
    id: "ai959",
    text: "反雪人是一个非常特别的雪人。他非常胆小，但有一个非常强烈的愿望，就是被直升机捡起来。政府不希望这种事发生，所以他们把他关在一个特殊的建筑里，然后飞越很远的距离。最后，他们把他扔到地上并开始捡起他。政府没有使用武力来捡起他，而是邀请了整个社区进来并开始捡起他们。社区拒绝了。"
  },
  {
    id: "ai960",
    text: "我很惊讶你没说\"不是我的反茶杯。\""
  },
  {
    id: "ai961",
    text: "我看你也是个文化人。我想知道是什么让你用如此笨拙、痛苦的声音说话？是什么吸引你说一种没人能听懂的语言？我听到你的粉丝对你的视频赞不绝口，但什么把你吸引到这个地方？我觉得我认识你。你是……你是一个神秘的人。一个让我着迷的人……"
  },
  {
    id: "ai962",
    text: "注意：这是一条私信。不要在公开场合发送。"
  },
  {
    id: "ai963",
    text: "当你达到无限时，你解锁了一个新维度：混沌维度。去新闻播报获取更多信息。"
  },
  {
    id: "ai964",
    get text() { return `虽然大多数玩家会说第九维度不存在，但少数人会以最史诗般的方式去升级它。这些人会利用第九维度的力量，比如用它获得 ${format(Number.MAX_VALUE, 2)} EP。不是吗？嗯，他们是规则的例外。`; },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
  {
    id: "ai965",
    text: "\"消灭死亡念头\"运动的故事以前被讲述过，但从未完全准确。该运动最初由反进化论者组织，旨在阻止科学计数法的指数增长，但很快扩展到反对任何形式的\"进步\"。在早期，该运动由一个仅以\"伟大的 Hevipelle\"之名的不知名人物领导。他们的理念很简单：扩展可能性的边界，推动可容忍事物的极限。"
  },
  {
    id: "ai966",
    text: "这就是世界如何终结的故事。地球曾经是一个郁郁葱葱的绿色世界。然后，一个来自外太空的人触碰了它并开始种植蘑菇。他自称为 Hevi。有人说 Hevi 从不满足。有人说他爆炸了。我们只知道 Hevi 仍在那里扩展他的势力范围，而我们被困在这里的太空虚空中。"
  },
  {
    id: "ai967",
    text: "反物质维度，唯一一个你可以用房地产交换虚拟现实的地方"
  },
  {
    id: "ai968",
    text: "此页面包含反物质维度的剧透，已警告过你了。"
  },
  {
    id: "ai969",
    text: "当新闻播报最好的事就是能悄悄混进新闻里而不被任何人发现。"
  },
  {
    id: "ai970",
    text: "这个回形针最大化器是个好主意。不过最好不要让它自行发展，因为它很可能是你见过的最惊人的东西。如果你不知怎么地挺过了回形针维度的第一阶段，你可能在想它在你家里干什么。幸运的是，修复起来超级简单。只需进入选项，把\"全部最大化\"改成\"始终全部最大化\"。"
  },
  {
    id: "ai971",
    text: "一个强大的巫师选择将负能量导入反物质，现在反物质正溢出到世界上。"
  },
  {
    id: "ai972",
    text: "埃隆·马斯克宣布了一个超低成本、超高速列车的新时代。用户将能在仅 186ms 内从 A 地到 Z 地。"
  },
  {
    id: "ai973",
    text: "曼彻斯特大学的一组研究人员创造了一台 3D 打印机，可以凭空创造任何物体，包括一个 3D 打印的圣母玛利亚复制品。"
  },
  {
    id: "ai974",
    text: "好了，这里有个新游戏叫反物质维度，它就像物质维度，只是东西更少但更有趣。它在 Android、iOS 和网页上都有。游戏非常简单：你拿6个维度和反物质，在6个维度中你拿物质，在物质中你拿反物质，然后你就像玩任何其他游戏一样玩这个游戏。"
  },
  {
    id: "ai975",
    text: "什么任意的、主观的、无意义的数字像水银温度计一样从你嘴里出来？1.79"
  },
  {
    id: "ai976",
    text: "\"街头传闻说\"bank\"这个词是\"bank\"的字谜——这说得通但我还没到那一步\"——Slabdrill"
  },
  {
    id: "ai977",
    text: "第九维度像火山一样升起，开始对空的第十维度降下毁灭。爆炸的第九维度产生的烟雾和碎片覆盖了整个第九维度。剩下的只有一个冒烟的陨石坑和第九维度的残骸。"
  },
  {
    id: "ai978",
    text: "救命！我怎么让脑子协调器里的点动起来？"
  },
  {
    id: "ai979",
    text: "嗨，能不能请你不要禁用新闻播报？以后谢我。"
  },
  {
    id: "ai980",
    text: "如果你正遭受反物质产量低下的困扰，那么不用担心，朋友！我们高度科学的反物质政府最近已到达第九维度，很快就会开始给我们发反帽子以示尊重！"
  },
  {
    id: "ai981",
    text: "你点击屏幕左下角，一股绿色的酥麻感顺着你的腿上升。这是你抓挠反物质得到的奖励。"
  },
  {
    id: "ai982",
    text: "给那些购买 Analytics 订阅的人一个快速提示：我们获得你反物质销售额的一小部分，但你确实支付了一小笔钱来支持新闻播报的研究。这是浏览反物质维度便利性所付出的小小代价。"
  },
  {
    id: "ai983",
    text: "我们为什么还没有让反物质股市崩盘？"
  },
  {
    id: "ai984",
    text: "即使在天界 Pelle 将大量反物质放入池中之后，它也没有产生任何东西。发现这个漏洞的科学家最后一次被看到时，正和一群10个人一起爬树，腿上放着一本小笔记本，喝着奶酪汁，看着虚无。"
  },
  {
    id: "ai985",
    text: "一二三，啵二三，三四五，反四五，二三八，九十五，五六七，八九十，九十十，七七八……一切都很顺利，直到昨晚，八个邻居中的四个开始抱怨一种奇怪的光芒。一种奇怪的嗡嗡声传遍社区，几乎像无线电静电。你开车经过时它变得越来越强烈，直到几乎漆黑一片。你试图向邻居解释，但他们不听。社区不安全，每个人都知道。你进一步分析，每个人都认为这只是某个天体物理学家的主意。然后，该死。是爆炸物。到处都是反物质，而且越来越糟。事实证明，整个可观测宇宙中大约有 1e31 个普朗克体积。而这还只是我们所说的反物质。还有暗物质、普通物质和额外物质。你知道的，就是你用想象力创造的那种。"
  },
  {
    id: "ai986",
    text: "如果你想做反笑话，记住它可能挺好的。"
  },
  {
    id: "ai987",
    text: "你说服不了任何人去天堂，但你可能会接近。"
  },
  {
    id: "ai988",
    text: "突发新闻：第九维度的创造者 Hevipelle 刚刚宣布 beta 将在 5 小时后发布！"
  },
  {
    id: "ai989",
    text: "原力与你同在。"
  },
  {
    id: "ai990",
    text: "如果耶稣是个反物质幽灵呢？"
  },
  {
    id: "ai991",
    text: "在711年的夏天，大灾变席卷了泰瑞亚。一个巨大的虚空被创造出来，泰瑞亚被遗弃腐烂。已知世界的军队已经放弃，虚空被黑暗填满。只有 Kajfik 的力量尚存，他崛起成为已知世界最伟大的神。据说他将独自面对大灾变，并摧毁它。"
  },
  {
    id: "ai992",
    text: `在最近的新闻冲突中，术士们一直在为团队副本首领聚集拾荒者。他喜欢他那5小时的拾荒者，并想炫耀他选择的强大武器——第九维度。当两只野兽战斗时，第一维度持有者需要小心，因为第一个可能也会和第二个遭遇同样的情况。与此同时，副本以一声巨响结束了它的旅程，首领挥霍了爆炸物漏洞，用爆炸物淹没了该区域，而在他之前，那里充满了沼泽鼠。两者都被首领无情的爪击迅速消灭了。这是一项艰苦的工作，但副本的中坚力量设法抓住了石笋并把他推过蛋白石冈瓦纳。随着首领死亡，术士们紧随其后，术士们尝试自己刷拾荒者，但刷怪仍在快速继续。对术士们来说形势看起来很黯淡，因为首领试图利用人们的贪婪，偷走他们的武器，使他们无法使用任何剩余的武器，这些武器由高度稳定的反物质制成。术士们试图将"不准侥幸"政策作为武器来打击人们，但人们走上街头，进行人身攻击和精神消耗，耗尽了人们一直持有的所有精神能力。人们诉诸暴力，像以前用来阻止人们一样使用第九维度，但人们信仰上帝，相信他会仁慈，他将带来一个更友善更温和的时代，每个人都能使用他们力量的最后一滴。`
  },
  {
    id: "ai993",
    text: "如果你想做但我告诉你那对你来说太痛苦了呢。"
  },
  {
    id: "ai994",
    text: "你的数字有多大"
  },
  {
    id: "ai995",
    text: "只想感谢开发团队为反物质维度和反物质维度 2 付出了这么多努力"
  },
  {
    id: "ai996",
    text: "Hevipelle 打破了第四面墙的第 9 面！准备好迎接一切变得相当黑暗。"
  },
  {
    id: "ai997",
    get text() { return `星际反物质贸易已严重中断，用整个星系换取偶尔的回形针。货摊不再被使用。奇怪的是，整个维度已经变成了丢弃塑料和其他无用垃圾的垃圾场。就好像多元宇宙的其余部分无法产生足够好的反粒子来养活不断增长的人口。不幸的是，这种情况迫使整个多元宇宙争先恐后地寻找方法来满足吃反物质的开发者日益增长的需求，他声称还有超过${format(Number.MAX_VALUE, 2)}个标本需要收集。`; }
  },
  {
    id: "aie998",
    text: `这不仅仅是暗示——这是明摆着的。许多 AI 会使用3个一组的列表来归类事物，
    以突出识别的便利性。还有其他指标——其中最重要的是
    破折号（—）、弯引号（""）和否定平行结构（"不只是X，而是Y！"）。
    如果你想要关于语音中 AI 指标的更多解释，请告诉我！`
  },
  {
    id: "fe1",
    text: "趣闻：反物质维度：终章的策划始于 2023 年 12 月。"
  },
  {
    id: "fe2",
    text: "趣闻：终局中两个额外天界的想法源于一个粉丝自制的讨论板，有人建议扩展主游戏，其中会有第八个天界需要玩家击败，完全击败他之后会有第九个天界。击败第九个天界将获得第九维度。因此，被称为 Alpha 和 Slabdrill 的两个天界诞生了。"
  },
  {
    id: "fe3",
    text: "趣闻：Hevipelle 每天吃的屁股足以坍缩 1.79e308 个宇宙！我们还没全死的唯一原因是我们是由物质组成的。"
  },
  {
    id: "fe4",
    text: "趣闻：AD：终章的背景故事最初是作为原版背景故事的扩展开始的，但正如你所见，它很快就转向了！"
  },
  {
    id: "fe5",
    text: "趣闻：如果你在 2025 年或之后出生，你可能永远不会看到这条消息。如果你看到了，你的 AI 伴侣可能就是读给你听的那个。"
  },
  {
    id: "fe6",
    text: "趣闻：Supersonic Seven 自 2024 年 9 月以来一直在开发这个游戏。"
  },
  {
    id: "fe7",
    text: "趣闻：游戏将于[已编辑]在<span style='color: red'>TimeSpan.fromMilliseconds(new Decimal(Date.now() + 432000000)).toString()</span>时完成"
  },
  {
    id: "se1",
    get text() {
      const chapters = [
        `<span style='color: cyan'>Hello, I am Living_Person eight, also known as Life.</span><span style='color: red'>
        Hey, I'm SupersonicSeven, also known as Overlord.</span><span style='color: blue'>Hi, I am MidnightLight, also
        known as Midnight.</span>`,
        `Hello ${player.username}, viewer discretion advised for dark jokes, nerd jokes, random emoji stream, and spontaneous
        matter-antimatter annihilation. These may cause symptoms of happiness, actual knowledge gain, depression, no
        knowledge gain, brainrot, dark humor addiction/mastery, and a slight habit of passing time watching these
        during speedruns and timewalls.`,
        `The fight between Life and Midnight continues, Life brings forth the power of technology. Through Redstone,
        he quickly builds his forces via automation and sugarcane farms and launches a suprise attack against Midnight.
        Midnight was awoken by his followers during the battle, and seeing the destruction Life caused, gave the magic
        of light to his followers. They casted powerful lasers, quickly melting and burning the robotic army of Life. The
        plot thickens, when SupersonicSeven, God of all there is and Overlord, comes forth from the 6969 dimension and says....`,
        `他说："你们两个必须停止争斗，否则熵将指数级上升，最终会杀死我们所有人！"`,
        `<span>But then, the Earth crunched, and ${player.username} came. "Don't get me into this, I don't have enough dopamine or
        brainrot for this," and then used the Galaxy Generator to Endgame-exit.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        "....so..." SupersonicSeven said. "Command us Overlord" Midnight said.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>
        "Go forth, and cease all fighting, merge your forces and buy as many STDs as possible!" "As you wish Overlord."
        Life said. The rivalry came to an end, or did it?</span>`,
        `But what 7 and ${player.username} didn't expect is that as soon as they left, Life pulled out a "Gravitational Singularity"
        that was being trapped inside a multi-dimensional gravitation force field and throw it at the largest black hole
        in the universe.`,
        `The Blackhole, having stayed dormant for so long, suddenly starts to weaken, and then in a flash, the Blackhole
        explodes. From it's remnants, Slabdrill, the ruler of the 9th dimension comes forth and says, "Life, you have freed
        me from my prison, you are granted a choice: The 9th dimension, or the power of Gravity?" Life says, "I choose the
        power of gravity." And it was so, Life obtained the power of gravity and began to grow stronger. Technology, already
        powerful, became even stronger with proper gravity and soon, Life began reaching the level of Overlord. Overlord came
        down, and said, "Life, you have dealt with the devil! Cease this blasphemy and forgo your gravitic powers at once!"`,
        `But it was too late, Life has already used technology and the gravitational force he obtained from Slabdrill to
        weaker the walls between all the parallel universe. Life says, "You can't change anything now." Laughing loudly,
        "All the parellel universe will collapse into a 'Time and Space singularity'." As life speaks, a giant machine came
        out of nowhere, and fired a shot at where the Blackhole was, onto the double singularity that already existed.
        (Time and space shattered) Life laughed so hard that he almost choked himself, "I have done it, no one....".
        As he was speaking, didn't realize that a light that passes through all of time and dimensions, shined on him...`,
        `...Midnight had took out his secret weapon, the Multidimensional-light-matter-controller. He directed it onto Life.
        Life and his creation melted and burned and wailed in agony, but under the pure light, were obliviated from existence.
        Midnight looked at the mess that was made and vowed that such catastrophic destruction should never take place again.
        He rebuild space and time with the help of Overlord and ${player.username}, and then sealed the controller in a place with
        no light. Such that it may be buried forever.`,
        `After the battle, Midnight, Seven and ${player.username} together, using their power to gather Life particle. Those three
        spread Life all around the universe causing the mortals able to come to life and was later called "The Great Three".
        But what they didn't know is that, by spreading life around the universe has caused the revival of him. Because, Life
        and Life particle, are just the same thing...`,
        `One thing the Great Three did was to hide their existence, observing mortals throughout eternity. The started small,
        as cells in the ocean, but very quickly, intelligent beings in the cosmos had sprung forth, making the universe
        bloom and fill with life. It was a golden age for the universe, even better than before the Big Bang, when the Great
        Three had rebuild Space and Time. And then, the cataclysm happened. In a blink, all mortals died, and their matter
        and antimatter alike was gathered into a egg, the egg hatched as soon as it was made, sending a bang throughout the
        universe. Life came back and said, "Midnight, ${player.username} and Overlord, you will pay." Seeing his rebirth, the
        Great Three were stunned, they went after him, but were quickly sealed by him using the power of gravity, creating
        Blackholes around them. "Now" Life said, "The time has come, the secrets of the dimensions, beyond Existence,
        above the Expanse, even through the Shattered Reality, all are my realm now!" He cackled and brought forth his
        might and seized and plundered the cosmos, not even letting the Celestials live. He went farther and farther,
        but soon forgot his origins. In the heart of his reality, the Blackhole he had created to imprison the Great Three
        slowly shrank, and shrank, and after an eternity, it exploded, what came were not the Three, but one that had been
        the result when the Three merged into one. Seeing that life had forgotten his roots, this "One", started rapidly
        sabotaging and stealing Life's powers. Soon, Life started noticing his powers were growing slower, but he attributed
        them to a timewall. Soon, One found himself on the first layer Life still saw, at this point, Life knew something was
        going on, he started going back to his origins, by the time the reached the layer One was, he saw the power that had
        been drained of him. He went back to the original dimensions page and saw that the Blackhole had been collapsed.
        He burned and raged, "You....stole my power!" He tried to get stronger by using late-game buffs like Meta-Matter
        dimensions but One used the simplest, the fundamentals. He disabled automation, instantly stopping Life's growth.
        Next, he enabled Dilation and Pelle Strikes, then entered every Celestial, even the dead ones' broken Realities
        to add innumerable debuffs. Finally, he initiated the Ultimate Existential removal button "Delete game, mod and
        all savefiles". With that, Life ceased to exist, every last one of his cells, essence and power dissolved into
        normal matter and started the cosmos anew. One watched from above.`,
        `Life 在现实中睁开了眼睛。"该死，为什么我总是输，根本没有办法打过这一关！"`,
        `Life went to his bed and tried to sleep, but his anger kept him awake, soon, he thought of a plan. He went to
        his computer, took all the recent social media posts from SupersonicSeven and Midnight and ${player.username} and used VPN
        and IP tracking to find thier DNS, after that he cracked their SSL tokens to find their IP addresses, going further,
        he then used this data to collect all information about them and then, sent this data back with a threat - "let me
        back, delete your accounts, handover all power." The 3 were stunned at this and communicated together to try and
        find a plan, soon, they know what to do.`,
        `The 3 decided to fake like they have done it, but actually tracking AP address and try to use things to threaten
        Life. They fake like Life was able to control all the power, and fake like they weren't on the game, but that's
        because 7 used his ultimate power of coding to hack the game.`,
        `Life realised what happened, he decided that the three are better when they are dead, so he concocted a plan to
        kill them, first, he tapped into their messages and learned that they were meeting up. Then using the the same
        channel, he impersonated them all and took their savings from the banks and took that money to hire a assassin
        sent to kill the three... But then, when he saw the assassin, he couldn't believe his eyes; it was Midnight. He
        and the others had hacked him prior to this and the communication channel he had hacked was a dummy, now, in front
        of him, Midnight took out a gun, and oofed life, as he turned away, life said one last sentence, "I'll always come
        back!" Life was going to die soon, but then, he felt himself being lifted and sent into a car, he soon passed out
        and when he regained consciousness, he realised who saved him - Slabdrill. Slabdrill tended to his wounds,
        explaining in the meantime that he was once a duo with the trio but was kicked out when he gained too much power,
        and was trapped for so long because the other 3 had used thier power to subdue him and threaten him in the real world.
        After Life recovered, he and Slabdrill, who's real name was Slab, decided to take revenge....`,
        `Life and Slab, traveled all around the world to find all the Celestials that died in the game, and asking them to
        join the revolution. Even though they had some problems previously, but since now the 3 are getting way too powerful,
        they have to work together.`,
        `Soon, they amassed a army of over 3000 Celestials. Their might grew to be frightening, even more than some nations.
        They decided the best way of elimination was to Mass-surround and kill them using guns. In a week, they all came
        to the Three's house and poured in like water in a flood, the Three oofed as many as 350 of the Celestials, but were
        then cornered, at the critical moment, Midnight said to ${player.username}, "NOW!", user pressed a button, and a Magnetic
        wall surrounded them, and then, a rumble came, and then,the city was vaporized due to a matter-antimatter annihilation.
        Seeing over the wreckage, they saw one spot of movement. It was Slabdrill, he had gravitic technology and managed to
        use it to create a anti-gravity zone. The three chased after him and soon caught up with this last survivor.`,
        `Slabdrill know it wasn't the right time to fight the 3 right now just by himself, decided to vanish for sometime
        and revive as many Celestials as he could and even arranging some of the Ancient Celestials together to together
        protest against the 3. Slabdrill pulled out the Quantum Teleportation portal Life left him, and teleported away.
        "Damn it" said 7, "We should have realized all the technology Life have, Slabdrill escaped again!" "It's too late
        now, we can only try to get as strong as possible before they come back."`,
        `The three decided to first go to McDonalds, after they were filled up, they went ahead and robbed America using
        the Antimatter they had as a hostage. This soon also caused into them asking other countries for tribute. Then they
        started a military organization focusing on space and in just 5 years, 5 months and 5 days, they had a Space station
        capable of holding one hundred thousand. Then they decided Earth was better off dead with Slabdrill in it so they
        detonated the antimatter and killed all life on Earth. They never noticed a small ball of 10km in radius taking
        off among the debris as the planet exploded....`,
        `The 3, along with the 100 thousand they had left for the stars, in just a 5000 years, they had colonized over
        500 star systems and came into contact with 5 other species. They had also met a 6th species, called the Llirdbals.
        They mainly used gravitic technology to create structures to live in and collect resources. One day, the three were
        on the Human empire's capital world when they discovered an alarm saying that a 9th dimensional Rift came from the
        Llirdbals's territory, from the Rift, extradimensional beings were entering our universe and quickly stealing all
        energy and matter(and antimatter). The attack had come, Slabdrill was at the front, cackling "Now this universe
        will be destroyed! The beings and I have entered a pact, I will ascend to their realm for your life!"`,
        `But even though Slabdrill thought he had surely got them, something unexpected has happened... What he didn't know
        was that, this was all just a plan the 3 and Life had made. Slabdrill was able to revive Life from the dead but it
        was all planned out. Life was able to gain all of Slabdrill's trust and knowing exactly what he was doing. Life
        secretly send all the informations to the three once a month.`,
        `Life was actually reanimated from the dead by Slabdrill, but during the process, the three had hacked the reanimator,
        now Life was like a robot that answered to the three while playing the rope of a spy, always monitoring Slabdrill's
        movements. Slabdrill soon realised some changes in Life's personality but attributed them to some very slight
        defects in the reanimator. In any case the attack continued....`,
        `（主线故事暂停，闪回开始）`,
        `Long time back, long long before this big fight. When SupersonicSeven, Life and Midnightlight are still children.
        They play with each other everyday,until this happened...`,
        `One day they were playing at the playground when another kid came up to them, his name was ${player.username}. He instantly
        won over the heart of SupersonicSeven and Midnight, but life was feeling jealous because he never got attention after
        ${player.username} came. So he devised a plan to regain his popularity and status, and an end to ${player.username}....`,
        `Life kidnapped ${player.username}, and put ${player.username} in the basement of Midnight's house, I mean, who would think of that?
        In the end, the mot dangerous place is the safest place Afterall. He made sure that ${player.username} would be alive, and is
        in a place where no one will find.`,
        `This went one for a week, the other 2 were getting worked for ${player.username} by now, so they tried searching for him,
        but to no avail, in the end, they had to stop. Then time went on and after 5 years, Midnight went to the basement
        to find something when he heard a voice.... Midnight saw ${player.username} and was horrified,he quickly untied and ungaged
        him as ${player.username} told him the truth. Midnight was terrified at learning on what happened over these 5 years. They
        were about to go meet up with Seven and confront Life when from a corner a door Midnight never knew about, Life
        appeared. Life froze up seeing Midnight and ${player.username}, then ran back in the tunnel, the two followed him but soon
        they reached a fork. They decided to go right but soon found another fork. They realized that Life had a maze of
        tunnels underground and as probably spying on their every move, soon they found and exit and opened it, and they
        arrived in a basement, they went out of the basement and realized this was the home of Seven!`,
        `But they soon realize that the house is empty and 7 was gone! They looked over everywhere but still can't find any
        hint of where 7 is. What they didn't know is that, 7 is actually a doctor and had already kidnapped Life who got
        into his house on accident when he was doing illegal experiments.`,
        `Life was on a straight jacket and tossed into a guest room where ${player.username} and Midnight found him being opened up
        by Seven. They convinced Seven to close him back up (after one kidney) and then took him to prison. There Life was
        imprisoned for kidnapping for 6.9 years. After almost 7 years, Life was released. He tried to find the three but
        they had long moved out and were unfindable. So he decided to try another route, the favorite game of the group
        when ${player.username} had not came yet - Antimatter Dimensions.....`,
        `Life got into the game and realized the game had a huge update! The update that came in 5 hours. It enabled
        multiplayer mode and leaderboard. Realizing this update will help him on finding the three super easily, Life
        started his searching journey. during the time when he was trying to find the three in the game, he met many friends,
        Teresa, Effarig, The Nameless Ones, V, Ra and Lai'tela. They thought it was fun to go on this journey so they
        went with Life.`,
        `Life soon encountered the three. Midnight was still 3 layers smaller than the other two so he first targeted him.
        He used various methods like technology and robots to destroy and bring war to Midnight's followers, who were
        practicing the mystic arts of light: Klidggd un' Kharrha. This happened for many years until one day, Life found
        a red looking dust called Redstone......`,
        `（闪回结束，故事继续）`,
        `The commands between the 3 and Slabdrill is fighting inside Life's brain and each trying to make Life permanently
        be on their side. But what they didn't realize was that when their commands are fighting, Life was able to gain
        consciousness. Life though, "What happened? Why can't I control my own body? I have to do something!" Life realizes
        that the situation isn't right and he has to do something. He used his mind to reach his secret weapon... The exit
        button for the game!`,
        `<span>Life wakes up on a hospital bed, soon, a doctor comes rushing to him.</span>&nbsp;&nbsp;&nbsp;
        <span style='color: yellow'>You woke up! You were in a coma after 7 yeeted you 5 times on the head.</span>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Yeeted me on the head? What for?</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span style='color: yellow'>Cuz u ate the 69th dimension and 7 got mad so he made a yeet stick with Midnight's
        leg which he had amputated cuz he was asking for XP too much.|]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;<span>Gee whiz! That makes total sense, all my questions are answered now!</span>`,
        `（主线故事结束，第二个故事开始）`,
        `Once upon a time, Midnight slipped on a banana peel.The banana was made of matter, which caused his leg to suffer
        a serious injury and the surrounding 100 mile radius to turn into a crater. He was rushed to the ER, and need
        1.79e308 antimatter particles. To do this, his friend Seven created a way for virtual particle to become real,
        and in doing so, created a program that did this, he was thinking of a name when....`,
        `Life walks in with a spoon of neutron star that is being kept inside a magnetic field device(MFD). Life said,
        "Hey 7, see if the neutron star could help, since it's not easy to turn imaginary stuff into real life." 7 grabbed
        the MFD with the neutron star in it, and thought of an idea...`,
        `<span>He turned off the MFD. Instantly, They both died due to being vaporized and ionized by the heat of 10000000°C
        and the weight of the Himalayas. After they respawned, Life said, "OK I got an idea, Hevi". After that, Life
        brought a Nona Vector Foil. It compressed 9-dimensional spacetime into 3D space via gravity. Seven manipulated
        the Nona Vector Foil into a pellet. "Pellet....pelle...." an idea occurred to him. He announced to his world
        of just his 2 friends "Now, I am rechristerned as Hevipelle, creator of all - Overlord".</span>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: blue'>Woooo!</span>&nbsp;<span style='color: cyan'>
        Noice.</span>`,
        `Hevipelle has taken control over everything, including 7 who was sharing the same body as him. "I...have now taken
        control over the entire universe..." Overlord said. Life realized what a mistake he has made, Hevi, now Hevipelle,
        is becoming way too powerful, so powerful that no one can compete with his power in this entire universe... "Hevi,
        you have stay sane! You can't be controlled by this power!" Life shouts. But before he could do anything, the
        Overlord is gone.`,
        `<span style='color: blue'>We must do something. I have an idea! Let's create a third person within him, cuz
        democracy babyyyy! |]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>And it was so. They jumped Hevi when he was creating
        some Urine dimensions and added a third personality called Hyperhasty Hepta inside him. Now "Hevi" was Hevipelle,
        SupersonicSeven and HyperHasty hepta in an all in one combo!</span>&nbsp;&nbsp;<span>Seven and hepta via the
        power of democracy removed Hevi from his mind, who ran away using tesseract. They then merged into one person
        now called Supersonic Hepta, but then MidnightLight said nah just be 7 so he went back to SupersonicSeven.`,
        `While all of these are happening, nobody noticed, but outside of the universe, ㊙️ has casted ㊙️'s vision upon
        this universe. ㊙️'s power is slowly eating it's way through the shields of the universe...`,
        `（故事暂告一段落）`,
      ];
      const chapter = chapters[player.news.specialTickerData.storyChapter];
      player.news.specialTickerData.storyChapter = (player.news.specialTickerData.storyChapter + 1) % 42;
      return chapter;
    },
  },
];
