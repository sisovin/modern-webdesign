"use client"

import { useEffect } from 'react';

// This hook mimics the initialization of WOW.js
// It adds a small amount of functionality to make animations work
export const useWowAnimation = () => {
  useEffect(() => {
    // Apply animation classes to elements with the .wow class
    const wowElements = document.querySelectorAll('.wow');
    
    // Create an IntersectionObserver to trigger animations when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Get animation details from data attributes
            const animationName = element.dataset.wowAnimation || 'fadeIn';
            const animationDelay = element.dataset.wowDelay || '0s';
            const animationDuration = element.dataset.wowDuration || '1s';
            
            // Apply animation styles
            element.style.animationName = animationName;
            element.style.animationDelay = animationDelay;
            element.style.animationDuration = animationDuration;
            element.style.visibility = 'visible';
            
            // Remove from observation after animation triggered
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    // Observe all elements with the .wow class
    wowElements.forEach(element => {
      observer.observe(element);
    });
    
    // Clean up
    return () => {
      wowElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useWowAnimation;
