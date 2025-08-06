"use server";

import { z } from 'zod';

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

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a success response.
  console.log('New message received:');
  console.log(parsed.data);

  return { message: 'Your message has been sent successfully!' };
}
