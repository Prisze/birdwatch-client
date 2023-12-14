import { createRouter, createWebHistory } from 'vue-router'
import { BASE_URL } from './config'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import CreatePostPage from '@/components/CreatePostPage.vue'
import PostPage from '@/components/PostPage.vue'

const routes = [
  { path: '/', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/new_post', name: 'NewPost', component: CreatePostPage, meta: { requiresAuth: true } },
  { path: '/post/:id', name: 'Post', component: PostPage }
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router