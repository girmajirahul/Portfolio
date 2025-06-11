import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="menu-btn" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="/" className="menu-btn ">Home</a>
            </li>
            <li>
              <a href="#about" className="menu-btn">About</a>
            </li>
            <li>
              <a href="#services" className="menu-btn">Services</a>
            </li>
            <li>
              <a href="#projects" className="menu-btn">Projects</a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
