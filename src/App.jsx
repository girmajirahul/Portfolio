import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact'
function App() {
 
  return (
    <>
    <Navbar />
    <div>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
    <footer>
        <span>Created By <a href="#">Rahul</a> | <span className="far fa-copyright"></span> All rights reserved.</span>
    </footer>
    </>
  )   
}

export default App
