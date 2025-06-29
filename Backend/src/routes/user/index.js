
const express = require('express')
const { createUser } = require('../../api/v1/user/createUser')
const { getUsers, getUser, deleteUser, updateUser } = require('../../api/v1/user/getUser')
const { getIndividualUsers } = require('../../api/v1/user/getIndividualUser')
const { updateIndividualUsers } = require('../../api/v1/user/updateIndividualUser')
const { adminRole } = require('../../api/v1/user/adminRole')
const verifyToken = require('../../middlewares/verifyToken')
const { getUserStats } = require('../../api/v1/user/getUserStats')
const router = express.Router()

router.post('/users/createUser',createUser)
// router.get('/users',  getUsers)
router.get('/users',verifyToken,  getUsers)
router.get('/specificUser/:email',verifyToken, getUser)
router.delete('/deleteUser/:email', verifyToken, deleteUser)
// router.delete('/updateUser/:email', verifyToken, updateUser)
router.get('/users/:email',verifyToken, getIndividualUsers)
router.put('/users/:id', updateIndividualUsers)
router.get("/user/:email", verifyToken, adminRole)
router.get("/user/stats/:email", getUserStats)

module.exports = router