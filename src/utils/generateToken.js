const jwt = require('jsonwebtoken')

require('dotenv').config()

const generateToken = function (ID,email )
{
	try {
	const token = jwt.sign({userID : ID, Email :email},
		process.env.JWT_SECRET,
		{ expiresIn : "1h" }
	)

	return token;

	}
	catch(err){
		console.log('Error while generating jwt',err)
	}
}

module.exports = {
	generateToken
};
