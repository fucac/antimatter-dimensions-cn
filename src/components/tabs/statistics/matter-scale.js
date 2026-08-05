export const MatterScale = {
  proton: new Decimal("2.82e-45"),

  estimate(matter) {
    if (!matter) return ["尚无反物质。"];
    const logMatter = matter.add(1).log10();
    const planck = new Decimal("4.22419e-105");
    const planckedLogMatter = logMatter.times(planck);
    if (matter.gt(DC.E9E15)) {
      if (planckedLogMatter.gt(this.proton)) {
        const logScale = this.macroScale(planckedLogMatter);
        const logAmount = format(planckedLogMatter.dividedBy(logScale.amount), 2, 1);
        return [`若你反物质数量的每一位数字都是一个普朗克体积，你将
          拥有足够的物质来${logScale.verb} ${logAmount} ${logScale.name}`];
      }
      const logScale = this.microScale(logMatter);
      return [`若你反物质数量的每一位数字
        都是${format(this.proton.div(logScale.amount).div(logMatter), 2, 1)} ${logScale.name}，
        你将拥有足够的物质来构成一个质子。`];
    }
    if (matter.gt(DC.E100000)) {
      return [
        `若你每秒写下${formatInt(3)}个数字，你将花费`,
        TimeSpan.fromSeconds(matter.log10().div(3)).toString(),
        "来写下你的反物质数量。"
      ];
    }
    const planckedMatter = matter.times(planck);
    if (planckedMatter.gt(this.proton)) {
      const scale = this.macroScale(planckedMatter);
      const amount = format(planckedMatter.dividedBy(scale.amount), 2, 1);
      return [`若每一个反物质都是一个普朗克体积，你将拥有
        足够的物质来${scale.verb} ${amount} ${scale.name}`];
    }
    const scale = this.microScale(matter);
    return [`若每一个反物质都是${format(this.proton.div(scale.amount).div(matter), 2, 1)} ${scale.name}，
      你将拥有足够的物质来构成一个质子。`];
  },

  microScale(matter) {
    const micro = this.microObjects;
    for (let i = 0; i < micro.length; i++) {
      const scale = micro[i];
      if (matter.times(scale.amount).lt(this.proton)) {
        return scale;
      }
    }
    throw "Cannot determine smallest antimatter scale";
  },

  macroScale(matter) {
    const macro = this.macroObjects;
    const last = macro.last();
    if (matter.gte(last.amount)) return last;
    let low = 0;
    let high = macro.length;
    while (low !== high) {
      const mid = Math.floor((low + high) / 2);
      if (macro[mid].amount.lte(matter)) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return macro[high - 1];
  },

  microObjects: [
    { amount: new Decimal("1e-54"), name: "阿米立方" },
    { amount: new Decimal("1e-63"), name: "仄米立方" },
    { amount: new Decimal("1e-72"), name: "幺米立方" },
    { amount: new Decimal("4.22419e-105"), name: "普朗克体积" }
  ],

  macroObjects: [
    { amount: new Decimal("2.82e-45"), name: "质子", verb: "构成" },
    { amount: new Decimal("1e-42"), name: "原子核", verb: "构成" },
    { amount: new Decimal("7.23e-30"), name: "氢原子", verb: "构成" },
    { amount: new Decimal("5e-21"), name: "病毒", verb: "构成" },
    { amount: new Decimal("9e-17"), name: "红细胞", verb: "构成" },
    { amount: new Decimal("6.2e-11"), name: "沙粒", verb: "构成" },
    { amount: new Decimal("5e-8"), name: "米粒", verb: "构成" },
    { amount: new Decimal("3.555e-6"), name: "茶匙", verb: "填满" },
    { amount: new Decimal("7.5e-4"), name: "酒瓶", verb: "填满" },
    { amount: DC.D1, name: "冰箱冷冻室", verb: "填满" },
    { amount: new Decimal("2.5e3"), name: "奥林匹克标准游泳池", verb: "填满" },
    { amount: new Decimal("2.6006e6"), name: "吉萨大金字塔", verb: "构成" },
    { amount: new Decimal("3.3e8"), name: "中国长城", verb: "构成" },
    { amount: new Decimal("5e12"), name: "大型小行星", verb: "构成" },
    { amount: new Decimal("4.5e17"), name: "矮行星", verb: "构成" },
    { amount: new Decimal("1.08e21"), name: "地球", verb: "构成" },
    { amount: new Decimal("1.53e24"), name: "木星", verb: "构成" },
    { amount: new Decimal("1.41e27"), name: "太阳", verb: "构成" },
    { amount: new Decimal("5e32"), name: "红巨星", verb: "构成" },
    { amount: new Decimal("8e36"), name: "超巨星", verb: "构成" },
    { amount: new Decimal("1.7e45"), name: "星云", verb: "构成" },
    { amount: new Decimal("1.7e48"), name: "奥尔特云", verb: "构成" },
    { amount: new Decimal("3.3e55"), name: "本地泡", verb: "构成" },
    { amount: new Decimal("3.3e61"), name: "星系", verb: "构成" },
    { amount: new Decimal("5e68"), name: "本星系群", verb: "构成" },
    { amount: new Decimal("1e73"), name: "玉夫座空洞", verb: "构成" },
    { amount: new Decimal("3.4e80"), name: "可观测宇宙", verb: "构成" },
    { amount: new Decimal("1e113"), name: "维度", verb: "构成" },
    { amount: DC.C2P1024, name: "无限维度", verb: "构成" },
    { amount: new Decimal("1e65000"), name: "时间维度", verb: "构成" }
  ]
};
