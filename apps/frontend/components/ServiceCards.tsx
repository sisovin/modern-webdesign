import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Building responsive and modern web applications.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphic Design',
    description: 'Creating visually appealing designs and graphics.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Developing user-friendly mobile applications.',
  },
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Improving search engine rankings and visibility.',
  },
];

const ServiceCards: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
