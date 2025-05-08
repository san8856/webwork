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
      path: '/bookList',
      name: 'bookList',
      component: () => import('../views/BookList.vue'),
    },
    {
      path: '/bookInfo',
      name: 'bookInfo',
      component: () => import('../views/BookInfo.vue'),
    },
    {
      path: '/bookAdd',
      name: 'bookAdd',
      component: () => import('../views/BookAdd.vue'),
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
