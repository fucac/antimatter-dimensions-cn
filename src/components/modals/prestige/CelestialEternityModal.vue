<script>
import ResetModal from "@/components/modals/prestige/ResetModal";

export default {
  name: "CelestialEternityModal",
  components: {
    ResetModal
  },
  data() {
    return {
      startingCIP: new Decimal(),
      gainedCelestialEternityPoints: new Decimal(),
      gainedCelestialEternities: new Decimal()
    };
  },
  computed: {
    message() {
      return PlayerProgress.celestialEternityUnlocked()
        ? `天神永恒将重置至此为止一切与天神维度相关之物。`
        : `天神永恒将重置至此为止一切与天神维度相关之物。
          你亦将获得一个天神永恒点数并解锁诸多升级。`;
    },
    gainedCEPOnCelestialEternity() {
      return `天神永恒之际，你将获得${quantify("天神永恒", this.gainedCelestialEternities, 2)}
      与${quantify("天神永恒点数", this.gainedCelestialEternityPoints, 2)}。`;
    },
    startWithCIP() {
      return this.startingCIP.gt(0)
        ? `你下次天神永恒之时将以${quantify("天神点数", this.startingCIP, 2)}起始。`
        : ``;
    },
  },
  methods: {
    update() {
      this.startingCIP = Currency.celestialInfinityPoints.startingValue;
      this.gainedCelestialEternityPoints = gainedCelestialEternityPoints();
      this.gainedCelestialEternities = gainedCelestialEternities();
    },
    handleYesClick() {
      celestialEternity();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ResetModal
    :header="'你即将进行天神永恒'"
    :message="message"
    :gained-resources="gainedCEPOnCelestialEternity"
    :starting-resources="startWithCIP"
    :confirm-fn="handleYesClick"
    confirm-option="celestialEternity"
  />
</template>
