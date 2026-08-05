<script>
import ToggleButton from "@/components/ToggleButton";

export default {
  name: "GlyphProtectedRowButtonGroup",
  components: {
    ToggleButton
  },
  data() {
    return {
      protectedRows: 0,
      moveGlyphs: false,
    };
  },
  computed: {
    questionMarkTooltip() {
      return `受保护槽位不受任何可能移动或清除符文的操作影响。
        新符文永远不会被插入这些槽位。`;
    }
  },
  watch: {
    moveGlyphs(newValue) {
      player.reality.moveGlyphsOnProtection = newValue;
    },
  },
  methods: {
    update() {
      this.moveGlyphs = player.reality.moveGlyphsOnProtection;
      this.protectedRows = player.reality.glyphs.protectedRows;
    },
    addRow() {
      Glyphs.changeProtectedRows(1);
    },
    removeRow() {
      Glyphs.changeProtectedRows(-1);
    },
    isProtectedRowsMax() {
      return this.protectedRows === Glyphs.totalSlots / 10 - 1;
    },
    addRowButtonClass() {
      return {
        "c-glyph-inventory-option": true,
        "o-non-clickable": this.isProtectedRowsMax()
      };
    },
    removeRowButtonClass() {
      return {
        "c-glyph-inventory-option": true,
        "o-non-clickable": this.protectedRows === 0
      };
    }
  }
};
</script>

<template>
  <div class="o-glyph-inventory-management-group">
    <div class="l-glyph-sacrifice-options__header">
      <div
        v-tooltip="questionMarkTooltip"
        class="o-questionmark"
      >
        ?
      </div>
      受保护槽位：（{{ quantifyInt("行", protectedRows) }}）
    </div>
    <button
      :class="addRowButtonClass()"
      @click="addRow"
    >
      添加受保护行
      <div
        v-if="isProtectedRowsMax()"
        class="c-glyph-inventory-option__tooltip"
      >
        有一行永久不受保护，用于存放新符文
      </div>
    </button>
    <button
      :class="removeRowButtonClass()"
      @click="removeRow"
    >
      移除受保护行
    </button>
    <ToggleButton
      v-model="moveGlyphs"
      class="c-glyph-inventory-option"
      label="更改行数时移动符文："
    />
  </div>
</template>

<style scoped>
.o-non-clickable {
  cursor: auto;
}
</style>
