// import dotenv
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import router
const router = require('./routes')

// import mongoDB connection file

require('./connection')

// create the server
const ictserver = express()

// to connect with frontend
ictserver.use(cors())

// parse using json()method 
ictserver.use(express.json())

//router
ictserver.use(router)

//  method to export a file/folder from serverside

ictserver.use('/uploads',express.static('./uploads'))


// set the PORT
const PORT = 4000 || process.env.PORT

// server checking the request received at port
ictserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})