'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import styles from './ProjectCard.module.css';
import useWowAnimation from '@/hooks/useWowAnimation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const ProjectCard = () => {
  const projectList = Array.from({ length: 10 }, (_, i) => i + 1);
  // Initialize WOW animation
  useWowAnimation();
  
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Set isClient to true when component mounts (client-side only)
    setIsClient(true);
  }, []);
  
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className={`text-center mx-auto mb-5 ${styles.projectHeader} wow fadeInUp`} data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Our Projects</h6>
          <h1 className="display-6 mb-4">Learn More About Our Complete Projects</h1>
        </div>
        
        {isClient && (
          <div className={`${styles.swiperContainer} wow fadeInUp`} data-wow-delay="0.1s">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={25} // Match the HTML margin value
              slidesPerView={1}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  // Create custom bullets with the project image and dot number
                  const dotNum = String(index + 1).padStart(2, '0');
                  return `<span class="${className}">
                            <div class="${styles.dataDotOverlay}">
                              <div class="${styles.dataDot}">${dotNum}</div>
                            </div>
                            <img src="/images/project-${index + 1}.jpg" alt="Project ${index + 1}">
                          </span>`;
                },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 3
                },
                1200: {
                  slidesPerView: 4
                }
              }}
              className="project-carousel"
            >
              {projectList.map((num) => (
                <SwiperSlide key={num}>
                  <div className="project-item border rounded h-100 p-4" data-dot={String(num).padStart(2, '0')}>
                    <div className="position-relative mb-4">
                      <Image
                        className="img-fluid rounded"
                        src={`/images/project-${num}.jpg`}
                        alt={`Project ${num}`}
                        width={350}
                        height={250}
                      />
                      <a
                        href={`/images/project-${num}.jpg`}
                        data-lightbox="project"
                        className={styles.projectLink}
                        title={`View Project ${num} Full Image`}
                        aria-label={`View Project ${num} Full Image`}
                      >
                        <FontAwesomeIcon icon={faEye} size="2x" />
                      </a>
                    </div>
                    <h6>UI / UX Design</h6>
                    <span>Digital agency website design and development</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
