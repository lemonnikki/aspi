import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  serviceRequired: z.string().min(3, 'Please specify the service required'),
  projectDetails: z.string().min(10, 'Please provide more details about your project'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
