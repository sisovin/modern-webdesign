"use client"

import React, { useEffect, useRef } from 'react';
// Using the default import instead of named import for Link
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import OptimizedImage from './OptimizedImage';
import Autoplay from 'embla-carousel-autoplay';
import '@/styles/components/carousel-controls.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';

const heroSlides = [
  {
    id: 1,
    image: "/images/carousel-1.jpg",
    title: "Creative & Innovative",
    subtitle: "We Are Leader In",
    description: "Digital Solution",
    ctaText: "Explore Services",
    ctaLink: "/service"
  },
  {
    id: 2,
    image: "/images/carousel-2.jpg",
    title: "Creative & Innovative",
    subtitle: "We Are Leader In",
    description: "Digital Solution",
    ctaText: "Our Projects",
    ctaLink: "/portfolio"
  },
  {
    id: 3,
    image: "/images/carousel-3.jpg",
    title: "Creative & Innovative",
    subtitle: "We Are Leader In",
    description: "Digital Solution",
    ctaText: "Contact Us",
    ctaLink: "/contact"
  }
];

const HeroCarousel: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Create a plugin instance with options
  const plugin = React.useRef(
    Autoplay({ 
      delay: 5000, // 5 seconds between slides
      stopOnInteraction: true, // Pause autoplay on user interaction
      stopOnMouseEnter: true, // Pause on mouse enter
      stopOnFocusIn: true // Pause on keyboard focus
    })
  );

  // Set up listeners for the carousel
  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    // Call once to set initial index
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full max-h-[600px] overflow-hidden">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[600px] w-full">
                <OptimizedImage
                  src={slide.image}
                  alt="Slider Image"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="max-w-3xl space-y-4">
                    <p className="text-lg md:text-xl font-semibold text-white uppercase tracking-wider mb-2 animate-fade-in-up">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-zoom-in">
                      {slide.title} <span className="text-primary">{slide.description}</span>
                    </h1>
                    <div className="mt-8 animate-fade-in-up delay-300">
                      <a href={slide.ctaLink}>
                        <button 
                          type="button" 
                          className="rounded-full px-8 py-6 text-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                        >
                          <span>{slide.ctaText}</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom carousel indicators/thumbnails */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {heroSlides.map((slide, index) => (
            <button 
              key={slide.id}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 focus:outline-none transform transition hover:scale-110 ${
                current === index 
                  ? "border-primary scale-110" 
                  : "border-white/70"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="relative w-full h-full">
                <OptimizedImage
                  src={slide.image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}        </div>          
          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
            onClick={() => api?.scrollPrev()}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#header-carousel"
            data-bs-slide="next"
            onClick={() => api?.scrollNext()}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
