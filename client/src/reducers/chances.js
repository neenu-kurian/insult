import { COMEBACK, /*COMEBACK_SUCCESS*/ } from "../actions/insults";

export default (state = 3, {type, payload}) => {
  switch(type) {
    case COMEBACK:
      return payload

      // case COMEBACK_SUCCESS:
      //   return payload
  
    default:
      return state
  }
}