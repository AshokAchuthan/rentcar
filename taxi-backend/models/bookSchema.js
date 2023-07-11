//import mongoose
const mongoose = require('mongoose')

//define schema for car collection
const bookSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        
    },
  
    email:{
        type:String,
        required:true
    },
    checkindate:{
        type:String,
        required:true
    },
    checkoutdate:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },
    totalamount:{
        type:Number,
        required:true
    },
    carid:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
   
})

//model
const books = new mongoose.model("books",bookSchema)

//export model
module.exports = books