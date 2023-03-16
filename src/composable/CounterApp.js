import { ref } from "vue";


export default function CounterApp() {
 
    const count = ref(0)
    const message = ref("This is a counter app");

    const handleIncrease = () => {
        console.log("increase count")
        console.log(count.value)
        count.value = count.value + 1
        console.log(count.value)
    }

    const handleDecrease = () => {
        console.log("decrease count")
        console.log(count.value)
        count.value = count.value - 1
        console.log(count.value)
    }

    const handleReset = () => {
        console.log("reset count")
    }
    return { count, message, handleIncrease, handleDecrease, handleReset };

  }