import React from 'react'
import Navbar from '../components/Navbar';
import Lottie from "react-lottie";
import landingAnimation from "../Utils/LandingAnimation1.json"
import { FaArrowRight } from "react-icons/fa6";
import {Link} from "react-router-dom"



const Landing = () => {
    const defaultOptionLanding={
        autoplay:true,
        loop:true,
        animationData:landingAnimation,
        rendererSettings:{
            preserveAspectRatio:'XMidYMid slice'
        }
    }

  return (
    <div className='h-screen overflow-hidden bg-gradient-to-b from-[#60527a]  to-black '>
     <Navbar/>
   
     <div className='md:flex  justify-evenly items-center mt-10 w-full'>
      <div className='flex flex-col justify-center items-center text-white md:w-[600px] text-center'>
        <h2 className='text-3xl font-semibold '>Welcome to GlideGo!</h2>
        <h2 className='text-2xl font-semibold'>Experience the Freedom of On-Demand Transportation. </h2>
        <h2 className='text-lg mt-3 '>We're on a mission to make urban mobility seamless and accessible for everyone. Whether you're commuting to work, exploring the city, or heading to the airport, our platform connects you with a wide range of transportation options, from budget-friendly rides to luxurious experiences. </h2>
      <Link to="/login"> <div className='flex flex-col px-4 py-6 justify-center mt-4  text-white rounded-xl'>
        <h2 className='text-2xl font-bold pb-4'>Get Started With GlideGo!</h2>
       <button className=' py-1 text-white text-center bg-black w-[300px]  text-xl flex justify-center rounded-xl'>Continue <FaArrowRight className='ml-2 mt-2'/>  </button></div></Link> 
        
        </div> 
        <div className='h-full object-cover'>
        <Lottie options={defaultOptionLanding} width={400} height={380} />
        </div>
        </div>
    
        
    </div>
  )
}

export default Landing;