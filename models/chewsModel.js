const mongoose = require('mongoose')
const { Schema, model} = mongoose

const reservationSchema = new Schema({
  name: String
})





module.exports = model('Reservation', reservationSchema )
