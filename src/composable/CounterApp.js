import { ref } from "vue";


export default function CounterApp() {
 
    const message = ref("This is a counter app");
   

    return { message};

  }