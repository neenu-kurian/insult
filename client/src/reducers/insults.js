import { FETCHED_ALL_INSULTS } from '../actions/insults'

export default (state = [], {type, payload}) => {
  switch(type) {
    case FETCHED_ALL_INSULTS:
      return  payload
      
    default:
      return state
  }
}