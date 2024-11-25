import React, { useState } from "react";
import "../styles/navbar.css";
//import { BiMenu } from "react-icons/bi";
function Navbar() {
 

  return (
    <div>
    <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div>
    <nav className="navbar">
        <div className="max-width">
            <ul className="menu">
                <li><a href="#home" className="menu-btn">Home</a></li>
                <li><a href="#about" className="menu-btn">About</a></li>
                <li><a href="#services" className="menu-btn">Services</a></li>
                <li><a href="#skills" className="menu-btn">Skills</a></li>
                <li><a href="#contact" className="menu-btn">Contact</a></li>
            </ul>
            
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    </div>
  );
}

export default Navbar;
