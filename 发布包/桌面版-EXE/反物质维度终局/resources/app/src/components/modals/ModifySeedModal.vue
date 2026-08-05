<script>
import ModalWrapper from "@/components/modals/ModalWrapper";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "ModifySeedModal",
  components: {
    ModalWrapper,
    PrimaryButton,
  },
  data() {
    return {
      mode: 0,
      inputSeed: "",
      seedText: "",
      convertedInput: false,
      seedValue: 0,
    };
  },
  computed: {
    choiceEnum: () => SPEEDRUN_SEED_STATE,
    officialSeed: () => Speedrun.officialFixedSeed,
  },
  created() {
    this.seedValue = player.speedrun.initialSeed;
    this.inputSeed = `${player.speedrun.initialSeed}`;
    this.convertedInput = false;
  },
  methods: {
    update() {
      this.mode = player.speedrun.seedSelection;
      this.seedText = Speedrun.seedModeText();
    },
    handleSeedInput() {
      if (this.inputSeed.match(/^-?\d+$/gu)) {
        const num = Number(this.inputSeed);
        this.seedValue = Math.abs(num) > 9e15
          ? this.hashStringToSeed(this.inputSeed)
          : Number(this.inputSeed);
      } else {
        this.seedValue = this.hashStringToSeed(this.inputSeed);
      }
      this.convertedInput = this.seedValue !== Number(this.inputSeed);

      if (this.seedValue === 0) this.setMode(this.choiceEnum.FIXED);
      else this.setMode(this.choiceEnum.PLAYER, this.seedValue);
    },
    setMode(mode, seed) {
      if (mode === this.choiceEnum.PLAYER && this.seedValue === 0) return;
      Speedrun.modifySeed(mode, parseInt(seed, 10));
    },
    buttonClass(mode) {
      return {
        "o-primary-btn--subtab-option": true,
        "o-selected": mode === this.mode,
      };
    },
    // String-to-number hashing function, using a fixed numerical seed inspired by Number.MAX_VALUE
    // See https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    hashStringToSeed(str) {
      const seed = 17977308;
      let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
      for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
      return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
  },
};
</script>

<template>
  <ModalWrapper>
    <template #header>
      修改符文 RNG 种子
    </template>
    <div>
      在整个游戏流程中，首次现实之后的所有符文选项都是从最开始就根据一个初始种子数值
      随机决定的。该种子的作用是为您的游戏流程选择一组<i>特定的</i>符文选项。
      如果您或其他人在不同的游戏中选择了相同的种子，你们将获得相同的符文选项。
      <br>
      <br>
      您可以在生成第一个符文之前的任何时候在这三个选项之间切换。
      <br>
      当前设置：<b>{{ seedText }}</b>
      <br>
      <br>
      <PrimaryButton
        :class="buttonClass(choiceEnum.FIXED)"
        @click="setMode(choiceEnum.FIXED)"
      >
        官方预设种子
      </PrimaryButton>
      <br>
      这是默认选项，会选择种子 <b>{{ officialSeed }}</b>。任何选择完全不修改种子的人
      都将获得这些符文选项。
      <br>
      <br>
      <PrimaryButton
        :class="buttonClass(choiceEnum.RANDOM)"
        @click="setMode(choiceEnum.RANDOM)"
      >
        随机种子
      </PrimaryButton>
      <br>
      这会选择一个完全随机的种子值，生成的符文选项很可能与其他人的游戏流程
      不同，除非他们故意选择相同的值。
      <br>
      <br>
      <PrimaryButton
        v-tooltip="seedValue === 0 ? '输入的种子不能为零！' : ''"
        :class="buttonClass(choiceEnum.PLAYER)"
        @click="setMode(choiceEnum.PLAYER, seedValue)"
      >
        玩家选择的种子：
      </PrimaryButton>
      <input
        ref="inputSeed"
        v-model="inputSeed"
        type="text"
        class="c-modal-input"
        @input="handleSeedInput()"
      >
      <br>
      此选项会将您的种子设置为您在文本框中输入的值。
      <br>
      <span v-if="seedValue !== 0">
        您当前的输入将{{ convertedInput ? "转换为" : "用作" }}数字 <b>{{ seedValue }}</b>。
      </span>
      <span v-else>
        您当前的输入{{ convertedInput ? "转换为" : "等于" }} <b>0</b>；
        种子将默认使用官方预设。
      </span>
      <br>
      由于技术原因，此值必须为非零才能被接受。
    </div>
  </ModalWrapper>
</template>

<style scoped>
.o-selected {
  color: var(--color-text-inverted);
  background-color: var(--color-good);
}
</style>
