
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { value: "300+", label: "Leetcode solved" },
    { value: "3", label: "Projects completed" },
    { value: "8+", label: "Technologies mastered" },
    { value: "240+", label: "Code commits" },
];

const roles = ["CS Undergrad", "Full-Stack Developer", "AI Enthusiast"];

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M13.48 4.493l-.262.277-1.414 1.488-.002.002-3.535 3.72-2.122 2.23-1.414 1.489-.262.276.262.277 1.414 1.488 2.122 2.23 3.535 3.72 1.414 1.488.262.277.262-.277 1.414-1.488 3.535-3.72 2.122-2.23 1.414-1.489.262-.276-.262-.277-1.414-1.488-2.122-2.23-3.535-3.72-1.414-1.488-.262-.277zm-2.828 8.23l2.12-2.23 1.415 1.488-2.12 2.23-1.415-1.488zm-2.121-2.23l2.12-2.23 1.415 1.488-2.12 2.23-1.414-1.488z" />
    </svg>
);

const CodeChefIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="m19.33 11.08-3.92-1.63-2.73 4.41 6.65-2.78m-11.41 1.05 6.47 2.72-2.61 4.22-3.86-6.94M7.92 9.45l3.92-1.63 2.73 4.41-6.65-2.78M1.08 12l6.84 12 10.9-4.54L8.27 0 1.08 12Z"/>
  </svg>
);

const GFGIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
        <path d="M11.68,5.45H16.46L12,12.09,7.54,5.45h4.14M4.23,2.3H20.22l-8,14.65L4.23,2.3M2,2,8,13.1,2,21.62H14.15V18.32h-8.1L12,11.68l3.94,6.64h2.72L12,3.38,2.72,20.21H22V2Z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);


export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(150);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 75 : 150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative flex justify-center lg:justify-start animate-in fade-in slide-in-from-right-8 duration-1000 order-1 lg:order-2">
                <div className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px] group">
                    <div className="absolute inset-0.5 bg-gradient-to-r from-primary/80 to-accent/80 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <Image
                    src="https://placehold.co/600x600.png"
                    alt="Bharath's Profile Picture"
                    width={600}
                    height={600}
                    priority
                    data-ai-hint="portrait man"
                    className="relative h-full w-full rounded-full object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                </div>
            </div>
            <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1 text-center lg:text-left mx-auto lg:mx-0">
                <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">Hi, I'm <span className="text-primary">Bharath Kiran</span></h1>
                <p className="mt-2 font-headline text-2xl font-medium">
                I'm a <span className="text-primary">{text}</span>
                <span className="animate-ping">|</span>
                </p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I specialize in creating intuitive, beautiful, and user-friendly digital experiences. From concept to deployment, I bring ideas to life with clean code and thoughtful design using technologies like React, Node.js, and Firebase.
                </p>
                <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                <Button size="lg" asChild>
                    <Link href="#contact">
                    <Send className="mr-2 h-5 w-5" />
                    Hire Me
                    </Link>
                </Button>
                <Link href="https://github.com/BharathKiran2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/bharath-kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://leetcode.com/Bharath_Kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <LeetCodeIcon className="h-6 w-6" />
                </Link>
                <Link href="https://www.codechef.com/users/bharath2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <CodeChefIcon className="h-6 w-6" />
                </Link>
                 <Link href="https://www.geeksforgeeks.org/user/bharath_kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <GFGIcon className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/bharath2422_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <InstagramIcon className="h-6 w-6" />
                </Link>
                </div>
            </div>
            </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-center gap-4">
                    <p className="font-headline text-5xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{stat.label.replace(' ', '\n')}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
