<script>
import { MatterScale } from "./matter-scale";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "StatisticsTab",
  components: {
    PrimaryButton
  },
  data() {
    return {
      isDoomed: false,
      realTimeDoomed: TimeSpan.zero,
      totalAntimatter: new Decimal(0),
      totalAntimatterOutsideDoom: new Decimal(0),
      bestDoomedAntimatterThisDivinity: new Decimal(0),
      totalCelMatter: new Decimal(0),
      totalDivineMatter: new Decimal(0),
      hasSeenDivineDims: false,
      realTimePlayed: TimeSpan.zero,
      timeSinceCreation: 0,
      uniqueNews: 0,
      totalNews: 0,
      secretAchievementCount: 0,
      infinity: {
        isUnlocked: false,
        count: new Decimal(0),
        banked: new Decimal(0),
        projectedBanked: new Decimal(0),
        bankRate: new Decimal(0),
        totalInfinityAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      eternity: {
        isUnlocked: false,
        count: new Decimal(0),
        totalEternityAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      reality: {
        isUnlocked: false,
        count: new Decimal(0),
        totalRealityAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        totalTimePlayed: TimeSpan.zero,
        bestRate: new Decimal(0),
        bestRarity: 0,
      },
      endgame: {
        isUnlocked: false,
        count: 0,
        totalEndgameAntimatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRateCP: new Decimal(0),
        bestRateDP: new Decimal(0),
      },
      celestialInfinity: {
        isUnlocked: false,
        count: new Decimal(0),
        totalCelestialInfinityCelMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      celestialEternity: {
        isUnlocked: false,
        count: new Decimal(0),
        totalCelestialEternityCelMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      divinity: {
        isUnlocked: false,
        count: 0
      },
      condense: {
        isUnlocked: false,
        count: new Decimal(0),
        totalCondenseDivineMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      supernova: {
        isUnlocked: false,
        count: new Decimal(0),
        totalSupernovaDivineMatter: new Decimal(0),
        hasBest: false,
        best: TimeSpan.zero,
        bestReal: TimeSpan.zero,
        this: TimeSpan.zero,
        thisReal: TimeSpan.zero,
        bestRate: new Decimal(0),
      },
      matterScale: [],
      lastMatterTime: 0,
      paperclips: 0,
      fullTimePlayed: 0,
    };
  },
  computed: {
    // These are here to avoid extra spaces in-game pre-reality and to get around codefactor 120-char limits in the
    // HTML template due to the fact that adding a linebreak also adds a space
    infinityCountString() {
      const num = this.infinity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次无限`
        : "未进行无限";
    },
    eternityCountString() {
      const num = this.eternity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次永恒`
        : "未进行永恒";
    },
    realityCountString() {
      const num = new Decimal(this.reality.count);
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次现实`
        : "未进行现实";
    },
    endgameCountString() {
      const num = new Decimal(this.endgame.count);
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次终局`
        : "未进行终局";
    },
    celestialInfinityCountString() {
      const num = this.celestialInfinity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次天神无限`
        : "未进行天神无限";
    },
    celestialEternityCountString() {
      const num = this.celestialEternity.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次天神永恒`
        : "未进行天神永恒";
    },
    divinityCountString() {
      const num = new Decimal(this.divinity.count);
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次神化`
        : "未进行神化";
    },
    condenseCountString() {
      const num = this.condense.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次凝聚`
        : "未进行凝聚";
    },
    supernovaCountString() {
      const num = this.supernova.count;
      return num.gt(0)
        ? `${this.formatDecimalAmount(num)} 次超新星`
        : "未进行超新星";
    },
    fullGameCompletions() {
      return player.records.fullGameCompletions;
    },
    startDate() {
      return Time.toDateTimeString(player.records.gameCreatedTime);
    },
    saveAge() {
      return TimeSpan.fromMilliseconds(new Decimal(this.timeSinceCreation));
    },
  },
  methods: {
    update() {
      const records = player.records;
      this.totalAntimatter.copyFrom(records.totalAntimatter);
      this.totalAntimatterOutsideDoom.copyFrom(player.records.totalAntimatterOutsideDoom);
      this.bestDoomedAntimatterThisDivinity.copyFrom(player.records.bestDoomedAntimatterThisDivinity);
      this.totalCelMatter.copyFrom(records.totalCelMatter);
      this.totalDivineMatter.copyFrom(records.totalDivineMatter);
      this.hasSeenDivineDims = DivinityMilestone.divineDimensions.isReached;
      this.realTimePlayed.setFrom(new Decimal(records.realTimePlayed));
      this.fullTimePlayed = TimeSpan.fromMilliseconds(
        new Decimal(records.previousRunRealTime + records.realTimePlayed));
      this.uniqueNews = NewsHandler.uniqueTickersSeen;
      this.totalNews = player.news.totalSeen;
      this.secretAchievementCount = SecretAchievements.all.filter(a => a.isUnlocked).length;
      this.timeSinceCreation = Date.now() - player.records.gameCreatedTime;

      const progress = PlayerProgress.current;
      const isInfinityUnlocked = progress.isInfinityUnlocked;
      const infinity = this.infinity;
      const bestInfinity = records.bestInfinity;
      infinity.isUnlocked = isInfinityUnlocked;
      if (isInfinityUnlocked) {
        infinity.count.copyFrom(Currency.infinities);
        infinity.banked.copyFrom(Currency.infinitiesBanked);
        infinity.projectedBanked = new Decimal(0).plusEffectsOf(
          Achievement(131).effects.bankedInfinitiesGain,
          TimeStudy(191).effects.bankedInfinitiesGain,
        );
        infinity.bankRate = infinity.projectedBanked.div(Decimal.clampMin(33, records.thisEternity.time)).times(60000);
        infinity.totalInfinityAntimatter.copyFrom(records.totalInfinityAntimatter);
        infinity.hasBest = bestInfinity.time.lt(999999999999);
        infinity.best.setFrom(bestInfinity.time);
        infinity.this.setFrom(records.thisInfinity.time);
        infinity.bestRate.copyFrom(bestInfinity.bestIPminEternity);
      }

      const isEternityUnlocked = progress.isEternityUnlocked;
      const eternity = this.eternity;
      const bestEternity = records.bestEternity;
      eternity.isUnlocked = isEternityUnlocked;
      if (isEternityUnlocked) {
        eternity.count.copyFrom(Currency.eternities);
        eternity.totalEternityAntimatter.copyFrom(records.totalEternityAntimatter);
        eternity.hasBest = bestEternity.time.lt(999999999999);
        eternity.best.setFrom(bestEternity.time);
        eternity.this.setFrom(records.thisEternity.time);
        eternity.bestRate.copyFrom(bestEternity.bestEPminReality);
      }

      const isRealityUnlocked = progress.isRealityUnlocked;
      const reality = this.reality;
      const bestReality = records.bestReality;
      reality.isUnlocked = isRealityUnlocked;

      if (isRealityUnlocked) {
        reality.count.copyFrom(Decimal.floor(Currency.realities.value));
        reality.totalRealityAntimatter.copyFrom(records.totalRealityAntimatter);
        reality.hasBest = bestReality.time.lt(999999999999);
        reality.best.setFrom(bestReality.time);
        reality.bestReal.setFrom(new Decimal(bestReality.realTime));
        reality.this.setFrom(records.thisReality.time);
        reality.totalTimePlayed.setFrom(records.totalTimePlayed);
        // Real time tracking is only a thing once reality is unlocked:
        infinity.thisReal.setFrom(new Decimal(records.thisInfinity.realTime));
        infinity.bankRate = infinity.projectedBanked.div(Math.clampMin(33, records.thisEternity.realTime)).times(60000);
        eternity.thisReal.setFrom(new Decimal(records.thisEternity.realTime));
        reality.thisReal.setFrom(new Decimal(records.thisReality.realTime));
        reality.bestRate.copyFrom(bestReality.RMmin);
        reality.bestRarity = Math.max(strengthToRarity(bestReality.glyphStrength), 0);
      }

      const isEndgameUnlocked = progress.isEndgameUnlocked;
      const endgame = this.endgame;
      const bestEndgame = records.bestEndgame;
      endgame.isUnlocked = isEndgameUnlocked;
      
      if (isEndgameUnlocked) {
        endgame.count = Math.floor(player.endgames);
        endgame.totalEndgameAntimatter.copyFrom(records.totalEndgameAntimatter);
        endgame.hasBest = bestEndgame.realTime < 999999999999;
        endgame.best.setFrom(bestEndgame.time);
        endgame.bestReal.setFrom(new Decimal(bestEndgame.realTime));
        endgame.this.setFrom(records.thisEndgame.time);
        endgame.thisReal.setFrom(new Decimal(records.thisEndgame.realTime));
        endgame.bestRateCP.copyFrom(bestEndgame.bestCPmin);
        endgame.bestRateDP.copyFrom(bestEndgame.bestDPmin);
      }

      const isCelestialInfinityUnlocked = progress.isCelestialInfinityUnlocked;
      const celestialInfinity = this.celestialInfinity;
      const bestCelestialInfinity = records.bestCelestialInfinity;
      celestialInfinity.isUnlocked = isCelestialInfinityUnlocked;
      if (isCelestialInfinityUnlocked) {
        celestialInfinity.count.copyFrom(Currency.celestialInfinities);
        celestialInfinity.totalCelestialInfinityCelMatter.copyFrom(records.totalCelestialInfinityCelMatter);
        celestialInfinity.hasBest = bestCelestialInfinity.realTime < 999999999999;
        celestialInfinity.best.setFrom(bestCelestialInfinity.time);
        celestialInfinity.bestReal.setFrom(new Decimal(bestCelestialInfinity.realTime));
        celestialInfinity.this.setFrom(records.thisCelestialInfinity.time);
        celestialInfinity.thisReal.setFrom(new Decimal(records.thisCelestialInfinity.realTime));
        celestialInfinity.bestRate.copyFrom(bestCelestialInfinity.bestCIPminCelestialEternity);
      }

      const isCelestialEternityUnlocked = progress.isCelestialEternityUnlocked;
      const celestialEternity = this.celestialEternity;
      const bestCelestialEternity = records.bestCelestialEternity;
      celestialEternity.isUnlocked = isCelestialEternityUnlocked;
      if (isCelestialEternityUnlocked) {
        celestialEternity.count.copyFrom(Currency.celestialEternities);
        celestialEternity.totalCelestialEternityCelMatter.copyFrom(records.totalCelestialEternityCelMatter);
        celestialEternity.hasBest = bestCelestialEternity.realTime < 999999999999;
        celestialEternity.best.setFrom(bestCelestialEternity.time);
        celestialEternity.bestReal.setFrom(new Decimal(bestCelestialEternity.realTime));
        celestialEternity.this.setFrom(records.thisCelestialEternity.time);
        celestialEternity.thisReal.setFrom(new Decimal(records.thisCelestialEternity.realTime));
        celestialEternity.bestRate.copyFrom(bestCelestialEternity.bestCEPminCelestialReality);
      }

      const isDivinityUnlocked = progress.isDivinityUnlocked;
      const divinity = this.divinity;
      divinity.isUnlocked = isDivinityUnlocked;
      if (isDivinityUnlocked) {
        divinity.count = Math.floor(player.celestials.pelle.divinities);
      }

      const isCondenseUnlocked = progress.isCondenseUnlocked;
      const condense = this.condense;
      const bestCondense = records.bestCondense;
      condense.isUnlocked = isCondenseUnlocked;
      if (isCondenseUnlocked) {
        condense.count.copyFrom(Currency.condenses);
        condense.totalCondenseDivineMatter.copyFrom(records.totalCondenseDivineMatter);
        condense.hasBest = bestCondense.realTime < 999999999999;
        condense.best.setFrom(bestCondense.time);
        condense.bestReal.setFrom(new Decimal(bestCondense.realTime));
        condense.this.setFrom(records.thisCondense.time);
        condense.thisReal.setFrom(new Decimal(records.thisCondense.realTime));
        condense.bestRate.copyFrom(bestCondense.bestVSminSupernova);
      }

      const isSupernovaUnlocked = progress.isSupernovaUnlocked;
      const supernova = this.supernova;
      const bestSupernova = records.bestSupernova;
      supernova.isUnlocked = isSupernovaUnlocked;
      if (isSupernovaUnlocked) {
        supernova.count.copyFrom(Currency.supernovae);
        supernova.totalSupernovaDivineMatter.copyFrom(records.totalSupernovaDivineMatter);
        supernova.hasBest = bestSupernova.realTime < 999999999999;
        supernova.best.setFrom(bestSupernova.time);
        supernova.bestReal.setFrom(new Decimal(bestSupernova.realTime));
        supernova.this.setFrom(records.thisSupernova.time);
        supernova.thisReal.setFrom(new Decimal(records.thisSupernova.realTime));
        supernova.bestRate.copyFrom(bestSupernova.bestNebminTotal);
      }
      this.updateMatterScale();

      this.isDoomed = Pelle.isDoomed;
      this.realTimeDoomed.setFrom(new Decimal(player.records.realTimeDoomed));
      this.paperclips = player.news.specialTickerData.paperclips;
    },
    formatDecimalAmount(value) {
      return value.gt(1e9) ? format(value, 3) : formatInt(Math.floor(value.toNumber()));
    },
    // Only updates once per second to reduce jitter
    updateMatterScale() {
      if (Date.now() - this.lastMatterTime > 1000) {
        this.matterScale = MatterScale.estimate(Currency.antimatter.value);
        this.lastMatterTime = Date.now();
      }
    },
    realityClassObject() {
      return {
        "c-stats-tab-title": true,
        "c-stats-tab-reality": !this.isDoomed,
        "c-stats-tab-doomed": this.isDoomed,
      };
    }
  },
};
</script>

<template>
  <div class="c-stats-tab">
    <div>
      <PrimaryButton onclick="Modal.catchup.show(0)">
        查看内容摘要
      </PrimaryButton>
      <div class="c-stats-tab-title c-stats-tab-general">
        总览
      </div>
      <div class="c-stats-tab-general">
        <div>你总共已产出 {{ format(totalAntimatter, 2, 1) }} 反物质。</div>
        <div v-if="divinity.isUnlocked">
          本次神化中，末日状态下已产出 {{ format(bestDoomedAntimatterThisDivinity, 2, 1) }} 反物质。
        </div>
        <div v-if="endgame.isUnlocked">
          在末日之外，你总共已产出 {{ format(totalAntimatterOutsideDoom, 2, 1) }} 反物质。
        </div>
        <div v-if="endgame.isUnlocked">
          本次终局中，你总共已产出 {{ format(endgame.totalEndgameAntimatter, 2, 1) }} 反物质。
        </div>
        <div v-if="reality.isUnlocked" :class="{ 'c-stats-tab-doomed' : isDoomed }">
          本次{{ isDoomed ? "末日" : "现实" }}中，你总共已产出 {{ format(reality.totalRealityAntimatter, 2, 1) }} 反物质。
        </div>
        <div v-if="eternity.isUnlocked">
          本次永恒中，你总共已产出 {{ format(eternity.totalEternityAntimatter, 2, 1) }} 反物质。
        </div>
        <div v-if="infinity.isUnlocked">
          本次无限中，你总共已产出 {{ format(infinity.totalInfinityAntimatter, 2, 1) }} 反物质。
        </div>
        <div v-if="endgame.isUnlocked" class="c-stats-tab-celestials">
          你总共已产出 {{ format(totalCelMatter, 2, 1) }} 天神物质。
        </div>
        <div v-if="celestialEternity.isUnlocked" class="c-stats-tab-celestials">
          本次天神永恒中，你总共已产出 {{ format(celestialEternity.totalCelestialEternityCelMatter, 2, 1) }} 天神物质。
        </div>
        <div v-if="celestialInfinity.isUnlocked" class="c-stats-tab-celestials">
          本次天神无限中，你总共已产出 {{ format(celestialInfinity.totalCelestialInfinityCelMatter, 2, 1) }} 天神物质。
        </div>
        <div v-if="hasSeenDivineDims" class="c-stats-tab-divinity">
          你总共已产出 {{ format(totalDivineMatter, 2, 1) }} 神圣物质。
        </div>
        <div v-if="supernova.isUnlocked" class="c-stats-tab-divinity">
          本次超新星中，你总共已产出 {{ format(supernova.totalSupernovaDivineMatter, 2, 1) }} 神圣物质。
        </div>
        <div v-if="condense.isUnlocked" class="c-stats-tab-divinity">
          本次凝聚中，你总共已产出 {{ format(condense.totalCondenseDivineMatter, 2, 1) }} 神圣物质。
        </div>
        <div>你已游玩 {{ realTimePlayed }}。（真实时间）</div>
        <div v-if="reality.isUnlocked">
          你的存在已跨越 {{ reality.totalTimePlayed }} 的时间。（游戏时间）
        </div>
        <div>
          你的存档创建于 {{ startDate }}（{{ saveAge }} 前）
        </div>
        <br>
        <div>
          你总共已查看 {{ quantifyHybridSmall("条新闻", totalNews) }}。
        </div>
        <div>
          你已查看 {{ quantifyInt("条独特新闻", uniqueNews) }}。
        </div>
        <div>
          你已解锁 {{ quantifyInt("个隐藏成就", secretAchievementCount) }}。
        </div>
        <div v-if="paperclips">
          你拥有 {{ quantifyInt("个无用回形针", paperclips) }}。
        </div>
        <div v-if="fullGameCompletions">
          <br>
          <b>
            你已通关整个游戏 {{ quantifyInt("次", fullGameCompletions) }}。
            <br>
            你在所有周目中总共已游玩 {{ fullTimePlayed }}。
          </b>
        </div>
      </div>
      <div>
        <br>
        <div class="c-matter-scale-container c-stats-tab-general">
          <div
            v-for="(line, i) in matterScale"
            :key="i"
          >
            {{ line }}
          </div>
          <br v-if="matterScale.length < 2">
          <br v-if="matterScale.length < 3">
        </div>
      </div>
      <br>
    </div>
    <div
      v-if="infinity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-infinity">
        无限
      </div>
      <div>
        你已进行 {{ infinityCountString }}<span v-if="eternity.isUnlocked">（本次永恒）</span>。
      </div>
      <div v-if="infinity.banked.gt(0)">
        你拥有 {{ formatDecimalAmount(infinity.banked.floor()) }}
        {{ pluralize("个已储存无限", infinity.banked.floor()) }}。
      </div>
      <div v-if="infinity.hasBest">
        你最快的一次无限用时 {{ infinity.best.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快无限记录<span v-if="eternity.isUnlocked">（本次永恒）</span>。
      </div>
      <div>
        你在本次无限中度过了 {{ infinity.this.toStringShort() }}。
        <span v-if="reality.isUnlocked">
          （{{ infinity.thisReal.toStringShort() }} 真实时间）
        </span>
      </div>
      <div>
        你每分钟最佳无限点数
        <span v-if="eternity.count.gt(0)">（本次永恒）</span>
        为 {{ format(infinity.bestRate, 2, 2) }}。
      </div>
      <br>
    </div>
    <div
      v-if="eternity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-eternity">
        永恒
      </div>
      <div>
        你已进行 {{ eternityCountString }}<span v-if="reality.isUnlocked">（本次
        <span :class="{ 'c-stats-tab-doomed' : isDoomed }">{{ isDoomed ? "末日" : "现实" }}</span>）</span>。
      </div>
      <div v-if="infinity.projectedBanked.gt(0)">
        永恒时将获得 {{ formatDecimalAmount(infinity.projectedBanked.floor()) }}
        {{ pluralize("个已储存无限", infinity.projectedBanked.floor()) }}
        （每分钟 {{ formatDecimalAmount(infinity.bankRate) }}）。
      </div>
      <div v-else-if="infinity.banked.gt(0)">
        永恒时不会获得已储存无限。
      </div>
      <div v-if="eternity.hasBest">
        你最快的一次永恒用时 {{ eternity.best.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快永恒记录<span v-if="reality.isUnlocked">（本次
        <span :class="{ 'c-stats-tab-doomed' : isDoomed }">{{ isDoomed ? "末日" : "现实" }}</span>）</span>。
      </div>
      <div>
        你在本次永恒中度过了 {{ eternity.this.toStringShort() }}。
        <span v-if="reality.isUnlocked">
          （{{ eternity.thisReal.toStringShort() }} 真实时间）
        </span>
      </div>
      <div>
        你每分钟最佳永恒点数
        <span v-if="reality.isUnlocked">（本次
        <span :class="{ 'c-stats-tab-doomed' : isDoomed }">{{ isDoomed ? "末日" : "现实" }}</span>
        ）</span>
        为 {{ format(eternity.bestRate, 2, 2) }}。
      </div>
      <br>
    </div>
    <div
      v-if="reality.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div :class="realityClassObject()">
        {{ isDoomed ? "末日现实" : "现实" }}
      </div>
      <div>
        你已进行 {{ realityCountString }}<span v-if="endgame.isUnlocked">（本次终局）</span>。
      </div>
      <div v-if="reality.hasBest">
        你最快的游戏时间现实用时 {{ reality.best.toStringShort() }}。
        你最快的真实时间现实用时 {{ reality.bestReal.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快现实记录<span v-if="endgame.isUnlocked">（本次终局）</span>。
      </div>
      <div :class="{ 'c-stats-tab-doomed' : isDoomed }">
        你在本次{{ isDoomed ? "末日" : "现实" }}中度过了
        {{ reality.this.toStringShort() }}。
        （{{ reality.thisReal.toStringShort() }} 真实时间）
      </div>
      <div
        v-if="isDoomed"
        class="c-stats-tab-doomed"
      >
        你处于末日状态已 {{ realTimeDoomed.toStringShort() }}（真实时间）。
      </div>
      <div>
        你每分钟最佳现实机器
        <span v-if="endgame.isUnlocked">（本次终局）</span>
        为 {{ format(reality.bestRate, 2, 2) }}。
      </div>
      <div>
        你最佳的符文稀有度
        <span v-if="endgame.isUnlocked">（本次终局）</span>
        为 {{ formatRarity(reality.bestRarity) }}。</div>
      <br>
    </div>
    <div
      v-if="endgame.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-endgame">
        终局
      </div>
      <div>
        你已进行 {{ endgameCountString }}。
      </div>
      <div v-if="endgame.hasBest">
        你最快的游戏时间终局用时 {{ endgame.best.toStringShort() }}。
        你最快的真实时间终局用时 {{ endgame.bestReal.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快终局记录。
      </div>
      <div>
        你在本次终局中度过了
        {{ endgame.this.toStringShort() }}。
        （{{ endgame.thisReal.toStringShort() }} 真实时间）
      </div>
      <div>
        你每分钟最佳天神点
        为 {{ format(endgame.bestRateCP, 2, 2) }}。
      </div>
      <div>
        你每分钟最佳末日遗物
        为 {{ format(endgame.bestRateDP, 2, 2) }}。
      </div>
      <br>
    </div>
    <div
      v-if="celestialInfinity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-celestial-infinity">
        天神无限
      </div>
      <div>
        你已进行 {{ celestialInfinityCountString }}<span v-if="celestialEternity.isUnlocked">（本次天神永恒）</span>。
      </div>
      <div v-if="celestialInfinity.hasBest">
        你最快的游戏时间天神无限用时 {{ celestialInfinity.best.toStringShort() }}。
        你最快的真实时间天神无限用时 {{ celestialInfinity.bestReal.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快天神无限记录<span v-if="celestialEternity.isUnlocked">（本次天神永恒）</span>。
      </div>
      <div>
        你在本次天神无限中度过了 {{ celestialInfinity.this.toStringShort() }}。
        （{{ celestialInfinity.thisReal.toStringShort() }} 真实时间）
      </div>
      <div>
        你每分钟最佳天神点数<span v-if="celestialEternity.isUnlocked">（本次天神永恒）</span>
        为 {{ format(celestialInfinity.bestRate, 2, 2) }}。
      </div>
      <br>
    </div>
    <div
      v-if="celestialEternity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-celestial-eternity">
        天神永恒
      </div>
      <div>
        你已进行 {{ celestialEternityCountString }}。
      </div>
      <div v-if="celestialEternity.hasBest">
        你最快的游戏时间天神永恒用时 {{ celestialEternity.best.toStringShort() }}。
        你最快的真实时间天神永恒用时 {{ celestialEternity.bestReal.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快天神永恒记录。
      </div>
      <div>
        你在本次天神永恒中度过了 {{ celestialEternity.this.toStringShort() }}。
        （{{ celestialEternity.thisReal.toStringShort() }} 真实时间）
      </div>
      <div>
        你每分钟最佳天神永恒点数
        为 {{ format(celestialEternity.bestRate, 2, 2) }}。
      </div>
      <br>
    </div>
    <div
      v-if="divinity.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-divinity">
        神化
      </div>
      <div>
        你已进行 {{ divinityCountString }}。
      </div>
      <br>
    </div>
    <div
      v-if="condense.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-condense">
        凝聚
      </div>
      <div>
        你已进行 {{ condenseCountString }}<span v-if="supernova.isUnlocked">（本次超新星）</span>。
      </div>
      <div v-if="condense.hasBest">
        你最快的游戏时间凝聚用时 {{ condense.best.toStringShort() }}。
        你最快的真实时间凝聚用时 {{ condense.bestReal.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快凝聚记录<span v-if="supernova.isUnlocked">（本次超新星）</span>。
      </div>
      <div>
        你在本次凝聚中度过了 {{ condense.this.toStringShort() }}。
        （{{ condense.thisReal.toStringShort() }} 真实时间）
      </div>
      <div>
        你每分钟最佳神圣之星<span v-if="supernova.isUnlocked">（本次超新星）</span>
        为 {{ format(condense.bestRate, 2, 2) }}。
      </div>
      <br>
    </div>
    <div
      v-if="supernova.isUnlocked"
      class="c-stats-tab-subheader c-stats-tab-general"
    >
      <div class="c-stats-tab-title c-stats-tab-supernova">
        超新星
      </div>
      <div>
        你已进行 {{ supernovaCountString }}。
      </div>
      <div v-if="supernova.hasBest">
        你最快的游戏时间超新星用时 {{ supernova.best.toStringShort() }}。
        你最快的真实时间超新星用时 {{ supernova.bestReal.toStringShort() }}。
      </div>
      <div v-else>
        你没有最快超新星记录。
      </div>
      <div>
        你在本次超新星中度过了 {{ supernova.this.toStringShort() }}。
        （{{ supernova.thisReal.toStringShort() }} 真实时间）
      </div>
      <div>
        你每分钟最佳星云
        为 {{ format(supernova.bestRate, 2, 2) }}。
      </div>
      <br>
    </div>
  </div>
</template>

<style scoped>
.c-matter-scale-container {
  height: 5rem;
}

.c-stats-tab-general {
  color: var(--color-text);
}

.c-stats-tab-title {
  font-size: 2rem;
  font-weight: bold;
}

.c-stats-tab-subheader {
  height: 15rem;
}

.c-stats-tab-infinity {
  color: var(--color-infinity);
}

.c-stats-tab-eternity {
  color: var(--color-eternity);
}

.c-stats-tab-reality {
  color: var(--color-reality);
}

.c-stats-tab-doomed {
  color: var(--color-pelle--base);
}

.c-stats-tab-endgame {
  color: var(--color-endgame);
}

.c-stats-tab-celestials {
  color: var(--color-celestials);
}

.c-stats-tab-celestial-infinity {
  background: linear-gradient(var(--color-infinity), var(--color-celestials));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-stats-tab-celestial-eternity {
  background: linear-gradient(var(--color-eternity), var(--color-celestials));
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-stats-tab-divinity {
  color: var(--color-pelle--base);
}

.c-stats-tab-condense {
  background: linear-gradient(red, yellow, cyan);
  background-clip: text;

  -webkit-text-fill-color: transparent;
}

.c-stats-tab-supernova {
  background: linear-gradient(cyan, blue, indigo, purple);
  background-clip: text;

  -webkit-text-fill-color: transparent;
}
</style>
