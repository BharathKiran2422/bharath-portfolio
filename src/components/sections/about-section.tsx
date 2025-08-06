import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Code, Paintbrush } from "lucide-react";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "12", label: "Awards Won" },
];

const services = [
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Crafting visually stunning and user-friendly interfaces that are both beautiful and functional.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies like React and Next.js.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Branding",
    description: "Developing strong brand identities that resonate with your target audience and set you apart.",
  },
    {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Digital Marketing",
    description: "Creating marketing strategies to boost your online presence and engage with customers.",
  },
];

export default function AboutSection() {
  return (
    <Section id="about" className="bg-muted/50 dark:bg-card">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
           <Image
            src="https://placehold.co/600x750.png"
            alt="About Gerald"
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
            A Passionate Designer and Developer
          </h2>
          <p className="mt-6 text-muted-foreground">
            I'm a multi-talented creative professional based in San Francisco, with a passion for building beautiful and functional digital products. With a background in both design and development, I bridge the gap between aesthetics and technology.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="font-headline text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <SectionTitle>My Services</SectionTitle>
        <SectionSubtitle>
          I provide a wide range of creative and technical services to help you achieve your goals.
        </SectionSubtitle>
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
