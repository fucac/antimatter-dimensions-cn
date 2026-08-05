<script>
import AutomatorDocsManPage from "./AutomatorDocsManPage";

export default {
  name: "AutomatorDocsCommandList",
  components: {
    AutomatorDocsManPage
  },
  data() {
    return {
      selectedCommand: -1,
    };
  },
  computed: {
    categoryNames: () => GameDatabase.reality.automator.categoryNames,
    commands: () => GameDatabase.reality.automator.commands,
  },
  methods: {
    commandsInCategory(category) {
      return this.commands.filter(c => c.category === category && c.isUnlocked());
    }
  }
};
</script>

<template>
  <div>
    <div v-if="selectedCommand !== -1">
      <button
        class="c-automator-docs--button l-return-button fas fa-arrow-left"
        @click="selectedCommand = -1"
      />
      返回命令列表
    </div>
    <AutomatorDocsManPage
      v-if="selectedCommand !== -1"
      :command="commands[selectedCommand]"
    />
    <div
      v-else
      class="c-automator-docs-page"
    >
      点击带下划线的命令,可查看其语法、用法与功能的更多详情。
      <br>
      <br>
      <span>命令列表:</span>
      <br>
      <div
        v-for="(category, i) in categoryNames"
        :key="i"
      >
        {{ category }}({{ commandsInCategory(i).length }} 个命令)
        <div
          v-for="command in commandsInCategory(i)"
          :key="command.id"
          class="c-automator-docs-page__link l-command-group"
          @click="selectedCommand = command.id"
        >
          <span v-if="command.isUnlocked()">
            {{ command.keyword }}
          </span>
        </div>
      </div>
      <br>
      <span>
        注意:在各命令的语法说明中,<u>带下划线</u>的输入项为<i>必填</i>项,你必须填写;而[方括号]内的输入项为可选项(若使用,输入时应<i>不带</i>方括号)。
        其余部分则需按原样输入。除另有说明外,所有输入均不区分大小写。部分命令可能有多种有效格式,将以分行形式展示。
      </span>
    </div>
  </div>
</template>

<style scoped>
.l-command-group {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
}

.l-return-button {
  width: 4rem;
  height: 2.6rem;
  font-size: 1.8rem;
  margin-left: 2rem;
}
</style>
