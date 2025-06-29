const DoctorsRequest = require("../../../models/DoctorsRequest");
const { ObjectId } = require('mongoose').Types;

const getIndividualDoctorRequest = async (req, res) => {
    const id=req.params.id;
    const query={_id:new ObjectId(id)};
    const data = await DoctorsRequest.findOne(query);
    res.send(data)
}

module.exports = { getIndividualDoctorRequest };