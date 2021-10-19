<template>
  <div class="flex justify-between flex-wrap container">
    <div class="w-1/4 bg-red-300">
      <h1 class="text-4xl pb-6 pt-16">Player 1</h1>
      <h2 class="text-3xl pb-20">Score : {{ playerOneScore }}</h2>
      <h2 v-if="player == 1" class="text-3xl">Your Turn</h2>
    </div>
    <div class="w-2/4">
      <div class="grid" :class="'grid-cols-' + size">
        <template v-for="m in size">
          <div
            v-for="n in size"
            :key="(m - 1) * size + n"
            :style="{ height: 640 / size + 'px', width: 640 / size + 'px' }"
            :class="`cursor-pointer border-black full-center ${
              size < 8 ? 'text-8xl' : 'text-4xl'
            } ${classGenerator((m - 1) * size + n)}`"
            @click="makeMove(m, n)"
          >
            <p>{{ matrix[m - 1][n - 1] }}</p>
          </div>
        </template>
      </div>
    </div>
    <div class="w-1/4 bg-blue-300">
      <h1 class="text-4xl pb-6 pt-16">Player 2</h1>
      <h2 class="text-3xl pb-20">Score : {{ playerTwoScore }}</h2>
      <h2 v-if="player == -1" class="text-3xl">Your Turn</h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initGame();
  },
  data() {
    return {
      size: 4,
      player: 1,
      moves: 0,
      playerOneScore: 0,
      playerTwoScore: 0,
      matrix: new Array(),
      rows: new Array(),
      cols: new Array(),
      diagonal: 0,
      antiDiagonal: 0,
    };
  },
  methods: {
    showWinAlert() {
      let name = this.player > 0 ? 1 : 2;
      this.$swal("Player " + name + " won!!!");
    },
    showDrawAlert() {
      this.$swal("Its a draw!");
    },
    classGenerator(k) {
      let res = "";
      if (k <= this.size * (this.size - 1)) res += "border-b-2";
      if (k % this.size != 1) res += " border-l-2";
      return res;
    },
    initGame() {
      this.matrix = new Array(this.size)
        .fill()
        .map(() => new Array(this.size).fill(""));
      this.cols = new Array(this.size).fill(0);
      this.rows = new Array(this.size).fill(0);
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
        if (n == this.size - m - 1) this.antiDiagonal += i;

        if (
          Math.abs(this.rows[m]) == this.size ||
          Math.abs(this.cols[n]) == this.size ||
          Math.abs(this.diagonal) == this.size ||
          Math.abs(this.antiDiagonal) == this.size
        ) {
          if (this.player == 1) this.playerOneScore++;
          else this.playerTwoScore++;
          this.initGame();
          this.showWinAlert();
        } else if (this.moves == this.size * this.size) {
          this.initGame();
          this.showDrawAlert();
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