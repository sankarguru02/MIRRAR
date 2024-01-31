const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

// Variant Schema
const variantSchema = new Schema({
    Vname: { type: String, required: true },
    sku: { type: String, required: true },
    additionalCost: { type: Number, default: 0 },
    stockCount: { type: Number, default: 0 }
});

// Product Schema
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    slug:String,
    variants: [variantSchema] // Array of variants
});

productSchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
