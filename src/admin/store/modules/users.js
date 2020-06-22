import UsersService from '../../services/UsersService'
import qs from 'qs'

const state = {
	data: [],
	totalData: 0,
	isLoading: true, 
	tableParams: {
		searchTerm: '',
		page: 1,
		perPage: 10,
		sort: {
			field: 'created_at',
			type: 'desc',
		},
	}
}

const mutations = {
	setData(state, data) {
		state.data = data
	},
	setTotalData(state, total) {
		state.totalData = total
	},
	toggleIsLoading(state, status) {
		state.isLoading = status
	},
	setTableParams(state, params) {
		state.tableParams = params
	}
}

const actions = {
	toggleLoading(context, status) {
		context.commit('toggleGlobalLoading', status, { root: true })
		context.commit('toggleIsLoading', status)
	},
	fetchTableData(context) {
		context.dispatch('toggleLoading', true)
		const query = qs.stringify(context.state.tableParams)

		UsersService.tableData(query)
			.then(res => {
				const { data, total } = res.data
				context.commit('setData', data)
				context.commit('setTotalData', total)
			})
			.finally(() => {
				context.dispatch('toggleLoading', false)
			})
	},
	createData(context, data) {
		context.dispatch('toggleLoading', true)
		UsersService.create(data.form)
			.finally(() => {
				context.dispatch('toggleLoading', false)
			})
	},
	editData(context, data) {
		context.dispatch('toggleLoading', true)
		UsersService.edit(data.form, data.id)
			.finally(() => {
				context.dispatch('toggleLoading', false)
			})
	},
	deleteData(context, id) {
		context.dispatch('toggleLoading', true)
		UsersService.delete(id)
			.then(() => {
				context.dispatch('fetchTableData', false)
			})
			.finally(() => {
				context.dispatch('toggleLoading', false)
			})
	},
}

const getters = {
	tableRows(state) {
		return state.data.map(d => ({
			id: d.id,
			name: d.name,
			email: d.email,
			gender: d.gender == 'l' ? 'Laki-laki' : 'Perempuan',
			role_id: d.role.name,
			created_at: d.created_at.substr(0, 10),
		}))
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}