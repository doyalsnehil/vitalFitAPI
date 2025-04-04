const mongoose = require('mongoose') 

const userDetailsSchema = new mongoose.Schema({
	userName : {
		type : String,
		unique : true,
		required : true
	},
		
	dateofBirth : { 
		type: Date,
		required : true,
	},
	mobileNumber : { 
		type : Number
	},
	gender : {
		type : String,
		required : true
	}

})

const userDetailsModel = mongoose.model('userDetails', userDetailsSchema)
module.exports = userDetailsModel
