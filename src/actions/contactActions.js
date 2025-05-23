"use server";

import { Resend } from 'resend';
import { ContactFormSchema } from '@/schemas/contactFormSchema'; 

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "mithunraj1590@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export async function submitContactForm(formData) {
  // Validate form data
  const validatedFields = ContactFormSchema.safeParse(formData);
  
  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    return {
      success: false,
      message: 'Invalid form data',
      errors
    };
  }

  const { firstName, lastName, email, mobile, message } = validatedFields.data;

  try {
    // Send email to admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">From:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${mobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <p style="margin-top: 16px; font-size: 12px; color: #777;">
            Submitted via: ${process.env.NEXT_PUBLIC_SITE_URL}
          </p>
        </div>
      `
    });

    // Send confirmation to user
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you, ${firstName}!</h2>
          <p>We've received your message and will get back to you soon.</p>
          
          <div style="background: #f9f9f9; padding: 16px; margin: 16px 0; border-left: 4px solid #ddd;">
            <p style="font-weight: bold;">Your message:</p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;"/>
          
          <p>Best regards,</p>
          <p>Your Team</p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again later.'
    };
  }
}