const express = require('express')
const authMiddleware = require('./app/middlewares/auth')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.get('/teste', authMiddleware, (req, res) => {
  res.json({ ok: true })
})

module.exports = routes
