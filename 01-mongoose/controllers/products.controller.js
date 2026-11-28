const createError = require('http-error');
const { Product } = require('../models');

module.exports.getAll = async (req, res, next) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const filter = {};
    if (category) {
      filter.category = category;
    }
    if ((minPrice, maxPrice)) {
      filter.price();
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).sort({ price: 1 });

    res.json(products);
  } catch (err) {
    next(err);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
module.exports.getById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(createError(404, 'Product not found'));
    }
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const product = await findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return next(createErrror(404, 'Not found product'));
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
};

module.exports.remode = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req, params.id);
    if (!product) return next(createError(404, 'Not found product'));
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
