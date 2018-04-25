import { FETCHED_ALL_INSULTS, FETCHED_INSULT,FETCH_ALL_COMEBACKS } from '../actions/insults'

// const initialInsult = [
//   {
//     id: 1,
//     insult: 'You fight like a Dairy Farmer!',
//     comeback: 'How appropriate! You fight like a cow!'
//   },
//   {
//     id: 2,
//     insult: 'This is the END for you, you gutter crawling cur!',
//     comeback: 'And I\'ve got a little TIP for you, get the POINT?'
//   }
// ]


export default (state = [], {type, payload}) => {
  switch(type) {
    case FETCHED_ALL_INSULTS:
      return  payload

    case FETCHED_INSULT:
      return payload
    
    case FETCH_ALL_COMEBACKS:
      return payload
      
    default:
      return state
  }
}