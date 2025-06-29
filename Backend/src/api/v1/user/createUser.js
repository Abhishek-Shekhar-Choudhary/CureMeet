const { usersCollection } = require("../../../db/collectionDB");
const User = require("../../../models/Users");

// register the user details inside database
const createUser = async (req, res) => {
    const userData = req.body
    // console.log('req send',userData);
    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        return res.send({ message: 'user already exists', _id: existingUser._id })
      }

    const data = await User.create(userData)
  //  console.log('response send',data);
    res.send(data)

}

module.exports = { createUser };