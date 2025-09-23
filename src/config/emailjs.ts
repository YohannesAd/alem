/**
 * EmailJS configuration for contact form
 * This handles sending emails from the contact form to alem@amracounseling.com
 */

export const emailjsConfig = {
  // These will be your actual EmailJS credentials
  // You'll get these from https://www.emailjs.com/
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY'
};

/**
 * Email template parameters that will be sent
 * This matches the form data structure
 */
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  phone: string;
  preferred_contact: string;
  service_interest: string;
  consultation_time: string;
  message: string;
  to_email: string;
}
