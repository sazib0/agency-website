"use client";

import { useState, useEffect } from 'react';
import { usePathname as useNextPathname } from 'next/navigation';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export function usePathname() {
  return useNextPathname();
}