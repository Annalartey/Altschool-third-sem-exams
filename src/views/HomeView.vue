<template>
  <div class="home">
    <HelloWorld msg=" Welcome, We help your kids learn addition and subtraction whiles having fun."/>
    <h1>Rules of the game</h1>
    <p>Step 1. Guess a random number</p>
    <p>Step 2. Add or subtract the random number from the current count.</p>
    <p>Step 3. You can set number of your choice as the current count (this is optional) before subtracting or adding your random number.</p>
    <p>Step 4. Let us know the answer</p>
    <p>Step 5. Click on + or - depending on what you did in step 2.</p>
    <p>Step 6. If the random number added to or subtracted from counter matches what you had in mind, you win. </p>
    <router-link to="/counter"><button>Start Game</button></router-link>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 h1 {
   color: #42b983;
 }
 p{
  font-size: large;
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
