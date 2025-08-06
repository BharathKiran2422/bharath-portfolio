"use client";

import { useState } from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Star, Award, User } from "lucide-react";

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

const skillsData = [
  { category: "Programming Languages", skills: ["Python", "Java", "C"] },
  { category: "Databases", skills: ["SQL", "PostgreSQL", "MongoDB"] },
  { category: "Frameworks & Technologies", skills: ["React.js", "React Native", "Node.js", "Express.js", "Firebase"] },
  { category: "Development Tools", skills: ["Git", "GitHub", "HTML", "CSS"] },
  { category: "Soft Skills", skills: ["Problem Solving", "Communication", "Quick Learning", "Analytical Thinking", "Smart Work", "Patience"] },
];

const certificationsData = [
  { title: "Google UX Design", issuer: "Google" },
  { title: "Google Data Analytics", issuer: "Google" },
  { title: "Artificial Intelligence", issuer: "Infosys" },
  { title: "Python Essentials", issuer: "Cisco" },
  { title: "Cyber Security", issuer: "Cisco" },
];

const sections = {
  experience: {
    title: "My Experience",
    subtitle: "I've gained hands-on experience through internships, working on real-world projects and developing my technical skills. These opportunities allowed me to contribute to impactful solutions while learning and growing in tech.",
    icon: <Briefcase className="mr-2 h-4 w-4" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceData.map((item, index) => (
          <Card key={index} className="bg-muted/30">
            <CardContent className="p-6">
              <p className="text-sm text-primary">{item.date}</p>
              <h3 className="mt-2 font-headline text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-muted-foreground">{item.company}</p>
              <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
  },
  education: {
    title: "My Education",
    subtitle: "My academic journey has provided me with a strong foundation in computer science and a passion for continuous learning.",
    icon: <GraduationCap className="mr-2 h-4 w-4" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {educationData.map((item, index) => (
          <Card key={index} className="bg-muted/30">
            <CardContent className="p-6">
              <p className="text-sm text-primary">{item.date}</p>
              <h3 className="mt-2 font-headline text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-muted-foreground">{item.institution}</p>
              <p className="mt-4 text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
  },
  skills: {
    title: "My Skills",
    subtitle: "A showcase of my technical and soft skills, demonstrating my ability to tackle diverse challenges and collaborate effectively.",
    icon: <Star className="mr-2 h-4 w-4" />,
    content: (
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skillGroup) => (
          <Card key={skillGroup.category} className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-headline text-lg font-semibold text-primary">{skillGroup.category}</h3>
              <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
                {skillGroup.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
  },
  certifications: {
    title: "My Certifications",
    subtitle: "I am committed to lifelong learning and professional development, as demonstrated by these certifications.",
    icon: <Award className="mr-2 h-4 w-4" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <Card key={index} className="bg-muted/30">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto" />
              <h3 className="mt-4 font-headline text-lg font-semibold">{cert.title}</h3>
              <p className="mt-1 text-muted-foreground">{cert.issuer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    ),
  },
  "about-me": {
    title: "About Me",
    subtitle: "A brief overview of who I am as a professional and an individual.",
    icon: <User className="mr-2 h-4 w-4" />,
    content: (
      <Card className="bg-muted/30">
        <CardContent className="p-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate and results-oriented Computer Science student with a strong foundation in full-stack development and a growing interest in data science and artificial intelligence. My internship experiences have equipped me with practical skills in web development, application security, and machine learning. I thrive in collaborative environments and am dedicated to building user-centric, high-quality digital solutions. I am a quick learner, a creative problem-solver, and I am always eager to take on new challenges.
          </p>
        </CardContent>
      </Card>
    ),
  },
};

type SectionKey = keyof typeof sections;

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<SectionKey>("experience");

  const ActiveContent = sections[activeTab];

  return (
    <Section id="resume" className="bg-background">
       <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-4xl mx-auto">
        {(Object.keys(sections) as SectionKey[]).map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            variant={activeTab === tab ? "default" : "outline"}
            className={cn("w-full justify-center capitalize", activeTab !== tab && "bg-muted/50 dark:bg-card hover:bg-muted dark:hover:bg-muted/50")}
          >
            {sections[tab].icon}
            {tab.replace("-", " ")}
          </Button>
        ))}
      </div>

      <div className="mt-8 text-center animate-in fade-in duration-500">
        <SectionTitle>{ActiveContent.title}</SectionTitle>
        <SectionSubtitle>{ActiveContent.subtitle}</SectionSubtitle>
      </div>

      <div className="mt-12 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        {ActiveContent.content}
      </div>
    </Section>
  );
}
