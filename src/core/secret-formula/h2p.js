import { credits } from "@/core/secret-formula/credits";

export const h2p = {
  /**
   * @template
   * {
   *  @property {String} name   Internal name for the tab entry
   *  @property {String} alias  Display name for the tab; if not present, will use the internal name
   *  @property {Number} id     Unique ID for each entry (generated in-game, not explicitly stated)
   *  @property {function: @return String} info         Text body of information for the entry
   *  @property {function: @return Boolean} isUnlocked  Condition for when the entry is visible and searchable
   *  @property {Array: String} tags  List of keywords which are linked to this tab in the search function
   *  @property {String} tab    Key of a tab+subtab combination which will default the h2p to this entry if opened
   * }
   */
  tabs: [
    {
      name: "本弹窗",
      info: () => `
欢迎来到“玩法指南”！
<br>
<br>
本弹窗（弹出窗口）包含游戏中您在游戏进程中会遇到的所有内容的深入说明和补充细节。随着您解锁新功能和机制，此处也会开放更多页面。如果您对游戏中某个机制如何运作感到困惑，可以在相关的条目中找到有用的说明。
<br>
<br>
目前，打开“玩法指南”时始终会进入本页面。在您首次进行维度提升之后，再次打开本弹窗时，则会自动跳转到与您当前可见标签页和子标签页内容最相关的条目（如果存在这样的条目）。
`,
      isUnlocked: () => true,
      tags: ["h2p", "how", "to", "play", "modal", "指南", "弹窗"],
      tab: ""
    },
    {
      name: "您的存档",
      info: () => `
如果您使用网页浏览器游玩，游戏的存档数据会存储在您电脑的浏览器数据中；如果您在 Steam 上游玩，则存储在 Steam 的安装目录中。这意味着清除浏览器的缓存或 Cookie，或者在 Steam 上完全卸载游戏，都会同时删除您的存档。
类似地，如果您使用隐私或无痕窗口游玩，下次打开浏览器时存档将不复存在。存档也与浏览器相关，例如如果您在 Chrome 上游玩，将无法在 Firefox 中找到您的存档。最后，网页版和 Steam 版的任何存档彼此完全独立。
<br>
<br>
您可以使用导出功能将存档在不同位置之间转移，该功能会复制一串<i>非常</i>长的、看似随机的字符到剪贴板。该文本包含您的存档数据，您可以将其粘贴到导入提示框中的文本框中重新加载到游戏里。导入时需要完整的存档文本才能正常工作，否则游戏可能无法识别该文本为有效的存档。某些聊天应用在您用于在设备之间转移存档时可能会截断部分文本。
<br>
<br>
现实更新后格式正确的存档字符串以
<b>${GameSaveSerializer.startingString.savefile}</b> 开头，并以 <b>${GameSaveSerializer.endingString.savefile}</b> 结尾。
如果您导入的是现实更新发布之前的游戏版本，则它会以 <b>eyJ</b>
开头，并以 <b>In19</b>、<b>fX0=</b> 或 <b>fQ==</b> 结尾。如果上述情况都不符合，那么您的存档缺失了部分内容，导入将会失败。除通过剪贴板导入和导出外，您也可以通过文本文件进行导入和导出。
<br>
您可以使用“选择存档”按钮在浏览器上三个独立的存档之间切换。在大多数情况下，这些存档彼此完全独立。导入和导出只会影响当前存档槽。<b>唯一的例外是清除浏览器或 Steam 数据，此时三个存档都会被重置。</b>
<br>
<br>
游戏会定期自动保存，默认每 ${formatInt(30)} 秒一次。
如果您需要关闭游戏，请注意这一点——除非您等待自动保存间隔或手动再次保存，否则关闭前所做的一切操作可能不会被保存。自动保存间隔的长度可调，其计时器显示在屏幕左下角。
<br>
<br>
存档的备份也会在游戏在线或离线一段时间后自动保存，您可以随时点击“打开自动保存备份菜单”按钮查看并重新加载这些备份。如果您希望将存档恢复到过去某个时间点的状态，例如几分钟前或上次离线较长时间时的状态，这些备份可能会很有用。
<br>
<br>
您还可以将 Google 账号连接到游戏，从而在线保存进度。这样您就可以在登录同一账号的任何设备上使用相同的存档游玩。云存档仅与网页版或 Steam 版游戏中的其他存档兼容；游戏安卓应用中的存档不会通过云存档自动关联。从云端保存和加载时会自动覆盖另一个存档，除非另一个存档更旧或明显进度更高，在这种情况下会弹出一个对话框询问您要保留哪个存档。
<br>
<br>
您随时可以通过点击按钮完全重置存档（如果您希望如此），这会弹出一个提示框，您需要填写以确保您确实想进行重置。执行此重置只会清除当前存档；其他存档槽不受影响。<b>以这种方式重置游戏是完全不可逆的，并且不会给您带来任何永久性奖励，无论是隐藏的还是其他方面的。</b>
`,
      isUnlocked: () => true,
      tags: ["choose", "cloud", "google", "save", "import", "export", "reset", "存档", "云存档", "导入", "导出", "重置"],
      tab: "options/saving"
    },
    {
      name: "个性化设置",
      info: () => `
游戏有两种不同的界面布局——“经典界面”保留了现实更新之前反物质维度的风格，而“现代界面”则是基于更现代的暗色主题风格重新设计的。此外，还有各种主题可以应用，以修改游戏中所有内容的外观。有一些隐藏主题可以通过导入特定短语来解锁。两种界面布局都支持所有不同的主题。
<br>
<br>
游戏中用于显示数字的记数法默认为“混合科学记数法”，但可以在下拉菜单中改为众多选项中的一个。许多记数法是作为玩笑存在的，在某些情况下格式化数字的方式会导致文本溢出到屏幕的其他部分——这不是 Bug。您还可以使用“指数记数法选项”菜单配置极大数字的显示方式，尽管这可能导致某些地方出现一些奇怪的文本外观。
<br>
<br>
游戏中的许多事件会触发全屏动画或需要您确认要继续的弹窗。大多数动画和确认都可以在选项中单独禁用，但任何动画或确认的禁用选项只会在它们至少显示过一次后才会出现。
`,
      isUnlocked: () => true,
      tags: ["UI", "update", "news", "theme", "notation", "comma", "exponent", "animation", "retry", "confirmation",
        "offline", "hotkey", "classic", "modern", "界面", "主题", "记数法", "动画", "确认"],
      tab: "options/visual"
    },
    {
      name: "离线进度",
      info: () => `
反物质维度具有一个追赶机制，它会在游戏关闭较长时间后尝试模拟游戏的行为。模拟行为只能部分准确，因为游戏在数学上过于复杂，无法在合理的时间内以完全的精度运行。模拟结束后，游戏会总结您离开期间各种相关资源的变化情况。
<br>
<br>
如果游戏保持打开状态但失去焦点或被挂起较长时间，当您返回时游戏会尝试将错过的时长作为离线进度来应用。这可能会不太可靠，因为不同设备对这些情况的处理方式不同。如果这导致了不理想的行为，您可以在选项中关闭该功能——这种情况下游戏会尝试在单个 tick 内应用所有错过的时长。
<br>
<br>
游戏运行在一个每 tick 更新一次所有内容的系统上——所有维度和资源进行一次产出，所有自动购买器触发一次，所有乘数和数值相应改变，所有显示的数字也被更新。默认情况下，游戏运行时每秒有 ${formatInt(20)} 个 tick，但可以在游戏选项中通过修改“更新频率”来调整。
您当前的设置将使游戏平均以每秒 ${format(1000 / player.options.updateRate, 2, 1)} 个 tick 的速度运行，尽管延迟和 javascript 内部行为可能导致单个 tick 出现几个百分点的偏差。
<br>
<br>
当离线模拟激活时，这些 tick 的长度会被调整，以填补您离开的时长——例如，设置 ${formatInt(1000)} 个离线 tick 并关闭游戏一小时，将导致每个 tick 长度为 ${format(3.6, 1, 1)} 秒。对于游戏中的大多数内容来说，这不会成为问题，因为模拟完成后仍会得到大致相同的资源量。一个显著的例外是自动购买器——在这种情况下，自动购买器实际上只会每 ${format(3.6, 1, 1)} 秒触发一次，根据游戏阶段的不同，这可能会产生重大影响。
<br>
<br>
${player.blackHole[0].unlocked
    ? `<b>离线黑洞行为：</b>一旦黑洞被解锁，离线进度模拟将尝试以每个 tick 包含大致相同<i>游戏</i>时间量的方式运行游戏。这可能会让黑洞在模拟期间看起来比平时活跃得多，但实际上游戏是以更慢的速度运行活跃期，并“跳过”不活跃期，因为它们每单位真实时间贡献的产出少得多。这导致的行为通常对您有利，相比于恒定真实时间的 tick。
      <br>
      <br>`
    : ""
}
离线 tick 数可在 ${formatInt(500)} 到 ${formatInt(DC.E6)} 个 tick 之间调整。较小的数会带来更快但不够精确的模拟，而较大的数会带来更精确但耗时更长的模拟。每个游戏 tick 的时间上限为一天，这意味着在某些罕见情况下（例如超过一年未游玩游戏），您可能无法获得您离开期间的全部时长。
<br>
<br>
如有需要，可以完全禁用离线进度，例如用于诊断或计时目的，或为了进行“仅在线”通关。否则，离线进度会从游戏一开始就默认开启。请注意，如果禁用离线进度，游戏关闭时游戏总时长的统计也会暂停。
`,
      isUnlocked: () => true,
      tags: ["offline", "away", "progress", "离线", "进度", "挂机"],
      tab: "options/gameplay"
    }, {
      name: "效果叠加",
      info: () => `
反物质维度中大多数效果和升级主要分为三类：
<br>
- <b>加法类：</b>这些效果通常以 +（或“增加”一词）后跟一个数字表示，将其数值加到某个基础量上。多个加法效果会被相加。这些效果有时也会以减法形式出现，用于降低资源成本。
<br>
- <b>乘法类：</b>这些效果以 ×（或“乘以”一词）后跟一个数字表示，或更罕见地以两个由 ➜ 分隔的数字表示。不同的乘法来源始终通过相乘来组合，绝不通过相加。在某些情况下，可能存在以除法形式应用在此类别中的负面效果或成本削减。
<br>
- <b>指数类</b>：这些效果要罕见得多，以 ^ 后跟一个数字表示。多个指数效果按顺序应用，或等价地通过将指数效果的值相乘并以最终值作为单一指数应用。在罕见情况下，负面效果可能以小于 ${formatInt(1)} 的指数出现在此类别中。
<br>
<br>
除非另有说明（当升级或奖励<i>替换</i>旧值时），所有这些效果都互相叠加。在升级以新值替换旧值的情况下，替换会发生在上述任何效果应用之前。要确定一组效果的最终值，每个类别中的效果会先各自组合，然后按加法、乘法、指数的顺序应用。
<br>
<br>
${PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked()
    ? "膨胀时间及任何膨胀时间类效果会在所有其他效果叠加在一起之后<i>再</i>应用。"
    : ""}
<br>
<br>
${PlayerProgress.realityUnlocked()
    ? `符文效果实际上有两个叠加属性——它们内部相互叠加的方式，以及它们与所有其他游戏效果叠加的方式。这两者可能并不相同——例如，“反物质维度指数”效果会<i>与自身加法叠加</i>，但总效果会加到基础值 ${formatInt(1)} 上，然后作为<i>指数效果</i>应用到反物质维度上。`
    : ""}
`,
      isUnlocked: () => true,
      tags: ["effect", "stack", "combine", "add", "reduce", "multiply", "divide", "power", "dilation", "glyph",
        "效果", "叠加", "加法", "乘法", "指数"],
      tab: "options/gameplay"
    }, {
      name: "常见缩写",
      info: () => `
游戏中的许多资源会以缩写形式作为文本出现，以节省空间。当您首次遇到新资源时，本“玩法指南”条目会自动更新，添加相应的条目。
<br>
- <b>AM</b>：反物质（Antimatter）<br>
- <b>AD</b>：反物质维度（Antimatter Dimension）<br>
- <b>AG</b>：反物质星系（Antimatter Galaxy）<br>
${PlayerProgress.infinityUnlocked() ? "- <b>IP</b>：无限点数（Infinity Point）<br>" : ""}
${PlayerProgress.infinityUnlocked() ? "- <b>NC</b>：普通挑战<br>" : ""}
${PlayerProgress.infinityUnlocked() ? "- <b>IC</b>：无限挑战<br>" : ""}
${InfinityDimension(1).isUnlocked || PlayerProgress.eternityUnlocked() ? "- <b>ID</b>：无限维度（Infinity Dimension）<br>" : ""}
${PlayerProgress.replicantiUnlocked() ? "- <b>RG</b>：复制器星系（Replicanti Galaxy）<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>EP</b>：永恒点数（Eternity Point）<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>TT</b>：时间定理（Time Theorem）<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>TD</b>：时间维度（Time Dimension）<br>" : ""}
${PlayerProgress.eternityUnlocked() ? "- <b>EC</b>：永恒挑战（Eternity Challenge）<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>TP</b>：超光速粒子（Tachyon Particle）<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>DT</b>：膨胀时间（Dilated Time）<br>" : ""}
${PlayerProgress.dilationUnlocked() ? "- <b>TG</b>：超光速星系（Tachyon Galaxy）<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>RM</b>：现实机器（Reality Machine）<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>AP</b>：自动化点（Automator Point）<br>" : ""}
${PlayerProgress.realityUnlocked() ? "- <b>BH</b>：黑洞（Black Hole）<br>" : ""}
${MachineHandler.isIMUnlocked ? "- <b>iM</b>：虚幻机器（Imaginary Machine）<br>" : ""}
${Laitela.isUnlocked ? "- <b>DM</b>：暗物质（Dark Matter）<br>" : ""}
${Laitela.isUnlocked ? "- <b>DE</b>：暗能量（Dark Energy）<br>" : ""}
`,
      isUnlocked: () => true,
      tags: ["abbreviation", "shorten", "am", "ad", "ag", "ip", "nc", "ic", "id", "rg", "ep", "tt", "td", "ec", "tp",
        "dt", "tg", "rm", "ap", "bh", "im", "dm", "de", "缩写"],
      tab: ""
    }, {
      name: "反物质维度",
      info: () => `
反物质是您在整个游戏进程中用于购买各种物品的资源。您首次打开游戏时拥有 ${formatInt(10)} 反物质，您可以花费它购买第一反物质维度来开始游戏。
<br>
<br>
反物质维度是您在游戏中的产出单位。第一反物质维度产出反物质。
每个连续的反物质维度产出前一个维度，让您能够稳定增长。
反物质维度总共有八个。
<br>
<br>
<b>维度乘数：</b>在维度旁边有一个乘数（例如：第一维度 ${formatX(1, 1, 1)}）。
每个维度的基础产出会乘以这个数字。
每购买 ${formatInt(10)} 个该维度，此乘数会增加 ${formatX(2)}。
每次发生这种情况时，该维度的价格都会上涨。
<br>
<br>
<b>累计维度数量：</b>下一列是您当前拥有的该维度的总数。
这是您用反物质购买的数量以及由更高维度产出的数量之和。
<br>
<br>
<b>已购买维度数量：</b>在每个累计拥有维度数量旁边，括号中显示的是您已购买的、用于下一次乘数升级的该维度数量。
例如，如果您的累计维度数量旁边显示 (${formatInt(4)})，
那么您还需要 ${formatInt(6)} 个该维度才能获得下一次乘数提升。
<br>
<br>
<b>维度增长百分比：</b>此数字表示每个维度每秒的增长量。${formatPercents(1)} 表示该维度每秒翻倍。
这使您可以判断总体增长情况。
<br>
<br>
<b>成本 &amp; 直到 ${formatInt(10)}：</b>
当成本按钮高亮时，您可以用反物质购买单个维度的数量。
或者，如果“直到 ${formatInt(10)}”按钮高亮，
您可以购买能达到该维度下一次维度乘数所需的任意数量。
<br>
<br>
<b>全部最大：</b>“全部最大”会先购买第一反物质维度直到 ${formatInt(10)} 个直到无法再购买，然后是第二个，以此类推直到 8th 反物质维度，然后购买最大数量的 Tickspeed 升级。
<br>
<br>
<b>维度基础价格：</b> ${Array.range(1, 8)
    .map(tier => format(AntimatterDimension(tier)._baseCost, 2, 2))
    .join(", ")}
<br>
<b>每购买 ${formatInt(10)} 个维度的基础价格增量：</b> ${Array.range(1, 8)
  .map(tier => format(AntimatterDimension(tier)._baseCostMultiplier, 2, 2))
  .join(", ")}
<br>
<br>
<b>快捷键：1、2、3、4、5、6、7、8</b> 用于购买直到 ${formatInt(10)} 个第 X 维度
（您也可以在购买维度时按住 Shift，这样只会购买
${formatInt(1)} 个而不是 ${formatInt(10)} 个），<b>M</b> 用于全部最大
`,
      isUnlocked: () => true,
      tags: ["dims", "normal", "antimatter", "ad", "维度", "反物质"],
      tab: "dimensions/antimatter"
    }, {
      name: "Tickspeed ",
      info: () => `
游戏中的产出发生在每个“tick”上，最初每秒发生一次。通过购买Tickspeed 升级，
您可以让您的反物质维度产出更快，就像每秒内发生多个 tick 一样。
<br>
<br>
<b>Tickspeed ：</b>此处说明每秒发生多少个游戏 tick。小数 tick 也会被计算在内，将产出提升，就好像一部分游戏 tick 已经过去。请注意，实际的Tickspeed 时间是模拟的，游戏始终以您在选项标签页中选择的更新频率进行计算。
<br>
<br>
<b>成本：</b>用反物质购买以显示的乘数乘以 ticks/sec。
（在没有任何星系的情况下，每次购买为 ${formatX(1.1245, 0, 3)}）
<br>
<br>
<b>购买最大：</b>这将购买您当前反物质所能购买的最大数量的Tickspeed 升级。
<br>
<br>
<b>快捷键：T</b> 将购买尽可能多的Tickspeed 升级，或 <b>Shift+T</b> 购买单个升级。
<b>M</b> 用于全部最大。
`,
      isUnlocked: () => Tickspeed.isUnlocked,
      tags: ["dimension", "earlygame", "time", "Tickspeed ", "时间"],
      tab: "dimensions/antimatter"
    }, {
      name: "维度提升",
      info: () => `
<b>维度提升：</b>这会重置您的反物质和所有反物质维度，但会解锁另一个可购买的反物质维度，并提升您的维度乘数。
第一次维度提升需要 ${formatInt(20)} 个第四维度，第二次需要 ${formatInt(20)} 个第五维度，依此类推。
在解锁全部 ${formatInt(8)} 个维度后，
每多一次跃升将比上一次多消耗 ${formatInt(15)} 个第八维度，并且不再解锁维度，但会继续增加您的维度乘数。
<br>
<br>
每拥有一次维度提升，您都会获得一个对第一维度的 ${formatX(2)} 乘数。每个更高维度应用此乘数的次数比前一个少一次，最低降到 ${formatInt(0)} 次。
例如，拥有 ${formatInt(3)} 次跃升时，第一维度将获得 ${formatX(8)}，第二维度 ${formatX(4)}，
第三维度 ${formatX(2)}，而其他所有维度不受影响。
<br>
<br>
<b>快捷键：D</b> 将尝试购买一次维度提升。
`,
      isUnlocked: () => true,
      tags: ["dimboost", "reset", "earlygame", "维度提升", "重置"],
      tab: "dimensions/antimatter"
    }, {
      name: "反物质星系",
      info: () => `
购买一个反物质星系会将您的游戏重置回只有 ${formatInt(4)} 个维度可用的状态，但会增加您Tickspeed 升级的效果，前两个星系每个增加 +${format(0.02, 0, 2)}。随着您获得更多星系，乘数将继续变得越来越强。
<br>
<br>
尽管对于前几次Tickspeed 购买的影响很小，
但这种增长是乘法的，并且很快就会显现出来。
<br>
<br>
您的第一个反物质星系需要 ${formatInt(80)} 个第八维度，之后每增加一个星系将再多消耗 ${formatInt(60)} 个。
<br>
<b>遥远星系缩放：</b>在 ${formatInt(100)} 个反物质星系以上，星系之间的成本增量会增加每星系 ${formatInt(2)} 个，使下一个星系多消耗 ${formatInt(62)} 个，然后多消耗 ${formatInt(64)} 个，依此类推。
<br>
<b>极远星系缩放：</b>在 ${formatInt(Galaxy.remoteStart)} 个反物质星系以上，<i>总</i>成本会每星系额外增加 ${formatPercents(0.002, 1)}，叠加在遥远缩放之上。
<br>
<br>
<b>快捷键：G</b> 将尝试购买一个反物质星系。
`,
      isUnlocked: () => true,
      tags: ["8th", "reset", "galaxy", "earlygame", "星系", "反物质星系"],
      tab: "dimensions/antimatter"
    }, {
      name: "维度献祭",
      info: () => `
<b>您在第五次维度提升后解锁维度献祭。</b>
<br>
<br>
献祭会立即将所有非第八维度的拥有数量重置为零，但不减少乘数或当前成本。作为回报，它会将第八维度乘数乘以显示的数值。
恢复到之前的生产力需要时间，但您最终会获得净增长。
<br>
<br>
维度献祭乘数随您献祭时拥有的第一维度数量而变化，并且可以通过完成某些成就和挑战来改善这种缩放。该乘数在献祭之间会保留，这意味着在 ${formatX(10)} 时献祭一次，然后在 ${formatX(4)} 时献祭一次，与在 ${formatX(8)} 然后在 ${formatX(5)} 献祭相同；在两种情况下，您最终都会得到 ${formatX(40)} 的总献祭乘数。
<br>
<br>
<b>快捷键：S</b> 将尝试进行献祭。
`,
      isUnlocked: () => Sacrifice.isVisible,
      tags: ["8th", "reset", "earlygame", "gods", "earlygame", "献祭", "重置"],
      tab: "dimensions/antimatter"
    }, {
      name: "成就",
      info: () => `
每个成就都有解锁要求。一旦解锁，一些成就会给您奖励。
要求和奖励在难度和收益上有显著差异。
<br>
<br>
除了每个单独成就的特定奖励外，您还将获得对所有反物质维度的 ${formatX(1.03, 2, 2)} 乘数。每完成一整行还会再获得 ${formatX(1.25, 2, 2)}。所有成就共同产生的总乘数效果会显示在所有成就图标上方。
<br>
<br>
隐藏成就不提供任何游戏玩法上的好处或优势，纯粹是为了好玩。将鼠标悬停在隐藏成就上会给出如何获得它们的提示。
`,
      isUnlocked: () => true,
      tags: ["earlygame", "awards", "earlygame", "成就", "奖励"],
      tab: "achievements"
    }, {
      name: "无限",
      info: () => `
当您的反物质多到世界无法承受时（${formatInt(2)}<sup>${formatInt(1024)}</sup>
或大约 ${formatPostBreak(Number.MAX_VALUE, 6)}，
有时被称为“无限”），您将被迫进行一次“大紧缩”。这将重置您的反物质、反物质维度、维度提升和反物质星系。进行大紧缩有时也被称为“无限转生”。
<br>
<br>
您最终将能够突破 ${formatPostBreak(Number.MAX_VALUE, 6)}，但在此之前任何更大的数字都将显示为 ${format(Infinity)}。
<br>
<br>
每完成一次无限将给予一个无限点数，可以花费在新的无限标签页中的升级上。
您必须从上到下购买这些升级。您还将获得一个“无限次数”，这实际上就是您紧缩过的次数。
<br>
<br>
“将所有来源的无限点数乘以 ${formatInt(2)}”升级可以多次购买，
但每次购买都需要 ${formatInt(10)} 倍的无限点数。
您必须完成“无需 DLC”成就才能开始购买此升级。
<br>
<br>
<b>快捷键：C</b> 将尝试进行一次大紧缩。
`,
      isUnlocked: () => PlayerProgress.infinityUnlocked(),
      tags: ["crunch", "big", "upgrades", "ip", "reset", "prestige", "earlygame", "无限", "大紧缩", "无限点数", "转生"],
      tab: "infinity/upgrades"
    }, {
      name: "普通挑战",
      info: () => `
普通挑战在您首次无限后解锁；它们以不同的方式改变游戏内机制，创造更困难的无限条件。要完成挑战，您必须再次达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质。
<br>
<br>
每完成一个普通挑战将奖励一个自动购买器，或升级现有自动购买器的能力。
您可以多次运行它们（尽管只有首次完成才给予奖励），
并且可以通过“退出挑战”按钮随时退出。
<br>
<br>
您的第一次无限被视为第一个普通挑战，因此在您解锁挑战时它已经完成。
<br>
<br>
无限升级的最右列在挑战中不起作用。
`,
      isUnlocked: () => PlayerProgress.infinityUnlocked(),
      tags: ["infinity", "autobuyer", "earlygame", "无限", "自动购买器", "挑战"],
      tab: "challenges/normal"
    }, {
      name: "自动购买器",
      info: () => `
自动购买器允许您自动购买维度、升级或进行转生。所有自动购买器
控件都位于“自动化”标签页下的“自动购买器”子标签页中，包括游戏后期解锁的任何额外自动购买器。
<br>
<br>
反物质维度自动购买器和Tickspeed 升级自动购买器可以根据您的反物质总量解锁，
但大多数其他自动购买器需要购买升级或完成挑战才能解锁。
<br>
<br>
大多数自动购买器具有相似的属性：
<br>
<br>
<b>自动购买器间隔：</b>自动购买器在尝试再次购买之前的冷却时间。
反物质维度自动购买器和Tickspeed 升级自动购买器需要先完成各自的挑战才能升级其间隔。
<br>
<br>
<b>反物质维度自动购买器批量购买：</b>一旦自动购买器的间隔达到最小值
（${formatInt(100)} ms），所有后续升级都会使自动购买器每个 tick 可购买的最大数量翻倍。
此功能可以禁用。
<br>
<br>
<b>反物质维度自动购买器购买数量：</b>维度的自动购买器可以设置为购买单个维度，
或购买直到 ${formatInt(10)}。当自动购买器设置为单数时，批量购买将被禁用。
<br>
<br>
<b>Tickspeed 自动购买器购买数量：</b>Tickspeed 自动购买器可以设置为每次激活购买单个升级，
或在完成Tickspeed 挑战（C9）后购买最大可能数量。
<br>
<br>
<b>自动维度提升自定义：</b>使用维度提升自动购买器，您可以设置其尝试购买的最大跃升次数、
在维度提升始终自动购买前的最小反物质星系数量，
以及（解锁后）批量购买精确数量维度提升的能力。
如果您达到指定的星系阈值，自动购买器将忽略您的最大跃升限制。
<br>
<br>
<b>最大星系：</b>星系自动购买器将购买的最大星系数量。
<br>
<br>
<b>紧缩时无限点数：</b>一旦您打破无限，您可以设置在紧缩前希望等待多少无限点数。
<br>
<br>
<b>献祭自动购买器：</b>此自动购买器起始即为最大间隔，可能每个 tick 都会触发。
<br>
<br>
<b>动态数量：</b>升级后的转生自动购买器有一种模式，当超过指定阈值时会触发转生。开启“动态数量”后，当解锁对该数值应用乘数的某些升级或成就时，此阈值会自动增加。
<br>
<br>
<b>暂停/恢复自动购买器：</b>此按钮将暂停或恢复已开启的自动购买器。
它不会更改单个自动购买器的设置。可以将其视为主开关。
<br>
<br>
<b>启用/禁用所有自动购买器：</b>此按钮将单独打开或关闭您的所有自动购买器。
<br>
<br>
<b>快捷键：A</b>（用于暂停/恢复自动购买器）。
此外，按住 <b>Alt</b> 同时按下与升级、维度或转生关联的快捷键将切换关联的自动购买器。
`,
      isUnlocked: () => true,
      tags: ["infinity", "automation", "challenges", "rewards", "interval", "earlygame",
        "无限", "自动化", "挑战", "间隔", "自动购买器"],
      tab: "automation/autobuyers"
    }, {
      name: "打破无限",
      info: () => `
一旦您打破无限，您将不再受 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质的限制，并且根据您紧缩时所拥有的反物质多少，每次紧缩可以获得超过 ${formatInt(1)} 个无限点数。
<br>
<br>
现在在 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质下紧缩可获得约 ${format(1.78, 2, 2)} 个无限点数。每多获得一个 ${formatPostBreak(Number.MAX_VALUE, 2)} 因子的反物质，紧缩所获得的无限点数会乘以 ${formatInt(10)}（以连续方式）。此数值在应用所有乘数<i>之后</i>向下取整为最接近的整数。
<br>
<br>
所有维度的反物质成本在超过
${formatPostBreak(Number.MAX_VALUE, 2)} 后开始更快增长。在 ${formatPostBreak(Number.MAX_VALUE, 2)} 以上，<i>每次升级之间</i>的成本会增加 ${formatX(10)}，Tickspeed 升级成本也会发生类似的缩放。
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["limit", "crunch", "upgrades", "midgame", "打破无限", "紧缩", "升级"],
      tab: "infinity/break"
    }, {
      name: "无限维度",
      info: () => `
<b>解锁无限维度：</b>无限维度通过达到一定数量的反物质来解锁。
<br>
<br>
<b>无限维度购买：</b>无限维度只能以 ${formatInt(10)} 个为一组购买，并消耗无限点数。每次购买都会给予一个永久乘数，类似于其他维度。实际应用的乘数取决于您购买的无限维度。 <!-- Sorry Garnet :/ -->
<br>
<br>
<b>无限维度产出：</b>就像反物质维度一样，每个无限维度产出下一个较低的无限维度。
<br>
<br>
每次紧缩时，您产出的无限维度会被重置为您已购买的数量。虽然无限维度的产出不会在紧缩之间保留，但您从购买它们获得的所有乘数都会保留。
<br>
<br>
<b>无限维度解锁阈值（反物质）：</b> ${Array.range(1, 8)
    .map(tier => formatPostBreak(InfinityDimension(tier)._unlockRequirement))
    .join(", ")}
<br>
<b>无限维度购买乘数：</b> ${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._powerMultiplier))
    .join(", ")}
<br>
<b>无限维度基础价格（无限点数）：</b> ${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._baseCost))
    .join(", ")}
