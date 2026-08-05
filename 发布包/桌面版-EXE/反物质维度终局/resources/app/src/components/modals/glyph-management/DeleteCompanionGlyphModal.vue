<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "DeleteCompanionGlyphModal",
  components: {
    PrimaryButton
  },
  data() {
    return {
      messageIndex: 0,
    };
  },
  computed: {
    message() {
      switch (this.messageIndex) {
        case 0: return "您确定要舍弃您的伴侣符文吗?";
        case 1: return "您将无法获得任何蛋糕。";
        case 2: return "此乃不可逆之举!您将再无他法获得另一枚伴侣符文!";
        case 3: return `您弃绝忠诚伴侣符文之速,胜于记录在册之任何受试者。恭贺之。`;
        default: return "无效的消息索引";
      }
    }
  },
  methods: {
    handleLeftButtonClick() {
      if (this.messageIndex < 2) {
        this.handleYesClick();
      } else {
        this.handleNoClick();
      }
    },
    handleRightButtonClick() {
      if (this.messageIndex >= 2) {
        this.handleYesClick();
      } else {
        this.handleNoClick();
      }
    },
    handleYesClick() {
      this.messageIndex++;
      if (this.messageIndex === 3) this.deleteCompanion();
    },
    handleNoClick() {
      this.messageIndex = 0;
      this.emitClose();
    },
    deleteCompanion() {
      // Yes, this actually deletes a companion glyph at random, but the player can only ever legitimately have one.
      // Passing information into modals seems to require a bunch of refactoring that's not worth it for this one case.
      const toDelete = player.reality.glyphs.inventory.filter(g => g.type === "companion")[0];
      Glyphs.removeFromInventory(toDelete);
    }
  },
};
</script>

<template>
  <div class="c-modal-message l-modal-content--centered">
    <div class="c-modal-message__text">
      {{ message }}
    </div>
    <div v-if="messageIndex < 3">
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="handleLeftButtonClick"
      >
        {{ messageIndex < 2 ? "删除" : "取消" }}
      </PrimaryButton>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="handleRightButtonClick"
      >
        {{ messageIndex >= 2 ? "删除" : "取消" }}
      </PrimaryButton>
    </div>
    <div v-else>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-message__okay-btn"
        @click="handleNoClick"
      >
        多谢
      </PrimaryButton>
    </div>
  </div>
</template>
