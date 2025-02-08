const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();

const {sendErrorResponse}= require('../utils/errorHandler')
const {hashPassword} = require('../utils/hashPassword')

const User = /** @type {mongoose.Model} */ (require("../models/signUpModel"));

exports.userSignUp = async function(req, res) {
 
	const body = req.body
	if(!body.userName ||
		!body.email ||
		!body.password
	)
	{

		res.status(400).json({error : "all fieds are required"});
	}

	else {
	
		try {

		const Existinguser = await User.findOne({email: body.email});
	if(Existinguser)
		{
			return res.status(422).json({error: "Email Already Exists"})
		}

		else {

			const hash = await hashPassword(body.password)
			

			const user = User.create({
				userName: body.userName,
				email : body.email,
				password : hash

			})

			return res.status(201).json({Success : "User Created"});


		}
		}

		catch(err){
			console.log(err)
			return sendErrorResponse(res,500, 'Error While Signup, likely a Server Error');
		}
	

	}

}
