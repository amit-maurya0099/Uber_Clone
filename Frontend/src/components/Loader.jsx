import React from 'react';
import Spinner from "../Utils/Loader.gif"


const Loader = ({width,height}) => {
    

  return (
    < >
     <img src={Spinner} alt="Loading..."
      className="mx-auto"
      style={{ width, height }}
     ></img>
    </>
  )
}

export default Loader;
