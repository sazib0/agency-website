"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image 
        src="/favicon.ico" 
        alt="Gikra Logo" 
        width={24} 
        height={24} 
        className="dark:invert" 
      />
      <span className={`font-bold text-xl ${className || ''}`}>Gikra</span>
    </Link>
  )
} 