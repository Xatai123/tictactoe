<template>
  <div class="mt-16 flex justify-center flex-wrap">
    <div class="w-1/3 player">Player 1</div>
    <div class="w-1/3 container mx-auto">
      <div class="grid grid-cols-3">
        <template v-for="m in 3">
          <div
            v-for="n in 3"
            :key="(m - 1) * 3 + n"
            :class="classGenerator((m - 1) * 3 + n)"
            class="cursor-pointer border-black h-32 full-center my-font"
            @click="makeMove(m, n)"
          >
            {{ matrix[m - 1][n - 1] }}
          </div>
        </template>
      </div>
    </div>
    <div class="w-1/3 player">Player 2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlayerOneTurn: true,
      matrix: new Array(3).fill().map(() => new Array(3).fill("")),
    };
  },
  watch: {
    matrix: {
      handler: function (val) {
        console.log("ATC");
        console.log(val);
      },
      deep: true,
    },
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
    makeMove(m, n) {
      m--;
      n--;
      if (this.matrix[m][n] == "") {
        if (this.isPlayerOneTurn) this.matrix[m][n] = "x";
        else this.matrix[m][n] = "o";
        this.isPlayerOneTurn = !this.isPlayerOneTurn;
        this.$forceUpdate();
        console.log(this.isOver() + " won");
      }
    },
    isOver() {
      for (let i = 0; i < 3; i++) {
        if (
          this.matrix[n][0] == this.matrix[n][1] &&
          this.matrix[n][0] == this.matrix[n][2]
        )
          return this.matrix[n][0];
      }
      //s
      for (let i = 0; i < 3; i++) {
        if (
          this.matrix[0][n] == this.matrix[1][n] &&
          this.matrix[0][n] == this.matrix[2][n]
        )
          return this.matrix[0][n];
      }
      if (
        this.matrix[0][0] == this.matrix[1][1] &&
        this.matrix[0][0] == this.matrix[2][2]
      )
        return this.matrix[0][0];
      else if (
        this.matrix[2][0] == this.matrix[1][1] &&
        this.matrix[2][0] == this.matrix[0][2]
      )
        return this.matrix[2][0];
    },
  },
};
</script>

<style>
</style>