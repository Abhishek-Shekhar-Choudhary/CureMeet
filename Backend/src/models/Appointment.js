const {Schema, model} = require("mongoose");

const appointmentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    treatment:{
        type: String,
        required: true
    },
    pay:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
    },
    paidStatus: Boolean,
  });
  
const Appointment = model('Appointment', appointmentSchema, 'appointment');

module.exports = Appointment