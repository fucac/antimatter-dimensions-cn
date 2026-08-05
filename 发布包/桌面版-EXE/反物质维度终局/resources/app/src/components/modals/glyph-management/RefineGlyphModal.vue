<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "RefineGlyphModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    idx: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      resourceAmount: 0,
      resourceUnlocked: false,
      gain: 0,
      after: 0,
      cap: 0,
      confirmedRefine: false
    };
  },
  computed: {
    glyph() {
      return Glyphs.findByInventoryIndex(this.idx);
    },
    resource() {
      return GlyphSacrificeHandler.glyphAlchemyResource(this.glyph);
    },
    resourceName() {
      return this.resource.name;
    },
  },
  methods: {
    update() {
      const resource = this.resource;
      this.resourceAmount = resource.amount;
      this.resourceUnlocked = resource.isUnlocked;
      this.gain = GlyphSacrificeHandler.glyphRefinementGain(this.glyph);
      this.cap = GlyphSacrificeHandler.glyphEffectiveCap(this.glyph);

      this.after = this.resourceAmount + this.gain;

      const newGlyph = Glyphs.findByInventoryIndex(this.idx);
      if (this.glyph !== newGlyph && !this.confirmedRefine) {

        // Why is confirmedRefine here: refer to SacrificeGlyphModal.vue

        this.emitClose();
        Modal.message.show("所选符文已更改位置或发生了其他变化!");
      }
    },
    handleYesClick() {
      this.confirmedRefine = true;
      GlyphSacrificeHandler.refineGlyph(this.glyph);
    },
  },
};

</script>

<template>
  <ModalWrapperChoice
    option="glyphRefine"
    @confirm="handleYesClick"
  >
    <template #header>
      您即将精炼一枚符文
    </template>
    <div
      v-if="resourceUnlocked"
      class="c-modal-message__text"
    >
      精炼符文将使其自您的库存中消失,作为回报,
      您的 {{ resourceName }} 炼金资源将由
      {{ format(resourceAmount, 2, 2) }} 提升至 {{ format(after, 2, 2) }}。
      此符文至多可将您的 {{ resourceName }} 资源提升至 {{ format(cap, 2, 2) }}。
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      您尚未解锁此符文对应的资源,故无法获得任何 {{ resourceName }} 炼金资源。
      您仍可强行精炼,然毫无效用。或可改为献祭此符文。
    </div>
  </ModalWrapperChoice>
</template>
