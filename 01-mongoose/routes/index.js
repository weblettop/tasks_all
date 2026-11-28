const { Router } = require('express');
const usersRouter = require('./users.routes');
const postsRouter = require('./posts.routes');
const productsRouter = require('./products.routes');
const router = Router();

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/products', productsRouter);

module.exports = router;
