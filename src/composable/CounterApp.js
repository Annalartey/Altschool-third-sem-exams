import { ref } from "vue";


export default function CounterApp() {
 
    const message = ref("Guess a number, add or subtract it from the current count.");
   

    return { message};

  }