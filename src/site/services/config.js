export const API_URL = process.env.VUE_APP_API_URL

export const POST_CONFIG = {
	headers: {
		'accept': 'application/json',
		'content-type': 'application/x-www-form-urlencoded'
	}
}

export const errorHandler = (e) => { 
	alert(e.message)
	console.log(e.response.data.message) 
}