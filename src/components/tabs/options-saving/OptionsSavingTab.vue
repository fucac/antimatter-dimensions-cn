<script>
import AutosaveIntervalSlider from "./AutosaveIntervalSlider";
import OpenModalHotkeysButton from "@/components/OpenModalHotkeysButton";
import OptionsButton from "@/components/OptionsButton";
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import SaveFileName from "./SaveFileName";

import { STEAM } from "@/env";

export default {
  name: "OptionsSavingTab",
  components: {
    AutosaveIntervalSlider,
    OpenModalHotkeysButton,
    OptionsButton,
    PrimaryToggleButton,
    SaveFileName
  },
  data() {
    return {
      time: 0,
      lastExportTime: 0,
      hasExportedToday: false,
      cloudAvailable: false,
      cloudEnabled: false,
      forceCloudOverwrite: false,
      showCloudModal: false,
      syncSaveIntervals: false,
      showTimeSinceSave: false,
      hideGoogleName: false,
      loggedIn: false,
      userName: "",
      canSpeedrun: false,
      inSpeedrun: false,
      creditsClosed: false,
      canModifySeed: false,
    };
  },
  computed: {
    modalTooltip() {
      return `游戏会检测某些你可能不希望覆盖云端存档的情况，若此项开启，将显示一个包含更多信息的弹窗。`;
    },
    overwriteTooltip() {
      if (this.showCloudModal) return "由于弹窗正在显示，此设置暂无作用。";
      return this.forceCloudOverwrite
        ? `无论何种情况，你的本地存档都将覆盖云端存档。`
        : `存档冲突将阻止你的本地存档被保存至云端。`;
    },
    STEAM() {
      return STEAM;
    }
  },
  watch: {
    cloudEnabled(newValue) {
      player.options.cloudEnabled = newValue;
    },
    forceCloudOverwrite(newValue) {
      player.options.forceCloudOverwrite = newValue;
    },
    showCloudModal(newValue) {
      player.options.showCloudModal = newValue;
    },
    syncSaveIntervals(newValue) {
      player.options.syncSaveIntervals = newValue;
    },
    showTimeSinceSave(newValue) {
      player.options.showTimeSinceSave = newValue;
    },
    hideGoogleName(newValue) {
      player.options.hideGoogleName = newValue;
    }
  },
  methods: {
    update() {
      const options = player.options;
      this.time = Date.now();
      this.lastExportTime = player.lastExportTime;
      this.hasExportedToday = Math.floor(this.time / 86400000) <= Math.floor(this.lastExportTime / 86400000);
      this.cloudAvailable = Cloud.isAvailable;
      this.cloudEnabled = options.cloudEnabled;
      this.forceCloudOverwrite = options.forceCloudOverwrite;
      this.showCloudModal = options.showCloudModal;
      this.syncSaveIntervals = options.syncSaveIntervals;
      this.showTimeSinceSave = options.showTimeSinceSave;
      this.hideGoogleName = options.hideGoogleName;
      this.loggedIn = Cloud.loggedIn;
      this.canSpeedrun = player.speedrun.isUnlocked;
      this.inSpeedrun = player.speedrun.isActive;
      this.canModifySeed = Speedrun.canModifySeed();
      this.creditsClosed = GameEnd.creditsEverClosed;
      if (!this.loggedIn) return;
      this.userName = Cloud.user.displayName;
    },
    importAsFile(event) {
      // This happens if the file dialog is canceled instead of a file being selected
      if (event.target.files.length === 0) return;

      const reader = new FileReader();
      reader.onload = function() {
        // File importing behavior should use the behavior on the existing and to-be-overwritten save instead of the
        // settings in the to-be-imported save. This is largely because the former is more easily edited by the player,
        // and in contrast with the import-as-string case which allows the player to choose.
        // Note: Do not move this into GameStorage.import, as this would cause the offline progress choice in the text
        // import modal (the only other place GameStorage.import is called) to always be overridden
        GameStorage.offlineEnabled = player.options.offlineProgress;
        GameStorage.offlineTicks = player.options.offlineTicks;
        GameStorage.import(reader.result);
      };
      reader.readAsText(event.target.files[0]);
    },
    openSeedModal() {
      if (this.canModifySeed) {
        Modal.modifySeed.show();
      } else {
        Modal.message.show(`你已无法再修改种子。符文随机数生成器已在本轮中用于生成至少一个符文。`);
      }
    },
    exportSave() {
      if (!this.hasExportedToday) {
        GameStorage.export();
        player.lastExportTime = Date.now();
        player.storedTime += 3600;
        GameUI.notify.info("每日导出奖励已发放！");
      }
      if (this.hasExportedToday) {
        GameStorage.export();
        GameUI.notify.info("你今天已经导出过存档了！");
      }
    }
  }
};
</script>

