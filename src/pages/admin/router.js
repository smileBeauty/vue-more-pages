import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/admin/home/home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: 'admin',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/admin/login/login.vue')
    }
  ]
})