<br>
<b>无限维度价格增量：</b> ${Array.range(1, 8)
    .map(tier => format(InfinityDimension(tier)._costMultiplier))
    .join(", ")}
<br>
<br>
第一无限维度产出的不是反物质，而是无限力量，它会以 (power<sup>${formatInt(7)}</sup>) 的形式为所有反物质维度提供一个乘数。无限维度不受Tickspeed 升级的影响。
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["id", "power", "new", "dims", "unlock", "break", "midgame",
        "无限维度", "无限力量", "解锁"],
      tab: "dimensions/infinity"
    }, {
      name: "无限挑战",
      // This one could use some work!
      info: () => `
无限挑战类似于普通挑战，但它们有更高的最终目标，总体上更难。它们不只是解锁自动购买器，而是以更独特的方式给予您各种产出形式的提升。与普通挑战类似，无限升级的最右列在无限挑战中也会被禁用。
<br>
<br>
与所有同时解锁的普通挑战不同，无限挑战需要您达到一定数量的反物质才能尝试。
<br>
<br>
<b>无限挑战解锁阈值：</b> ${GameDatabase.challenges.infinity
    .map(ic => formatPostBreak(ic.unlockAM)).join(", ")}
`,
      isUnlocked: () => Autobuyer.bigCrunch.hasMaxedInterval || PlayerProgress.eternityUnlocked(),
      tags: ["rewards", "break", "ic", "midgame", "无限挑战", "奖励"],
      tab: "challenges/infinity"
    }, {
      name: "复制器",
      info: () => `
复制器是您在 ${format(DC.E140)} 无限点数时解锁的另一种资源。复制器不产出其他东西，而是产出<i>自身</i>，最高可达
${formatPostBreak(Number.MAX_VALUE, 2)}。复制器以自己的节奏产出，不受Tickspeed 升级的影响。
每个单独的复制器在每个复制器 tick（最初为每秒）内有特定概率（最初为 ${formatPercents(0.01)}）产出另一个复制器，
两者都可以通过花费无限点数来升级。
<br>
<br>
如果您已经购买了复制器星系升级，那么您可以通过将复制器数量重置回 ${formatInt(1)} 来换取一个“免费”的复制器星系。说这个星系免费是因为它会像一个反物质星系一样起作用，但不会让您的下一个反物质星系变得更贵。不过，它仍然会像反物质星系一样重置相同的内容。
<br>
<br>
<b>快捷键：R</b> 将尝试购买一个复制器星系。
<br>
复制器为所有无限维度提供一个乘数，该乘数在
${formatPostBreak(Number.MAX_VALUE, 2)} 复制器时达到最大值 ${formatX(Math.pow(2, 20), 2, 2)}。
<br>
<br>
<b>概率升级成本：</b>基础 ${format(DC.E150)} 无限点数，成本增量 ${formatX(DC.E15)} 无限点数
<br>
<b>间隔升级成本：</b>基础 ${format(DC.E140)} 无限点数，成本增量 ${formatX(DC.E10)} 无限点数
<br>
<b>星系升级成本：</b>基础 ${format(DC.E170)} 无限点数，成本增量 ${formatX(DC.E25)} 无限点数，并且每升级额外增加 ${formatX(1e5)} 无限点数，其缩放方式与遥远的反物质星系类似。在 ${formatInt(100)} 个复制器星系以上，此每升级 ${formatX(1e5)} 会变为 ${formatX(DC.E55)}。在 ${formatInt(1000)} 以上，缩放从二次变为三次，其中 ${formatX(DC.E55)} 乘数本身每升级增加 ${formatX(DC.E5)}。
`,
      isUnlocked: () => Replicanti.areUnlocked || PlayerProgress.eternityUnlocked(),
      tags: ["interval", "chance", "infinity", "galaxy", "galaxies", "midgame",
        "复制器", "间隔", "概率", "无限", "星系"],
      tab: "infinity/replicanti"
    }, {
      name: "永恒",
      info: () => `
当达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数时，您可以进行永恒。永恒会重置此点之前的所有内容，但挑战时间、成就以及统计标签页中“通用”部分下的任何内容除外。首次永恒后，您将能够访问更多内容。
<br>
<br>
与您第一次达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 反物质时不同，您可以突破 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数而不会被强制做任何事。在进行永恒之前您拥有的无限点数越多，获得的永恒点数就越多。完成一次永恒，您还会获得一个“永恒次数”。
<br>
<br>
永恒点数获取的缩放方式与无限点数类似，但是是基于无限点数而不是反物质缩放。在 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数时获得的基础永恒点数约为 ${format(1.62, 2, 2)}，每多一个 ${formatPostBreak(Number.MAX_VALUE, 2)} 因子的无限点数则乘以 ${formatInt(5)}。此数值始终向下取整，这意味着您在 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数时会获得 ${formatInt(1)} 永恒点数，但要达到 ${formatInt(2)} 永恒点数需要 ${formatPostBreak(DC.E349)}。
<br>
<br>
<b>快捷键：E</b> 将尝试进行一次永恒重置。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternal", "ep", "reset", "prestige", "midgame", "永恒", "永恒点数", "转生"],
      tab: "eternity/upgrades"
    }, {
      name: "永恒里程碑",
      info: () => `
为了让永恒变得更快更方便，随着您获得更多“永恒次数”，您将解锁各种增益。这些增益通常会让您在永恒后保留原本会失去的某些升级、为您提供新的自动购买器以更好地自动化，或让您在离线时以较低的速率被动获取资源。
<br>
<br>
为您提供升级的里程碑会在首次开始永恒时自动购买并将其升级到最大，实际上让您永久拥有它们。
<br>
<br>
所有新的自动购买器除了在自动购买器标签页上的条目外，还会在各自的手动按钮旁边提供切换开关（例如，无限维度自动购买器可以在无限维度标签页上找到）。对维度提升、反物质星系和大紧缩自动购买器的改进会更新自动购买器标签页上已有的条目。
<br>
<br>
被动产出里程碑在设计上仅离线工作，可能需要某些自动购买器设置才能正常工作，如里程碑页面本身所述。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternities", "rewards", "automation", "midgame", "永恒", "里程碑", "自动化"],
      tab: "eternity/milestones"
    }, {
      name: "时间维度",
      info: () => `
首次永恒后，您将解锁时间维度。您用永恒点数购买它们，它们产出时间碎片，
为您提供Tickspeed 升级。这些Tickspeed 升级的功能类似于普通的Tickspeed 升级，但不会增加其成本。时间维度、时间碎片以及它们提供的Tickspeed 升级在无限时保留，
但每次永恒都会重置。
<br>
<br>
与其他维度类似，第二时间维度产出第一时间维度，依此类推。与无限维度类似，
每次永恒后您的产出会被重置为您已购买的数量，但您购买的乘数升级会保留。
<br>
<br>
每次购买都会将该特定时间维度的乘数增加 ${formatX(4)}。升级之间的成本乘数有一个基础值，但在
${format(TimeDimension(1)._costIncreaseThresholds[0], 2)} 永恒点数时会增加 ${formatX(1.5, 1, 1)}，在
${format(TimeDimension(1)._costIncreaseThresholds[1])} 永恒点数时增加（基础值的）${formatX(2.2, 1, 1)}。这些增加是追溯应用的，导致成本在达到这些阈值时跳变，且只适用于前四个维度。在
${format(TimeDimension(1)._costIncreaseThresholds[2])} 永恒点数以上，每次维度购买在成本增加方面算作四次购买，导致价格上涨得更加陡峭。
<br>
<b>时间维度基础价格（永恒点数）：</b> ${Array.range(1, 8)
    .map(tier => format(TimeDimension(tier)._baseCost))
    .join(", ")}
<br>
<b>时间维度基础价格增量：</b> ${Array.range(1, 8)
    .map(tier => format(TimeDimension(tier)._costMultiplier))
    .join(", ")}
<br>
<br>
获得另一个Tickspeed 升级的每个阈值比前一个多 ${formatPercents(0.33)} 的时间碎片，
或具有相关时间研究时为 ${formatPercents(0.25)}。在 ${formatInt(FreeTickspeed.softcap)} 次升级后，
连续免费Tickspeed 升级之间的乘数将以约 ${formatX(1.35, 0, 2)} 每 ${formatInt(50000)} 次升级（${formatX(1.000006, 0, 6)} 每次升级）的速率逐渐增加。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["dims", "td", "shards", "eternity", "midgame", "时间维度", "时间碎片", "永恒"],
      tab: "dimensions/time"
    }, {
      name: "时间研究",
      info: () => `
时间研究是一种强大的永恒后升级，需要消耗一种称为时间定理的新资源。时间研究可以
提升您目前在游戏中见过的任何内容的产出，甚至改变某些公式的运作方式。
<br>
<br>
时间定理是一种有限资源，每购买一个都需要更多成本。可以用反物质、
无限点数或永恒点数购买。其成本每次购买按设定因子增加。时间定理不会在永恒时重置。
<br>
<br>
研究以树状方式布局，您必须先购买前置研究才能继续。最初您只能购买最顶部的研究，然后可以从那里购买您买得起的正下方任何研究。但有三个例外：
<br>
当研究之间的连线有颜色时，您一次只能选择三条路径之一。
<br>
当永恒挑战的研究挡在路上时，您需要至少完成与之相连的所有挑战一次才能访问该研究。您不需要购买挑战研究即可访问它。
<br>
在底部，所有边缘重新汇合的地方，您只能从每对研究中选择一个。
<br>
<br>
您可以按住 Shift 然后点击时间研究来购买直到该点的所有研究。如果您在必须从两个或更多无法同时获得的选项之间进行选择的位置（见上文）shift-点击研究，或者您无法负担达到该点所需的所有研究，这可能不会购买您想要的研究。Shift-点击会贪婪地购买研究，在向下移动之前每行尽可能多地获取。
<br>
<br>
<b>预设：</b>最初标记为 1 到 6 的按钮允许您将当前的研究集合保存到槽位中，
让您只需单击即可快速再次购买该特定研究集合。您可以将鼠标悬停在按钮上并使用工具提示加载/保存槽位，或单击加载并 shift-单击保存。这些预设可以重命名，但不允许给多个预设起相同的名称。
<br>
<br>
<b>导入树/编辑预设：</b>编辑预设或导入时间研究树时，弹窗会显示加载时将购买哪些时间研究，以及任何错误。
对于分叉路径，您可以使用名称作为研究集合的简写。
例如，您可以用“antimatter”代替“71, 81, 91, 101”来表示完全购买反物质分叉。此外，如果时间研究字符串具有有效的永恒挑战，在字符串末尾添加“!”会使游戏在使用时尝试立即解锁并进入该永恒挑战。
<br>
<br>
<b>偏好设置：</b>点击齿轮图标会打开一个对话框，让您选择在三向分支中要选择的“默认”路径。选择默认值会改变上述 shift-点击行为，使其尝试购买您偏好的路径并继续，而不是在树分叉处完全停止。如果您已经购买了相关时间研究，可以在此对话框中为维度分叉选择两条路径。
<br>
<br>
<b>重置：</b>重置允许您重置树中的升级，以取回花在它们上面的所有时间定理。这是免费的，但只在完成永恒时触发；您不能在永恒中途重置时间研究。
<br>
<br>
<b>时间定理成本：</b>
<br>
<b>反物质：</b>初始 ${format(DC.E20000)}，每定理 ${formatX(DC.E20000)}
<br>
<b>无限点数：</b>初始 ${formatInt(1)}，每定理 ${formatX(DC.E100)}
<br>
<b>永恒点数：</b>初始 ${formatInt(1)}，每定理 ${formatX(2)}
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["eternity", "ts", "theorems", "tree", "study", "midgame",
        "永恒", "时间定理", "树", "研究"],
      tab: "eternity/studies"
    }, {
      name: "永恒挑战",
      info: () => `
永恒挑战是另一组通过时间研究树解锁的挑战。它们需要一定数量的时间定理以及一个在解锁挑战时必须满足的次要要求。
<br>
<br>
当您进入永恒挑战时，您的目标变为达到一定的目标无限点数。完成挑战后，您不需要解锁永恒挑战的研究即可让奖励生效。这些挑战的奖励类似于时间研究，但通常更强且永久，因为它们不需要您花费时间定理就能产生效果。
<br>
<br>
您一次只能解锁一个永恒挑战。
<br>
<br>
您每个永恒挑战最多可以完成五次。每次完成后，奖励会变得更强，但下一次完成的目标也会增加。此外，再次解锁挑战的次要要求也会增加。时间定理成本不会增加。
<br>
<br>
完成永恒挑战的次要要求会将它们从研究要求中移除，直到您完成该特定永恒挑战，这意味着您只需完成次要要求<i>一次</i>。
因此，您可以用一组研究解锁永恒挑战，然后重置为另一组研究来击败该挑战。EC11 和 EC12 是此规则的例外——即使您重置时间研究，维度路径限制仍然存在。
`,
      isUnlocked: () => PlayerProgress.eternityUnlocked(),
      tags: ["ec", "study", "time", "rewards", "completions", "midgame",
        "永恒挑战", "研究", "时间", "奖励", "完成"],
      tab: "challenges/eternity"
    }, {
      name: "膨胀时间",
      info: () => `
膨胀时间在您购买 EC11 和 EC12 研究下方解锁膨胀时间的时间研究后解锁。
为了购买此时间研究，您需要 ${formatInt(5000)} 个未花费的时间定理，且研究树能到达该研究，<i>总共</i>需要 ${formatInt(TimeStudy.dilation.totalTimeTheoremRequirement)} 个时间定理，并且必须已经各完成 EC11 和 EC12 五次。
<br>
<br>
膨胀时间将开始一次修改过的永恒，称为膨胀时间，其中您所有的反物质/无限/时间维度乘数的<i>指数</i>以及Tickspeed 乘数的<i>指数</i>都会被提升到
${formatPow(0.75, 2, 2)}，显著降低它们。如果您能在此膨胀时间中达到 ${formatPostBreak(Number.MAX_VALUE, 2)} 无限点数
以完成此膨胀时间永恒，您将获得一种称为超光速粒子的新资源作为奖励。
<br>
<br>
您可以任意次数膨胀时间，但超光速粒子不能像其他资源那样“刷”。超光速粒子永远不会减少，只会增加，并且会增加到一个基于您的超光速粒子乘数和当前膨胀时间中获得的反物质的上限。因此，除非您获得了超光速粒子乘数，或能够在膨胀时间中显著增加您的反物质，否则您通常无法增加超光速粒子。
<br>
<br>
超光速粒子会产生另一种称为膨胀时间的货币。膨胀时间会通过达到阈值转化为超光速星系，类似于从时间维度获得的Tickspeed 升级。这些超光速星系类似于复制器星系，它们影响Tickspeed，就好像它们是反物质星系一样，但不会增加您下一个反物质星系的成本。
<br>
<br>
解锁膨胀时间还会解锁您可以使用膨胀时间购买的升级。膨胀时间升级第一行的第一个和第三个升级可以无限次购买，只要您买得起。第二个升级也可以重复购买，但最终会达到上限。
`,
      isUnlocked: () => DilationTimeStudyState.studies[1].isBought || PlayerProgress.realityUnlocked(),
      tags: ["dial", "dt", "dilated", "tachyon", "particle", "study", "free", "galaxy", "galaxies", "midgame",
        "膨胀时间", "膨胀时间", "超光速粒子", "研究", "星系"],
      tab: "eternity/dilation"
    }, {
      name: "现实",
      info: () => `
当您达到 ${formatPostBreak(DC.E4000)} 永恒点数并完成前
${formatInt(13)} 行成就时，您将能够购买解锁现实的时间研究。
解锁它会打开一个新标签页，您可以在其中找到进行新现实的按钮。开始新现实
将重置到此为止几乎整个游戏，但作为交换会给予
您一种称为现实机器的新货币，一个符文，以及一个复兴点数。
<br>
<br>
与到目前为止的其他重置不同，您还会失去前 ${formatInt(13)} 行成就——即所有现实前成就及其所有相关奖励。但是，您仍然会保留统计标签页中“通用”标题下的所有值以及您所有的最佳挑战时间。
<br>
<br>
完成首次现实后，符文标签页包含一个按钮，让您可以重新开始当前现实，
而不会改变您即将获得的符文选择。<b>请注意，这不会给您任何奖励，即使您本来可以正常完成现实。</b>
<br>
<br>
您需要重新完成每个成就的要求才能再次获得它们的奖励，但您也会每 ${timeDisplayNoDecimals(new Decimal(30 * 60000))} 被动解锁下一个未完成的成就，无需任何努力，即使您本来没有达到要求。可以禁用此自动完成，在这种情况下，计时器会倒数到零并暂停，取消暂停时会立即完成另一个成就。离线时计时器仍以相同速率推进。
<br>
<br>
现实机器可以花在现实标签页中的不同升级上，是您从此以后的主要货币。符文是可装备物品，您必须装备才能使用它们的增益。复兴点数是另一种货币，可以在复兴子标签页中花在不同的复兴上。
<br>
<br>
现实机器纯粹基于永恒点数缩放，现实按钮会告诉您需要多少永恒点数才能获得下一个现实机器。前 ${formatInt(10)} 个现实机器在
${formatPostBreak(DC.E4000)} 永恒点数和 ${formatPostBreak(DC.C10P16000D3)} 永恒点数之间的指数上线性缩放，然后超过此值后
现实机器 = ${formatInt(1000)}<sup>log<sub>${formatInt(10)}</sub>(永恒点数)/${formatInt(4000)}-${formatInt(1)}</sup>。在 ${formatPostBreak(DC.C10P16000D3)} 永恒点数以上，此公式比线性给出更多的现实机器。
<br>
<br>
符文等级基于永恒点数、复制器和膨胀时间的组合，最低等级为
${formatInt(1)}。符文的类型、效果和稀有度是随机的。
<br>
<br>
您每次现实获得正好 ${formatInt(1)} 个复兴点数。
<br>
<br>
<b>快捷键：Y</b> 将尝试进行一次现实重置。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["rm", "machines", "glyph", "perk", "reset", "prestige", "lategame",
        "现实机器", "符文", "复兴", "转生", "现实"],
      tab: "reality/upgrades"
    }, {
      name: "符文",
      info: () => `
符文是一种可装备物品，具有四个属性：
<br>
<b>类型</b>——这是基于符文倾向于增强游戏的哪个部分而给定的名称
（例如“X 之符文”）。这决定了它可能拥有的效果。
<br>
<b>等级</b>——这贡献于您的符文有多强，它基于您在获得它的那次现实中获得的各种资源量来缩放。
<br>
<b>稀有度</b>——这是一个百分比，介于 ${formatPercents(0)} 和 ${formatPercents(1)} 之间，也
影响您的符文强度。这是随机的，但可以受各种升级影响。
该百分比实际上是质量评级，数值越高越好。特定稀有度范围有名称，如普通或优秀。
<br>
<b>效果</b>——这些是装备符文会给您的增益，最多可包含四个效果。
具有更高等级或稀有度的符文通常会比弱符文有更多效果。
<br>
<b>注意：您的第一个符文将具有固定的效果和稀有度，但其等级将基于您在任何现实内容之前的进度来缩放。一旦您收到一个符文，其属性无法更改。</b>
<br>
<br>
要装备符文，请双击或将图标从您的物品栏拖到屏幕中间的活动圆圈之一。装备后，符文图标变圆，并将其效果添加到右侧的列表中。
<br>
<br>
装备多个具有相同效果的符文将组合它们的效果；带有“+”的效果通常会将其值相加，带有“×”的效果通常会将其值相乘。
<br>
<br>
您可以在现实期间的任何时候将符文装备到<i>空</i>的活动槽位中，这将立即应用
新符文的效果。您也可以将符文拖到已占用的槽位中切换您装备的符文，
但这会重启您当前的现实。
<br>
<br>
物品栏第一行的槽位是“受保护”槽位。新符文永远不会被放入其中（即使物品栏已无空间），且它们不受“排序”和“自动清理”按钮的影响。如果您的物品栏
没有空间存放新符文，您将收到的任何符文都将被自动删除（或如果已解锁，则被献祭）。
<br>
<br>
您可以通过 shift-点击从物品栏中删除符文，这将提示您一个确认对话框，询问您是否确定要删除该符文。同时按住 shift 和 ctrl 点击将绕过此对话框。<b>但是，如果您在通过现实升级解锁符文献祭之前删除符文，除了清理物品栏空间外，不会给您带来任何好处！</b>
<br>
<br>
一旦您解锁了符文献祭，您就可以禁用符文选择弹窗的出现。如果需要，
您可以通过 shift-点击现实按钮来强制在此现实中再次显示该弹窗（忽略此设置）。
在选择弹窗被禁用的情况下完成现实将从您的选项中随机选择一个符文。
<br>
<br>
点击弹窗窗口外的一组圆形符文会打开一个弹窗，显示所有这些符文及其各种属性的详细摘要。该摘要在略短的描述中同时显示所有符文的信息，使其更适合与他人分享。这可以用于统计页面中的符文记录、您装备的符文以及此现实的即将到来的符文选择。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["reality", "sacrifice", "level", "lategame", "现实", "献祭", "等级", "符文"],
      tab: "reality/glyphs"
    }, {
      name: "复兴",
      info: () => `
复兴是现实后解锁的一种升级。每个复兴的效果各不相同，但大多数是 QoL（生活质量）
改进，您可以选择自己的路径。所有复兴只需要 ${formatInt(1)} 个复兴点数即可购买。
<br>
<br>
每次现实您获得 ${formatInt(1)} 个复兴点数，可以花在树上的升级，从
“您现在可以在现实时从 ${formatInt(Perk.firstPerk.config.effect)} 个符文中选择”开始。您只能解锁与您已经拥有的复兴直接相邻
的复兴，尽管树中有循环，您可以双向通过。
<br>
<br>
复兴节点可以有两种不同的形状——圆形或菱形。两者之间唯一的区别是
菱形复兴除了其正常效果外，还会给予自动化点。不同的节点也有
不同的颜色，大致表明它们最影响游戏的哪个部分。
`,
      isUnlocked: () => PlayerProgress.realityUnlocked() || TimeStudy.reality.isBought,
      tags: ["pp", "reality", "tree", "lategame", "复兴", "现实", "树"],
      tab: "reality/perks"
    }, {
      name: "自动化器概述",
      info: () => `
自动化器在总共达到 ${formatInt(AutomatorPoints.pointsForAutomator)} 个自动化点后解锁。
自动化点通过解锁各种复兴或现实升级、解锁黑洞，或
简单完成更多现实来获得。
<br>
<br>
自动化器使用一种脚本语言，允许您自动化几乎整个游戏。
界面有两个面板，左侧是脚本面板，您在其中输入命令来自动化游戏，右侧的面板有多个面板，做许多不同的事情，如自动化器介绍页面所述。
<br>
<br>
如果您想要更大的工作空间，可以按下自动化器文档面板右上角的按钮将其扩展为全屏。如果您需要更多空间编写脚本或阅读文档，也可以水平拖动面板之间的边界来调整面板大小。
<br>
<br>
通过按下脚本面板右上角的按钮，您可以在自动化器的积木和文本编辑器模式之间切换；如果您不熟悉编程，积木模式可能更易上手。要在积木模式下输入命令，
选择右侧的命令积木面板，将相关命令的方框拖到脚本面板中并放在您希望命令去的位置。如果需要，可以通过拖动积木来自由重新排列命令。在积木和文本模式之间切换也会尝试自动翻译您的脚本，但如果脚本包含错误，您可能会丢失部分转换后的脚本。
<br>
<br>
就像您的整个存档一样，单个自动化器脚本可以从游戏导入和导出。
格式正确的脚本字符串将以 <b>${GameSaveSerializer.startingString["automator script"]}</b> 开头，并以 <b>${GameSaveSerializer.endingString["automator script"]}</b> 结尾。如果不是这样，那么您的脚本
在复制粘贴过程中丢失了部分内容。导入功能会将脚本加载到新槽位中；您当前的脚本
不会被丢失或覆盖。
<br>
<br>
<b>快捷键：U</b> 将暂停/取消暂停自动化器。
`,
      isUnlocked: () => Player.automatorUnlocked,
      tags: ["automation", "reality", "code", "script", "lategame",
        "自动化", "现实", "代码", "脚本", "自动化器"],
      tab: "automation/automator"
    }, {
      name: "自动化器技术细节",
      info: () => `
<b>技术限制</b>
<br>
<br>
脚本有一些限制，以减少延迟并防止存档文件大小过大。
这些限制如下：
<br>
- 单个脚本最多限制为 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_CHARACTERS)}
个字符，所有脚本合在一起不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_TOTAL_CHARACTERS)}
个字符。
<br>
- 脚本名称不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_NAME_LENGTH)} 个字符。
<br>
- 定义的常量名称不能超过 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_NAME_LENGTH)}
个字符，或值长于 ${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_VALUE_LENGTH)} 个字符。
<br>
- 您总共不能拥有超过 ${formatInt(AutomatorData.MAX_ALLOWED_SCRIPT_COUNT)} 个脚本或
${formatInt(AutomatorData.MAX_ALLOWED_CONSTANT_COUNT)} 个定义常量。
<br>
<br>
<b>脚本保存</b>
<br>
<br>
脚本会在您编辑时自动保存，但在全局自动保存计时器
（即“距上次保存的时间”）触发完整游戏保存之前，不会保存到您的游戏存档中。如果您在关闭游戏前对脚本进行了更改，您应该等待游戏随后保存以免丢失更改。在超出长度限制时对脚本进行的任何编辑都不会被保存，直到您将脚本缩短到再次低于限制为止。
<br>
<br>
<b>自动化器 tick</b>
<br>
<br>
自动化器的“执行计时器”基于真实时间，因此不受黑洞、
时间符文效果和 EC12 的负面效果等影响。然而，此执行计时器完全独立于主
游戏的产出循环运行，这意味着在更快速度下，自动化器每个产出 tick 可以运行多个命令。
<br>
<br>
某些命令对游戏内部代码更密集，在较慢的计算机上可能需要超过单个自动化器 tick 来处理。在这种情况下，自动化器会执行这些命令，然后尝试通过尽可能快地执行后续命令来“追赶”，直到它以恒定执行速度运行了应有数量的命令。
<br>
<br>
<b>与离线进度的交互</b>
<br>
<br>
离线进度模拟期间较长的产出 tick 意味着您的所有资源实际上是大块地给予的，而不是更连续地给予。这可能会对您的脚本在
离线时的行为产生潜在的不利影响，具体取决于您的脚本如何依赖游戏状态来正常工作。
此外，PAUSE 命令可能表现异常，因为它也基于真实时间。
`,
      isUnlocked: () => Player.automatorUnlocked,
      tags: ["automation", "reality", "code", "script", "lategame",
        "自动化", "现实", "代码", "脚本", "自动化器"],
      tab: "automation/automator"
    }, {
      name: "黑洞",
      info: () => `
黑洞是一个会周期性地加快游戏运行速度的功能。
游戏会以正常速度运行一段时间，然后短暂地以极快速度爆发运行一段时间，然后回到正常速度并重复此循环。
<br>
<br>
黑洞带来的游戏速度提升比Tickspeed 强得多，因为与Tickspeed 不同，它会影响
<i>所有内容同等程度</i>，包括只部分受Tickspeed 影响的内容
（如无限/时间维度）、通常完全不受影响的内容（如膨胀时间/时间定理产出），
以及纯粹基于时间消耗而增强的效果（如挂机路径无限点数/永恒点数乘数）。
<br>
<br>
虽然游戏中大多数功能都会受到这种游戏速度提升的增益，但有一些不受影响。
在这些情况下，会特别说明给定时间是<i>真实时间</i>而不是
<i>游戏时间</i>。一个这样的例子是一组随时间自动完成永恒挑战的复兴。
否则，从此以后应假定所有提到时间的地方都是指<i>游戏时间</i>。
请注意，这也包括您可能希望花费时间<i>更少</i>的情况，
例如现实升级“复制器速度”。
<br>
<br>
您可以使用现实机器购买黑洞的升级。黑洞有三种升级：
<br>
<b>间隔</b>——黑洞在爆发之间不活跃的时间长度，
每升级减少 ${formatPercents(0.2)}。
<br>
<b>强度</b>——在临时速度爆发期间游戏运行快多少，
每升级增加 ${formatPercents(0.35)}。
<br>
<b>持续时间</b>——每次速度爆发在回到正常速度之前持续多久，
每升级增加 ${formatPercents(0.3)}。
<br>
<br>
在解锁黑洞后 ${formatInt(100)} 天<i>游戏时间</i>，您将解锁购买
允许您拥有第二个黑洞的现实升级的能力。
第二个黑洞的计时器仅在第一个黑洞活跃时推进。因此，例如，如果第一个
黑洞持续 ${formatInt(4)} 分钟，第二个间隔为 ${formatInt(8)} 分钟，那么
无论第一个黑洞的间隔有多短，第二个黑洞都只会在每两个第一个黑洞周期激活一次。请注意，游戏内头部显示的计时器考虑了这一点，并显示
第二个黑洞激活前的实际时间；在黑洞标签页中，您可以看到
第二个黑洞激活所需的第一个黑洞活跃时间量。
<br>
<br>
当黑洞至少 ${formatPercents(0.9999, 2)} 的时间处于活跃状态时，它会变为永久活跃。
这两个黑洞分别追踪。
<br>
<br>
离线时，黑洞循环仍会正常推进，其活跃速度加成将完全应用，就好像
游戏仍然打开一样。离线时间会以不同的 tick 长度模拟不活跃和活跃黑洞的片段，
以减少活跃期间 tick 数少带来的负面影响；“离线进度”
条目已更新，包含更多技术细节。
<br>
<br>
黑洞可以暂停，完全停止其间隔/持续时间循环。但是，取消暂停时，需要 ${BlackHoles.ACCELERATION_TIME} 真实时间秒才能从非活跃变为最大加速速度。
此加速时间仍会以全速运行的方式推进循环；因此，
虽然暂停提供了更多控制，但最终也会导致一些加速时间损失。
<br>
<br>
暂停和取消暂停会影响两个黑洞；它们不能独立暂停或取消暂停。可以通过在
黑洞标签页上切换相关设置，在激活前 ${BlackHoles.ACCELERATION_TIME} 真实时间秒自动暂停它们。
<br>
<br>
<b>升级成本信息：</b>
<br>
<b>间隔</b>——基础成本 ${formatInt(15)} 现实机器，每升级增加 ${formatX(3.5, 0, 1)}。
<br>
<b>强度</b>——基础成本 ${formatInt(20)} 现实机器，每升级增加 ${formatX(2)}。
<br>
<b>持续时间</b>——基础成本 ${formatInt(10)} 现实机器，每升级增加 ${formatX(4)}。
<br>
<b>增加的成本缩放：</b>在 ${format(1e30)} 现实机器以上，购买之间的成本乘数每升级增加 +${format(0.2, 0, 1)}。在 ${format(Number.MAX_VALUE, 1)} 现实机器以上，会出现一种忽略所有
先前行为的新缩放。从此点起，所有升级的行为就好像它们有 ${format(DC.E310)} 的初始成本，并且后续升级成本增加 ${format(1e6)}、${format(1e7)} 等（升级之间 ${formatX(10)}）。
<br>
<b>黑洞 2：</b>所有升级的初始成本比第一个黑洞高 ${formatX(1000)}，
但成本乘数相同。
<br>
<br>
<b>快捷键：B</b> 将暂停/取消暂停黑洞。
`,
      isUnlocked: () => player.blackHole[0].unlocked,
      tags: ["reality", "time", "speed", "duration", "interval", "rm", "lategame",
        "现实", "时间", "速度", "持续时间", "间隔", "黑洞"],
      tab: "reality/hole"
    }, {
      name: "天神",
      info: () => `
一旦您获得了所有现实升级，第一个天神就会解锁。这会在现实标签页旁边打开一个新的天神标签页。天神标签页下的第一个子标签页显示一张名为“天神导航”的地图，它会随着您游戏进度的推进而更新。首次解锁时只能看到部分地图，但随着您接近新内容，新内容会逐渐显现，通常会带有您朝下一步进度的视觉指示。
<br>
<br>
每个天神都有独特的机制和升级，您需要击败所有七个天神才能通关游戏。
解锁或击败天神的条件因天神的机制而异。
<br>
<br>
所有天神都有自己的天神现实，但现实与每个天神以及游戏其他部分的关联方式将取决于天神本身。
<br>
<br>
天神是无时间性的存在。除非另有说明，天神引入的任何新机制都不受
游戏速度乘数影响，而是特指真实时间而非游戏时间。
`,
      isUnlocked: () => Teresa.isUnlocked,
      tags: ["reality", "challenges", "lategame", "现实", "挑战", "天神"],
      tab: "celestials/celestial-navigation"
    }, {
      name: "特蕾莎，现实天神",
      alias: "特蕾莎",
      info: () => `
特蕾莎是第一个天神。她由成就 147 解锁，该成就要求获得所有现实升级。
<br>
<br>
在主屏幕上，有一个带有上方按钮的条，按钮上写着“注入现实机器”。这允许您将现实机器放入容器以获得现实机器乘数。注入容器的现实机器无法取回。
当容器内达到 ${format(TeresaUnlocks.run.price)} 现实机器时，您将解锁特蕾莎的现实。
<br>
<br>
当您完成特蕾莎的现实时，
${Teresa.runCompleted
    ? "您的符文献祭将根据运行期间获得的反物质数量而乘以一个值"
    : "<div style='color: var(--color-bad);'>(完成特蕾莎的现实以查看奖励)</div>"}。
完成特蕾莎的现实只是故事的一部分；您需要继续注入现实机器才能推进。一旦
容器内达到 ${format(TeresaUnlocks.effarig.price)} 现实机器，您将解锁下一个天神。
<br>
<br>
${Teresa.runCompleted
    ? "特蕾莎的现实可以在完成后再次进入，并且如果您在此次重复运行中获得更高的反物质数量，其奖励将变得更强。"
    : "(更多信息可用 - 完成特蕾莎的现实)"}
`,
      isUnlocked: () => Teresa.isUnlocked,
      tags: ["rm", "lategame", "perks", "sacrifice", "boo", "ghost", "celestial",
        "现实机器", "复兴", "献祭", "天神", "特蕾莎"],
      tab: "celestials/teresa"
    }, {
      name: "鹿颈长，远古遗物天神",
      alias: "鹿颈长",
      info: () => `
鹿颈长是您遇到的第二个天神。
她通过向特蕾莎的容器中注入至少 ${format(TeresaUnlocks.effarig.price)} 现实机器来解锁。
<br>
<br>
鹿颈长引入了一种称为遗迹碎片的货币，通过在现实期间使用不同类型的符文效果获得。现实期间激活的不同效果数量极大地影响遗迹碎片的获取，而永恒点数
对其影响要小得多。遗迹碎片是鹿颈长解锁的货币，从现在起每次现实都会获得。
<br>
<br>
使用遗迹碎片，您可以购买多种升级（参见“高级符文机制”），这些升级可以改善您的符文，并允许您在进行完全自动化的现实时根据其效果和稀有度过滤它们。
<br>
<br>
鹿颈长的最终解锁是她自己的现实，在 ${format(GameDatabase.celestials.effarig.unlocks.run.cost)} 遗物
碎片时。
${EffarigUnlock.run.isUnlocked
    ? "她的现实分为三层：无限、永恒和现实。您必须先完成每一层才能" +
      "访问下一层。完成鹿颈长的永恒将解锁下一个天神。"
    : "<div style='color: var(--color-effarig--base);'>(解锁鹿颈长的现实以查看其详情)</div>"
}
<br>
<br>
完成鹿颈长的现实将解锁
${EffarigUnlock.reality.isUnlocked
    ? `一种新的符文类型，<span style='color: var(--color-effarig--base);'>鹿颈长</span>符文。鹿颈长符文有
      ${formatInt(7)} 种不同的可能效果，您可以在符文过滤设置中查看。您一次只能
      装备一个鹿颈长符文。
${Ra.unlocks.glyphEffectCount.canBeApplied
    ? `由于在太阳神内的鹿颈长达到 10 级，鹿颈长符文上出现的效果不再有任何限制。任何给定的鹿颈长符文现在最多可以同时拥有所有 ${formatInt(7)} 种效果。`
    : `鹿颈长符文最多只能有 ${formatInt(4)} 种效果，并且现实机器乘数和符文不稳定性
      效果不能出现在同一符文上。`}`
    : "<span style='color: var(--color-effarig--base);'>(完成鹿颈长的现实以查看奖励详情)</span>"}
<br>
<br>
`,
      isUnlocked: () => TeresaUnlocks.effarig.canBeApplied,
      tags: ["glyph", "sacrifice", "shards", "reality", "spectralflame", "lategame", "celestial",
        "符文", "献祭", "碎片", "现实", "天神", "鹿颈长"],
      tab: "celestials/effarig"
    }, {
      name: "高级符文机制",
      info: () => `
符文等级调整可以用 ${format(GameDatabase.celestials.effarig.unlocks.adjuster.cost)} 遗物
碎片购买。这允许您为每种资源（永恒点数、膨胀时间、复制器、永恒次数）设置权重，决定它们在多大程度上影响现实时获得符文的等级。
<br>
<br>
自动符文过滤可以用 ${format(GameDatabase.celestials.effarig.unlocks.glyphFilter.cost)}
遗迹碎片购买。此系统使用多种方法之一为您的符文选择分配分数，然后选择分数
最高的选择。选择此符文后，它会将分数与阈值进行比较，如果分数
高于阈值则保留，否则改为献祭。有三种基本模式：
<br>
<b>最低总献祭：</b>根据您拥有的该特定符文类型的献祭值给符文打分。您拥有最少献祭值类型的符文将具有最高分数。
此模式没有阈值，始终献祭您的符文。
<br>
<b>效果数量：</b>符文的分数等于其效果数量，当多个
符文具有相同效果数量时，将选择稀有度更高的符文。它们与之比较的阈值由您在文本框中的输入指定。
<br>
<b>稀有度阈值模式：</b>符文的分数等于其稀有度百分比。比较阈值
可以针对每种符文类型单独设置。
<br>
<br>
此外，还有两种具有额外灵活性的更高级模式。您最初可能不需要这些，但
它们在后期会派上用场：
<br>
<b>指定效果模式：</b>符文的分数等于其稀有度，并与您指定的稀有度阈值
进行比较，但此分数会根据您对效果的输入进行修改。符文会被检查是否具有最低
效果数量以及您选择的所有效果，并且每缺少一个效果，其分数会降低 ${formatInt(200)}。这保证任何没有您想要效果的符文都会低于阈值。您
可以通过设置不可能的条件来禁止特定符文<i>类型</i>（例如，至少 ${formatInt(6)} 个效果的能量
符文将阻止能量符文被选中）。
<br>
<b>效果分数模式：</b>符文的分数根据其稀有度加上其每个效果的分数
计算，您可以单独设置阈值和每个效果的值。这可能有的一些用法：
<br>
- 给较弱的效果一个值 ${formatInt(5)}，只要符文更稀有以补偿较弱，就允许您保留没有该效果的符文
<br>
- 给您<i>不</i>想要的某个效果分配一个大的负分会禁止具有该效果的符文被选中；这对于效果测试和其他更有限的情况很有用
<br>
- 设置一个不可能的条件（例如，阈值分数为 ${formatInt(999)} 且所有效果值 ${formatInt(0)}）
也可以像指定效果模式那样禁止整个类型
<br>
<br>
符文过滤模式是一个全局设置，一次应用于所有符文类型；例如，您不能用“稀有度阈值”过滤能量符文，而用“指定效果”过滤时间符文。选择一种模式将要求
您在其设置中配置每种符文类型以进行正确过滤。每种过滤模式都有自己的设置，
如果您切换到另一种模式，这些设置将被保留。
<br>
<br>
解锁符文过滤还允许您将即将到来的选择中最高符文分数用作自动化器中可比较的
货币。此外，您可以让您的过滤器在
过滤器不会保留任何即将到来的选择时强制立即进行现实（一旦可用），只要现实自动购买器开启。
<br>
<br>
符文预设可以用 ${format(GameDatabase.celestials.effarig.unlocks.setSaves.cost)} 遗物
碎片购买。这解锁了 ${formatInt(7)} 个槽位，允许您将当前装备的符文保存为集合。
您不能覆盖集合，必须先删除它。当您加载集合时，其中的每个符文都会被找到并装备。
如果找不到任何符文，它会显示警告，但无论如何都会装备所有其他符文。
加载集合时，您可以对等级和/或稀有度敏感。可能的符文中最好的符文
始终会被装备。就像其他圆形符文组一样，您可以点击其中任何一个
以弹出一个总结整个符文集合的弹窗。
`,
      isUnlocked: () => EffarigUnlock.adjuster.isUnlocked,
      tags: ["glyph", "weight", "adjustment", "sacrifice", "filter", "threshold", "set", "save", "reality", "lategame",
        "符文", "权重", "调整", "献祭", "过滤", "阈值", "集合", "保存", "现实"],
      tab: "celestials/glyphfilter"
    }, {
      name: "无名氏，时间天神",
      alias: "无名氏",
      info: () => `
无名氏是第三个天神，通过完成鹿颈长的永恒来解锁。
<br>
<br>
解锁无名氏时，您立即获得两个与时间相关的新机制。您可以通过充能黑洞来存储“游戏时间”，并通过故意停止产出来存储“真实时间”。
存储的游戏时间也用作从无名氏购买解锁的货币。
<br>
<br>
充能黑洞会给您存储的游戏时间，但代价是将游戏速度设置为
${formatInt(1)}。游戏实际上是利用您增加的游戏速度来存储游戏时间本身。其主要
用途是释放黑洞，释放会使用您存储的游戏时间向前跳跃，跳跃时长等于存储的游戏时间。这与常规游戏速度乘数不同，因为释放时不受到任何游戏速度修饰符的影响，仅在存储时受影响。
<br>
<br>
存储真实时间会完全停止所有产出，实际上暂停了您的游戏。每经过一个真实时间秒，您都会获得存储的真实时间（受某些效率因子修改）。您可以使用存储的真实时间在符文标签页中放大现实。完成现实时，这会一次性使用您所有的存储真实时间，以尝试
一遍又一遍地重复那个完全相同的现实，给您通常会从重复中获得的所有奖励。例如，如果
您存储了 ${formatInt(50)} 分钟并放大一个持续了 ${formatInt(10)} 分钟并会
给予 ${format(DC.E30)} 现实机器和 ${format(DC.E12)} 遗迹碎片的现实，放大的现实将给您 ${format(5e30)} 现实机器、
${format(5e12)} 遗迹碎片、${formatInt(5)} 个符文（受您的过滤设置影响），
以及 ${formatInt(5)} 个复兴点数。
<br>
<br>
但是，如果您的现实持续了不到 ${formatInt(1)} 秒，放大倍数会被存储的秒数限制。例如，如果您存储了 ${formatInt(1000)} 秒并放大一个持续了 ${format(0.2, 2, 2)} 秒的现实，您将使用 ${formatInt(200)} 秒来模拟 ${formatInt(1000)} 次现实。
<br>
<br>
您可以切换一个设置，自动将离线时间存储为存储的真实时间。
<br>
<br>
她的第一个解锁需要 ${format(TimeSpan.fromMilliseconds(new Decimal(ENSLAVED_UNLOCKS.FREE_TICKSPEED_SOFTCAP.price)).totalYears)}
年的存储游戏时间。它将时间维度获得的Tickspeed 升级的软上限
（其成本开始增加更快的点）提高
${format(1e5)} 个Tickspeed 升级。
<br>
<br>
在 ${format(TimeSpan.fromMilliseconds(new Decimal(ENSLAVED_UNLOCKS.RUN.price)).totalYears)} 年的存储游戏时间时，您最终可以
解锁她的现实。完成无名氏的现实的奖励是
${Enslaved.isCompleted
    ? "解锁超立方体，它有自己的玩法指南条目。"
    : "<span style='color: var(--color-bad);'>(完成无名氏的现实以查看奖励详情)</span>"}
<br>
<br>
无名氏不会直接解锁下一个天神。
`,
      isUnlocked: () => EffarigUnlock.eternity.isUnlocked,
      tags: ["reality", "time", "blackhole", "lategame", "testers", "celestial",
        "现实", "时间", "黑洞", "天神", "无名氏",
        ...credits.people.map(p => p.name)
      ],
      tab: "celestials/enslaved"
    }, {
      name: "超立方体",
      info: () => `
超立方体是您完成无名氏的现实后解锁的新资源。
<br>
<br>
无限维度通常总共限制在 ${format(InfinityDimensions.HARDCAP_PURCHASES)} 次购买，
这限制了它们的乘数能有多大，因为最终您无法再升级它们。
超立方体允许您通过花费无限点数来提高此上限。
<br>
<br>
超立方体的成本以超指数方式增加，但每个连续的超立方体都比上一个强大得多，以弥补这一点。超立方体数量从不重置，这意味着一旦购买，您不需要再次达到无限点数成本即可在后续现实中利用提高的上限。
<br>
<br>
您可以在无限维度标签页中查看有关当前超立方体数量和下一个超立方体成本的额外信息。此外，您当前的无限点数现在也会显示朝向下一个超立方体的百分比。
如果买得起，无限按钮本身会在视觉上发生变化，点击时会将您带到无限维度标签页。
`,
      isUnlocked: () => Enslaved.isCompleted,
      tags: ["reality", "lategame", "tesseract", "id", "celestial",
        "现实", "超立方体", "天神"],
      tab: "celestials/tesseract"
    }, {
      name: "薇，成就天神",
      alias: "薇",
      info: () => `
薇是一个特殊的天神，她不是由另一个天神解锁的，
而是通过完成成就 ID 151（第 ${formatInt(15)} 行，第 ${formatInt(1)} 列，
“你真的不需要它”）来解锁的，该成就要求您在当前无限中不购买 8th 反物质维度的情况下获得 ${formatInt(800)} 个反物质星系。
<br>
<br>
在从成就解锁子标签页后，您会看到另一组完全解锁薇的要求。
您必须已经完成 ${formatInt(GameDatabase.celestials.v.mainUnlock.realities.requirement)} 次现实并拥有
${format(GameDatabase.celestials.v.mainUnlock.realityMachines.requirement)} 个未花费的现实机器。
此外，您需要在同一次现实中达到 ${format(GameDatabase.celestials.v.mainUnlock.eternities.requirement)} 永恒次数、
${format(GameDatabase.celestials.v.mainUnlock.infinities.requirement)} 无限次数、
${format(GameDatabase.celestials.v.mainUnlock.dilatedTime.requirement)} 膨胀时间和
${format(GameDatabase.celestials.v.mainUnlock.replicanti.requirement)} 复制器。
<br>
<br>
当您满足所有这些要求时，您将能够访问薇的现实。
${VUnlocks.vAchievementUnlock.isUnlocked
    ? `然而，完成现实本身只是开始。薇有六个不同的要求，每个要求都
      要求您在薇的现实中取得一定进度。完成一个要求会奖励您一个
      薇成就。
      薇成就是永久的，在退出薇的现实后仍然保留，并且不需要全部同时完成。
      <br>
      <br>
      完成要求后，薇成就阈值会增加，如果您能达到新目标，可以再次完成。
      您每类薇成就最多可以完成六次。
      完成的薇成就会做两件事：
      <br>
      - 达到一定总数的薇成就后，您会自动解锁薇标签页上的升级，无需
      花费任何资源。
      <br>
      - 每个薇成就还给您一个空间定理。
      <br>
      <br>
      拥有 ${formatInt(2)} 个薇成就后解锁的目标降低允许您通过花费复兴点数使某些薇成就
      要求更容易完成，最低可降至最简单层级所需的值。
      降低目标的成本不会随着使用而增加，并且也会降低未来层级。
      <br>
      <br>
      空间定理允许您购买通常被禁止的时间研究，例如改进无限点数公式后节奏分叉中的多条路径，或底部附近暗/光对中的两个时间研究。
      与时间定理一样，每次重置研究时它们都会免费归还。
      拥有足够的空间定理，您最终将能够一次性购买每一个时间研究！
      <br>
      <br>
      达到 ${formatInt(36)} 个薇成就（因此完成薇的所有成就）将解锁下一个
      天神。`
    : "<span style='color: var(--color-bad);'>(解锁薇的现实以查看更多详情)</span>"}
`,
      isUnlocked: () => Achievement(151).isUnlocked,
      tags: ["reality", "lategame", "girlfriend", "challenges", "achievement", "space", "theorems",
        "study", "triad", "celestial",
        "现实", "挑战", "成就", "空间", "定理", "研究", "天神", "薇"],
      tab: "celestials/v"
    }, {
      name: "太阳神，遗忘天神",
      alias: "太阳神",
      info: () => `
太阳神是第五个天神，通过完全完成薇的所有成就来解锁。她使用她的记忆以
更强的方式带回先前天神的正面效果。随着时间推移，您将在太阳神<i>内部</i>解锁前四个
天神，每个天神提供与其原始主题相关的额外升级。
<br>
<br>
太阳神内的每个先前天神通过使用记忆来获得等级，记忆由记忆块随时间被动产出。记忆块只能通过进入太阳神的现实获得，但在现实内部，记忆块会基于某些资源总量被动产出。如果您正在存储真实时间，您在太阳神的现实内将不会获得任何
记忆块，但记忆仍会正常产出。所有天神总共达到
${formatInt(Ra.remembrance.requiredLevels)} 级会解锁记忆，
允许您选择一个特定的天神在太阳神的现实内获得更多记忆块。
<br>
<br>
记忆可以花在三个方面——增加记忆块获取、增加记忆获取，以及升级
天神。您开始太阳神时只有特蕾莎解锁，每个后续天神通过将前一个天神达到 ${formatInt(8)} 级来解锁。等级上限为 ${formatInt(25)}。
<br>
<br>
特蕾莎解锁了为您的无限升级充能的能力，使它们强大得多。一旦您达到特定符文献祭值阈值，她还会
改善您的符文效果。
<br>
<br>
在 ${formatInt(2)} 级时，鹿颈长解锁
${Ra.unlocks.effarigUnlock.canBeApplied
    ? "一种称为符文炼金的新机制，之后还会使鹿颈长符文更强，同时逐渐移除" +
      "符文生成中几乎所有随机元素。符文炼金也有自己的玩法指南条目。"
    : "<span style='color: var(--color-bad);'>(在太阳神内解锁鹿颈长以查看解锁详情)</span>"}
<br>
<br>
无名氏解锁
${Ra.unlocks.enslavedUnlock.canBeApplied
    ? "与充能黑洞相关的额外机制，并使它们显著更强。"
    : "<span style='color: var(--color-bad);'>(在太阳神内解锁无名氏以查看解锁详情)</span>"}
<br>
<br>
薇解锁
${Ra.unlocks.vUnlock.canBeApplied
    ? "三元研究，这是树底部附近需要空间定理的新研究。每个三元研究 " +
      "要求您也拥有附近的三个研究才能购买。它们还解锁 " +
      "一组更小、更难的薇成就以完成，以获得额外的空间定理。"
    : "<span style='color: var(--color-bad);'>(在太阳神内解锁薇以查看解锁详情)</span>"}
<br>
<br>
太阳神不会直接解锁下一个天神。`,
      isUnlocked: () => VUnlocks.raUnlock.isUnlocked,
      tags: ["reality", "memories", "razenpok", "levels", "glyphs", "lategame",
        "effarig", "teresa", "nameless", "v", "celestial",
        "现实", "记忆", "等级", "符文", "天神", "太阳神", "鹿颈长", "特蕾莎", "无名氏", "薇"],
      tab: "celestials/ra"
    }, {
      name: "符文炼金资源",
      info: () => `
符文炼金是通过在太阳神中将鹿颈长达到 ${formatInt(2)} 级来解锁的机制。它解锁了
通过将您的符文精炼为与其类型相关的炼金资源来消耗它们的能力。您可以通过
在符文标签页中将献祭类型设置为“始终献祭”以外的其他选项，并执行正常的献祭
程序来精炼符文。
每种炼金资源都有独特的效果，您可以在炼金标签页上查看。
<br>
<br>
除了所有其他属性外，符文现在还有一个<i>精炼值</i>，决定了它
对其相关炼金资源值多少。此值基于符文等级的立方，缩放
使得等级 ${formatInt(10000)} 的符文对应 ${formatInt(10000)} 个炼金资源。然而，单个符文本身在精炼时只给出此值的 ${formatPercents(GlyphSacrificeHandler.glyphRefinementEfficiency)}。
这些是 ${formatPercents(1)} 稀有度符文的值；较低稀有度的符文仍具有相同的上限，但给出
按比例较少的资源。例如，${formatPercents(0.5)} 稀有度的符文只给出
一半的资源。
<br>
<br>
炼金资源不能无限获得；每个资源有一个上限，基于您精炼过的该类型所有符文中最高的精炼
值。例如，如果您精炼过的最高等级时间符文
是 ${formatInt(8000)} 级（精炼值：${formatInt(GlyphSacrificeHandler.levelRefinementValue(8000))}），那么无论您精炼多少时间符文，您永远无法拥有超过
${formatInt(GlyphSacrificeHandler.levelRefinementValue(8000))} 个时间资源，直到您精炼另一个具有更高精炼值的时间符文。
`,
      isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
      // Oh god I'm so sorry this is so many words
      tags: ["reality", "lategame", "ra", "effarig", "alchemy", "power", "infinity", "time", "replication",
        "dilation", "cardinality", "eternity", "dimensionality", "inflation", "alternation", "synergism", "momentum",
        "decoherence", "force", "exponential", "uncountability", "boundless", "unpredictability", "multiversal",
        "reaction", "现实", "炼金", "符文", "太阳神", "鹿颈长"],
      tab: "reality/alchemy"
    }, {
      name: "符文炼金反应",
      info: () => `
炼金资源可以以某些组合结合在一起，以创建新的复合资源，复合资源在特定鹿颈长等级时解锁。资源每次现实结合一次，不受真实时间
放大影响。当您的反应物数量更高时，反应的产出更高，因此发生得更快。复合资源
的上限等于其所有反应物中最低的上限。为了使反应发生，
所有反应物的当前数量必须大于产出资源的当前数量。
<br>
<br>
反应速度与反应可用的反应物量成正比，但只有反应物量高于
产出量的部分才有资格被使用。例如，如果您有 ${formatInt(10000)} 个所有反应物和
${formatInt(7500)} 个产出，则只有 ${formatInt(2500)} 个反应物用于计算反应速度。
如果您有 ${formatInt(0)} 个产出，则<i>所有</i>反应物都可用于反应，并且它会
快 ${formatX(4)} 倍。最后，如果您有 ${formatInt(10000)} 个产出，那么没有任何反应物可以
使用，反应根本不会运行。
<br>
<br>
要激活或停用反应，请点击反应产物对应的圆圈。当反应可以
应用时，会显示从所有反应物到产物的移动线。如果连接是实线，那意味着
由于没有足够的该反应物来因上限获得更多产物，反应无法继续。
`,
      isUnlocked: () => Ra.unlocks.unlockGlyphAlchemy.canBeApplied,
      tags: ["reality", "lategame", "ra", "effarig", "alchemy", "power", "infinity", "time", "replication",
        "dilation", "cardinality", "eternity", "dimensionality", "inflation", "alternation", "synergism", "momentum",
        "decoherence", "force", "exponential", "uncountability", "boundless", "unpredictability", "multiversal",
        "reaction", "现实", "炼金", "反应", "符文", "太阳神", "鹿颈长"],
      tab: "reality/alchemy"
    }, {
      name: "虚幻机器",
      info: () => `
一旦您能够在单次现实中获得至少 ${format(MachineHandler.baseRMCap)} 现实机器，您
将解锁获得一种称为虚幻机器的新资源的能力。现实机器也将被硬性上限
为 ${format(MachineHandler.baseRMCap)}；您将无法超过此限制获得更多。
<br>
<br>
此外，您将解锁虚数升级标签页，其中包含一组类似于现实升级的升级——
每个升级都有一个您必须满足才能解锁的条件，以及一个虚幻机器成本用于实际购买它。
前两行升级可以重复购买，而其他三行是一次性升级。
<br>
<br>
您的虚幻机器数量受两件事影响：
<br>
<b>虚幻机器上限</b>——这是您曾经可以拥有的最大虚幻机器数量，基于如果没有现实机器上限您本可以获得的最高现实机器数量。这是持续更新的，因此如果您超过之前最高的未上限现实机器数量，它会立即增加。
<br>
<b>当前虚幻机器</b>——随着时间推移，您当前的虚幻机器会被动地朝您的虚幻机器上限上升，方式是当您接近上限时以指数方式减慢。默认情况下，虚幻机器以您<i>缺少</i>
（即您的上限减去当前数量）的数量每分钟减半的速率减慢。此增长率不受任何
游戏速度修饰符的影响。
<br>
<br>
虚幻机器升级将解锁最后两个天神。
`,
      isUnlocked: () => MachineHandler.isIMUnlocked,
      tags: ["imaginary", "machines", "reality", "lategame", "虚幻机器", "现实"],
      tab: "reality/imag_upgrades"
    }, {
      name: "莱特拉，维度天神",
      alias: "莱特拉",
      info: () => `
莱特拉是第六个天神，通过花费
${format(ImaginaryUpgrade(15).cost)} 虚幻机器购买相应的虚数升级来解锁。
<br>
<br>
莱特拉给予一种称为暗物质的新货币，它基于您曾经拥有过的最高暗物质量为连续统的效果提供乘数。暗物质由
暗物质维度产出，以一种类似于游戏中所有其他类型维度的级联方式。与其他
维度不同，只有四个暗物质维度而不是八个。您立即从第一个解锁开始，
更高的维度通过虚数升级解锁。解锁维度时，您会获得
${formatInt(1)} 个该维度，并且无法从下一层级产出更多之前无法获得更多。
<br>
<br>
每个暗物质维度在特定时间间隔后生成两样东西：暗物质或下一个较低的
暗物质维度，以及另一种称为暗能量的资源。暗物质和暗物质维度产出
每个间隔等于您的暗物质乘数与您拥有的维度数量的乘积，而
暗能量产出与您的维度数量无关。暗能量用于产出奇点，
奇点有自己的玩法指南条目。
<br>
<br>
暗物质维度的间隔可以升级到最低 ${formatInt(10)}ms，此时
您无法再升级间隔。您可以选择飞升达到该点的暗物质维度，
这最初会将暗物质获取乘以 ${formatInt(POWER_DM_PER_ASCENSION)}，暗能量乘以
${formatInt(POWER_DE_PER_ASCENSION)}。间隔被乘以 ${formatInt(1200)}，但可以再次
升级。再次达到 ${formatInt(10)}ms 允许您再次飞升（如果您选择）。
<br>
<br>
虚数升级允许您解锁一种称为湮灭的转生。湮灭重置您的暗物质
和暗物质维度，但为暗物质添加一个永久乘数，应用于所有暗物质
维度。您可以多次湮灭；对乘数的加法以加法方式叠加，无需
每次湮灭都获得更大的加法。您必须至少拥有
${format(Laitela.annihilationDMRequirement)} 暗物质才能湮灭。
<br>
<br>
莱特拉有一个现实，根据您在现实中的表现给予暗物质维度的暗物质力量一个乘数。每当您在 ${formatInt(30)} 秒内完成现实时，您最高可用的
维度将在该现实的后续尝试中永久禁用。通过在 ${formatInt(30)} 秒内完成现实八次来禁用所有维度，也会给您的暗能量获取一个 ${formatX(8)} 乘数
。
<br>
<br>
莱特拉不会直接解锁下一个天神。
`,
      isUnlocked: () => Laitela.isUnlocked,
      tags: ["omsi", "reality", "dark", "matter", "dimensions", "lategame", "ascend", "celestial",
        "现实", "暗物质", "维度", "飞升", "天神", "莱特拉"],
      tab: "celestials/laitela"
    }, {
      name: "连续统",
      info: () => `
当您解锁莱特拉时，您的反物质维度和Tickspeed 升级切换到一种称为连续统的新产出
模式，它给予与之前相同的效果，但允许购买部分维度或
Tickspeed 升级。这些小数购买免费提供，无需花费您的反物质，并将提供
其乘数的相应部分。
<br>
<br>
反物质维度和Tickspeed 升级的购买按钮会被修改，以显示如果连续统未激活时您能够购买的升级数量，购买数量与反物质平滑缩放。
例如，拥有 ${format(2e7)} 反物质将给您的Tickspeed （初始成本为 ${format(1e3)}，增量为 ${formatX(10)}）一个 ${format(5.3, 0, 1)} 的连续统值，因为您可以购买 ${formatInt(5)} 次并且
大约 ${formatPercents(0.3)} 距离下一次。在这种情况下，Tickspeed 连续统将给出等于 (升级乘数)<sup>${format(5.3, 0, 1)}</sup> 的产出加成。
<br>
<br>
某些升级会直接乘以连续统值，这会给产出加成而不影响成本
缩放。但是，如果连续统在自动购买器页面上被禁用，这些升级将不起作用，可能
导致产出损失。连续统使您的反物质维度和Tickspeed 的自动购买器变得过时，
因此只要连续统处于激活状态，这些自动购买器的所有相关设置都会在该标签页上隐藏。
`,
      // Apparently continuumUnlocked is really important in a lot of places and if we keep it unlocked
      // Things break, so we check for the iMU instead.
      isUnlocked: () => ImaginaryUpgrade(15).isBought,
      tags: ["continuum", "purchase", "reality", "lategame", "连续统", "购买", "现实"],
      tab: ""
    }, {
      name: "奇点",
      info: () => `
奇点是一种新资源，您可以使用莱特拉内的功能获得。
<br>
<br>
为了获得奇点，您需要达到 ${format(200)} 暗能量。当您达到时，您可以选择
将所有暗能量凝聚为奇点，将其重置为零。任何超过此数量的额外暗能量
不会结转，因此会被浪费。请注意，只有暗能量被重置，凝聚奇点时您的暗物质及其
维度的状态保持不变。
<br>
<br>
一旦您达到 ${formatInt(10)} 个奇点，您可以自由地将暗能量需求增加或减少 ${formatInt(10)} 倍（最低为 ${format(200)}）。这会<i>多于</i> ${formatInt(10)} 倍地增加或减少从上限重置时获得的奇点数量，使得
如果您愿意等待，更高的上限更值得。
<br>
<br>
奇点的目的是解锁奇点里程碑，其作用类似于永恒里程碑。解锁
这些里程碑只需您达到指定的奇点总数；奇点不会被消耗。
里程碑有三种类型——一次性里程碑、可重复有限次数的里程碑，以及可以无限重复的里程碑
。
<br>
<br>
独立于里程碑类型，里程碑还有一个图标，表明它们通常给予的升级类型：
<br>
<b>ᛝ</b> 这些里程碑帮助莱特拉特有的机制
<br>
<i class="fas fa-arrows-alt"></i> 这些里程碑让莱特拉中的资源影响游戏的其他部分
<br>
<i class="fas fa-compress-arrows-alt"></i> 这些里程碑基于莱特拉之外的内容改进莱特拉
`,
      isUnlocked: () => Laitela.isUnlocked,
      tags: ["reality", "lategame", "laitela", "dark", "现实", "奇点", "莱特拉", "暗"],
      tab: ""
    }, {
      name: "佩勒，反物质天神",
      alias: "佩勒",
      info: () => `
当您购买最后的虚数升级并解锁佩勒时，您会解锁她的标签页，您可以在其中找到一个按钮
“毁灭您的现实”。为了毁灭您的现实，您必须已经完成此时可用的所有 ${formatInt(17)} 行成就，
并获得 ${formatInt(25000)} 个每种炼金资源。
<br>
<br>
${Pelle.isDoomed
    ? `毁灭您的现实将开始一个新的<b>毁灭现实</b>，重置到现实为止的几乎整个游戏，不给您当前现实进度的任何奖励。
      <br>
      <br>
      当您进入毁灭现实时，您保留统计标签页中“通用”和“现实”标题下的所有值以及您所有的最佳挑战时间。在毁灭现实内，多个升级、时间研究、挑战和
      天神奖励、复兴以及其他游戏机制被禁用或不给予奖励。
      您可以在佩勒标签页中查看“在毁灭现实中显示效果”以获取更多信息。
      <br>
      <br>
      残骸是在末日重置时获得的新货币。残骸获取基于您在所有毁灭现实中的最高反物质、
      无限点数和永恒点数。残骸产出现实碎片，可用于购买佩勒升级。
      <br>
      <br>
      佩勒升级可以分为两类。第一行的五个升级可以重复购买，
      但最终会达到上限。它们对游戏的不同方面给予加成，使毁灭
      现实内的进度更容易。
      <br>
      <br>
      下面几行中的其他升级提供自动化和 QoL（生活质量）改进。从这些升级中解锁的一切
      都不能通过游戏中通常的方法解锁；例如，如果完成了普通挑战，它们都不会解锁自动购买器，因为它们都被锁定在佩勒升级之后。
      您可以切换升级上方的按钮来隐藏已购买的升级，或点击
      <i class="fas fa-compress-arrows-alt"></i> 图标来折叠并隐藏整个面板。
      <br>
      <br>
      <b>快捷键：Z</b> 将尝试进行一次末日重置。`
    : "<span style='color: var(--color-bad);'><b>您必须毁灭您的现实才能阅读本条目的其余部分。</b></span>"
}
`,
      isUnlocked: () => Pelle.isUnlocked,
      tags: ["reality", "antimatter", "lategame", "final", "hevipelle", "celestial", "doom",
        "现实", "反物质", "最终", "天神", "毁灭", "佩勒"],
      tab: "celestials/pelle"
    }, {
      name: "佩勒打击",
      info: () => `
佩勒打击在毁灭现实中的不同事件中遇到。您已经通过
在毁灭现实中首次达到无限遇到了第一个佩勒打击。更多打击最终会通过进一步推进而发生。
每个佩勒打击都会对游戏的特定方面添加一个削弱，可以通过点击打击名称来查看。
每个佩勒打击还会解锁一个裂痕条。
<br>
<br>
裂痕条可以通过点击它们在“空闲”和“填充”之间切换来填充，尽管在任何给定时间只能有两个裂痕处于“填充”状态。激活时，裂痕每秒消耗 ${formatInt(3)}% 的裂痕特定资源。每个
裂痕提供基于填充总量的裂痕特定效果。
${PelleStrikes.eternity.hasStrike
    ? `此规则的例外是衰变/坍塌/混乱，一旦您总共抽干了
    ${formatPostBreak(DC.E2000)} 复制器，其效果就会被上限。`
    : ""}
此外，每个裂痕在填充到一定百分比时会提供三个里程碑奖励。
`,
      isUnlocked: () => PelleStrikes.infinity.hasStrike,
      tags: ["reality", "antimatter", "lategame", "final", "pelle", "strike", "rift", "celestial",
        "现实", "反物质", "最终", "佩勒", "打击", "裂痕", "天神"],
      tab: "celestials/pelle"
    }, {
      name: "星系生成器",
      info: () => `
当您达到 ${formatInt(100)}% 递归/分散/毁灭时，您将解锁<b>星系生成器</b>，它可以
被动生成星系。生成的星系类似于复制器星系和超光速星系，它们影响
Tickspeed，就好像它们是反物质星系一样，但它们不会增加您下一个反物质星系的成本。您
还解锁五个新升级。第一个升级增加生成星系的基础数量。其他四个
升级然后给此基础数量一个乘数。前两个升级可以通过花费反物质和
生成的星系来购买。复制器或超光速星系不能用于购买这些升级。
<br>
<br>
<b>星系生成器</b>有一个可以生成的最大星系数量，只能在达到当前上限后通过抽干
裂痕来增加。
`,
      isUnlocked: () => Pelle.hasGalaxyGenerator,
      tags: ["reality", "antimatter", "lategame", "final", "pelle", "galaxy",
        "galaxies", "generator", "celestial",
        "现实", "反物质", "最终", "佩勒", "星系", "生成器", "天神"],
      tab: "celestials/pelle"
    }, {
      name: "终局",
      info: () => `
在毁灭现实中达到 ${format(DC.E9E15)} 反物质后，您将能够进行一次<b>终局</b>。
这会重置除统计中“通用”标签页下的内容、第 ${formatInt(19)} 行及以上的成就
和挑战时间之外的所有内容。进行一次终局重置将获得一个终局。终局会授予里程碑，使游戏更快更容易，无论是在毁灭现实内部还是外部。
<br>
<br>
进行一次<b>终局</b>后，您将获得两种不同的资源：天神点和末日遗物。
天神点用于购买天神维度，末日遗物用于削弱毁灭现实
并重新启用其中的内容。您最终将能够突破 ${format(DC.E9E15)} 反物质，
但目前这是不可能的。
`,
      isUnlocked: () => PlayerProgress.endgameUnlocked(),
      tags: ["endgame", "cp", "celp", "dp", "points", "particles", "end", "reset", "prestige", "enter",
        "simulation", "supersonic", "seven",
        "终局", "点", "粒子", "结束", "重置", "转生"],
      tab: "endgame/endgame"
    }
  ]
};

