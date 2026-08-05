<script>
import CelestialQuoteHistory from "@/components/CelestialQuoteHistory";
import RaPet from "./RaPet";
import RaPetRemembranceButton from "./RaPetRemembranceButton";

export default {
  name: "RaTab",
  components: {
    RaPet,
    RaPetRemembranceButton,
    CelestialQuoteHistory
  },
  data() {
    return {
      memoriesPerChunk: new Decimal(0),
      showReality: false,
      isRaCapped: false,
      totalLevels: 0,
      showRemembrance: false,
      hasRemembrance: false,
      remembranceReq: 0,
      remembranceMult: 1,
      remembranceNerf: 1,
      petWithRemembrance: "",
      isRunning: false,
      memoryBoosts: "",
    };
  },
  computed: {
    laitelaUnlock: () => Laitela.isUnlocked,
    pets: () => [
      {
        pet: Ra.pets.teresa,
        scalingUpgradeVisible: () => Ra.unlocks.chargedInfinityUpgrades.isUnlocked,
        scalingUpgradeText: () => `汝可充能 ${quantifyInt("无限升级", Ra.totalCharges)}。`,
      },
      {
        pet: Ra.pets.effarig,
        scalingUpgradeVisible: () => AlchemyResources.all.filter(r => r.isUnlocked).length > 0,
        scalingUpgradeText: () => {
          const resources = AlchemyResources.all.filter(r => r.isUnlocked).length;
          return `汝已解锁 ${quantifyInt("炼金资源", resources)}。`;
        },
      },
      {
        pet: Ra.pets.enslaved,
        scalingUpgradeVisible: () => Ra.unlocks.improvedStoredTime.isUnlocked,
        scalingUpgradeText: () => `游戏时间存储
          ${formatX(Ra.unlocks.improvedStoredTime.effects.gameTimeAmplification.effectOrDefault(1), 2)}，现实时间
          +${formatInt(Ra.unlocks.improvedStoredTime.effects.realTimeCap.effectOrDefault(0) / (1000 * 3600))} 小时`,
      },
      {
        pet: Ra.pets.v,
        scalingUpgradeVisible: () => Ra.unlocks.unlockHardV.isUnlocked,
        scalingUpgradeText: () => {
          const triadCount = Ra.unlocks.unlockHardV.effectOrDefault(0);
          return `汝已解锁 ${quantifyInt("三联研究", triadCount)}。`;
        },
      }
    ],
    petStyle() {
      return {
        color: (this.petWithRemembrance === "")
          ? "white"
          : this.pets.find(pet => pet.pet.name === this.petWithRemembrance).pet.color,
      };
    },
    runButtonClassObject() {
      return {
        "c-ra-run-button__icon": true,
        "c-ra-run-button__icon--running": this.isRunning,
        "c-celestial-run-button--clickable": !this.isDoomed,
        "o-pelle-disabled-pointer": this.isDoomed
      };
    },
    runDescription() {
      return GameDatabase.celestials.descriptions[4].effects().replace(/^\w/u, c => c.toUpperCase()).split("\n");
    },
    memoryDescription() {
      return `于太阳神的现实之内，天神记忆之记忆块
        将依某些资源之数量而生。`;
    },
    isDoomed: () => Pelle.isDoomed,
  },
  methods: {
    update() {
      this.memoriesPerChunk.copyFrom(Ra.productionPerMemoryChunk);
      this.isRaCapped = Ra.totalPetLevel === Ra.maxTotalPetLevel;
      this.totalLevels = Ra.totalPetLevel;
      this.showRemembrance = Ra.unlocks.effarigUnlock.canBeApplied;
      this.hasRemembrance = Ra.remembrance.isUnlocked;
      this.remembranceReq = Ra.remembrance.requiredLevels;
      this.remembranceMult = Ra.remembrance.multiplier;
      this.remembranceNerf = Ra.remembrance.nerf;
      this.petWithRemembrance = Ra.petWithRemembrance;
      this.isRunning = Ra.isRunning;
      this.memoryBoosts = Ra.memoryBoostResources;
    },
    startRun() {
      if (this.isDoomed) return;
      Modal.celestials.show({ name: "Ra's", number: 4 });
    },
    toggleMode() {
      Ra.toggleMode();
    }
  },
};
</script>

<template>
  <div class="l-ra-celestial-tab">
    <div class="c-ra-memory-header">
      <CelestialQuoteHistory celestial="ra" />
      <div v-if="!isRaCapped">
        每一记忆块每秒生成一点记忆为基础<span v-if="memoriesPerChunk.gt(1)">，
          此值已提升至每秒 {{ quantify("记忆", memoriesPerChunk, 2, 3) }}</span>。
        <br>
        存储现实时间会阻碍记忆块之生成，然记忆仍将如常获取。
        <span v-if="memoriesPerChunk.gt(1)">
          <br>
          此提升乃因 {{ memoryBoosts }} 所致。
        </span>
      </div>
      <div v-else>
        一切记忆已悉数归还。
      </div>
    </div>
    <div>
      将鼠标悬停于进度条下方之图标，可查看升级之描述，
      <br>
      悬停于 <i class="fas fa-question-circle" /> 图标，可获特定资源之详情。
    </div>
    <div class="l-ra-all-pets-container">
      <RaPet
        v-for="(pet, i) in pets"
        :key="i"
        :pet-config="pet"
      />
    </div>
    <div class="l-ra-non-pets">
      <button class="c-ra-run-button">
        <h2 :class="{ 'o-pelle-disabled': isDoomed }">
          <span v-if="isRunning">您正身处</span>
          <span v-else>开启</span>
          太阳神的现实
        </h2>
        <div
          :class="runButtonClassObject"
          @click="startRun"
        >
          <span class="c-ra-run-button__icon__sigil fas fa-sun" />
        </div>
        <span
          v-for="(line, lineId) in runDescription"
          :key="lineId + '-ra-run-desc'"
        >
          {{ line }}
        </span>
        <br>
        <span>
          {{ memoryDescription }}
        </span>
      </button>
      <div
        v-if="showRemembrance && !isRaCapped"
        class="c-ra-remembrance-unlock"
      >
        <h1 :style="petStyle">
          铭记
        </h1>
        <span :style="petStyle">
          凡身负铭记之天神，其记忆块获取将增至 {{ formatX(remembranceMult) }}。其余
          天神之记忆块获取将降至 {{ formatX(remembranceNerf, 1, 1) }}。
        </span>
        <div
          v-if="hasRemembrance"
          class="c-ra-remembrance-unlock-inner"
        >
          <RaPetRemembranceButton
            v-for="(pet, i) in pets"
            :key="i"
            :pet-config="pet"
          />
        </div>
        <div
          v-else
          class="c-ra-remembrance-unlock-inner"
        >
          须达天神记忆等级总计 {{ formatInt(remembranceReq) }} 级方可解锁
          （尚需 {{ formatInt(remembranceReq - totalLevels) }} 级）
        </div>
      </div>
    </div>
  </div>
</template>
