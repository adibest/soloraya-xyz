const TOKEN_HEADER = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
const COMMON_HEADER = {
	'accept': 'application/json',
	'content-type': 'application/x-www-form-urlencoded'
} 

export const API_URL = process.env.VUE_APP_API_URL + '/admin'

export const COMMON_CONFIG = {
	headers: {
		...COMMON_HEADER
	}
}
export const WITH_TOKEN_CONFIG = {
	headers: {
		...COMMON_HEADER,
		...TOKEN_HEADER
	}
}
export const JUST_TOKEN_CONFIG = {
	headers: {
		...TOKEN_HEADER
	}
}

export const errorHandler = (e) => { 
	if (e.response.status == 401) {
		window.location.href = '/admin/logout'
	} else {
		alert(e.message)
		console.log(e.response.data.message) 
	}
}