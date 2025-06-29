const DoctorsCategory = require("../../../models/Doctors_health_category");

const getDoctorsCategory = async (req, res) => {
    const data = await DoctorsCategory.find();
    res.send(data)
}
 
module.exports = { getDoctorsCategory };