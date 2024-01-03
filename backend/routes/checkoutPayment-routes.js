const express = require('express');
const router = express.Router();
const checkoutPaymentControllers= require('../controllers/checkoutPayment-controllers')

router.post("/order", checkoutPaymentControllers.MakeOrder);  

router.post("/order/validate", checkoutPaymentControllers.ValidateOrderPayment);

module.exports =router;