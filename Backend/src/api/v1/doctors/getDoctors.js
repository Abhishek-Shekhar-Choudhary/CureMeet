const Doctors = require("../../../models/Doctors");

const getDoctors = async (req, res) => {
    const data = await Doctors.find();
    res.send(data)
} 

module.exports = { getDoctors };