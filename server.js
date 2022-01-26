const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()
const PORT = process.env.PORT
// const MONGODB_URI = 'mongodb://127.0.0.1:27017/chewBackEnd'



//SETUP Database connection
const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Chew DB Connected!');
})

//SETUP Database Listeners
db.on('error', (error) => { console.log('ERROR: ', error)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

//Middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('HomePage')
})

app.use('/chew', require('./controllers/chewController'))


app.listen(PORT, () => {
  console.log('CHEWWW backend happening on port: ', PORT);
})
//