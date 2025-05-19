"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '@/components/layout/SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid bg-light dark:bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address Column */}
            <div className="space-y-3">
              <h5 className="text-light mb-4 text-primary dark:text-white font-medium text-lg">Address</h5>
              <p className="mb-2 flex items-center text-gray-700  dark:text-white"><span className="me-3 mr-3 text-primary">📍</span> 123 Street, New York, USA</p>
              <p className="mb-2 flex items-center text-gray-700  dark:text-white"><span className="me-3 mr-3 text-primary dark:text-white">📞</span> +012 345 67890</p>
              <p className="mb-2 flex items-center text-gray-700  dark:text-white"><span className="me-3 mr-3 text-primary">✉️</span> info@example.com</p>
              <div className="flex space-x-2 pt-2">
                <a href="https://twitter.com/" 
                   aria-label="Twitter" 
                   title="Follow us on Twitter"
                   className="btn btn-square btn-outline-secondary rounded-circle p-2 border border-gray-500 text-gray-400 hover:text-white flex items-center justify-center">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/" 
                   aria-label="Facebook" 
                   title="Follow us on Facebook"
                   className="btn btn-square btn-outline-secondary rounded-circle p-2 border border-gray-500 text-gray-400 hover:text-white flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/" 
                   aria-label="Instagram" 
                   title="Follow us on Instagram"
                   className="btn btn-square btn-outline-secondary rounded-circle p-2 border border-gray-500 text-gray-400 hover:text-white flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/" 
                   aria-label="LinkedIn" 
                   title="Connect with us on LinkedIn"
                   className="btn btn-square btn-outline-secondary rounded-circle p-2 border border-gray-500 text-gray-400 hover:text-white flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div className="space-y-2 flex flex-col">
              <h5 className="text-light mb-4 text-primary dark:text-white font-medium text-lg">Quick Links</h5>
              <a href="/about" className="text-gray-400 hover:text-gray-300 dark:hover:text-primary py-1">About Us</a>
              <a href="/contact" className="text-gray-400 hover:text-gray-300 dark:hover:text-primary py-1">Contact Us</a>
              <a href="/service" className="text-gray-400 hover:text-gray-300 dark:hover:text-primary py-1">Our Services</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 dark:hover:text-primary py-1">Terms & Condition</a>
              <a href="#" className="text-gray-400 hover:text-gray-300 dark:hover:text-primary py-1">Support</a>
            </div>
            
            {/* Gallery Column */}
            <div className="space-y-3">
              <h5 className="text-light mb-4 text-primary dark:text-white font-medium text-lg">Gallery</h5>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <img className="rounded w-full h-auto object-cover" src="/images/project-1.jpg" alt="Project" />
                </div>
                <div>
                  <img className="rounded w-full h-auto object-cover" src="/images/project-2.jpg" alt="Project" />
                </div>
                <div>
                  <img className="rounded w-full h-auto object-cover" src="/images/project-3.jpg" alt="Project" />
                </div>
                <div>
                  <img className="rounded w-full h-auto object-cover" src="/images/project-4.jpg" alt="Project" />
                </div>
                <div>
                  <img className="rounded w-full h-auto object-cover" src="/images/project-5.jpg" alt="Project" />
                </div>
                <div>
                  <img className="rounded w-full h-auto object-cover" src="/images/project-6.jpg" alt="Project" />
                </div>
              </div>
            </div>
            
            {/* Newsletter Column */}
            <div className="space-y-3">
              <h5 className="text-light mb-4 text-primary dark:text-white font-medium text-lg">Newsletter</h5>
              <p className="text-gray-400">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="relative max-w-full">
                <Input 
                  className="bg-transparent border-gray-600 w-full py-3 pl-4 pr-10 text-white rounded" 
                  type="text" 
                  placeholder="Your email" 
                  id="newsletter-email" 
                  name="newsletter-email" 
                  autoComplete="email" 
                />
                <Button 
                  type="button" 
                  className="absolute right-0 top-0 h-full px-4 bg-primary text-white hover:bg-primary-dark"
                >
                  SignUp
                </Button>
              </div>
            </div>
          </div>
    </div>
    <div className="container-fluid border-t border-gray-700 py-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center md:text-left text-gray-400">
                &copy; <a href="#" className="text-primary hover:text-primary-dark">COPA WEBDESIGN</a>, All Right Reserved {currentYear}.
              </div>
              <div className="text-center md:text-right text-gray-400">
                Designed By <a href="https://htmlcodex.com" className="text-primary hover:text-primary-dark">HTML Codex</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
