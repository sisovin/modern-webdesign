import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Destination } from '../../types/destination';

interface DestinationDetailProps {
  destination: Destination;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{destination.name}</h1>
      <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg">{destination.description}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/destinations/${id}`);
  const destination = response.data;

  return {
    props: {
      destination,
    },
  };
};

export default DestinationDetail;
