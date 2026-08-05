<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "BreakEternityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      return `打破永恒后，你将能继续获得超过 1e9e15 的反物质。在毁灭现实期间，超过 1e9e15 后产生的反物质会在终局时为你额外提供天神点数与末日遗物。它还会解锁「打破永恒升级」以及其他后续内容。`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      breakEternity();
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="false"
    @confirm="handleYesClick"
  >
    <template #header>
      你即将打破永恒
    </template>
    <div class="c-modal-message__text">
      <span
        v-for="(line, index) in message"
        :key="index"
      >
        {{ line }} <br>
      </span>
    </div>
    <template #confirm-text>
      打破
    </template>
  </ModalWrapperChoice>
</template>
