import Header from '@/components/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ResumeSection from '@/components/sections/resume-section';
import WorkSection from '@/components/sections/work-section';
import BlogSection from '@/components/sections/blog-section';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/footer';
import PhotoGallerySection from '@/components/sections/photo-gallery-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <WorkSection />
        <BlogSection />
        <PhotoGallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
