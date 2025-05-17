import React from 'react';

interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface PackageShowcaseProps {
  packages: Package[];
}

const PackageShowcase: React.FC<PackageShowcaseProps> = ({ packages }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div key={pkg.id} className="border rounded-lg overflow-hidden shadow-lg">
          <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-gray-700 mb-4">{pkg.description}</p>
            <div className="text-lg font-semibold">${pkg.price.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageShowcase;
