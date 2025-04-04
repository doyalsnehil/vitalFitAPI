const express = require('express')
const router = express.Router()
const {sendErrorResponse} = require('../utils/errorHandler')
const userDetailsModel = /** @type {mongoose.Model} */ (require("../models/userDetailsModel"));
const mongoose = require('mongoose');

exports.addUserDetailas= async function (req,res) {
	const body = req.body
	
	if(body.dateofBirth || body.userName){
		try
		{

				const result = await userDetailsModel.findOne({userName : body.userName})
			if(!result) {
				const data = await userDetailsModel.create({

					userName : body.UserName,
					dateofBirth : body.DateofBirth,
					mobileNumber : body.MobileNumber

				})
	
				res.status(200).json({status : "User Created"})
					}
			
			else sendErrorResponse(res,200,'userName already exists')
				}
				catch(err){
					console.log(err)
					sendErrorResponse(res,500,'Error while Adding Data, Likely a Server Error!!')
				}

	}
	else  {
		if (!body.dateofBith){
			sendErrorResponse(res,400,'Date of Birth is required')
		}
		if(!body.userName){

			sendErrorResponse(res,400,'User Name is required')
		}
	}

}

exports.getUserDetails = async function (req,res) {
	const ID = req.params.id
	if(ID) {

		try { 

			const result = await userDetailsModel.findById(ID)

			res.status(200).json({result : result});
		}
		catch(err) { 
			console.log(err)
			sendErrorResponse(res,500,'error while Fetching userData')
		}
	}
	else sendErrorResponse(res,400,'ID is Missing ');
		
}

exports.updateUserDetails = async function (req,res) {

	const ID = req.params.id
	const body = req.body
	let result 

	if (ID) {
		try {
			result = await userDetailsModel.findByIdAndUpdate(ID,{
				userName : body.UserName,
				dateofBirth : body.DateofBirth,
				gender : body.Gender,

			}).then(() => {

				res.status(200).json({status : 'User Update ',result : result})
			})

		}
		catch(err){
			console.log(err)
			sendErrorResponse(res,500,'Error while Updating data')
		}
	}
	else sendErrorResponse(res,'400','Id is Missing')

}

