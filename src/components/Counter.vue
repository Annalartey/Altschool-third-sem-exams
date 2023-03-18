<template>
    <div class="main">
       <h1>Welcome,</h1>
   
       <div>
        <div>
          <div>{{ message }}</div>
          <p>Tell us your answer. Lets see if you guessed right.</p>
          <input type="number" v-model="$store.state.guess"/>
          <button @click = "$store.commit ( 'handleGuess' ) " :disabled="!$store.state.guess" >Enter</button>
        </div>
        <div>
          <p>Guessed Number is:</p>
          <p>{{ $store.state.guessed }}</p>
        </div>
       </div>
      
       <div>
        <p>count is:</p>
        <p>{{ $store.state.count }}</p>
       </div>
   
     <div>
      <button @click = "$store.dispatch ( 'handleIncrease' ) "> + random number</button>
      <button @click = "$store.dispatch ( 'handleDecrease' ) " :disabled="$store.state.count < 1"> - random number</button>
      <button @click = "$store.commit ( 'handleReset' ) " :disabled="$store.state.count < 1" >Reset</button>
     </div>
      <div>
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
    .main{
      
    }
    button{
  color: #42b983;
  border: solid 2px #42b983 ;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: large;
 }
 button:hover{
  color: #ffffff;
  background-color: #42b983;
  cursor: pointer;
 }
    </style>