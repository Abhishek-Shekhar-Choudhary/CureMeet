const bookAppointment = require("../../../models/BookAppointment")

const getDoctorStats = async(req, res) =>{
    const email = req.params.email
    const query = {doctor_email: email,paidStatus:true}
    const appointments = await bookAppointment.find(query)
    const totalIncome = appointments.reduce((total, item) => total + item.payment, 0)

    const allAppointment = await bookAppointment.find()
    const totalPayment = allAppointment.reduce((total, item) => total + item.payment, 0)

    const stats = {
        totalAppointment : appointments.length,
        totalIncome: totalIncome,
        appointmentPercent : (appointments.length / allAppointment.length) * 100,
        paymentPercent: (totalIncome / totalPayment) * 100
    }
    res.send(stats)
}

module.exports = {getDoctorStats}