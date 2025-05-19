"use client";

import React from 'react';
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import '@/styles/components/about-section.css';

const AboutSection = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Left column - Image */}
                    <AnimationWrapper animation="fadeInUp" delay={100}>
                        <div className="img-border">
                            <img 
                                src="/images/about.jpg"
                                alt="About Us"
                                className="img-fluid"
                            />
                        </div>
                    </AnimationWrapper>
                    
                    {/* Right column - Content */}
                    <AnimationWrapper animation="fadeInUp" delay={500}>
                        <div className="h-full flex flex-col">
                            <div className="flex items-center mb-2">
                                <h6 className="section-title bg-white text-start text-primary pe-3 mb-0">
                                    ABOUT US
                                </h6>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                                #1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience
                            </h1>
                            
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            
                            <p className="mb-4">
                                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                            </p>
                              {/* Founder info */}
                            <div className="flex items-center mb-4 pb-2">
                                <img
                                    src="/images/team-1.jpg"
                                    alt="Jhon Doe"
                                    className="flex-shrink-0 rounded-circle founder-img"
                                />
                                <div className="ps-4">
                                    <h6 className="font-bold mb-0">Jhon Doe</h6>
                                    <small className="text-gray-500">SEO & Founder</small>
                                </div>
                            </div>
                            
                            <a href="/about" className="btn-primary rounded-pill py-3 px-5 inline-block self-start bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
                                Read More
                            </a>
                        </div>
                    </AnimationWrapper>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;