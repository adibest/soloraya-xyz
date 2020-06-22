export const API_URL = process.env.VUE_APP_API_URL + '/admin'

export const errorHandler = (e) => { 
	if (e.response && e.response.status == 401) {
		alert('Unauthorized, process to attempt logout')
		window.location.href = '/admin/logout'
	} else {
		alert(e.message)
		console.log(e.response && e.response.data.message) 
	}
}

export const generateHeaders = async (types) => {
	let headers = {}
	if (types.includes('accept')) headers['accept'] = 'application/json'
	if (types.includes('content-type')) headers['content-type'] = 'application/x-www-form-urlencoded'
	if (types.includes('authorization')) headers['authorization'] =  await 'Bearer ' + localStorage.getItem('token')

	return { headers }
}