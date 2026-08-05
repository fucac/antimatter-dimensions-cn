<script>
export default {
  name: "MasteryStringLine",
  props: {
    tree: {
      type: Object,
      required: true,
    },
    intoEmpty: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    importDestString() {
      return this.intoEmpty ? "至空树" : "与当前树";
    }
  },
  methods: {
    formatSkillCost(es) {
      const strES = `${formatWithCommas(es)} ES`;
      return strES;
    }
  },
};

</script>

<template>
  <div class="l-modal-import-tree__tree-info-line">
    <div v-if="tree.endgameSkills === 0">
      <i>导入此字符串{{ importDestString }}将不会购买任何新的终局精通。</i>
    </div>
    <div v-else>
      导入{{ importDestString }}将购买：
      <br>
      {{ tree.newMasteries }}
      （消耗：{{ formatSkillCost(tree.endgameMasteries) }}）
    </div>
    <br>
  </div>
</template>
