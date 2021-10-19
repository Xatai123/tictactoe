<template>
  <TicTacToe msg="Welcome to Your Vue.js App" />
</template>

<script>
import TicTacToe from "../components/TicTacToe.vue";

export default {
  name: "Home",
  components: {
    TicTacToe,
  },
};
</script>

<style>
#logo {
  width: 100px;
  height: 100px;
}
</style>
