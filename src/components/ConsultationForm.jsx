import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './styles/ConsultationForm.css';

// Initialize EmailJS
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="success-modal">
      <div className="success-content">
        <div className="success-icon">
          <i className="bi bi-check-circle-fill"></i>
        </div>
        <h2>Thank You for Choosing MFit!</h2>
        <div className="success-message">
          <p className="main-message">Your consultation request has been successfully submitted.</p>
          <div className="details">
            <p><i className="bi bi-clock"></i> We'll review your information within 24 hours</p>
            <p><i className="bi bi-envelope"></i> You'll receive a confirmation email shortly</p>
            <p><i className="bi bi-chat-dots"></i> We'll contact you to discuss your fitness journey</p>
          </div>
        </div>
        <button 
          className="success-btn" 
          onClick={onClose}
          aria-label="Close success message"
        >
          <i className="bi bi-check2-circle"></i> Close
        </button>
      </div>
    </div>
  );
};

const ConsultationForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    fitnessGoals: [],
    experienceLevel: '',
    healthIssues: '',
    preferredTime: '',
    message: ''
  });

  // Countries list
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", 
    "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", 
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", 
    "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", 
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
    "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ].sort();

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        fitnessGoals: [],
        experienceLevel: '',
        healthIssues: '',
        preferredTime: '',
        message: ''
      });
    }
  }, [isOpen]);

  const steps = [
    {
      title: "Personal Information",
      subtitle: "Let's get to know you better",
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
        { 
          name: 'location', 
          label: 'Country', 
          type: 'select',
          options: countries,
          required: true 
        }
      ]
    },
    {
      title: "Physical Information",
      subtitle: "Help us understand your current status",
      fields: [
        { name: 'age', label: 'Age', type: 'number', required: true },
        { 
          name: 'gender', 
          label: 'Gender', 
          type: 'select', 
          options: ['Male', 'Female', 'Other', 'Prefer not to say'],
          required: true 
        },
        { 
          name: 'weight', 
          label: 'Weight (in kg)', 
          type: 'number',
          required: true,
          step: '0.1',
          min: '30',
          max: '250',
          placeholder: 'Enter your weight in kilograms'
        },
        { 
          name: 'height', 
          label: 'Height (in cm)', 
          type: 'number',
          required: true,
          step: '1',
          min: '100',
          max: '250',
          placeholder: 'Enter your height in centimeters'
        }
      ]
    },
    {
      title: "Fitness Goals",
      subtitle: "Tell us what you want to achieve",
      fields: [
        { 
          name: 'fitnessGoals', 
          label: 'Fitness Goals (Select all that apply)', 
          type: 'checkbox',
          options: [
            'Weight Loss',
            'Muscle Gain',
            'Strength Training',
            'shredding',
            'MentorShip'
          ]
        },
        { 
          name: 'experienceLevel', 
          label: 'Fitness Experience Level', 
          type: 'select',
          options: ['Beginner', 'Intermediate', 'Advanced'],
          required: true 
        }
      ]
    },
    {
      title: "Health & Schedule",
      subtitle: "Final steps to customize your program",
      fields: [
        { 
          name: 'healthIssues', 
          label: 'Any health issues or injuries we should know about?', 
          type: 'textarea',
          placeholder: 'Please share any relevant health conditions or injuries...'
        },
        { 
          name: 'preferredTime', 
          label: 'Preferred Contact Time', 
          type: 'select',
          options: ['Morning', 'Afternoon', 'Evening'],
          required: true 
        },
        { 
          name: 'message', 
          label: 'Additional Information', 
          type: 'textarea',
          placeholder: 'Tell us more about your fitness journey and goals...'
        }
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const goals = [...formData.fitnessGoals];
      if (checked) {
        goals.push(value);
      } else {
        const index = goals.indexOf(value);
        if (index > -1) goals.splice(index, 1);
      }
      setFormData(prev => ({ ...prev, fitnessGoals: goals }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedGoals = formData.fitnessGoals.join(', ');
      
      const templateParams = {
        to_name: "Coach Mumba",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        location: formData.location,
        age: formData.age,
        gender: formData.gender,
        weight: formData.weight,
        height: formData.height,
        fitness_goals: formattedGoals,
        experience_level: formData.experienceLevel,
        health_issues: formData.healthIssues || 'None specified',
        preferred_time: formData.preferredTime,
        message: formData.message || 'No additional message'
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'select':
        return (
          <select 
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            className="form-select"
          >
            <option value="">Select {field.label}</option>
            {field.options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      
      case 'checkbox':
        return (
          <div className="checkbox-group">
            {field.options.map(option => (
              <div key={option} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={option}
                  name={field.name}
                  value={option}
                  checked={formData[field.name].includes(option)}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        );
      
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            className="form-control"
            rows="3"
            placeholder={field.placeholder}
          />
        );
      
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
            required={field.required}
            className="form-control"
            placeholder={field.placeholder}
            min={field.min}
            max={field.max}
            step={field.step}
          />
        );
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="consultation-modal">
        <div className="consultation-content">
          <button className="close-button" onClick={onClose}>×</button>
          <div className="progress-bar">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`progress-step ${index + 1 <= step ? 'active' : ''}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit}>
            <h2>{steps[step - 1].title}</h2>
            <p className="step-subtitle">{steps[step - 1].subtitle}</p>
            
            {steps[step - 1].fields.map((field, index) => (
              <div key={index} className="form-group">
                <label>{field.label}</label>
                {renderField(field)}
              </div>
            ))}

            <div className="button-group">
              {step > 1 && (
                <button 
                  type="button" 
                  className="btn btn-outline-success"
                  onClick={() => setStep(step - 1)}
                >
                  <i className="bi bi-arrow-left"></i>
                  Previous
                </button>
              )}
              
              {step < steps.length ? (
                <button 
                  type="button" 
                  className="btn btn-success"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                  <i className="bi bi-arrow-right"></i>
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  Submit
                  <i className="bi bi-check2-circle"></i>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <SuccessModal 
        isOpen={showSuccess} 
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }} 
      />
    </>
  );
};

export default ConsultationForm; 