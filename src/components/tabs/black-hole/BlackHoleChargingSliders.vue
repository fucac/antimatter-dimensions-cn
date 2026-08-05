<script>
import { Laitela } from "@/core/globals";

import SliderComponent from "@/components/SliderComponent";

export default {
  name: "BlackHoleChargingSliders",
  components: {
    SliderComponent
  },
  data() {
    return {
      isNegativeBHUnlocked: false,
      isInverted: false,
      isLaitela: false,
      negativeSlider: 0,
      negativeBHDivisor: 1,
      maxNegativeBlackHole: 300,
      isDisabled: false,
      amountSlider: 0.01,
      timeSlider: 5,
      areExtraSlidersUnlocked: false
    };
  },
  computed: {
    infoTooltip() {
      return this.isLaitela
        ? "此现实的物理法则不允许黑洞反转"
        : "黑洞必须暂停才能激活反转";
    },
    reqLockText() {
      return `反转强度因"${ImaginaryUpgrade(24).name}"的锁定而无法修改`;
    }
  },
  methods: {
    update() {
      this.isNegativeBHUnlocked = V.isFlipped && BlackHoles.arePermanent;
      this.isInverted = BlackHoles.areNegative;
      this.isLaitela = Laitela.isRunning;
      this.negativeSlider = -Math.log10(player.blackHoleNegative);
      this.negativeBHDivisor = Math.pow(10, this.negativeSlider);
      const maxInversion = player.requirementChecks.reality.slowestBH <= 1e-300;
      this.isDisabled = ImaginaryUpgrade(24).isLockingMechanics && Ra.isRunning && maxInversion;
      this.amountSlider = player.celestials.enslaved.pulseAmount * 500;
      this.timeSlider = player.celestials.enslaved.pulseTime;
      this.areExtraSlidersUnlocked = ExpansionPack.enslavedPack.isBought && !player.disablePostReality;
    },
    adjustSliderNegative(value) {
      this.negativeSlider = value;
      player.blackHoleNegative = Math.pow(10, -this.negativeSlider);
      player.requirementChecks.reality.slowestBH = Math.max(
        player.requirementChecks.reality.slowestBH,
        player.blackHoleNegative
      );
    },
    adjustSliderPulseAmount(value) {
      this.amountSlider = value;
      player.celestials.enslaved.pulseAmount = this.amountSlider / 500;
    },
    adjustSliderPulseTime(value) {
      this.timeSlider = value;
      player.celestials.enslaved.pulseTime = this.timeSlider;
    },
    sliderProps(negative) {
      return {
        min: 0,
        max: negative ? this.maxNegativeBlackHole : 990,
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
    sliderPropsAmount() {
      return {
        min: 1,
        max: 500,
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
    sliderPropsTime() {
      return {
        min: 1,
        max: 100,
        interval: 1,
        width: "55rem",
        tooltip: false
      };
    },
  }
};
</script>

<template>
  <div>
    <div
      v-if="isNegativeBHUnlocked"
      class="l-black-hole-sliders"
    >
      <b>
        反转黑洞将游戏速度除以 {{ format(negativeBHDivisor, 2, 2) }}。
        （当前{{ isInverted ? "激活" : "未激活" }}<span
          v-if="negativeSlider !== 0 && !isInverted"
          :ach-tooltip="infoTooltip"
        >
          <i class="fas fa-question-circle l-margin-left" />
        </span>）
      </b>
      <SliderComponent
        v-if="!isDisabled"
        v-bind="sliderProps(true)"
        :value="negativeSlider"
        @input="adjustSliderNegative($event)"
      />
      <div
        v-else
        class="l-lock-text"
      >
        {{ reqLockText }}
      </div>
      <br>
      反转黑洞只影响其自身的加速效果，不影响其他升级或效果，但它也会间接影响埃法里格的游戏速度幂效果。
    </div>
    <br>
    <div
      v-if="areExtraSlidersUnlocked"
      class="l-black-hole-sliders"
    >
      <b>
        如果脉冲开启，黑洞每秒会自动释放 {{ formatPercents(amountSlider / 500, 2, 1) }} 的存储游戏时间。
      </b>
      <SliderComponent
        v-if="areExtraSlidersUnlocked"
        v-bind="sliderPropsAmount()"
        :value="amountSlider"
        @input="adjustSliderPulseAmount($event)"
      />
      <br>
      <b>
        如果脉冲开启，黑洞当前每 {{ formatInt(timeSlider) }} 个刻度释放一次存储游戏时间。
      </b>
      <SliderComponent
        v-if="areExtraSlidersUnlocked"
        v-bind="sliderPropsTime()"
        :value="timeSlider"
        @input="adjustSliderPulseTime($event)"
      />
    </div>
  </div>
</template>

<style scoped>
.l-black-hole-sliders {
  width: 55rem;
  color: var(--color-text);
}

.l-margin-left {
  margin-left: 0.5rem;
}

.l-lock-text {
  font-weight: bold;
  color: var(--color-bad);
  margin: 0.5rem 0 -0.5rem;
}
</style>
