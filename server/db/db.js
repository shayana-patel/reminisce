const conn = require('./connection')

function getAllConcerts (db = conn) {
  return db('concerts')
    .select()
}

function addConcertData (concertData, db = conn) {
  return db('concerts')
    .insert(concertData)
}

module.exports = {
  getAllConcerts,
  addConcertData
}
