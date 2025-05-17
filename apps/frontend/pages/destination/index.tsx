import React from 'react';
import DestinationGrid from '../../components/DestinationGrid';

const DestinationPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Destinations</h1>
      <DestinationGrid />
    </div>
  );
};

export default DestinationPage;
