'use strict'

const app = require('APP')
const debug = require('debug')(`${app.name}:set`)
const Sequelize = require('sequelize')
const db = require('APP/db')

const Set = db.define('sets', {
  name: Sequelize.STRING,
  leftPlaylist: Sequelize.ARRAY(Sequelize.STRING),
  rightPlaylist: Sequelize.ARRAY(Sequelize.STRING)
})

module.exports = Set