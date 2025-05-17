import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to Modern Web Design! We are a team of passionate web designers and developers dedicated to creating beautiful and functional websites.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="/images/team/member1.jpg" alt="Team Member 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">Lead Designer</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="/images/team/member2.jpg" alt="Team Member 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Senior Developer</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <img src="/images/team/member3.jpg" alt="Team Member 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Alice Johnson</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
