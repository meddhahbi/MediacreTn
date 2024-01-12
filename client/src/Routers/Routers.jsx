import React from 'react'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Contact from '../Pages/Contact'
import Doctors from '../Pages/Doctors/Doctors'
import DoctorDetails from '../Pages/Doctors/DoctorDetails'
import {Routes, Route} from 'react-router-dom'


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:id" element={<DoctorDetails/>}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
        <Route/>

    </Routes>
  )
}

export default Routers