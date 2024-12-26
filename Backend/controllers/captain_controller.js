const {validationResult}=require("express-validator");
const Captain=require("../models/captain_model");



const  captainRegister=async(req,res,next)=>{

    const errors=validationResult(req);

    if(!errors.isEmpty){
        return res.status(400).json({errors:errors.array()})
    }
    const {firstname,lastname,email,password,vehicle}=req.body;
    console.log(req.body);

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


module.exports={captainRegister}