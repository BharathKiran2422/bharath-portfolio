
import Link from 'next/link';
import { Github, Linkedin, Mountain } from 'lucide-react';


const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M13.48 4.493l-.262.277-1.414 1.488-.002.002-3.535 3.72-2.122 2.23-1.414 1.489-.262.276.262.277 1.414 1.488 2.122 2.23 3.535 3.72 1.414 1.488.262.277.262-.277 1.414-1.488 3.535-3.72 2.122-2.23 1.414-1.489.262-.276-.262-.277-1.414-1.488-2.122-2.23-3.535-3.72-1.414-1.488-.262-.277zm-2.828 8.23l2.12-2.23 1.415 1.488-2.12 2.23-1.415-1.488zm-2.121-2.23l2.12-2.23 1.415 1.488-2.12 2.23-1.414-1.488z" />
    </svg>
);

const CodeChefIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="m19.33 11.08-3.92-1.63-2.73 4.41 6.65-2.78m-11.41 1.05 6.47 2.72-2.61 4.22-3.86-6.94M7.92 9.45l3.92-1.63 2.73 4.41-6.65-2.78M1.08 12l6.84 12 10.9-4.54L8.27 0 1.08 12Z"/>
  </svg>
);

const GFGIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
        <path d="M11.68,5.45H16.46L12,12.09,7.54,5.45h4.14M4.23,2.3H20.22l-8,14.65L4.23,2.3M2,2,8,13.1,2,21.62H14.15V18.32h-8.1L12,11.68l3.94,6.64h2.72L12,3.38,2.72,20.21H22V2Z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
);


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
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
              <LeetCodeIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.codechef.com/users/bharath2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="CodeChef">
              <CodeChefIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.geeksforgeeks.org/user/bharath_kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="GeeksforGeeks">
              <GFGIcon className="h-5 w-5" />
            </Link>
             <Link href="https://www.instagram.com/bharath2422_/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
