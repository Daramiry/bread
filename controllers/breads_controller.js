const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .then(ojundBread => {
      res.render('show', {
        bread: foundBread
      })
    })
})

breads.post('/', (req, res) => {
  if(!req.body.image) {
    req.body.image = undefined
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false 
  }
  Bread.create(req.body)
  res.redirect('/breads')
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex])
})


module.exports = breads
