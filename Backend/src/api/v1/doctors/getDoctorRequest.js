const DoctorsRequest = require("../../../models/DoctorsRequest");

const getDoctorsRequest = async (req, res) => {
    const data = await DoctorsRequest.find();
    res.send(data)
}

module.exports = { getDoctorsRequest };