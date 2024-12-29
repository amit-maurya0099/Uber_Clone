import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import loginAnimation from "../Utils/LoginAnimation.json"
import Lottie from 'react-lottie'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Userlogin = () => {
  const defaultOptionLogin={
    autoplay:true,
    loop:true,
    animationData:loginAnimation,
    rendererSettings:{
        preserveAspectRatio:'XMidYMid slice'
    }
}
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const {user,setUser}=useContext(UserContext);
  
  const handleLogin=async(e)=>{
         e.preventDefault();

         const userData={email,password};
         try {
          const response=await axios.post()
          
         } catch (error) {
          
         }

         setUserData({
          email:email,
          password:password
         })
    
         

  }
  return (
    <div className='h-screen w-full  bg-gradient-to-b from-[#60527a] to-black flex justify-evenly items-center'>

     <div className='hidden md:block' >
        <Lottie options={defaultOptionLogin} height={500} width={500}/>
      </div>

      <form className=' flex flex-col h-[60%] md:h-[70%] w-[90%] md:w-[23%] bg-slate-300 bg-gradient-to-b to-slate-600 shadow-2xl rounded-3xl text-gray-100' onSubmit={handleLogin}>
        <h2 className='text-3xl font-bold text-center mt-4 underline'>User-Login</h2>
        <div className='flex flex-col mt-4 mx-6 justify-between gap-2 '>
        <h2 className='text-lg font-semibold'>What is your email?</h2>
        <input  placeholder='amit@gmail.com ' className='border border-black bg-white text-black px-2  rounded-md py-1 text-md' type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className='flex flex-col mt-4 mx-6 justify-between gap-2 '>
        <h2 className='text-lg font-semibold'>Password</h2>
        <input  placeholder="password" className='border bg-white text-black px-2 rounded-md py-1 text-md'
        value={password} onChange={(e)=>setPassword(e.target.value)} name="password"></input>
        </div>
        <div className='flex flex-col mx-6 justify-between gap-2 mt-6'>
          <button className='py-1 text-lg text-center bg-black rounded-md' type="submit">Login</button>
        </div>
        <div className='text-white flex gap-3 justify-center mt-4'>
          <h2>New here? </h2>
        <Link to="/signup">  <span className='text-blue-300'>Create new Account</span></Link>
        </div>
       
       <div className='flex flex-col mx-6 justify-between gap-2 mt-6'>
       <Link to='/captain_login'> <button className='py-1 text-lg text-center bg-orange-300 rounded-md text-black w-full'>SignIn as Captain</button>
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

export default Userlogin
