<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "UpgradeMechanicLockModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    upgrade: {
      type: Object,
      required: true
    },
    isImaginary: {
      type: Boolean,
      required: true,
    },
    isDual: {
      type: Boolean,
      required: true,
    },
    isEndgame: {
      type: Boolean,
      required: true,
    },
    specialLockText: {
      type: String,
      required: false,
      default: null,
    }
  },
  computed: {
    upgradeStr() {
      if (this.isEndgame) return "终局升级";
      if (this.isDual) return "二元升级";
      return this.isImaginary ? "虚数升级" : "现实升级";
    },
    lockEvent() {
      return this.specialLockText ?? this.upgrade.lockEvent;
    }
  },
  methods: {
    disableLock() {
      this.upgrade.setMechanicLock(false);
    }
  }
};
</script>

<template>
  <ModalWrapperChoice
    @confirm="disableLock"
  >
    <template #header>
      {{ upgradeStr }} 条件锁
    </template>
    <div class="c-modal-message__text">
      您确定要 {{ lockEvent }} 吗?此刻此举将使您
      <span class="l-emphasis">
        无法满足 {{ upgradeStr }} "{{ upgrade.name }}" 之要求
      </span>
      <span :ach-tooltip="upgrade.requirement">
        <i class="fas fa-question-circle" />
      </span>
      <br>
      <br>
      选择"取消"将关闭此弹窗且无任何效果;选择"解除锁定"将关闭此升级的要求检查,
      并防止此消息再次出现,除非您重新开启。
      <br>
      <br>
      此二选项皆不会执行您方才尝试的操作,故您需重试一次。
    </div>
    <template #confirm-text>
      解除锁定
    </template>
  </ModalWrapperChoice>
</template>

<style scoped>
.l-emphasis {
  font-weight: bold;
  color: var(--color-bad);
}
</style>
