const createError = require('http-error');
const { Order } = require('../models');

module.exports.getById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name')
      .populate('products', 'name price');
    if (!order) return next(createError(404, 'Order not found'));
    res.json(order);
  } catch (err) {
    next(err);
  }
};
