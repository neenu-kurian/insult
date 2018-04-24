import * as request from 'superagent'
export const baseUrl = 'http://localhost:4000'

export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'




export const signup = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ firstName: email, lastName: email, email, password })
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: USER_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
	   })

