const express = require('express')
const loginController = require('../controller/loginController')
const signUpController = require('../controller/signUpController')
const router = express.Router()

router.post('/signup',signUpController.userSignUp)
router.post('/login',loginController.userLogin)


module.exports = router
