<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "PreferredMasteryTreeModal",
  components: {
    ModalWrapperChoice,
  },
  data() {
    return {
      compressionPath: null,
      currencyPath: null
    };
  },
  computed: {
    compressionOptions() {
      return {
        "AD压缩": ENDGAME_MASTERY_PATH.ANTIMATTER_DIM_COMPRESSION,
        "ID压缩": ENDGAME_MASTERY_PATH.INFINITY_DIM_COMPRESSION,
        "TD压缩": ENDGAME_MASTERY_PATH.TIME_DIM_COMPRESSION,
        "CD压缩": ENDGAME_MASTERY_PATH.CELESTIAL_DIM_COMPRESSION,
      };
    },
    currencyOptions() {
      return {
        "无限点数": ENDGAME_MASTERY_PATH.INFINITY_POINTS,
        "永恒点数": ENDGAME_MASTERY_PATH.ETERNITY_POINTS,
        "现实机器": ENDGAME_MASTERY_PATH.REALITY_MACHINES,
        "虚幻机器": ENDGAME_MASTERY_PATH.IMAGINARY_MACHINES
      };
    },
    usePriority() {
      return EndgameMastery.preferredPaths.compression.usePriority;
    },
    useOtherPriority() {
      return EndgameMastery.preferredPaths.currency.usePriority;
    },
  },
  created() {
    this.compressionPath = [...EndgameMastery.preferredPaths.compression.path];
    this.currencyPath = [...EndgameMastery.preferredPaths.currency.path];
  },
  methods: {
    isPreferred(name) {
      return this.compressionPath.indexOf(this.compressionOptions[name]) + 1 || this.currencyPath.indexOf(this.currencyOptions[name]) + 1;
    },
    select(name) {
      if (this.compressionOptions[name]) {
        if (!this.usePriority || this.compressionPath.length > 1) this.compressionPath.shift();
        if (!this.compressionPath.includes(this.compressionOptions[name]))
          this.compressionPath.push(this.compressionOptions[name]);
      }
      if (this.currencyOptions[name]) {
        if (!this.useOtherPriority || this.currencyPath.length > 1) this.currencyPath.shift();
        if (!this.currencyPath.includes(this.currencyOptions[name]))
          this.currencyPath.push(this.currencyOptions[name]);
      }
    },
    confirmPrefs() {
      EndgameMastery.preferredPaths.compression.path = this.compressionPath;
      EndgameMastery.preferredPaths.currency.path = this.currencyPath;
    },
    classList(name) {
      const pref = this.isPreferred(name);
      const types = {
        "AD压缩": "antimatter-dim-compression",
        "ID压缩": "infinity-dim-compression",
        "TD压缩": "time-dim-compression",
        "CD压缩": "celestial-dim-compression",
        "无限点数": "infinity-points",
        "永恒点数": "eternity-points",
        "现实机器": "reality-machines",
        "虚幻机器": "imaginary-machines"
      };
      return [
        "o-endgame-mastery-selection-btn",
        `o-endgame-mastery-${types[name]}--${pref ? "bought" : "available"}`,
        `o-endgame-mastery--${pref ? "bought" : "available"}`
      ];
    },
  },
};
</script>

<template>
  <ModalWrapperChoice @confirm="confirmPrefs">
    <h2>压缩分流偏好</h2>
    <div class="l-modal-split-preferences">
      <button
        v-for="(id, name) in compressionOptions"
        :key="name"
        :class="classList(name)"
        @click="select(name)"
      >
        <div
          v-if="isPreferred(name)"
          class="l-dim-path-priority o-dim-path-priority"
        >
          {{ isPreferred(name) }}
        </div>
        <div>
          {{ name }}
        </div>
      </button>
    </div>
    <br>
    <h2>货币分流偏好</h2>
    <div class="l-modal-split-preferences">
      <button
        v-for="(id, name) in currencyOptions"
        :key="name"
        :class="classList(name)"
        @click="select(name)"
      >
        <div
          v-if="isPreferred(name)"
          class="l-dim-path-priority o-dim-path-priority"
        >
          {{ isPreferred(name) }}
        </div>
        <div>
          {{ name }}
        </div>
      </button>
    </div>
  </ModalWrapperChoice>
</template>
