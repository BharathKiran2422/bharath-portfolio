import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const projects = [
  {
    title: "RideTogether - AI Ride-Sharing",
    description: "A community-based carpooling platform with AI-powered ride matching, wallet integration, and carbon footprint tracking.",
    image: "https://placehold.co/600x400.png",
    tags: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    hint: "ride sharing app",
  },
  {
    title: "Educational CMS",
    description: "A web-based Content Management System to manage courses, student records, and faculty coordination with role-based access.",
    image: "https://placehold.co/600x400.png",
    tags: ["React.js", "Node.js", "PostgreSQL", "Firebase"],
    hint: "cms dashboard",
  },
];

export default function WorkSection() {
  return (
    <Section id="work" className="bg-muted/50 dark:bg-card">
      <SectionTitle>My Recent Work</SectionTitle>
      <SectionSubtitle>
        Here are a few projects I've worked on recently. Want to see more? Email me.
      </SectionSubtitle>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
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
