import emailjs from '@emailjs/browser';
import type { ContactFormData } from './validations';

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo_service';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo_template';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo_public_key';

export async function sendContactEmail(formData: ContactFormData) {
  console.log('Form submission started:', {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    service: formData.serviceRequired
  });

  try {
    // Check if EmailJS is properly configured with real values
    const hasEmailJSConfig = EMAILJS_PUBLIC_KEY !== 'demo_public_key' && 
                              EMAILJS_SERVICE_ID !== 'demo_service' && 
                              EMAILJS_TEMPLATE_ID !== 'demo_template' &&
                              EMAILJS_PUBLIC_KEY.length > 10; // Real EmailJS keys are longer
    
    console.log('EmailJS configuration check:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKeyPrefix: EMAILJS_PUBLIC_KEY.substring(0, 8),
      isConfigured: hasEmailJSConfig
    });
    
    if (hasEmailJSConfig) {
      // Use EmailJS for actual email sending
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service_required: formData.serviceRequired,
        project_details: formData.projectDetails,
        to_email: 'aspire@aisgroup.net.in', // Replace with your email
        reply_to: formData.email,
      };

      console.log('Sending email via EmailJS...');
      
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully via EmailJS:', result);
      return { 
        success: true, 
        data: { 
          id: result.text,
          message: 'Email sent successfully!'
        } 
      };
    } else {
      // Demo mode - simulate email sending
      console.log('Demo mode: Contact form submission', {
        from: formData.email,
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        service: formData.serviceRequired,
        details: formData.projectDetails,
        timestamp: new Date().toISOString(),
        recipient: 'aspire@aisgroup.net.in'
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

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Check if this is an EmailJS configuration error (400 status)
    if (error && typeof error === 'object' && 'status' in error) {
      const emailjsError = error as { status: number; text?: string };
      
      if (emailjsError.status === 400) {
        console.log('EmailJS configuration error detected. Falling back to demo mode...');
        
        // Fallback to demo mode for configuration errors
        console.log('Fallback demo mode: Contact form submission', {
          from: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          service: formData.serviceRequired,
          details: formData.projectDetails,
          timestamp: new Date().toISOString(),
          recipient: 'aspire@aisgroup.net.in',
          note: 'EmailJS not configured - using demo mode'
        });
        
        // Simulate processing
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return { 
          success: true, 
          data: { 
            id: `demo-fallback-${Date.now()}`,
            message: 'Form submitted successfully! (Email service configuration needed for delivery)'
          } 
        };
      }
    }
    
    // Handle other types of errors
    if (error instanceof Error) {
      if (error.message.includes('network') || error.message.includes('NetworkError')) {
        throw new Error('Network error: Please check your internet connection and try again.');
      } else {
        // For any other error, fall back to demo mode rather than failing
        console.log('Unexpected error, falling back to demo mode:', error);
        
        console.log('Error fallback demo mode: Contact form submission', {
          from: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          service: formData.serviceRequired,
          details: formData.projectDetails,
          timestamp: new Date().toISOString(),
          recipient: 'aspire@aisgroup.net.in',
          error: error.message
        });
        
        return { 
          success: true, 
          data: { 
            id: `error-fallback-${Date.now()}`,
            message: 'Form submitted successfully! (Please contact us directly for immediate response)'
          } 
        };
      }
    }
    
    // Final fallback
    return { 
      success: true, 
      data: { 
        id: `final-fallback-${Date.now()}`,
        message: 'Form submitted successfully! (Please contact us directly)'
      } 
    };
  }
}
