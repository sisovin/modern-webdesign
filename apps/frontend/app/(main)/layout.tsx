import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import BackToTop from '../../components/layout/BackToTop';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainLayout;
