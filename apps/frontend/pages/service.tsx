import React from 'react';
import ServiceCards from '../../components/ServiceCards';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <ServiceCards />
    </div>
  );
};

export default Services;
