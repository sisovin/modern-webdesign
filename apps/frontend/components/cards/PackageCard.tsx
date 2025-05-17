import React from 'react';

interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface PackageCardProps {
  package: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ package }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={package.imageUrl} alt={package.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{package.name}</h3>
        <p className="text-gray-700 mb-4">{package.description}</p>
        <div className="text-lg font-semibold">${package.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default PackageCard;
