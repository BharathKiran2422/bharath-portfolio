
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const blogPosts = [
  {
    title: "10 UI/UX Principles for a Better User Experience",
    description: "Discover the fundamental principles that can transform your designs from good to great. Learn about hierarchy, consistency, feedback, and more.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "July 15, 2024",
    hint: "design interface",
  },
  {
    title: "Getting Started with Next.js 14",
    description: "A beginner-friendly guide to setting up and building your first app with the latest version of Next.js, including App Router and Server Actions.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "July 1, 2024",
    hint: "code screen",
  },
  {
    title: "The Art of Storytelling in Branding",
    description: "Learn how to craft a compelling brand narrative that connects with your audience on an emotional level and builds lasting loyalty.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "June 20, 2024",
    hint: "brand moodboard",
  },
   {
    title: "Mastering Tailwind CSS",
    description: "A deep dive into advanced Tailwind CSS techniques, including custom plugins, theming, and performance optimization for large-scale projects.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "June 10, 2024",
    hint: "css code",
  },
  {
    title: "Introduction to State Management in React",
    description: "Explore different state management solutions in React, from built-in hooks like useState and useReducer to popular libraries like Redux and Zustand.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "May 28, 2024",
    hint: "react code",
  },
];

const DotButton = ({ selected, onClick }: { selected: boolean; onClick: () => void }) => (
  <button
    className={cn(
      "h-3 w-3 rounded-full transition-colors duration-300",
      selected ? "bg-primary" : "bg-muted-foreground/50 hover:bg-muted-foreground"
    )}
    type="button"
    onClick={onClick}
    aria-label="Go to slide"
  />
);

export default function BlogSection() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);
  
  const onSlidesInView = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.slidesInView(true).forEach((index) => {
        const slide = emblaApi.slideNodes()[index];
        slide.classList.remove('is-snapped');
    });

    const snappedSlide = emblaApi.slideNodes()[emblaApi.selectedScrollSnap()];
    snappedSlide.classList.add('is-snapped');

  }, [emblaApi])


  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on('slidesInView', onSlidesInView);
    emblaApi.on('reInit', onSlidesInView);
    onSelect();
    onSlidesInView();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off('slidesInView', onSlidesInView);
    };
  }, [emblaApi, onSelect, onSlidesInView]);

  return (
    <Section id="blog" className="bg-background">
      <SectionTitle>From My Blog</SectionTitle>
      <SectionSubtitle>
        I share my thoughts on design, development, and the tech industry.
      </SectionSubtitle>
      <div className="mt-12">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {blogPosts.map((post, index) => (
              <div key={index} className="embla__slide group p-4">
                <div className="embla__slide__inner">
                  <Card className="flex flex-col h-full overflow-hidden transition-all duration-300">
                    <CardHeader className="p-0 relative h-64 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        data-ai-hint={post.hint}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex flex-col justify-end p-6">
                        <h3 className="font-headline text-xl font-bold text-white">{post.title}</h3>
                        <p className="text-white/80 mt-2 text-sm">{post.description}</p>
                         <div className="flex items-center gap-3 mt-4">
                          <Avatar className="h-8 w-8 border-2 border-white/50">
                            <AvatarImage src={post.authorAvatar} alt={post.author} />
                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-white">{post.author}</p>
                            <p className="text-xs text-white/70">{post.date}</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-3">{post.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
