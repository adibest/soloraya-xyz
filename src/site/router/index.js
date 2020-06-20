import VueRouter from 'vue-router'
import HomeIndex from '@/site/views/home/Index'

const routes = [
  { path: '/home', component: HomeIndex }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
