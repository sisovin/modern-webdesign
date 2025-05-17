import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Booking</h1>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
