const express = require('express');
const { createPrescription } = require('../../api/v1/prescription/createPrescription');
const { getPrescription } = require('../../api/v1/prescription/getPrescription');
const router = express.Router();

router.post("/prescription/addPrescription",createPrescription)
router.get("/prescription/:id", getPrescription)
module.exports = router;