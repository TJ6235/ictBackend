const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
     name:{
        required:true,
        type:String
     },
     price:{
        required:true,
        type:String
     },
     fileImage:{
        required:true,
        type:String
     },
    
})


const projects = mongoose.model("file",fileSchema)

module.exports = projects