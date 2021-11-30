import request from 'superagent'

export function fetchAllConcerts () {
  return request.get('/api/v1/concerts')
    .then(res => {
      return res.body
    })
}

export function postAConcert (concert) {
  const formattedConcert = {
    artist: concert.artist,
    location: concert.location,
    date: concert.date,
    comments: concert.comments,
    image: concert.image
  }

  return request.post('/api/v1/concerts')
    .send(formattedConcert)
    .then((res) => {
      const concertObj = res.body
      formattedConcert.id = concertObj.newId
      return formattedConcert
    })
    .catch(err => console.log(err.message))
}
