const {validationResult}=require("express-validator");
const Captain=require("../models/captain_model");
const BlackListToken = require("../models/blacklist_model");



const  captainRegister=async(req,res,next)=>{

    const errors=validationResult(req);

    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }
    const {firstname,lastname,email,password,vehicle,contact}=req.body;
    

    if (!firstname || !email || !password || !vehicle || !vehicle.color || !vehicle.capacity || !vehicle.plate || !vehicle.vehicleType) {
        return res.status(400).json({ message: "All fields are required" });
    }
    

    const isAlreadyExist= await Captain.findOne({email});
    if(isAlreadyExist){
        return res.status(404).json({message:"Captain already exists with this email"});
    }
    const hashedPassword= await Captain.hashPassword(password);
    const captain = await Captain.create({
        firstname,
        lastname,
        email,
        contact,
        password: hashedPassword,
        vehicle: { 
            color: vehicle.color,
            capacity: vehicle.capacity,
            plate: vehicle.plate,
            vehicleType: vehicle.vehicleType,
        }
    });
    const token=captain.generateAuthToken();
    res.status(200).json({token,captain,message:"Captain registered Successfully"});
}

const captainLogin=async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty){
        return res.status(401).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    const captain= await Captain.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({message:"email not registered"});
    }
    const isMatched= await captain.comparePassword(password);
    if(!isMatched){
        return res.status(401).json({message:"Invalid email or password"});
    }
  
    const token=captain.generateAuthToken();
    
    res.cookie('token',token);
    res.status(200).json({token,captain,message:"Login Successfull"});

}
const getCapProfile= async(req,res)=>{
   
    return res.status(200).json(req.captain);

}
const capLogout=async(req,res)=>{
    const token=req.cookies.token || req.header.authorization('token').split(' ')[1];
    await BlackListToken.create({token});
    res.clearCookie('token');
    res.status(200).json({message:"Logged Out Sucessfully"});

}


module.exports={captainRegister,captainLogin,getCapProfile,capLogout};