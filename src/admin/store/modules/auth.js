import AuthService from '../../services/AuthService'

const state = {
	user: null,
	isLogin: false,
	isLoading: true,
}

const mutations = {
	setAuthInfo(state, data) {
		state.user = data
		state.isLogin = !!data
	},
	toggleIsLoading(state, status) {
		state.isLoading = status
	}
}

const actions = {
	toggleLoading(context, status) {
		context.commit('toggleGlobalLoading', status, { root: true })
		context.commit('toggleIsLoading', status)
	},
	async login(context, data) {
		let successLogin
		context.dispatch('toggleLoading', true)

		await AuthService.login(data)
			.then( async (res) => {
				await localStorage.setItem('token', res.data.token)
				await context.commit('setAuthInfo', res.data.data, true)
				context.commit('toggleNeedReload', true, { root: true })

				successLogin = true
			})
			.catch((e) => {
				if (e.response.status == 422) {
					successLogin = false
				} else {
					alert(e.response.data.message)
				}
			})
			.finally(() => {
				context.dispatch('toggleLoading', false)
			})
		return successLogin;
	},
	async logout(context) {
		let successLogout = false
		context.dispatch('toggleLoading', true)

		await AuthService.logout()
			.then( async () => {
				await localStorage.setItem('token', null)
				await context.commit('setAuthInfo', null)
				successLogout = true
			})
			.finally(() => {
				context.dispatch('toggleLoading', false)
			})
		return successLogout;
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
}