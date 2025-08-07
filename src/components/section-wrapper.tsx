import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 lg:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000", className)}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
}

export function SectionTitle({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent", className)}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, className }: SectionHeadingProps) {
  return (
    <p className={cn("mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground", className)}>
      {children}
    </p>
  );
}
