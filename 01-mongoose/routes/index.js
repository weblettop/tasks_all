const {Router} = require('express')
const usersRouter = require('./users.routes')
const postsRouter = require('./posts.routes')

const router = Router()

router.use('/users',usersRouter)
router.use('/posts', postsRouter)

module.exports = router