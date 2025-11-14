import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";


const Contactuspage = () => {
  return (
    <>
  <div className="contactuscontainer">
    <p className="contactus-top-title">Get in touch</p>
 
  <h4 className="contactus-title">Contact Us</h4>
</div>

<br/>
<br/>
      {/* 🔹 FOUR INFO CARDS */}
      <div className="contact-info-cards">
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h4>Email</h4>
          <p>mas@gmail.com</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h4>Address</h4>
          <p>Jeddah, Saudi Arabia</p>
        </div>

        <div className="info-card">
          <FaClock className="info-icon" />
          <h4>Timing</h4>
          <p>9 AM – 6 PM</p>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h4>Call Us</h4>
          <p>+91 98765 4332</p>
        </div>
      </div>
<br/>
<br/>
      {/* 🔹 FORM + MAP SECTION */}
      <div className="contact-content">
        
        {/* Left - Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="number" placeholder="Your Number" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right - Map */}
        <div className="contact-map">
          <iframe
            title="Jeddah Tower Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7638811095377!2d39.8256176150018!3d21.514683185798747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d609f0a1d30d%3A0xf3a7c034f5a55aab!2sJeddah%20Tower!5e0!3m2!1sen!2ssa!4v1709258591240!5m2!1sen!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </>
  )
}

export default Contactuspage
