const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/arzan1',
 {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true
 }).then(()=>{
     console.log("connection successfull")
 }).catch((error)=>{
     console.log(error);
 })