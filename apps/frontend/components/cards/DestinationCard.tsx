import React from 'react';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <p className="text-gray-700">{destination.description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
