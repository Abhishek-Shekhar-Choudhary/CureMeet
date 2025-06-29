const Comment = require("../../../models/Comment")

const getComments = async(req,res)=>{
    const tipName = req.params.tipName
    const query = {tipName: tipName }
    const data = await Comment.find(query)
    res.send(data)
}

module.exports = {getComments}