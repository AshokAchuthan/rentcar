//import mongoose
const mongoose = require('mongoose')

//define schema for car collection
const carSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    make:{
        type:String,
        required:true
    },
    seating:{
        type:Number,
        required:true
    },
    safety:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    transmission:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    km:{
        type:Number,
        required:true
    },
    inta:{
        type:String,
        required:true
    },
    intb:{
        type:String,
        required:true
    },
    intc:{
        type:String,
        required:true
    },
    location1:{
        type:String,
        required:true
    },
})

//model
const cars = new mongoose.model("cars",carSchema)

//export model
module.exports = cars