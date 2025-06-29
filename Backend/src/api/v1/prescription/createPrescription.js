const prescription = require("../../../models/Prescription");

// register the doctor details inside database
const createPrescription = async (req, res) => {
    const createPrescriptionData = req.body
    // console.log('req from client',createPrescriptionData);
    const data = await prescription.create(createPrescriptionData)
    // console.log('response from data base',data);
    res.send(data)
}

module.exports = { createPrescription };