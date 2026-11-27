const {Router} = require('express')
const postsController = require('../controllers/posts.controller')

const postsRoute = Router()

postsRoute.route('/').get(postsController.getAll).post(postsController.create)

module.exports = postsRoute