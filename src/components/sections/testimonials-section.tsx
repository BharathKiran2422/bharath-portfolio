import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote: "Gerald's design sense is incredible. He took our vague ideas and turned them into a stunning, functional product that our users love. The entire process was seamless.",
  },
  {
    name: "Michael Chen",
    title: "Founder, InnovateX",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    quote: "Working with Gerald was a game-changer. His expertise in both design and development meant we could move faster and more efficiently than ever before. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, HealthWell",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    quote: "The website Gerald built for us has seen a 200% increase in engagement. His attention to detail and commitment to user experience is second to none.",
  },
  {
    name: "David Lee",
    title: "CTO, FinSolutions",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait",
    quote: "I've worked with many developers, but Gerald's ability to write clean, maintainable code while keeping an eye on the bigger design picture is rare. A true professional.",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionTitle>Client Stories</SectionTitle>
      <SectionSubtitle>
        Hear what my clients have to say about working with me.
      </SectionSubtitle>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mt-12 w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between p-6">
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
