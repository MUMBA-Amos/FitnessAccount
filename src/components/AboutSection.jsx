import React from 'react';
import './styles/AboutSection.css';
import aboutCoaching from '../images/about-coaching.png';

const AboutSection = () => {
  const features = [
    {
      icon: 'bi bi-lightning-charge',
      title: 'Body Transformation',
      description: 'Comprehensive programs for muscle building and fat loss, with proven track record of client success.'
    },
    {
      icon: 'bi bi-heart-pulse',
      title: 'Nutrition Coaching',
      description: 'Strategic meal planning and nutritional guidance to optimize your results and energy levels.'
    },
    {
      icon: 'bi bi-person-check',
      title: 'Personalized Plans',
      description: 'Custom workout and nutrition plans tailored to your goals, lifestyle, and available equipment.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Progress Tracking',
      description: 'Regular check-ins and adjustments to ensure you\'re making consistent progress towards your goals.'
    },
    {
      icon: 'bi bi-camera-video',
      title: 'Form Guidance',
      description: 'Detailed exercise tutorials and form checks to ensure safe and effective training.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Ongoing Support',
      description: 'Direct access to your coach for questions, motivation, and guidance throughout your journey.'
    }
  ];

  return (
    <section id="services" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image-container">
              <img 
                src={aboutCoaching}
                alt="Online Fitness Coaching" 
                className="img-fluid main-image"
              />
              {/* <div className="experience-badge">
                <span className="number">1k+</span>
                <span className="text">Happy Clients</span>
              </div> */}
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-content ps-lg-4">
              <h6 className="text-accent text-uppercase mb-3">About mfit</h6>
              <h2 className="display-5 fw-bold mb-4">Transform Your Body With Expert Online Coaching</h2>
              <p className="lead mb-4">
                At mfit, I am dedicated to bringing professional fitness coaching to you, wherever you are. 
                Through my online programs, you'll get the same level of expertise and attention as in-person training, 
                with the flexibility to train on your schedule.
              </p>
              
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-muted">
                  <i className="bi bi-check-circle-fill text-accent me-2"></i>
                  Start your transformation today with expert online guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;