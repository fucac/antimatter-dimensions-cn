<script>
import HiddenTabGroup from "@/components/modals/options/hidden-tabs/HiddenTabGroup";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "HiddenTabsModal",
  components: {
    HiddenTabGroup,
    ModalWrapperOptions,
    PrimaryButton,
  },
  data() {
    return {
      isEnslaved: false,
      isAlmostEnd: false,
    };
  },
  computed: {
    tabs: () => Tabs.currentUIFormat,
  },
  methods: {
    update() {
      this.isEnslaved = Enslaved.isRunning;
      this.isAlmostEnd = Pelle.hasGalaxyGenerator;
    },
    showAllTabs() {
      for (const tab of this.tabs) {
        tab.unhideTab();
        for (const subtab of tab.subtabs)
          subtab.unhideTab();
      }
    }
  },
};
</script>

<template>
  <ModalWrapperOptions class="l-wrapper">
    <template #header>
      修改可见标签页
    </template>
    <div class="c-modal--short">
      点击按钮以切换标签页的显示/隐藏。
      <br>
      部分标签页无法隐藏，且您无法隐藏当前所在的标签页。
      <br>
      取消隐藏一个所有子标签页都被隐藏的标签页时，也会取消隐藏其所有子标签页；
      而隐藏所有子标签页也会隐藏该标签页。
      <br>
      <div v-if="isAlmostEnd">
        解锁星系生成器后，您无法隐藏标签页。
      </div>
      <div v-if="isEnslaved">
        <br>
        <i>您必须……看到一切……</i>
        <br>
        （在此现实中您无法隐藏标签页）
      </div>
      <PrimaryButton
        @click="showAllTabs"
      >
        显示所有标签页
      </PrimaryButton>
      <HiddenTabGroup
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :change-enabled="!isEnslaved && !isAlmostEnd"
        class="l-hide-modal-tab-container"
      />
    </div>
  </ModalWrapperOptions>
</template>

<style scoped>
.l-wrapper {
  width: 62rem;
}

.t-s12 .l-wrapper {
  width: 65rem;
}
</style>