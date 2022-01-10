const conn = require('./connection')

function getAllTravels (db = conn) {
  return db('travels')
    .select()
}

function addATravel (travelData, db = conn) {
  return db('travels')
    .insert(travelData)
}

// function getTravelById (id, db = conn) {
//   return db('travels')
//     .select()
//     .where('id', id)
//     .first()
// }

module.exports = {
  getAllTravels,
  addATravel
  // getTravelById
}
