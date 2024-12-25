const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();
const cookieParser= require("cookie-parser");
const connectDB=require("./Utils/db");
const userRoutes=require('./routers/user_route')

connectDB();


app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/user",userRoutes);

module.exports=app;