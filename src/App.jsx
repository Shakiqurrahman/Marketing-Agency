import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Services from './components/services';
import Results from './components/results';
import About from './components/about';
import Contact from './components/contact';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/services"  element={<Services/>}/>
          <Route path="/results" element={<Results/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
