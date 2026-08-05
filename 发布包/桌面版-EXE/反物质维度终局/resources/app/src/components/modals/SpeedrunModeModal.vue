<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "SpeedrunModeModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
  },
  data() {
    return {
      onInfoPage: true,
      name: "",
      confirmPhrase: "",
    };
  },
  computed: {
    willStartRun() {
      return this.confirmPhrase === "Gotta Go Fast!";
    },
  },
  methods: {
    nextPage() {
      this.onInfoPage = false;
    },
    startRun() {
      if (!this.willStartRun) return;
      this.emitClose();
      Speedrun.prepareSave(Speedrun.generateName(this.name));
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!onInfoPage && !willStartRun"
    :show-confirm="!onInfoPage && willStartRun"
    confirm-class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
    @confirm="startRun"
  >
    <template #header>
      进入速通模式
    </template>
    <div
      v-if="onInfoPage"
      class="c-modal-message__text"
    >
      此举将开启一个附带额外统计追踪的存档,记录您抵达游戏中各个节点的时刻。
      这些统计将显示于屏幕右下角及统计标签页下的专属子标签中。
      <br>
      <br>
      几乎所有动画与确认提示默认关闭,但您可在抵达其所需进度前调整这些设置。
      当您开启速通时,游戏将持续暂停直至您的反物质发生变化,以便您在正式开始前完成所有配置。
      为免优化速通需久候方能真正开始,部分成就将自动奉上。
      <br>
      <br>
      <i>
        速通模式并无额外内容。
      </i>
      <br>
      <br>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
        @click="nextPage"
      >
        继续
      </PrimaryButton>
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      您可在下方输入文字以为您的速通存档命名。此名对游戏玩法并无影响,仅用于标识此存档归属于您。
      若未命名,将随机生成一个名称。此名称可在计时器尚未开始前,通过点击速通信息框中您的名字来更改。
      <input
        ref="name"
        v-model="name"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
      <br>
      <br>
      速通存档可如普通存档般导入导出。导入速通存档将标记其为分段速通,因导入导出可对游戏的各分段进行优化。
      不导入则存档将保持为单段速通。
      <br>
      <br>
      若您愿意,可在开启速通前于选项标签页中修改符文 RNG 种子。
      <br>
      <br>
      <div class="c-modal-hard-reset-danger">
        开启速通将把您的存档重置至游戏开局。部分内容将予以保留,如完整游戏通关统计、视觉设置、
        自动化脚本与符文外观,但除此之外将如同您刚刚通关整个游戏并选择在制作人员画面重启一般。
        请在下方输入 "Gotta Go Fast!" 以确认并(重新)开始速通。
      </div>
      <input
        ref="confirmPhrase"
        v-model="confirmPhrase"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
    </div>
    <template #confirm>
      开始速通!
    </template>
    <template #cancel>
      取消
    </template>
  </ModalWrapperChoice>
</template>
