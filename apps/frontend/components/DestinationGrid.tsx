import React from 'react';
import DestinationCard from './cards/DestinationCard';

const destinations = [
  {
    id: 1,
    name: 'Paris',
    image: '/images/paris.jpg',
    description: 'The city of lights and love.',
  },
  {
    id: 2,
    name: 'New York',
    image: '/images/new-york.jpg',
    description: 'The city that never sleeps.',
  },
  {
    id: 3,
    name: 'Tokyo',
    image: '/images/tokyo.jpg',
    description: 'A city of contrasts and culture.',
  },
  {
    id: 4,
    name: 'Sydney',
    image: '/images/sydney.jpg',
    description: 'The harbour city.',
  },
];

const DestinationGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
};

export default DestinationGrid;
