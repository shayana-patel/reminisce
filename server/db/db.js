const conn = require('./connection')

function getAllConcerts (db = conn) {
  return db('concerts')
    .select()
}

function addAConcert (concertData, db = conn) {
  return db('concerts')
    .insert(concertData)
}

module.exports = {
  getAllConcerts,
  addAConcert
}
