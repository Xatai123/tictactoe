<template>
  <div class="cm-container mx-auto">
    <div class="w-1/4 mx-auto">
      <h1 class="text-2xl my-6">Welcome to TicTacToe</h1>
      <input
        v-model="formData.playerOne"
        class="w-full my-6 cm-input"
        type="text"
        placeholder="Player 1"
      />
      <input
        v-model="formData.playerTwo"
        class="w-full my-6 cm-input"
        type="text"
        placeholder="Player 2"
      />
      <v-select
        v-model="formData.size"
        class="my-6"
        :options="options"
        placeholder="Select Size"
      >
      </v-select>
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
      options: Array.from({ length: 10 }, (_, i) => i + 3),
    };
  },
  methods: {
    updateForm() {
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