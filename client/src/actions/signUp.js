import * as request from 'superagent'
export const baseUrl = 'http://localhost:4000'

export const SIGN_UP = "SIGN_UP"

export const userSignUp = () => (dispatch) =>{
    request
    .get(`${baseUrl}/signup`)
    .then(res => dispatch({
     type:SIGN_UP,
     payload: res.body
    }))
    .catch(err => console.error(err))  
}