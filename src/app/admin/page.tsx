
'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp;
}

function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesCollection = collection(db, 'messages');
        const q = query(messagesCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const messagesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];
        setMessages(messagesData);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError('Failed to load messages. Please ensure you have the correct Firestore permissions.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight">Contact Form Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {error && <p className="text-destructive">{error}</p>}
            {loading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                   <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                ))}
              </div>
            ) : messages.length === 0 && !error ? (
              <p>No messages yet.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Received</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {messages.map((msg) => (
                    <TableRow key={msg.id}>
                      <TableCell>
                        {msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toLocaleString() : 'N/A'}
                      </TableCell>
                      <TableCell>{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell>{msg.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default AdminPage;
