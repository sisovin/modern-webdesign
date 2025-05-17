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
      <div className="container mx-auto px-4 mt-4">
        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-bold">Contact Information</h4>
            <p>Email: info@modernwebdesign.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Web Design St, Suite 100, Web City, WC 12345</p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul>
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-500">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
