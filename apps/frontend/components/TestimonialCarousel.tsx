import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    quote: "This is the best service I have ever used!",
    author: "John Doe",
    position: "CEO, Company Inc."
  },
  {
    quote: "Amazing experience, highly recommend!",
    author: "Jane Smith",
    position: "Marketing Manager, Business Co."
  },
  {
    quote: "Exceptional quality and fantastic customer support.",
    author: "Michael Johnson",
    position: "CTO, Tech Solutions"
  }
];

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="testimonial-carousel">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">{testimonial.author}</p>
            <p className="position">{testimonial.position}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
