const Payment = require("../../../models/Payment")

const getPayment = async(req, res)=>{
    const email = req.params.email
    const query = {email: email}
    const data = await Payment.find(query)
    res.send(data)
}

module.exports = {getPayment}