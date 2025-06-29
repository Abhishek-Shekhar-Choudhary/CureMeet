const bookAppointment = require("../../../models/BookAppointment")

const getAllAppointment = async(req,res)=>{
    const data = await bookAppointment.find()
    res.send(data)
}

module.exports = {getAllAppointment}