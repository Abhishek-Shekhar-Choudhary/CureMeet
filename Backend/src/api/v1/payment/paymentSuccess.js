const clientLink = require("../../../config/clientLink");
// const Appointment = require("../../../models/Appointment");
const bookAppointment = require("../../../models/BookAppointment");
const Payment = require("../../../models/Payment");

const paymentSuccess = async (req, res) => {
  const tranId = req.params.tranId;
  const item = await Payment.findOne({ transactionId: tranId })
  const appointmentId = item.appointmentId
  //  console.log(item, appointmentId)
  const result = await Payment.updateOne(
    { transactionId: tranId },
    { $set: { paidStatus: true } }
  );

  // console.log("Update Result:", result);

  if (result.modifiedCount > 0) {
    const appointmentResult = await bookAppointment.updateOne(
      { _id: appointmentId },
      {
        $set: {
          paidStatus: true,
          transactionId: tranId
        }
      }
    );

    // console.log("Appointment Update Result:", appointmentResult);
    
    res.redirect(`https://virtual-doc-site.web.app/payment/success/${tranId}`);
    //res.redirect(`http://localhost:5173/payment/success/${tranId}`);
  }
};

module.exports = { paymentSuccess };
