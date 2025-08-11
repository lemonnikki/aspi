# Email Setup Guide 

This guide explains how to set up email functionality for the contact and career forms.

## Current Issue

The contact forms are not sending emails because:
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

Create a `.env` file in the root directory with the following content:

```env
# Resend API Configuration
RESEND_API_KEY=your_actual_resend_api_key_here

# Email Configuration (optional - defaults provided)
SENDER_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=aspire@aisgroup.net.in
```

### 3. Configure Environment Variables

Replace `your_actual_resend_api_key_here` with your actual Resend API key.

**Important:** 
- Never commit the `.env` file to version control
- The `.env` file should be added to `.gitignore`

### 4. Optional: Custom Domain Setup

For production use, consider:

1. **Custom Domain**: Set up a custom domain with Resend for better deliverability
2. **Sender Email**: Change `SENDER_EMAIL` to use your domain (e.g., `noreply@aisgroup.net.in`)
3. **Contact Email**: Verify `CONTACT_EMAIL` is correct

### 5. Running the Application

To run the full application with email functionality:

```bash
# Install dependencies
npm install

# Run both frontend and backend
npm run dev:full
```

Or run them separately:

```bash
# Terminal 1 - Backend API server
npm run server

# Terminal 2 - Frontend development server
npm run dev
```

## Testing

After setting up the environment variables:

1. Start both servers (`npm run dev:full`)
2. Test the contact form at `/contact`
3. Check the browser console and server logs for any errors

## Troubleshooting

### Common Issues:

1. **"Email service is not configured"** error:
   - Check that `RESEND_API_KEY` is set in `.env`
   - Restart both servers

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

5. **Connection refused** error:
   - Make sure the API server is running on port 3001
   - Check that both frontend and backend are running

## Current Configuration

- **Resend Package**: Already installed (`resend: ^6.0.1`)
- **API Routes**: Configured at `/api/contact`
- **Backend Server**: Express.js server on port 3001
- **Error Handling**: Proper error messages and validation
- **HTML Templates**: Rich email templates with styling

## Next Steps

1. Set up the environment variables as described above
2. Test the contact form thoroughly
3. Consider setting up a custom domain for production
4. Monitor email delivery through Resend dashboard