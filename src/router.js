import { createRouter, createWebHistory } from 'vue-router'
import { BASE_URL } from './config'

import MainPage from '@/components/MainPage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
})

export default router