import { useStore } from 'vuex'
import { computed } from 'vue'

export function useState(arr) {
    const store = useStore()
    const keypair = arr.map(s => [s, computed(() =>store.state[s])])
    return Object.fromEnteries(keypair)
}

export function useGetters(arr) {
    const store = useStore()
    const keypair = arr.map(g => [g, computed(() =>store.state[g])])
    return Object.fromEnteries(keypair)
}

export function useMutations(arr) {
    const store = useStore()
    const keypair = arr.map(m => [m, computed(() =>store.state[m])])
    return Object.fromEnteries(keypair)
}