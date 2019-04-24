const express = require('express')
const multerConfig = require('./config/multer')
const upload = require('multer')(multerConfig)

const UserController = require('./app/controllers/UserController')

const routes = express.Router()

routes.get('/signup', UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

module.exports = routes
