const express = require('express');
const { comment } = require('../../api/v1/comment/comment');
const { getComments } = require('../../api/v1/comment/getComments');
const router = express.Router()

router.post("/comments", comment)
router.get('/comments/:tipName', getComments)

module.exports = router;