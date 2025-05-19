"use client"

import React from "react";
import AnimationWrapper from "@/components/animations/AnimationWrapper";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "@/components/layout/SocialIcons";
import useWowAnimation from "@/hooks/useWowAnimation";
import styles from "./TeamCard.module.css";

// Team member data
const teamMembers = [
    {
        id: 1,
        image: "/images/team-1.jpg",
        name: "John Doe",
        designation: "CEO & Founder",
    },
    {
        id: 2,
        image: "/images/team-2.jpg",
        name: "Jane Smith",
        designation: "Web Designer",
    },
    {
        id: 3,
        image: "/images/team-3.jpg",
        name: "Michael Johnson",
        designation: "Web Developer",
    }
];

const TeamCard: React.FC = () => {
    // Initialize WOW animation
    useWowAnimation();

    return (
        <div className="team-section py-5 flex justify-center">
            <div className="container mx-auto">
                <AnimationWrapper animation="fadeInUp" delay={100}>
                    <div className="section-title-container text-center mx-auto mb-5">
                        <h6 className="section-title bg-white text-center text-primary px-3 inline-block mb-2 relative z-10">Our Team</h6>
                        <h1 className="display-6 mb-4">We Are A Creative Team For Your Dream Project</h1>
                    </div>
                </AnimationWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member) => (
                        <AnimationWrapper key={member.id} animation="fadeInUp" delay={100 + (member.id * 200)}>                            <div className={styles.teamItem}>
                                <img
                                    className={`img-fluid border ${styles.teamMemberImage}`}                                    src={member.image}
                                    alt={`${member.name} - ${member.designation}`}
                                    width={250}
                                    height={250}
                                />
                                <div className={styles.teamText}>
                                    <div className={styles.teamTitle}>
                                        <h5>{member.name}</h5>
                                        <span>{member.designation}</span>
                                    </div>
                                    <div className={styles.teamSocial}>                                        <a href="#" title="Facebook" aria-label="Visit Facebook profile" className={styles.socialLink}>
                                            <FacebookIcon size={16} className={styles.socialIcon} />
                                        </a>
                                        <a href="#" title="Twitter" aria-label="Visit Twitter profile" className={styles.socialLink}>
                                            <TwitterIcon size={16} className={styles.socialIcon} />
                                        </a>
                                        <a href="#" title="Instagram" aria-label="Visit Instagram profile" className={styles.socialLink}>
                                            <InstagramIcon size={16} className={styles.socialIcon} />
                                        </a>
                                        <a href="#" title="LinkedIn" aria-label="Visit LinkedIn profile" className={styles.socialLink}>
                                            <LinkedinIcon size={16} className={styles.socialIcon} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </AnimationWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;