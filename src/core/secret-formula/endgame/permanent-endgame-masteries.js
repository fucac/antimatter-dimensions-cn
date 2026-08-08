export const permanentEndgameMasteries = [
  {
    id: 1,
    description: "解锁终局升级",
    cost: 20,
    requirement: () => {
      const esRequirement = Currency.endgameSkills.max.gte(EndgameMastery.endgameUpgrades.totalEndgameSkillRequirement);
      const emRequirement = [171].some(id => EndgameMastery(id).isBought);
      return emRequirement && esRequirement;
    }
  },
  {
    id: 2,
    description: "使以上所有非常驻终局精通免费",
    cost: 100,
    requirement: () => {
      const esRequirement = Currency.endgameSkills.max.gte(EndgameMastery.permaMasteries.totalEndgameSkillRequirement);
      const emRequirement = EndgameMastery.endgameUpgrades.isBought;
      return emRequirement && esRequirement;
    }
  },
  {
    id: 3,
    description: "解锁时间压缩",
    cost: 7000000,
    requirement: () => {
      const esRequirement = Currency.endgameSkills.max.gte(EndgameMastery.timeCompression.totalEndgameSkillRequirement);
      const emRequirement = [271, 272, 273, 274].every(id => EndgameMastery(id).isBought);
      return emRequirement && esRequirement;
    }
  }
];
