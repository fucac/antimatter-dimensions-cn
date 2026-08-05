<script>
import ChallengeGrid from "@/components/ChallengeGrid";
import ChallengeTabHeader from "@/components/ChallengeTabHeader";
import NormalChallengeBox from "./NormalChallengeBox";

export default {
  name: "NormalChallengesTab",
  components: {
    ChallengeGrid,
    ChallengeTabHeader,
    NormalChallengeBox
  },
  computed: {
    challenges() {
      return NormalChallenges.all;
    }
  }
};
</script>

<template>
  <div class="l-challenges-tab">
    <ChallengeTabHeader />
    <div>
      部分普通挑战有启动前置条件要求。
    </div>
    <div>
      若你启用了大坍缩自动购买器，达到无限反物质时它会尽快尝试坍缩。
    </div>
    <ChallengeGrid
      v-slot="{ challenge }"
      :challenges="challenges"
    >
      <NormalChallengeBox :challenge="challenge" />
    </ChallengeGrid>
  </div>
</template>

<style scoped>

</style>
