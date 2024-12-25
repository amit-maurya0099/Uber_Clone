const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const {register,login,getUserProfile, logout}=require("../controllers/user_controller");
const { isAuthenticated } = require('../middlewares/auth_middleware');

router.route('/register').post([
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:8}).withMessage("password must be of at least 8 characters"),
    body("firstname").isLength({min:3}).withMessage("firstname must have at least 3 characters")
],register)

router.route("/login").post([
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength().withMessage("password must have at least 8 characters")
],login)

router.route("/profile").get(isAuthenticated,getUserProfile);
router.route("/logout").get(isAuthenticated,logout);



module.exports=router;