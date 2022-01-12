const express = require('express')
const router = express.Router()

const { getAllConcerts, addAConcert } = require('../db/concerts')

// GET /api/v1/concerts
router.get('/', (req, res) => {
  getAllConcerts()
    .then((concerts) => {
      return res.json(concerts)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// POST /api/v1/concerts
router.post('/', (req, res) => {
  const concert = req.body
  // console.log('concert post route data', concert)
  addAConcert(concert)
    .then(idArr => {
      return res.json({ newId: idArr[0] })
    })
    .catch(err => {
      console.log('Server went oops', err.message)
      res.status(500).json({ err: err.message })
    })
})

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   getConcertById(id)
//     .then(concert => {
//       return res.json(concert)
//     })
//     .catch(err => {
//       console.log('Server went oops', err.message)
//       res.status(500).json({ err: err.message })
//     })
// })

module.exports = router
