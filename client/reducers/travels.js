import { RECEIVE_ALL_TRAVELS, ADD_A_TRIP } from '../actions/travels'

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_TRAVELS:
      return action.travels
    case ADD_A_TRIP:
      return [...state, action.trip]
    default:
      return state
  }
}

export default reducer
