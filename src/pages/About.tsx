import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * About page component for Alem Asefa's counseling website
 * Features professional background, credentials, and approach
 */
const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 flex flex-col">
      {/* Scroll target for navigation */}
      <div id="page-top" style={{ position: 'absolute', top: 0 }}></div>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4 sm:mb-6">
            About Alem Asefa, MS, LCPC
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Licensed Clinical Professional Counselor providing culturally informed,
            affirming, and tailored counseling services for adults 18+ in Maryland.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Professional Photo */}
          <div className="order-2 lg:order-1">
            <div className="bg-secondary rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                {!imageError ? (
                  <img
                    src="/alem.jpeg"
                    alt="Alem Asefa, Licensed Clinical Professional Counselor"
                    className="w-80 h-80 object-cover rounded-lg shadow-lg mx-auto"
                    onError={() => setImageError(true)}
                    onLoad={() => console.log('Image loaded successfully')}
                  />
                ) : (
                  <div className="w-80 h-80 bg-primary-100 rounded-lg shadow-lg mx-auto flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-text font-medium">Alem Asefa, MS, LCPC</p>
                      <p className="text-text-light text-sm">Licensed Clinical Professional Counselor</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-text mb-6">
              Hello and Welcome!
            </h2>
            <div className="space-y-6 text-text-light leading-relaxed">
              <p>
                I provide 18+ clients with culturally informed, affirming, and tailored counseling
                services to help with various life challenges, including low self-esteem, trauma,
                anxiety, depression, PTSD, C-PTSD, 1st-2nd generation issues, ADHD, OCD, Bipolar I & II,
                social-political stress, adjustments/transitions, body image issues, relationships,
                substance use, financial stress, work/academic challenges, and grief/loss.
              </p>
              <p>
                My culturally sensitive and trauma-informed approach helps clients feel less "stuck",
                gain insight, and learn healthier ways of adapting and problem solving. I am skilled
                at helping clients identify and adopt healthier strategies to addressing and resolving challenges.
              </p>
              <p>
                My core values include kindness, non-judgment, empathy, respect, and humility. I have
                several years of experience supporting individuals using evidence-based interventions
                to foster healing, growth, and resilience. I previously worked as a school counselor
                with teens and families.
              </p>
            </div>
          </div>
        </div>

        {/* Credentials & Education */}
        <div className="bg-secondary rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            Credentials & Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">Education</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Johns Hopkins University School of Education - M.S., Counseling (2016)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dialectical Behavior Therapy (C-DBT) Certification (2025)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Verified by Psychology Today
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text mb-4">Licenses & Certifications</h3>
              <ul className="space-y-3 text-text-light">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed Clinical Professional Counselor (LCPC) - Maryland LC15939
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dialectical Behavior Therapy (C-DBT) Certified
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Independently Licensed to Practice in Maryland
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Therapeutic Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">
            My Therapeutic Approach
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Person-Centered</h3>
              <p className="text-text-light">
                Honoring your unique experiences with kindness, non-judgment, empathy, respect, and humility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Culturally Sensitive</h3>
              <p className="text-text-light">
                Providing culturally informed and affirming therapy that respects your background and identity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 2 2 0 01-2-2 48 48 0 018.339-4.876 2 2 0 002.322 0 48 48 0 018.339 4.876 2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Trauma-Informed</h3>
              <p className="text-text-light">
                Using evidence-based DBT and CBT approaches to foster healing, growth, and resilience.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-text mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
            I'm here to support you every step of the way. Let's work together 
            to help you achieve your mental health goals.
          </p>
          <Link
            to="/contact"
            className="btn-primary text-lg px-8 py-4"
            aria-label="Schedule your free 15-minute consultation"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
