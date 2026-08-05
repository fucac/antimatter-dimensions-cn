<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "EternityModal",
  components: {
    ResetModal
  },
  data() {
    return {
      exitingEC: false,
      startingIP: new Decimal(),
      gainedEternityPoints: new Decimal(),
      gainedEternities: new Decimal()
    };
  },
  computed: {
    message() {
      return PlayerProgress.eternityUnlocked()
        ? `永恒将重置一切，除了成就、挑战记录，以及统计界面中"常规"项下之物。`
        : `永恒将重置一切，除了成就、挑战记录，以及统计界面中"常规"项下之物。你亦将获得一个永恒点数并解锁诸多升级。`;
    },
    gainedEPOnEternity() {
      return `永恒之际，你将获得${quantify("永恒", this.gainedEternities, 2)}
      与${quantify("永恒点数", this.gainedEternityPoints, 2)}。`;
    },
    startWithIP() {
      return this.startingIP.gt(0)
        ? `你下次永恒之时将以${quantify("无限点数", this.startingIP, 2)}起始。`
        : ``;
    },
    eternityChallenge() {
      const ec = EternityChallenge.current;
      if (ec.isFullyCompleted) {
        return `永恒挑战 ${ec.id} 已完全完成。`;
      }
      if (!Perk.studyECBulk.isBought) {
        return `你将获得永恒挑战 ${ec.id} 的一次完成。`;
      }
      const gainedCompletions = ec.gainedCompletionStatus.gainedCompletions;
      return `你将获得永恒挑战 ${ec.id} 的${quantifyInt("次完成", gainedCompletions)}。`;
    }
  },
  methods: {
    update() {
      this.exitingEC = EternityChallenge.isRunning;
      this.startingIP = Currency.infinityPoints.startingValue;
      this.gainedEternityPoints = gainedEternityPoints();
      this.gainedEternities = gainedEternities();
    },
    handleYesClick() {
      animateAndEternity();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ResetModal
    :header="exitingEC ? '完成永恒挑战' : '你即将进行永恒'"
    :message="message"
    :gained-resources="gainedEPOnEternity"
    :starting-resources="startWithIP"
    :confirm-fn="handleYesClick"
    :alternate-condition="exitingEC"
    :alternate-text="exitingEC ? eternityChallenge : undefined"
    confirm-option="eternity"
  />
</template>
