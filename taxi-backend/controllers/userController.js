const Users=require('../models/userSchema')


exports.register=async(req,res)=>{

    const {username,phonenumber,password}=req.body

    try{
        const user=await Users.findOne({username})
        if(user){
            res.status(403).json("Username already exists")
        }
        else{
            const newUser=new Users({username,phonenumber,password})

            await newUser.save()
            res.status(200).json("Registered Successfully")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
exports.login=async(req,res)=>{
    const {username,password}=req.body
    try{
        const loginuser=await Users.findOne({username,password})
        if(loginuser){
            res.status(200).json({message:"Succesfully Logedin",username})
        }
        else{
            res.status(401).json("Invalid data")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}