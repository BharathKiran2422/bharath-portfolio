import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a custom CMS and payment integration.",
    image: "https://placehold.co/600x400.png",
    tags: ["UI/UX", "Next.js", "Stripe"],
    hint: "online store",
  },
  {
    title: "SaaS Dashboard",
    description: "A complex data visualization dashboard for a business intelligence SaaS product.",
    image: "https://placehold.co/600x400.png",
    tags: ["React", "Charts", "UI Design"],
    hint: "dashboard interface",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking application for iOS and Android.",
    image: "https://placehold.co/600x400.png",
    tags: ["Mobile App", "Fintech", "Security"],
    hint: "mobile banking",
  },
  {
    title: "Corporate Website",
    description: "A professional and modern website for a major technology corporation.",
    image: "https://placehold.co/600x400.png",
    tags: ["Branding", "Webflow", "SEO"],
    hint: "corporate website",
  },
  {
    title: "Healthcare Portal",
    description: "A HIPAA-compliant patient portal for a regional healthcare provider.",
    image: "https://placehold.co/600x400.png",
    tags: ["Healthcare", "Security", "React"],
    hint: "patient portal",
  },
  {
    title: "Travel Booking Site",
    description: "A user-friendly travel booking platform with advanced search and filtering.",
    image: "https://placehold.co/600x400.png",
    tags: ["UI/UX", "API Integration", "Next.js"],
    hint: "travel booking",
  },
];

export default function WorkSection() {
  return (
    <Section id="work" className="bg-muted/50 dark:bg-card">
      <SectionTitle>My Recent Work</SectionTitle>
      <SectionSubtitle>
        Here are a few projects I've worked on recently. Want to see more? Email me.
      </SectionSubtitle>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden group">
            <CardHeader className="p-0">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline">{project.title}</CardTitle>
              <CardDescription className="mt-2">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-6 pt-0">
               <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
