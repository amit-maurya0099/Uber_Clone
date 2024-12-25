const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
        firstname:{
            type:String,
            required:true,
            minlength:[3,'first name should be at least of 3 characters']

        },
        lastname:{
            type:String,
            minlength:[3,'last name should be at least of 3 characters']
           
        },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    phone:{
        type:Number,
    }



})


userSchema.methods.generateAuthToken= function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY,{expiresIn:'24h'});
    return token;
}

userSchema.methods.comparePassword=async function(password){
   return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword=async function (password){
           
    return await bcrypt.hash(password,10)

}

const User=mongoose.model('User',userSchema);
module.exports=User;
