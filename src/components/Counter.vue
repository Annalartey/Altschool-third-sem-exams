<template>
    <div class="main">
       <h1>Welcome,</h1>
   
       <div class="guess">
        <div>
          <div>{{ message }}</div>
          <p>Tell us your answer. Lets see if you guessed right.</p>
          <input type="number" v-model="$store.state.guess"/>
          <button @click = "$store.commit ( 'handleGuess' ) " :disabled="!$store.state.guess" >Enter</button>
        </div>
        <div class="guess-no">
          <h3>Your guessed Number is: </h3>
          <p>{{ $store.state.guessed }}</p>
        </div>
       </div>
      
       <div>
        <p>count is:</p>
        <p>{{ $store.state.count }}</p>
       </div>
   
     <div>
      <button @click = "$store.dispatch ( 'handleIncrease' ) " class="operation"> + </button>
      <button @click = "$store.dispatch ( 'handleDecrease' ) " :disabled="$store.state.count < 1" class="operation"> - </button>
      <button @click = "$store.commit ( 'handleReset' ) " :disabled="$store.state.count < 1" class="operation">Reset</button>
     </div>
      <div class="setval">
        <input type="number" v-model="$store.state.newCount"/>
        <button @click="$store.commit ( 'handleSetValue' ) ">Set value</button>
      </div>
      <p>{{ $store.state.comment }}</p>
    </div>
   
   </template>
   
   <script>
   import CounterApp from '../composable/CounterApp';
   import { useStore } from 'vuex'
  

   export default{
     setup() {
    
      const store = useStore()

       const { message} = CounterApp()
      
  
       return { message};
     }
   };
   
   </script>
   
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
    .guess{
      display: flex;
      align-items: space-between;
      justify-content: center;
    }
    .guess-no{
      border:#42b983 solid 2px;
      padding: 8px;
      margin: 0 8px;
      font-size: larger;
    }
    .guess-no .p{
      font-size: xx-large;
      color: #42b983;
    }
    .setval{
      display: flex;
      align-items: space-between;
      justify-content: center;
    }
  button{
  color: #42b983;
  border: solid 2px #42b983 ;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: large;
  margin: 0 4px;
 }
 button:hover{
  color: #ffffff;
  background-color: #42b983;
  cursor: pointer;
 }
 input{
  width: 100%;
  padding: 4px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
 }
 .operation{
  font-size: xx-large;
 }
    </style>