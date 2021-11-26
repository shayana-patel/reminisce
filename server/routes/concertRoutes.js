const express = require('express')
const router = express.Router()

const db = require('../db/connection')

router.get('/', (req, res) => {
  db.getAllConcerts()
    .then((concerts) => {
      return res.json(concerts)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
