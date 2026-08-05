import { Quotes } from "./celestials/quotes";

import wordShift from "./word-shift";

export const Elemental = {
  get displayName() {
    return false ? "元素主宰" : wordShift.randomCrossWords("元素主宰");
  },
  possessiveName: "元素主宰的",
  get isUnlocked() {
    return false;
  },
  quotes: Quotes.elemental,
  symbol: "Ω"
};
