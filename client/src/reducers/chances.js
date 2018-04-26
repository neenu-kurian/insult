import { COMEBACK } from "../actions/insults";

export default (state = 5, {type, payload}) => {
  switch(type) {
    case COMEBACK:
      return payload

    default:
      return state
  }
}