const {Schema, model} = require("mongoose");
//"anything goes" SchemaType, its flexibility comes at a trade-off of it being harder to maintain. Mixed is available either through Schema.Types.Mixed or by passing an empty object literal.
const prescriptionSchema = new Schema({ any: Schema.Types.Mixed }, { strict: false });
  
const prescription = model('prescription', prescriptionSchema, 'prescription');

module.exports = prescription   