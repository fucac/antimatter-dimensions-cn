<script>
import RealityUpgradeButton from "./RealityUpgradeButton";

export default {
  name: "RealityUpgradesTab",
  components: {
    RealityUpgradeButton
  },
  computed: {
    upgrades: () => RealityUpgrades.all,
    costScalingTooltip: () => `超过 ${format(1e30)} 现实机器后成本开始更快增长，
      超过 ${format(DC.NUMMAX, 1)} 现实机器后增长更甚。`,
    possibleTooltip: () => `棋盘格填充的升级在本次现实中无法解锁。条纹填充的升级仍有可能解锁。`,
    lockTooltip: () => `仅在你尚未触发解锁条件失败或已解锁该升级时生效。`,
  },
  methods: {
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  }
};
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-reality-upgrade-infotext">
      将鼠标悬停在 <i class="fas fa-question-circle" /> 图标上以查看更多信息。
      <br>
      第一行升级可无限购买，成本会持续增长
      <span :ach-tooltip="costScalingTooltip">
        <i class="fas fa-question-circle" />
      </span>
      ，其余均为一次性购买。
      <br>
      一次性购买的升级同时带有要求条件，一旦达成，将永久解锁随时购买该升级的权限。
      <span :ach-tooltip="possibleTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      已锁定的升级默认显示其要求条件与效果；已解锁的升级显示效果、当前加成与成本。按住 Shift 可以切换此显示行为。
      <br>
      你可以 Shift 点击带 <i class="fas fa-lock-open" /> 图标的升级，使游戏在本次现实中阻止你做出任何会导致其解锁条件失败的操作。
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      每完整购买一行升级，你的符文等级提升 {{ formatInt(1) }} 级。
    </div>
    <div
      v-for="row in 5"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <RealityUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
</template>

<style scoped>
.c-reality-upgrade-infotext {
  color: var(--color-text);
  margin: -1rem 0 1.5rem;
}
</style>
