import { fetchAllConcerts } from '../apis/concerts'

// CASE VARIABLES
export const RECEIVE_ALL_CONCERTS = 'RECEIVE_ALL_CONCERTS'

// ACTION CREATORS

export function receiveAllConcerts (concerts) {
  return {
    type: RECEIVE_ALL_CONCERTS,
    concerts
  }
}

// THUNKS

export function getAllConcerts () {
  return (dispatch) => {
    return fetchAllConcerts()
      .then(concerts => {
        return dispatch(receiveAllConcerts(concerts))
      })
      .catch(() => {
        console.log('no concerts found')
      })
  }
}
