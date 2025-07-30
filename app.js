const express = require('express');
//sdjfadjl'H;H;FJ;FJ;JA;F;KJ;FJ
const mongoose = require('mongoose');
const app = express();
//aaasdfsa
const mongoConnect = require('./src/database/connection')
const authRoute= require('./src/routes/userSignUpRoute')
const userRoute = require('./src/routes/userDetailsRoute')
app.use(express.json())
require('dotenv').config()
mongoConnect(process.env.MONGO_URL).then(() => console.log('Mongodb Connected!')).catch((err) => console.log(`Error while Connecting MongoDb , Error:${err}`))

app.listen(process.env.PORT,() => console.log('app started '))

app.use('/auth',authRoute)
app.use('/api',userRoute)

