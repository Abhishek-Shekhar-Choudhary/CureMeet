const {Schema,model}= require('mongoose');

const doctorRequestSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    loc: {
      type: String,
      required: true
    },
    education: {
        type: String,
        required: true
      },
    registration: {
        type: String,
        required: true
      },
    health_category: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true
      },
    about: {
        type: String,
        required: true
      },

    password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true,
      },
  },{ versionKey: false })

const DoctorsRequest = model('DoctorsRequest', doctorRequestSchema,'doctorRequest');

module.exports=DoctorsRequest