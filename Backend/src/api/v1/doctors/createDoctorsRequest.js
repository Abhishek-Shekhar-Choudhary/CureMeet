const DoctorsRequest = require("../../../models/DoctorsRequest");

// register the doctor details inside database
const createDoctorsRequest = async (req, res) => {
    const DoctorData = req.body
    // Check if user with the provided email already exists
    const existingDoctor = await DoctorsRequest.findOne({ email: DoctorData.email });
    if (existingDoctor) {
        return res.send({ message: 'Doctor already exists', _id: null })
      }
    const data = await DoctorsRequest.create(DoctorData)
    res.send(data)
}

module.exports = { createDoctorsRequest };