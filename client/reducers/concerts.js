import { RECEIVE_ALL_CONCERTS } from '../actions/concerts'

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_CONCERTS:
      return action.concerts
    default:
      return state
  }
}

export default reducer
