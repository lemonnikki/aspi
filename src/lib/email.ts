import type { ContactFormData } from './validations';

export async function sendContactEmail(formData: ContactFormData) {
  console.log('Form submission started:', {
    name: `${formData.firstName} ${formData.lastName}`,
    email: formData.email,
    service: formData.serviceRequired
  });

  try {
    // Send request to API route
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    return result;

  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to process form submission. Please try again.');
  }
}