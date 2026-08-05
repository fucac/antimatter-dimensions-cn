const fs = require('fs');
const newsPath = 'c:/Users/Rarin/Downloads/AntimatterDimensionsEndgameUpdate-master/AntimatterDimensionsEndgameUpdate-master/src/core/secret-formula/news.js';
let content = fs.readFileSync(newsPath, 'utf8');
// Normalize CRLF to LF for matching, will restore before writing
content = content.replace(/\r\n/g, '\n');

// Translated chapters - each replaces the corresponding English chapter
// Using unique substring markers to find and replace each chapter
const replacements = [
  // Chapter 1
  {
    find: `<span style='color: cyan'>Hello, I am Living_Person eight, also known as Life.</span><span style='color: red'>\n        Hey, I'm SupersonicSeven, also known as Overlord.</span><span style='color: blue'>Hi, I am MidnightLight, also\n        known as Midnight.</span>`,
    replace: `<span style='color: cyan'>你好，我是 Living_Person eight，又名 Life。</span><span style='color: red'>\n        嘿，我是 SupersonicSeven，又名 Overlord。</span><span style='color: blue'>嗨，我是 MidnightLight，也\n        就是 Midnight。</span>`
  },
  // Chapter 2
  {
    find: `Hello \${player.username}, viewer discretion advised for dark jokes, nerd jokes, random emoji stream, and spontaneous\n        matter-antimatter annihilation. These may cause symptoms of happiness, actual knowledge gain, depression, no\n        knowledge gain, brainrot, dark humor addiction/mastery, and a slight habit of passing time watching these\n        during speedruns and timewalls.`,
    replace: `你好 \${player.username}，以下内容包含黑色幽默、书呆子笑话、随机表情流和自发的\n        物质-反物质湮灭，敬请注意。这些可能导致幸福、真正学到知识、抑郁、\n        毫无收获、脑残、黑色幽默成瘾/精通，以及在看这些的时候\n        顺便打发速通和时间墙的副作用。`
  },
  // Chapter 3
  {
    find: `The fight between Life and Midnight continues, Life brings forth the power of technology. Through Redstone,\n        he quickly builds his forces via automation and sugarcane farms and launches a suprise attack against Midnight.\n        Midnight was awoken by his followers during the battle, and seeing the destruction Life caused, gave the magic\n        of light to his followers. They casted powerful lasers, quickly melting and burning the robotic army of Life. The\n        plot thickens, when SupersonicSeven, God of all there is and Overlord, comes forth from the 6969 dimension and says....`,
    replace: `Life 和 Midnight 之间的战斗仍在继续，Life 展示了科技的力量。通过红石，\n        他迅速通过自动化和甘蔗农场建立了自己的军队，并对 Midnight 发动了突袭。\n        Midnight 在战斗中被他的追随者唤醒，看到 Life 造成的破坏，将光之魔法\n        赐予了他的追随者。他们施放强大的激光，迅速融化和烧毁了 Life 的机器人军队。\n        剧情变得复杂起来，SupersonicSeven，万物之神兼 Overlord，从第 6969 维度现身并说道……`
  },
  // Chapter 4
  {
    find: `He says: "The fight between you two have to stop, or else the entropy will rise exponentially and eventually kill us all!"`,
    replace: `他说："你们两个必须停止争斗，否则熵将指数级上升，最终会杀死我们所有人！"`
  },
  // Chapter 5
  {
    find: `<span>But then, the Earth crunched, and \${player.username} came. "Don't get me into this, I don't have enough dopamine or\n        brainrot for this," and then used the Galaxy Generator to Endgame-exit.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>\n        "....so..." SupersonicSeven said. "Command us Overlord" Midnight said.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>\n        "Go forth, and cease all fighting, merge your forces and buy as many STDs as possible!" "As you wish Overlord."\n        Life said. The rivalry came to an end, or did it?</span>`,
    replace: `<span>但就在这时，大坍缩了，\${player.username} 出现了。"别把我卷进去，我没有足够的多巴胺或\n        脑残来应付这个，"然后用银河生成器终章退出了。</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>\n        "……所以……" SupersonicSeven 说。"命令我们吧，Overlord" Midnight 说。</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>\n        "去吧，停止一切争斗，合并你们的力量，尽可能多地买 STD！" "遵命，Overlord。"\n        Life 说。恩怨就此了结，还是说……？</span>`
  },
  // Chapter 6
  {
    find: `But what 7 and \${player.username} didn't expect is that as soon as they left, Life pulled out a "Gravitational Singularity"\n        that was being trapped inside a multi-dimensional gravitation force field and throw it at the largest black hole\n        in the universe.`,
    replace: `但 7 和 \${player.username} 没有料到的是，他们一离开，Life 就掏出了一个"引力奇点"，\n        它被困在多重维度引力力场中，然后把它扔向了宇宙中最大的黑洞。`
  },
  // Chapter 7
  {
    find: `The Blackhole, having stayed dormant for so long, suddenly starts to weaken, and then in a flash, the Blackhole\n        explodes. From it's remnants, Slabdrill, the ruler of the 9th dimension comes forth and says, "Life, you have freed\n        me from my prison, you are granted a choice: The 9th dimension, or the power of Gravity?" Life says, "I choose the\n        power of gravity." And it was so, Life obtained the power of gravity and began to grow stronger. Technology, already\n        powerful, became even stronger with proper gravity and soon, Life began reaching the level of Overlord. Overlord came\n        down, and said, "Life, you have dealt with the devil! Cease this blasphemy and forgo your gravitic powers at once!"`,
    replace: `黑洞沉寂了这么久，突然开始衰弱，然后在一道闪光中，黑洞\n        爆炸了。从残骸中，Slabdrill，第九维度的统治者走了出来说："Life，你将\n        我从牢笼中释放，我赐你一个选择：第九维度，还是引力之力？"Life 说："我选择\n        引力之力。"事情就这样成了，Life 获得了引力之力并开始变得更加强大。科技已经很\n        强大，在合适的引力下变得更加强大，很快，Life 开始达到 Overlord 的水平。Overlord 降临\n        说道："Life，你与魔鬼做了交易！立刻停止这亵渎行为，放弃你的引力之力！"`
  },
  // Chapter 8
  {
    find: `But it was too late, Life has already used technology and the gravitational force he obtained from Slabdrill to\n        weaker the walls between all the parallel universe. Life says, "You can't change anything now." Laughing loudly,\n        "All the parellel universe will collapse into a 'Time and Space singularity'." As life speaks, a giant machine came\n        out of nowhere, and fired a shot at where the Blackhole was, onto the double singularity that already existed.\n        (Time and space shattered) Life laughed so hard that he almost choked himself, "I have done it, no one....".\n        As he was speaking, didn't realize that a light that passes through all of time and dimensions, shined on him...`,
    replace: `但为时已晚，Life 已经利用科技和他从 Slabdrill 那里获得的引力之力\n        削弱了所有平行宇宙之间的壁障。Life 说："你什么都改变不了了。"他大声笑着，\n        "所有平行宇宙都将坍缩成一个'时空奇点'。"就在 Life 说话时，一台巨大的机器\n        从不知何处出现，向黑洞所在的位置开了一枪，打在了已经存在的双重奇点上。\n        （时空破碎了）Life 笑得差点呛到自己，"我做到了，没有人……"。\n        就在他说话时，他没有意识到一道穿透所有时间和维度的光照在了他身上……`
  },
  // Chapter 9
  {
    find: `...Midnight had took out his secret weapon, the Multidimensional-light-matter-controller. He directed it onto Life.\n        Life and his creation melted and burned and wailed in agony, but under the pure light, were obliviated from existence.\n        Midnight looked at the mess that was made and vowed that such catastrophic destruction should never take place again.\n        He rebuild space and time with the help of Overlord and \${player.username}, and then sealed the controller in a place with\n        no light. Such that it may be buried forever.`,
    replace: `……Midnight 拿出了他的秘密武器——多维光物质控制器。他将它对准了 Life。\n        Life 和他的造物在痛苦中融化、燃烧和哀嚎，但在纯净的光芒下，他们从存在中被抹去了。\n        Midnight 看着造成的混乱，发誓这种灾难性的破坏永远不再发生。\n        他在 Overlord 和 \${player.username} 的帮助下重建了时空，然后将控制器封印在一个\n        没有光的地方。让它可能被永远埋藏。`
  },
  // Chapter 10
  {
    find: `After the battle, Midnight, Seven and \${player.username} together, using their power to gather Life particle. Those three\n        spread Life all around the universe causing the mortals able to come to life and was later called "The Great Three".\n        But what they didn't know is that, by spreading life around the universe has caused the revival of him. Because, Life\n        and Life particle, are just the same thing...`,
    replace: `战斗结束后，Midnight、Seven 和 \${player.username} 一起，用他们的力量收集 Life 粒子。这三人\n        将 Life 散布到整个宇宙，使凡人得以诞生，后来被称为"伟大的三位"。\n        但他们不知道的是，在宇宙中散布生命导致了他的复活。因为 Life\n        和 Life 粒子，本来就是同一种东西……`
  },
  // Chapter 11
  {
    find: `One thing the Great Three did was to hide their existence, observing mortals throughout eternity. The started small,\n        as cells in the ocean, but very quickly, intelligent beings in the cosmos had sprung forth, making the universe\n        bloom and fill with life. It was a golden age for the universe, even better than before the Big Bang, when the Great\n        Three had rebuild Space and Time. And then, the cataclysm happened. In a blink, all mortals died, and their matter\n        and antimatter alike was gathered into a egg, the egg hatched as soon as it was made, sending a bang throughout the\n        universe. Life came back and said, "Midnight, \${player.username} and Overlord, you will pay." Seeing his rebirth, the\n        Great Three were stunned, they went after him, but were quickly sealed by him using the power of gravity, creating\n        Blackholes around them. "Now" Life said, "The time has come, the secrets of the dimensions, beyond Existence,\n        above the Expanse, even through the Shattered Reality, all are my realm now!" He cackled and brought forth his\n        might and seized and plundered the cosmos, not even letting the Celestials live. He went farther and farther,\n        but soon forgot his origins. In the heart of his reality, the Blackhole he had created to imprison the Great Three\n        slowly shrank, and shrank, and after an eternity, it exploded, what came were not the Three, but one that had been\n        the result when the Three merged into one. Seeing that life had forgotten his roots, this "One", started rapidly\n        sabotaging and stealing Life's powers. Soon, Life started noticing his powers were growing slower, but he attributed\n        them to a timewall. Soon, One found himself on the first layer Life still saw, at this point, Life knew something was\n        going on, he started going back to his origins, by the time the reached the layer One was, he saw the power that had\n        been drained of him. He went back to the original dimensions page and saw that the Blackhole had been collapsed.\n        He burned and raged, "You....stole my power!" He tried to get stronger by using late-game buffs like Meta-Matter\n        dimensions but One used the simplest, the fundamentals. He disabled automation, instantly stopping Life's growth.\n        Next, he enabled Dilation and Pelle Strikes, then entered every Celestial, even the dead ones' broken Realities\n        to add innumerable debuffs. Finally, he initiated the Ultimate Existential removal button "Delete game, mod and\n        all savefiles". With that, Life ceased to exist, every last one of his cells, essence and power dissolved into\n        normal matter and started the cosmos anew. One watched from above.`,
    replace: `伟大的三位做的一件事就是隐藏他们的存在，在整个永恒中观察凡人。他们从微小开始，\n        作为海洋中的细胞，但很快，宇宙中的智慧生命涌现出来，让宇宙\n        绽放并充满生机。这是宇宙的黄金时代，甚至比大爆炸之前更好，当时伟大的\n        三位重建了时空。然后，大灾变发生了。眨眼之间，所有凡人都死了，他们的物质\n        和反物质被收集到一个蛋中，蛋一形成就孵化了，向整个\n        宇宙发出了一声巨响。Life 回来说："Midnight，\${player.username} 和 Overlord，你们要付出代价。"看到他的重生，\n        伟大的三位惊呆了，他们追了上去，但很快被他用引力之力封印，在他们周围创造了\n        黑洞。"现在"Life 说，"时候到了，维度的秘密，超越了存在，\n        超越了广袤，甚至穿过了破碎的现实，现在都是我的领域了！"他狂笑着，展现出他的\n        力量，夺取和掠夺了宇宙，连天界都不放过。他走得越来越远，\n        但很快忘记了自己的起源。在他现实的中心，他创造的用来囚禁伟大的三位的黑洞\n        慢慢缩小，再缩小，经过一个永恒后，它爆炸了，出来的不是三位，而是一个\n        由三位合而为一的结果。看到 Life 已经忘记了自己的根源，这个"一"开始迅速\n        破坏和窃取 Life 的力量。很快，Life 开始注意到他的力量增长变慢了，但他把\n        这归因于时间墙。很快，一发现自己处于 Life 仍能看到的第一层，这时，Life 知道有些\n        不对劲，他开始回到自己的起源，当他到达一所在的层时，他看到了被\n        抽走的力量。他回到原始的维度页面，看到黑洞已经坍缩了。\n        他燃烧着愤怒，"你……偷了我的力量！"他试图通过使用后期增益如元物质\n        维度来变强，但一使用了最简单的方法，基本原理。他禁用了自动化，立即停止了 Life 的增长。\n        接着，他启用了 dilation 和 Pelle 打击，然后进入每个天界，即使是死去的那些的破碎现实\n        来添加无数的减益效果。最后，他启动了终极存在移除按钮"删除游戏、mod 和\n        所有存档"。就这样，Life 不复存在，他的每一个细胞、精华和力量都溶解成\n        了普通物质，重新开始了宇宙。一从上面注视着一切。`
  },
  // Chapter 12
  {
    find: `Life opened his eyes in real life. "Damn it, why do I keep losing, there is just no way I can beat this stage!"`,
    replace: `Life 在现实中睁开了眼睛。"该死，为什么我总是输，根本没有办法打过这一关！"`
  },
  // Chapter 13
  {
    find: `Life went to his bed and tried to sleep, but his anger kept him awake, soon, he thought of a plan. He went to\n        his computer, took all the recent social media posts from SupersonicSeven and Midnight and \${player.username} and used VPN\n        and IP tracking to find thier DNS, after that he cracked their SSL tokens to find their IP addresses, going further,\n        he then used this data to collect all information about them and then, sent this data back with a threat - "let me\n        back, delete your accounts, handover all power." The 3 were stunned at this and communicated together to try and\n        find a plan, soon, they know what to do.`,
    replace: `Life 回到床上试图入睡，但愤怒让他清醒，很快，他想到了一个计划。他走到\n        电脑前，收集了 SupersonicSeven 和 Midnight 和 \${player.username} 所有最近的社交媒体帖子，使用 VPN\n        和 IP 追踪找到了他们的 DNS，之后他破解了他们的 SSL 令牌来找到他们的 IP 地址，更进一步，\n        他用这些数据收集了关于他们的所有信息，然后，将这些数据连同威胁发回去——"让我\n        回来，删除你们的账号，交出所有权力。"三人对此感到震惊，他们沟通在一起试图\n        找到一个计划，很快，他们知道该怎么做了。`
  },
  // Chapter 14
  {
    find: `The 3 decided to fake like they have done it, but actually tracking AP address and try to use things to threaten\n        Life. They fake like Life was able to control all the power, and fake like they weren't on the game, but that's\n        because 7 used his ultimate power of coding to hack the game.`,
    replace: `三人决定假装他们已经照做了，但实际上在追踪 AP 地址并试图用东西来威胁\n        Life。他们假装 Life 能够控制所有的力量，假装他们不在游戏中，但那\n        是因为 7 用他终极的编程之力黑了游戏。`
  },
  // Chapter 15
  {
    find: `Life realised what happened, he decided that the three are better when they are dead, so he concocted a plan to\n        kill them, first, he tapped into their messages and learned that they were meeting up. Then using the the same\n        channel, he impersonated them all and took their savings from the banks and took that money to hire a assassin\n        sent to kill the three... But then, when he saw the assassin, he couldn't believe his eyes; it was Midnight. He\n        and the others had hacked him prior to this and the communication channel he had hacked was a dummy, now, in front\n        of him, Midnight took out a gun, and oofed life, as he turned away, life said one last sentence, "I'll always come\n        back!" Life was going to die soon, but then, he felt himself being lifted and sent into a car, he soon passed out\n        and when he regained consciousness, he realised who saved him - Slabdrill. Slabdrill tended to his wounds,\n        explaining in the meantime that he was once a duo with the trio but was kicked out when he gained too much power,\n        and was trapped for so long because the other 3 had used thier power to subdue him and threaten him in the real world.\n        After Life recovered, he and Slabdrill, who's real name was Slab, decided to take revenge....`,
    replace: `Life 意识到了发生的事情，他决定这三人还是死了比较好，于是他策划了一个\n        杀死他们的计划，首先，他窃听了他们的消息，得知他们要见面。然后使用同一个\n        频道，他冒充了他们所有人，从银行取走了他们的积蓄，用那笔钱雇佣了一个杀手\n        去杀这三个人……但当他看到杀手时，他不敢相信自己的眼睛；那是 Midnight。他\n        和其他人之前已经黑入了他的系统，他黑入的通信频道是个假的，现在，在\n        他面前，Midnight 拿出一把枪，干掉了 Life，当他转身离去时，Life 说了最后一句话，"我总会\n        回来的！"Life 很快就要死了，但随后，他感到自己被抬起并送进了一辆车，他很快昏了过去，\n        当他恢复意识时，他意识到是谁救了他——Slabdrill。Slabdrill 照顾他的伤口，\n        同时解释说他曾经是三人组的搭档，但在他获得太多力量后被踢了出来，\n        被困了这么久是因为其他三人用他们的力量制服了他并在现实世界中威胁他。\n        Life 康复后，他和 Slabdrill——他的真名是 Slab——决定复仇……`
  },
  // Chapter 16
  {
    find: `Life and Slab, traveled all around the world to find all the Celestials that died in the game, and asking them to\n        join the revolution. Even though they had some problems previously, but since now the 3 are getting way too powerful,\n        they have to work together.`,
    replace: `Life 和 Slab 环游世界，寻找所有在游戏中死去的天界，并邀请他们\n        加入革命。虽然他们之前有些矛盾，但既然现在三人变得太强大了，\n        他们必须合作。`
  },
  // Chapter 17
  {
    find: `Soon, they amassed a army of over 3000 Celestials. Their might grew to be frightening, even more than some nations.\n        They decided the best way of elimination was to Mass-surround and kill them using guns. In a week, they all came\n        to the Three's house and poured in like water in a flood, the Three oofed as many as 350 of the Celestials, but were\n        then cornered, at the critical moment, Midnight said to \${player.username}, "NOW!", user pressed a button, and a Magnetic\n        wall surrounded them, and then, a rumble came, and then,the city was vaporized due to a matter-antimatter annihilation.\n        Seeing over the wreckage, they saw one spot of movement. It was Slabdrill, he had gravitic technology and managed to\n        use it to create a anti-gravity zone. The three chased after him and soon caught up with this last survivor.`,
    replace: `很快，他们聚集了一支超过 3000 名天界的军队。他们的力量增长到令人恐惧的地步，甚至超过了一些国家。\n        他们决定最好的消灭方式是大规模包围并用枪杀死他们。一周之内，他们全都来到\n        了三人的房子前，像洪水般涌入，三人干掉了多达 350 名天界，但\n        随后被逼入绝境，在关键时刻，Midnight 对 \${player.username} 说："现在！"用户按下了一个按钮，一道磁性\n        墙包围了他们，然后，传来一声轰鸣，接着，城市因物质-反物质湮灭而蒸发了。\n        俯瞰废墟，他们看到一处动静。那是 Slabdrill，他有引力技术，设法\n        用它创造了一个反重力区。三人追赶他，很快就追上了这个最后的幸存者。`
  },
  // Chapter 18
  {
    find: `Slabdrill know it wasn't the right time to fight the 3 right now just by himself, decided to vanish for sometime\n        and revive as many Celestials as he could and even arranging some of the Ancient Celestials together to together\n        protest against the 3. Slabdrill pulled out the Quantum Teleportation portal Life left him, and teleported away.\n        "Damn it" said 7, "We should have realized all the technology Life have, Slabdrill escaped again!" "It's too late\n        now, we can only try to get as strong as possible before they come back."`,
    replace: `Slabdrill 知道现在不是独自对抗三人的时候，决定消失一段时间\n        并尽可能多地复活天界，甚至组织了一些远古天界一起来\n        反抗三人。Slabdrill 拿出 Life 留给他的量子传送门，传送走了。\n        "该死"7 说，"我们应该意识到 Life 拥有的所有技术，Slabdrill 又逃了！""现在\n        太晚了，我们只能在他们回来之前尽可能变强。"`
  },
  // Chapter 19
  {
    find: `The three decided to first go to McDonalds, after they were filled up, they went ahead and robbed America using\n        the Antimatter they had as a hostage. This soon also caused into them asking other countries for tribute. Then they\n        started a military organization focusing on space and in just 5 years, 5 months and 5 days, they had a Space station\n        capable of holding one hundred thousand. Then they decided Earth was better off dead with Slabdrill in it so they\n        detonated the antimatter and killed all life on Earth. They never noticed a small ball of 10km in radius taking\n        off among the debris as the planet exploded....`,
    replace: `三人决定先去麦当劳，吃饱之后，他们用反物质\n        作为人质去抢劫了美国。这很快也导致他们向其他国家索要进贡。然后他们\n        成立了一个专注于太空的军事组织，仅仅 5 年 5 个月零 5 天，他们就拥有了一个\n        能容纳十万人的空间站。然后他们觉得有 Slabdrill 在的地球还不如死了好，所以\n        引爆了反物质，杀死了地球上所有的生命。他们从未注意到一颗半径 10 公里的小球\n        在行星爆炸时随着碎片升空……`
  },
  // Chapter 20
  {
    find: `The 3, along with the 100 thousand they had left for the stars, in just a 5000 years, they had colonized over\n        500 star systems and came into contact with 5 other species. They had also met a 6th species, called the Llirdbals.\n        They mainly used gravitic technology to create structures to live in and collect resources. One day, the three were\n        on the Human empire's capital world when they discovered an alarm saying that a 9th dimensional Rift came from the\n        Llirdbals's territory, from the Rift, extradimensional beings were entering our universe and quickly stealing all\n        energy and matter(and antimatter). The attack had come, Slabdrill was at the front, cackling "Now this universe\n        will be destroyed! The beings and I have entered a pact, I will ascend to their realm for your life!"`,
    replace: `三人带着剩下的十万人前往星辰，仅仅 5000 年，他们就殖民了\n        500 多个星系，并接触了 5 个其他物种。他们还遇到了第 6 个物种，叫做 Llirdbals。\n        他们主要使用引力技术来建造居住结构和收集资源。有一天，三人\n        在人类帝国的首都星球上发现了一个警报，说一个第九维度的裂缝从\n        Llirdbals 的领地出现，从裂缝中，超维度生物正在进入我们的宇宙，迅速窃取所有\n        能量和物质（以及反物质）。攻击已经来临，Slabdrill 在最前方，狂笑着说"现在这个宇宙\n        将被毁灭！那些生物和我达成了协议，我将升入他们的领域来换取你们的生命！"`
  },
  // Chapter 21
  {
    find: `But even though Slabdrill thought he had surely got them, something unexpected has happened... What he didn't know\n        was that, this was all just a plan the 3 and Life had made. Slabdrill was able to revive Life from the dead but it\n        was all planned out. Life was able to gain all of Slabdrill's trust and knowing exactly what he was doing. Life\n        secretly send all the informations to the three once a month.`,
    replace: `尽管 Slabdrill 以为他肯定能抓住他们，但发生了意想不到的事……他不知道\n        的是，这一切都是三人和 Life 制定的计划。Slabdrill 能够从死亡中复活 Life，但这\n        都是计划好的。Life 能够获得 Slabdrill 所有的信任，并准确知道他在做什么。Life\n        每月秘密将所有信息发送给三人。`
  },
  // Chapter 22
  {
    find: `Life was actually reanimated from the dead by Slabdrill, but during the process, the three had hacked the reanimator,\n        now Life was like a robot that answered to the three while playing the rope of a spy, always monitoring Slabdrill's\n        movements. Slabdrill soon realised some changes in Life's personality but attributed them to some very slight\n        defects in the reanimator. In any case the attack continued....`,
    replace: `Life 实际上是被 Slabdrill 从死亡中复活的，但在此过程中，三人黑入了复活装置，\n        现在 Life 就像一个听从三人命令的机器人，同时扮演间谍的角色，一直监视着 Slabdrill 的\n        行动。Slabdrill 很快注意到了 Life 性格的一些变化，但他把这归因于复活装置中一些非常轻微的\n        缺陷。无论如何，攻击继续了……`
  },
  // Chapter 23
  {
    find: `(The main story pauses, flashback begins)`,
    replace: `（主线故事暂停，闪回开始）`
  },
  // Chapter 24
  {
    find: `Long time back, long long before this big fight. When SupersonicSeven, Life and Midnightlight are still children.\n        They play with each other everyday,until this happened...`,
    replace: `很久以前，在这场大战斗之前的很久很久。当 SupersonicSeven、Life 和 Midnightlight 还是孩子的时候。\n        他们每天都在一起玩耍，直到这件事发生……`
  },
  // Chapter 25
  {
    find: `One day they were playing at the playground when another kid came up to them, his name was \${player.username}. He instantly\n        won over the heart of SupersonicSeven and Midnight, but life was feeling jealous because he never got attention after\n        \${player.username} came. So he devised a plan to regain his popularity and status, and an end to \${player.username}....`,
    replace: `有一天他们在游乐场玩耍时，另一个孩子走了过来，他的名字叫 \${player.username}。他立刻\n        赢得了 SupersonicSeven 和 Midnight 的心，但 Life 感到嫉妒，因为在\n        \${player.username} 来了之后他再也没有得到过关注。所以他制定了一个计划来重新获得他的人气和地位，以及 \${player.username} 的终结……`
  },
  // Chapter 26
  {
    find: `Life kidnapped \${player.username}, and put \${player.username} in the basement of Midnight's house, I mean, who would think of that?\n        In the end, the mot dangerous place is the safest place Afterall. He made sure that \${player.username} would be alive, and is\n        in a place where no one will find.`,
    replace: `Life 绑架了 \${player.username}，把 \${player.username} 关在 Midnight 家的地下室里，我想说，谁能想到呢？\n        最终，最危险的地方就是最安全的地方。他确保 \${player.username} 活着，并且\n        在一个没有人会找到的地方。`
  },
  // Chapter 27
  {
    find: `This went one for a week, the other 2 were getting worked for \${player.username} by now, so they tried searching for him,\n        but to no avail, in the end, they had to stop. Then time went on and after 5 years, Midnight went to the basement\n        to find something when he heard a voice.... Midnight saw \${player.username} and was horrified,he quickly untied and ungaged\n        him as \${player.username} told him the truth. Midnight was terrified at learning on what happened over these 5 years. They\n        were about to go meet up with Seven and confront Life when from a corner a door Midnight never knew about, Life\n        appeared. Life froze up seeing Midnight and \${player.username}, then ran back in the tunnel, the two followed him but soon\n        they reached a fork. They decided to go right but soon found another fork. They realized that Life had a maze of\n        tunnels underground and as probably spying on their every move, soon they found and exit and opened it, and they\n        arrived in a basement, they went out of the basement and realized this was the home of Seven!`,
    replace: `这样过了一个星期，另外两人现在正在为 \${player.username} 操心，所以他们试图寻找他，\n        但徒劳无功，最终，他们不得不放弃。时间继续流逝，5 年后，Midnight 去地下室\n        找东西时听到了一个声音……Midnight 看到 \${player.username} 吓坏了，他迅速解开他的绳索和堵嘴\n        的布，\${player.username} 告诉了他真相。Midnight 得知这 5 年来发生的事情后感到恐惧。他们\n        正要去见 Seven 并当面对质 Life 时，从一个 Midnight 从不知道的角落的门里，Life\n        出现了。Life 看到 Midnight 和 \${player.username} 时愣住了，然后跑回了隧道里，两人追了上去但很快\n        到达了一个岔路口。他们决定往右走但很快又发现了一个岔路口。他们意识到 Life 在地下有一个\n        隧道迷宫，可能在监视他们的每一个行动，很快他们找到了一个出口并打开它，他们\n        到达了一个地下室，他们走出地下室后发现这是 Seven 的家！`
  },
  // Chapter 28
  {
    find: `But they soon realize that the house is empty and 7 was gone! They looked over everywhere but still can't find any\n        hint of where 7 is. What they didn't know is that, 7 is actually a doctor and had already kidnapped Life who got\n        into his house on accident when he was doing illegal experiments.`,
    replace: `但他们很快发现房子是空的，7 不见了！他们到处寻找但仍然找不到\n        7 在哪里的任何线索。他们不知道的是，7 其实是个医生，已经绑架了不小心\n        进入他房子时正在做非法实验的 Life。`
  },
  // Chapter 29
  {
    find: `Life was on a straight jacket and tossed into a guest room where \${player.username} and Midnight found him being opened up\n        by Seven. They convinced Seven to close him back up (after one kidney) and then took him to prison. There Life was\n        imprisoned for kidnapping for 6.9 years. After almost 7 years, Life was released. He tried to find the three but\n        they had long moved out and were unfindable. So he decided to try another route, the favorite game of the group\n        when \${player.username} had not came yet - Antimatter Dimensions.....`,
    replace: `Life 被穿上束缚衣扔进了一间客房，\${player.username} 和 Midnight 发现他正在被\n        Seven 开膛破肚。他们说服 Seven 把他缝回去（切掉一个肾之后），然后把他送进了监狱。Life 因\n        绑架罪被监禁了 6.9 年。将近 7 年后，Life 被释放了。他试图找到三人但\n        他们早已搬走，找不到踪影。所以他决定尝试另一条路，在\n        \${player.username} 还没来之前大家最喜欢的游戏——反物质维度……`
  },
  // Chapter 30
  {
    find: `Life got into the game and realized the game had a huge update! The update that came in 5 hours. It enabled\n        multiplayer mode and leaderboard. Realizing this update will help him on finding the three super easily, Life\n        started his searching journey. during the time when he was trying to find the three in the game, he met many friends,\n        Teresa, Effarig, The Nameless Ones, V, Ra and Lai'tela. They thought it was fun to go on this journey so they\n        went with Life.`,
    replace: `Life 进入游戏后发现游戏有了一次大更新！5 小时后到来的那个更新。它启用了\n        多人模式和排行榜。意识到这个更新能帮他轻松找到三人，Life\n        开始了他的搜索之旅。在他试图在游戏中找到三人的时候，他遇到了很多朋友，\n        Teresa、Effarig、无名者、V、Ra 和 Lai'tela。他们觉得这趟旅程很有趣，所以\n        跟着 Life 一起去了。`
  },
  // Chapter 31
  {
    find: `Life soon encountered the three. Midnight was still 3 layers smaller than the other two so he first targeted him.\n        He used various methods like technology and robots to destroy and bring war to Midnight's followers, who were\n        practicing the mystic arts of light: Klidggd un' Kharrha. This happened for many years until one day, Life found\n        a red looking dust called Redstone......`,
    replace: `Life 很快遇到了三人。Midnight 比另外两人小 3 层，所以他先瞄准了他。\n        他使用各种方法如科技和机器人来摧毁 Midnight 的追随者并给他们带来战争，他们正在\n        修炼光之神秘术：Klidggd un' Kharrha。这样持续了很多年，直到有一天，Life 发现\n        了一种红色的粉末，叫做红石……`
  },
  // Chapter 32
  {
    find: `(Flashback ends, story resumes)`,
    replace: `（闪回结束，故事继续）`
  },
  // Chapter 33
  {
    find: `The commands between the 3 and Slabdrill is fighting inside Life's brain and each trying to make Life permanently\n        be on their side. But what they didn't realize was that when their commands are fighting, Life was able to gain\n        consciousness. Life though, "What happened? Why can't I control my own body? I have to do something!" Life realizes\n        that the situation isn't right and he has to do something. He used his mind to reach his secret weapon... The exit\n        button for the game!`,
    replace: `三人和 Slabdrill 的命令正在 Life 的大脑中战斗，每方都试图让 Life 永久\n        站在他们那边。但他们没有意识到的是，当他们的命令在争斗时，Life 获得了\n        意识。Life 想，"发生了什么？为什么我无法控制自己的身体？我必须做点什么！"Life 意识到\n        情况不对，他必须做点什么。他用他的意识去够他的秘密武器……游戏的退出\n        按钮！`
  },
  // Chapter 34
  {
    find: `<span>Life wakes up on a hospital bed, soon, a doctor comes rushing to him.</span>&nbsp;&nbsp;&nbsp;\n        <span style='color: yellow'>You woke up! You were in a coma after 7 yeeted you 5 times on the head.</span>&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Yeeted me on the head? What for?</span>&nbsp;&nbsp;&nbsp;&nbsp;\n        <span style='color: yellow'>Cuz u ate the 69th dimension and 7 got mad so he made a yeet stick with Midnight's\n        leg which he had amputated cuz he was asking for XP too much.|]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;<span>Gee whiz! That makes total sense, all my questions are answered now!</span>`,
    replace: `<span>Life 在医院的病床上醒来，很快，一个医生冲了过来。</span>&nbsp;&nbsp;&nbsp;\n        <span style='color: yellow'>你醒了！你昏迷了，因为 7 在你头上扔了 5 次。</span>&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>在我头上扔？为什么？</span>&nbsp;&nbsp;&nbsp;&nbsp;\n        <span style='color: yellow'>因为你吃了第 69 维度，7 生气了，所以他用 Midnight 的\n        腿做了一根扔棍，那条腿因为他要 XP 要得太多被截肢了。|]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;<span>天哪！这完全说得通，我所有的问题都有答案了！</span>`
  },
  // Chapter 35
  {
    find: `(End of main story, second story begins)`,
    replace: `（主线故事结束，第二个故事开始）`
  },
  // Chapter 36
  {
    find: `Once upon a time, Midnight slipped on a banana peel.The banana was made of matter, which caused his leg to suffer\n        a serious injury and the surrounding 100 mile radius to turn into a crater. He was rushed to the ER, and need\n        1.79e308 antimatter particles. To do this, his friend Seven created a way for virtual particle to become real,\n        and in doing so, created a program that did this, he was thinking of a name when....`,
    replace: `从前，Midnight 踩到了香蕉皮滑倒了。香蕉是由物质组成的，导致他的腿受到了\n        严重的伤害，周围 100 英里的范围变成了一个陨石坑。他被紧急送往急诊室，需要\n        1.79e308 个反物质粒子。为此，他的朋友 Seven 创造了一种将虚拟粒子变成真实粒子的方法，\n        在此过程中，他创造了一个程序来做这件事，他正在想一个名字时……`
  },
  // Chapter 37
  {
    find: `Life walks in with a spoon of neutron star that is being kept inside a magnetic field device(MFD). Life said,\n        "Hey 7, see if the neutron star could help, since it's not easy to turn imaginary stuff into real life." 7 grabbed\n        the MFD with the neutron star in it, and thought of an idea...`,
    replace: `Life 拿着一勺中子星走了进来，中子星被保存在磁场装置（MFD）中。Life 说，\n        "嘿 7，看看中子星能不能帮忙，把想象的东西变成现实可不容易。"7 拿\n        了装着中子星的 MFD，想到了一个主意……`
  },
  // Chapter 38
  {
    find: `<span>He turned off the MFD. Instantly, They both died due to being vaporized and ionized by the heat of 10000000°C\n        and the weight of the Himalayas. After they respawned, Life said, "OK I got an idea, Hevi". After that, Life\n        brought a Nona Vector Foil. It compressed 9-dimensional spacetime into 3D space via gravity. Seven manipulated\n        the Nona Vector Foil into a pellet. "Pellet....pelle...." an idea occurred to him. He announced to his world\n        of just his 2 friends "Now, I am rechristerned as Hevipelle, creator of all - Overlord".</span>&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: blue'>Woooo!</span>&nbsp;<span style='color: cyan'>\n        Noice.</span>`,
    replace: `<span>他关掉了 MFD。瞬间，他们两人都因 10000000°C 的高温和\n        喜马拉雅山的重量而被蒸发和电离致死。重生后，Life 说，"好了，我有个主意，Hevi"。之后，Life\n        拿来了一个诺纳向量箔。它通过引力将 9 维时空压缩成 3D 空间。Seven 将\n        诺纳向量箔操纵成一粒药丸。"药丸……pelle……"他想到了一个主意。他向他的世界\n        里仅有的 2 个朋友宣布"现在，我改名为 Hevipelle，万物的创造者——Overlord"。</span>&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='color: blue'>哇哦！</span>&nbsp;<span style='color: cyan'>\n        不错。</span>`
  },
  // Chapter 39
  {
    find: `Hevipelle has taken control over everything, including 7 who was sharing the same body as him. "I...have now taken\n        control over the entire universe..." Overlord said. Life realized what a mistake he has made, Hevi, now Hevipelle,\n        is becoming way too powerful, so powerful that no one can compete with his power in this entire universe... "Hevi,\n        you have stay sane! You can't be controlled by this power!" Life shouts. But before he could do anything, the\n        Overlord is gone.`,
    replace: `Hevipelle 已经控制了一切，包括与他共享同一具身体的 7。"我……现在已经\n        控制了整个宇宙……"Overlord 说。Life 意识到他犯了一个多大的错误，Hevi，现在是 Hevipelle，\n        变得太强大了，强大到在这个宇宙中没有人能与他匹敌……"Hevi，\n        你要保持理智！你不能被这种力量控制！"Life 喊道。但他还来不及做什么，\n        Overlord 就消失了。`
  },
  // Chapter 40
  {
    find: `<span style='color: blue'>We must do something. I have an idea! Let's create a third person within him, cuz\n        democracy babyyyy! |]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>And it was so. They jumped Hevi when he was creating\n        some Urine dimensions and added a third personality called Hyperhasty Hepta inside him. Now "Hevi" was Hevipelle,\n        SupersonicSeven and HyperHasty hepta in an all in one combo!</span>&nbsp;&nbsp;<span>Seven and hepta via the\n        power of democracy removed Hevi from his mind, who ran away using tesseract. They then merged into one person\n        now called Supersonic Hepta, but then MidnightLight said nah just be 7 so he went back to SupersonicSeven.`,
    replace: `<span style='color: blue'>我们必须做点什么。我有个主意！让他在体内创造第三个人，因为\n        民主万岁宝贝！|]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>事情就这样成了。他们在 Hevi 创造\n        一些尿液维度时跳了他，在他体内加入了第三个叫做 Hyperhasty Hepta 的人格。现在"Hevi"是 Hevipelle、\n        SupersonicSeven 和 HyperHasty hepta 的三合一组合！</span>&nbsp;&nbsp;<span>Seven 和 hepta 通过\n        民主之力将 Hevi 从他的意识中移除，Hevi 用超立方体逃跑了。然后他们合为一人\n        现在叫 Supersonic Hepta，但 MidnightLight 说算了还是做 7 吧，所以他又变回了 SupersonicSeven。`
  },
  // Chapter 41
  {
    find: `While all of these are happening, nobody noticed, but outside of the universe, ㊙️ has casted ㊙️'s vision upon\n        this universe. ㊙️'s power is slowly eating it's way through the shields of the universe...`,
    replace: `当这一切发生的时候，没有人注意到，在宇宙之外，㊙️已将㊙️的视线投向了\n        这个宇宙。㊙️的力量正在慢慢吞噬宇宙的护盾……`
  },
  // Chapter 42
  {
    find: `(End of the story for now)`,
    replace: `（故事暂告一段落）`
  },
];

let replaced = 0;
let notFound = [];

for (const { find, replace } of replacements) {
  if (content.includes(find)) {
    content = content.replace(find, replace);
    replaced++;
  } else {
    notFound.push(find.substring(0, 60));
  }
}

// Restore CRLF line endings before writing
content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(newsPath, content, 'utf8');
console.log('Replaced:', replaced);
console.log('Not found:', notFound.length);
notFound.forEach(s => console.log('  NF:', s));
