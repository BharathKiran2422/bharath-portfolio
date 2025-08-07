
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
import { Trash2, Eye, EyeOff, LogOut } from 'lucide-react';
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
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from '@/lib/utils';


function AdminPage() {
  const [authStatus, setAuthStatus] = useState<'checking' | 'authenticated' | 'unauthenticated'>('checking');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(true);
  const [messagesError, setMessagesError] = useState<string | null>(null);
  
  const [filter, setFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Check for session token on initial load
    if (sessionStorage.getItem('admin-authenticated') === 'true') {
      setAuthStatus('authenticated');
    } else {
      setAuthStatus('unauthenticated');
    }
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await verifyAdminPassword(password);
    if (result.success) {
      sessionStorage.setItem('admin-authenticated', 'true');
      setAuthStatus('authenticated');
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
    if (authStatus !== 'authenticated') return;
    fetchMessages();
  }, [authStatus]);

  const handleDelete = async () => {
    if (!messageToDelete) return;
    const result = await deleteMessage(messageToDelete);
    if (result.success) {
      toast({ title: "Success", description: "Message deleted successfully." });
      fetchMessages(); // Refresh messages
    } else {
      toast({ title: "Error", description: `Failed to delete message: ${result.error}`, variant: 'destructive' });
    }
    setDeleteAlertOpen(false);
    setMessageToDelete(null);
  };

  const openDeleteDialog = (id: string) => {
    setMessageToDelete(id);
    setDeleteAlertOpen(true);
  }

  const handleToggleRead = async (id: string, currentStatus: boolean, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent row click from triggering
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

  const handleRowClick = (msg: Message) => {
    setSelectedMessage(msg);
    setDialogOpen(true);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin-authenticated');
    setAuthStatus('unauthenticated');
    setPassword('');
    setError(null);
  }

  if (authStatus === 'checking') {
     return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="space-y-4 w-full max-w-md">
           <Skeleton className="h-10 w-full" />
           <Skeleton className="h-10 w-full" />
           <Skeleton className="h-10 w-full" />
        </div>
      </div>
    );
  }

  if (authStatus === 'unauthenticated') {
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
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Contact Form Submissions</CardTitle>
                    <CardDescription>View and manage messages from your visitors.</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
            </div>
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
                    <TableRow key={msg.id} onClick={() => handleRowClick(msg)} className={cn("cursor-pointer", !msg.read && 'bg-muted/50')}>
                       <TableCell className="text-muted-foreground whitespace-nowrap">
                        {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : 'N/A'}
                      </TableCell>
                      <TableCell className="font-medium">{msg.name}</TableCell>
                      <TableCell>{msg.email}</TableCell>
                      <TableCell className="max-w-[300px] truncate">
                        {msg.message}
                      </TableCell>
                      <TableCell className="text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={(e) => handleToggleRead(msg.id, msg.read, e)} aria-label={msg.read ? 'Mark as unread' : 'Mark as read'}>
                                {msg.read ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{msg.read ? 'Mark as unread' : 'Mark as read'}</p>
                            </TooltipContent>
                          </Tooltip>
                           <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="hover:bg-destructive/10" onClick={(e) => { e.stopPropagation(); openDeleteDialog(msg.id);}} aria-label="Delete message">
                                <Trash2 className="h-4 w-4 text-destructive" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Delete message</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-xl">
          {selectedMessage && (
            <>
              <DialogHeader>
                <DialogTitle>Message from {selectedMessage.name}</DialogTitle>
                <DialogDescription>
                  Received on {new Date(selectedMessage.createdAt).toLocaleString()}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">{selectedMessage.email}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Message</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={deleteAlertOpen} onOpenChange={setDeleteAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the message.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setMessageToDelete(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AdminPage;
