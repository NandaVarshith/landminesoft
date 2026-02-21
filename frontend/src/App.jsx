import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/home/index.jsx';
import About from '../pages/about/About.jsx';
import Careers from '../pages/careers/Careers.jsx';
import Consultation from '../pages/consultation/Consultation.jsx';
import GetDemo from '../pages/getDemo/GetDemo.jsx';
// Corrected import path and component name

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/careers" element={<Careers/>} />
      <Route path="/consultation" element={<Consultation/>} />
      <Route path="/get-demo" element={<GetDemo/>} />
     
    </Routes>
  )
}

export default App
