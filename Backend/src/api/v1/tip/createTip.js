const Tip = require("../../../models/Tip")

const createTip = async(req,res)=>{
    const tipData = req.body
    const data = await Tip.create(tipData)
    res.send(data)
}

module.exports = {createTip}