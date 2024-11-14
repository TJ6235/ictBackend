// import mangoose

const mongoose = require('mongoose');

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('mongoDb connection successfull');
}).catch((err)=>{
    console.log(`connection failed due to ${err}`);
})