(function() {
  for (let i = 0; i < h2p.tabs.length; i++) {
    const tab = h2p.tabs[i];
    tab.id = i;
    if (tab.alias === undefined) tab.alias = tab.name;

    tab.searchTermsRelevance = {};
  }

  const searchIndex = {};

  const addTerm = (term, tab) => {
    let entry = searchIndex[term];
    if (entry === undefined) {
      entry = [];
      searchIndex[term] = entry;
    }
    if (entry.includes(tab)) return;
    entry.push(tab);
  };

  const addWord = (word, tab) => {
    const lowerCase = word.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
      const term = lowerCase.slice(0, i + 1);
      addTerm(term, tab);
      if (tab.searchTermsRelevance[term] === undefined) {
        tab.searchTermsRelevance[term] = ((i + 1) / lowerCase.length) ** 0.65;
      } else {
        tab.searchTermsRelevance[term] = Math.max(tab.searchTermsRelevance[term], ((i + 1) / lowerCase.length) ** 0.65);
      }
    }
  };

  const addPhrase = (phrase, tab) => {
    addWord(phrase, tab);
    for (const part of phrase.split(" ")) {
      addWord(part, tab);
    }
  };

  for (const tab of h2p.tabs) {
    addPhrase(tab.name, tab);
  }
  for (const tab of h2p.tabs) {
    for (const tag of tab.tags) {
      addPhrase(tag, tab);
    }
  }
  for (const tab of h2p.tabs) {
    addPhrase(tab.alias, tab);
  }

  const map2dToObject = function(arr, keyFun, valueFun) {
    const out = {};
    for (let idx1 = 0; idx1 < arr.length; idx1++) {
      for (let idx2 = 0; idx2 < arr[idx1].length; idx2++) {
        out[keyFun(arr[idx1][idx2], idx1, idx2)] = valueFun(arr[idx1][idx2], idx1, idx2);
      }
    }
    return out;
  };

  // Very suboptimal code coming up. If anybody has a better solution, PLEASE, implement it.
  const keyboardify = keybrd => map2dToObject(keybrd.split(",").map(str => str.split("")),
    key => key, (_key, x, y) => ({ x, y }));

  const qwerty = keyboardify(`1234567890,qwertyuiop,asdfghjkl,zxcvbnm`);
  const qwertz = keyboardify(`1234567890,qwertzuiop,asdfghjkl,yxcvbnm`);
  const azerty = keyboardify(`1234567890,azertyuiop,qsdfghjklm,wxcvbn`);
  const dvorak = keyboardify(`1234567890,'<>pyfgcrl,aoeuidhtns,;qjkxbmwvz`);
  const colemak = keyboardify(`1234567890,qwfpgjluy,arstdhneio,zxcvbkm`);
  const workman = keyboardify(`1234567890,qdrwbjfup,ashtgyneoi,zxmcvkl`);
  const qwprf = keyboardify(`1234567890,qwprfyukl,asdtghnioe,zxcvbjm`);

  const keyboards = [qwerty, qwertz, azerty, dvorak, colemak, workman, qwprf];

  const keyboardDist = function(a, b, keyboard) {
    const aPos = keyboard[a], bPos = keyboard[b];
    if (!aPos || !bPos) return 100;
    return Math.max(Math.abs(aPos.x - bPos.x), Math.abs(aPos.y - bPos.y));
  };

  // I copied this code based on OSA distance off wikipedia, with a few added changes.
  // The cost for "substitution" (third item of the first Math.min) is replaced from a static value
  // to a function which roughly estimates how likely the user is to mispress the key based on its
  // minimum distance from several common keyboard layouts.
  // I have no idea how the actual "distance" calculation works but as long as it does don't touch it.
  const howBadlyTypoedWithKeyboard = function(a, b, keyboard) {
    // If they're the same, skip all calculations
    if (a === b) return 0;
    const aLen = a.length;
    const bLen = b.length;
    // If they're way too different, don't bother
    if (Math.abs(aLen - bLen) > 3) return 100;
    // 2d Array with dimensions aLen + 1 x bLen + 1
    const d = new Array(aLen + 1).fill(0).map(() => new Array(bLen + 1).fill(0));

    for (let i = 0; i <= aLen; i++) {
      d[i][0] = i;
    }
    for (let i = 0; i <= bLen; i++) {
      d[0][i] = i;
    }

    for (let i = 1; i <= aLen; i++) {
      for (let j = 1; j <= bLen; j++) {
        const distance = keyboardDist(a[i - 1], b[j - 1], keyboard);
        const cost = distance === 0 ? 0 : 0.3 + distance * distance * 0.25;
        d[i][j] = Math.min(
          d[i - 1][j] + 0.55,
          d[i][j - 1] + 0.7,
          d[i - 1][j - 1] + cost
        );
      }
    }
    return d[aLen][bLen];
  };

  const howBadlyTypoed = function(a, b) {
    // Arbitrarily large number
    let minTypoed = 1e10;
    for (const keyboard of keyboards) {
      minTypoed = Math.min(minTypoed, howBadlyTypoedWithKeyboard(a, b, keyboard));
    }
    return minTypoed;
  };

  const specialChars = ["'", "\"", ",", "-", ".", "_"];

  const replaceSpecialChars = function(str) {
    let result = str;
    for (const i of specialChars) {
      result = result.replaceAll(i, "");
    }
    return result;
  };

  // There are a LOT of magic numbers in this code, mostly from arbitrary choices for "What number is large enough to
  // act as a placeholder for 'basically not found'?"
  // This will need some cleanup if possible.
  h2p.search = query => {
    const truncatedQuery = replaceSpecialChars(query);
    if (truncatedQuery === "") return h2p.tabs.map(x => ({ tab: x, relevance: 1.5 }));
    const searchTerms = truncatedQuery.toLowerCase().split(" ").filter(str => str !== "");

    // A higher "Relevance" value actually means it's further away from the search, important to keep in mind
    const relevances = Array.repeat(1e4, h2p.tabs.length);
    for (const searchWord of searchTerms) {
      const minimumRequirement = Math.min(searchWord.length - 0.9, 3) * 0.5;
      for (const searchIndexStr in searchIndex) {
        const typoThreshold = howBadlyTypoed(replaceSpecialChars(searchIndexStr), searchWord);
        if (typoThreshold < minimumRequirement) {
          for (const tab of searchIndex[searchIndexStr]) {
            const maxRelevance = tab.searchTermsRelevance[searchIndexStr];
            const decrease = Math.max(maxRelevance * 1.6 - 0.9, 0);
            relevances[tab.id] = Math.min(relevances[tab.id], Math.max(typoThreshold, 1 - maxRelevance) - decrease);
          }
        }
      }
    }
    const results = h2p.tabs.filter(x => relevances[x.id] < 0.9)
      .map(x => ({ tab: x, relevance: relevances[x.id] }));
    // Provide both the relevance and the tab itself

    // Sort by id first, then push more relevant results to top.
    results.sort((a, b) => a.tab.id - b.tab.id).sort((a, b) => a.relevance - b.relevance);
    // Provide both the relevance and the tab itself
    return results;
  };
}());
