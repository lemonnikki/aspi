import { Resend } from 'resend';
import type { ContactFormData } from '../../lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.serviceRequired || !formData.projectDetails) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.SENDER_EMAIL || 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'aspire@aisgroup.net.in'],
      subject: `New Contact Form Submission - ${formData.serviceRequired}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #374151; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>AIS Aspire Industrial Solutions</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${formData.firstName} ${formData.lastName}</div>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${formData.email}</div>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <div class="value">${formData.phone}</div>
            </div>
            <div class="field">
              <span class="label">Service Required:</span>
              <div class="value">${formData.serviceRequired}</div>
            </div>
            <div class="field">
              <span class="label">Project Details:</span>
              <div class="value">${formData.projectDetails}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the AIS Aspire website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }

    return res.status(200).json({ 
      success: true, 
      data: { 
        id: data?.id,
        message: 'Email sent successfully!' 
      } 
    });

  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ 
      message: 'Internal server error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}