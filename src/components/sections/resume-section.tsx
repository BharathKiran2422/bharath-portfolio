
"use client";

import { useState } from "react";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Star, Award, User, BrainCircuit, MessageSquare, Lightbulb, BarChart, Sparkles, Timer } from "lucide-react";

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

const skillsData = {
  technical: [
    { name: "Python", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>Python</title><path d="M12 24a12 12 0 0 1-5.36-22.3A12 12 0 0 1 17.36 22.3 11.9 11.9 0 0 1 12 24zm-4.2-8.38v-3.2h4.52V8.3H7.8v-.98h4.52V3.2H4.58v8.62h3.22zm8.4 0v3.2h-4.52v4.12h-3.22v-8.62h7.74z"/></svg> },
    { name: "Java", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>Java</title><path d="M12.89 2.11C11.33 1.05 8.94.38 7.2.66c-3.2.53-4.8 2.62-4.8 5.67 0 2.89 1.48 4.75 3.82 5.56 2.33.8 4.2.78 4.2.78s-.25-1.54-.3-1.82c-.05-.28-.1-.58-.1-.58s-1.88.16-3.32-.82c-1.45-.98-1.54-2.52-1.54-2.52s.6.58 1.48.5c.89-.08 1.7-.6 1.7-.6s-.29 2.87-4.26 2.2c-3.97-.67-3.56-4.59-3.56-4.59s.4 3.32 4.38 3.32c3.98 0 3.73-4.28 3.73-4.28s-1.44 3.7-4.7 2.1c-3.25-1.6-2.55-4.32-2.55-4.32S5.06 4.2 8.3 3.6c3.25-.6 6.13.4 6.13.4s-3.4 2.18-2.6 3.65c.8 1.47 4.15 1.47 4.15 1.47s-2.7.27-3.92-1.22c-1.22-1.49-.6-3.32-.6-3.32s5.4 3.12 4.13 6.3C14.7 16.5 12.01 23 12.01 23c-1-3.44.13-6.72.13-6.72s4.9 3.52 6.54-1.33c1.64-4.85-2.2-7.5-2.2-7.5s5.28 2.44 3.12 7.57C17.72 20.35 15.2 24 15.2 24c.7-2.68 2.2-5.06 2.83-6.7.63-1.64.67-3.23.48-4.37-.18-1.14-.62-2.02-1.12-2.73 1.25.13 2.17-.1 2.9-.6.73-.5 1-1.3 1-2.18 0-1.25-.97-1.8-2.2-1.8-1.1 0-1.83.4-2.43.92-.6.54-1.1 1.25-1.58 2.22z"/></svg> },
    { name: "C", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>C</title><path d="M12.022 0C5.377 0 0 5.378 0 12s5.377 12 12.022 12c6.645 0 11.978-5.378 11.978-12S18.667 0 12.022 0zm5.176 17.51c-1.226.797-2.71 1.218-4.258 1.218-4.54 0-7.85-3.6-7.85-8.242 0-4.665 3.33-8.26 7.85-8.26 1.548 0 3.033.42 4.258 1.217l-1.106 1.84c-.98-.59-2.053-.91-3.152-.91-3.21 0-5.592 2.63-5.592 6.112 0 3.48 2.383 6.11 5.592 6.11.98 0 2.053-.32 3.152-.912l1.106 1.84z"/></svg> },
    { name: "SQL", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>SQLite</title><path d="M12 0L1.5 6v12L12 24l10.5-6V6zm7.95 7.5L12 11.55l-7.95-4.05L12 3.45zM3.45 15.6l6.9 3.525V13.8L3.45 10.275zm17.1-3.325v5.55l-6.9 3.525V13.8z"/></svg> },
    { name: "PostgreSQL", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>PostgreSQL</title><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM6 14.5c0 .276.224.5.5.5h3.5v-5H6.5a.5.5 0 00-.5.5v4zm9.5-5H12v5h3.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"/></svg> },
    { name: "MongoDB", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>MongoDB</title><path d="M14.223 18.232c-.33-.186-1.12.32-1.423.16-.304-.16 1.13-1.077.938-1.378-.192-.301-2.03.352-2.52.03-.49-.323 1.144-1.25.86-1.57-.285-.32-2.115.54-2.834.19-.72-.35 1.058-1.53.64-1.85-.418-.32-2.28.77-3.23.32-1.02-.45-.21-1.82-.69-2.12-.48-.3-2.22.8-2.73.5-.51-.3 0-1.77-.38-2.05-.38-.28-1.865.81-2.15.59-.285-.22-.33-1.39-.63-1.6-.3-.21-1.29.35-1.55.22-.26-.13.3-1.04.18-1.2-.12-.16-1.06.32-1.26.23C1.94 11.232.4 9.122 1.48 5.612A11.33 11.33 0 0 1 12.02 0a11.33 11.33 0 0 1 11.96 10.072c-2.42 2.75-5.95 5.38-9.757 8.16z"/></svg> },
    { name: "React", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>React</title><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zM12 4.12A7.88 7.88 0 1 0 12 20a7.88 7.88 0 0 0 0-15.88z"/><path d="M12 9.17a2.83 2.83 0 1 0 0 5.66 2.83 2.83 0 0 0 0-5.66m-9.5 2.83a2.38 2.38 0 1 1 4.76 0 2.38 2.38 0 0 1-4.76 0m14.25-2.38a2.38 2.38 0 1 0 0 4.76 2.38 2.38 0 0 0 0-4.76m-4.75 4.76a2.38 2.38 0 1 0-4.76 0 2.38 2.38 0 0 0 4.76 0z"/></svg> },
    { name: "Node.js", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>Node.js</title><path d="M21.56 16.92l-9.2-5.31V6.29l9.2-5.31L21.56.98l-11.5 6.64v6.76l11.5 6.64-2.24 1.29-9.26-5.35v-6.76l-9.2 5.31v-1.3L12.3 5.01v1.3L3.1 11.63v.65l9.2 5.31v-1.3l-9.2-5.31z"/></svg> },
    { name: "Firebase", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>Firebase</title><path d="M3.63 15.39l8.37-13.3a.49.49 0 0 1 .87 0l3.07 4.9L9.2 21.6c-.23.36-.78.36-.98 0z"/><path d="M14.52 9.94L4.44 4.3a.5.5 0 0 1 .28-.9l15.1 4.4a.5.5 0 0 1 .07.6l-4.52 2.1a.5.5 0 0 1-.85-.56z"/><path d="M16.44 19.56a2.15 2.15 0 1 1-3.04-3.04 2.15 2.15 0 0 1 3.04 3.04z"/></svg> },
    { name: "Git", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>Git</title><path d="M23.5 10.6c-.3-1.2-1.4-2-2.7-2h-2.5c-.5 0-1 .2-1.3.6L14.7 12c-.2.2-.4.2-.6 0l-2.1-2.1c-.5-.5-1.5-.5-2.1 0l-6.2 6.2c-.5.5-.5 1.5 0 2.1l2.1 2.1c.5.5 1.5.5 2.1 0l6.2-6.2c.5-.5.5-1.5 0-2.1l-2.1-2.1c-.2-.2-.4-.2-.6 0L9 11.2c-.5.5-.5 1.5 0 2.1l3.7 3.7c.5.5 1.5.5 2.1 0l11.2-11.2c.2-.4.4-.8.5-1.2zm-15.7 3.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.8 7.8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 7.8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/></svg> },
    { name: "GitHub", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
    { name: "HTML5", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM12 17.25l5.227-1.443L17.75 8.25H6.75l.375 4.25h6.375l-.375 4.25-2.125.563v-2.125H8.375l.188 2.125 3.438.938 3.5-1z"/></svg> },
    { name: "CSS3", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.585 6.552l-.242 2.718-8.934.02L9.67 11.4l8.4.022-1.137 10.3-6.945 2.012-6.946-2.012L2.73 3.47h16.355z"/></svg> },
  ],
  soft: [
    { name: "Problem Solving", icon: <BrainCircuit className="h-8 w-8 text-primary" /> },
    { name: "Communication", icon: <MessageSquare className="h-8 w-8 text-primary" /> },
    { name: "Quick Learning", icon: <Lightbulb className="h-8 w-8 text-primary" /> },
    { name: "Analytical Thinking", icon: <BarChart className="h-8 w-8 text-primary" /> },
    { name: "Smart Work", icon: <Sparkles className="h-8 w-8 text-primary" /> },
    { name: "Patience", icon: <Timer className="h-8 w-8 text-primary" /> },
  ],
};

const certificationsData = [
  { title: "Google UX Design", issuer: "Google" },
  { title: "Google Data Analytics", issuer: "Google" },
  { title: "Artificial Intelligence", issuer: "Infosys" },
  { title: "Python Essentials", issuer: "Cisco" },
  { title: "Cyber Security", issuer: "Cisco" },
];

const sections = {
  experience: {
    title: "Experience",
    subtitle: "I've gained hands-on experience through internships, working on real-world projects and developing my technical skills. These opportunities allowed me to contribute to impactful solutions while learning and growing in tech.",
    icon: <Briefcase className="mr-2 h-4 w-4" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceData.map((item, index) => (
          <Card key={index} className={cn("bg-muted/30", index === 0 && "md:col-span-2")}>
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
    title: "Education",
    subtitle: "My academic journey has provided me with a strong foundation in computer science and a passion for continuous learning.",
    icon: <GraduationCap className="mr-2 h-4 w-4" />,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <Card key={index} className={cn("bg-muted/30", index === 0 && "md:col-span-2")}>
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
    title: "Skills",
    subtitle: "A showcase of my technical and soft skills, demonstrating my ability to tackle diverse challenges and collaborate effectively.",
    icon: <Star className="mr-2 h-4 w-4" />,
    content: (
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-headline text-lg font-semibold text-primary mb-6 text-center">Technical Skills</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillsData.technical.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-background shadow-md transition-all duration-300 group-hover:shadow-primary/20 group-hover:scale-105">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground transition-all duration-300 group-hover:text-primary">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-headline text-lg font-semibold text-primary mb-6 text-center">Soft Skills</h3>
              <div className="grid grid-cols-3 gap-6">
                {skillsData.soft.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-background shadow-md transition-all duration-300 group-hover:shadow-primary/20 group-hover:scale-105">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground transition-all duration-300 group-hover:text-primary">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
      </div>
    ),
  },
  certifications: {
    title: "Certifications",
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
    <Section id="resume" className="bg-card">
      <SectionTitle>My Resume</SectionTitle>
      <SectionSubtitle>
         Check out my qualifications and professional journey.
      </SectionSubtitle>
       <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-12 max-w-4xl mx-auto">
        {(Object.keys(sections) as SectionKey[]).map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            variant={activeTab === tab ? "default" : "outline"}
            className={cn("w-full justify-center capitalize", activeTab !== tab && "bg-muted/50 dark:bg-card hover:bg-muted dark:hover:bg-muted/50 hover:text-foreground/80 dark:hover:text-foreground/80")}
          >
            {sections[tab].icon}
            {tab.replace("-", " ")}
          </Button>
        ))}
      </div>

      <div className="mt-8 text-center animate-in fade-in duration-500">
        <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{ActiveContent.title}</h3>
        <p className="mx-auto mt-4 max-w-2xl text-center text-md text-muted-foreground">{ActiveContent.subtitle}</p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        {ActiveContent.content}
      </div>
    </Section>
  );
}
