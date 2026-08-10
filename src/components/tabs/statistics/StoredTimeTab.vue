<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "StoredTimeTab",
  components: {
    PrimaryButton
  },
  data() {
    return {
      storedTime: 0,
      customTimeInput: ""
    };
  },
  computed: {
    timeDisplay() {
      return TimeSpan.fromSeconds(new Decimal(this.storedTime)).toStringShort();
    },
    oneMinuteDisp() {
      return `消耗 ${TimeSpan.fromMinutes(1).toStringShort()} 储存时间`;
    },
    tenMinutesDisp() {
      return `消耗 ${TimeSpan.fromMinutes(10).toStringShort()} 储存时间`;
    },
    oneHourDisp() {
      return `消耗 ${TimeSpan.fromHours(1).toStringShort()} 储存时间`;
    },
    fiveHoursDisp() {
      return `消耗 ${TimeSpan.fromHours(5).toStringShort()} 储存时间`;
    },
    allDisp() {
      return `消耗所有储存时间`;
    },
    classObj1() {
      return {
        "o-primary-btn": true,
        "o-primary-btn--disabled": this.storedTime < 60
      };
    },
    classObj2() {
      return {
        "o-primary-btn": true,
        "o-primary-btn--disabled": this.storedTime < 600
      };
    },
    classObj3() {
      return {
        "o-primary-btn": true,
        "o-primary-btn--disabled": this.storedTime < 3600
      };
    },
    classObj4() {
      return {
        "o-primary-btn": true,
        "o-primary-btn--disabled": this.storedTime < 18000
      };
    },
    classObj5() {
      return {
        "o-primary-btn": true,
        "o-primary-btn--disabled": this.storedTime <= 0
      };
    },
    customSeconds() {
      return this.parseCustomTime(this.customTimeInput);
    },
    customDisp() {
      if (this.customSeconds <= 0) return "消耗自定义时间";
      return `消耗 ${TimeSpan.fromSeconds(new Decimal(this.customSeconds)).toStringShort()} 储存时间`;
    },
    classObjCustom() {
      return {
        "o-primary-btn": true,
        "o-primary-btn--disabled": this.customSeconds <= 0 || this.storedTime < this.customSeconds
      };
    },
  },
  methods: {
    update() {
      this.storedTime = player.storedTime;
    },
    // 解析自定义时间输入：支持 "3600"（秒）、"3小时"、"2天"、"1e9年" 等（可省略单位，默认秒）
    parseCustomTime(input) {
      const m = String(input ?? "").trim().toLowerCase().match(/^([0-9.eE+-]+)\s*(年|天|小时|分钟|秒|y|d|h|m|s)?$/);
      if (!m) return 0;
      const v = parseFloat(m[1]);
      if (!isFinite(v) || v < 0) return 0;
      const unitSecs = { 年: 31557600, y: 31557600, 天: 86400, d: 86400, 小时: 3600, h: 3600, 分钟: 60, m: 60, 秒: 1, s: 1, "": 1 };
      return v * (unitSecs[m[2]] ?? 1);
    },
    spendOneMin() {
      if (this.storedTime >= 60) {
        player.storedTime -= 60;
        simulateTime(60);
      }
    },
    spendTenMins() {
      if (this.storedTime >= 600) {
        player.storedTime -= 600;
        simulateTime(600);
      }
    },
    spendOneHour() {
      if (this.storedTime >= 3600) {
        player.storedTime -= 3600;
        simulateTime(3600);
      }
    },
    spendFiveHours() {
      if (this.storedTime >= 18000) {
        player.storedTime -= 18000;
        simulateTime(18000);
      }
    },
    spendAll() {
      if (this.storedTime >= 0) {
        simulateTime(player.storedTime);
        player.storedTime = 0;
      }
    },
    spendCustom() {
      const secs = this.customSeconds;
      if (secs <= 0 || this.storedTime < secs) return;
      player.storedTime -= secs;
      simulateTime(secs);
    }
  }
};
</script>

<template>
  <div>
    <div class="normal-text">
      <br>
      <span>你拥有 </span><span class="special-text">{{ timeDisplay }}</span><span> 储存时间。</span>
    </div>
    <div class="c-subtab-option-container">
      <PrimaryButton
        :class="classObj1"
        @click="spendOneMin"
      >
        {{ oneMinuteDisp }}
      </PrimaryButton>
      <PrimaryButton
        :class="classObj2"
        @click="spendTenMins"
      >
        {{ tenMinutesDisp }}
      </PrimaryButton>
      <PrimaryButton
        :class="classObj3"
        @click="spendOneHour"
      >
        {{ oneHourDisp }}
      </PrimaryButton>
      <PrimaryButton
        :class="classObj4"
        @click="spendFiveHours"
      >
        {{ fiveHoursDisp }}
      </PrimaryButton>
      <PrimaryButton
        :class="classObj5"
        @click="spendAll"
      >
        {{ allDisp }}
      </PrimaryButton>
      <div class="c-stored-time-custom">
        <input
          v-model="customTimeInput"
          class="c-stored-time-custom__input"
          placeholder="如 3小时 / 2天 / 1e9年（也可直接输入秒数）"
          @keyup.enter="spendCustom"
        >
        <PrimaryButton
          :class="classObjCustom"
          @click="spendCustom"
        >
          {{ customDisp }}
        </PrimaryButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.normal-text {
  font-size: 1rem;
  color: #ffffff;
}

.special-text {
  font-size: 2.5rem;
  color: var(--color-dilation);
}

.c-stored-time-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;
}

.c-stored-time-custom__input {
  width: 18rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: #ffffff;
  background: #111111;
  border: 1px solid #444444;
  border-radius: 0.25rem;
}
</style>
