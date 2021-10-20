import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    size: 4,
    playerOne: "Xatai",
    playerTwo: "Player 2"
  },
  mutations: {
    setSize(state, size) {
      state.size = size;
    },
    setPlayerOne(state, name) {
      state.playerOne = name
    },
    setPlayerTwo(state, name) {
      state.playerTwo = name
    }
  },
  actions: {
  },
  modules: {
  }
})
