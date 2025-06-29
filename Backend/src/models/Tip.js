const {Schema, model} = require("mongoose");

const tipSchema = new Schema({
    cover:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    images:{
        type: Array,
        required: true
    },
    hashtags:{
        type: Array,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    
  });
  
const Tip = model('Tip', tipSchema, 'tip');

module.exports = Tip
