<script>
import ChallengeGrid from "@/components/ChallengeGrid";
import ChallengeTabHeader from "@/components/ChallengeTabHeader";
import EternityChallengeBox from "./EternityChallengeBox";

export default {
  name: "EternityChallengesTab",
  components: {
    ChallengeTabHeader,
    ChallengeGrid,
    EternityChallengeBox
  },
  data() {
    return {
      unlockedCount: 0,
      showAllChallenges: false,
      autoEC: false,
      isAutoECVisible: false,
      hasUpgradeLock: false,
      remainingECTiers: 0,
      untilNextEC: TimeSpan.zero,
      untilAllEC: TimeSpan.zero,
      hasECR: false,
    };
  },
  computed: {
    challenges() {
      return EternityChallenges.all;
    },
    upgradeLockNameText() {
      return RealityUpgrade(12).isLockingMechanics
        ? RealityUpgrade(12).name
        : ImaginaryUpgrade(15).name;
    },
    nextECText() {
      return this.untilNextEC.totalMilliseconds === 0 && !this.autoEC
        ? "取消暂停后立即完成"
        : `${this.untilNextEC}（真实时间）`;
    },
    allECText() {
      return this.untilAllEC.totalMilliseconds === 0 && !this.autoEC
        ? "取消暂停后立即完成"
        : `${this.untilAllEC} 后完成（真实时间）`;
    }
  },
  methods: {
    update() {
      this.showAllChallenges = player.options.showAllChallenges;
      this.unlockedCount = EternityChallenges.all
        .filter(this.isChallengeVisible)
        .length;
      this.isAutoECVisible = (Perk.autocompleteEC1.canBeApplied || EndgameMastery(22).isBought) && !player.disablePostReality;
      this.autoEC = player.reality.autoEC;
      const shouldPreventEC7 = TimeDimension(1).amount.gt(0);
      this.hasUpgradeLock = RealityUpgrade(12).isLockingMechanics ||
        (ImaginaryUpgrade(15).isLockingMechanics && shouldPreventEC7 &&
          !Array.range(1, 6).some(ec => !EternityChallenge(ec).isFullyCompleted));
      const remainingCompletions = EternityChallenges.remainingCompletions;
      this.remainingECTiers = remainingCompletions;
      if (remainingCompletions !== 0) {
        const autoECInterval = EternityChallenges.autoComplete.interval;
        const untilNextEC = Math.max(autoECInterval - player.reality.lastAutoEC, 0);
        this.untilNextEC.setFrom(new Decimal(untilNextEC));
        this.untilAllEC.setFrom(new Decimal(untilNextEC + (autoECInterval * (remainingCompletions - 1))));
      }
      this.hasECR = Perk.studyECRequirement.isBought;
    },
    isChallengeVisible(challenge) {
      return challenge.completions > 0 || challenge.isUnlocked || challenge.hasUnlocked ||
        (this.showAllChallenges && PlayerProgress.realityUnlocked());
    }
  }
};
</script>

<template>
  <div class="l-challenges-tab">
    <ChallengeTabHeader />
    <div v-if="isAutoECVisible">
      永恒挑战将按顺序自动完成，前提是在此之前的所有永恒挑战都已完整通关。
    </div>
    <div
      v-if="isAutoECVisible && remainingECTiers > 0"
      class="c-challenges-tab__auto-ec-info l-challenges-tab__auto-ec-info"
    >
      <div class="l-challenges-tab__auto-ec-timers">
        <span
          v-if="hasUpgradeLock"
          class="l-emphasis"
        >
          永恒挑战自动通关当前已被禁用，因为受到「{{ upgradeLockNameText }}」升级要求的锁定。
        </span>
        <span v-if="remainingECTiers > 0">
          下一次永恒挑战自动通关：{{ nextECText }}
        </span>
        <span>
          全部永恒挑战自动通关完成：{{ allECText }}
        </span>
        <br>
      </div>
    </div>
    <div>
      重复完成永恒挑战可获得更大奖励，最多 {{ formatInt(5) }} 次。<br>
      一旦通关，其奖励会永久生效，无需持续购买对应的永恒挑战时间研究。
    </div>
    <div v-if="!hasECR">
      如果洗点后重新解锁一个已解开过的永恒挑战，在你完成它之前无需再次达成次要条件；<br>
      仅需花费相应的时间定理即可解锁。
    </div>
    <div v-if="unlockedCount !== 12">
      你已见过 {{ formatInt(unlockedCount) }} / {{ formatInt(12) }} 个永恒挑战。
    </div>
    <div v-else>
      你已见过全部 {{ formatInt(12) }} 个永恒挑战。
    </div>
    <ChallengeGrid
      v-slot="{ challenge }"
      :challenges="challenges"
      :is-challenge-visible="isChallengeVisible"
    >
      <EternityChallengeBox :challenge="challenge" />
    </ChallengeGrid>
  </div>
</template>

<style scoped>
.l-emphasis {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
