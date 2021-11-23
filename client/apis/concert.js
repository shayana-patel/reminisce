import request from 'superagent'

export function getConcert () {
  return request.get('/api/v1/concerts')
    .then((res) => res.body)
}
