const User = require("../../../models/Users");

const getIndividualUsers = async (req, res) => {
    const email = req.params.email;
    // console.log(email);
    const query={email:email};
    const user= await User.findOne(query);
    // const data = await User.find();
    // console.log(user);
    res.send(user);
}

module.exports = { getIndividualUsers };