const express = require('express')
const planetRouter = express.Router()
const Planet = require('../models/planets')

// ====================================
//              ROUTES
// ====================================
///////////// INDEX ROUTE ////////////////
planetRouter.get('/', (req, res) => {
    Planet.find({}, (error, allPlanets) => {
        res.render('index.ejs', {
            planets: allPlanets,
        })
    })
})
///////////// NEW ROUTE ////////////////
planetRouter.get('/new', (req, res) => {
    res.render('new.ejs')
})
///////////// DELETE ROUTE ////////////////
planetRouter.delete('/:id', (req, res)=>{
    Planet.findByIdAndRemove(req.params.id, (error, deletion)=>{
        res.redirect('/exoplanets')
    })
})
///////////// UPDATE ROUTE ////////////////

///////////// CREATE ROUTE ////////////////
planetRouter.post('/', (req, res) => {
    if (req.body.water === "on") {
        req.body.water = true
    } else {
        req.body.water = false
    }
    if (req.body.habitable === "on") {
        req.body.habitable = true
    } else {
        req.body.habitable = false
    }
    Planet.create(req.body, (error, newPlanet) => {
        res.redirect('/exoplanets')
    })
})
///////////// EDIT ROUTE ////////////////

///////////// SHOW ROUTE ////////////////
planetRouter.get('/:id', (req, res) => {
    Planet.findById(req.params.id, (error, foundPlanet) => {
        res.render('show.ejs', {
            planet: foundPlanet,
        })
    })
})

// EXPORT //
module.exports = planetRouter