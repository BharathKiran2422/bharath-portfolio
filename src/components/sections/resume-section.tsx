import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experienceData = [
  {
    date: "2022 - Present",
    title: "Senior UI/UX Designer",
    company: "Google",
    description: "Leading design on major products, mentoring junior designers, and collaborating with cross-functional teams to deliver world-class user experiences.",
  },
  {
    date: "2020 - 2022",
    title: "Web Developer",
    company: "Facebook",
    description: "Developed and maintained user-facing features for Facebook's main platform, focusing on performance and scalability.",
  },
  {
    date: "2018 - 2020",
    title: "Junior Designer",
    company: "Webflow",
    description: "Assisted in the design and implementation of various web projects, gaining foundational skills in UI/UX and web development.",
  },
];

const educationData = [
  {
    date: "2016 - 2018",
    title: "Master's in HCI",
    institution: "Stanford University",
    description: "Focused on human-computer interaction, user-centered design methodologies, and usability testing.",
  },
  {
    date: "2012 - 2016",
    title: "Bachelor's in Computer Science",
    institution: "University of California, Berkeley",
    description: "Comprehensive study of computer science fundamentals, including algorithms, data structures, and software engineering.",
  },
];

const TimelineItem = ({ data, isEducation = false }: { data: { date: string; title: string; company?: string; institution?: string; description: string; }; isEducation?: boolean }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
      <div className="h-3 w-3 rounded-full bg-primary" />
    </div>
    <p className="text-sm text-muted-foreground">{data.date}</p>
    <h3 className="mt-1 font-headline text-xl font-semibold">{data.title}</h3>
    <h4 className="mt-1 text-md font-medium text-primary">{isEducation ? data.institution : data.company}</h4>
    <p className="mt-2 text-muted-foreground">{data.description}</p>
  </div>
);

export default function ResumeSection() {
  return (
    <Section id="resume">
      <SectionTitle>My Resume</SectionTitle>
      <SectionSubtitle>
        A summary of my professional experience and academic background.
      </SectionSubtitle>
      <Tabs defaultValue="experience" className="mt-12 max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="experience">
            <Briefcase className="mr-2 h-4 w-4" />
            Experience
          </TabsTrigger>
          <TabsTrigger value="education">
            <GraduationCap className="mr-2 h-4 w-4" />
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-3 before:w-px before:bg-border">
                {experienceData.map((item, index) => (
                  <TimelineItem key={index} data={item} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card>
            <CardContent className="p-8">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-3 before:w-px before:bg-border">
                {educationData.map((item, index) => (
                  <TimelineItem key={index} data={item} isEducation />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
