import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "10 UI/UX Principles for a Better User Experience",
    description: "Discover the fundamental principles that can transform your designs from good to great.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "July 15, 2024",
    hint: "design interface",
  },
  {
    title: "Getting Started with Next.js 14",
    description: "A beginner-friendly guide to setting up and building your first app with the latest version of Next.js.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "July 1, 2024",
    hint: "code screen",
  },
  {
    title: "The Art of Storytelling in Branding",
    description: "Learn how to craft a compelling brand narrative that connects with your audience on an emotional level.",
    image: "https://placehold.co/600x400.png",
    author: "Bharath Kiran",
    authorAvatar: "https://placehold.co/40x40.png",
    date: "June 20, 2024",
    hint: "brand moodboard",
  },
];

export default function BlogSection() {
  return (
    <Section id="blog" className="bg-background">
      <SectionTitle>From My Blog</SectionTitle>
      <SectionSubtitle>
        I share my thoughts on design, development, and the tech industry.
      </SectionSubtitle>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.title} className="flex flex-col">
            <CardHeader className="p-0">
               <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-t-lg"
                data-ai-hint={post.hint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-xl">
                <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
              </CardTitle>
              <CardDescription className="mt-2">{post.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-6 pt-0">
               <div className="flex items-center gap-3">
                 <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
               </div>
               <Link href="#" className="flex items-center text-sm font-medium text-primary hover:underline">
                 Read More <ArrowRight className="ml-1 h-4 w-4" />
               </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
