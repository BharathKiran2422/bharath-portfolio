import Image from "next/image";
import { Section } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Application Development",
    description: "Design and develop responsive, interactive, and scalable web applications using modern technologies such as React, Vue.js, and Angular. Custom solutions tailored to meet specific business needs.",
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Backend Development",
    description: "Build robust server-side logic, APIs, and integrations using Node.js, Express, and other frameworks. Ensure secure user authentication, data management, and high-performance systems.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Frontend Development",
    description: "Create user-friendly and visually appealing interfaces with modern JavaScript frameworks like React, along with responsive designs using HTML, CSS, and Tailwind. Ensure cross-browser compatibility and smooth user experiences.",
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: "Database Management",
    description: "Design and optimize database schemas for efficient data storage and retrieval. Manage both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, ensuring data integrity and security.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-card">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="group relative mx-auto w-full max-w-md">
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 p-1 transition-all duration-300 group-hover:from-primary/50 group-hover:to-primary/30 rotate-[-2deg] group-hover:rotate-0">
             <Image
              src="https://placehold.co/600x750.png"
              alt="About Bharath"
              width={600}
              height={750}
              className="relative z-10 rounded-xl shadow-xl"
              data-ai-hint="man working"
            />
          </div>
        </div>
        <div>
          <h3 className="font-headline text-lg font-medium text-primary">About Me</h3>
          <h2 className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Passionate Developer and Innovator
          </h2>
          <p className="mt-6 text-muted-foreground">
            I'm a multi-talented and quick-learning professional with a passion for building beautiful and functional digital products. With a strong foundation in computer science and hands-on experience in full-stack development and data science, I bridge the gap between technology and user-centric solutions.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                {service.icon}
                <CardTitle className="pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
