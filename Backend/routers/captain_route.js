const express=require('express');
const { captainRegister } = require('../controllers/captain_controller');
const {body}=require("express-validator")



const router=express.Router();

router.route('/register').post([
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:8}).withMessage("password must be of at least 8 characters"),
    body("firstname").isLength({min:3}).withMessage("firstname must have at least 3 characters"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be of at least 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate must be of at least 3 characters"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid car type"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be geater than 1")

],captainRegister)





module.exports=router;