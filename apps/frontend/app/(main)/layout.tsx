"use client"

import React from 'react';
import Topbar from '../../components/layout/Topbar';
import BrandContact from '../../components/layout/BrandContact';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import BackToTop from '../../components/layout/BackToTop';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {  // Direct layout without animation wrappers
  return (
    <div className="bg-light dark:bg-gray-800">
      {/* Main components matching the original HTML template structure */}      
      {/* 1. Topbar Section */}
      <Topbar />
      
      {/* 2. Brand & Contact Section */}
      <BrandContact />
      
      {/* 3. Header/Navbar Section */}
      <Header />
      
      {/* 4. Main Content */}
      <main>{children}</main>
      
      {/* 5. Footer Section */}
      <Footer />

      {/* Back To Top Button */}
      <BackToTop />
    </div>
  );
}
