import { automatorTemplates } from "../script-templates";

export const automator = {
  categoryNames: [
    "时间研究",
    "事件触发",
    "更改设置",
    "信息",
    "脚本流程",
  ],
  commands: [
    {
      id: 0,
      isUnlocked: () => true,
      keyword: "STUDIES RESPEC",
      category: 0,
      syntax: `<b>studies respec</b>`,
      description: `此命令开启重置选项，将在下次手动或自动永恒时重置你的时间研究。
        注意：此命令本身不会执行永恒，请确保你的自动购买器已开启，或手动执行永恒命令（尽管永恒命令有自己的内置重置选项）。`,
      examples: [
        `studies respec`,
      ]
    },
    {
      id: 1,
      isUnlocked: () => true,
      keyword: "STUDIES LOAD",
      category: 0,
      syntax: `<b>studies</b> [nowait] <b>load id</b> <u>selector</u><br>
        <b>studies</b> [nowait] <b>load name</b> <u>name</u>`,
      description: `加载一个时间研究预设，就像你在时间研究标签页点击了按钮一样。`,
      sections: [
        {
          name: "输入",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                若存在，自动机将尽可能多地购买研究后再继续。默认情况下（即没有"nowait"时），
                此命令将无限重复此行，直到预设中的所有研究都已购买；如果不小心，这可能导致自动机无限卡住。
              `
            },
            {
              header: "<i>selector</i>",
              description: `
                通过槽位编号查找并加载指定的时间研究预设。编号为1到6，从左到右排列。`
            },
            {
              header: "<i>name</i>",
              description: "通过给定名称查找并加载指定的时间研究预设。区分大小写。"
            },
          ]
        }
      ],
      examples: [
        `studies load id 2`,
        `studies load name ANTI`,
        `studies nowait load name dil`,
      ]
    },
    {
      id: 2,
      isUnlocked: () => true,
      keyword: "STUDIES PURCHASE",
      category: 0,
      syntax: `<b>studies</b> [nowait] <b>purchase <u>study_list</u></b>`,
      description: "从时间研究列表中购买指定的时间研究。",
      sections: [
        {
          name: "输入",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                若存在，自动机将尽可能多地购买研究后再继续。默认情况下（即没有"nowait"时），
                此命令将无限重复此行，直到预设中的所有研究都已购买；如果不小心，这可能导致自动机无限卡住。
              `
            },
            {
              header: "<i>study_list</i>",
              description: `
                支持导出的时间研究树格式，即简单的逗号分隔的时间研究ID列表。此命令还支持更灵活的格式，
                额外允许研究范围（例如<u>11-62</u>）和以下别名：<br>
                <blockquote><b>antimatter, infinity, time, active, passive, idle, light, dark</b></blockquote>
                变量名也可用于替代整个时间研究列表（参见定义面板），但在这种情况下不允许使用简写范围和别名。`
            },
          ]
        }
      ],
      examples: [
        "studies nowait purchase 11,21,31",
        "studies purchase 11-62, antimatter, 111, idle",
        "studies nowait purchase ec6Studies",
      ]
    },
    {
      id: 3,
      isUnlocked: () => true,
      keyword: "PRESTIGE",
      category: 1,
      syntax: `
        <b>infinity</b> [nowait]<br>
        <b>eternity</b> [nowait] [respec]<br>
        <b>reality</b> [nowait] [respec]<br>
        <b>doom</b> [nowait]<br>
        <b>armageddon</b> [nowait]<br>
        <b>endgame</b> [nowait]`,
      description: `尽可能触发无限、永恒、现实、末日、大灾变或永恒重置，否则自动机将在此命令处等待直到可以触发。
        如果发现脚本经常在此命令处卡住，可能是自动购买器在自动机到达此行之前触发了重置——考虑使用<i>nowait</i>或通过AUTO命令调整自动购买器设置。`,
      sections: [
        {
          name: "修饰符",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                若存在，当无法触发重置时（例如在低于目标的永恒挑战内），自动机将继续下一条命令，
                而不是反复尝试此命令。
              `
            },
            {
              header: "<i>respec</i>",
              description: `
                对于非无限/末日/大灾变的重置，在触发重置时同时执行相关的重置操作。<br>
                永恒：重置时间研究和永恒。<br>
                现实：卸下符文并现实。<br>
                终局：重置终局精通和终局。
              `
            },
          ]
        }
      ],
      examples: [
        "infinity",
        "eternity respec",
        "reality nowait",
        "doom",
        "armageddon",
        "endgame nowait respec"
      ]
    },
    {
      id: 4,
      isUnlocked: () => true,
      keyword: "UNLOCK",
      category: 1,
      syntax: "<b>unlock</b> [nowait] <u>feature</u>",
      description: "解锁指定的永恒挑战或膨胀时间。",
      sections: [
        {
          name: "修饰符",
          items: [
            {
              header: "<i>nowait</i>",
              description: `
                若存在，即使解锁失败，自动机也会继续下一条命令。默认情况下，自动机会持续运行此命令直到解锁成功。
              `
            },
          ]
        }
      ],
      examples: [
        "unlock dilation",
        "unlock ec7"
      ]
    },
    {
      id: 5,
      isUnlocked: () => true,
      keyword: "START",
      category: 1,
      syntax: `
        <b>start</b> ec<u>N</u><br>
        <b>start</b> dilation`,
      description: `启动指定的永恒挑战或膨胀时间永恒。此命令还会尝试解锁尚未解锁的永恒挑战，但不会对膨胀时间做同样的操作（使用UNLOCK命令来解锁）。
        如果你已经在指定的永恒挑战或膨胀时间永恒中，再次运行此命令不会做任何事情；否则，自动机将持续尝试启动永恒直到成功。`,
      examples: [
        "start ec12",
        "start dilation"
      ]
    },
    {
      id: 6,
      isUnlocked: () => true,
      keyword: "AUTO",
      category: 2,
      syntax: `<b>auto infinity</b> [setting]<br>
        <b>auto eternity</b> [setting]<br>
        <b>auto reality</b> [setting]`,
      description: `开启或关闭重置自动购买器，并允许你更改其设置。如果没有设置选项，此命令将切换自动购买器状态，
        即关闭时开启，开启时关闭。<b>如果你尝试修改没有的自动购买器或设置，此命令将不起作用。</b>`,
      sections: [
        {
          name: "设置",
          items: [
            {
              header: "<i>on</i> | <i>off</i>",
              description: "开启或关闭指定的自动购买器。",
            },
            {
              header: "<u><i>number</i></u> <u><i>时间单位</i></u>",
              description: `仅适用于无限和永恒。开启自动购买器并设置为在给定间隔触发。`
            },
            {
              header: "<u><i>number</i></u> x highest",
              description: `仅适用于无限和永恒。开启自动购买器并设置为"N倍最高"模式。`
            },
            {
              header: "<i><u>number</u> <u>货币</u></i>",
              description: `开启自动购买器并设置为在特定数量时触发。货币必须与自动购买器类型匹配（IP、EP或RM）。
                这将为现实自动购买器选择"现实机器"模式。符文等级模式只能手动更改，不能通过自动机设置。`,
            },
          ]
        }
      ],
      examples: [
        "auto infinity on",
        "auto eternity off",
        "auto infinity 30s",
        "auto eternity 10 seconds",
        "auto eternity 1e100 x highest"
      ]
    },
    {
      id: 7,
      isUnlocked: () => BlackHole(1).isUnlocked,
      keyword: "BLACK HOLE",
      category: 2,
      syntax: "<b>black hole</b> <u>state</u>",
      description: `开启或关闭黑洞的加速效果。通过自动机开启黑洞不会绕过从关闭到最大速度的渐进加速过程，
        该过程在黑洞变为永久之前发生。`,
      examples: [
        "black hole on",
        "black hole off",
      ]
    },
    {
      id: 8,
      isUnlocked: () => Enslaved.isUnlocked,
      keyword: "STORE GAME TIME",
      category: 2,
      syntax: "<b>store game time</b> <u>action</u>",
      description: `更改黑洞是否存储时间的设置。也允许使用存储的时间。`,
      sections: [
        {
          name: "操作",
          items: [
            {
              header: "<i>on</i> | <i>off</i>",
              description: `
                开启或关闭存储游戏时间。
              `
            },
            {
              header: "<i>use</i>",
              description: `
                使用所有存储的游戏时间。不会改变时间存储的开启/关闭状态。
              `
            }
          ]
        }
      ],
      examples: [
        "store game time on",
        "store game time off",
        "store game time use",
      ]
    },
    {
      id: 9,
      isUnlocked: () => true,
      keyword: "NOTIFY",
      category: 3,
      syntax: "<b>notify</b> \"<u>text</u>\"",
      description: `将指定文本以文本通知的形式显示在右上角，位置和样式与自动保存和成就/升级解锁等其他通知相同。
        在自动机标签页以外的标签页查看自动机状态时可能很有用。`,
      examples: [
        "notify \"Dilation reached\"",
        "notify \"ECs completed\""
      ]
    },
    {
      id: 10,
      isUnlocked: () => true,
      keyword: "Adding Comments",
      category: 3,
      syntax: "<b>#</b> text<br><b>//</b> text",
      description: `允许你在脚本中为自己留下注释。这对于组织或跟踪脚本中各个部分的功能可能很有用，
        以一种比仅使用命令更可读的方式。这些命令主要作为工具，帮助你更轻松地跟踪脚本的步骤。`,
      sections: [
        {
          name: "注释",
          items: [
            {
              header: "<i>行内注释</i>",
              description: `
                自动机不支持放在已功能化代码行后面的同行注释。例如，单行"studies load name TDI // Load push"
                将是无效命令。在这种情况下，需要将注释移到自动机中的单独一行。
              `
            },
            {
              header: "<i>执行速度</i>",
              description: `
                注释不会减慢脚本的速度，因为它们在执行过程中被完全跳过，不计入命令数量。例如，
                即使你在第20-40行有大量注释说明，自动机在执行时仍会<i>立即</i>从第19行跳到第41行。
              `
            },
          ]
        }
      ],
      examples: [
        "# get 1e20 before starting ec1",
        "// this loop alternates dilation and pushing"
      ]
    },
    {
      id: 11,
      isUnlocked: () => true,
      keyword: "WAIT",
      category: 4,
      syntax: "<b>wait</b> <u>condition</u>",
      description: `强制自动机等待某个条件或事件。要等待特定时间，请使用PAUSE命令。`,
      sections: [
        {
          name: "可能的条件",
          items: [
            {
              header: "<i>比较</i>",
              description: `
                等待直到比较语句为真。查看"格式化比较"条目以了解如何正确输入此选项。
              `
            },
            {
              header: "<i>重置</i>",
              description: `
                等待指定的重置（无限、永恒或现实）被其对应的自动购买器触发。这必须在到达此命令<i>之后</i>发生；
                如果自动购买器在到达命令<i>之前</i>触发了重置，脚本可能会卡住。
              `
            },
            {
              header: "<i>黑洞（状态）</i>",
              description: `
                等待黑洞处于指定状态。状态的有效输入为"off"、"bh1"和"bh2"，分别对应无活跃黑洞、
                至少第一个黑洞活跃、两个黑洞都活跃。
              `
            }
          ]
        }
      ],
      examples: [
        "wait am >= 1e308",
        "wait pending completions >= 5",
        "wait ec9 completions >= 4",
        "wait infinity",
        "wait black hole bh1",
      ]
    },
    {
      id: 12,
      isUnlocked: () => true,
      keyword: "PAUSE",
      category: 4,
      syntax: "<b>pause</b> <u>interval</u>",
      description: `告知自动机在指定时间内停止前进和执行命令。注意：如果暂停时间短于自动机的执行速度，
        自动机将等待到下一个执行刻度后再继续。`,
      examples: [
        "pause 10s",
        "pause 1 minute",
        "pause 34 seconds"
      ],
      sections: [
        {
          name: "间隔格式",
          items: [
            {
              header: "<i>指定间隔</i>",
              description: `此命令接受毫秒（"ms"）、秒（"s"、"sec"或"seconds"）、分钟（"m"、"min"或"minutes"）
                和小时（"h"或"hours"）等时间单位。不能仅提供数字，必须指定时间单位。`,
            },
            {
              header: "<i>定义的常量</i>",
              description: `也可以使用定义的常量代替，参见定义面板。假定定义的值以秒为单位。`
            },
          ]
        },
        {
          name: "其他",
          items: [
            {
              header: "<i>离线副作用</i>",
              description: `由于刻度数量有限，此命令在离线进度期间运行时可能表现不佳。通常为20-30刻度的1秒暂停，
                在处理数小时离线进度时可能只有1个游戏刻度，这可能不足以满足脚本其余部分所需的资源。`,
            },
            {
              header: "<i>替代方案</i>",
              description: `使用WAIT等其他命令可以设置特定资源数量，确保游戏在继续前进前达到适当状态。`
            },
            {
              header: "<i>手动跳过</i>",
              description: `通过向前步进一行（使其到达下一行）然后恢复执行，可以手动强制自动机跳过PAUSE命令
                而无需等待完整的指定时间。如果经常需要这样做，请考虑修改脚本。`
            }
          ]
        }
      ]
    },
    {
      id: 13,
      isUnlocked: () => true,
      keyword: "IF",
      category: 4,
      syntax: `<b>if</b> <u>condition</u> {<br>
        <blockquote>commands</blockquote>
        }`,
      description: `定义自动机脚本中的内部命令块，仅在到达此行时指定比较为真时执行。如果比较为假，
        自动机将跳到该块之后的第一行并继续执行。`,
      examples: [
        "if ec10 completions < 5",
        "if ep > 1e6000"
      ]
    },
    {
      id: 14,
      isUnlocked: () => true,
      keyword: "UNTIL",
      category: 4,
      syntax: `<b>until</b> <u>comparison</u> {<br>
        <blockquote>commands</blockquote>
        }<br><b>until</b> <u>prestige_event</u> {<br>
          <blockquote>commands</blockquote>
        }`,
      description: `定义脚本中的内部命令块，其中命令被重复执行；在每次循环开始和重复时检查比较。
        如果条件在UNTIL语句首次到达时为真，则整个内部命令块将被完全跳过。
        <br><br>
        如果指定了重置事件（即无限、永恒或现实）而非条件，则将始终进入该块，
        块内的命令将重复执行，直到事件在进入块<i>之后</i>首次发生。注意：自动机将完成循环的剩余部分，
        然后在重置事件发生后退出——它不会立即在中间退出循环。`,
      examples: [
        "until ep > 1e500",
        "until reality",
      ]
    },
    {
      id: 15,
      isUnlocked: () => true,
      keyword: "WHILE",
      category: 4,
      syntax: `<b>while</b> <u>comparison</u> {<br>
        <blockquote>commands</blockquote>
      }`,
      description: `定义脚本中的内部命令块，其中命令被重复执行；在每次循环开始和重复时检查比较。
        如果条件在WHILE语句首次到达时为假，则整个内部命令块将被完全跳过。`,
      examples: [
        `while ep < 1e500`,
        `while myThreshold > am`,
      ]
    },
    {
      id: 16,
      isUnlocked: () => true,
      keyword: "STOP",
      category: 4,
      syntax: `<b>stop</b>`,
      description: `当自动机运行此行时，它将停止执行，就像你点击了左上角自动机控制面板上的
        <i class="fas fa-stop"></i>按钮一样。这不需要放在每个脚本末尾才能停止，因为关闭左侧面板上的
        <i class="fas fa-sync-alt"></i>选项会自动执行此操作。
        此命令在IF命令内部使用时可能很有用，以便仅在特定条件下停止执行。`,
      examples: [
        `stop`,
      ]
    },
    {
      id: 17,
      isUnlocked: () => true,
      keyword: "Currency List",
      category: 4,
      syntax: "<i>You can use these in any IF, WHILE, UNTIL, or WAIT command</i>",
      description: () => {
        const filterText = EffarigUnlock.glyphFilter.isUnlocked
          ? `<b>filter score</b> - 过滤器选择此现实的符文过滤器评分<br>`
          : "";
        const stText = V.spaceTheorems > 0
          ? `<b>space theorems</b> - 当前未花费的空间定理数量<br>
            <b>total space theorems</b> - 空间定理总量，包括花在当前研究上的<br>`
          : "";
        return `这是你可以在自动机中使用的"货币"或数字列表。<br>
          注意：使用时，大多数货币需要采用科学计数法。<br>
          <b>am</b> - 当前反物质数量  <br>
          <b>ip</b> - 当前无限点数数量  <br>
          <b>ep</b> - 当前永恒点数数量  <br>
          <b>rm</b> - 当前现实机器数量  <br>
          <b>rs</b> - 当前现实碎片数量  <br>
          <b>infinities</b> - 当前无限次数 <br>
          <b>banked infinities</b> - 当前存储的无限次数 <br>
          <b>eternities</b> - 当前永恒数量 <br>
          <b>realities</b> - 当前现实数量 <br>
          <b>remnants</b> - 当前残留物数量  <br>
          <b>pending ip</b> - 无限时获得的IP（不可用时为0）<br>
          <b>pending ep</b> - 永恒时获得的EP（不可用时为0）<br>
          <b>pending tp</b> - 退出膨胀时间时获得的TP<br>
          <b>pending rm</b> - 现实时获得的RM（不可用时为0）<br>
          <b>pending rs</b> - 大灾变时获得的RS（不可用时为0）<br>
          <b>pending glyph level</b> - 现实时获得的符文等级（不可用时为0）<br>
          <b>pending remnants</b> - 大灾变时获得的残留物（不可用时为0）<br>
          <b>dt</b> - 当前膨胀时间数量 <br>
          <b>tp</b> - 当前超光速粒子数量<br>
          <b>rg</b> - 当前复制器星系数量（不使用科学计数法）<br>
          <b>rep</b> - 当前复制器数量 <br>
          <b>tt</b> - 当前时间定理数量 <br>
          <b>total tt</b> - 时间定理总量，包括所有形式的生成TT和花在研究上的TT <br>
          <b>spent tt</b> - 当前花在所有时间研究上的时间定理 <br>
          <b>total completions</b> - 所有永恒挑战的总完成次数 <br>
          <b>pending completions</b> - 当前永恒挑战在永恒时的总完成次数 <br>
          <b>ec<u>X</u> completions</b> - 某个永恒挑战的完成次数（例如"ec6 completions"）<br>
          ${filterText}
          ${stText}
        `;
      }
    },
    {
      id: 18,
      isUnlocked: () => true,
      keyword: "Formatting Comparisons",
      category: 4,
      syntax: "<u>resource1</u> <u>condition</u> <u>resource2</u>",
      description: `
        比较用于某些命令中，允许你根据游戏当前状态控制自动机的行为。它们具有标准格式，
        包含两个值输入和一个比较运算符，但值输入可以是任何内容，只要整体格式正确。`,
      sections: [
        {
          name: "条件",
          items: [
            {
              header: "<i>资源</i>",
              description: `
                这可以是任何自动机货币、定义的常量，或必须以科学计数法格式化的数字（例如1000、1e100、1.8e308）。
                与更通用的编程语言不同，这必须是单个值（例如不允许"ip + pending ip"等数学表达式）。
              `
            },
            {
              header: "<i>条件</i>",
              description: `
                这必须是不等式运算符（<、<=、>、>=），具有其典型的数学含义。不允许使用等式运算符（==、!=），
                因为游戏的性质意味着数字通常永远不会完全相等，因此基于直接相等检查可能导致意外的脚本行为。
              `
            },
          ]
        }
      ],
      examples: [
        "ep < 1e20",
        "total tt > 14000",
      ]
    },
    {
      id: 19,
      isUnlocked: () => true,
      keyword: "Commands with inner blocks",
      category: 4,
      syntax: `<b>header_command</b> {<br>
        <blockquote>inner_commands</blockquote>
        }`,
      description: `某些命令与命令的"内部块"相关联。此内部块可以包含任何其他有效命令，
        但可能会或可能不会根据<b>header_command</b>执行时的游戏状态实际执行。这允许你重复某些命令
        （例如购买时间研究），或完全跳过它们（例如，如果永恒挑战已有完美完成则不进入）。这些块可以嵌套。
        <br><br>
        在文本编辑器模式下：使用大括号指定内部块，左大括号{与比较在同一行，右大括号}在块中最后一行之后的独立行。
        内部命令不需要缩进，尽管缩进可能在视觉上更有帮助。
        <br><br>
        在块编辑器模式下：这些命令带有一个空的虚线矩形，指示哪些命令在内部块内。
        后续的块可以拖入虚线矩形中。
        `,
      examples: [
        `if ec10 completions < 5 {<br>
          <blockquote>
          unlock ec10<br>
          start ec10</blockquote>
        }`,
        `until ep > 1e8 {<br>
          <blockquote>
          studies nowait purchase 11-62<br>
          pause 10s<br>
          eternity respec</blockquote>
        }`
      ]
    },
  ],
  otherAutomatorPoints: [
    {
      name: "现实数量",
      automatorPoints: () => 2 * Math.clampMax(Currency.realities.value.toNumber(), 50),
      shortDescription: () => `每个现实+${formatInt(2)}，最多${formatInt(50)}个现实`,
      symbol: "Ϟ",
    },
    {
      name: "黑洞",
      automatorPoints: () => (BlackHole(1).isUnlocked ? 10 : 0),
      shortDescription: () => `解锁时获得${formatInt(10)} AP`,
      symbol: "<i class='fas fa-circle'></i>",
    },
  ],
  templates: automatorTemplates
};
