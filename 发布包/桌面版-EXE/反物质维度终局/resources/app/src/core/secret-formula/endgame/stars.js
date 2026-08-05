export const stars = {
  red: {
    id: 0,
    name: "红",
    dmReq: 1e20,
    resetReq: 1e25,
    effect: (amount = player.endgame.ethereal.stars.red) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.4).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `将所有反物质维度乘数的指数提升至 ${formatPow(amount, 2, 4)}`
  },
  orange: {
    id: 1,
    name: "橙",
    dmReq: 1e25,
    resetReq: 1e28,
    effect: (amount = player.endgame.ethereal.stars.orange) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.5).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `将所有无限维度乘数的指数提升至 ${formatPow(amount, 2, 4)}`
  },
  yellow: {
    id: 2,
    name: "黄",
    dmReq: 1e30,
    resetReq: 1e32,
    effect: (amount = player.endgame.ethereal.stars.yellow) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.2).div(10).add(1), boost.div(100).add(1));
    },
    description: amount => `将天神物质转化指数乘以 ${formatX(amount, 2, 3)}`
  },
  green: {
    id: 3,
    name: "绿",
    dmReq: 1e35,
    resetReq: 1e36,
    effect: (amount = player.endgame.ethereal.stars.green) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.5).div(40).add(1), boost.div(100).add(1));
    },
    description: amount => `将虚幻机器产量和上限提升至 ${formatPow(amount, 2, 3)}`
  },
  blue: {
    id: 4,
    name: "蓝",
    dmReq: 1e45,
    resetReq: 1e40,
    effect: (amount = player.endgame.ethereal.stars.blue) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(amount.add(1), 0.8).min(1e25).times(
        Decimal.pow10(Decimal.pow(5, amount.max(1e25).div(1e25).log10().add(1).log10()).sub(1))), boost.div(100).add(1));
    },
    description: amount => `将以太力量产量乘以 ${formatX(amount, 2, 3)}`
  },
  purple: {
    id: 5,
    name: "紫",
    dmReq: 1e55,
    resetReq: 1e55,
    effect: (amount = player.endgame.ethereal.stars.purple) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 0.8).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `将所有时间维度乘数的指数提升至 ${formatPow(amount, 2, 4)}`
  },
  white: {
    id: 6,
    name: "白",
    dmReq: 1e70,
    resetReq: 1e75,
    effect: (amount = player.endgame.ethereal.stars.white) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow10(Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)).times(100), 1.8), boost.div(100).add(1)));
    },
    description: amount => `将所有暗物质软上限延迟 ${formatX(amount, 2)}`
  },
  black: {
    id: 7,
    name: "黑",
    dmReq: 1e85,
    resetReq: 1e100,
    effect: (amount = player.endgame.ethereal.stars.black) => {
      const boost = Ethereal.starBoost;
      if (player.disablePostReality) return DC.D1;
      return Decimal.pow(Decimal.pow(Decimal.log10(amount.add(1)), 1.3).div(200).add(1), boost.div(100).add(1));
    },
    description: amount => `将反物质指数提升至 ${formatPow(amount, 2, 4)}`
  },
  gray: {
    id: 8,
    name: "灰",
    dmReq: 1e100,
    resetReq: 1e125,
    effect: (amount = player.endgame.ethereal.stars.gray) => {
      if (player.disablePostReality) return DC.D0;
      return Decimal.log10(Decimal.log10(amount.add(1)).add(1)).times(20);
    },
    description: amount => `将所有其他星星的效果提升 ${formatPercents(amount.div(100).toNumber(), 2)}`
  },
};
