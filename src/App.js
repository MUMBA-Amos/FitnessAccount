// App.js
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AboutPage />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;