//logic -resloving apis
//get all cars

//import car collection

const cars = require('../models/carSchema')

exports.getallcars= async (req,res)=>{
    //logic
    try{
        //get all cars from cars collection in mongodb
        const allcars = await cars.find()
        
        res.status(200).json(allcars)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//view car

exports.viewcar=async (req,res)=>{
    //getid
    const id = req.params.id
    //logic
    try{
        //chek id in mongodb
        const car = await cars.findOne({id})
        if(car){
            res.status(200).json(car)
        }
        else{
            res.status(404).json("item not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
    
    
}