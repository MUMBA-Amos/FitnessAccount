import React, { useRef, useEffect, useState } from 'react';
import './styles/HeroSection.css';
import gymVideo from '../assets/videos/gym-video.mp4';
import ConsultationForm from './ConsultationForm';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Attempt to play video when component mounts
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (err) {
        console.log("Video autoplay failed:", err);
      }
    };

    playVideo();
  }, []);

  return (
    <section className="hero-section position-relative vh-100 d-flex align-items-center">
      {/* Dark overlay with green tint */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overlay"></div>
      
      {/* Video Background */}
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="video-element"
        >
          <source src={gymVideo} type="video/mp4" />
        </video>
      </div>

      <div className="container position-relative text-white">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="text-accent text-uppercase mb-3">Welcome to mfit</h6>
            <h1 className="display-1 fw-bold mb-4">Get Fit, Stay Motivated</h1>
            <p className="lead mb-4">Premium Online Fitness</p>
            <div className="d-flex gap-3">
              
              <button 
                className="btn btn-outline-light btn-lg rounded-pill px-4 d-inline-flex align-items-center"
                onClick={() => setIsFormOpen(true)}
              >
                Get Intouch
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social media links */}
      <div className="position-absolute start-0 top-50 translate-middle-y ms-4">
        <div className="d-flex flex-column gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/mfit.x/profilecard/?igsh=YW04OWt5b3VsbW5x" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bi bi-instagram"></i>
          </a>
       
          {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="bi bi-youtube"></i>
          </a> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>

      {/* Consultation Form */}
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;