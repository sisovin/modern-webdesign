import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Modern Web Design. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
