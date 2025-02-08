const express = require('express');
const mongoose = require('mongoose');
const app = express();
const mongoConnect = require('./src/database/connection')
const authRoute= require('./src/routes/userSignUpRoute')
app.use(express.json())
require('dotenv').config()
mongoConnect(process.env.MONGO_URL).then(() => console.log('Mongodb Connected!')).catch((err) => console.log(`Mongo Error ${err}`))

app.listen(process.env.PORT,() => console.log('app started '))

app.use('/auth',authRoute)
//app.use('/api',userRoute)

