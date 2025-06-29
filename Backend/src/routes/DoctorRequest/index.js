const express = require('express')
const {createDoctorsRequest}=require('../../api/v1/doctors/createDoctorsRequest')
const {getDoctorsRequest}=require('../../api/v1/doctors/getDoctorRequest')
const { getIndividualDoctorRequest } = require('../../api/v1/doctors/getIndividualDoctorRequest')
const { deleteDoctorsRequest } = require('../../api/v1/doctors/deleteDoctorRequest')
const router = express.Router()

router.post('/doctors/createDoctorsRequest',createDoctorsRequest)
router.get('/doctorsRequest',getDoctorsRequest) 
router.get('/doctorRequestDetail/:id',getIndividualDoctorRequest)  
router.delete('/deleteDoctorRequest/:id',deleteDoctorsRequest)

module.exports = router