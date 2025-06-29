const express = require('express');
const { createTip } = require('../../api/v1/tip/createTip');
const { getTip } = require('../../api/v1/tip/getTip');
const router = express.Router()

router.post('/tips', createTip)
router.get('/tips', getTip)

module.exports = router