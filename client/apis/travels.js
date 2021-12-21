import request from 'superagent'

export function fetchAllTravels () {
  return request.get('/api/v1/travels')
    .then(res => {
      return res.body
    })
}

export function postATravel (travel) {
  const formattedTravel = {
    country: travel.country,
    date: travel.date,
    comments: travel.comments,
    image: travel.image
  }

  return request.post('/api/v1/travels')
    .send(formattedTravel)
    .then((res) => {
      return res.body
    })
    .catch(err => console.log(err.message))
}
