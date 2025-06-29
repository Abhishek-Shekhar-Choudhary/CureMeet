const bookAppointment = require("../../../models/BookAppointment")

const getAppointment = async(req,res)=>{
    const email = req.params.email
    const query = {patient_email: email, paidStatus: true}
    const data = await bookAppointment.find(query)
    res.send(data)
}

module.exports = {getAppointment}