const DoctorsRequest = require("../../../models/DoctorsRequest");
const { ObjectId } = require('mongoose').Types;

// register the doctor details inside database
const deleteDoctorsRequest = async (req, res) => {
    const id=req.params.id;
    // console.log('please delete from database',id);
    const query = { _id: new ObjectId(id) };
    const result = await DoctorsRequest.deleteOne(query);
    res.send(result);
    if (result.deletedCount === 1) {
      // console.log("Successfully deleted one document.");
    } else {
      // console.log("No documents matched the query. Deleted 0 documents.");
    }
}

module.exports = { deleteDoctorsRequest };