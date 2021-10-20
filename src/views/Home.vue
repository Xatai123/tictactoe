<template>
  <div class="cm-container mx-auto">
    <div class="w-1/4 mx-auto">
      <h1 class="text-2xl my-6">Welcome to TicTacToe</h1>
      <div class="mt-6 mb-2 relative pb-4">
        <input
          :class="{ error: errors.playerOne }"
          v-model="formData.playerOne"
          class="w-full cm-input"
          type="text"
          placeholder="Player 1"
        />
        <span
          v-show="errors.playerOne"
          class="absolute text-smc text-red-400 h-4 left-0 bottom-0"
          >pls enter name</span
        >
      </div>
      <div class="mt-6 mb-2 relative pb-4">
        <input
          :class="{ error: errors.playerTwo }"
          v-model="formData.playerTwo"
          class="w-full cm-input"
          type="text"
          placeholder="Player 2"
        />
        <span
          v-show="errors.playerTwo"
          class="absolute text-smc text-red-400 h-4 left-0 bottom-0"
          >pls enter name</span
        >
      </div>
      <div class="mt-6 mb-2 relative pb-4">
        <v-select
          :class="{ error: errors.size }"
          v-model="formData.size"
          :options="options"
          placeholder="Select Size"
        >
        </v-select>
        <span
          v-show="errors.size"
          class="absolute text-smc text-red-400 h-4 left-0 bottom-0"
          >pls choose size</span
        >
      </div>
      <button
        class="bg-green-300 my-4 py-4 px-12 rounded-lg text-xl"
        @click="updateForm"
      >
        Start Game
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        playerOne: "",
        playerTwo: "",
        size: 3,
      },
      errors: {},
      options: Array.from({ length: 10 }, (_, i) => i + 3),
    };
  },
  methods: {
    updateForm() {
      for (const key in this.formData) {
        if (!this.formData[key]) {
          this.errors[key] = true;
        } else delete this.errors[key];
      }
      if (Object.keys(this.errors).length) {
        this.$forceUpdate();
        return;
      }
      this.$store.commit("setSize", this.formData.size);
      this.$store.commit("setPlayerOne", this.formData.playerOne);
      this.$store.commit("setPlayerTwo", this.formData.playerTwo);
      this.$router.push("/game");
    },
  },
};
</script>


<style lang="scss">
</style>