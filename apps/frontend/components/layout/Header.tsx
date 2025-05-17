import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-10">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">
            <img src="/images/logo.png" alt="Modern Web Design" className="h-8" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
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
