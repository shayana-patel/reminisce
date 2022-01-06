import { fetchAllTravels } from '../apis/travels'

// CASE VARIABLES
export const RECEIVE_ALL_TRAVELS = 'RECEIVE_ALL_TRAVELS'
export const ADD_A_TRIP = 'ADD_A_TRIP'

// ACTION CREATORS

export function receiveAllTravels (travels) {
  return {
    type: RECEIVE_ALL_TRAVELS,
    travels
  }
}

export function addNewTrip (newTrip) {
  return {
    type: ADD_A_TRIP,
    trip: newTrip
  }
}

// THUNKS

export function getAllTravels () {
  return (dispatch) => {
    return fetchAllTravels()
      .then(travels => {
        return dispatch(receiveAllTravels(travels))
      })
      .catch(() => {
        console.log('no travel data found')
      })
  }
}
