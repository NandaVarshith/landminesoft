import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/home/index.jsx';
import About from '../pages/about/about.jsx';
import Services from '../pages/services/Services.jsx';
import Careers from '../pages/careers/Careers.jsx';
import Consultation from '../pages/consultation/Consultation.jsx';
import GetDemo from '../pages/getDemo/GetDemo.jsx';
import Contact from '../pages/contact/Contact.jsx';
import Support from '../pages/support/Support.jsx';
import Login from '../pages/login/Login.jsx';
import Register from '../pages/register/Register.jsx';
import SiteFooter from './components/SiteFooter.jsx';
// Corrected import path and component name

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/consultation" element={<Consultation/>} />
        <Route path="/get-demo" element={<GetDemo/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <SiteFooter />
    </>
  )
}

export default App
