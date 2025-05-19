"use client";

import React from "react";
import AnimationWrapper from "@/components/animations/AnimationWrapper";
import "@/styles/components/service-cards.css";

// Services data matching the template
const webServices = [
  { 
    image: '/images/service-1.jpg',
    title: 'Web Design',
    delay: "0.1s"
  },
  { 
    image: '/images/service-2.jpg',
    title: 'App Development',
    delay: "0.3s" 
  },
  { 
    image: '/images/service-3.jpg',
    title: 'SEO Optimization',
    delay: "0.5s" 
  },
  { 
    image: '/images/service-4.jpg',
    title: 'Social Marketing',
    delay: "0.1s" 
  },
  { 
    image: '/images/service-5.jpg',
    title: 'Email Marketing',
    delay: "0.3s" 
  },
  { 
    image: '/images/service-6.jpg',
    title: 'PPC Advertising',
    delay: "0.5s" 
  }
];

interface ServiceCardsProps {
  className?: string;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ className }) => {
  return (
    <section className={className}>
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          {/* Section Title */}          <AnimationWrapper animation="fadeInUp" delay={100}>
            <div className="section-title-container text-center mx-auto mb-5">
              <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
              <h1 className="display-6 mb-4">We Focus On Making The Best In All Sectors</h1>
            </div>
          </AnimationWrapper>
          
          {/* Service Cards Grid */}          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {webServices.map((service, index) => (
              <AnimationWrapper key={index} animation="fadeInUp" delay={100 + (index % 3) * 200}>
                <a href="/service" className="service-item block rounded text-center h-full p-4">
                  <img 
                    className="img-fluid rounded mb-4 w-full" 
                    src={service.image} 
                    alt={service.title}
                  />
                  <h4 className="mb-0">{service.title}</h4>
                </a>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
    </section>
  );
};

export default ServiceCards;
