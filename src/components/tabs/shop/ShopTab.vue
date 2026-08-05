<script>
import "vue-loading-overlay/dist/vue-loading.css";

import Loading from "vue-loading-overlay";

import Payments from "@/core/payments";

import { STEAM } from "@/env";
import { SteamRuntime } from "@/steam";

import PrimaryButton from "@/components/PrimaryButton";
import ShopButton from "./ShopButton";

export default {
  name: "ShopTab",
  components: {
    ShopButton,
    Loading,
    PrimaryButton,
  },
  data() {
    return {
      availableSTD: 0,
      spentSTD: 0,
      isLoading: false,
      IAPsEnabled: false,
      creditsClosed: false,
      loggedIn: false,
      username: "",
      canRespec: false,
      respecTimeStr: "",
    };
  },
  computed: {
    STEAM() {
      return STEAM;
    },
    purchases() {
      return ShopPurchase.all;
    },
    enableText() {
      return `应用内购买：${this.IAPsEnabled ? "已启用" : "已禁用"}`;
    },
    respecText() {
      if (!this.loggedIn) return "未登录！";
      if (!this.canRespec) return "无可用的重置！（购买 STD 或自上次重置后等待 3 天）";
      return null;
    },
    hiddenName() {
      return player.options.hideGoogleName;
    }
  },
  methods: {
    update() {
      this.availableSTD = ShopPurchaseData.availableSTD;
      this.spentSTD = ShopPurchaseData.spentSTD;
      this.isLoading = Boolean(player.IAP.checkoutSession.id);
      this.IAPsEnabled = player.IAP.enabled;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.loggedIn = Cloud.loggedIn;
      this.username = Cloud.user?.displayName;
      this.canRespec = ShopPurchaseData.canRespec;
      if (!ShopPurchaseData.respecAvailable && !this.canRespec) {
        this.respecTimeStr = ShopPurchaseData.timeUntilRespec.toStringShort();
      }
    },
    showStore() {
      if (STEAM && !SteamRuntime.isActive) return;
      if (this.creditsClosed) return;
      SecretAchievement(33).unlock();
      if (this.loggedIn) Modal.shop.show();
      else Modal.message.show("你需要先登录才能购买 STD 代币。");
    },
    onCancel() {
      Payments.cancelPurchase(false);
    },
    respec() {
      if (this.creditsClosed || !this.loggedIn || !this.canRespec) return;
      ShopPurchaseData.respecRequest();
    },
    toggleEnable() {
      if (ShopPurchaseData.availableSTD < 0) return;
      player.IAP.enabled = !player.IAP.enabled;
      if (ShopPurchaseData.isIAPEnabled) Speedrun.setSTDUse(true);
    },
    respecClass() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-pelle-disabled-pointer": this.creditsClosed,
        "o-primary-btn--disabled": !this.loggedIn || !this.canRespec
      };
    }
  },
};
</script>

<template>
  <div class="tab shop">
    <div class="c-shop-disclaimer">
      声明：这些并非游戏进度的必需品，仅用于支持开发者。
      游戏在不使用任何微交易的情况下也已平衡。
    </div>
    <div>
      注意：在 Android、Steam 和网页版上进行的商店购买是
      独立的，因法律原因不可互通。
    </div>
    <div class="c-subtab-option-container">
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        label="禁用应用内购买："
        @click="toggleEnable()"
      >
        {{ enableText }}
      </PrimaryButton>
      <PrimaryButton
        v-if="!STEAM"
        v-tooltip="respecText"
        :class="respecClass()"
        @click="respec()"
      >
        重置商店
      </PrimaryButton>
    </div>
    <div v-if="loggedIn && !canRespec && !STEAM">
      重置可用前剩余时间：{{ respecTimeStr }}
    </div>
    <div
      v-if="loggedIn"
      class="c-login-info"
    >
      <template v-if="STEAM">
        你已登录为 {{ username }}。
      </template>
      <template v-else>
        <span v-if="hiddenName">你已登录。 <i>（名称已隐藏）</i></span>
        <span v-else>你已登录为 {{ username }}。</span>
        <button
          class="o-shop-button-button"
          onclick="GameOptions.logout()"
        >
          断开 Google 账号
        </button>
      </template>
    </div>
    <div
      v-else
      class="c-login-info"
    >
      你必须登录才能购买 STD 代币或使用这些升级。
      <button
        class="o-shop-button-button"
        onclick="GameOptions.login()"
      >
        使用 Google 登录
      </button>
    </div>
    <div class="c-shop-header">
      <span>你拥有 {{ availableSTD }}</span>
      <img
        src="images/std_coin.png"
        class="c-shop-header__img"
      >
      <button
        class="o-shop-button-button"
        :class="{ 'o-shop-button-button--disabled': !loggedIn }"
        @click="showStore()"
      >
        购买更多
      </button>
    </div>
    注意：本页所有数字有意不受你的记数法设置影响
    <div class="l-shop-buttons-container">
      <ShopButton
        v-for="purchase in purchases"
        :key="purchase.key"
        :purchase="purchase"
      />
    </div>
    <loading
      :active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="true"
    />
  </div>
</template>

<style scoped>
.shop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
}

.c-shop-disclaimer {
  width: 80%;
  max-width: 100rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  background: var(--color-bad);
  border: var(--var-border-width, 0.2rem) solid black;
  border-radius: var(--var-border-radius, 1rem);
  margin-top: 0.8rem;
}

.t-s1 .c-shop-disclaimer,
.t-s6 .c-shop-disclaimer,
.t-s10 .c-shop-disclaimer {
  color: var(--color-bad);
  background: black;
  border-color: var(--color-bad);
}

.c-login-info {
  font-size: 1.5rem;
}

.c-shop-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin: 1rem 0;
}

.c-shop-header__img {
  height: 40px;
  margin: 0 1rem;
}

.o-shop-button-button {
  display: flex;
  align-items: center;
  font-family: Typewriter;
  background: turquoise;
  border: none;
  border-radius: var(--var-border-radius, 0.5rem);
  margin: auto;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

.o-shop-button-button--disabled {
  background: rgb(150, 150, 150);
  cursor: default;
}

.l-shop-buttons-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 93rem;
  margin: auto;
}

.c-shop-header .o-shop-button-button {
  margin: 0;
}
</style>
