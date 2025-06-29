const bookAppointment = require("../../../models/BookAppointment");

// register the user details inside database
const createBookAppointment = async (req, res) => {
    const appointmentData = req.body
    // console.log('req send',appointmentData.doctor_email);
   // Check if user with the provided email already exists
    const checkAppointmentAvailability = await bookAppointment.findOne({ doctor_email: appointmentData.doctor_email,date:appointmentData.date.slice(0,10),timing_slot:appointmentData.timing_slot});
    if (checkAppointmentAvailability) {
      return res.send({ _id: null });
    }
    const data = await bookAppointment.create(appointmentData)
    // console.log('response send',data);
    res.send(data)
}

module.exports = { createBookAppointment };