import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import type { EmailTemplateParams } from '../config/emailjs';

/**
 * Contact page component for Alem Asefa's counseling website
 * Features contact information and consultation booking form
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    serviceInterest: '',
    message: '',
    consultationTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    try {
      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        preferred_contact: formData.preferredContact,
        service_interest: formData.serviceInterest || 'Not specified',
        consultation_time: formData.consultationTime || 'Not specified',
        message: formData.message || 'No additional message',
        to_email: 'alem@amracounseling.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      // Success message
      setSubmitMessage('Thank you! Your consultation request has been sent successfully. Alem will contact you within 24 hours.');
      setIsError(false);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        serviceInterest: '',
        message: '',
        consultationTime: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try calling (571) 576-3057 or emailing alem@amracounseling.com directly.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 flex flex-col">
      {/* Scroll target for navigation */}
      <div id="page-top" style={{ position: 'absolute', top: 0 }}></div>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4 sm:mb-6">
            Contact & Consultation
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Ready to take the first step? Schedule your free 15-minute consultation 
            to discuss your needs and how I can support your mental health journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text mb-6 sm:mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Office Location
                </h3>
                <p className="text-text-light">
                  Baltimore, MD 21218<br />
                  Rockville, MD 20854<br />
                  Virtual Sessions Available
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-text">(571) 576-3057</p>
                    <p className="text-sm text-text-light">Call or text for free 15-minute consultation</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-6 h-6 text-primary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-text">alem@amracounseling.com</p>
                    <p className="text-sm text-text-light">Secure email communication</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-text mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h3>
                <div className="space-y-2 text-text-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>Virtual Sessions</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekdays:</span>
                    <span>Standard Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Early Evenings:</span>
                    <span>Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekend:</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-accent-50 border-l-4 border-accent p-6">
                <h3 className="font-semibold text-text mb-2">Crisis Support</h3>
                <p className="text-sm text-text-light">
                  If you are experiencing a mental health emergency, please call 911 
                  or the National Suicide Prevention Lifeline at 988.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-8">
              Schedule Your Free Consultation
            </h2>
            
            {submitMessage && (
              <div className={`p-4 rounded-lg mb-6 ${
                isError
                  ? 'bg-red-50 border border-red-300 text-red-800'
                  : 'bg-green-50 border border-green-300 text-green-800'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-text mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="consultationTime" className="block text-sm font-medium text-text mb-2">
                  Preferred Consultation Time
                </label>
                <input
                  type="text"
                  id="consultationTime"
                  name="consultationTime"
                  value={formData.consultationTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
                  placeholder="e.g., Weekday mornings, Friday afternoons"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
                  placeholder="Tell me a bit about what brings you to counseling or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
              </button>

              <p className="text-sm text-text-light text-center">
                * Required fields. Your information is confidential and secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
