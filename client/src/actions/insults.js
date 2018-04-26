import * as request from 'superagent'

export const baseUrl = 'http://localhost:4000'


export const FETCHED_ALL_INSULTS = 'FETCHED_ALL_INSULTS'
export const FETCHED_INSULT = 'FETCHED_INSULT'
export const COMEBACK = 'COMEBACK'


export const fetchInsults = () => (dispatch) => {
 request
 .get(`${baseUrl}/insults`)
 .then(res => dispatch({
  type: FETCHED_ALL_INSULTS,
  payload: res.body
 }))
 .catch(err => console.error(err))
}

export const fetchInsult = (id) => (dispatch, getState) => {
 request
  .get(`${baseUrl}/insults/${id}`)
  .then(res => dispatch({
   type: FETCHED_INSULT,
   payload: res.body
  }))
  .catch(err => console.error(err))
} 
 export const comeback = (comeback, userComeback, chances) => (dispatch) => {
  let chancesRes = chances - 1
  if(comeback === userComeback) alert('Yay! Correct comeback!')
  else dispatch({
    type: COMEBACK,
    payload: chancesRes
  })
 }