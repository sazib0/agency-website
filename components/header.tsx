"use client";

import { usePathname, useScrollPosition } from '@/hooks/use-scroll';
import Link from 'next/link';
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/mobile-nav";

export function Header() {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const isHome = pathname === '/';
  const isTransparent = isHome && scrollPosition < 100;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo className={`${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-foreground'}`}/>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-foreground'}`}>Home</Link>
          <Link href="/services" className={`${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-foreground'}`}>Services</Link>
          <Link href="/about" className={`${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-foreground'}`}>About</Link>
          <Link href="/contact" className={`${isTransparent ? 'text-white/90 hover:text-white' : 'text-foreground/80 hover:text-foreground'}`}>Contact</Link>
        </nav>
        <MobileNav isTransparent={isTransparent} />
      </div>
    </header>
  );
}