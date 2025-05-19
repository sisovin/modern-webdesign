'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import useWowAnimation from "@/hooks/useWowAnimation";
import styles from "./FeatureCard.module.css";

const skills = [
    { name: "Digital Marketing", percent: 85 },
    { name: "SEO & Backlinks", percent: 90 },
    { name: "Design & Development", percent: 95 },
];

export default function FeatureCard() {
    // Initialize WOW animation
    useWowAnimation();
    
    // State for animated progress values
    const [progressValues, setProgressValues] = useState(skills.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    // Use useEffect to animate the progress bars
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);
    
    // Animate progress bars when section becomes visible
    useEffect(() => {
        if (!isVisible) return;
        
        // Animate each progress bar
        const animateProgress = () => {
            const duration = 1500; // animation duration in ms
            const interval = 20; // update interval in ms
            const steps = duration / interval;
            let currentStep = 0;
            
            const timer = setInterval(() => {
                currentStep++;
                
                const newValues = skills.map((skill) => {
                    // Calculate current progress based on easing function
                    return Math.min(
                        Math.floor((currentStep / steps) * skill.percent),
                        skill.percent
                    );
                });
                
                setProgressValues(newValues);
                
                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, interval);
            
            return () => clearInterval(timer);
        };
        
        const cleanupAnimation = animateProgress();
        return cleanupAnimation;
    }, [isVisible]);
    
    return (
        <div className="container-xxl py-5" ref={sectionRef}>
            <div className="container">
                <div className="row g-5">
                    {/* Left Content */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="h-100">
                            <h6 className="section-title bg-white text-start text-primary pe-3">
                                Why Choose Us
                            </h6>
                            <h1 className="display-6 mb-4">
                                Why People Trust Us? Learn About Us!
                            </h1>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam
                                et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            {/* Skill Progress Bars */}
                            <div className="row g-4">
                                {skills.map((skill, index) => (
                                    <div key={skill.name} className="col-12">                                        <div className={styles.skill}>
                                            <div className="d-flex">
                                                <p className="mb-2">{skill.name}</p>
                                            </div>
                                            <div className={styles.progress}>                                        <div 
                                                    className={`${styles.progressBar} ${styles[`progressBar${progressValues[index]}`]}`} 
                                                    role="progressbar" 
                                                    aria-label={`${skill.name} skill progress`}
                                                >
                                                    <span className={styles.progressPercent}>
                                                        {progressValues[index]}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="img-border">
                            <Image
                                src="/images/feature.jpg"
                                alt="Feature Image"
                                width={500}
                                height={500}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
