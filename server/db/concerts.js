const conn = require('./connection')

function getAllConcerts (db = conn) {
  return db('concerts')
    .select()
}

function addAConcert (concertData, db = conn) {
  return db('concerts')
    .insert(concertData)
}

// function getConcertById (id, db = conn) {
//   return db('concerts')
//     .select()
//     .where('id', id)
//     .first()
// }

module.exports = {
  getAllConcerts,
  addAConcert
  // getConcertById
}
