import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Counter from '../components/Counter.vue'
import WildCardView from '../views/WildCardView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  },
  {
    path: "/:catchAll(.*)",
    name: '404',
    component: WildCardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router