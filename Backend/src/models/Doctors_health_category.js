const {Schema,model}= require('mongoose');

const doctorCategorySchema = new Schema({
    category_name: {
      type: String,
      required: true
    },
    category_value: {
      type: String,
      required: true
    }
  },{ versionKey: false })

const DoctorsCategory = model('DoctorsCategory', doctorCategorySchema,'doctor_category');
module.exports=DoctorsCategory