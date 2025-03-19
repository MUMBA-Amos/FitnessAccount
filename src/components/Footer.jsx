import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  const email = 'mfit0353@gmail.com';
  const phoneNumber = '60176307134';
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const emailLink = `mailto:${email}`;

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3 className="text-accent mb-4">mfit</h3>
                <p className="mb-4">Transform your life with expert-led fitness training and personalized nutrition plans.</p>
                <div className="contact-info">
                  <p>
                    <a href={emailLink} className="contact-link">
                      <i className="bi bi-envelope me-2"></i>
                      {email}
                    </a>
                  </p>
                  <p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link">
                      <i className="bi bi-whatsapp me-2"></i>
                      +{phoneNumber}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-links">
                <h5 className="mb-4">Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="footer-links">
                <h5 className="mb-4">Services</h5>
                <ul className="list-unstyled">
                  {/* <li><a href="/nutrition">Nutrition Plans</a></li> */}
                  <li><a href="/online-coaching">Coaching</a></li>
                </ul>
                <div className="social-links mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/mfit.x/profilecard/?igsh=YW04OWt5b3VsbW5x" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                 
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-md-0">© 2024 mfit. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">
                <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;