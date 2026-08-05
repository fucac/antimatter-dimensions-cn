<script>
import ConfirmationOptionsEntry from "@/components/modals/options/ConfirmationOptionsEntry";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";

export default {
  name: "ConfirmationOptionsModal",
  components: {
    ModalWrapperOptions,
    ConfirmationOptionsEntry,
  },
  computed: {
    count() {
      return ConfirmationTypes.index.length;
    },
    noConfirmations() {
      return ConfirmationTypes.index.every(x => !x.isUnlocked());
    }
  }
};
</script>

<template>
  <ModalWrapperOptions class="c-modal-options__large">
    <template #header>
      确认选项
    </template>
    <div class="c-modal-options__button-container">
      <span v-if="noConfirmations">
        你尚无任何需要确认的事项,
        若有则将显示于此。
      </span>
      <ConfirmationOptionsEntry
        v-for="entryNumber in count"
        :key="entryNumber"
        :index="entryNumber - 1"
      />
    </div>
  </ModalWrapperOptions>
</template>
