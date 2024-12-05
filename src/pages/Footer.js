// Footer.js
import React from 'react';
import './Footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import NewsletterForm from './NewsletterForm'; 
function Footer() {



 // State to handle dropdown visibility
 const [showTechnology, setShowTechnology] = useState(false);
 const [showIndustry, setShowIndustry] = useState(false);

 // Toggle dropdown visibility
 const toggleTechnologyDropdown = () => setShowTechnology(!showTechnology);
 const toggleIndustryDropdown = () => setShowIndustry(!showIndustry);
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Business Name */}
        <div className="footer-column">
      
          
       
          <NewsletterForm />
          
        </div>

        {/* Company Links */}
         {/* Company Links */}
         <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <Link className="footer-link" to="/">Home</Link>
            </li>
            <li
              className="footer-link"
              onMouseEnter={toggleTechnologyDropdown} 
              onMouseLeave={toggleTechnologyDropdown}
            >
              Technology
              {showTechnology && (
                <ul className="dropdown">
                  <li><Link className="footer-link" to="/supplychain">Supply Chain Optimization</Link></li>
                  <li><Link className="footer-link" to="/predictive">Predictive Maintenance</Link></li>
                  <li><Link className="footer-link" to="/smart">Smart Inventory Management</Link></li>
                  <li><Link className="footer-link" to="/enhanced">Enhanced Customer Experience</Link></li>
                  <li><Link className="footer-link" to="/security">Security & Surveillance</Link></li>
                </ul>
              )}
            </li>
            <li
              className="footer-link"
              onMouseEnter={toggleIndustryDropdown} 
              onMouseLeave={toggleIndustryDropdown}
            >
              Industry
              {showIndustry && (
                <ul className="dropdown">
                  <li><Link className="footer-link" to="/manufacturing">Manufacturing</Link></li>
                  <li><Link className="footer-link" to="/construction">Construction</Link></li>
                  <li><Link className="footer-link" to="/retail">Retail</Link></li>
                  <li><Link className="footer-link" to="/warehouse">Warehouse</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link className="footer-link" to="https://docs.google.com/forms/d/e/1FAIpQLSdC-J7f272fdDuiwCbb-DdSAmKkrMd1oT3pUOFxSiUwr5QfMw/viewform" target='_blank'>Demo</Link>
            </li>
            <li>
              <Link className="footer-link" to="/contact" target='_blank'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li>
              <Link className="footer-link" target='_blank' to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link className="footer-link" target='_blank' to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link className="footer-link" target='_blank' to="/accessibility">Accessibility Statement</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>SOCIAL</h4>
          <ul>
            <li>
              <Link className="footer-link" to="https://www.linkedin.com/company/ekakinn/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </li>
            <li>
              <Link className="footer-link" to="https://www.facebook.com/EkakInn?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</Link>
            </li>
            <li>
              <Link className="footer-link" to="https://www.instagram.com/ekak1nn/" target="_blank" rel="noopener noreferrer">Instagram</Link>
            </li>
            <li>
              <Link className="footer-link" to="https://x.com/Ekak1nn?mx=2" target="_blank" rel="noopener noreferrer">X</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact">
          <h4>CONTACT</h4>
          <ul>
            <li>
              <Link className="footer-link" to="mailto:info@mysite.com">contact@ekak.in</Link>
            </li>
            <li>113/216-A Swaroop Nagar,
Kanpur,Uttar Pradesh,
India-208002</li>
            
            </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © 2035 by Ekak Innovations<span className="trademark">™</span>
      </div>
    </footer>
  );
}

export default Footer;
