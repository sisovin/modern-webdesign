"use client";

import React, { useEffect, useRef } from 'react';
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import '@/styles/components/facts-counter.css';

// Simple counter animation hook
const useCounterUp = (targetValue: number, duration: number = 2000) => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;
    
    let startTime: number | null = null;
    let currentCount = 0;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.floor((progress / duration) * targetValue);
      
      currentCount = Math.min(increment, targetValue);
      if (counter) counter.textContent = currentCount.toString();
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        if (counter) counter.textContent = targetValue.toString();
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(counter);
    
    return () => observer.disconnect();
  }, [targetValue, duration]);
  
  return counterRef;
};

interface FactCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  delay: number;
}

const FactCard: React.FC<FactCardProps> = ({ icon, title, value, delay }) => {
  const counterRef = useCounterUp(value);
  
  return (
    <AnimationWrapper animation="fadeInUp" delay={delay}>
      <div className="fact-item bg-light rounded text-center h-100 p-5">
        <div className="mb-4">
          {icon}
        </div>
        <h5 className="mb-3">{title}</h5>
        <h1 className="display-5 mb-0" ref={counterRef}>0</h1>
      </div>
    </AnimationWrapper>
  );
};

export default function FactsCard() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-primary mx-auto" viewBox="0 0 16 16">
                <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
              </svg>
            } 
            title="Years Experience" 
            value={1234} 
            delay={100} 
          />
          
          <FactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-primary mx-auto" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            } 
            title="Team Members" 
            value={1234} 
            delay={300} 
          />
          
          <FactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-primary mx-auto" viewBox="0 0 16 16">
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-4-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            } 
            title="Satisfied Clients" 
            value={1234} 
            delay={500} 
          />
          
          <FactCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="text-primary mx-auto" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
              </svg>
            } 
            title="Projects Done" 
            value={1234} 
            delay={700} 
          />
        </div>
      </div>
    </div>
  );
}
    


