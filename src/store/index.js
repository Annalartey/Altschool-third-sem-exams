import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: {
    counter (state) {
      return state.count;
    }
  },
  mutations: {
    setCount(state, value){
      state.count = value
    }
  },
  actions: {
  },
  modules: {
  }
})
