import React from 'react';
import './styles/ServicesSection.css';
import beginnerProgram from '../images/beginner-program.png';
import advance from '../images/advanced.png';
import elite from '../images/Elite.png';
import weightLoss from '../images/weight-loss.png';
// Import other program images once you have them
// import intermediateProgram from '../images/intermediate-program.jpg';
// import advancedProgram from '../images/advanced-program.jpg';

const ServicesSection = () => {
  const phoneNumber = '60176307134'; // Your WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const programs = [
    {
      icon: 'bi bi-graph-down-arrow',
      title: 'Weight Loss Program',
      duration: '12 Weeks',
      image: weightLoss,
      description: 'Transform your body with personalized calorie tracking, weekly check-ins, and comprehensive nutrition and workout plans designed for sustainable weight loss.',
      features: [
        {
          phase: 'Phase 1: Foundation & Fat Loss (Weeks 1-4)',
          details: [
            'Daily calorie & macro tracking',
            'Custom meal planning with recipes',
            'Weekly 30-min to 60-min video calls',
            'Personalized workout routines',
            'Weekly measurements & photos',
          ],
          phasePrice: '$63'
        },
        {
          phase: 'Phase 2: Accelerated Results (Weeks 5-8)',
          details: [
            'Adjusted calorie calculations',
            'Macro refinement based on progress',
            'Bi-weekly progress calls',
            'Advanced nutrition strategies',
            'Meal prep optimization',
            'Eating out guidelines',
          ],
          phasePrice: '$63'
        },
        {
          phase: 'Phase 3: Lifestyle Integration (Weeks 9-12)',
          details: [
            'Maintenance calorie planning',
            'Long-term nutrition education',
            'Weekly strategy calls',
            'Flexible dieting approach',
            'Social eating strategies',
            'Sustainable habit formation',
            'Ongoing support system'
          ],
          phasePrice: '$63'
        }
      ],
      price: '$63 per phase'
    },
    {
      icon: 'bi bi-person-bounding-box',
      title: 'Beginner Online Program',
      duration: '24 Days',
      image: beginnerProgram,
      description: 'Perfect for beginners starting their fitness journey. Access workouts from anywhere with detailed video guides and daily support.',
      features: [
        {
          phase: 'Phase 1: Foundation (Days 1-12)',
          details: [
            'Introduction to fitness',
            'friendly workout routines',
            'Video guides for proper form',
            'Minimal equipment needed',
            'Motivation & Insipirations',
          ]
        },
        {
          phase: 'Phase 2: Build Strength (Days 13-24)',
          details: [
            'Fundamentals of strengh',
            'Progressive workout plans',
            'Weekly progress tracking',
            'Form check support',
          ]
        }
      ],
      price: '$50'
    },
    {
      icon: 'bi bi-lightning-charge',
      title: 'Intermediate Online Program',
      duration: '6 Weeks',
      image: advance,
      description: 'Take your home workouts to the next level with this comprehensive online program designed for those with basic training experience.',
      features: [
        {
          phase: 'Phase 1: Hypertrophy (Weeks 1-3)',
          details: [
            'Introduction to Hypertrophy',
            'Customized gym workouts',
            'Weekly video check-ins',
            'Detailed exercise tutorials',
            'Nutrition tracking guides'
          ]
        },
        {
          phase: 'Phase 2: Power & Performance (Weeks 4-6)',
          details: [
            'Introduction to Power & Performance',
            'Advanced workout variations',
            'Progress video analysis',
            'Online nutrition coaching'
          ]
        }
      ],
      price: '$60'
    },
    {
      icon: 'bi bi-fire',
      title: 'Advanced Elite Online Program',
      duration: '8 Weeks',
      image: elite,
      description: 'Elite-level online coaching program for experienced fitness enthusiasts with premium features and personalized attention.',
      features: [
        {
          phase: 'Phase 1: Strength Foundation (Weeks 1-3)',
          details: [
            'Personalized training plans',
            'Custom nutrition planning',
          ]
        },
        {
          phase: 'Phase 2: Power Development (Weeks 4-6)',
          details: [
            'Advanced video analysis',
            'Bi-weekly plan adjustments',
            'Recovery monitoring',
            'Supplement guidance'
          ]
        },
        {
          phase: 'Phase 3: Peak Performance (Weeks 7-8)',
          details: [
            'Performance optimization',
            'Final assessment call',
            'Future program planning'
          ]
        }
      ],
      price: '$70'
    }
  ];

  return (
    <section id="services" className="programs-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6 text-center">
            <h6 className="text-accent text-uppercase mb-3">Programs</h6>
            <h2 className="display-5 fw-bold mb-4">Transform Your Body With Expert Guidance</h2>
            <p className="lead">Structured fitness programs designed for your success, regardless of your starting point.</p>
          </div>
        </div>

        <div className="row g-4">
          {programs.map((program, index) => (
            <div key={index} className="col-lg-6">
              <div className="program-card">
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                  <div className="program-badge">
                    <span className="duration">{program.duration}</span>
                  </div>
                </div>
                
                <div className="program-content">
                  <div className="program-header">
                    <div className="program-icon">
                      <i className={program.icon}></i>
                    </div>
                    <div>
                      <h3>{program.title}</h3>
                    </div>
                  </div>
                  
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-phases">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="phase-block">
                        <h4 className="phase-title">{feature.phase}</h4>
                        <ul className="phase-details">
                          {feature.details.map((detail, detailIdx) => (
                            <li key={detailIdx}>
                              <i className="bi bi-check2-circle text-accent me-2"></i>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="program-footer">
                    <div className="program-price">{program.price}</div>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-lg rounded-pill w-100"
                    >
                      Join Now
                      <i className="bi bi-arrow-right-circle ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;