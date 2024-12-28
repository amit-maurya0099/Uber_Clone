import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'

import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/Captainsignup'
import UserSignup from './pages/Usersignup'

const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Userlogin/>}></Route>
      <Route path="/signup" element={<UserSignup/>}></Route>
      <Route path="/captain_signup" element={<CaptainSignup/>}></Route>
      <Route path="/captain_login" element={<Captainlogin/>}></Route>

   </Routes>
  )
}

export default App