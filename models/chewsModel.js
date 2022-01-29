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
  availability: {type: Number},
  favs: {type: Number}
})

const Chew = model('Chew', reservationSchema)


module.exports = Chew
