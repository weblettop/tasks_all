const {Roputer} = require('express')
const usersController = require('../controllers/users.controller')

const usersRouter = Router()

usersRouter.route('/').get(usersController.getAll).post(usersController.create)
usersRouter.route('/:id')
.get(usersController.getById)
.patch(usersController.update)
.delete(usersController.remove)

usersRouter.route('/id:posts', usersController.getUserPosts)

module.exports = usersRouter


