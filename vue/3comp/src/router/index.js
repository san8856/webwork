import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageTitle from '@/components/PageTitle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Nested',
      name: 'Nested',
      component: () => import('../views/NestedComponent.vue'),
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('../views/ParentComponent4.vue'),
    },
    {
      path: '/emp',
      name: 'emp',
      component: () => import('../views/EmpView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/SlotView.vue'),
    },
  ],
})

export default router

