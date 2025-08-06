"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Camera, Code, Users, Star, Mountain, Image as ImageIcon } from "lucide-react";

type Category = "all" | "development" | "events" | "behind-the-scenes" | "personal" | "nature";

const photos = [
  { src: "https://placehold.co/800x600.png", alt: "Development Screenshot 1", category: "development", hint: "dashboard analytics", className: "md:col-span-2" },
  { src: "https://placehold.co/600x800.png", alt: "College Workshop", category: "events", hint: "workshop presentation", className: "md:row-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Team Collaboration", category: "behind-the-scenes", hint: "team meeting" },
  { src: "https://placehold.co/600x400.png", alt: "Personal Branding Photo", category: "personal", hint: "man portrait" },
  { src: "https://placehold.co/600x800.png", alt: "Mountain Landscape", category: "nature", hint: "mountain landscape", className: "md:row-span-2" },
  { src: "https://placehold.co/800x600.png", alt: "App UI Mockup", category: "development", hint: "mobile app", className: "md:col-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Hackathon Event", category: "events", hint: "hackathon event" },
  { src: "https://placehold.co/600x400.png", alt: "Candid Work Moment", category: "behind-the-scenes", hint: "people working" },
  { src: "https://placehold.co/600x400.png", alt: "Travel Highlight", category: "personal", hint: "city travel" },
];

const tabs: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <Camera className="mr-2 h-4 w-4" /> },
  { key: "development", label: "Development", icon: <Code className="mr-2 h-4 w-4" /> },
  { key: "events", label: "Events", icon: <Users className="mr-2 h-4 w-4" /> },
  { key: "behind-the-scenes", label: "Behind the Scenes", icon: <ImageIcon className="mr-2 h-4 w-4" /> },
  { key: "personal", label: "Personal", icon: <Star className="mr-2 h-4 w-4" /> },
  { key: "nature", label: "Nature", icon: <Mountain className="mr-2 h-4 w-4" /> },
];

export default function PhotoGallerySection() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredPhotos = activeTab === "all"
    ? photos
    : photos.filter(p => p.category === activeTab);

  return (
    <Section id="gallery">
      <SectionTitle>Photo Gallery</SectionTitle>
      <SectionSubtitle>
        A collection of moments from my professional and personal life.
      </SectionSubtitle>
      
      <div className="flex flex-wrap justify-center gap-4 my-12">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            variant={activeTab === tab.key ? "default" : "outline"}
            className={cn("w-full sm:w-auto justify-center", activeTab !== tab.key && "bg-muted/50 dark:bg-card hover:bg-muted dark:hover:bg-muted/50")}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {filteredPhotos.map((photo, index) => (
          <div key={`${photo.alt}-${index}`} className={cn("relative min-h-[250px] w-full overflow-hidden rounded-lg shadow-lg group", photo.className)}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={photo.hint}
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-medium">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}