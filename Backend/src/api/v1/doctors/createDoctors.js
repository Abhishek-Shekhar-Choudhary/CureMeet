const Doctors = require("../../../models/Doctors");

// register the doctor details inside database
const createDoctors = async (req, res) => {
    const DoctorData = req.body
    // Check if user with the provided email already exists
    const existingDoctor = await Doctors.findOne({ email: DoctorData.email });
    if (existingDoctor) {
        return res.send({ message: 'Doctor already exists', _id: null })
      }
    const data = await Doctors.create(DoctorData)
    res.send(data)
}

module.exports = { createDoctors };