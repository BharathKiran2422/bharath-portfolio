"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Mountain } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { useIsMobile } from "@/hooks/use-mobile"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
  { href: "#blog", label: "Blog" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLinksComponent = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all",
        isScrolled ? "border-border bg-background/80 backdrop-blur-sm" : ""
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Mountain className="h-6 w-6 text-primary" />
          <span>Bharath Kiran</span>
        </Link>

        {!isMobile && <NavLinksComponent />}
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
                      <Mountain className="h-6 w-6 text-primary" />
                      <span>Bharath Kiran</span>
                    </Link>
                  </SheetTitle>
                  <SheetDescription>
                    Navigation menu
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-8 pt-12">
                  <NavLinksComponent className="flex-col items-start gap-4" />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
