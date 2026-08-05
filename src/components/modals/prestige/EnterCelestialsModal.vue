<script>
import EnterCelestialsRaPet from "@/components/modals/prestige/EnterCelestialsRaPet";
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "EnterCelestialsModal",
  components: {
    ModalWrapperChoice,
    EnterCelestialsRaPet,
  },
  props: {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      laitelaFastest: 3600,
      teresaBestAM: new Decimal(),
      teresaRunMult: new Decimal(0),
      effarigDone: false,
      effarigLayer: "",
      enslavedDone: false,
      laitelaTime: "",
      alphaStage: 0,
      alphaReq: "",
    };
  },
  computed: {
    effects() {
      return GameDatabase.celestials.descriptions[this.number].effects().split("\n");
    },
    description() {
      const description = GameDatabase.celestials.descriptions[this.number].description;
      return description ? description() : "";
    },
    topLabel() {
      return `${this.name}的现实`;
    },
    message() {
      return `进行现实重置并进入${this.name}的现实，其中：`;
    },
    formatStageNum() {
      const a = this.alphaStage + 1;
      return `${a}`;
    },
    extraLine() {
      switch (this.number) {
        case 0:
          return this.teresaBestAM.eq(1)
            ? `你尚未解锁Teresa现实的奖励。解锁奖励需要
              购买现实研究并首次完成该现实。`
            : `你最高的Teresa完成度为${format(this.teresaBestAM, 2, 2)}反物质，
              使你获得${formatX(this.teresaRunMult, 2)}的符文献祭力量倍率。`;
        case 1: return this.effarigDone
          ? "鹿颈长已完成！"
          : `你目前处于${this.effarigLayer}层。`;
        case 2: return this.enslavedDone
          ? "我们……难道……帮助得还不够……"
          : "我们……能帮忙……让我们……相助……";
        case 3: return "";
        case 4: return `在Ra的现实之中，某些资源将基于其数量
          为天神记忆生成记忆碎片：`;
        case 5: return this.laitelaFastest >= 300
          ? "你尚未在此阶层完成莱特拉。"
          : `你在此阶层最快的完成时间为${this.laitelaTime}。`;
        case 6: return "";
        case 7: return `你目前处于Alpha现实的第${this.formatStageNum}阶段。
          你当前的目标是${this.alphaReq}。`;
        default: throw new Error(`Attempted to start an Unknown Celestial in Celestial Modal Confirmation.`);
      }
    }
  },
  methods: {
    update() {
      this.teresaBestAM.copyFrom(player.celestials.teresa.bestRunAM);
      this.teresaRunMult.copyFrom(Teresa.runRewardMultiplier);
      const effarigStage = Effarig.currentStage;
      this.effarigDone = effarigStage === EFFARIG_STAGES.COMPLETED;
      this.effarigLayer = [null, "无限", "永恒", "现实", "终局"][effarigStage];
      this.enslavedDone = Enslaved.isCompleted;
      this.laitelaFastest = player.celestials.laitela.fastestCompletion;
      this.laitelaTime = TimeSpan.fromSeconds(new Decimal(this.laitelaFastest)).toStringShort();
      this.alphaStage = Alpha.currentStage;
      this.alphaReq = Alpha.currentStageName;
    },
    handleYesClick() {
      beginProcessReality(getRealityProps(true));
      switch (this.number) {
        case 0: return Teresa.initializeRun();
        case 1: return Effarig.initializeRun();
        case 2: return Enslaved.initializeRun();
        case 3: return V.initializeRun();
        case 4: return Ra.initializeRun();
        case 5: return Laitela.initializeRun();
        case 6: throw new Error(`Attempted to start Pelle through EnterCelestialsModal instead of ArmageddonModal`);
        case 7: return Alpha.initializeRun();
        default: throw new Error(`Attempted to start an Unknown Celestial in Celestial Modal Confirmation.`);
      }
    },
  },
};
</script>

<template>
  <ModalWrapperChoice @confirm="handleYesClick">
    <template #header>
      {{ topLabel }}
    </template>
    <div class="c-modal-message__text" :class="{ 'l-alpha-text': number === 7 }">
      {{ message }}
      <br>
      <br>
      <div class="c-modal-celestial__run-effects">
        <div
          v-for="(effect, i) in effects"
          :key="i"
          class="c-modal-celestial__run-effects__line"
        >
          <b v-if="effect.trim()">&bull;</b>
          <b>&nbsp;</b>
          {{ effect }}
        </div>
      </div>
      <div
        v-if="description"
        class="reality-description"
      >
        <br><br>
        {{ description }}
      </div>
      <br><br>
      <div>
        {{ extraLine }}
      </div>
      <span v-if="number === 4">
        <EnterCelestialsRaPet
          v-for="id in 4"
          :key="id"
          :pet-id="id - 1"
        />
      </span>
    </div>
    <template #confirm-text>
      开始
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-modal-celestial__run-effects {
  display: inline-block;
  max-width: 45rem;
  text-align: left;
}
.c-modal-celestial__run-effects__line {
  display: flex;
  margin-bottom: 0.5rem;
}

.reality-description {
  padding: 0 2rem;
}

.l-alpha-text {
  font-size: 1.2rem;
}
</style>
