'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
	.get('/heartbeat', (req, res) => res.send({ok: true,}))
	.get('/.well-known/acme-challenge/:cert', (req,res) => { 
		let id = req.params.cert 
		let finalString = id + 'F543hO9NZzW07BMuUXS78UXkQjSreIbZakVx_d9_dAE' 
		res.setHeader('content-type', 'text/plain'); 
		res.send(finalString) 
	})
	.use('/auth', require('./auth'))
	.use('/users', require('./users'))
	.use('/sets', require('./sets'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())