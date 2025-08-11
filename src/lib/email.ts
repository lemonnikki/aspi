import emailjs from '@emailjs/browser';
import type { ContactFormData } from './validations';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_ais_aspire'; // You'll need to replace this
const EMAILJS_TEMPLATE_ID = 'template_contact'; // You'll need to replace this  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // You'll need to replace this

export async function sendContactEmail(formData: ContactFormData) {
  console.log('Form submission started:', {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    service: formData.serviceRequired
  });

  try {
    // Initialize EmailJS (you only need to do this once)
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      service_required: formData.serviceRequired,
      project_details: formData.projectDetails,
      to_email: 'aspire@aisgroup.net.in', // Your company email
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };

  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email. Please try again or contact us directly.');
  }
}