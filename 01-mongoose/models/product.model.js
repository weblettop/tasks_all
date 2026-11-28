const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLingth: 50,
      trim: true,
    },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['phones', 'laptop', 'tablets'],
      inStock: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);
module.exports = model('product', productSchema);
