const express = require('express');
const { applyMiddleware } = require('./middlewares/applyMiddleware');
require('dotenv').config();
const authenticationRoutes = require('./routes/authentication/index');
const userRoutes = require('./routes/user/index');
const doctorRequestRoutes = require('./routes/DoctorRequest/index');
const doctorRoutes = require('./routes/Doctor/index');
const connectDB = require("./db/client")
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/payment/index');
const commentRoutes = require('./routes/comments/index')
const appointmentRoutes = require('./routes/appointment/index')
const prescriptionRoutes=require('./routes/prescription/index');
const cookieParser = require('cookie-parser')
const tipsRoutes = require('./routes/tip/index')
const cors = require("cors");
const clientLink = require('./config/clientLink');


const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
applyMiddleware(app);
app.use(cors({
    origin: [clientLink,"http://localhost:5173", "https://virtual-doc-site.web.app"],
    credentials: true,
}));
app.use(authenticationRoutes)
app.use(userRoutes)
app.use(doctorRequestRoutes)
app.use(doctorRoutes)
app.use(paymentRoutes)
app.use(appointmentRoutes)
app.use(tipsRoutes)
app.use(prescriptionRoutes)
app.use(commentRoutes)

const main = async () => {
    // connecting to database
    // console.log("Connecting to database...");
    await connectDB();
    console.log("Connected to database!", mongoose.connection.name);
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })

}

main();

app.get('/health', (req, res) => {
    res.send('Server is running.')
})

app.all('*', (req, res, next) => {
    const error = new Error(`The requested url is invalid:  [${req.url}] `)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})





