<template>
    <div class="">
       <h1>Counter App</h1>
   
       <div>{{ message }}</div>
   
      <p>{{ $store.state.count }}</p>
      <button @click = "$store.dispatch ( 'handleIncrease' ) ">Increase</button>
      <button @click = "$store.dispatch ( 'handleDecrease' ) " :disabled="$store.state.count < 1">Decrease</button>
      <button @click = "$store.commit ( 'handleReset' ) " :disabled="$store.state.count < 1" >Reset</button>
      <div>
        <input type="number" v-model="$store.state.newCount"/>
        <button @click="$store.commit ( 'handleSetValue' ) ">Set value</button>
      </div>
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
    </style>