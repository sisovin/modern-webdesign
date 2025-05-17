import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/layout/BackToTop';
import HeroCarousel from '../components/HeroCarousel';
import DestinationGrid from '../components/DestinationGrid';
import ServiceCards from '../components/ServiceCards';
import PackageShowcase from '../components/PackageShowcase';
import TestimonialCarousel from '../components/TestimonialCarousel';
import NewsletterForm from '../components/NewsletterForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroCarousel />
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
          <DestinationGrid />
        </section>
        <section className="py-12 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <ServiceCards />
        </section>
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Tour Packages</h2>
          <PackageShowcase />
        </section>
        <section className="py-12 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <TestimonialCarousel />
        </section>
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Subscribe to our Newsletter</h2>
          <NewsletterForm />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
