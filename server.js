
// ====================================
//              DEPENDENCIES
// ====================================
const express = require('express')
const app = express()
const planetController = require('./controllers/planet')
require('dotenv').config()
const PORT = process.env.PORT
const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL
const morgan = require('morgan')

// ====================================
//         DATABASE CONNECTION
// ====================================
mongoose.connect(DATABASE_URL)
const db = mongoose.connection
db.on('error', (err)=> console.log(err.message + "is mongo not running?"))
db.on('connected', ()=> console.log("Mongo connected!"))

// ====================================
//              MIDDLEWARE
// ====================================
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride('_method'));

// ====================================
//              CONTROLLER
// ====================================
app.use('/exoplanets', planetController);

// ====================================
//              LISTENER
// ====================================
app.listen(PORT, ()=> {
    console.log(`Express is listening on port: ${PORT}`)
})