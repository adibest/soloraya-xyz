import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

import * as getters from './getters'

Vue.use(Vuex)

const state = {
	globalLoading: false,
}

const mutations = {
	toggleGlobalLoading(state, status) {
		state.globalLoading = status
	}
}

const store = new Vuex.Store({
	state: {},
	getters,
	modules: {
		app,
	},
	mutations: {},
})

export default store
