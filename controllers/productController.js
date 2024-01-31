const Product = require('../models/productModel')
const slugify = require('slugify')

exports.createProduct =  async (req, res) => {
    try {
      const newTour = await Product.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    } catch (err) {
        console.error(err);
      res.status(400).json({
        status: 'failed',
        message: ['Invalid', err]
      });
    }
  };

exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({
        status: 'sucess',
        data: {
          products
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'failed',
        message: err
      });
    }
};

exports.getProduct = async (req, res) => {
  try {
    const { name }= req.query;
    console.log(name);
    const product = await Product.findOne({name: name});
    res.status(200).json({
      status: 'sucess',
      data: {
        product
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
}

exports.getProductVariant = async (req, res) => {
  try {
    const { name }= req.query;
    console.log(name);
    const product = await Product.find({"variants.Vname": name});
    res.status(200).json({
      status: 'sucess',
      data: {
        product
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'failed',
      message: err
    });
  }
}

exports.updateProduct = async (req, res) => {
  try {
    const {name} = req.query;
    const updatedProduct = await Product.findOneAndUpdate({name:name},req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedProduct) {
      throw new Error('Document not found');
    }
    res.status(200).json({
      status: 'success',
      data: {
        updatedProduct
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: ['Invalid', err]
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const {name} = req.query;
    const deleted = await Product.deleteOne({name: name});
    console.log(deleted);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Invalid'
    });
  }
};

 