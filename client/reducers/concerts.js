import { RECEIVE_ALL_CONCERTS, ADD_A_CONCERT } from '../actions/concerts'

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_CONCERTS:
      return action.concerts
    case ADD_A_CONCERT:
      return [...state, action.concert]
    default:
      return state
  }
}

export default reducer
