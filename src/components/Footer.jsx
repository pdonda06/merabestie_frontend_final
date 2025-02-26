import React from 'react';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="brand-name italianno-regular">Mera Bestie</h1>
          <div className="links">
            <div className="links-column khand-regular">
              <a href="#">About Us</a>
              <a href="#">Event/Corporate Orders</a>
              <a href="#">Reselling Enquiry</a>
              <a href="#">Track Your Orders</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="links-column khand-regular">
              <a href="#">Shipping & Returns</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-text left-align khand-regular">
            At MeraBestie.com, we believe it’s the little things that bring the biggest smiles! That’s why we craft unique, high-quality products designed to spark joy and add a touch of magic to your everyday life.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon"><img src="../img/facebook-app-symbol.png" alt="Facebook" /></a>
            <a href="https://twitter.com" className="social-icon"><img src="../img/twitter.png" alt="Twitter" /></a>
            <a href="https://instagram.com" className="social-icon"><img src="../img/instagram.png" alt="Instagram" /></a>
            {/* <a href="https://linkedin.com" className="social-icon"><img src="" alt="LinkedIn" /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;