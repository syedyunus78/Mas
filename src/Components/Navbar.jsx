import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/MAS Logo Text.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-left">
       <Link to="/">
    <img src={logo} className="logo-img" alt="Logo" />
  </Link>
      </div>

      <div className={`nav-right ${mobileMenuOpen ? "mobile-active" : ""}`}>
        <ul className="nav-ul">
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>

        <div className="contact-section">
          <div className="circle-icon">
            <FaPhoneAlt />
          </div>
          <div className="help-text">
            <p>Need Help?</p>
            <h4>(+91)-23456789</h4>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
