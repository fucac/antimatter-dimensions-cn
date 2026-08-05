import { Alpha } from "./alpha";
import { Effarig } from "./effarig";
import { Enslaved } from "./enslaved";
import { Laitela } from "./laitela/laitela";
import { Pelle } from "./pelle/pelle";
import { Ra } from "./ra/ra";
import { Teresa } from "./teresa";
import { V } from "./V";

export const Celestials = {
  teresa: Teresa,
  effarig: Effarig,
  enslaved: Enslaved,
  v: V,
  ra: Ra,
  laitela: Laitela,
  pelle: Pelle,
  alpha: Alpha
};

GameDatabase.celestials.descriptions = [
  {
    name: "特蕾莎",
    effects() {
      return `符文时间定理生成被禁用。
      你获得的无限点数和永恒点数减少（x^${format(0.55, 2, 2)}）。`;
    },
  },
  {
    name: "鹿颈长",
    effects() {
      return `所有维度乘数、游戏速度和Tickspeed 大幅降低，如同膨胀时间。
      无限之力减少产量和游戏速度的惩罚，时间碎片减少Tickspeed 的惩罚。
      符文等级暂时封顶为${formatInt(Effarig.glyphLevelCap)}，稀有度不受影响。`;
    },
    description() {
      return `当你首次完成鹿颈长现实的一个层级时，将退出该现实。`;
    }
  },
  {
    name: "无名氏",
    effects() {
      return `符文等级提升至最低${formatInt(5000)}。
      无限、时间和 8th 反物质维度的购买限制为各${formatInt(1)}次。
      反物质维度乘数始终处于膨胀时间状态（符文效果仍仅在实际膨胀时间中生效）。
      时间研究192（解锁复制器上限）被锁定。
      黑洞被禁用。
      超光速粒子产量和膨胀时间产量大幅减少。
      膨胀时间符文的时间定理生成被禁用。
      部分挑战目标提高。
      储存的游戏时间以降低的效果释放（指数^${format(0.55, 2, 2)}）。`;
    }
  },
  {
    name: "薇",
    effects() {
      const vEffect = `所有维度乘数、永恒点数获取、无限点数获取和膨胀时间获取\
      每秒值被开平方。
      复制器间隔被平方。`;
      const vEffectAdditional = `
      指数符文炼金效果被禁用。`;

      return Ra.unlocks.unlockGlyphAlchemy.canBeApplied
        ? vEffect + vEffectAdditional
        : vEffect;
    }
  },
  {
    name: "太阳神",
    effects() {
      return `你只有${formatInt(4)}次维度提升且无法获得更多。
      Tickspeed 购买乘数固定为${formatX(1.1245, 0, 3)}。`;
    },
  },
  {
    name: "莱特拉",
    effects() {
      let disabledDims;
      const highestActive = 8 - Laitela.difficultyTier;
      switch (highestActive) {
        case 0:
          disabledDims = "所有维度";
          break;
        case 1:
          disabledDims = "第二维度及更高维度";
          break;
        case 2:
          disabledDims = "第三维度及更高维度";
          break;
        case 7:
          disabledDims = "第八维度";
          break;
        default:
          disabledDims = `第${highestActive + 1}维度及更高维度`;
          break;
      }
      const disabledText = highestActive === 8
        ? ""
        : `${disabledDims}的生产被禁用。`;

      return `无限点数和永恒点数获取处于膨胀时间状态。
      游戏速度降为${formatInt(1)}并在${formatInt(10)}分钟内逐渐恢复。
      黑洞储存、释放、脉冲和反转全部被禁用。
      ${disabledText}`;
    },
    description() {
      return `反物质在此现实中产生熵。\
      当熵达到${formatPercents(1)}时，现实变得不稳定，\
      你将根据达到${formatPercents(1)}的速度获得奖励。\
      在${formatInt(30)}秒内使现实不稳定会使其变得明显更难，\
      但会给予更强的奖励。\
      这样做${formatInt(8)}次还会使暗能量获取${formatX(Math.pow(8, Laitela.hadronizes + 1))}。`;
    }
  },
  {
    name: "佩勒",
    effects() {
      return `你的现实将被毁灭。这将对游戏玩法产生各种影响。`;
    }
  },
  {
    name: "阿尔法",
    effects() {
      return `所有在首次达到现实后解锁或获得的奖励、效果、升级、强化、增益、减益和功能\
      都被禁用，天神维度和宇宙扇区除外，两者均被大幅削弱。
      天神物质转换指数将降至${formatInt(0)}，你将在阿尔法的现实中每实时小时\
      获得${formatPercents(Alpha.alphaDecayByHour, 2)}衰减，上限为${formatInt(24)}小时，\
      可通过完成阿尔法现实的阶段略微增加。
      各种外部资源（如宇宙扇区）会提升阿尔法衰减，如同你在阿尔法现实中\
      花费了更多时间。你当前的阿尔法衰减速度因子为${formatX(Alpha.totalSpeedBoost, 2, 2)}。\
      你开始阿尔法现实的层级时，已拥有${formatPercents(Alpha.cosmicSectorMinBoost, 2, 2)}的\
      总达上限时间。宇宙扇区将阿尔法衰减的起始值和上限值\
      提升${format(Alpha.cosmicSectorExtraBoost, 2, 2)}小时。这不会减少阿尔法衰减达上限的时间，\
      而是使阿尔法衰减更有效。
      你的宇宙扇区奖励将被当前宇宙扇区开方，这是一种静态削弱，\
      无法通过阿尔法中的进展来增加。
      大多数基于游戏时间的功能现在变为基于实时。
      成就乘数和许多成就已被摧毁。
      基于反物质获得对反物质维度的小幅削弱。`;
    },
    description() {
      return `当你首次完成阿尔法现实的一个层级时，将退出该现实。
      每完成一个阿尔法现实的层级，你将获得一个在阿尔法外生效的增益，\
      以及一个在阿尔法内生效的减益。`;
    }
  }
];
