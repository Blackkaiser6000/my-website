import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#skills" className="nav-link">Skills</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}

export default Navbar;
