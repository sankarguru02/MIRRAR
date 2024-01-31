const express = require('express');
const productController = require('./../controllers/productController');

const router = express.Router();

router
  .route('/create')
  .post(productController.createProduct)

router.route('/').get(productController.getAllProducts)

router.route('/product')
    .get(productController.getProduct)

router.route('/variant')
    .get(productController.getProductVariant)

router.route('/edit')
    .patch(productController.updateProduct)
  
router.route('/delete')
    .delete(productController.deleteProduct)


module.exports = router;