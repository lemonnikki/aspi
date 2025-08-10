import type { ContactFormData } from './validations';

export async function sendContactEmail(formData: ContactFormData) {
  console.log('Form submission started:', {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    service: formData.serviceRequired
  });

  try {
    // Demo mode - simulate email sending (client-side safe)
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

  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to process form submission. Please try again.');
  }
}
