<script>
import BackupEntry from "@/components/modals/options/BackupEntry";
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

import { AutoBackupSlots } from "@/core/storage";
import { STEAM } from "@/env";

export default {
  name: "BackupWindowModal",
  components: {
    ModalWrapper,
    BackupEntry,
    PrimaryButton
  },
  data() {
    return {
      // Used to force a key-swap whenever a save happens, to make unused slots immediately update
      nextSave: 0,
      ignoreOffline: false,
    };
  },
  computed: {
    backupSlots: () => AutoBackupSlots,
    deleteText: () => (STEAM ? "完全卸载游戏" : "清除浏览器 Cookie"),
  },
  watch: {
    ignoreOffline(newValue) {
      player.options.loadBackupWithoutOffline = newValue;
    },
  },
  methods: {
    update() {
      this.nextSave = Object.values(GameStorage.lastBackupTimes).map(t => t && t.backupTimer).sum();
      this.ignoreOffline = player.options.loadBackupWithoutOffline;
    },
    offlineOptionClass() {
      return {
        "c-modal__confirmation-toggle__checkbox": true,
        "c-modal__confirmation-toggle__checkbox--active": this.ignoreOffline
      };
    },
    toggleOffline() {
      this.ignoreOffline = !this.ignoreOffline;
    },
    importAsFile(event) {
      // This happens if the file dialog is canceled instead of a file being selected
      if (event.target.files.length === 0) return;

      const reader = new FileReader();
      reader.onload = function() {
        GameStorage.importBackupsFromFile(reader.result);
      };
      reader.readAsText(event.target.files[0]);
    },
  }
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      自动备份存档
    </template>
    <div class="c-info c-modal--short">
      游戏会根据您在线或离线的时长自动进行备份。
      在线备份的计时器仅在游戏开启时运行，离线备份只会保存到
      适用计时器最长的槽位中。
      此外，每当从备份加载时，您当前的存档都会被保存到最后一个槽位。
      <div
        class="c-modal__confirmation-toggle"
        @click="toggleOffline"
      >
        <div :class="offlineOptionClass()">
          <span
            v-if="ignoreOffline"
            class="fas fa-check"
          />
        </div>
        <span class="c-modal__confirmation-toggle__text">
          加载时禁用离线进度
        </span>
      </div>
      <div class="c-entry-container">
        <BackupEntry
          v-for="slot in backupSlots"
          :key="nextSave + slot.id"
          class="l-backup-entry"
          :slot-data="slot"
        />
      </div>
      这些备份与您的游戏存档存储在同一位置，如果您执行任何
      会删除存档本身的外部操作（例如{{ deleteText }}），它们仍可能丢失。您可以使用以下按钮将
      所有备份一次性导入/导出为文件：
      <div class="c-backup-file-ops">
        <PrimaryButton
          class="o-btn-file-ops"
          onclick="GameStorage.exportBackupsAsFile()"
        >
          导出为文件
        </PrimaryButton>
        <PrimaryButton class="o-btn-file-ops">
          <input
            class="c-file-import"
            type="file"
            accept=".txt"
            @change="importAsFile"
          >
          <label for="file">从文件导入</label>
        </PrimaryButton>
      </div>
      您的三个存档槽位各自拥有独立的备份集。
    </div>
  </ModalWrapper>
</template>

<style scoped>
.c-info {
  width: 60rem;
  overflow-x: hidden;
  padding-right: 1rem;
}

.c-info::-webkit-scrollbar {
  width: 1rem;
}

.c-info::-webkit-scrollbar-thumb {
  border: none;
}

.s-base--metro .c-info::-webkit-scrollbar-thumb {
  border-radius: 0;
}

.c-backup-file-ops {
  margin: 0.5rem;
}

.o-btn-file-ops {
  margin: 0 0.5rem;
}

.c-entry-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.l-backup-entry {
  width: calc(50% - 0.6rem);
  height: calc(25% - 0.6rem);
}
</style>
