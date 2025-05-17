import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Modern Web Design</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-lg hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-lg hover:text-blue-500">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
