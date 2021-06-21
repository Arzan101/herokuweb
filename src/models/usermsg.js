const { error } = require("jquery")
const mongoose = require("mongoose")
const validator= require("validator")


const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:3
    },

    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
            throw new Error("Invalid Emailid")
            }
        }
    },
    phone:{
        type:Number,
        require:true,
        min:10
    },
    text:{
        type:String,
        require:true,
        minLength:3
    },
    
})

//our collection 

const User=mongoose.model("User",userSchema);

module.exports=User;