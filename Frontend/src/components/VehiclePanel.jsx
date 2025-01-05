import React from 'react'
import { TiUser } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa6";
const VehiclePanel = (props) => {
  return (
      <div className='h-full overflow-y-scroll no-scrollbar relative'>
       <button className='flex justify-between w-full '><h2 className=' font-semibold text-xl  mb-6'>Choose your vehicle </h2><FaAngleDown className='text-lg mr-4 ' onClick={()=>{props.setVehiclePanel(false)}} /></button> 
        <div className='flex flex-col justify-evenly'>
        <div className=' flex items-center gap-3 bg-white justify-between w-full px-3 py-1 mb-4 border-2 active:border-black rounded-xl'>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png" className='object-cover size-12 md:size-20'></img>
          <div className='flex flex-col justify-center w-1/2  '>
            <h4 className='text-lg font-semibold flex'>GlideGo <span className='flex'><TiUser className='text-2xl' />4</span></h4>
            <h5 className='font-medium'>2 mins away</h5>
            <h3 className='font-normal'>Affordable compact rides</h3>
          </div>
          <h2 className='text-xl font-semibold'>₹193</h2>
        </div>
        <div className='flex mb-4 bg-white gap-4 items-center w-full px-3 py-1 border-2 active:border-black rounded-xl'>
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" className='object-cover size-14 md:size-16 mr-6'></img>
          <div className='flex flex-col justify-center w-1/2 '>
            <h4 className='text-lg font-semibold flex'>Auto <span className='flex'><TiUser className='text-2xl' />6</span></h4>
            <h5 className='font-medium'>3 mins away</h5>
            <h3 className='font-normal'>Affordable compact rides</h3>
          </div>
          <h2 className='text-xl font-medium'>₹130.20</h2>
        </div>
        <div className='  flex items-center gap-3 mb-4 bg-white justify-between w-full px-3 py-2 border-2 active:border-black rounded-xl'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/599/646/small/fat-man-on-motorcycle-go-to-work-with-online-transportation-in-cartoon-illustration-vector.jpg" className='object-cover size-20 md:size-24'></img>
          <div className='flex flex-col justify-center w-1/2'>
            <h4 className='text-lg font-semibold flex'>Moto <span className='flex'><TiUser className='text-2xl' />1</span></h4>
            <h5 className='font-medium'>5 mins away</h5>
            <h3 className='font-normal'>Affordable compact rides</h3>
          </div>
          <h2 className='text-xl font-semibold'>₹65.80</h2>
        </div>
        </div>
    </div>
  )
}

export default VehiclePanel
