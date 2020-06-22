import VueRouter from 'vue-router'

import HomeIndex from '@/site/views/home/Index'

import Error404 from '@/site/views/errors/Error404'

const routes = [
	{ path: '*', component: Error404 },

	{ path: '/', redirect: '/home' },

	{ path: '/home', component: HomeIndex },
]

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

export default router