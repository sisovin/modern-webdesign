"use client"

import React from 'react';
import Image, { ImageProps } from 'next/image';
import createPlaceholderDataURL from '@/lib/placeholderImage';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

/**
 * A wrapper around Next.js Image component for handling external URLs more gracefully.
 * This component allows for fallback handling and additional optimizations.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  // Handle images that might fail to load
  const [imgSrc, setImgSrc] = React.useState(src);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Fallback to placeholder if image fails to load
  const handleError = () => {
    setError(true);
    setImgSrc(createPlaceholderDataURL());
  };

  return (
    <>
      {/* Show loading state */}
      {loading && !error && (
        <div 
          className="absolute inset-0 bg-muted/20 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={imgSrc}
        alt={alt || "Image"}
        onLoad={() => setLoading(false)}
        onError={handleError}
        {...props}
      />
    </>
  );
};

export default OptimizedImage;
