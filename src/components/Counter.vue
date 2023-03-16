<template>
    <div class="">
       <h1>Counter App</h1>
   
       <div>{{ message }}</div>
   
      <p>{{ count }}</p>
      <button @click = "handleIncrease">Increase</button>
      <button @click = "handleDecrease">Decrease</button>
      <button @click = "handleReset" >Reset</button>
      <div>
        <input type="number" v-model="newCount"/>
        <button @click="handleSetValue">Set value</button>
      </div>
    </div>
   
   </template>
   
   <script>
   import CounterApp from '../composable/CounterApp';
   export default{
     setup() {
       const {count, message, newCount, handleIncrease, handleDecrease, handleReset, handleSetValue} = CounterApp()
      
  
       return { count, message, newCount, handleIncrease, handleDecrease, handleReset, handleSetValue};
     },
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