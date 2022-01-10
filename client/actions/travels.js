import { fetchAllTravels, postATravel } from '../apis/travels'

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

export function addNewTripData (trip) {
  return (dispatch) => {
    postATravel(trip)
      .then(newTripId => {
        const travelObj = {
          id: newTripId,
          country: trip.country,
          date: trip.date,
          comments: trip.comments,
          image: trip.image
        }
        console.log(travelObj, 'dispatching the new travel object')
        return dispatch(addNewTrip(travelObj))
      })
      .catch(() => {
        console.log('new travel data not added')
      })
  }
}
