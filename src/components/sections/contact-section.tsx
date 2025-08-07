"use client"

import React, { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
    { icon: <Mail className="h-6 w-6 text-primary" />, text: "bharathkiranobilisetty@gmail.com" },
    { icon: <Phone className="h-6 w-6 text-primary" />, text: "+91 8639678884" },
    { icon: <MapPin className="h-6 w-6 text-primary" />, text: "Vijayawada, India" },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
    </Button>
  );
}

export default function ContactSection() {
    const { toast } = useToast();
    const formRef = React.useRef<HTMLFormElement>(null);

    const [state, formAction] = useActionState(submitContactForm, {
        message: '',
        errors: undefined,
    });

    useEffect(() => {
        if (state.message) {
            if (state.errors) {
                 toast({
                    title: "Error",
                    description: state.message,
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Success!",
                    description: state.message,
                });
                formRef.current?.reset();
            }
        }
    }, [state, toast]);

  return (
    <Section id="contact" className="bg-background">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubtitle>
        Have a project in mind or just want to say hi? Feel free to reach out.
      </SectionSubtitle>
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-center gap-4 p-6">
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input id="name" name="name" placeholder="Your Name" required aria-label="Your Name" />
                    {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Input id="email" name="email" type="email" placeholder="Your Email" required aria-label="Your Email" />
                    {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea id="message" name="message" placeholder="Your Message" required rows={5} aria-label="Your Message" />
                  {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
