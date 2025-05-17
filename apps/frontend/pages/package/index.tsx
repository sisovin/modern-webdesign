import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageShowcase from '../../components/PackageShowcase';

const PackageListing: React.FC = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('/api/packages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tour Packages</h1>
      <PackageShowcase packages={packages} />
    </div>
  );
};

export default PackageListing;
