# EmailJS Setup Guide

This guide explains how to set up EmailJS for the contact form to work without a backend server.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_gmail`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{service_required}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Service Required: {{service_required}}

Project Details:
{{project_details}}

---
This email was sent from the AIS Aspire website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_contact`)

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (starts with something like `user_`)

## Step 5: Update Configuration

Update the values in `src/lib/email.ts`:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here'; // From Step 2
const EMAILJS_TEMPLATE_ID = 'your_template_id_here'; // From Step 3  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // From Step 4
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form and submit
3. Check your email inbox for the message
4. Check the browser console for any errors

## Free Plan Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

## Troubleshooting

### Common Issues:

1. **"User ID is required"** - Make sure you've set the correct public key
2. **"Service not found"** - Check your service ID
3. **"Template not found"** - Check your template ID
4. **Emails not received** - Check spam folder, verify email service setup

### Testing:

You can test EmailJS directly in their dashboard before implementing it in your app.

## Security Note

The public key is safe to use in frontend code - it's designed for client-side use and has built-in rate limiting.