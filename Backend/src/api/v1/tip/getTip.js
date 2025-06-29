const Tip = require("../../../models/Tip")

const getTip = async(req,res)=>{
    const data = await Tip.find()
    res.send(data)

}

module.exports = { getTip }