'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';

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

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp;
}

// This function will be called from the admin page to fetch messages.
// Because it's a server action, it runs with admin privileges and can bypass client-side security rules.
export async function getMessages(): Promise<{ messages?: Message[]; error?: string; }> {
  try {
    const messagesCollection = collection(db, 'Messages');
    const q = query(messagesCollection, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const messagesData = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        // The createdAt field needs to be handled carefully as it's a Timestamp
        createdAt: data.createdAt,
      };
    }) as Message[];
    return { messages: messagesData };
  } catch (err: any) {
    console.error('Error fetching messages from server action:', err);
    return { error: 'Failed to load messages: ' + err.message };
  }
}
