<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UiChoiceModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    listEntries() {
      return [
        `更多游戏事件现已加入动画效果。若其影响性能或体验,
        可于视觉选项标签页中关闭。`,
        `新的确认窗口已取代默认的 JavaScript 弹窗。可于游戏选项标签页中关闭。`,
        "游戏亦采用了更为时髦的全新布局,设计之时更多地参考了现代设计理念。"
      ];
    }
  },
  methods: {
    handleYesClick() {
      GameOptions.toggleUI();
    },
  },
};
</script>

<template>
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      视觉变更
    </template>
    <div class="c-modal-message__text">
      我等察觉到您所加载的乃是一份旧存档;自旧版本起,游戏已有些许视觉变更:
      <br>
      <br>
      <div class="c-visual-change-list">
        <div
          v-for="(entry, i) in listEntries"
          :key="i"
          class="c-visual-change-list-entry"
        >
          <b>&bull;</b>
          {{ entry }}
        </div>
      </div>
      <br>
      <br>
      您可于视觉选项标签页中随时切换旧版本所用的经典 UI 与较新的现代 UI。是否即刻切换至现代 UI?
    </div>
    <template #cancel-text>
      保留
    </template>
    <template #confirm-text>
      切换
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-visual-change-list {
  display: inline-block;
  max-width: 45rem;
  text-align: left;
}

.c-visual-change-list-entry {
  display: flex;
  margin-bottom: 0.5rem;
  gap: 1rem;
}
</style>
