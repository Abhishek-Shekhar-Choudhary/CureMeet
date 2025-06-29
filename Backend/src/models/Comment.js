const {Schema, model} = require("mongoose");

const commentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    tipName:{
        type: String,
        required: true
    },
    comment_id:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    userPhoto:{
        type: String,
        
    },
    date:{
        type: String,
        required: true
    },
  });
  
const Comment = model('Comment', commentSchema, 'comment');

module.exports = Comment