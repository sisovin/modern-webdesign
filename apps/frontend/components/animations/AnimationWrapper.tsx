"use client"

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import styles from './AnimationWrapper.module.css';

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation: 'fadeIn' | 'fadeInUp' | 'zoomIn' | 'bounceInUp';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation,
  delay = 0,
  duration = 1000,
  className,
  threshold = 0.1
}) => {  const [isVisible, setIsVisible] = useState(true); // Start visible for debugging
  const ref = useRef<HTMLDivElement>(null);

  // Comment out the useEffect for now to skip animation logic
  /*
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px' // Slightly before the element comes into view
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  */
  return (
    <div
      ref={ref}
      className={cn(
        styles.animationWrapper,
        animation && styles[animation],
        isVisible && styles.visible,
        className
      )}
      data-delay={delay}
      data-duration={duration}
    >
      {children}
    </div>
  );
};

export default AnimationWrapper;
