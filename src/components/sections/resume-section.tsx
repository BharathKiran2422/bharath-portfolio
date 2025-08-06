import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experienceData = [
  {
    date: "Dec 2024 – Apr 2025",
    title: "Data Science Intern",
    company: "SkillDzire",
    description: "Learned Data Science fundamentals, Python basics, Data Structures, Pandas, NumPy, and introductory Machine Learning concepts. Applied knowledge through hands-on exercises and real-world scenarios.",
  },
  {
    date: "Jun 2024 – Aug 2024",
    title: "Full Stack Development Intern",
    company: "DataValley",
    description: "Designed responsive web pages using HTML & CSS. Wrote and optimized SQL queries for database operations. Developed and tested backend components using Java.",
  },
  {
    date: "May 2023 – Jul 2023",
    title: "Web Application Pentester Intern",
    company: "Indian Servers",
    description: "Performed vulnerability assessments on web applications (including OWASP Juice-Shop). Worked on NLP and text preprocessing projects. Fine-tuned GPT and BERT models using OpenAI & Hugging Face APIs.",
  },
];

const educationData = [
  {
    date: "2021 - 2025",
    title: "B.Tech – Computer Science & Engineering",
    institution: "Andhra Loyola Institute of Engineering and Technology, JNTUK",
    description: "CGPA: 7.4/10",
  },
  {
    date: "2019 - 2021",
    title: "Intermediate (MPC)",
    institution: "Sarada Junior College",
    description: "Percentage: 80%",
  },
  {
    date: "2019",
    title: "Secondary School",
    institution: "St. John’s E.M. High School",
    description: "GPA: 8.8/10",
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
