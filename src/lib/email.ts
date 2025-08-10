import { Resend } from 'resend';
import type { ContactFormData } from './validations';

// Initialize Resend with API key
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY || import.meta.env.RESEND_API_KEY);

// Email configuration
const SENDER_EMAIL = import.meta.env.VITE_SENDER_EMAIL || import.meta.env.SENDER_EMAIL || 'onboarding@resend.dev';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || import.meta.env.CONTACT_EMAIL || 'info@max-imo.com';

export async function sendContactEmail(formData: ContactFormData) {
  console.log('Form submission started:', {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    service: formData.serviceRequired
  });

  try {
    // Check if Resend is properly configured
    const hasResendConfig = import.meta.env.VITE_RESEND_API_KEY || import.meta.env.RESEND_API_KEY;
    
    if (!hasResendConfig) {
      console.log('Resend API key not configured. Using demo mode...');
      
      // Demo mode - simulate email sending
      console.log('Demo mode: Contact form submission', {
        from: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        service: formData.serviceRequired,
        details: formData.projectDetails,
        timestamp: new Date().toISOString(),
        recipient: CONTACT_EMAIL
      });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return { 
        success: true, 
        data: { 
          id: `demo-${Date.now()}`,
          message: 'Form submitted successfully (demo mode - check console for details)'
        } 
      };
    }

    // Use Resend for actual email sending
    console.log('Sending email via Resend...');
    
          const { data, error } = await resend.emails.send({
        from: SENDER_EMAIL,
        to: [CONTACT_EMAIL],
        replyTo: formData.email,
        subject: `New Contact Form Submission - ${formData.serviceRequired}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { background: #f8f9fa; padding: 10px; border-radius: 4px; margin-top: 5px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 14px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
              <p>A new contact form has been submitted from your website.</p>
            </div>
            
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${formData.firstName} ${formData.lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${formData.email}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${formData.phone}</div>
            </div>
            
            <div class="field">
              <div class="label">Service Required:</div>
              <div class="value">${formData.serviceRequired}</div>
            </div>
            
            <div class="field">
              <div class="label">Project Details:</div>
              <div class="value">${formData.projectDetails}</div>
            </div>
            
            <div class="field">
              <div class="label">Submission Time:</div>
              <div class="value">${new Date().toLocaleString()}</div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
              <p>You can reply directly to this email to contact the person who submitted the form.</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    console.log('Email sent successfully via Resend:', data);
    return { 
      success: true, 
      data: { 
        id: data?.id || 'unknown',
        message: 'Email sent successfully!'
      } 
    };

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('401') || error.message.includes('Unauthorized')) {
        throw new Error('Email service configuration error: Please check your API key.');
      } else if (error.message.includes('403') || error.message.includes('Forbidden')) {
        throw new Error('Email service access denied: Please verify your domain configuration.');
      } else if (error.message.includes('network') || error.message.includes('NetworkError')) {
        throw new Error('Network error: Please check your internet connection and try again.');
      } else {
        throw new Error(`Failed to send email: ${error.message}`);
      }
    }
    
    // Generic error fallback
    throw new Error('Failed to send email: Unknown error occurred');
  }
}
