const User = require("../../../models/Users")

const adminRole = async(req,res)=>{
    const email = req.params.email
    const query = { email: email}
    const data = await User.findOne(query)
    let  admin = false
    if (data){
        admin = data?.role === "admin"
    }
    res.send({admin})
}

module.exports = { adminRole }