<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "CloudInvalidDataModal",
  components: {
    ModalWrapperChoice,
  },
  props: {
    isSaving: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    conflict() {
      return this.$viewModel.modal.cloudConflict;
    },
    overwriteText() {
      return this.isSaving
        ? "覆盖云存档"
        : "从云端加载存档";
    }
  },
  methods: {
    ignore() {
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
    @confirm="ignore()"
  >
    <template #header>
      无法与云存档比较
    </template>
    尝试比较您的存档时,游戏无法正确处理云存档中的数据。此多半因云存档过于陈旧,
    使用了远旧版本游戏的数据格式所致。
    <br>
    <br>
    <span v-if="isSaving">
      覆盖云存档应是安全的。您可点击"云端加载"强制加载存档,以尝试将其转换为可用的有效存档格式。
    </span>
    <span v-else>
      若您愿意,可尝试从云端加载数据。游戏将尝试通过转换格式来加载您的云端数据,
      然此未必有效,最坏情况下或需重置此存档槽方能令游戏重新运转。
    </span>
    <br>
    注:此弹窗将无视您的设置而显示,因问题未解之前将持续阻碍每 10 分钟一次的自动保存。
    <template #cancel-text>
      {{ overwriteText }}
    </template>
    <template #confirm-text>
      不要覆盖
    </template>
  </ModalWrapperChoice>
</template>
