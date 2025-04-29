import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/boardList',
      name: 'boardList',
      component: () => import('../views/BoardList.vue'),
    },
    {
      path: '/boardForm',
      name: 'boardForm',
      component: () => import('../views/BoardForm.vue'),
    },
    {
      path: '/boardInfo',
      name: 'boardInfo',
      component: () => import('../views/BoardInfo.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
