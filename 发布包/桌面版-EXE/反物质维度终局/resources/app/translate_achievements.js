const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'core', 'secret-formula', 'achievements', 'normal-achievements.js');

let content = fs.readFileSync(filepath, 'utf-8');

// We'll use a more robust approach: match name/description/reward fields
// and translate the string values

const translations = [
  // Ach ID 11
  ['"You gotta start somewhere"', '"万物伊始"'],
  ['"Buy a 1st Antimatter Dimension."', '"购买第一个反物质维度。"'],
  ['"Your Achievement multiplier to the 1st Antimatter Dimension is squared."', '"你对第一反物质维度的成就倍率被平方。"'],
  
  // Ach ID 12
  ['"100 antimatter is a lot"', '"微末之数亦为巨"'],
  ['"Buy a 2nd Antimatter Dimension."', '"购买第二个反物质维度。"'],
  
  // Ach ID 13
  ['"Half life 3 CONFIRMED"', '"半衰期三已验"'],
  ['"Buy a 3rd Antimatter Dimension."', '"购买第三个反物质维度。"'],
  
  // Ach ID 14
  ['"L4D: Left 4 Dimensions"', '"四维之役"'],
  ['"Buy a 4th Antimatter Dimension."', '"购买第四个反物质维度。"'],
  
  // Ach ID 15
  ['"5 Dimension Antimatter Punch"', '"五维一击"'],
  ['"Buy a 5th Antimatter Dimension."', '"购买第五个反物质维度。"'],
  
  // Ach ID 16
  ['"We couldn\'t afford 9"', '"九亦足矣"'],
  ['"Buy a 6th Antimatter Dimension."', '"购买第六个反物质维度。"'],
  
  // Ach ID 17
  ['"Not a luck related achievement"', '"非关幸运"'],
  ['"Buy a 7th Antimatter Dimension."', '"购买第七个反物质维度。"'],
  
  // Ach ID 18
  ['"90 degrees to infinity"', '"零度至无限"'],
  ['"Buy an 8th Antimatter Dimension."', '"购买第八个反物质维度。"'],
  
  // Ach ID 21
  ['"To infinity!"', '"向无限进发！"'],
  
  // Ach ID 22
  ['"FAKE NEWS!"', '"虚妄之谈！"'],
  
  // Ach ID 23
  ['"The 9th Dimension is a lie"', '"第九维度皆是虚妄"'],
  
  // Ach ID 24
  ['"Antimatter Apocalypse"', '"反物质末日"'],
  
  // Ach ID 25
  ['"Boosting to the max"', '"维升至极"'],
  
  // Ach ID 26
  ['"You got past The Big Wall"', '"逾越巨壁"'],
  ['"Buy an Antimatter Galaxy."', '"购买一个反物质星系。"'],
  
  // Ach ID 27
  ['"Double Galaxy"', '"双重星系"'],
  
  // Ach ID 28
  ['"There\'s no point in doing that..."', '"徒劳无功之举……"'],
  
  // Ach ID 31
  ['"I forgot to nerf that"', '"忘削其力"'],
  
  // Ach ID 32
  ['"The Gods are pleased"', '"诸神欣悦"'],
  
  // Ach ID 33
  ['"That\'s a lot of infinites"', '"无限之数甚矣"'],
  
  // Ach ID 34
  ['"You didn\'t need it anyway"', '"本无所用"'],
  
  // Ach ID 35
  ['"Don\'t you dare sleep"', '"勿敢眠"'],
  
  // Ach ID 36
  ['"Claustrophobic"', '"幽闭之惧"'],
  
  // Ach ID 37
  ['"That\'s FAST!"', '"迅捷如斯！"'],
  
  // Ach ID 38
  ['"I don\'t believe in Gods"', '"吾不信神"'],
  
  // Ach ID 41
  ['"No DLC required"', '"无需DLC"'],
  
  // Ach ID 42
  ['"Super Sanic"', '"疾速索尼克"'],
  
  // Ach ID 43
  ['"How the antitables have turned.."', '"反表之变.."'],
  
  // Ach ID 44
  ['"Over in 30 Seconds"', '"三十秒之终"'],
  
  // Ach ID 45
  ['"Faster than a potato"', '"速逾薯步"'],
  
  // Ach ID 46
  ['"Multidimensional"', '"多维并行"'],
  
  // Ach ID 47
  ['"Daredevil"', '"铤而走险"'],
  
  // Ach ID 48
  ['"Antichallenged"', '"反挑战"'],
  
  // Ach ID 51
  ['"Limit Break"', '"破限"'],
  ['"Break Infinity."', '"破碎无限。"'],
  
  // Ach ID 52
  ['"Age of Automation"', '"自动时代"'],
  ['"Max the interval for Antimatter Dimension and Tickspeed upgrade autobuyers."', '"将反物质维度与速度升级自动购买的间隔调至最大。"'],
  
  // Ach ID 53
  ['"Definitely not worth it"', '"得不偿失"'],
  ['"Max the intervals for all normal autobuyers."', '"将所有常规自动购买的间隔调至最大。"'],
  
  // Ach ID 54
  ['"That\'s FASTER!"', '"迅捷如斯！"'],
  
  // Ach ID 55
  ['"Forever isn\'t that long"', '"永恒几何"'],
  
  // Ach ID 56
  ['"Many Deaths"', '"殒落数次"'],
  
  // Ach ID 57
  ['"Gift from the Gods"', '"天赐神恩"'],
  
  // Ach ID 58
  ['"This is fine."', '"此亦无碍。"'],
  
  // Ach ID 61
  ['"Bulked Up"', '"批量倍增"'],
  ['"Dimension Autobuyer bulks are unlimited."', '"维度自动购买批量不限。"'],
  
  // Ach ID 62
  ['"Oh, hey... You\'re still here?"', '"哦……你还在此处？"'],
  
  // Ach ID 63
  ['"A new beginning"', '"新的开端"'],
  ['"Begin generation of Infinity Power."', '"开始产生无限之力。"'],
  
  // Ach ID 64
  ['"Zero Deaths"', '"零殒"'],
  ['"Get to Infinity without Dimension Boosts or Antimatter Galaxies while in a Normal Challenge."', '"在常规挑战中，不使用维度跃升或反物质星系达成无限。"'],
  
  // Ach ID 65
  ['"Not-so-challenging"', '"虚名之 challenge"'],
  
  // Ach ID 66
  ['"Faster than a squared potato"', '"速逾薯方"'],
  
  // Ach ID 67
  ['"Infinitely Challenging"', '"无限挑战"'],
  ['"Complete an Infinity Challenge."', '"完成一个无限挑战。"'],
  
  // Ach ID 68
  ['"You did this again just for the achievement right?"', '"再战只为成就乎？"'],
  
  // Ach ID 71
  ['"ERROR 909: Dimension not found"', '"错误909：维度未觅"'],
  
  // Ach ID 72
  ['"Can\'t hold all these infinities"', '"无限难承"'],
  
  // Ach ID 73
  ['"THIS ACHIEVEMENT DOESN\'T EXIST"', '"此成就本不存在"'],
  
  // Ach ID 74
  ['"Not a second lost"', '"分秒必争"'],
  
  // Ach ID 75
  ['"NEW DIMENSIONS???"', '"新维度降临？？？"'],
  ['"Unlock the 4th Infinity Dimension."', '"解锁第四无限维度。"'],
  ['"Your Achievement bonus affects Infinity Dimensions."', '"你的成就加成影响无限维度。"'],
  
  // Ach ID 76
  ['"One for each dimension"', '"每维其一"'],
  
  // Ach ID 77
  ['"1 Million is a lot"', '"百万亦巨"'],
  
  // Ach ID 78
  ['"Blink of an eye"', '"转瞬之间"'],
  
  // Ach ID 81
  ['"Game Design Is My Passion"', '"设计之热"'],
  
  // Ach ID 82
  ['"Anti-antichallenged"', '"反-反挑战"'],
  
  // Ach ID 83
  ['"YOU CAN GET 50 GALAXIES???"', '"汝能得五十星系？！"'],
  
  // Ach ID 84
  ['"I got a few to spare"', '"略有富余"'],
  
  // Ach ID 85
  ['"ALL YOUR IP ARE BELONG TO US"', '"无量点尽归吾属"'],
  
  // Ach ID 86
  ['"Do you even bend time bro?"', '"汝弯曲时间乎？"'],
  
  // Ach ID 87
  ['"2 MILLION INFINITIES"', '"二百万无限"'],
  
  // Ach ID 88
  ['"Yet another infinity reference"', '"又一无限之典"'],
  
  // Ach ID 91
  ['"Ludicrous Speed"', '"极速绝伦"'],
  
  // Ach ID 92
  ['"I brake for NOBODY!"', '"无人可挡！"'],
  
  // Ach ID 93
  ['"MAXIMUM OVERDRIVE"', '"极限过载"'],
  
  // Ach ID 94
  ['"4.3333 minutes of Infinity"', '"四分三之无限"'],
  
  // Ach ID 95
  ['"Is this safe?"', '"此安全乎？"'],
  
  // Ach ID 96
  ['"Time is relative"', '"时间相对"'],
  ['"Go Eternal."', '"进行永恒。"'],
  
  // Ach ID 97
  ['"Like jumping on a lego"', '"踏石之跃"'],
  
  // Ach ID 98
  ['"0 degrees from Infinity"', '"离无限零度"'],
  ['"Unlock the 8th Infinity Dimension."', '"解锁第八无限维度。"'],
  
  // Ach ID 101
  ['"8 nobody got time for that"', '"第八维度无人有暇"'],
  ['"Eternity without buying Antimatter Dimensions 1-7."', '"不购买反物质维度一至七进行永恒。"'],
  
  // Ach ID 102
  ['"This mile took an eternity"', '"此路漫漫若永恒"'],
  ['"Get all Eternity milestones."', '"达成所有永恒里程碑。"'],
  
  // Ach ID 103
  ['"Tätä saavutusta ei ole olemassa II"', '"此成就本不存在 II"'],
  
  // Ach ID 104
  ['"That wasn\'t an eternity"', '"此非永恒"'],
  
  // Ach ID 105
  ['"Infinite Time"', '"无限时间"'],
  ['"Time Dimensions gain a multiplier based on tickspeed."', '"时间维度基于tick速度获得倍率。"'],
  
  // Ach ID 106
  ['"The swarm"', '"蜂拥而至"'],
  
  // Ach ID 107
  ['"Do you really need a guide for this?"', '"岂需指引？"'],
  
  // Ach ID 108
  ['"We COULD afford 9"', '"九亦能承"'],
  
  // Ach ID 111
  ['"Yo dawg, I heard you liked infinities..."', '"喜闻君爱无限……"'],
  ['"Your antimatter doesn\'t reset on Dimension Boosts or Antimatter Galaxies."', '"反物质不因维度跃升或反物质星系而重置。"'],
  
  // Ach ID 112
  ['"Never again"', '"永不再来"'],
  
  // Ach ID 113
  ['"Eternities are the new infinity"', '"永恒即新无限"'],
  
  // Ach ID 114
  ['"You\'re a mistake"', '"汝为谬误"'],
  ['"Fail an Eternity Challenge."', '"在永恒挑战中失败。"'],
  ['"A fading sense of accomplishment."', '"成就感渐渐消散。"'],
  
  // Ach ID 115
  ['"I wish I had gotten 7 eternities"', '"愿得七永恒"'],
  ['"Start an Infinity Challenge inside an Eternity Challenge."', '"在永恒挑战中启动无限挑战。"'],
  
  // Ach ID 116
  ['"Do I really need to infinity"', '"岂必无限"'],
  ['"Multiplier to Infinity Points based on Infinities."', '"基于无限数的无量点倍率。"'],
  
  // Ach ID 117
  ['"Costco sells Dimboosts now!"', '"量贩维度跃升！"'],
  
  // Ach ID 118
  ['"IT\'S OVER 9000"', '"逾九千"'],
  
  // Ach ID 121
  ['"Can you get infinite IP?"', '"能得无量点无限乎？"'],
  
  // Ach ID 122
  ['"You\'re already dead."', '"汝已死矣。"'],
  ['"Eternity without buying Antimatter Dimensions 2-8."', '"不购买反物质维度二至八进行永恒。"'],
  
  // Ach ID 123
  ['"5 more eternities until the update"', '"五永恒以待更新"'],
  
  // Ach ID 124
  ['"Long lasting relationship"', '"持久之契"'],
  
  // Ach ID 125
  ['"Like feasting on a behind"', '"享食其后"'],
  ['"Infinity Point multiplier based on time spent this Infinity."', '"基于本次无限所耗时间的无量点倍率。"'],
  
  // Ach ID 126
  ['"Popular music"', '"流行之乐"'],
  
  // Ach ID 127
  ['"But I wanted another prestige layer..."', '"别求新阶……"'],
  
  // Ach ID 128
  ['"What do I have to do to get rid of you"', '"如何方能去汝"'],
  ['"Time Dimensions are multiplied by the number of Time Studies you have."', '"时间维度乘以你拥有的时间研究数。"'],
  
  // Ach ID 131
  ['"No ethical consumption"', '"无有操守"'],
  
  // Ach ID 132
  ['"Unique snowflakes"', '"独此一片"'],
  
  // Ach ID 133
  ['"I never liked this infinity stuff anyway"', '"本不喜此无限之事"'],
  
  // Ach ID 134
  ['"When will it be enough?"', '"何时方足？"'],
  
  // Ach ID 135
  ['"Faster than a potato^286078"', '"速逾薯之幂"'],
  
  // Ach ID 136
  ['"I told you already, time is relative"', '"已告汝，时间相对"'],
  ['"Dilate time."', '"延时间。"'],
  
  // Ach ID 137
  ['"Now you\'re thinking with dilation!"', '"今以延时间思维！"'],
  
  // Ach ID 138
  ['"This is what I have to do to get rid of you."', '"此乃去汝之法。"'],
  
  // Ach ID 141
  ['"Snap back to reality"', '"回到真境"'],
  ['"Make a new Reality."', '"创造新真境。"'],
  
  // Ach ID 142
  ['"How does this work?"', '"此作何用？"'],
  ['"Unlock the automator."', '"解锁自动化装置。"'],
  
  // Ach ID 143
  ['"Yo dawg, I heard you liked reskins..."', '"喜闻君爱翻新……"'],
  
  // Ach ID 144
  ['"Is this an Interstellar reference?"', '"此乃星际之典乎？"'],
  ['"Unlock the Black Hole."', '"解锁黑洞。"'],
  
  // Ach ID 145
  ['"Are you sure these are the right way around?"', '"此方向无误乎？"'],
  
  // Ach ID 146
  ['"Perks of living"', '"生之嘉赏"'],
  ['"Have all Perks bought."', '"购得所有天赋。"'],
  ['"+', '"+"'],
  ['" Glyph rarity."', '" 至符文稀有度。"'],
  
  // Ach ID 147
  ['"Master of Reality"', '"真境之主"'],
  ['"Have all Reality upgrades bought."', '"购得所有真境升级。"'],
  ['"Unlock Teresa, the Celestial of Reality."', '"解锁真境之天体——特蕾莎。"'],
  
  // Ach ID 148
  ['"Royal flush"', '"同花顺"'],
  ['"Reality with one of each basic Glyph type."', '"以每种基础符文各一进行真境。"'],
  ['"Gained Glyph level is increased by number of distinct Glyph types equipped."', '"所得符文等级随已装备不同符文类型数增加。"'],
  
  // Ach ID 151
  ['"You really didn\'t need it anyway"', '"本无所用"'],
  ['"Unlock V, the Celestial of Achievements."', '"解锁成就之天体——V。"'],
  
  // Ach ID 152
  ['"Y\'all got any more of them Glyphs?"', '"还有符文否？"'],
  
  // Ach ID 153
  ['"More like \"reallydoesn\'tmatter\""', '"实无关紧要"'],
  ['"Reality without producing antimatter."', '"不产生反物质进行真境。"'],
  
  // Ach ID 154
  ['"I am speed"', '"我即速度"'],
  
  // Ach ID 155
  ['"Achievement #15983"', '"成就第一五九八三"'],
  
  // Ach ID 156
  ['"College Dropout"', '"大学辍学"'],
  ['"Reality without buying Time Theorems."', '"不购入时间定理进行真境。"'],
  
  // Ach ID 157
  ['"It\'s super effective!"', '"此效甚著！"'],
  
  // Ach ID 158
  ['"Bruh, are you like, inside the hole?"', '"汝在穴中乎？"'],
  ['"Make both Black Holes permanent."', '"使两个黑洞永久化。"'],
  
  // Ach ID 161
  ['"that\'s where you\'re wrong kiddo"', '"汝误矣，童子"'],
  
  // Ach ID 162
  ['"Reinstalled the game and rejoined the server"', '"重装重连"'],
  ['"Have every Time Study at once."', '"同时拥有所有时间研究。"'],
  
  // Ach ID 163
  ['"Actually, super easy! Barely an inconvenience!"', '"实乃易事！"'],
  
  // Ach ID 164
  ['"Infinity times two"', '"无限倍二"'],
  
  // Ach ID 165
  ['"Perfectly balanced"', '"完美平衡"'],
  ['"Unlock optimal automatic Glyph level factor adjustment."', '"解锁最佳自动符文等级因子调整。"'],
  
  // Ach ID 166
  ['"Nicenice."', '"好好。"'],
  
  // Ach ID 167
  ['"Mr. Layer? Sorry, you\'re not on the list"', '"层先生？汝不在榜"'],
  ['"Gain more Reality Machines based on your current Reality Machines."', '"基于当前真境机器获得更多真境机器。"'],
  
  // Ach ID 168
  ['"Woah, we\'re halfway there"', '"哇，已及半途"'],
  
  // Ach ID 171
  ['"The god is delighted"', '"神大悦"'],
  ['"Sacrifice every sacrificable Glyph type at least once."', '"对每种可献祭符文至少献祭一次。"'],
  
  // Ach ID 172
  ['"Hitchhiker\'s Guide to Reality"', '"真境搭车指南"'],
  
  // Ach ID 173
  ['"Cet accomplissement n\'existe pas III"', '"此成就本不存在 III"'],
  
  // Ach ID 174
  ['"Don\'t you already have two of these?"', '"汝不已有二？"'],
  ['"Get a Singularity."', '"得一奇点。"'],
  
  // Ach ID 175
  ['"The First Antihistorian"', '"第一反史学家"'],
  
  // Ach ID 176
  ['"Mom counted to 3"', '"母数至三"'],
  ['"Annihilate your Dark Matter Dimensions."', '"湮灭暗物质维度。"'],
  
  // Ach ID 177
  ['"This mile took a celestial"', '"此路需一天体"'],
  ['"Complete all Singularity Milestones in the first six rows at least once."', '"完成前六行所有奇点里程碑至少一次。"'],
  
  // Ach ID 178
  ['"Destroyer of Worlds"', '"世界毁灭者"'],
  
  // Ach ID 181
  ['"Antimatter Dimensions Eternal"', '"反物质维度永恒"'],
  ['"Doom your Reality."', '"毁灭汝之真境。"'],
  
  // Ach ID 182
  ['"One more time"', '"再一次"'],
  ['"Permanently gain back all Antimatter Dimension autobuyers."', '"永久恢复所有反物质维度自动购买。"'],
  
  // Ach ID 183
  ['"Déjà vOoM"', '"既视感"'],
  ['"Complete Infinity Challenge 5 while Doomed."', '"毁灭中完成无限挑战五。"'],
  
  // Ach ID 184
  ['"You\'re out!"', '"汝出局！"'],
  ['"Encounter the third Pelle Strike."', '"遭遇第三佩勒之击。"'],
  
  // Ach ID 185
  ['"Four score and seven years ago"', '"昔者七年之前"'],
  ['"Encounter the fourth Pelle Strike."', '"遭遇第四佩勒之击。"'],
  
  // Ach ID 186
  ['"An unhealthy obsession"', '"痴迷不悟"'],
  
  // Ach ID 187
  ['"The One with Dilated Time"', '"延时间之章"'],
  ['"Unlock Dilation while Doomed."', '"毁灭中解锁延时间。"'],
  
  // Ach ID 188
  ['"The End..."', '"终结……"'],
  ['"Escape the Doomed Reality."', '"逃离毁灭真境。"'],
  
  // Ach ID 191
  ['"...For Now"', '"……暂此"'],
  ['"Purchase a 1st Dimension in Run 2."', '"第二轮购入第一维度。"'],
  
  // Ach ID 192
  ['"Destiny"', '"宿命"'],
  ['"Doom Your Reality in Run 2."', '"第二轮毁灭汝之真境。"'],
  
  // Ach ID 193
  ['"Unstoppable"', '"势不可挡"'],
  ['"Beat Doom in Run 2."', '"第二轮击败毁灭。"'],
  
  // Ach ID 194
  ['"TIME. IS. RELATIVE."', '"时间。乃。相对。"'],
  ['"Break Eternity."', '"破碎永恒。"'],
  
  // Ach ID 195
  ['"System Error"', '"系统错误"'],
  ['"Endgame in under an hour."', '"一小时内完成终局。"'],
  
  // Ach ID 196
  ['"At Long Last"', '"终至"'],
  ['"Regain all Achievements in Pelle."', '"在佩勒中重获所有成就。"'],
  
  // Ach ID 197
  ['"Wait. That\'s illegal."', '"此乃非法。"'],
  
  // Ach ID 198
  ['"...eons stacked on eons stacked on..."', '"……亿万年复亿万年……"'],
  
  // Ach ID 201
  ['"A Newer Beginning"', '"新之开端"'],
  ['"Begin generation of Galactic Power."', '"开始产生银河之力。"'],
  
  // Ach ID 202
  ['"Reinstalled the game and rejoined the server... again"', '"重装重连……再一次"'],
  ['"Have every Endgame Mastery at once."', '"同时拥有所有终局精通。"'],
  
  // Ach ID 203
  ['"Faster than a dilated potato"', '"速逾延时间之薯"'],
  
  // Ach ID 204
  ['"Hard Reset"', '"硬核重置"'],
  ['"Disable all Pelle Nerfs."', '"禁用所有佩勒削弱。"'],
  
  // Ach ID 205
  ['"Look to the Stars"', '"仰望星辰"'],
  ['"Enter the Ethereal."', '"进入以太。"'],
  
  // Ach ID 206
  ['"Full Control of the Dark"', '"执暗之权"'],
  ['"Purchase the 8th Dark Matter Dimension."', '"购入第八暗物质维度。"'],
  
  // Ach ID 207
  ['"Gone..."', '"逝去……"'],
  ['"Destroy Pelle."', '"毁灭佩勒。"'],
  ['"Boost Celestial Point Gain."', '"提升天体点获取。"'],
  
  // Ach ID 208
  ['"...But Not Forgotten"', '"……然未忘怀"'],
  
  // Ach ID 211
  ['"Mistake?"', '"谬误？"'],
  
  // Ach ID 212
  ['"The Dark Crunch"', '"暗之坍缩"'],
  
  // Ach ID 213
  ['"Never Gonna Stop"', '"永不止息"'],
  
  // Ach ID 214
  ['"IT WILL NEVER BE ENOUGH."', '"永无餍足。"'],
  
  // Ach ID 215
  ['"Domain Error"', '"域错误"'],
  
  // Ach ID 216
  ['"Este logro no existe IV"', '"此成就本不存在 IV"'],
  
  // Ach ID 217
  ['"Why are we still here..."', '"为何犹在……"'],
  
  // Ach ID 218
  ['"...just to suffer?"', '"……徒受此苦？"'],
  
  // Ach ID 221
  ['"Light"', '"光"'],
  ['"Defeat Alpha."', '"击败阿尔法。"'],
  
  // Ach ID 222
  ['"Time is absolute"', '"时间绝对"'],
  
  // Ach ID 223
  ['"Power! Unlimited Power!"', '"力！无限之力！"'],
  
  // Ach ID 224
  ['"Destroyer of Universes"', '"宇宙毁灭者"'],
  
  // Ach ID 225
  ['"299792458m/s"', '"光速"'],
  ['"Uncap Celestial Matter."', '"解锁天体物质上限。"'],
  
  // Ach ID 226
  ['"Thirty thousand degrees"', '"三万度"'],
  ['"Unlock Stars."', '"解锁星辰。"'],
  
  // Ach ID 227
  ['"How do these work???"', '"此作何用？？？"'],
  ['"Obtain a Penteract."', '"获得五维超立方。"'],
  ['"Unlock Effarig\'s second shop."', '"解锁埃法里格之第二商店。"'],
  
  // Ach ID 228
  ['"Look how far we\'ve come"', '"回顾来路"'],
  
  // Ach ID 231
  ['"Grandmastery"', '"至极大师"'],
  
  // Ach ID 232
  ['"Millenium of peace"', '"千年太平"'],
  
  // Ach ID 233
  ['"End of an era"', '"时代终结"'],
  ['"Purchase all the Break Eternity Upgrades."', '"购入所有破永恒升级。"'],
  
  // Ach ID 234
  ['"The One with Celestial Time"', '"天体时间之章"'],
  ['"Perform a Celestial Eternity."', '"进行一次天体永恒。"'],
  
  // Ach ID 235
  ['"Never-ending Darkness"', '"无尽黑暗"'],
  
  // Ach ID 236
  ['"Supernova"', '"超新星"'],
  
  // Ach ID 237
  ['"Hypernova"', '"极超新星"'],
  ['"Unlock all star types."', '"解锁所有星辰类型。"'],
  
  // Ach ID 238
  ['"Limits of Reality"', '"真境之限"'],
  
  // Misc descriptions
  ['"Buy an Antimatter Galaxy without Dimensional Sacrificing."', '"不进行维度献祭而购买反物质星系。"'],
  ['"Encounter the third Pelle Strike."', '"遭遇第三佩勒之击。"'],
  ['"Encounter the fourth Pelle Strike."', '"遭遇第四佩勒之击。"'],
];

// Apply translations
let translated = 0;
let notFound = 0;

for (const [en, zh] of translations) {
  if (content.includes(en)) {
    content = content.replace(en, zh);
    translated++;
  } else {
    notFound++;
  }
}

fs.writeFileSync(filepath, content, 'utf-8');

console.log(`Translated: ${translated}`);
console.log(`Not found: ${notFound}`);
console.log(`File saved to: ${filepath}`);