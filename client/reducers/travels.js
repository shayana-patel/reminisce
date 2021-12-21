import { RECEIVE_ALL_TRAVELS, ADD_A_TRAVEL } from '../actions/travels'

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_TRAVELS:
      return action.RECEIVE_ALL_TRAVELS
    case ADD_A_TRAVEL:
      return [...state, action.travel]
    default:
      return state
  }
}

export default reducer
