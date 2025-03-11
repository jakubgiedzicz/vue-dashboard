import { createRouter, createWebHistory } from 'vue-router'
import TriangleView from '@/views/TriangleView.vue'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/triangles',
      name: 'triangles',
      component: TriangleView
    },
  ]
})
export default router