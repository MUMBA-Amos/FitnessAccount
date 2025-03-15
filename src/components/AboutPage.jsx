import React from 'react';
import './styles/AboutPage.css';
import trainerProfile from '../images/trainer-profile.JPG';

const AboutPage = () => {
  return (
    <div id="about" className="about-page">
      <div className="about-hero">
        <div className="container">
    
          <h1 className="display-4 fw-bold text-white">Your Personal Online Coach</h1>
          <div className="accent-line"></div>
        </div>
      </div>

      <section className="personal-intro py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="trainer-image">
                <img 
                  src={trainerProfile} 
                  alt="Personal Trainer" 
                  className="img-fluid rounded-3 shadow"
                />
                <div className="experience-badge">
                  <span className="number">5+</span>
                  <span className="text">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="trainer-info ps-lg-4">
                <h2 className="mb-4">Hi, I'm Mumba</h2>
                <p className="lead mb-4">
                  As a dedicated fitness coach, I specialize in online personal training 
                  and nutrition coaching, helping clients achieve their dream physiques 
                  through structured programs and consistent guidance.
                </p>

                <div className="personal-background mb-4">
                  <h5 className="text-accent mb-3">A Bit About Me</h5>
                  <p>
                    Beyond fitness, I'm a web developer with a Computer Science degree majoring in AI. 
                    I love traveling to experience new cultures, reading to expand my horizons, and 
                    meeting new people from diverse backgrounds. These experiences help me connect better 
                    with clients and bring a fresh perspective to my coaching.
                  </p>
                  <div className="social-links mt-3">
                    <a href="https://www.linkedin.com/in/mumba-amos-ntambo-54a665214/" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/mumba_a.n/profilecard/?igsh=azNvZXpibjRqMWgy" target="_blank" rel="noopener noreferrer" className="social-link">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="credentials mb-4">
                  <h5 className="text-accent mb-3">My Approach</h5>
                  <ul className="list-unstyled">
                    <li><i className="bi bi-check-circle-fill me-2"></i>Customized nutrition strategies</li>
                    <li><i className="bi bi-check-circle-fill me-2"></i>Regular progress tracking</li>
                    <li><i className="bi bi-check-circle-fill me-2"></i>Sustainable lifestyle changes</li>
                  </ul>
                </div>

                <p className="mb-4">
                  My journey in fitness has taught me that transformation is about more than just workouts – 
                  it's about building sustainable habits and a strong mindset. I work closely with each client 
                  to create personalized programs that fit their lifestyle while delivering results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-section py-5">
        <div className="container">
          <h6 className="text-accent text-uppercase text-center mb-3">My Approach</h6>
          <h3 className="text-center mb-5 fw-bold">Training Philosophy</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="philosophy-card">
                <i className="bi bi-bullseye"></i>
                <h4>Results-Driven</h4>
                <p>Clear goals, structured programs, and measurable progress to ensure you achieve your desired results.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="philosophy-card">
                <i className="bi bi-graph-up"></i>
                <h4>Progressive Training</h4>
                <p>Systematic approach to building strength and improving body composition through proven methods.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="philosophy-card">
                <i className="bi bi-person-check"></i>
                <h4>Personalized Guidance</h4>
                <p>Individual attention and program adjustments based on your progress and feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;