const app = require('APP'), {env} = app
const debug = require('debug')(`${app.name}:set`)

const db = require('APP/db')
const Set = db.model('sets')
const Video = db.model('videos')
const User = db.model('users')

//These routes will eventually need to include the user
module.exports = require('express').Router()
  .get('/user/:userId', (req, res, next) => {
    // gets all sets
    Set.findAll({
      where: {user_id: req.params.userId}
    })
    .then((foundSets) => {
      res.json(foundSets)
    })
    .catch(next)
  })
  .get('/:setId', (req, res, next) => {
    // get single set
    Set.findOne({
      where: { id: req.params.setId },
      include: [Video]
      })
    .then((foundSet) => {
      res.json([foundSet])
    })
    .catch(next)
  })
  .get('/', (req, res, next) => {
    // get all sets
    Set.findAll().then(allSets => res.json(allSets)).catch(next)
  })
  .post('/', (req, res, next) => {
    Set.create(req.body, { include: [ Video ]})
      .then((createdSet) => {
        res.status(201).json(createdSet)
      })
      .catch(next)
  })
