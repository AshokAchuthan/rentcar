

//import express
const express = require('express')

//import  carcontroller
const carController = require('../controllers/carController')

const userController = require('../controllers/userController')
const bookController = require('../controllers/bookController')

//using express create an object for router class inorder to setup path
const router = new express.Router()

//resolving client request
//api - getall cars request
router.get('/cars/all-cars',carController.getallcars)

//api call for particular product
router.get('/cars/view-car/:id',carController.viewcar)

//api call for register
router.post('/user/register',userController.register)

//api call for login
router.post('/user/login',userController.login)

//api call for booking
router.post('/mybook/:username/:id',bookController.addTobook)

router.get('/booking/:userName',bookController.getbooking)
router.delete('/cancel/:userName/:id/:checkindate/:checkoutdate', bookController.cancelbooking);

module.exports= router