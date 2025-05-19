import React from 'react';
import HeroCarousel from '@/components/HeroCarousel';
import FactsCard from '@/components/FactsCard';
import AboutSection from '@/components/AboutSection';
import ServiceCards from '@/components/ServiceCards';
import FeatureCard from '@/components/FeatureCard';
import ProjectCard from '@/components/ProjectCard';
import TeamCard from '@/components/TeamCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function Home() {
  return (
    <main className=" w-full max-w-full flex-grow site-content">
      {/* Carousel Start */}
      <HeroCarousel />
      {/* Carousel End */}

      {/* Facts Start */}
      <FactsCard />
      {/* Facts End */}

      {/* About Start */}
      <AboutSection />
      {/* About End */}
      
      {/* Service Start */}
      <ServiceCards />
      {/* Service End */}

      {/* <!-- Feature Start --> */}
      <FeatureCard />
      {/* <!-- Feature End -->  */}

      {/* Project Start */}
     <ProjectCard />
      {/* Project End */}

      {/* Team Start */}
      <TeamCard />
      
      {/* Team End */}

      {/* Testimonial Start */}
      <TestimonialCarousel />
      
      {/* Testimonial End */}
    </main>
  );
}
