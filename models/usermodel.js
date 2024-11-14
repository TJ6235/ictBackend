// import mongoose

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    email:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
})

const users = mongoose.model("users",userSchema)

module.exports = users