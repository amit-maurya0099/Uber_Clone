 const mongoose=require('mongoose');

   const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.Mongo_URI)
       console.log("mongoDB Connected Sucessfully")
        
    } catch (error) {
        console.log("mongodb connection failed",error);
        
    }
   
   }
   module.exports=connectDB;