
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
    { name: "Python", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>Python</title><path d="M11.238 15.82c-.892 0-1.574-.33-2.148-.992-.574-.66-.86-1.488-.86-2.484V12.2c0-.996.286-1.824.86-2.484.574-.66 1.256-.99 2.148-.99.892 0 1.575.33 2.148.99.574.66.861 1.488.861 2.484v.138c0 .996-.287 1.824-.86 2.484-.574.66-1.257.992-2.149.992zm-5.176-1.428V.456h2.82v10.128c0 .546.085.996.256 1.35.17.354.425.648.765.882.34.234.722.351 1.147.351.425 0 .81-.117 1.148-.351.34-.234.594-.528.765-.882.17-.354.255-.804.255-1.35V.456h2.82v10.128c0 .996-.287 1.824-.86 2.484-.574.66-1.257.99-2.148.99-.892 0-1.575-.33-2.148-.99-.574-.66-.861-1.488-.861-2.484V12.2h-2.82v.138c0 .996-.287 1.824-.86 2.484-.574.66-1.257.992-2.148.992-.892 0-1.575-.33-2.148-.992-.574-.66-.86-1.488-.86-2.484V.456h2.82v10.128c0 .546.085.996.256 1.35.17.354.425.648.765.882.34.234.722.351 1.147.351.426 0 .81-.117 1.148-.351.34-.234.594-.528.765-.882.17-.354.255-.804.255-1.35V.456H.912v11.328c0 .996.287 1.824.86 2.484.574.66 1.257.99 2.148.99.892 0 1.575-.33 2.148-.99.574-.66.86-1.488.86-2.484v-.138h2.82v.138c0 .996.287 1.824.86 2.484.574.66 1.257.992 2.148.992zM22.188 8.18v15.364h-2.82V8.18c0-.546-.085-.996-.255-1.35a2.1 2.1 0 0 0-.765-.882c-.34-.234-.723-.351-1.148-.351-.425 0-.81.117-1.147.351a2.1 2.1 0 0 0-.765.882c-.17.354-.256.804-.256 1.35v15.364h-2.82V8.18c0-.996.287-1.824.86-2.484.574-.66 1.257-.99 2.148-.99.892 0 1.575.33 2.148.99.574.66.86 1.488.86 2.484v.138h2.82v-.138c0-.996.287-1.824.86-2.484.574-.66 1.257-.99 2.148-.99.892 0 1.575.33 2.148.99.574.66.86 1.488.86 2.484v15.226h-2.82V8.18c0-.546-.085-.996-.255-1.35a2.1 2.1 0 0 0-.765-.882c-.34-.234-.723-.351-1.148-.351-.425 0-.81.117-1.147.351a2.1 2.1 0 0 0-.765.882c-.17.354-.256.804-.256 1.35z"/></svg> },
    { name: "Java", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>Java</title><path d="M12.889 2.112c-1.554-1.06-3.94-.38-5.69 1.37-1.748 1.75-1.75 4.861 0 6.61 1.75 1.75 4.862 1.75 6.611 0 1.75-1.75 1.75-4.861 0-6.611-1.049-1.05-2.22-.64-2.22-.64s-.54-1.63-2.07-2.14c-1.53-.51-3.24.49-3.24.49s.6-2.12 3.39-2.12c2.79 0 3.24 2.05 3.24 2.05zm-.82 10.45s-2.73 2.15-2.07 4.41c.66 2.26 3.69 3.19 3.69 3.19s2.15-2.52.92-4.87c-1.23-2.35-2.54-2.73-2.54-2.73zM7.559 9.972s2.53-2.17 4.79.16c2.26 2.33 1.96 5.86 1.96 5.86s-2.81 1.5-4.89-1.2c-2.08-2.7-.96-4.82-.96-4.82zM12.019.012c-2.04 0-3.35 1.13-3.35 1.13s1.23-.46 2.5.18c1.27.64 1.25 2.17 1.25 2.17s-.26-1.51-1.53-1.6c-1.27-.09-2.23.83-2.23.83s.77-2.35 3.12-2.35c2.35 0 2.87 2.27 2.87 2.27s-.76-2.42-3.23-2.35c-2.47.07-2.78 2.2-2.78 2.2s.51-1.6 2.1-.96c1.59.64 1.83 2.58 1.83 2.58s-.36-1.96-2.02-2.1c-1.66-.14-2.37 1.05-2.37 1.05s.55-.4 1.24-.26c.69.14.88.75.88.75s-.33-2.02-2.3-1.42c-1.97.6-2.18 2.72-2.18 2.72s.53-2.04 2.62-2.12c2.09-.08 2.31 1.45 2.31 1.45s-.19-1.12-1.38-1.02c-1.19.1-1.54.99-1.54.99s.63-1.04 1.89-.69c1.26.35 1.51 1.63 1.51 1.63s-.74-1.89-2.58-1.26c-1.84.63-1.95 2.5-1.95 2.5s.8-2.55 3.32-2.45c2.52.1 2.37 2.62 2.37 2.62s1.42-4.9-3.38-5.32c-4.8-.42-5.71 4.54-5.71 4.54s2.21-6.41 8.35-4.52c6.14 1.89 4.32 7.52 4.32 7.52s3.78-7.98-4.22-9.92z"/></svg> },
    { name: "C", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>C</title><path d="M12.022 0C5.377 0 0 5.378 0 12s5.377 12 12.022 12c6.645 0 11.978-5.378 11.978-12S18.667 0 12.022 0zm5.176 17.51c-1.226.797-2.71 1.218-4.258 1.218-4.54 0-7.85-3.6-7.85-8.242 0-4.665 3.33-8.26 7.85-8.26 1.548 0 3.033.42 4.258 1.217l-1.106 1.84c-.98-.59-2.053-.91-3.152-.91-3.21 0-5.592 2.63-5.592 6.112 0 3.48 2.383 6.11 5.592 6.11.98 0 2.053-.32 3.152-.912l1.106 1.84z"/></svg> },
    { name: "SQL", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>SQLite</title><path d="M12 0L1.5 6v12L12 24l10.5-6V6zm7.95 7.5L12 11.55l-7.95-4.05L12 3.45zM3.45 15.6l6.9 3.525V13.8L3.45 10.275zm17.1-3.325v5.55l-6.9 3.525V13.8z"/></svg> },
    { name: "PostgreSQL", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>PostgreSQL</title><path d="M12.001 24C5.373 24 0 18.627 0 12S5.373 0 12.001 0s12 5.373 12 12-5.373 12-12 12zM6 14.5c0 .276.224.5.5.5h3.5v-5H6.5a.5.5 0 00-.5.5v4zm9.5-5H12v5h3.5a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5z"/></svg> },
    { name: "MongoDB", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>MongoDB</title><path d="M14.223 18.232c-.33-.186-1.12.32-1.423.16-.304-.16 1.13-1.077.938-1.378-.192-.301-2.03.352-2.52.03-.49-.323 1.144-1.25.86-1.57-.285-.32-2.115.54-2.834.19-.72-.35 1.058-1.53.64-1.85-.418-.32-2.28.77-3.23.32-1.02-.45-.21-1.82-.69-2.12-.48-.3-2.22.8-2.73.5-.51-.3 0-1.77-.38-2.05-.38-.28-1.865.81-2.15.59-.285-.22-.33-1.39-.63-1.6-.3-.21-1.29.35-1.55.22-.26-.13.3-1.04.18-1.2-.12-.16-1.06.32-1.26.23C1.94 11.232.4 9.122 1.48 5.612A11.33 11.33 0 0 1 12.02 0a11.33 11.33 0 0 1 11.96 10.072c-2.42 2.75-5.95 5.38-9.757 8.16z"/></svg> },
    { name: "React", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>React</title><path d="M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24zM12 4.12A7.88 7.88 0 1 0 12 20a7.88 7.88 0 0 0 0-15.88z"/><path d="M12 9.17a2.83 2.83 0 1 0 0 5.66 2.83 2.83 0 0 0 0-5.66m-9.5 2.83a2.38 2.38 0 1 1 4.76 0 2.38 2.38 0 0 1-4.76 0m14.25-2.38a2.38 2.38 0 1 0 0 4.76 2.38 2.38 0 0 0 0-4.76m-4.75 4.76a2.38 2.38 0 1 0-4.76 0 2.38 2.38 0 0 0 4.76 0z"/></svg> },
    { name: "Node.js", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>Node.js</title><path d="M12 0v11.43h11.43V24H.57V0h11.43zM12 1.14H1.71v21.72h20.58v-11.43H12V1.14z"/></svg> },
    { name: "Firebase", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>Firebase</title><path d="M3.63 15.39l8.37-13.3a.49.49 0 0 1 .87 0l3.07 4.9L9.2 21.6c-.23.36-.78.36-.98 0z"/><path d="M14.52 9.94L4.44 4.3a.5.5 0 0 1 .28-.9l15.1 4.4a.5.5 0 0 1 .07.6l-4.52 2.1a.5.5 0 0 1-.85-.56z"/><path d="M16.44 19.56a2.15 2.15 0 1 1-3.04-3.04 2.15 2.15 0 0 1 3.04 3.04z"/></svg> },
    { name: "Git", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>Git</title><path d="M23.5 10.6c-.3-1.2-1.4-2-2.7-2h-2.5c-.5 0-1 .2-1.3.6L14.7 12c-.2.2-.4.2-.6 0l-2.1-2.1c-.5-.5-1.5-.5-2.1 0l-6.2 6.2c-.5.5-.5 1.5 0 2.1l2.1 2.1c.5.5 1.5.5 2.1 0l6.2-6.2c.5-.5.5-1.5 0-2.1l-2.1-2.1c-.2-.2-.4-.2-.6 0L9 11.2c-.5.5-.5 1.5 0 2.1l3.7 3.7c.5.5 1.5.5 2.1 0l11.2-11.2c.2-.4.4-.8.5-1.2zm-15.7 3.2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-7.8 7.8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM12 7.8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/></svg> },
    { name: "GitHub", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
    { name: "HTML5", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM12 17.25l5.227-1.443L17.75 8.25H6.75l.375 4.25h6.375l-.375 4.25-2.125.563v-2.125H8.375l.188 2.125 3.438.938 3.5-1z"/></svg> },
    { name: "CSS3", icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.585 6.552l-.242 2.718-8.934.02L9.67 11.4l8.4.022-1.137 10.3-6.945 2.012-6.946-2.012L2.73 3.47h16.355z"/></svg> },
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
