"use client"

import React, { useState, useRef } from 'react';
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import styles from './TestimonialCarousel.module.css';
import { cn } from '@/lib/utils';

// Updated testimonials to match the desired structure
const testimonials = [
  {
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    author: "Client Name",
    position: "Profession",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    author: "Client Name",
    position: "Profession",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    author: "Client Name",
    position: "Profession",
    image: "/images/testimonial-3.jpg"
  },
  {
    quote: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    author: "Client Name",
    position: "Profession",
    image: "/images/testimonial-4.jpg"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // Handle carousel change to update the active slide
  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className={cn("container-xxl testimonial", styles.testimonialSection)}>
      <div className="container">
        <AnimationWrapper animation="fadeInUp" delay={100}>
          <div className={styles.sectionHeader}>
            <h6 className={styles.sectionTitle}>Testimonial</h6>
            <h1 className="display-5 mb-4">What Our Clients Say!</h1>
          </div>
        </AnimationWrapper>        <AnimationWrapper animation="fadeInUp" delay={200}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[autoplayRef.current]}
            setApi={setApi}
            className="w-full owl-carousel testimonial-carousel"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 p-2">
                  <div className={cn(styles.testimonialItem, current === index && styles.active)}>
                    <div className="d-flex flex items-center mb-4">
                      <div className={styles.imageContainer}>
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className={styles.authorImage}
                        />
                      </div>
                      <div className={styles.authorInfo}>
                        <h5 className={styles.authorName}>{testimonial.author}</h5>
                        <small className={styles.authorPosition}>{testimonial.position}</small>
                      </div>
                    </div>
                    <p className="mb-0">
                      <i className={cn("fa fa-quote-left", styles.quoteIcon)}></i>
                      {testimonial.quote}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={styles.navControls}>
              <CarouselPrevious className={styles.carouselNavButton} />
              <CarouselNext className={styles.carouselNavButton} />
            </div>
          </Carousel>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
