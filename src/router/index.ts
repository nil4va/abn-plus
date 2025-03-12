import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/show/:id',
      name: 'show',
      component: DetailView,
      props: (route) => ({ id: Number(route.params.id) }),
    },
  ],
})

export default router
