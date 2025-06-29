const Doctors = require("../../../models/Doctors");
const { ObjectId } = require('mongoose').Types;

const getDoctorDetails = async(req, res) =>{
    const id = req.params.id
    const query={_id:new ObjectId(id)};
    const data = await Doctors.findOne(query)
    res.send(data)
}

module.exports = { getDoctorDetails }