import React, { createContext, useState } from 'react'


export const UserContext=createContext();

export  const UserProvider = ({children}) => {
  const [user,setUser]=useState('');
  const [captain,setCaptain]=useState('');
  const [isLoading,setIsLoading]=useState(false);


  const value={captain,setCaptain,user,setUser,isLoading,setIsLoading}

  return (
     <UserContext.Provider value={value}>
      {children}
     </UserContext.Provider>
  )
}


