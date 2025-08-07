"use server";

import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      message: 'Failed to send message. Please check your input.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  try {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // Replace with your verified domain
        to: 'bharathkiranobilisetty@gmail.com',
        subject: `New message from ${name} via Portfolio`,
        reply_to: email,
        react: EmailTemplate({ name, email, message }),
    });

    if (error) {
        console.error("Resend error:", error);
        return { message: "Error sending message. Please try again later."};
    }

    return { message: 'Your message has been sent successfully!' };
  } catch(e) {
    console.error("Failed to send email:", e);
    return { message: "Error sending message. Please try again later." };
  }
}
