<script>
import AutobuyerBox from "./AutobuyerBox";
import AutobuyerInput from "./AutobuyerInput";

export default {
  name: "CelestialDimensionBoostAutobuyerBox",
  components: {
    AutobuyerBox,
    AutobuyerInput
  },
  props: {
    isModal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      limitCelDimBoosts: false,
      limitUntilCelGalaxies: false,
      isBuyMaxUnlocked: false
    };
  },
  computed: {
    autobuyer: () => Autobuyer.celestialDimboost
  },
  watch: {
    limitCelDimBoosts(newValue) {
      this.autobuyer.limitCelDimBoosts = newValue;
    },
    limitUntilCelGalaxies(newValue) {
      this.autobuyer.limitUntilCelGalaxies = newValue;
    }
  },
  methods: {
    update() {
      const autobuyer = this.autobuyer;
      this.isBuyMaxUnlocked = autobuyer.isBuyMaxUnlocked;
      this.limitCelDimBoosts = autobuyer.limitCelDimBoosts;
      this.limitUntilCelGalaxies = autobuyer.limitUntilCelGalaxies;
    }
  }
};
</script>

<template>
  <AutobuyerBox
    :autobuyer="autobuyer"
    :is-modal="isModal"
    :show-interval="!isBuyMaxUnlocked"
    name="自动天神维度跃迁"
  >
    <template
      v-if="isBuyMaxUnlocked"
      #intervalSlot
    >
      <div
        class="c-autobuyer-box__small-text"
      >
        <br>
        每 X 秒触发一次：
      </div>
      <AutobuyerInput
        :autobuyer="autobuyer"
        type="float"
        property="buyMaxInterval"
      />
    </template>
    <template
      v-if="!isBuyMaxUnlocked"
      #checkboxSlot
    >
      <label
        class="o-autobuyer-toggle-checkbox c-autobuyer-box__small-text l-top-margin o-clickable"
      >
        <input
          v-model="limitCelDimBoosts"
          type="checkbox"
          class="o-clickable"
        >
        将天神维度跃迁限制为：
      </label>
      <AutobuyerInput
        :autobuyer="autobuyer"
        type="int"
        property="maxCelDimBoosts"
      />
    </template>
    <template #toggleSlot>
      <label
        class="o-autobuyer-toggle-checkbox c-autobuyer-box__small-text l-autobuyer-text-area o-clickable"
      >
        <input
          v-model="limitUntilCelGalaxies"
          type="checkbox"
          class="o-clickable"
        >
        <span v-if="isBuyMaxUnlocked">
          直到 X 个天神星系前<br>
          不购买天神维度跃迁：
        </span>
        <span v-else>
          始终天神跃迁所需的天神星系数，<br>
          忽略限制：
        </span>
      </label>
      <AutobuyerInput
        :autobuyer="autobuyer"
        type="int"
        property="celGalaxies"
      />
    </template>
  </AutobuyerBox>
</template>

<style scoped>
.l-top-margin {
  margin-top: 0.82rem;
}

.l-dimboost-text-area {
  height: 3rem;
}

.o-clickable {
  cursor: pointer;
}
</style>
