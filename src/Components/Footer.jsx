import React, { useState } from 'react';
import "../Components/Footer.css";
import img1 from "../images/MAS Logo Text.png";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Upper Footer */}
      <div className="footer-upper">
        <div className="footer-upper-content">
          <h2>Are you interested?</h2>
          <div className="footer-buttons">
            <a href="https://wa.me/919876543210" className="btn btn-whatsapp">
              <FaWhatsapp /> WhatsApp
            </a>
            <button onClick={openModal} className="btn btn-rent">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* Rent Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}><FaTimes /></button>
            <h3>Rent a Car</h3>
            <form className="modal-form">
              <input type="text" placeholder="Name" required />
              
              <select required>
                <option value="">Choose Car Type</option>
                <option value="all">All</option>
                <option value="sudan-suv">Sudan SUV</option>
              </select>
              
              <input type="text" placeholder="Pickup Location" required />
              
              <div className="date-fields">
                <input type="date" placeholder="Pickup From" required />
                <input type="date" placeholder="Pickup To" required />
              </div>
              
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Address" required />
              
              <button type="submit" className="btn btn-rent">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <footer className="footer">
        <div className="footer-container">

          {/* Logo and description */}
          <div className="footer-section">
            <img src={img1} alt="Logo" className="footer-logo" />
            <p className="footer-text">
              We provide the best services with professionalism and dedication.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="javascript:void(0)"><FaFacebookF /></a>
              <a href="javascript:void(0)"><FaYoutube /></a>
              <a href="javascript:void(0)"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 Jeddah, Saudi Arabia</p>
            <p>📞 +91 98765 43210</p>
            <input type="email" placeholder="Enter your email" className="email-input" />
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} YourBrand — All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
