const mongoose=require('mongoose');

const blackListTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:86400

    }
})

const BlackListToken=mongoose.model("BlacklistToken",blackListTokenSchema);
module.exports=BlackListToken;