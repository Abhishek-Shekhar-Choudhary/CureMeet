const prescription = require("../../../models/Prescription");

const getPrescription = async (req, res) => {
    const id=req.params.id;
    const query={appointments_id:id};
    const data = await prescription.findOne(query);
    res.send(data)
}

module.exports = { getPrescription };