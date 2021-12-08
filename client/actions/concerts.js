import { fetchAllConcerts, postAConcert } from '../apis/concerts'

// CASE VARIABLES
export const RECEIVE_ALL_CONCERTS = 'RECEIVE_ALL_CONCERTS'
export const ADD_A_CONCERT = 'ADD_A_CONCERT'

// ACTION CREATORS

export function receiveAllConcerts (concerts) {
  return {
    type: RECEIVE_ALL_CONCERTS,
    concerts
  }
}

export function addNewConcert (newConcert) {
  return {
    type: ADD_A_CONCERT,
    concert: newConcert
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

// export function addNewConcertData (concert) {
//   return (dispatch) => {
//     postAConcert(concert)
//       .then(formattedConcert => {
//         const action = addNewConcert(formattedConcert)
//         return dispatch(action)
//       })
//       .catch(() => {
//         console.log('new concert data not added')
//       })
//   }
// }

export function addNewConcertData (concert) {
  return (dispatch) => {
    postAConcert(concert)
      .then(newConcertId => {
        const concertObj = {
          id: newConcertId,
          artist: concert.artist,
          location: concert.location,
          date: concert.date,
          comments: concert.comments,
          image: concert.image
        }
        console.log(concertObj, 'dipatching the new concert object')
        return dispatch(addNewConcert(concertObj))
      })
      .catch(() => {
        console.log('new concert data not added')
      })
  }
}
