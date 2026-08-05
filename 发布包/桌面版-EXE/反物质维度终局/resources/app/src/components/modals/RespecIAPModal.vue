<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "RespecIAPModal",
  components: {
    ModalWrapperChoice
  },
  methods: {
    returnedSTDCount() {
      let std = 0;
      for (const purchase of ShopPurchase.all) {
        if (purchase.config.instantPurchase) continue;
        std += purchase.purchases * purchase.cost;
      }
      return std;
    },
    handleYesClick() {
      ShopPurchaseData.respecAll();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="respecIAP"
    @confirm="handleYesClick"
  >
    <template #header>
      您即将重置商店购买项
    </template>
    <div class="c-modal-message__text">
      您确定要重置商店购买项吗？此操作不消耗任何资源，并将返还您在所有提供永久倍数加成的购买项上所花费的
      {{ returnedSTDCount() }}
      <img
        src="images/std_coin.png"
        class="o-shop-button-button__img"
      >。
      <br>
      <br>
      用于离线进度和符文外观的任何花费都不会被退款。符文外观套装是永久性的，
      一旦购买就不会丢失，也无法重置。
      <br>
      <br>
      <b class="o-warning">除非您购买更多 STD 代币，否则您将无法再次重置。</b>
    </div>
  </ModalWrapperChoice>
</template>

<style scoped>
.c-modal-message__text {
  vertical-align: middle;
}

.o-shop-button-button__img {
  height: 2.5rem;
  vertical-align: middle;
}

.o-warning {
  color: var(--color-infinity);
}
</style>
