const express = require('express')
const { getAllUsers } = require('../controllers/user.controllers')

const usersRouter = express.Router()

// http://localhost:4000/api/v1/users/
usersRouter.route('/')
  .get(getAllUsers)
  .post(() => console.log('post'))

// http://localhost:4000/api/v1/users/:id
usersRouter.route('/:id')
  .get(() => console.log('get Karla'))
  .patch(() => console.log('patch'))
  .delete(() => console.log('delete'))

module.exports = {
  usersRouter
}