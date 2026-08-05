<script>
import Accelerator from "./Accelerator";
import PowerCoreButton from "./PowerCoreButton";

export default {
  name: "AcceleratorsPanel",
  components: {
    Accelerator,
    PowerCoreButton
  },
  data() {
    return {
      decayRate: 0,
      time: 0,
      nextAcceleratorReq: new Decimal(),
      nextAcceleratorCurrency: ""
    };
  },
  computed: {
    accelerators() {
      return Accelerators.all;
    }
  },
  methods: {
    update() {
      this.decayRate = LHC.acceleratorSpeed;
      this.time = Date.now();
      this.nextAcceleratorReq.copyFrom(LHC.nextAccelerator ? LHC.nextAccelerator.config.unlockReq() : Decimal.pow10("1e1000"));
      this.nextAcceleratorCurrency = LHC.nextAccelerator ? LHC.nextAccelerator.config.drainResource : "反物质";
    }
  }
};
</script>

<template>
  <div class="l-accelerator-panel-container">
    <div class="c-accelerator-panel-title">
      加速器
    </div>
    <div
      class="l-accelerator-content-container"
    >
      点击其进度条即可激活加速器。
      <span>你无法同时激活多个加速器。</span>
      激活时，加速器以每秒 {{ formatPercents(decayRate, 3) }} 的速率充能。
      <br>
      加速器的效果即使未激活也生效，并基于当前充能百分比。
      <div class="c-accelerator-bar-container">
        <Accelerator
          v-for="accelerator in accelerators"
          :key="accelerator.config.id"
          :accelerator="accelerator"
        />
      </div>
    </div>
    <PowerCoreButton />
    <div class="c-accelerator-panel-description">
      下一个加速器将在 {{ format(nextAcceleratorReq, 2, 2) }} {{ nextAcceleratorCurrency }} 时解锁
    </div>
  </div>
</template>

<style scoped>
.c-accelerator-panel-title {
  position: relative;
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-alpha--base);
}

.l-accelerator-content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
}

.l-accelerator-panel-container {
  width: 98rem;
  border: var(--var-border-width, 0.2rem) solid var(--color-alpha--base);
  border-radius: var(--var-border-radius, 0.5rem);
  margin: 1rem;
  padding: 1rem;
  -webkit-user-select: none;
  user-select: none;
}

.c-accelerator-bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.c-accelerator-panel-description {
  position: relative;
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-alpha--base);
}
</style>
