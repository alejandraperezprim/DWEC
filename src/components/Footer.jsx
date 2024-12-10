import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importa los iconos
import './Footer.css';

function Footer() {
  return (
    <footer className="text-center py-3">
      <p>&copy; 2024 Digital Evolution S.A. Todos los derechos reservados.</p>
      
      {/* iconos xarxes */}
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
