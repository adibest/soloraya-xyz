import VueRouter from 'vue-router'

import store from '@/admin/store'

import Dashboard from '@/admin/top-level/Dashboard'
import Auth from '@/admin/top-level/Auth'

import AuthLogin from '@/admin/views/auth/Login'
import AuthRegister from '@/admin/views/auth/Register'
import AuthLogout from '@/admin/views/auth/Logout'

import CoursesIndex from '@/admin/views/courses/Index'
import CoursesDetail from '@/admin/views/courses/Detail'

import UsersIndex from '@/admin/views/users/Index'
import UsersForm from '@/admin/views/users/Form'
import UsersDetail from '@/admin/views/users/Detail'

import Settings from '@/admin/views/settings/Index'

import Error404 from '@/admin/views/errors/Error404'

const routes = [
	{ path: '*', component: Error404 },

	{ path: '/', redirect: '/users' },

	{ path: '/logout', component: AuthLogout },
	{ path: '', component: Auth, children: [
		{ path: '/login', component: AuthLogin },
		{ path: '/register', component: AuthRegister },
	], 
	beforeEnter: (to, from, next) => {
		// next()
		if (store.state.auth.isLogin) next('/')
		else next()
	} },

	{ path: '', component: Dashboard, children: [
		{ path: '/courses', component: CoursesIndex },
		{ path: '/courses/:id', component: CoursesDetail },

		{ path: '/users', component: UsersIndex },
		{ path: '/users/create', component: UsersForm },
		{ path: '/users/edit/:id', component: UsersForm },
		{ path: '/users/detail/:id', component: UsersDetail },

		{ path: '/settings', component: Settings },
	],
	beforeEnter: (to, from, next) => {
		// next()
		if (store.state.auth.isLogin) next()
		else next('/login')
	} },
]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL + 'admin/',
	routes: routes
})

router.afterEach(() => {
	if (store.state.needReload) {
		location.reload()
		store.commit('toggleNeedReload', false)
	}
})

export default router