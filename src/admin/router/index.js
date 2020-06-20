import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '../layouts/AppLayout'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: HomeIndex }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
