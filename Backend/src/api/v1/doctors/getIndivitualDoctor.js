const Doctors = require("../../../models/Doctors");

const getIndividualDoctor = async (req, res) => {
    const email = req.params.email
    const query = { email: email}
    //console.log(query)
    const data = await Doctors.findOne(query)
    //console.log(data)
    res.send(data)
}

module.exports = { getIndividualDoctor };