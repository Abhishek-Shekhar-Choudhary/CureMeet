const express = require('express');
const { payment } = require('../../api/v1/payment/payment');
const { paymentSuccess } = require('../../api/v1/payment/paymentSuccess');
const { getPayment } = require('../../api/v1/payment/getPayment');
const router = express.Router();

router.post('/payment', payment);
router.post('/payment/success/:tranId', paymentSuccess);
router.get("/payment/:email", getPayment)

module.exports = router;