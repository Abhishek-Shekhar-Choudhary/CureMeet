const User = require("../../../models/Users");
const { ObjectId } = require('mongoose').Types;

const updateIndividualUsers = async (req, res) => {
    const id=req.params.id;
    const updatedUsers=req.body;
    const query = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
    $set: {
      name:updatedUsers.name,
      email:updatedUsers.email,
      loc:updatedUsers.location,
      blood_group:updatedUsers.blood_group,
      
          }
    }
    const result = await User.updateOne(query,updateDoc,options);
    res.send(result);
  }

module.exports = { updateIndividualUsers };

