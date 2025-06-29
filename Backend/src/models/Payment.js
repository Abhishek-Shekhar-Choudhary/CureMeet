const {Schema, model} = require("mongoose");

const paymentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
        required: true
    },
    billPayDate:{
        type: Date,
        required: true
    },
    appointmentDate:{
        type: String,
        required: true
    },
    appointmentTime:{
        type: String,
        required: true
    },
    treatment:{
        type: String,
        required: true
    },
    appointmentId:{
        type: String,
        required: true
    },
    paidStatus: Boolean,
  });
  
const Payment = model('Payment', paymentSchema, 'payment');

module.exports = Payment