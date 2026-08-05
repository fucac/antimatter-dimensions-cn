<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import SaveInfoEntry from "@/components/modals/cloud/SaveInfoEntry";

export default {
  name: "CloudSaveConflictModal",
  components: {
    ModalWrapperChoice,
    SaveInfoEntry,
  },
  computed: {
    conflict() {
      return this.$viewModel.modal.cloudConflict;
    },
    older() {
      return this.conflict.saveComparison.older === -1;
    },
    farther() {
      return this.conflict.saveComparison.farther === -1;
    },
    hasDifferentName() {
      return this.conflict.cloud.saveName !== this.conflict.local.saveName;
    },
    wrongHash() {
      return this.conflict.saveComparison.hashMismatch;
    },
    suggestionText() {
      const goodStyle = `style="color: var(--color-good)"`;
      const badStyle = `style="color: var(--color-infinity)"`;

      const suggestions = ["保存到云端 "];
      const cloudProg = this.conflict.cloud.compositeProgress, localProg = this.conflict.local.compositeProgress;
      const warnOverwrite = this.farther && Math.abs(cloudProg - localProg) > 0.15;
      suggestions.push(warnOverwrite
        ? `<b ${badStyle}>会覆盖进度远高于此的存档</b>`
        : `<b ${goodStyle}>应该是安全的</b>`);
      if (this.hasDifferentName || this.wrongHash) {
        suggestions.push(` ${warnOverwrite ? "此外" : "不过"}，您可能正在覆盖一份
          <b ${badStyle}>来自不同设备的存档</b>。`);
      }
      if (warnOverwrite || this.hasDifferentName || this.wrongHash) {
        suggestions.push(`<br><b ${badStyle}>您确定要覆盖云端存档吗？</b>`);
      }
      return suggestions.join("");
    },
    noOverwriteInfo() {
      return `如果不覆盖，存档冲突将持续出现。`;
    },
    overwriteInfo() {
      return `如果另一台设备也在同时使用此 Google 账号保存到云端，
        此弹窗可能会反复出现。`;
    }
  },
  methods: {
    doNotSave() {
      player.options.cloudEnabled = false;
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    },
    overwrite() {
      this.conflict.onAccept?.();
      EventHub.dispatch(GAME_EVENT.CLOSE_MODAL);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    class="c-modal-options__large"
    :cancel-class="'c-modal-message__okay-btn'"
    :confirm-class="'c-modal-message__okay-btn c-modal__confirm-btn'"
    :cancel-fn="overwrite"
    @confirm="doNotSave()"
  >
    <template #header>
      保存游戏到云端
    </template>
    <span v-if="wrongHash">
      自本次会话您上次保存到云端以来，您的云端存档已被<b>其他设备更改</b>。
    </span>
    <span v-else-if="hasDifferentName">
      您的本地存档和云端存档<b>名称不同</b>。
    </span>
    <span v-else-if="older">
      保存到云端会<b>覆盖较旧的存档</b>。
    </span>
    <span v-else-if="farther">
      保存到云端会<b>覆盖进度更高的存档</b>。
    </span>
    <span v-else>
      您的本地存档和云端存档<b>看起来进度相当</b>。
    </span>
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
    <br>
    <span>
      不覆盖将关闭云端保存，若要再次使用，
      您需要手动重新开启。
      <span :ach-tooltip="noOverwriteInfo">
        <i class="fas fa-question-circle" />
      </span>
    </span>
    <span>
      覆盖将在本次操作中强制保存到云端；在大多数情况下，
      这应能防止此弹窗再次出现。
      <span :ach-tooltip="overwriteInfo">
        <i class="fas fa-question-circle" />
      </span>
    </span>
    <template #cancel-text>
      覆盖云端存档
    </template>
    <template #confirm-text>
      不覆盖
    </template>
  </ModalWrapperChoice>
</template>
