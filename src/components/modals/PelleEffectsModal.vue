<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "PelleEffectsModal",
  components: {
    PrimaryButton,
    ModalWrapper,
  },
  computed: {
    nerfs() {
      return [
        // Numerical nerfs and disabled boosts
        "凡经佩勒升级解锁之物,皆无法以寻常方式解锁",
        "毁灭前所有的无限点数与永恒点数乘数尽皆失效",
        "基于最快无限速度的无限点数生成已失效",
        "毁灭前所有的复制人速度乘数尽皆失效",
        `复制人在 ${format(Number.MAX_VALUE, 2)} 以上减速更为剧烈`,
        "多数永恒挑战更为艰难",
        `所有星系仅余 ${formatPercents(0.5)} 之效`,
        `反物质维度乘数被除以 ${formatInt(10)}`,
        "成就乘数与诸多成就奖励已失效",
        "所有无限与永恒乘数及生成尽皆失效",
        "黑洞已失效",
        `现实升级"时间超越"已失效`,

        // Initial QoL and automation
        "除成就 21 外,所有提升初始资源的奖励尽皆失效",
        "所有防止资源重置的奖励已失效",
        "降低解锁成本的复兴奖励已失效,ECR 组除外",
        "自动无限与永恒挑战已失效",
        "所有维度及无限前的自动购买器在通过佩勒重新获取前皆已失效",
        "时间定理自动购买器已失效",
        "所有与膨胀时间或其后相关的自动化皆已失效",

        // Time studies + Dilation
        "基于游戏天数的时间维度永恒升级改为基于本次末日之时",
        `毁灭前所有的膨胀时间乘数已失效,${formatX(2)} 可购买项除外`,
        "所有超光速粒子乘数已失效",
        "毁灭前所有的时间定理生成效果已失效,膨胀时间升级除外",

        // Glyphs
        "符文装备在重新获取前已失效",
        `符文等级被降低,稀有度设为 ${formatPercents(0)}`,
        "符文献祭、改变与炼金之效尽皆失效",

        // Celestial features
        "您无法进入其他任何天上界的现实",
        "音乐符文无法购买",
        "所有来自艾法里格的奖励已失效",
        "所有与储存时间相关的功能已失效",
        "所有来自 V 的奖励已失效",
        `来自 Ra 的特蕾莎等级 ${formatInt(1)} 效果已失效`,
        "无限升级无法充能",
        "三位一体研究与空间定理已失效",
        "虚数升级已失效,与 DMD 及天上界解锁相关者除外",
        "连续统与奇点奖励已失效"
      ];
    }
  }
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      毁灭状态下已失效与已削弱效果一览
    </template>
    <div class="pelle-effects-container">
      <p
        v-for="(nerf, idx) in nerfs"
        :key="idx"
      >
        {{ nerf }}
      </p>
    </div>
    <PrimaryButton
      class="o-primary-btn--width-medium c-modal-message__okay-btn c-modal__confirm-btn"
      @click="emitClose"
    >
      知道了
    </PrimaryButton>
  </ModalWrapper>
</template>

<style scoped>
.pelle-effects-container {
  overflow-y: scroll;
  height: 40rem;
}

p {
  margin-bottom: 1rem;
}
</style>
