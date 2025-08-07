'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormState = {
  message: string;
  errors?: {
    name?: string[];
    email?:string[];
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
      message: 'Failed to save message. Please check your input.',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await addDoc(collection(db, 'Messages'), {
      ...parsed.data,
      createdAt: serverTimestamp(),
    });

    return { message: 'Your message has been saved successfully!' };
  } catch (e: any) {
    console.error('Failed to save message to Firestore:', e);
    const errorMessage = e.message || 'An unknown error occurred.';
    return { message: `Error saving message: ${errorMessage}. Please try again later.` };
  }
}


export async function verifyAdminPassword(password: string): Promise<{success: boolean; error?: string}> {
    if (password === process.env.ADMIN_PASSWORD) {
        return { success: true };
    } else {
        return { success: false, error: 'Invalid password.' };
    }
}
