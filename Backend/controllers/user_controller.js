const User=require('../models/user_model')
const {validationResult}=require("express-validator");
const BlackListToken=require('../models/blacklist_model')

const register=async(req,res,next)=>{

   
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {firstname,lastname, email,password,phone}=req.body;
    
    
    const hashedPassword= await User.hashPassword(password);
 
    try {
    const userExist=await User.findOne({email});
   
    if(userExist){
        return res.status(400).json({message:"user already registered with this email"})
    }
        const user=await User.create({
            firstname,
            lastname,
            email,
            password:hashedPassword,
            phone

        })
       
       

        const token=user.generateAuthToken();
  
        res.status(200).json({token,user,message:"User Registered successfully"})
        
    } catch (error) {
        return res.status(404).json({message:error.message})
        
    }
}

const login=async(req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
     const {email,password}=req.body;
     try {

        const user=await User.findOne({email}).select('+password');
        if(!user){
            return res.status(401).json("Invalid email or password");
        }
        
     const isPasswordMatched=await user.comparePassword(password);
        if(!isPasswordMatched){
            return res.status(401).json("Invalid email or password");
        }
        const token=user.generateAuthToken();
        res.cookie('token',token);
        return res.status(200).json({token,user,message:"login successfull!"})
        
     } catch (error) {
        return res.status(404).json({message:error.message})
     }

}
 const getUserProfile=async (req,res,next)=>{

    return res.status(200).json(req.user);

 }

 const logout=async(req,res,next)=>{
      
      res.clearCookie('token');
      const token= req.cookies.token || req.header.authorization.split(' ')[1];
    
     await BlackListToken.create({token});
    res.status(200).json({message:"User logged out Successfully"});

 }




module.exports={register,login,getUserProfile,logout};