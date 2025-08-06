import Image from "next/image";
import { Section } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Cpu, Paintbrush } from "lucide-react";

const services = [
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Crafting visually stunning and user-friendly interfaces that are both beautiful and functional.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies like React and Node.js.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "React Native",
    description: "Developing cross-platform mobile applications with a focus on performance and user experience.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Data Science",
    description: "Exploring data to find insights and building introductory machine learning models.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-muted/50 dark:bg-card">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
           <Image
            src="https://placehold.co/600x750.png"
            alt="About Bharath"
            width={600}
            height={750}
            className="relative z-10 rounded-lg shadow-xl"
            data-ai-hint="man working"
          />
           <div className="absolute -bottom-4 -right-4 -z-0 h-full w-full rounded-lg bg-primary"></div>
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
            <Card key={service.title}>
              <CardHeader>
                {service.icon}
                <CardTitle className="pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
