import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <Section id="work" className="bg-card">
      <SectionTitle>My Recent Work</SectionTitle>
      <SectionSubtitle>
        Here are a few projects I've worked on recently. Want to see more? Email me.
      </SectionSubtitle>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={project.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 ease-in-out translate-y-[68%] group-hover:translate-y-0">
                <h3 className="font-headline text-2xl font-bold text-white">
                    {project.title}
                </h3>
                <Link href="#" className="block mt-4 bg-primary/90 text-primary-foreground p-4 rounded-lg transition-colors hover:bg-primary">
                    <div className="flex justify-between items-center">
                        <div className="max-w-[85%]">
                            <h4 className="font-semibold text-lg">{project.title}</h4>
                            <p className="text-sm text-primary-foreground/80 mt-1 truncate">{project.description}</p>
                             <div className="flex flex-wrap gap-2 mt-2">
                                {project.tags.map((tag) => (
                                <span key={tag} className="text-xs font-medium text-primary-foreground/70">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                             <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
                        </div>
                    </div>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
