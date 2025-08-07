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

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
           <div className="relative flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 order-1 lg:order-2">
             <div className="relative h-80 w-80 sm:h-96 sm:w-96 lg:h-[450px] lg:w-[450px]">
               <Image
                src="https://placehold.co/600x600.png"
                alt="Bharath's Profile Picture"
                width={600}
                height={600}
                priority
                data-ai-hint="portrait man"
                className="relative h-full w-full rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1 text-center lg:text-left">
            <p className="font-headline text-lg font-medium text-primary">Hi, my name is Bharath Kiran Obilisetty</p>
            <h1 className="mt-2 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              I'm a Full-Stack Developer &amp; AI Enthusiast
            </h1>
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
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8 text-center md:grid-cols-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {stats.map((stat) => (
                <div key={stat.label}>
                    <p className="font-headline text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
