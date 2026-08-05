<script>
export default {
  name: "ChallengeRecordsList",
  props: {
    name: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: true
    },
    times: {
      type: Array,
      required: true
    }
  },
  computed: {
    timeSum() {
      return this.times.decimalSum();
    },
    completedAllChallenges() {
      return this.timeSum.lt(DC.BEMAX);
    }
  },
  methods: {
    timeDisplayShort,
    completionString(time) {
      return time.lt(DC.BEMAX)
        ? `纪录时间：${timeDisplayShort(time)}`
        : "尚未完成";
    }
  }
};
</script>

<template>
  <div>
    <br>
    <div
      v-for="(time, i) in times"
      :key="i"
    >
      <span>{{ name }} {{ start + i }} {{ completionString(time) }}</span>
    </div>
    <br>
    <div v-if="completedAllChallenges">
      {{ name }}纪录时间之和：{{ timeDisplayShort(timeSum) }}
    </div>
    <div v-else>
      你尚未完成全部{{ name }}。
    </div>
  </div>
</template>
