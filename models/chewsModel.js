const mongoose = require('mongoose')
const { Schema, model} = mongoose

const reservationSchema = new Schema({
  name: String,
  restaurant: String,
  location: String,
  cuisine: String,
  date: {type: Date},
  time: {type: Number},
  email: {type: Number},
  contact: {type: Number},
  guests: {type: Number},
  availability: {type: Number, default: 0},
  favs: {type: Number, default: 0}
})





module.exports = model('Reservation', reservationSchema )
