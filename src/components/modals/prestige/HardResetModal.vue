<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "HardResetModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    willHardReset() {
      return this.input === "Shrek is love, Shrek is life";
    },
    hasExtraNG() {
      return player.records.fullGameCompletions > 0;
    },
    hasSpeedrun() {
      return player.speedrun.isUnlocked;
    }
  },
  destroyed() {
    if (this.willHardReset) SecretAchievement(38).unlock();
  },
  methods: {
    hardReset() {
      if (this.willHardReset) GameStorage.hardReset();
      this.input = "";
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!willHardReset"
    :show-confirm="willHardReset"
    confirm-class="o-primary-btn--width-medium c-modal__confirm-btn c-modal-hard-reset-btn"
    @confirm="hardReset"
  >
    <template #header>
      硬重置
    </template>
    <div class="c-modal-message__text">
      请确认你要硬重置此存档槽位。
      <span class="c-modal-hard-reset-danger">删除存档不会解锁任何秘密内容。</span>
      请输入「Shrek is love, Shrek is life」以示确认。
      <div class="c-modal-hard-reset-danger">
        此举将彻底清除你的存档。
        <span v-if="hasExtraNG">
          <br>
          通关游戏所解锁的所有符文外观也将一并被剥夺！
        </span>
        <span v-if="hasSpeedrun">
          <br>
          你将失去进行速通的资格。若要重新开始你的征程，请改用「开始速通」按钮。
        </span>
      </div>
    </div>
    <input
      ref="input"
      v-model="input"
      type="text"
      class="c-modal-input c-modal-hard-reset__input"
      @keyup.esc="emitClose"
    >
    <div class="c-modal-hard-reset-info">
      <div
        v-if="willHardReset"
        class="c-modal-hard-reset-danger"
      >
        口令已确认——继续操作将不可逆转地抹除你的存档！
      </div>
      <div v-else>
        请输入正确的口令以进行硬重置。
      </div>
    </div>
    <template #confirm-text>
      硬重置
    </template>
  </ModalWrapperChoice>
</template>
