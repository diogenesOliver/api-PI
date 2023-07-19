import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import UserForm from '@/views/UserForm.vue'
import Welcome from '@/views/Welcome.vue'
import Exercises from '@/views/Exercises.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/register',
    name: 'register',
    component: Register
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/user-form',
    name: 'UserForm',
    component: UserForm
  },

  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },

  {
    path: '/list',
    name: 'Exercises',
    component: Exercises
  }
]

const router = new VueRouter({
  routes
})

export default router