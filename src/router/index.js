import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Loginpage/loginPage.vue'
import UserView from '../views/User/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login' // Redirect to login page by default
    },
    {
      path: '/login',
      name: 'loginpage',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        // Check if the user is authenticated
        if (localStorage.getItem('token')) {
          // User is authenticated, redirect to the dashboard
          next({ name: 'dashboard' })
        } else {
          // Proceed to the login page
          next()
        }
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: UserView,
      beforeEnter: (to, from, next) => {
        // Check if the user is authenticated
        if (localStorage.getItem('token')) {
          // User is authenticated, allow access to the dashboard
          next()
        } else {
          // User is not authenticated, redirect to the login page
          next({ name: 'loginpage' })
        }
      }
    }
  ]
  /*{
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    */
})

export default router
