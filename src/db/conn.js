const mongoose = require('mongoose');
const URI= 'mongodb+srv://arzancode1:arzancode1@cluster0.n2qjg.mongodb.net/arzancode1?retryWrites=true&w=majority'


const connectDB= async()=>{
 await mongoose.connect (URI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true
}).then(()=>{
    console.log("connection successfull done")
}).catch((error)=>{
    console.log(error);
 }

)}

module.exports=connectDB;
