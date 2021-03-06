// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const notes = require('./controllers/notes_controller');
const userbinders = require('./controllers/userbinders_controller');
const usertable = require('./controllers/usertable_controller');
const cors = require("cors");

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Binder App'
    })
})

// LOGIN
app.post('/login', (req, res) => {
    // inputUserName, inputPassword
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})

// CONTROLLERS 
const notesController = require('./controllers/notes_controller')
app.use('/notes', notesController)

const userbindersController = require('./controllers/userbinders_controller')
app.use('/userbinders', userbindersController)

const usertableController = require('./controllers/usertable_controller')
app.use('/usertables', usertableController)
