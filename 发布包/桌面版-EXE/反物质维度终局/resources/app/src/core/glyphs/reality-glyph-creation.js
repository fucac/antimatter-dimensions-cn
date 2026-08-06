// 现实符文制作逻辑（集中、防御式实现）
//
// 产出符文等级与当前"现实"炼金资源数量 1:1（向下取整），创造成功后才消耗全部现实资源。
// 所有外部输入（资源数量、库存空间、生成结果）都做防御校验：
//  - AlchemyResource.reality.amount 已被 alchemy.js 加固为 number 且有限
//  - 等级向下取整后再校验，任何异常都返回 0，避免产生 NaN/负数等级
//  - 库存已满或生成失败时不消耗资源

import { AlchemyResource } from "@/core/celestials/ra/alchemy";
import { GlyphGenerator } from "@/core/glyphs/glyph-generator";
import { Glyphs } from "@/core/glyphs/glyph-core";

export const RealityGlyphCreation = {
  // 当前可产出的现实符文等级（1:1 取整；资源非正/异常时为 0）
  get level() {
    const amount = AlchemyResource.reality.amount;
    const level = Math.floor(amount);
    return Number.isFinite(level) && level > 0 ? level : 0;
  },

  get canCreate() {
    return this.level > 0;
  },

  // 完整创造流程：校验库存 -> 计算等级 -> 生成符文 -> 加入背包 -> 消耗资源
  create() {
    if (GameCache.glyphInventorySpace.value === 0) {
      Modal.message.show("库存空间已满;请献祭部分符文以腾出空间。",
        { closeEvent: GAME_EVENT.GLYPHS_CHANGED });
      return false;
    }
    const level = this.level;
    if (level <= 0) return false;
    const glyph = GlyphGenerator.realityGlyph(new Decimal(level));
    if (glyph === undefined || glyph === null) return false;
    Glyphs.addToInventory(glyph);
    if (!ExpansionPack.effarigPack.isBought || player.disablePostReality) {
      AlchemyResource.reality.amount = 0;
    }
    player.reality.glyphs.createdRealityGlyph = true;
    return true;
  }
};
