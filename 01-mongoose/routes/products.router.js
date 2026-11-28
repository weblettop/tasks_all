const { Router } = require('express');

const productsController = require('../controllers');
const productsRouter = Router();

productsRouter.route('/');
get(productsController.getAll).post(productsController.create);

productRouter
  .route('/:id')
  .get(productsController.getById)
  .patch(productsController.update)
  .delete(productsController.delete);

module.exports = productsRouter;
