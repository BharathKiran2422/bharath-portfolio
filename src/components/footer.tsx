
import Link from 'next/link';
import { Github, Linkedin, Mountain } from 'lucide-react';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 icon-gradient-primary" />
            <span className="font-headline text-lg font-bold">Bharath Kiran</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Bharath Kiran Obilisetty. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/BharathKiran2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/bharath-kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://leetcode.com/Bharath_Kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="LeetCode">
              <SiLeetcode className="h-5 w-5" />
            </Link>
            <Link href="https://www.codechef.com/users/bharath2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="CodeChef">
              <SiCodechef className="h-5 w-5" />
            </Link>
            <Link href="https://www.geeksforgeeks.org/user/bharath_kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GeeksforGeeks">
              <SiGeeksforgeeks className="h-5 w-5" />
            </Link>
             <Link href="https://www.instagram.com/bharath2422_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
              <FaInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
