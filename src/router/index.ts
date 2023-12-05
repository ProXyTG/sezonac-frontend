import { createRouter, createWebHistory } from 'vue-router'
//MainScreens
import HomeView from '@/views/MainScreens/HomeView.vue'
import AboutUs from '@/views/MainScreens/AboutUs.vue'
import ContactUs from '@/views/MainScreens/ContactUs.vue'
import Login from '@/views/MainScreens/Login.vue'
//DetailScreens
import CategoryView from '@/views/Categories/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/category',
      name: 'Category',
      component: CategoryView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

export default router
