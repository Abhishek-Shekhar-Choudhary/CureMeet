const Doctors = require("../../../models/Doctors")

const doctorRole = async(req,res)=>{
    const email = req.params.email
    const query = { email: email}
    const data = await Doctors.findOne(query)
    let  doctor = false
    if (data){
        doctor = data?.role === "doctor"
    }
    res.send({doctor})
}

module.exports = { doctorRole}