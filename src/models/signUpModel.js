const mongoose = require('mongoose')

const signUpSchema = mongoose.Schema({
	userName : {
		type : String,
		required : true
	},

	email : {
		type : String,
		unique : true,
		required : true
	},

	password : {
		type: String,
		required : true
	}
}, {
	timestamps : true
})

const User = mongoose.model('User', signUpSchema);


module.exports = User
