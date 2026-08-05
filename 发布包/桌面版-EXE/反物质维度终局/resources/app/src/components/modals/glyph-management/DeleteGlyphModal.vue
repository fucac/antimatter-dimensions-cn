<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "DeleteGlyphModal",
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
      confirmedDelete: false
    };
  },
  computed: {
    glyph() {
      return Glyphs.findByInventoryIndex(this.idx);
    },
  },
  methods: {
    update() {
      const newGlyph = Glyphs.findByInventoryIndex(this.idx);
      if (this.glyph !== newGlyph && !this.confirmedDelete) {

        // Why is confirmedDelete here: refer to SacrificeGlyphModal.vue

        this.emitClose();
        Modal.message.show("所选符文已更改位置或发生了其他变化!");
      }
    },
    handleYesClick() {
      this.confirmedDelete = true;
      Glyphs.removeFromInventory(this.glyph);
    },
  },
};

</script>

<template>
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      您即将删除一枚符文
    </template>
    <div class="c-modal-message__text">
      删除符文将使其从您的库存中消失!
      <div class="c-modal-hard-reset-danger">
        在解锁符文献祭之前,删除符文并无任何益处!
      </div>
    </div>
  </ModalWrapperChoice>
</template>
