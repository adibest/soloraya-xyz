import Vuex from 'vuex'

const state = {
	globalLoading: false,
}

const mutations = {
	toggleGlobalLoading(state, status) {
		state.globalLoading = status
	}
}

const store = new Vuex.Store({
	state,
	mutations
})

export default store
