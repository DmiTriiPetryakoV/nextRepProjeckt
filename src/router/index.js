import { createRouter, createWebHistory } from 'vue-router'
import Workout from '../views/Workout.vue'
import Sleep from '../views/Sleep.vue'
import Eat from '../views/Eat.vue'
const routes = [
  { path: '/workout', component: Workout },
  { path: '/sleep', component: Sleep },
  { path: '/eat', component: Eat },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router