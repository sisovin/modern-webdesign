import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel: React.FC = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        <div>
          <img src="/images/hero1.jpg" alt="Hero 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/images/hero2.jpg" alt="Hero 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/images/hero3.jpg" alt="Hero 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
