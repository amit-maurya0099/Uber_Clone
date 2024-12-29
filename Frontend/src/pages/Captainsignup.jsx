import React, { useContext, useState, useSyncExternalStore } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie';
import registerAnimation from "../Utils/RegisterAnimation.json"
import { toast } from 'react-toastify';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const CaptainSignup = () => {
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
    const[vehicleColor,setVehicleColor]=useState('');
    const[vehicleCapacity,setVehicleCapacity]=useState('');
    const[vehicleType,setVehicleType]=useState('');
    const[vehiclePlate,setVehiclePlate]=useState('');
    const navigate=useNavigate();
    const {setCaptain}=useContext(UserContext);
  
    const handleRegister=async(e)=>{
           e.preventDefault();
  
           const newCaptain={
              email,password,firstname,lastname,contact,vehicle:{
                color:vehicleColor,
                capacity:vehicleCapacity,
                vehicleType:vehicleType,
                plate:vehiclePlate
              }
           }
           console.log(newCaptain);
           
           try {
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,newCaptain);
            if(response.status==200){
              const data=response.data;
              toast.success(data.message);
              navigate('/home');
              setCaptain(data.captain);
              localStorage.setItem('token',data.token);
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
      <form className='w-[90%] md:w-[40%] bg-slate-300 bg-gradient-to-b to-slate-600 flex flex-col gap-3 rounded-xl shadow-2xl py-4' onSubmit={handleRegister}>
        <h2 className='text-3xl font-bold text-center mb-1 text-cyan-300 underline'>Captain-SignUp</h2>
        <div className='flex justify-evenly gap-4 '>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>FirstName</h2>
            <input placeholder='firstname' className='px-2 py-1 text-black bg-white border border-black rounded-md' onChange={(e)=>setFirstname(e.target.value)} value={firstname} ></input>
          </div>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>LastName</h2>
            <input placeholder='lastname' className='px-2 py-1 text-black bg-white border border-black rounded-md' onChange={(e)=>setLastName(e.target.value)} value={lastname}></input>
          </div>
       </div>
       <div className='flex justify-evenly gap-4 '>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Email</h2>
            <input placeholder='email' className='px-2 py-1 text-black bg-white border border-black rounded-md'onChange={(e)=>setEmail(e.target.value)} value={email} ></input>
          </div>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Password</h2>
            <input placeholder='password' className='px-2 py-1 text-black bg-white border border-black rounded-md' onChange={(e)=>setPassword(e.target.value)} value={password}></input>
          </div>
       </div>
       <div className='flex justify-evenly gap-4 '>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Contact</h2>
            <input placeholder='Contact' className='px-2 py-1 text-black bg-white border border-black rounded-md' onChange={(e)=>setContact(e.target.value)} value={contact} ></input>
          </div>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Vehicle</h2>
            <select  className='px-2 py-1 text-black bg-white border border-black rounded-md' onChange={(e)=>setVehicleType(e.target.value)} value={vehicleType}>
                <option>Select</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value='auto'>Auto</option>
              
            </select>
          </div>
       </div>
       <div className='flex justify-evenly gap-4 '>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Vehicle Color</h2>
            <input placeholder='color' className='px-2 py-1 text-black bg-white border border-black rounded-md' onChange={(e)=>setVehicleColor(e.target.value)} value={vehicleColor}></input>
          </div>
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Vehicle capacity</h2>
            <input type='number' placeholder='capacity' className='px-2 py-1 text-black bg-white border border-black rounded-md'onChange={(e)=>setVehicleCapacity(e.target.value)} value={vehicleCapacity} ></input>
          </div>
       </div>
       <div className='flex md:px-10 px-4  '>
          
          <div className='flex flex-col gap-2 w-[40%]'>
            <h2 className='text-lg font-medium text-white'>Plate number</h2>
            <input placeholder='plate number' className='px-2 py-1 text-black bg-white border border-black rounded-md'onChange={(e)=>setVehiclePlate(e.target.value)} value={vehiclePlate} ></input>
          </div>
       </div>
       <div className='flex flex-col mx-6 justify-between gap-2 mt-4 text-white '>
        <button className='py-1 text-xl text-center bg-black rounded-md' type="submit">Register</button>
      </div>
       <div className='text-white flex gap-3 justify-center mt-2 text-lg'>
        <h2>Already have an account? </h2>
      <Link to="/captain_login">  <span className='text-blue-300'>Back to login</span></Link>
      </div>
      <div className='flex flex-col mx-6 justify-between gap-2 my-4'>
     <Link to='/signup'> <button className='py-1 text-lg text-center bg-green-300 rounded-md text-black w-full'>SignUp as User</button>
      </Link> 
      </div>
      <div className='mt-auto mb-3 text-center '> 
        <h2 className='text-2xl font-bold text-orange-600 italic'>
          GlideGo
          </h2>

      </div>
       


      </form>
    
  </div>
  )
}

export default CaptainSignup;
