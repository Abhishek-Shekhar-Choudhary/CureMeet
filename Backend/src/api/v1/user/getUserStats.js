const bookAppointment = require("../../../models/BookAppointment")

const getUserStats = async(req, res) =>{
    const email = req.params.email
    const query = {patient_email: email, paidStatus: true}
    const appointments = await bookAppointment.find(query)
    const totalPaid = appointments.reduce((total, item) => total + item.payment, 0)

    const allAppointment = await bookAppointment.find()
    const totalPay = allAppointment.reduce((total, item) => total + item.payment, 0)

    const stats = {
        totalAppointment : appointments.length,
        totalPaid: totalPaid,
        appointmentPercent : (appointments.length / allAppointment.length) * 100,
        paymentPercent: (totalPaid / totalPay) * 100
    }
    res.send(stats)
}

module.exports = {getUserStats}