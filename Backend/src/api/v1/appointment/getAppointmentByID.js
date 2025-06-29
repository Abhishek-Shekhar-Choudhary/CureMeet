const bookAppointment = require('../../../models/BookAppointment');
const { ObjectId } = require('mongoose').Types;

const getAppointmentByID = async(req,res)=>{
    const id = req.params.id;
    console.log('req coming to server',id);
    const query = { _id: new ObjectId(id) };
    const result = await bookAppointment.findOne(query);
    console.log('response send',result);
    res.send(result)
}

module.exports = {getAppointmentByID}

