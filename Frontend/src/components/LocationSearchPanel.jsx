import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const LocationSearchPanel = (props) => {
 
  const locations=[
    "24B, Near Kapoor's Cafe, Madan Mohan Malaviya University Of Technology",
    "20C, Near Sharma's Cafe, Madan Mohan Malaviya University Of Technology",
    "22D, Near Mishra's Cafe, Madan Mohan Malaviya University Of Technology",
    "22D, Near Mishra's Cafe, Madan Mohan Malaviya University Of Technology",
    "22D, Near Mishra's Cafe, Madan Mohan Malaviya University Of Technology",
    "22D, Near Mishra's Cafe, Madan Mohan Malaviya University Of Technology",
    
  ]
  return (
   
    <div className=' h-full  px-4 flex flex-col gap-6 md:gap-8 md:mb-10' >

      {locations.map((elem,index)=>{
        return  <div key={index} className='flex items-center gap-4  border-2 active:border-black text-sm rounded-xl px-2 font-normal bg-gray-100 ' onClick={()=>{props.setVehiclePanel(true)}}>
        <IoLocationSharp className=' size-6 md:size-10'/>
         <p>{elem}</p>
        </div>
      })}
     
       
    </div>
  )
}

export default LocationSearchPanel;
