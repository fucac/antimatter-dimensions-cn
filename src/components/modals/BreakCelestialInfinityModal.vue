<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "BreakCelestialInfinityModal",
  components: {
    ModalWrapperChoice
  },
  computed: {
    message() {
      const infinity = formatPostBreak(Number.MAX_VALUE, 2);
      return `打破天神无限将允许你获得超过 ${infinity} 的天神物质。
        天神维度和天神 Tickspeed 升级在天神物质超过 ${infinity} 后成本增长更快。
        你将根据超过 ${infinity} 的天神物质产量在天神紧缩时获得额外的天神点数。\
        它还将解锁天神打破无限升级。`.split("\n");
    },
  },
  methods: {
    handleYesClick() {
      celestialBreakInfinity();
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
      你正在打破天神无限
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
