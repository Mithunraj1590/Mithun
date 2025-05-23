import { z } from 'zod';

export const ContactFormSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[^\d]*$/, 'First name cannot contain numbers'),
  lastName: z.string()
   .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[^\d]*$/, 'Last name cannot contain numbers'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  mobile: z.string()
     .min(1, 'Phone number is required')
    .regex(/^[0-9]+$/, 'Only numbers are allowed')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits'),
  message: z.string()
    .min(1, 'Message is required')
    .max(1000, 'Message must be less than 1000 characters')
});