import { fetchAllConcerts } from '../apis/concerts'

// CASE VARIABLES
export const ADD_CONCERT = 'ADD_CONCERT'
export const SET_CONCERTS = 'SET_CONCERTS'

// ACTION CREATORS

export function addConcert (concert) {
  return {
    type: ADD_CONCERT,
    concert
  }
}

export function setConcerts (concerts) {
  return {
    type: SET_CONCERTS,
    concerts
  }
}

// THUNKS

export function getConcerts () {
  return (dispatch) => {
    return fetchAllConcerts()
      .then(concerts => {
        console.log('getConcerts')
        return dispatch(setConcerts(concerts))
      })
  }
}
