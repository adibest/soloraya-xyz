import axios from 'axios'
import { API_URL, generateHeaders, errorHandler } from './config'

const UsersService = {
	async get(query=null) {
		const CONFIG = await generateHeaders(['authorization'])
		return axios.get(API_URL + `/users` + `?` + query, CONFIG)
			.catch(e => { errorHandler(e) })
	},
	async tableData(query=null) {
		const CONFIG = await generateHeaders(['authorization'])
		return axios.get(API_URL + `/users/data` + `?` + query, CONFIG)
			.catch(e => { errorHandler(e) })
	},
	async create(data) {
		const CONFIG = await generateHeaders(['authorization', 'accept', 'content-type'])
		return axios.post(API_URL + `/users/create`, data, CONFIG)
			.catch(e => { errorHandler(e) })
	},
	async edit(data, id) {
		const CONFIG = await generateHeaders(['authorization', 'accept', 'content-type'])
		return axios.post(API_URL + `/users/${id}/edit`, data, CONFIG)
			.catch(e => { errorHandler(e) })
	},
	async delete(id) {
		const CONFIG = await generateHeaders(['authorization'])
		return axios.delete(API_URL + `/users/${id}/delete`, CONFIG)
			.catch(e => { errorHandler(e) })
	},
}

export default UsersService