'use client';

import React, { useEffect } from 'react';

interface FontsLoaderProps {
  children?: React.ReactNode;
}

/**
 * FontsLoader component ensures fonts are loaded correctly
 * and provides diagnostic information in development
 */
export function FontsLoader({ children }: FontsLoaderProps) {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    // Basic font loading check
    document.fonts.ready.then(() => {
      console.log("All document fonts loaded!");
    });
  }, []);

  return <>{children}</>;
}

export default FontsLoader;
