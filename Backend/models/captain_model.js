const mongoose=require('mongoose');
const jwt= require('jsonwebtoken');
const  bcrypt=require('bcrypt');

const captainSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        minLength:[3,"firstname should have at least 3 characters"]
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    phone:{
        type:String,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:"inactive"
    },
    vehicle:{
        color:{
            type:String,
            minLength:[3,"color must have at least 3 characters"],
            required:true    
        },
        plate:{
            type:String,
            minLength:[3,"Plate must have at least 3 characters"],
            required:true   

        },
        capacity:{
            type:Number,
            require:true,
            min:[1,"Capacity must be at least 1"]

        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        }

    },
    location:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number
        }
    }


})


captainSchema.methods.generateAuthToken= function(){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY,{expiresIn:'24h'});
    return token;
}
captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}


  const Captain= mongoose.model("Captain",captainSchema);
  module.exports=Captain;