<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UsernameModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      hasSeenModal: false,
      input: "",
      username: ""
    };
  },
  computed: {
    notEmpty() {
      return this.input !== "";
    },
  },
  methods: {
    saveUsername() {
      if (this.notEmpty) this.username = this.input;
      if (this.notEmpty) player.username = this.username;
      if (this.notEmpty) this.hasSeenModal = true;
      this.input = "";
      player.options.hasSeenUsernameModal = this.hasSeenModal;
      if (player.options.hasSeenUsernameModal) player.introFrozen = false;
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!notEmpty"
    :show-confirm="notEmpty"
    confirm-class="o-primary-btn--width-medium c-modal__confirm-btn c-modal-username-btn"
    @confirm="saveUsername"
  >
    <template #header>
      输入用户名
    </template>
    <div class="c-modal-message__text">
      请确认您的用户名。
      <span class="c-modal-username-danger">您只能选择一次用户名。</span>
      输入您想要的用户名以确认。
      <div class="c-modal-username-danger">
        此操作不可逆
      </div>
    </div>
    <input
      ref="input"
      v-model="input"
      type="text"
      class="c-modal-input c-modal-username__input"
      @keyup.esc="emitClose"
    >
    <div class="c-modal-username-info">
      <div
        v-if="notEmpty"
        class="c-modal-username-danger"
      >
        用户名已确认 - 您确定这是您想要的用户名吗？
      </div>
      <div v-else>
        请输入内容。
      </div>
    </div>
    <template #confirm-text>
      确认
    </template>
  </ModalWrapperChoice>
</template>
