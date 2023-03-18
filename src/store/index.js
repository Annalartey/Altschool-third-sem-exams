import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    count: 0,
    newCount: 0
  },
  mutations: {
    handleIncrease (state, randomNumber) {
      console.log(state.count)
      console.log("randomNumber: ", randomNumber)
      state.count = state.count + randomNumber
      console.log(state.count)
  },

  handleDecrease(state, randomNumber) {
    console.log(state.count)
    console.log("randomNumber: ", randomNumber)
    state.count = state.count - randomNumber
    console.log(state.count)
  },

  handleReset (state) {
      console.log("reset count")
      state.count = 0
  },

  handleSetValue (state) {
      console.log("set count")
      state.count = state.newCount
      state.newCount = 0
      console.log(state.count)
  },
  },
  actions: {
    handleIncrease({ commit}) {
      console.log ('increaseCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        console.log('response: ', response)
        commit('handleIncrease', response.data)
      })
    },
    handleDecrease({ commit}) {
      console.log ('DecreaseCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        console.log('response: ', response)
        commit('handleDecrease', response.data)
      })
    }
  }
})