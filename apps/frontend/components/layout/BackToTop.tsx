"use client";

import React, { useState, useEffect } from "react";
// We'll remove the Lucide icon and use a Unicode arrow instead
import { cn } from "@/lib/utils";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    // Use more reliable scroll detection that works across different browsers
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    // Check if smooth scrolling is supported
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    // Use passive event listener for better performance on mobile
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
      )}
    >
      ↑
    </button>
  );
};

export default BackToTop;
