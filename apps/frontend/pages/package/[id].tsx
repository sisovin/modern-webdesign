import React from 'react';
import { GetServerSideProps } from 'next';
import { fetchPackageById } from '../../lib/api';
import { Package } from '../../types/package';

interface PackageDetailProps {
  package: Package;
}

const PackageDetail: React.FC<PackageDetailProps> = ({ package }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={package.imageUrl} alt={package.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{package.name}</h1>
          <p className="text-gray-700 mb-4">{package.description}</p>
          <div className="text-lg font-semibold mb-4">${package.price.toFixed(2)}</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const package = await fetchPackageById(id as string);

  return {
    props: {
      package,
    },
  };
};

export default PackageDetail;