<template>
  <div class="l-options-tab">
    <div>
      你每天可以导出一次存档以获取免费奖励！
    </div>
    <div class="l-options-grid">
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          @click="exportSave()"
        >
          导出存档
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.import.show()"
        >
          导入存档
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.hardReset.show()"
        >
          重置游戏
        </OptionsButton>
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="GameStorage.save(false, true)"
        >
          保存游戏
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.loadGame.show()"
        >
          选择存档
        </OptionsButton>
        <AutosaveIntervalSlider
          :min="10"
          :max="60"
          :interval="1"
        />
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="GameStorage.exportAsFile()"
        >
          导出存档为文件
        </OptionsButton>
        <OptionsButton
          class="c-file-import-button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        >
          <input
            class="c-file-import"
            type="file"
            accept=".txt"
            @change="importAsFile"
          >
          <label for="file">从文件导入存档</label>
        </OptionsButton>
        <PrimaryToggleButton
          v-model="showTimeSinceSave"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="显示自上次保存以来的时间："
        />
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.backupWindows.show()"
        >
          打开自动保存备份菜单
        </OptionsButton>
        <SaveFileName />
      </div>
      <div class="l-options-grid__row">
        <OptionsButton
          v-if="canSpeedrun"
          class="o-primary-btn--option_font-x-large"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="Modal.enterSpeedrun.show()"
        >
          开始速通
        </OptionsButton>
        <OptionsButton
          v-if="inSpeedrun"
          :class="{
            'o-pelle-disabled-pointer': creditsClosed,
            'o-primary-btn--disabled': !canModifySeed
          }"
          @click="openSeedModal()"
        >
          更改符文随机种子
        </OptionsButton>
      </div>
      <OpenModalHotkeysButton />
    </div>
    <h2
      v-if="cloudAvailable"
      class="c-cloud-options-header"
    >
      <span v-if="hideGoogleName">已登录 Google <i>（名称已隐藏）</i></span>
      <span v-else-if="loggedIn">已登录为 {{ userName }}</span>
      <span v-else>未登录</span>
    </h2>
    <div v-if="loggedIn">
      <span v-if="cloudEnabled">云端保存将每 10 分钟自动进行一次。</span>
      <span v-else>此存档已禁用云端保存。</span>
    </div>
    <div
      v-if="cloudAvailable"
      class="l-options-grid"
    >
      <div
        v-if="!STEAM"
        class="l-options-grid__row"
      >
        <OptionsButton
          v-if="loggedIn"
          onclick="GameOptions.logout()"
        >
          断开 Google 账号并禁用云端保存
        </OptionsButton>
        <OptionsButton
          v-else
          v-tooltip="'这会将你的 Google 账号连接到反物质维度存档'"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          onclick="GameOptions.login()"
        >
          使用 Google 登录以启用云端保存
        </OptionsButton>
        <PrimaryToggleButton
          v-if="loggedIn"
          v-model="hideGoogleName"
          v-tooltip="'这会出于隐私隐藏界面上的 Google 账号名称。保存/读取不受影响。'"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="隐藏 Google 账号名称："
        />
      </div>
      <div
        v-if="loggedIn"
        class="l-options-grid__row"
      >
        <OptionsButton
          onclick="GameOptions.cloudSave()"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        >
          云端保存
        </OptionsButton>
        <OptionsButton
          onclick="GameOptions.cloudLoad()"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        >
          云端读取
        </OptionsButton>
        <PrimaryToggleButton
          v-model="syncSaveIntervals"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="在云端保存前强制本地保存："
        />
      </div>
      <div
        v-if="loggedIn"
        class="l-options-grid__row"
      >
        <PrimaryToggleButton
          v-model="cloudEnabled"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="自动云端保存/读取："
        />
        <PrimaryToggleButton
          v-model="showCloudModal"
          v-tooltip="modalTooltip"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="当可能存在保存冲突时显示弹窗："
        />
        <PrimaryToggleButton
          v-model="forceCloudOverwrite"
          v-tooltip="overwriteTooltip"
          class="o-primary-btn--option l-options-grid__button"
          :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
          label="即使存在冲突也强制云端保存："
        />
      </div>
    </div>
  </div>
</template>
