import React, { createContext, useState } from 'react'


export const UserContext=createContext();

export  const UserProvider = ({children}) => {
  const [user,setUser]=useState('');
  const [captain,setCaptain]=useState('');
  return (
     <UserContext.Provider value={{user,setUser,captain,setCaptain}}>
      {children}
     </UserContext.Provider>
  )
}


