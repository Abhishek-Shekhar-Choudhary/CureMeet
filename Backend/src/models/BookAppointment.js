const {Schema, model} = require("mongoose");

const bookAppointmentSchema = new Schema({
    health_category:{
        type: String,
        required: true
    },
    doctor_email:{
        type: String,
        required: true
    },
    timing_slot:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    patient_email:{
        type: String,
        required: true
    },
    patient_name:{
        type: String,
        required: true
    },
    patient_age:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    payment:{
        type: Number,
        required: true
    },
    transactionId:{
        type: String,
    },
    paidStatus: Boolean,
  });
  
const bookAppointment = model('bookAppointment', bookAppointmentSchema, 'book_Appointment');

module.exports = bookAppointment