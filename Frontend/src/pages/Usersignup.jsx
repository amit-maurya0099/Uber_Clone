import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie'
import registerAnimation from "../Utils/RegisterAnimation.json";
import axios from "axios";
import { toast } from 'react-toastify';
import {UserContext} from "../context/UserContext.jsx"


const UserSignup = () => {
  const defaultOptionRegister={
    autoplay:true,
    loop:true,
    animationData:registerAnimation,
    rendererSettings:{
        preserveAspectRatio:'XMidYMid slice'
    }
}


   const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastName]=useState('');
    const [contact,setContact]=useState('');
    
  
  const navigate=useNavigate();
   const {user,setUser}=useContext(UserContext);


    const handleRegister=async(e)=>{
        e.preventDefault();
      const newUser={
        firstname,lastname,email,password
      }
      try {
       
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newUser);
        if(response.status ==200){
          toast.success("User Registered Successfully");
          const data=await response.data;
          setUser(data);
          navigate("/home");
        }
        } catch (error) {
          toast.error(error.response.data.message)
         
      }
    
           
          
  
    }
  return (
    <div className='h-screen w-full  bg-gradient-to-b from-[#60527a] to-black flex justify-evenly items-center'>
    <div className='hidden md:block'> 
      <Lottie options={defaultOptionRegister} height={500} width={500}/>
      </div>

    <form className=' flex flex-col h-[65%] md:h-[70%] w-[90%] md:w-[23%] bg-slate-300 bg-gradient-to-b to-slate-600 shadow-2xl rounded-3xl text-gray-100' onSubmit={handleRegister}>
      <h2 className='text-3xl font-bold text-center mt-4 underline'>User Sign Up</h2>
      <div className='flex flex-col mt-4 mx-6 justify-between gap-2 '>
      <h2 className='text-lg font-semibold'>What is your name?</h2>
      <div className='flex justify-between gap-4'>
      <input required placeholder='firstname' className='border border-black bg-white text-black px-2  rounded-md py-1 text-md w-[40%]' type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}></input>
      <input placeholder='lastname'  className='border border-black bg-white text-black px-2  rounded-md py-1 text-md w-[40%]' type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)}></input>
      </div>
      </div>
      <div className='flex flex-col mt-2 mx-6 justify-between gap-2 '>
      <h2 className='text-lg font-semibold'>what is your email?</h2>
      <input required placeholder="email@gmail.com" className='border bg-white text-black px-2 rounded-md py-1 text-md'
      value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
      </div>
      <div className='flex flex-col mt-2 mx-6 justify-between gap-2 '>
      <h2 className='text-lg font-semibold'>Password</h2>
      <input  required placeholder="password" className='border bg-white text-black px-2 rounded-md py-1 text-md'
      value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
      </div>
      <div className='flex flex-col mt-2 mx-6 justify-between gap-2 '>
      <h2 className='text-lg font-semibold'>Phone</h2>
      <input type='number' placeholder="phone number" className='border bg-white text-black px-2 rounded-md py-1 text-md'
      value={contact} onChange={(e)=>setContact(e.target.value)} ></input>
      </div>
      <div className='flex flex-col mx-6 justify-between gap-2 mt-6'>
        <button className='py-1 text-lg text-center bg-black rounded-md' type="submit">Register</button>
      </div>
      <div className='text-white flex gap-3 justify-center mt-4'>
        <h2>Already have an account? </h2>
      <Link to="/login">  <span className='text-blue-300'>Back to login</span></Link>
      </div>
     
     <div className='flex flex-col mx-6 justify-between gap-2 my-6'>
     <Link to='/captain_signup'> <button className='py-1 text-lg text-center bg-green-300 rounded-md text-black w-full'>SignUp as Captain</button>
      </Link> 
      </div>
      <div className='mt-auto mb-3 text-center'> 
        <h2 className='text-xl font-bold text-orange-600 italic'>
          GlideGo
          </h2>

      </div>
    </form>
  </div>
  )
}

export default UserSignup;
