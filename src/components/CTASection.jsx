import React, { useState } from 'react';
import './styles/CTASection.css';
import ConsultationForm from './ConsultationForm';

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="cta-section py-5">
      <div className="container">
        <div className="cta-content text-center">
          <h6 className="text-accent text-uppercase mb-3">Free Consultation mfit online coaching</h6>
         
          <p className="lead mb-5">
            Start your fitness journey with a free consultation.<br />
            Our expert trainers are ready to help you achieve your goals.
          </p>
          <div className="cta-buttons">
          
            <button 
              className="btn btn-outline-light btn-lg rounded-pill"
              onClick={() => setIsFormOpen(true)}
            >
              Get Intouch
              <i className="bi bi-chevron-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="cta-overlay"></div>
      
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default CTASection;