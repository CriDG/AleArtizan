import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import './Footer.css';



const Footer = () => {
 const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <section
    id='contatti'
    className={`about-us ${isVisible ? 'show' : ''}`}
    >
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contattaci</h3>
          <p>Email:contact@aleartizan.ro</p>
          <p>Phone: 3757074244</p>
          <p>Address: Via Viu 1b, Torino, Italy</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/AleArtizanPapusidinMacrame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/aleartizanpapusidinmacrame/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} AleArtizan. All rights
          reserved. Made with 💖 by CriDG
        </p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
