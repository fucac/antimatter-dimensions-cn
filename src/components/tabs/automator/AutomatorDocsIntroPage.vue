<script>
export default {
  name: "AutomatorDocsIntroPage",
};
</script>

<template>
  <div>
    欢迎来到反物质维度自动机!
    <br>
    <br>
    本页为介绍页,将概览自动机的种种功用。各项功能的具体细节,可查阅"如何游玩"或相关子标签页。
    <br>
    <br>
    <b>脚本语言:</b> 自动机使用一套自定义脚本语言,可代你执行某些游戏操作。点击
    <div class="fas fa-list c-automator-button-icon" /> 可调出可用命令列表。你也可在
    <div class="fas fa-book c-automator-button-icon" /> 页面中,将各类数值定义为常量的简写名。
    <br>
    <br>
    <b>布局:</b> 自动机本身分为左右两半;左半为脚本及启动、停止、循环执行的控制按钮,右半为自动机的相关信息。点击右上角的
    <div class="fas fa-expand-arrows-alt c-automator-button-icon" /> 可将自动机扩展至整个浏览器页面,以便编辑。
    <br>
    <br>
    <b>编辑器模式:</b> 编写自动机脚本有两种编辑器可选——基于块的编辑器(默认)与基于文本的编辑器。你可在左半区域右上角的切换开关处,于两种编辑器之间切换。需注意,含有错误的脚本在两种模式间转换时可能出错,从而导致部分脚本内容被删除。
    <br>
    <br>
    <b>创建脚本:</b> 你可使用第二行按钮处的下拉菜单,在多个脚本间切换或新建脚本。当前脚本可借由
    <div class="fas fa-edit c-automator-button-icon" /> 与
    <div class="fas fa-trash c-automator-button-icon" /> 按钮进行重命名或删除。自动机中至少会保留一个可编辑的脚本;若你删除了最后一个,系统将自动新建一个空白脚本。
    <br>
    <br>
    <b>编写脚本:</b> 在块编辑器中,需进入块标签页
    <div class="fas fa-cubes c-automator-button-icon" /> 来构建脚本;在文本编辑器中,则直接在左半区域的文本框内输入即可。在任一编辑器模式下,你都可从模板生成器
    <div class="fas fa-file-code c-automator-button-icon" /> 中调用一些小型预制脚本。你可使用
    <div class="fas fa-arrow-rotate-left c-automator-button-icon" /> 或
    <div class="fas fa-arrow-rotate-right c-automator-button-icon" /> 撤销或重做有限次数的编辑,亦可用对应快捷键。切换、转换或删除脚本时,编辑历史将被清空。
    <br>
    <br>
    <b>调试:</b> 修复脚本有两大主要工具:错误日志
    <div class="fas fa-exclamation-triangle c-automator-button-icon" />(用于脚本完全无法运行之时);以及事件日志
    <div class="fas fa-eye c-automator-button-icon" />(用于脚本能运行却与预期不符之时)。
    <br>
    <br>
    <b>导入/导出:</b> 自动机脚本可分别通过
    <div class="fas fa-file-export c-automator-button-icon" /> 与
    <div class="fas fa-file-import c-automator-button-icon" /> 按钮以文本格式导出与导入。如有所需,还可通过
    <div class="fas fa-window-restore c-automator-button-icon" /> 访问更多扩展导出选项。
    <br>
    <br>
    <b>脚本保存:</b> 在某些情况下,脚本的改动并不会立即保存至本地;详情请查阅自动机的"如何游玩"条目。此外,为减少卡顿,自动机面板上方设有两处字符数上限。
  </div>
</template>

<style scoped>
.c-automator-button-icon {
  padding: 0.3rem 0.8rem;
  width: 3.3rem;
  border: var(--var-border-width, 0.2rem) solid var(--color-automator-controls-border);
  border-radius: var(--var-border-radius, 0.3rem);
  color: var(--color-automator-docs-font);
  background-color: var(--color-automator-controls-inactive);
}
</style>
