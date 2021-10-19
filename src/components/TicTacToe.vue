<template>
  <div class="mt-16 flex justify-center flex-wrap">
    <div class="w-1/3">
      <h1 class="text-4xl pb-6">Player 1</h1>
      <h2 class="text-3xl pb-20">Score : {{ playerOneScore }}</h2>
      <h2 v-if="player == 1" class="text-3xl">Your Turn</h2>
    </div>
    <div class="w-1/3 container mx-auto">
      <div class="grid grid-cols-3">
        <template v-for="m in size">
          <div
            v-for="n in size"
            :key="(m - 1) * size + n"
            :class="classGenerator((m - 1) * size + n)"
            class="cursor-pointer border-black h-32 full-center text-8xl"
            @click="makeMove(m, n)"
          >
            {{ matrix[m - 1][n - 1] }}
          </div>
        </template>
      </div>
    </div>
    <div class="w-1/3">
      <h1 class="text-4xl pb-6">Player 2</h1>
      <h2 class="text-3xl pb-20">Score : {{ playerTwoScore }}</h2>
      <h2 v-if="player == -1" class="text-3xl">Your Turn</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 3,
      player: 1,
      moves: 0,
      playerOneScore: 0,
      playerTwoScore: 0,
      matrix: new Array(3).fill().map(() => new Array(3).fill("")),
      rows: new Array(3).fill(0),
      cols: new Array(3).fill(0),
      diagonal: 0,
      antiDiagonal: 0,
    };
  },
  methods: {
    classGenerator(k) {
      let res = "";
      if (k < 4) res += "border-b-2";
      else if (k > 6) res += "border-t-2";
      if (k % 3 == 1) res += " border-r-2";
      else if (k % 3 == 0) res += " border-l-2";
      return res;
    },
    initGame() {
      this.matrix = new Array(3).fill().map(() => new Array(3).fill(""));
      this.cols = new Array(3).fill(0);
      this.rows = new Array(3).fill(0);
      this.diagonal = 0;
      this.antiDiagonal = 0;
      this.moves = 0;
    },
    makeMove(m, n) {
      m--;
      n--;
      if (this.matrix[m][n] == "") {
        this.moves++;
        this.matrix[m][n] = this.player == 1 ? "x" : "o";
        let i = this.player == 1 ? 1 : -1;
        this.rows[m] += i;
        this.cols[n] += i;
        if (n == m) this.diagonal += i;
        if (n == 3 - m - 1) this.antiDiagonal += i;

        if (
          Math.abs(this.rows[m]) == 3 ||
          Math.abs(this.cols[n]) == 3 ||
          Math.abs(this.diagonal) == 3 ||
          Math.abs(this.antiDiagonal) == 3
        ) {
          if (this.player == 1) this.playerOneScore++;
          else this.playerTwoScore++;
          this.initGame();
        } else if (this.moves == 9) {
          this.initGame();
        }
        this.player *= -1;
        this.$forceUpdate();
      }
    },
  },
};
</script>

<style>
</style>