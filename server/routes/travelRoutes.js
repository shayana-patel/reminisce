const express = require('express')
const router = express.Router()

const { getAllTravels, addATravel, getTravelById } = require('../db/connection')

router.get('/', (req, res) => {
  getAllTravels()
    .then((travels) => {
      return res.json(travels)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const travel = req.body
  // console.log('travel post route data', travel)
  addATravel(travel)
    .then(idArr => {
      return res.json({ newId: idArr[0] })
    })
    .catch(err => {
      console.log('Server wents oops', err.message)
      res.status(500).json({ err: err.message })
    })
})

router.get('/:id', (req, res) => {
  const id = req.paramas.id
  getTravelById(id)
    .then(travel => {
      return res.json(travel)
    })
    .catch(err => {
      console.log('Server went oops', err.message)
      res.status(500).json({ err: err.message })
    })
})

module.exports = router
