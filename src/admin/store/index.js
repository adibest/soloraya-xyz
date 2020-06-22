import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import auth from './modules/auth'
import users from './modules/users'

const state = {
	globalLoading: false,
	needReload: false,
}

const mutations = {
	toggleGlobalLoading(state, status) {
		state.globalLoading = status
	},
	toggleNeedReload(state, status) {
		state.needReload = status
	}
}

const modules = {
	auth, users
}

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
	state,
	mutations,
	modules,
	plugins: [vuexLocal.plugin]
})

export default store