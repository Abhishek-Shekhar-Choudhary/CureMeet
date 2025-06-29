const Comment = require("../../../models/Comment");

const comment = async(req,res) =>{
    const comment = req.body
    const newComment = {
        name:comment.name,
        tipName:comment.tipName,
        comment_id:comment.comment_id,
        email:comment.email,
        comment:comment.comment,
        userPhoto:comment.userPhoto,
        date:comment.date,
    }
    const data = await Comment.create(newComment)
    res.send(data)
}

module.exports = { comment };