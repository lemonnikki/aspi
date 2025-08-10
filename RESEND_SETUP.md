# Email Setup Guide 

This guide explains how to set up email functionality for the contact and career forms.

## Current Issue

The contact and career forms are not sending emails because:
1. No valid Resend API key is configured
2. Environment variables are missing

## Required Setup

### 1. Get a Resend API Key

1. Go to [https://resend.com/](https://resend.com/)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the API key (it will look like `re_xxxxxxxxxx`)

### 2. Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# Resend API Configuration
RESEND_API_KEY=your_actual_resend_api_key_here

# Email Configuration (optional - defaults provided)
SENDER_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=info@max-imo.com
```

### 3. Configure Environment Variables

Replace `your_actual_resend_api_key_here` with your actual Resend API key.

**Important:** 
- Never commit the `.env.local` file to version control
- The `.env.local` file should be added to `.gitignore`

### 4. Optional: Custom Domain Setup

For production use, consider:

1. **Custom Domain**: Set up a custom domain with Resend for better deliverability
2. **Sender Email**: Change `SENDER_EMAIL` to use your domain (e.g., `noreply@max-imo.com`)
3. **Contact Email**: Verify `CONTACT_EMAIL` is correct

## Testing

After setting up the environment variables:

1. Restart your development server (`npm run dev`)
2. Test the contact form at `/contact`
3. Test the career form at `/careers`
4. Check the browser console and server logs for any errors

## Troubleshooting

### Common Issues:

1. **"Email service is not configured"** error:
   - Check that `RESEND_API_KEY` is set in `.env.local`
   - Restart the development server

2. **401 Unauthorized** error:
   - Verify your Resend API key is correct
   - Check if the API key has expired

3. **403 Forbidden** error:
   - Your domain might not be verified with Resend
   - Use the default `onboarding@resend.dev` sender for testing

4. **Emails not received**:
   - Check spam/junk folders
   - Verify the `CONTACT_EMAIL` address
   - Check Resend dashboard for delivery status

## Current Configuration

- **Resend Package**: Already installed (`resend: ^4.6.0`)
- **API Routes**: Configured at `/api/contact` and `/api/careers`
- **Error Handling**: Proper error messages and validation
- **HTML Templates**: Rich email templates with styling

## Next Steps

1. Set up the environment variables as described above
2. Test both forms thoroughly
3. Consider setting up a custom domain for production
4. Monitor email delivery through Resend dashboard
