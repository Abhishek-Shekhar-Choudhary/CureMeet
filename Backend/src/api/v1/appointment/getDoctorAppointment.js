const bookAppointment = require("../../../models/BookAppointment")

const getDoctorAppointment = async(req,res)=>{
    const email = req.params.email
    const query = {doctor_email: email,paidStatus:true}
    const data = await bookAppointment.find(query)
   // const data = await bookAppointment.find()
    res.send(data)
}

module.exports = {getDoctorAppointment}