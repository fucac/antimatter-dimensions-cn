<script>
import InformationModalButton from "@/components/modals/InformationModalButton";
import ModalCloseButton from "@/components/modals/ModalCloseButton";

export default {
  name: "InformationModal",
  components: {
    ModalCloseButton,
    InformationModalButton
  },
};
</script>

<template>
  <div class="l-information-modal c-information-modal">
    <ModalCloseButton @click="emitClose" />
    <div class="l-h2p-header">
      <div class="c-h2p-title">
        关于本作
      </div>
    </div>
    <div class="c-info-body">
      《反物质维度》乃一款放置增量游戏,由芬兰开发者 Hevipelle 所创。其于 2016 年初为个人独立之作,
      其后由一支庞大的开发者与测试者团队持续扩充完善。2024 年,美国开发者 Supersonic Seven 通关了原版游戏,
      遂决定为其制作模组,以增添更多内容与更为完善的世界观。
      《反物质维度:终局》之首个公开版本由 Supersonic Seven 于 2025 年发布,此后每逢可行之时便持续更新游戏。
      <br>
      <br>
      本作玩法层层递进,设有多重转生层级。"如何游玩"按钮内含关于进度推进之有用信息。
    </div>
    <div class="l-socials">
      <InformationModalButton
        name="GitHub 仓库"
        icon="fa-brands fa-github"
        link="https://github.com/IvarK/AntimatterDimensionsSourceCode"
      />
      <InformationModalButton
        name="终局仓库"
        icon="fa-brands fa-github"
        link="https://github.com/Supersonic-Seven/AntimatterDimensionsEndgameUpdate"
      />
      <InformationModalButton
        name="r/AntimatterDimensions"
        icon="fa-brands fa-reddit-alien"
        link="https://www.reddit.com/r/AntimatterDimensions/"
      />
      <InformationModalButton
        name="r/EndgameAntimatterDims"
        icon="fa-brands fa-reddit-alien"
        link="https://www.reddit.com/r/EndgameAntimatterDims/"
      />
      <InformationModalButton
        name="反物质维度 Discord 服务器"
        icon="fa-brands fa-discord"
        link="https://discord.gg/ST9NaXa"
      />
      <InformationModalButton
        name="反物质维度:终局 Discord 服务器"
        icon="fa-brands fa-discord"
        link="https://discord.gg/yuxrGFcJXc"
      />
      <InformationModalButton
        name="Google Play 上的反物质维度"
        icon="fa-brands fa-google-play"
        link="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions"
      />
      <InformationModalButton
        name="Steam 上的反物质维度"
        icon="fa-brands fa-steam"
        link="https://store.steampowered.com/app/1399720/Antimatter_Dimensions/"
      />
      <InformationModalButton
        name="制作人员"
        icon="fa-solid fa-users"
        show-modal="credits"
      />
      <InformationModalButton
        name="游戏更新日志"
        icon="fa-solid fa-file-lines"
        show-modal="changelog"
      />
    </div>
  </div>
</template>

<style scoped>
.l-information-modal {
  display: flex;
  flex-direction: column;
  /* stylelint-disable-next-line unit-allowed-list */
  width: calc(100vw - 50vh);
  justify-content: space-around;
}

.c-information-modal {
  margin: 0.5rem;
}

.c-info-body {
  text-align: left;
  font-size: 2rem;
  margin: 1rem;
  padding: 0.5rem;
}

.t-s12 .c-info-body {
  font-size: 1.3rem;
  margin: 0;
}

.l-socials {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 7.5rem;
}

.t-s12 .l-socials {
  width: 100%;
  align-self: center;
}
</style>
