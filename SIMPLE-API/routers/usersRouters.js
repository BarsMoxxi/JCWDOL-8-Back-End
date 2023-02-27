const express = require('express')
const Router = express.Router()

// Import Controller
const {usersController} = require('./../contollers');

Router.get('/get', usersController.getUsers);
Router.post('/post', usersController.postUsers)

module.exports = Router;