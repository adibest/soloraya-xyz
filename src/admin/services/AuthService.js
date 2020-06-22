import axios from 'axios'
import { generateHeaders, errorHandler } from './config'

const API_URL = process.env.VUE_APP_API_URL

const AuthService = {
	login(data) {
		const CONFIG = generateHeaders(['accept', 'content-type'])
		return axios.post(API_URL + `/login`, data, CONFIG)
	},
	async logout() {
		const CONFIG = await generateHeaders(['authorization', 'accept', 'content-type'])
		return axios.post(API_URL + `/logout`, null, CONFIG)
			.catch(e => { 
				console.log(e.response)
				errorHandler(e)
			})
	},
}

export default AuthService