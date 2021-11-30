import request from 'superagent'

export function fetchAllConcerts () {
  return request.get('/api/v1/concerts')
    .then(res => {
      return res.body
    })
}
