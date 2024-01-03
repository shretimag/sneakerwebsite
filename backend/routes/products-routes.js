const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products-controller');

router.get('/products', productsControllers.allProducts);

router.get('/product/:pid', productsControllers.productById);

module.exports = router;