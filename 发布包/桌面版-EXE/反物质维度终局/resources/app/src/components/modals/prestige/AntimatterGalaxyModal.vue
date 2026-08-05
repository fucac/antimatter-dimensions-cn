<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "AntimatterGalaxyModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    bulk: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      newGalaxies: new Decimal(0),
      keepAntimatter: false,
      perkANRBought: false,
      keepDimBoost: false
    };
  },
  computed: {
    topLabel() {
      if (this.bulk) return `你即将购买${quantifyInt("反物质星系", this.newGalaxies)}`;
      return `你即将购买一个反物质星系`;
    },
    message() {
      const resetResouces = [];
      if (Pelle.isDoomed) resetResouces.push("反物质", "反物质维度", "Tickspeed");
      if (!this.perkANRBought) resetResouces.push("反物质维度", "Tickspeed");
      if (!this.keepDimBoost) resetResouces.push("维度提升");
      if (!this.keepAntimatter && !this.perkANRBought) resetResouces.push("反物质");
      const resetList = makeEnumeration(resetResouces);
      let tickspeedFixed = "";
      if (InfinityChallenge(3).isRunning) {
        tickspeedFixed = `无限挑战 ${InfinityChallenge(3).id}`;
      } else if (Ra.isRunning) {
        tickspeedFixed = `${Ra.displayName}的现实`;
      }
      const tickspeedInfo = (tickspeedFixed === "")
        ? "你将获得 Tickspeed 升级的小幅加成。"
        : `你将无法获得 Tickspeed 升级的加成，因为你正处于${tickspeedFixed}。`;
      const message = (resetList === "")
        ? `这不会重置任何事物，且${tickspeedInfo}`
        : `这将重置你的${resetList}。然而，${tickspeedInfo}`;

      if (this.bulk) return `你确定要购买
      ${quantifyInt("反物质星系", this.newGalaxies)}吗？${message}`;
      return `你确定要购买一个反物质星系吗？${message}`;
    }
  },
  created() {
    this.on$(GAME_EVENT.DIMBOOST_AFTER, () =>
      (BreakInfinityUpgrade.autobuyMaxDimboosts.isBought ? undefined : this.emitClose()));
  },
  methods: {
    update() {
      if (this.bulk) {
        const req = Galaxy.requirement;
        const dim = AntimatterDimension(req.tier);
        const bulk = Galaxy.buyableGalaxies(Decimal.round(dim.totalAmount.toNumber())).gt(player.galaxies);
        if (bulk) {
          this.newGalaxies = Galaxy.buyableGalaxies(Decimal.round(dim.totalAmount.toNumber())).sub(player.galaxies);
        }
      }
      this.keepAntimatter = Achievement(111).isUnlocked && (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 12) ||
        (LHC.voidRunning && NullUpgrade.limerick1.isBought));
      this.perkANRBought = (Perk.antimatterNoReset.canBeApplied &&
        (!player.disablePostReality || (LHC.voidRunning && player.endgame.largeHadronCollider.void.nullified)));
      this.keepDimBoost = ((Achievement(143).isUnlocked && (!Pelle.isDoomed || PelleAchievementUpgrade.achievement143.canBeApplied)) ||
        PelleUpgrade.galaxyNoResetDimboost.canBeApplied) && (!player.disablePostReality || (Alpha.isRunning && Alpha.currentStage >= 20) ||
        (LHC.voidRunning && NullUpgrade.limerick2.isBought));
    },
    handleYesClick() {
      requestGalaxyReset(this.bulk);
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="antimatterGalaxy"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ topLabel }}
    </template>

    <div class="c-modal-message__text">
      {{ message }}
    </div>
  </ModalWrapperChoice>
</template>
