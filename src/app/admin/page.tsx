
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { verifyAdminPassword, getMessages, deleteMessage, toggleMessageReadStatus, Message } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Trash2, Eye, EyeOff } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [messagesError, setMessagesError] = useState<string | null>(null);
  
  const [filter, setFilter] = useState('all');
  const { toast } = useToast();

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await verifyAdminPassword(password);
    if (result.success) {
      setIsAuthenticated(true);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setLoading(false);
  };
  
  const fetchMessages = async () => {
    setMessagesLoading(true);
    const result = await getMessages();
    if (result.messages) {
      setMessages(result.messages);
    } else if (result.error) {
      setMessagesError(result.error);
    }
    setMessagesLoading(false);
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    fetchMessages();
  }, [isAuthenticated]);

  const handleDelete = async (id: string) => {
    const result = await deleteMessage(id);
    if (result.success) {
      toast({ title: "Success", description: "Message deleted successfully." });
      fetchMessages(); // Refresh messages
    } else {
      toast({ title: "Error", description: `Failed to delete message: ${result.error}`, variant: 'destructive' });
    }
  };

  const handleToggleRead = async (id: string, currentStatus: boolean) => {
    const result = await toggleMessageReadStatus(id, currentStatus);
    if (result.success) {
      toast({ title: "Success", description: `Message marked as ${!currentStatus ? 'read' : 'unread'}.` });
      fetchMessages(); // Refresh messages
    } else {
      toast({ title: "Error", description: `Failed to update status: ${result.error}`, variant: 'destructive' });
    }
  };
  
  const filteredMessages = useMemo(() => {
    if (filter === 'all') return messages;
    if (filter === 'read') return messages.filter(m => m.read);
    if (filter === 'unread') return messages.filter(m => !m.read);
    return messages;
  }, [filter, messages]);

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Verifying...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tight">Contact Form Submissions</CardTitle>
            <CardDescription>View and manage messages from your visitors.</CardDescription>
             <Tabs value={filter} onValueChange={setFilter} className="pt-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="read">Read</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            {messagesError && <p className="text-destructive">{messagesError}</p>}
            {messagesLoading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                   <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <div className="space-y-2 flex-grow">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                     <Skeleton className="h-8 w-8" />
                     <Skeleton className="h-8 w-8" />
                  </div>
                ))}
              </div>
            ) : filteredMessages.length === 0 && !messagesError ? (
              <p>No messages in this category.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Received</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages.map((msg) => (
                    <TableRow key={msg.id} className={!msg.read ? 'bg-muted/50' : ''}>
                       <TableCell className="text-muted-foreground">
                        {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : 'N/A'}
                      </TableCell>
                      <TableCell className="font-medium">{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell>
                         <Popover>
                          <PopoverTrigger asChild>
                            <span className="cursor-pointer hover:text-primary">
                                {msg.message.length > 50 ? `${msg.message.substring(0, 50)}...` : msg.message}
                            </span>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <h4 className="font-medium mb-2">Full Message</h4>
                            <p className="text-sm text-muted-foreground">{msg.message}</p>
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => handleToggleRead(msg.id, msg.read)} aria-label={msg.read ? 'Mark as unread' : 'Mark as read'}>
                           {msg.read ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                         <AlertDialog>
                          <AlertDialogTrigger asChild>
                             <Button variant="ghost" size="icon" aria-label="Delete message">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the message.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(msg.id)}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
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
