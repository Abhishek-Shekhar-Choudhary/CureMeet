
const User = require("../../../models/Users");


const getUsers = async (req, res) => {
    const query = { role: "user"}
    const data = await User.find(query);
    res.send(data)
    // console.log(data)
}

const getUser = async (req, res) => {
    const query = { email: req?.params?.email }
    // console.log(query)
    const data = await User.find(query);
    res.send(data)
}

const deleteUser = async (req, res) => {
    const query = { email: req?.params?.email }
    // console.log(query)
    const data = await User.deleteOne(query);
    res.send(data)
}

const updateUser = async (req, res) => {
  const email= req.params.email;
  const updatedUser = req.body;
  const query = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      name: updatedUser.name,
      email: updatedUser.email,
      loc: updatedUser.location,
      blood_group: updatedUser.blood_group,
      image: updatedUser.image,
      password: updatedUser.password,
      role: updatedUser.role,
    },
  };
  const result = await Doctors.updateOne(query, updateDoc, options);
  res.send(result);
};

module.exports = { getUsers, getUser, deleteUser, updateUser };