const User=require("../models/user_model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const BlackListToken = require("../models/blacklist_model");
const Captain = require("../models/captain_model");

exports.isAuthenticated=async(req,res,next)=>{

    const token=req.cookies?.token || req.headers.authorization?.split(' ')[1];
  if(!token){
     return res.status(401).json({message:"Unauthorised access"})
  }
  const isBlacklisted=await BlackListToken.findOne({token});
  if(isBlacklisted){
    return res.status(401).json({message:"Unauthorised access"});
  }

  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
    const user=await User.findById(decoded._id);
    req.user=user;
    return next();
  } catch (error) {
    return res.status(401).json({message:"Unauthorized Access!"})
  }

}

exports.isCapAuthenticated=async(req,res,next)=>{
  const token=req.cookies?.token || req.headers.authorization?.split(' ')[1];
  
  if(!token){
    return res.status(401).json({message:"Unauthorised Access"});
  }
  
  const isBlacklisted=await BlackListToken.findOne({token});
  if(isBlacklisted){
    return res.status(401).json({message:"Unauthorised Access"})
  }
  
  try {
    const decoded= jwt.verify(token,process.env.JWT_SECRET_KEY);
    const captain=await Captain.findById({_id:decoded._id});
    req.captain=captain;
    next();
    
  } catch (err) {
    return  res.status(404).json({messagae:err})
  }



}