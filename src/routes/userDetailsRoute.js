const express = require('express')

const userDetails = require('../controller/userDetailsController')
const {verifyToken} = require('../middlewares/authMiddleware')
const router = express.Router();


router.post('/userDetails',verifyToken,userDetails.addUserDetailas)
router.get('/userDetails/:id',verifyToken,userDetails.getUserDetails)
router.post('/updateUserDetails/:id',verifyToken,userDetails.updateUserDetails)

module.exports = router

