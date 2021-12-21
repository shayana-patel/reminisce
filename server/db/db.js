const conn = require('./connection')

function getAllConcerts (db = conn) {
  return db('concerts')
    .select()
}

function addAConcert (concertData, db = conn) {
  return db('concerts')
    .insert(concertData)
}

function getConcertById (id, db = conn) {
  return db('concerts')
    .select()
    .where('id', id)
    .first()
}

function getAllTravels (db = conn) {
  return db('travels')
    .select()
}

function addATravel (travelData, db = conn) {
  return db('travels')
    .insert(travelData)
}

function getTravelById (id, db = conn) {
  return db('travels')
    .select()
    .where('id', id)
    .first()
}

module.exports = {
  getAllConcerts,
  addAConcert,
  getConcertById,
  getAllTravels,
  addATravel,
  getTravelById
}
