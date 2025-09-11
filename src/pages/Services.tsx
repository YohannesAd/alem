import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Services page component for Alem Asefa's counseling website
 * Features detailed service offerings and therapeutic approaches
 */
const Services: React.FC = () => {
  const services = [
    {
      title: 'Anxiety & Depression',
      description: 'Evidence-based treatment for anxiety disorders, depression, and mood-related challenges.',
      features: [
        'Generalized Anxiety Disorder',
        'Depression and Mood Disorders',
        'Social Anxiety and Phobias',
        'Panic Disorder',
        'Bipolar I & II Disorder'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Trauma & PTSD',
      description: 'Specialized trauma-informed care for healing from traumatic experiences.',
      features: [
        'PTSD and C-PTSD Treatment',
        'Trauma Recovery',
        'Domestic Violence Support',
        'Childhood Trauma',
        'Complex Trauma Healing'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'ADHD & Neurodivergence',
      description: 'Support for ADHD, OCD, and other neurodivergent experiences.',
      features: [
        'ADHD Assessment and Support',
        'Obsessive-Compulsive Disorder (OCD)',
        'Executive Function Skills',
        'Coping Strategies',
        'Self-Advocacy and Empowerment'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Life Challenges & Wellness',
      description: 'Support for various life challenges and health-related concerns.',
      features: [
        'Life Transitions and Adjustments',
        'Relationship Issues and Family Conflict',
        'Self-Esteem and Body Image',
        'Substance Use and Dual Diagnosis',
        'Health Conditions (PMS/PMDD, PCOS, Chronic Illness)'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen py-20 flex flex-col">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-text mb-6">
            Counseling Services
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Culturally informed, affirming, and tailored counseling services for adults 18+
            to help with various life challenges and promote healing, growth, and resilience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-16 sm:mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-primary-100 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center text-white mb-3 sm:mb-0 sm:mr-4">
                  {service.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text">{service.title}</h2>
              </div>
              
              <p className="text-text-light mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-text">What We Address:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Therapeutic Approaches */}
        <div className="bg-secondary rounded-lg p-4 sm:p-8 lg:p-12 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6 sm:mb-8 text-center">
            Therapeutic Approaches
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text mb-4">
                Dialectical Behavior Therapy (DBT)
              </h3>
              <p className="text-text-light">
                Skills-based approach focusing on emotion regulation, distress tolerance,
                interpersonal effectiveness, and mindfulness.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text mb-4">
                Cognitive Behavioral Therapy (CBT)
              </h3>
              <p className="text-text-light">
                Evidence-based approach examining the relationship between thoughts,
                feelings, and behaviors to promote positive change.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-text mb-4">
                Person-Centered & Culturally Sensitive
              </h3>
              <p className="text-text-light">
                Affirming, culturally informed approach that honors your unique
                background and experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Session Information */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="bg-primary-50 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4 sm:mb-6">Session Information</h2>
            <div className="space-y-4 text-text-light">
              <div className="flex justify-between">
                <span>Individual Session:</span>
                <span className="font-medium">Virtual Only</span>
              </div>
              <div className="flex justify-between">
                <span>Session Fee:</span>
                <span className="font-medium text-primary">$120 per session</span>
              </div>
              <div className="flex justify-between">
                <span>Free Consultation:</span>
                <span className="font-medium text-primary">15 minutes</span>
              </div>
              <div className="flex justify-between">
                <span>Schedule:</span>
                <span className="font-medium">Weekdays & Early Evenings</span>
              </div>
            </div>
          </div>

          <div className="bg-accent-50 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-4 sm:mb-6">Insurance Accepted</h2>
            <div className="space-y-4 text-text-light">
              <p className="font-medium text-text">In-network with major insurance plans:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Aetna
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  BlueCross BlueShield / CareFirst
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cigna and Evernorth
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UnitedHealthcare (UHC/UBH)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kaiser Permanente Mid-Atlantic
                </li>
              </ul>
              <p className="text-sm mt-4">Private pay: $120/session. We work with you to keep therapy affordable.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step toward better mental health. Schedule your free 
            consultation to discuss how I can support your goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-secondary font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="Schedule your free 15-minute consultation"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
