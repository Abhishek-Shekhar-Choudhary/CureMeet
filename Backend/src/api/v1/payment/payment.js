const Payment = require("../../../models/Payment");
const { Types } = require('mongoose');
const tran_id = new Types.ObjectId().toString();
require('dotenv').config();
const SSLCommerzPayment = require("sslcommerz-lts");
const serverLink = require("../../../config/serverLink");
const store_id = process.env.Store_id;
const store_passwd = process.env.Store_passwd;
const is_live = false;

const payment = async (req, res) => {
  const cart = req.body  
  const data = {
    total_amount: cart?.price,
    currency: "BDT",
    tran_id: tran_id,
    //success_url: `http://localhost:5000/payment/success/${tran_id}`,
    success_url: `https://virtual-doc-backend.vercel.app/payment/success/${tran_id}`,
    fail_url: `https://virtual-doc-backend.vercel.app/payment/fail/${tran_id}`,
    cancel_url: `https://virtual-doc-backend.vercel.app/payment/cancel/${tran_id}`,
    ipn_url: `https://virtual-doc-backend.vercel.app/ipn`,
    shipping_method: "Courier",
    product_name: "medicine",
    product_category: "medicine",
    product_profile: "general",
    cus_name: cart?.name,
    cus_email: cart?.email,
    cus_add1: cart?.address,
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: cart?.phone,
    cus_fax: cart?.phone,
    ship_name: cart?.name,
    ship_add1: "Dhaka",
    date: cart?.date,
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then(async (apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    const newPayment = new Payment({
      name: cart.name,
      email: cart.email,
      address: cart.address,
      phone: cart.phone,
      price: cart.price,
      transactionId: tran_id,
      billPayDate: cart.billPayDate,
      appointmentDate: cart.appointmentDate,
      appointmentTime: cart.appointmentTime,
      treatment: cart.treatment,
      appointmentId: cart.appointmentId,
      paidStatus: false,
    });
    //console.log(newPayment)
    console.log("Redirecting to: ", GatewayPageURL);
    const data = await Payment.create(newPayment)
    // res.send({ url: GatewayPageURL, appointmentId: newPayment.appointmentId });
  });
}

module.exports = { payment };