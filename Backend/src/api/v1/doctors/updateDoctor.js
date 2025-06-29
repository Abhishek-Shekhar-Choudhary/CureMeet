const Doctors = require("../../../models/Doctors");

const updateDoctor = async (req, res) => {
  const email= req.params.email;
  const updatedDoctor = req.body;
  const query = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      name: updatedDoctor.name,
      email: updatedDoctor.email,
      loc: updatedDoctor.location,
      blood_group: updatedDoctor.blood_group,
      image: updatedDoctor.image,
      education: updatedDoctor.education,
      registration: updatedDoctor.registration,
      health_category: updatedDoctor.health_category,
      about: updatedDoctor.about,
      password: updatedDoctor.password,
      role: updatedDoctor.role,
    },
  };
  const result = await Doctors.updateOne(query, updateDoc, options);
  res.send(result);
};

module.exports = { updateDoctor };
