const Doctors = require('../../../models/Doctors');
const { ObjectId } = require('mongoose').Types;

const deleteDoctor = async(req, res)=>{
    const id=req.params.id;
    // console.log(id)
    const query = { _id: new ObjectId(id) };
  const result = await Doctors.deleteOne(query);
  res.send(result);
    if (result.deletedCount === 1) {
      res.send(result);
      // console.log("Successfully deleted one document.");
    } else {
      res.status(404).send({message: 'Error'})
      // console.log("No documents matched the query. Deleted 0 documents.");
    }
}

module.exports = { deleteDoctor }