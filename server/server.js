const express = require('express')
const path = require('path')

// const authRoutes = require('./routes/auth')
const concertRoutes = require('./routes/concertRoutes')
const travelRoutes = require('./routes/travelRoutes')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// ROUTES
// server.use('/api/v1', authRoutes)
server.use('/api/v1/concerts', concertRoutes)
server.use('/api/v1/travels', travelRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
