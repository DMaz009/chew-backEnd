const express = require('express')
const reservations = express.Router()
const Chew = require('../models/chewsModel')

//Get Index route. List of restaurants
reservations.get('/', (req, res) => {
  Chew.find({}, (error, foundReservations) => {
    if(error) {
      res.status(400).json({ error: error.message})
    } else {
      res.status(200).json(foundReservations)
    }
  })
})

//POST route to create a reservation
reservations.post('/', (req, res) => {
  Chew.create(req.body, (error, createdReservation) => {
    if(error) {
      res.status(400).json({ error: error.message})
    } else {
      res.status(200).json(createdReservation)
    }
  })
})

//DELETE route to remove a reseration
reservations.delete('/:id', (req, res) => {
  Chew.findByIdAndDelete(req.params.id, (error, deletedReservation) => {
    if(error) {
      res.status(400).json({ error: error.message})
    } else if (deletedReservation === null) {
      res.status(404).json({ message: 'Reservation Not Found'})
    } else {
      res.status(200).json({ message: 'Reservation for ' +
        deletedReservation.name + ' deleted successfully' })
    }
  })
})

//UPDATE Route to edit/change a reservation
reservations.put('/:id', (req, res) => {
  Chew.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (error, updatedReservation) => {
    if(error) {
      res.status(400).json({ error: message })
    } else {
      res.status(200).json({
        message: `Reservation ${updatedReservation.id} updated successfully`,
        data: updatedReservation
      })
    }
  })
})

//PATCH Route to increment number of favs
reservations.patch('/addfavs/:id', (req, res) => {
  Chew.findByIdAndUpdate(req.params.id, { $inc: {favs: 1}},
  {new:true}, (error, updatedReservation) => {
    if(error) {
      res.status(400).json({ error: error.message})
    } else {
      res.status(200).json({ data: updatedReservation})
    }
  })
})




module.exports = reservations
//
