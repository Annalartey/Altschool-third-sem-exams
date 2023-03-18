<template>
  <div class="home">
    <HelloWorld msg="Counter App Game"/>
    <h2>Welcome, We help your kids learn addition and subtraction whiles having fun.</h2>
    <h1>Rules of the game</h1>
    <p>Step 1. Guess a random number</p>
    <p>Step 2. Add or subtract the random number from the current count.</p>
    <p>Step 3. You can set number of your choice as the current count (this is optional) before subtracting or adding your random number.</p>
    <p>Step 4. Let us know the answer</p>
    <p>Step 5. Click on + or - depending on what you did in step 2.</p>
    <p>Step 6. If the random number added to or subtracted from counter matches what you had in mind, you win. </p>
    <router-link to="/counter"><button>Start</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
