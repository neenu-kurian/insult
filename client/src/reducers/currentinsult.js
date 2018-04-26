import { FETCHED_INSULT} from '../actions/insults'

const initialState = [{
  insulted: false
}]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    
    case FETCHED_INSULT: {
      state.insulted = true;
      return payload
    }

    default:
      return state
  }
}