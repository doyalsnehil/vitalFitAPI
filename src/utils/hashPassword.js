const bcrypt = require('bcryptjs')


const hashPassword = async (password) => {
	 
	const salt = 10;

	return await bcrypt.hash(password,salt);
	 
}

const comparePassword = async (password) => {

	return null

}

module.exports = {
	hashPassword,
	comparePassword
}
