const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])



function getAllConcerts (db = connection) {
  return db('concerts').select()
}

function addConcertData (concertData, db = connection) {
  return db('concerts').insert({
    artist: concertData.artist,
    location: concertData.location,
    date: concertData.date,
    comments: concertData.comments
  })
}

module.exports = {
  getAllConcerts,
  addConcertData
}
