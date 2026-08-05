<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import SaveInfoEntry from "@/components/modals/cloud/SaveInfoEntry";

export default {
  name: "CloudLoadConflictModal",
  components: {
    ModalWrapperChoice,
    SaveInfoEntry,
  },
  computed: {
    conflict() {
      return this.$viewModel.modal.cloudConflict;
    },
    older() {
      return this.conflict.saveComparison.older === 1;
    },
    farther() {
      return this.conflict.saveComparison.farther === 1;
    },
    hasDifferentName() {
      return this.conflict.cloud.saveName !== this.conflict.local.saveName;
    },
    suggestionText() {
      const goodStyle = `style="color: var(--color-good)"`;
      const badStyle = `style="color: var(--color-bad)"`;

      const suggestions = ["加载此云端存档 "];
      const cloudProg = this.conflict.cloud.compositeProgress, localProg = this.conflict.local.compositeProgress;
      const warnOverwrite = this.farther && Math.abs(cloudProg - localProg) > 0.15;
      suggestions.push(warnOverwrite
        ? `<b ${badStyle}>会导致您的本地存档损失大量进度</b>`
        : `<b ${goodStyle}>应该是安全的</b>`);
      if (this.hasDifferentName) {
        suggestions.push(`<br>${warnOverwrite ? "此外" : "不过"}，该云端存档
          <b ${badStyle}>可能来自不同设备</b>。`);
      }
      if (warnOverwrite || this.hasDifferentName) {
        suggestions.push(`<br><b ${badStyle}>您确定要覆盖本地存档吗？</b>`);
      }
      return suggestions.join("");
    }
  },
  methods: {
    confirm() {
      this.conflict.onAccept?.();
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    class="c-modal-options__large"
    :cancel-class="'c-modal-message__okay-btn'"
    :confirm-class="'c-modal-message__okay-btn c-modal__confirm-btn'"
    :confirm-fn="confirm"
  >
    <template #header>
      从云端加载游戏
    </template>
    <span v-if="hasDifferentName">
      您的本地存档和云端存档<b>名称不同</b>。
    </span>
    <span v-else-if="older">
      从云端加载会<b>加载游戏时长较短的存档</b>。
    </span>
    <span v-else-if="farther">
      从云端加载会<b>导致您失去进度</b>。
    </span>
    <span v-else>
      您的本地存档和云端存档<b>看起来进度相当</b>。
    </span>
    请选择您要加载的存档。
    <br>
    <br>
    <SaveInfoEntry
      :save-data="conflict.local"
      :other-data="conflict.cloud"
      :save-id="conflict.saveId"
      :show-name="hasDifferentName"
      save-type="本地存档"
    />
    <SaveInfoEntry
      :save-data="conflict.cloud"
      :other-data="conflict.local"
      :save-id="conflict.saveId"
      :show-name="hasDifferentName"
      save-type="云端存档"
    />
    <span v-html="suggestionText" />
    <template #cancel-text>
      保留本地存档
    </template>
    <template #confirm-text>
      用云端存档覆盖本地存档
    </template>
  </ModalWrapperChoice>
</template>