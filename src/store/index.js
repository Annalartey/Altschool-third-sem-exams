import { createStore } from "vuex";


export default createStore({
  state: {
    count: 0,
    newCount: 0
  },
  mutations: {
    handleIncrease (state) {
      console.log("increase count")
      console.log(state.count)
      state.count = state.count + 1
      console.log(state.count)
  },

  handleDecrease(state) {
      console.log("decrease count")
      console.log(state.count)
      state.count = state.count - 1
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
  }
})