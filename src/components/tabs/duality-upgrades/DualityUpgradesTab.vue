<script>
import DualityUpgradeButton from "./DualityUpgradeButton";

export default {
  name: "DualityUpgradesTab",
  components: {
    DualityUpgradeButton
  },
  data() {
    return {
      baseIMCap: new Decimal(),
      capIM: new Decimal(),
      scaleTime: 0,
      capStr: "",
    };
  },
  computed: {
    upgrades: () => DualityUpgrades.all,
    lockTooltip: () => `要求锁定仅阻止手动和自动操作。相关升级
      不会被禁用，仍可能导致要求无法满足。`,
  },
  methods: {
    update() {
      this.baseIMCap.copyFrom(MachineHandler.baseIMCap);
      this.capIM.copyFrom(MachineHandler.hardcapIM);
      this.scaleTime = MachineHandler.scaleTimeForDM;
      this.capStr = formatMachines(MachineHandler.hardcapRM, MachineHandler.currentIMCap, MachineHandler.currentDMCap);
    },
    id(row, column) {
      return (row - 1) * 5 + column - 1;
    }
  }
};
</script>

<template>
  <div class="l-reality-upgrade-grid">
    <div class="c-cap-text">
      你的现实机器上限为 <span class="c-reality-tab__reality-machines">{{ capStr }}</span>。
    </div>
    <div class="c-info-text">
      你已触及现实的极限，最多只能持有 {{ format(capIM) }} 虚幻机器。
      <br>
      超过 {{ format(baseIMCap) }} 后多出的现实机器会提升你能拥有的二元机上限。
      <br>
      二元机会随时间被动获取直到达到上限，但越接近上限，获取速度越慢（指数衰减）。
      <br>
      每 {{ formatInt(scaleTime) }} 秒，你当前二元机与上限之间的差值会减半。
      <br>
      <br>
      前两行升级可无限购买，其余为带有要求的一次性升级。
      <br>
      此处的升级与虚幻升级玩法和视觉效果相同，但花费二元机而非虚幻机器。
      <span :ach-tooltip="lockTooltip">
        <i class="fas fa-question-circle" />
      </span>
    </div>
    <div
      v-for="row in 5"
      :key="row"
      class="l-reality-upgrade-grid__row"
    >
      <DualityUpgradeButton
        v-for="column in 5"
        :key="id(row, column)"
        :upgrade="upgrades[id(row, column)]"
      />
    </div>
  </div>
</template>

<style scoped>
.c-cap-text {
  color: var(--color-text);
  font-size: 1.5rem;
}

.c-info-text {
  color: var(--color-text);
  margin: 1.5rem;
}
</style>
