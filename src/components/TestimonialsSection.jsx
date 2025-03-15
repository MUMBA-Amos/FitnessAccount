import React, { useState } from 'react';
import './styles/TestimonialsSection.css';
import ntenesha from '../images/ntemesha.jpg';
import joanna from '../images/joanna.jpg';
import MikeChen from '../images/MikeChen.png'
import rinad from '../images/rinad.jpg'
import tom from '../images/Thomson.png'
import krish from '../images/krish.jpg'

const testimonials = [
  // Beginner Program Testimonials
  {
    id: 1,
    name: 'Joanna Jerry',
    role: 'Advanced Elite Online Program',
    image: joanna,
    quote: 'As i did the Foundation program all the way to Advanced which was perfect. The guidance and Knowledge of coach Mumba has taught me a lot over the past 2 years, i highly recommend him.',
    achievement: 'muscle gainer',
    duration: '4 weeks'
  },
  {
    id: 2,
    name: 'Ntemesha Ntambo',
    role: 'Advanced Elite',
    image: ntenesha,
    quote: 'The daily form check support was invaluable. I never felt lost or confused, and the home-friendly workouts fit perfectly into my busy schedule.',
    achievement: 'Strength',
    duration: '4 weeks'
  },
  // Intermediate Program Testimonials
  {
    id: 3,
    name: 'Mike Chen',
    role: 'Intermediate Program Member',
    image: MikeChen,
    quote: 'The Intermediate program took my training to the next level. The weekly check-ins and nutrition guidance made a huge difference in my results.',
    achievement: '+15kg strength',
    duration: '6 weeks'
  },
  {
    id: 4,
    name: 'Rinad',
    role: 'Intermediate Program Graduate',
    image: rinad,
    quote: 'The virtual group sessions were motivating and fun. I loved how the program balanced strength training with performance improvements, I was able to bench 10kg dumbbells on each side.',
    achievement: 'PR in all lifts',
    duration: '6 weeks'
  },
  // Advanced Program Testimonials
  {
    id: 5,
    name: 'Krishy',
    role: 'Elite Program Success',
    image: krish,
    quote: 'The Elite program\'s personalized attention and advanced coaching helped me achieve an 80kg deadlift',
    achievement: '80+ kg deadlift',
    duration: '8 weeks'
  },
  {
    id: 6,
    name: 'James Thompson',
    role: 'Intermediate Online Program',
    image: tom,
    quote: 'The coaching access took my training to elite levels. Having know coach Mumba, he has taught me alot about supplement, how to bulk as a student was exactly what I needed.',
    achievement: 'Lean bulking',
    duration: '8 weeks'
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesPerView = 3; // Number of cards to show at once
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView;
    return testimonials.slice(start, start + slidesPerView);
  };

  return (
    <section className="testimonials-section py-5">
      <div className="container position-relative">
        <div className="section-header text-center mb-5">
          <h6 className="text-accent text-uppercase mb-3">Success Stories</h6>
          <h2 className="display-4 fw-bold">Program Results</h2>
          <p className="lead text-muted">Real transformations from our online coaching programs</p>
        </div>

        <div className="testimonials-slider">
          <button 
            className="slider-btn slider-btn-prev" 
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="testimonials-grid">
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="achievement-badge">
                    <span className="number">{testimonial.achievement}</span>
                    <span className="duration">{testimonial.duration}</span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.role}</p>
                    </div>
                    <div className="rating">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="slider-btn slider-btn-next" 
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="slider-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;