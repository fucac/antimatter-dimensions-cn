<script>
export default {
  name: "AutomatorErrorPage",
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    update() {
      this.errors = AutomatorData.currentErrors();
    },
    scrollToLine(line) {
      AutomatorScroller.scrollToLine(line);
      AutomatorHighlighter.updateHighlightedLine(line, LineEnum.Error);
    }
  }
};
</script>

<template>
  <div class="c-automator-docs-page">
    <div v-if="errors.length === 0">
      未发现脚本错误!
    </div>
    <div v-else>
      <b>你的脚本存在以下 {{ quantify("处错误", errors.length) }}:</b>
      <br>
      <span
        v-for="(error, i) in errors"
        :key="i"
      >
        <b>第 {{ error.startLine }} 行:</b>
        <button
          v-tooltip="'跳转至该行'"
          class="c-automator-docs--button fas fa-arrow-circle-right"
          @click="scrollToLine(error.startLine)"
        />
        <div class="c-automator-docs-page__indented">
          {{ error.info }}
        </div>
        <div class="c-automator-docs-page__indented">
          <i>建议修复:{{ error.tip }}</i>
        </div>
      </span>
      <i>
        注意:有时错误会导致自动机无法正确扫描脚本剩余部分。这可能使部分错误因更早行中发生的其他错误而"消失",或使含有内层块的命令(如 IF 或 WHILE 之类)中的错误,在格式正确的后续命令上显现出来。
        此外,由于错误成因不明,部分建议修复可能存在误导。
      </i>
    </div>
  </div>
</template>

<style scoped>

</style>
