import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Modern Web Design</h1>
      <p className="text-lg text-center max-w-2xl">
        This project showcases a modern web design using Next.js for the frontend and Django for the backend. Explore the various features and components to learn more about the project.
      </p>
    </div>
  );
};

export default Home;
