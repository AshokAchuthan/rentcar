//automatically load .env files into our project
require('dotenv').config()

//import express
const express =  require('express')

//import cors
const cors=require('cors')

//import db
require('./db/connection')

//import router
const router = require('./routes/router')

//create a server application
const server = express()

//to store port number
const PORT= 5000

//use in server application
server.use(cors())
server.use(express.json())
server.use(router)

//route -localhost://5000
// server.get('/',(req,res)=>{
//     res.status(200).json('Rent car response')
// })

//to the run server application
server.listen(5000,()=>{
    console.log('server listening on the port'+PORT);
})