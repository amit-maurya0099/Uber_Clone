import React, { useRef, useState } from 'react'
import Lottie from 'react-lottie'
import Taxi from "../Utils/Taxi.json";
import TaxiBooking from "../Utils/taxiBooking.json";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import { GoCircle } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import VehiclePanel from '../components/VehiclePanel';

const Home = () => {
   const defaultAnimationOptions={
    autoplay:true,
    loop:true,
    animationData:TaxiBooking,
    rendererSettings:{
      preserveAspectRatio:'XMidYMid slice'
  }
   
  }
  const TaxiAnimationOptions={
    autoplay:true,
    loop:true,
    animationData:Taxi,
    rendererSettings:{
      preserveAspectRatio:'XMidYMid slice'
  } 
  }
  const [pickupLocation,setPickupLocation]=useState('');
  const [destination,setDestination]=useState('');
  const [panelOpen,setPanelOpen]=useState(false);
  const [vehiclePanel,setVehiclePanel]=useState(false);
  const vehiclePanelRef=useRef(null);
  const panelRef=useRef(null);
  const panelCloseRef=useRef(null);

  
  const handleSubmit=async(e)=>{
    e.preventDefault();

    
  }
 useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'78%',
        opacity:1

      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
         height:'0',
         opacity:0

      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
      
    }
 },[panelOpen])

 useGSAP(function(){
  if(vehiclePanel){
  gsap.to(vehiclePanelRef.current,{
     transform:'translateY(0)'
  })
} else{
   gsap.to(vehiclePanelRef.current,{
    transform:'translateY(100%)'
   })
}
 },[vehiclePanel])

  return (
    <div className='h-screen w-screen relative bg-gradient-to-b from-[#60527a]  to-black overflow-hidden'>
       <div className=' absolute top-3 left-3 md:left-6'> 
        <h2 className='text-2xl md:text-4xl font-bold text-orange-600 italic'>
          GlideGo
          </h2>
      </div>
      <div className='w-full h-full  flex justify-center items-start md:hidden '>
        <Lottie height={500} width={400} options={defaultAnimationOptions} />
      </div>
      <div className='w-full  h-screen md:h-[200px] md:w-[25%]  absolute bottom-0 md:top-10 md:left-[38%] flex flex-col justify-end   text-black  shadow-xl '>
        <div className='h-[22%] md:h-full py-4 bg-white relative rounded-t-xl'>
         <h5 ref={panelCloseRef} className=' absolute top-4 right-4  text-2xl md:hidden ' onClick={()=>setPanelOpen(false)} >  <i className="ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-xl font-semibold px-4 text-center'>Find a trip</h2>
        <form className='w-full flex flex-col gap-6 px-4 py-6' onSubmit={handleSubmit}>
          <div className='line absolute h-[55px] w-[3px] bg-black top-[46%] left-8 border border-black rounded-full'></div>
          <div className=' flex items-center gap-2 border border-black py-1 pl-2 rounded-lg text-lg'>
            <GoCircle/>
          <input  placeholder='choose starting point' value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} onClick={()=>setPanelOpen(true)} className='w-full outline-none'>
           </input></div>
           
           <div className=' flex items-center gap-2 border border-black py-1  pl-2 rounded-lg text-lg'>
           <CiLocationOn/>
          <input  placeholder='Choose desitination' value={destination} onChange={(e)=>setDestination(e.target.value)} onClick={()=>setPanelOpen(true)} className='w-full outline-none'>
           </input></div>
        </form>
        {
        vehiclePanel? <div className='w-full md:w-[385px] h-[450px] md:h-[420px] z-10 fixed bottom-10  px-3 py-5 bg-white translate-y-full' ref={vehiclePanelRef}>
         <VehiclePanel setVehiclePanel={setVehiclePanel} />
       </div>:
        <div className='bg-white  hidden md:block md:h-[400px]  overflow-y-scroll no-scrollbar  rounded-b-xl absolute z-20'>
         <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
         </div>}
        </div>
        <div className='bg-white pt-4 overflow-hidden md:hidden' ref={panelRef} >
        <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
        <div>
          
        </div>
      </div>
      <div className='absolute bottom-3 w-full hidden md:block' >
        <div className='flex justify-evenly' >
        <Lottie options={defaultAnimationOptions} height={300} width={300} />
        <Lottie options={TaxiAnimationOptions} height={300} width={300} />
        </div>
        
      </div>
       
    </div>
  )
}

export default Home
