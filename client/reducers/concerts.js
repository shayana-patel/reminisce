import { ADD_CONCERT, SET_CONCERTS } from '../actions/concerts'

function reducer (state = [], action) {
  switch (action.type) {
    case ADD_CONCERT:
      return action.concerts
    case SET_CONCERTS:
      return [...state, action.concert]
    default:
      return state
  }
}

export default reducer
