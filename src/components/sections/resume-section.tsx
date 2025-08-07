
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
    { name: "Python", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M16.25 8.5H18v-3h-4.33l-.67-2H7v2h3.82l.67 2H7v3h4.4l-.66 2H7v3h3.82l-.67 2H7v3h7.25l.67 2h4.33v-2h-3.82l-.67-2H18v-3h-4.4l.66-2H18v-3zM10 10.5v1h3.18l.67-2H10v1zm.67 3H15v1h-3.18l-.67-1z" /></svg> },
    { name: "Java", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18v18H3z" opacity=".01"/><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m6.244 14.125c-.417.417-1.125.66-1.895.729c-.77.068-1.74-.158-2.671-.438c-.93-.28-1.921-.5-2.887-.5c-.965 0-1.861.22-2.651.438c-.79.218-1.605.368-2.22.368c-1.258 0-2.073-.66-2.073-1.896c0-1.633 1.125-2.67 2.073-3.134c.948-.465 2.146-.625 2.887-.625c.741 0 1.634.16 2.521.438c.887.278 1.83.5 2.887.5s1.86-.221 2.62-4.14c.14-.145.28-.437.28-.73c0-.437-.21-.729-.562-.729c-.495 0-.916.492-1.218.875c-.302.383-1.036 1.25-2.52 1.25c-1.396 0-2.344-.66-2.344-2.042c0-1.385.948-2.218 2.344-2.218c1.666 0 2.52 1.125 2.52 2.77c0 .59-.14 1.18-.35 1.709c.855-1.219 2.074-1.833 3.428-1.833c.887 0 1.437.492 1.437 1.281c0 .625-.492 1.219-1.218 1.833c.422.98.595 1.896.595 2.677c0 1.355-.666 2.292-2.145 2.292" /></svg> },
    { name: "C", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M10.152 4.48A9.155 9.155 0 0 0 3 12a9.155 9.155 0 0 0 7.152 7.52l.449-1.52a7.155 7.155 0 0 1-5.6-6a7.155 7.155 0 0 1 5.6-6l-.449-1.52z" /></svg> },
    { name: "SQL", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 16h-1c-.28 0-.5.22-.5.5v1.5c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2v-1.5c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5v1.5c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4v-1.5c0-.28-.22-.5-.5-.5M4 4h16v3h-2v1.5h-2V7h-2v1.5h-2V7H8v1.5H6V7H4z" /></svg> },
    { name: "PostgreSQL", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 13h-2v-2h-2v2H9V9h6z" /></svg> },
    { name: "MongoDB", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12.16,3A9.22,9.22,0,0,0,3,12.16a9.21,9.21,0,0,0,11.2,8.77,8.62,8.62,0,0,0,3.42-1.7,1,1,0,0,0,.15-1.4l-.09-.09a1,1,0,0,0-1.32-.14,6.58,6.58,0,0,1-8.68-8.68,1,1,0,0,0-.14-1.32l-.09-.09A1,1,0,0,0,15.77,7,8.62,8.62,0,0,0,17.47,3.6,9.21,9.21,0,0,0,12.16,3" /></svg> },
    { name: "React", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-2.5-8.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5z" /><path fill="currentColor" d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6zm-1.5-5c.83 0 1.5-.67 1.5-1.5S11.33 10 10.5 10s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5zm3 0c.83 0 1.5-.67 1.5-1.5S14.33 10 13.5 10s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5z" opacity=".3"/><path fill="currentColor" d="M12,17.5c2.76,0,5-2.24,5-5H7c0,2.76,2.24,5,5,5z" opacity=".3"/><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/><path fill="currentColor" d="M12 7.5c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" opacity=".3"/><g><path fill="currentColor" d="M9.5 12c.83 0 1.5.67 1.5 1.5S10.33 15 9.5 15s-1.5-.67-1.5-1.5S8.67 12 9.5 12zm5 0c.83 0 1.5.67 1.5 1.5S15.33 15 14.5 15s-1.5-.67-1.5-1.5S13.67 12 14.5 12z" /></g></svg> },
    { name: "Node.js", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M9 20.25c0 .41-.34.75-.75.75H4.5a.75.75 0 0 1-.75-.75V19a2 2 0 0 1 2-2h2.5A.75.75 0 0 1 9 17.75zM19.25 10a.75.75 0 0 1 .75-.75h1.75l-4.5-5.25v-.25c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-.25z" /></svg> },
    { name: "Firebase", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="m3.15 15.3l8.6-13.23a.5.5 0 0 1 .9 0l3.07 4.71L9.17 21.65a.5.5 0 0 1-.84-.35z" /><path fill="currentColor" d="M14.57 9.89L4.47 4.25a.5.5 0 0 1 .28-.9l15.1 4.41c.29.08.33.48.07.6l-4.53 2.1a.5.5 0 0 1-.82-.57" /><path fill="currentColor" d="M16.5 19.55a2.15 2.15 0 1 1-3.04-3.04a2.15 2.15 0 0 1 3.04 3.04" /></svg> },
    { name: "Git", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M21.9 10.3c-.2-.6-.7-1-1.3-1h-1.3c-.3 0-.6.1-.8.4l-2.2 2.2c-.1.1-.2.1-.3.1s-.2-.1-.3-.2l-1.3-1.3c-.3-.3-.8-.3-1.1 0l-4.1 4.1c-.3.3-.3.8 0 1.1l1.3 1.3c.3.3.8.3 1.1 0l4.1-4.1c.3-.3.3-.8 0-1.1l-1.3-1.3c-.1-.1-.2-.2-.3-.2s-.2.1-.3.2l-1.6 1.6c-.3.3-.3.8 0 1.1l2.5 2.5c.3.3.8.3 1.1 0l7.3-7.3c.2-.2.3-.5.4-.8m-9.5 2.1c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m-5 5c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m5-10c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1" /></svg> },
    { name: "GitHub", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.68-.22.68-.48c0-.24-.01-1.02-.01-1.88c-2.78.6-3.37-1.18-3.37-1.18c-.45-1.15-1.11-1.46-1.11-1.46c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.89 1.53 2.34 1.09 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.94c0-1.1.39-1.99 1.03-2.69c-.1-.25-.45-1.27.1-2.64c0 0 .84-.27 2.75 1.02c.8-.22 1.65-.33 2.5-.33c.85 0 1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.37.2 2.39.1 2.64c.64.7 1.03 1.6 1.03 2.69c0 3.84-2.34 4.68-4.57 4.93c.36.31.68.92.68 1.85c0 1.34-.01 2.42-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 22 12A10 10 0 0 0 12 2" /></svg> },
    { name: "HTML5", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M1.945 2.115L3.63 19.885L12 22l8.37-2.115L22.055 2.115zM12 19.86l-6.24-1.68l.52-5.7H12v2.12h-4.01l-.2-2.18h4.21V10.3H8.56l-.33-3.56H12v2.12h4.44l-.42 4.64z" /></svg> },
    { name: "CSS3", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24"><path fill="currentColor" d="M1.945 2.115L3.63 19.885L12 22l8.37-2.115L22.055 2.115zM12 19.86l-6.24-1.68l.52-5.7H12v2.12h-4.01l-.2-2.18h4.21V10.3H8.56l-.33-3.56H12v2.12h4.44l-.42 4.64z" /></svg> },
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
    title: "Education",
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

    

    
