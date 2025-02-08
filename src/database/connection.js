const mongoose = require('mongoose');


const mongoConnect = async function(url){
	mongoose.connect(url)
}

module.exports = mongoConnect



