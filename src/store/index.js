import { createStore } from "vuex";
import axios from "axios";


export default createStore({
  state: {
    count: 0,
    newCount: 0,
    guess: 0,
    guessed: 0,
    comment: ''
  },
  mutations: {
    handleIncrease (state, randomNumber) {
      state.count = state.count + randomNumber
      if(state.count == state.guessed){
        state.comment = 'Bravo!! You guessed right'
      } else if(state.count == state.guessed + 1){
        state.comment = 'Sorry, you almost had it'
      }else {
        state.comment = 'Sorry, Try to guess right next time.'
      }
  },

  handleDecrease(state, randomNumber) {
    state.count = state.count - randomNumber
    if(state.count == state.guessed){
      state.comment = 'Bravo!! You guessed right'
    } else if(state.count == state.guessed +- 1){
      state.comment = 'Sorry, you almost had it'
    } else {
      state.comment = 'Sorry, Try to guess right next time.'
    }
  },

  handleReset (state) {
      state.count = 0
      state.guesses = ''
      state.comment = ''

  },

  handleSetValue (state) {
      state.count = state.newCount
      state.newCount = 0
    
  },
  handleGuess (state) {
    state.guessed = state.guess
    state.guess = 0
},
  },
  actions: {
    handleIncrease({ commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('handleIncrease', response.data)
      })
    },
    handleDecrease({ commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('handleDecrease', response.data)
      })
    }
  }
})