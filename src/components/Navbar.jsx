import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setShow(document.body.getBoundingClientRect().top > scrollPos);
    setScrollPos(document.body.getBoundingClientRect().top);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <div className={`navbar ${show ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="logo"><img src='images/logo.webp'></img></div>
      <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>×</button>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/programs" onClick={() => setMenuOpen(false)}>Program</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </div>
  );
};

export default Navbar;
