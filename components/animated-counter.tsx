"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ end, duration = 2000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const countRef = useRef(count);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime.current) startTime.current = timestamp;
        const progress = timestamp - startTime.current;
        const percentage = Math.min(progress / duration, 1);
        
        const currentCount = Math.floor(end * percentage);
        setCount(currentCount);
        countRef.current = currentCount;

        if (percentage < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}{suffix}
    </div>
  );
} 