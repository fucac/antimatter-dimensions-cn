import { AutobuyerInputFunctions } from "@/components/tabs/autobuyers/AutobuyerInput";

export const automatorTemplates = {
  /**
    * List of possible data types to dynamically generate in script templates, assumed to be only string or boolean
    * {
    *  @property {String} name              String to be used as a key for entries in this object
    *  @property {String[]} boolDisplay     Strings to be displayed for true/false states for boolean inputs. If
    *   undefined, assumed to be a non-boolean input
    *  @property {Function} isValidString   A function used to test if an input string is formatted properly or not
    *  @property {Function} map             A function to be used to map the inputs to their actual values
    *   which are stored in the param object. If undefined, assumed to be no mapping
    * }
    */
  paramTypes: [
    {
      name: "tree",
      isValidString: str => {
        const validImport = TimeStudyTree.isValidImportString(str);
        const preset = str.match(/^(NAME (.{1,4})|ID (\d))$/u);
        const validPreset = preset ? (
          player.timestudy.presets.some(p => p.name === preset[2]) ||
          (Number(preset[3]) > 0 && Number(preset[3]) < 7)
        ) : false;
        return validImport || validPreset;
      },
    },
    {
      name: "integer",
      isValidString: str => AutobuyerInputFunctions.int.tryParse(str),
      map: x => Math.round(parseInt(x, 10)),
    },
    {
      name: "decimal",
      isValidString: str => AutobuyerInputFunctions.decimal.tryParse(str),
      map: x => AutobuyerInputFunctions.decimal.tryParse(x),
    },
    {
      name: "boolean",
      boolDisplay: [true, false],
    },
    {
      name: "nowait",
      boolDisplay: ["继续前进", "继续购买研究"],
    },
    {
      name: "mode",
      boolDisplay: ["最高值的X倍", "距上次秒数"],
      map: x => (x ? "mult" : "time"),
    },
  ],
  /**
    * List automator script templates, primarily used here for formatting the player UI prompts appropriately
    * so that all of the required fields show up in the proper input formats. Actual script formatting requires
    * additionally writing a method to be called in the constructor of the ScriptTemplate class
    * {
    *  @property {String} name          Name of script template, also used as a key within the constructor for
    *   ScriptTemplate objects
    *  @property {String} description   Text description of what the template does when used in the automator
    *  @property {Object[]} inputs      Fields of the param object which need to be filled for the template to
    *   have all the information it needs. Contains the name of the field, the type (drawn from paramTypes above),
    *   and a prompt to be shown in the UI end
    *  @property {Function} warnings    Function which checks the current game state and potentially provides
    *   warnings based on some possibly common cases which may lead to undesired behavior
    * }
    */
  scripts: [
    {
      name: "攀登EP",
      description: `此脚本执行重复的永恒，每次永恒都尝试重新购买时间研究树。
        必须为无限和永恒自动购买器提供自动购买器设置。脚本将重复执行，直到达到最终的永恒点数值。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "finalEP", type: "decimal", prompt: "目标EP" },
        { name: "autoInfMode", type: "mode", prompt: "无限自动购买器模式" },
        { name: "autoInfValue", type: "decimal", prompt: "无限自动购买器阈值" },
        { name: "autoEterMode", type: "mode", prompt: "永恒自动购买器模式" },
        { name: "autoEterValue", type: "decimal", prompt: "永恒自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!RealityUpgrade(10).isBought) {
          list.push(`没有至少 ${formatInt(100)} 次永恒，此脚本将无法正确设置自动购买器模式。
            在现实开始使用此脚本之前，考虑先获得现实升级"${RealityUpgrade(10).name}"。`);
        }
        if (!RealityUpgrade(13).isBought) {
          list.push(`没有现实升级"${RealityUpgrade(13).name}"，此模板可能表现不佳`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`没有 perk "${Perk.ttBuySingle.label}"，此模板可能表现不佳，除非你能在不购买的情况下生成时间定理`);
        }
        return list;
      },
    },
    {
      name: "刷永恒",
      description: `此脚本在购买指定的时间研究树后执行重复的快速永恒。
        自动无限将设置为"最高值倍数"并指定紧缩次数，自动永恒将尽快触发。
        脚本将重复执行，直到达到最终的永恒次数。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "crunchesPerEternity", type: "integer", prompt: "每次永恒的紧缩次数" },
        { name: "eternities", type: "decimal", prompt: "目标永恒次数" },
      ],
      warnings: () => {
        const list = [];
        if (RealityUpgrade(14).isBought) {
          list.push(`由于现实升级"${RealityUpgrade(14).name}"，你可能不需要使用此脚本`);
        }
        return list;
      },
    },
    {
      name: "刷无限",
      description: `此脚本购买指定的时间研究树，然后配置你的自动购买器来获取无限。
        它将重复执行，直到达到最终的无限次数；计数可以针对储存无限，在这种情况下，
        它将在执行单次永恒之前获得所有无限。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "infinities", type: "decimal", prompt: "目标无限次数" },
        { name: "isBanked", type: "boolean", prompt: "使用储存模式作为目标？" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.achievementGroup5.isBought) {
          list.push(`你将不会在本次现实中以成就"${Achievement(131).name}"开始——刷无限可能不如预期有用，
            因为它们在之后才能被储存`);
        }
        if (RealityUpgrade(11).isBought) {
          list.push(`由于现实升级"${RealityUpgrade(11).name}"，你可能不需要使用此脚本`);
        }
        return list;
      },
    },
    {
      name: "完成永恒挑战",
      description: `此脚本购买指定的时间研究树，然后解锁指定的永恒挑战。
        之后它会将你的无限自动购买器设置为指定配置并进入永恒挑战。
        最后，它会等待至少达到所需的完成次数，然后触发永恒以完成挑战。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "ec", type: "integer", prompt: "永恒挑战ID" },
        { name: "completions", type: "integer", prompt: "目标完成次数" },
        { name: "autoInfMode", type: "mode", prompt: "无限自动购买器模式" },
        { name: "autoInfValue", type: "decimal", prompt: "无限自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.studyECRequirement.isBought) {
          list.push(`由于次要资源需求，永恒挑战可能无法可靠解锁，在使用此模板前考虑解锁 perk "${Perk.studyECRequirement.label}"`);
        }
        if (!Perk.studyECBulk.isBought) {
          list.push(`不使用批量完成永恒挑战的此模板可能导致冗长的脚本，执行较慢且难以修改。
            如果你使用此模板，在解锁 perk "${Perk.studyECBulk.label}" 后考虑回来简化脚本`);
        }
        return list;
      },
    },
    {
      name: "解锁膨胀时间",
      description: `此脚本执行重复的永恒，每次永恒都尝试重新购买时间研究树。
        必须为永恒自动购买器提供设置；你的无限自动购买器将被关闭。
        脚本循环执行，直到你拥有解锁膨胀时间所需的全部时间定理，然后解锁膨胀时间。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入你的时间研究" },
        { name: "treeNowait", type: "nowait", prompt: "缺失研究行为" },
        { name: "finalEP", type: "decimal", prompt: "目标EP" },
        { name: "autoEterMode", type: "mode", prompt: "永恒自动购买器模式" },
        { name: "autoEterValue", type: "decimal", prompt: "永恒自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!RealityUpgrade(13).isBought) {
          list.push(`没有现实升级"${RealityUpgrade(13).name}"，此模板可能表现不佳`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`没有 perk "${Perk.ttBuySingle.label}"，此模板可能表现不佳，除非你能在不购买的情况下生成时间定理`);
        }
        return list;
      },
    },
  ]
};
