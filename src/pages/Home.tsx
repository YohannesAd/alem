import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Home page component for Alem Asefa's counseling website
 * Features hero section, services overview, and call-to-action
 */
const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-primary-50 py-12 sm:py-16 lg:py-20 min-h-[70vh] sm:min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4 sm:mb-6">
              Find Your Path to
              <span className="text-primary block">Mental Wellness</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-light mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Culturally informed, affirming, and tailored counseling services with Alem Asefa, MS, LCPC.
              Evidence-based therapy to help you feel less "stuck", gain insight, and learn healthier
              ways of adapting and problem solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="btn-primary text-xs sm:text-sm lg:text-base px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 w-full sm:w-auto max-w-xs"
                aria-label="Schedule your free 15-minute consultation"
              >
                <span className="block sm:inline">Free 15-Minute</span>
                <span className="block sm:inline sm:ml-1">Consultation</span>
              </Link>
              <Link
                to="/about"
                className="btn-secondary text-xs sm:text-sm lg:text-base px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 w-full sm:w-auto max-w-xs"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Specialized Counseling Services
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Personalized therapy approaches tailored to your unique needs and goals
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service Card 1 */}
            <div className="bg-secondary p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Anxiety & Depression</h3>
              <p className="text-text-light">
                Evidence-based treatment for anxiety disorders, depression, and mood-related challenges using DBT and CBT approaches.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-secondary p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">Trauma & PTSD</h3>
              <p className="text-text-light">
                Specialized trauma-informed care for healing from PTSD, C-PTSD, and complex trauma experiences.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-secondary p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">ADHD & Neurodivergence</h3>
              <p className="text-text-light">
                Support for ADHD, OCD, and other neurodivergent experiences with culturally sensitive approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-text-light mb-8">
              Take the first step towards better mental health. Schedule your free consultation today.
            </p>
            <Link
              to="/contact"
              className="btn-primary text-xs sm:text-sm lg:text-base px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4"
              aria-label="Schedule your free 15-minute consultation"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
