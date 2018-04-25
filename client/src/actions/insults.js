import * as request from 'superagent'

export const baseUrl = 'http://localhost:4000'


export const FETCHED_ALL_INSULTS = 'FETCHED_ALL_INSULTS'
export const FETCHED_INSULT = 'FETCHED_INSULT'
export const FETCH_ALL_COMEBACKS='FETCH_ALL_COMEBACKS'

export const fetchInsults = () => (dispatch) => {
 request
 .get(`${baseUrl}/insults`)
 .then(res => dispatch({
  type: FETCHED_ALL_INSULTS,
  payload: res.body
 }))
 .catch(err => console.error(err))
}

export const fetchInsult = () => (dispatch) => {
 const i = Math.floor((Math.random() * 16) +1)
 request
  .get(`${baseUrl}/insults/${i}`)
  .then(res => dispatch({
   type: FETCHED_INSULT,
   payload: res.body
  }))
  .catch(err => console.error(err))
} 

export const fetchAllComebacks=()=>(dispatch)=>{
  request
  .get(`${baseUrl}/insults`)
  .then(res=>dispatch({
    type:FETCH_ALL_COMEBACKS,
    payload:res.body
  }))
  .catch(err=>console.log(err))
}