const express = require('express');
const mongoose = require('mongoose');

const app = express();
const mongoConnect = require('./src/database/connection')
const authRoute= require('./src/routes/userSignUpRoute')
const userRoute = require('./src/routes/userDetailsRoute')
app.use(express.json())
require('dotenv').config()
mongoConnect(process.env.MONGO_URL).then(() => console.log('Mongodb Connected!')).catch((err) => console.log(`Error while Connecting MongoDb , Error:${err}`))
//line no 10 par change
app.listen(process.env.PORT,() => console.log('app started '))

app.use('/auth',authRoute)
app.use('/api',userRoute)

