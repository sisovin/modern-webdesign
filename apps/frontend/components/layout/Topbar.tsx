"use client"

import React from 'react';
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  InstagramIcon 
} from './SocialIcons';

// Create a component that mimics the original HTML template Topbar
const Topbar = () => {
  return (
    <div className="container-fluid bg-light dark:bg-gray-800 px-0 m-8 wow fadeIn" data-wow-delay="0.1s">
      <div className="row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          {/* Simplified breadcrumb that matches the HTML template */}
          <div className="small text-secondary dark:text-gray-300 mb-0 py-2">
            <a className="text-secondary dark:text-gray-300" href="#">Home</a>
            <span className="mx-1">/</span>
            <a className="text-secondary dark:text-gray-300" href="#">Career</a>
            <span className="mx-1">/</span>
            <a className="text-secondary dark:text-gray-300" href="#">Terms</a>
            <span className="mx-1">/</span>
            <a className="text-secondary dark:text-gray-300" href="#">Privacy</a>
          </div>
        </div>        
        <div className="col-lg-6 px-5 text-end">
          <div className="d-inline-flex align-items-center">
            <small className="text-secondary dark:text-gray-300 me-2">Follow us:</small>
            <a className="btn-square text-primary border-end rounded-0 d-inline-flex align-items-center justify-content-center w-8 h-8" href="" aria-label="Facebook">
              <FacebookIcon size={16} />
            </a>
            <a className="btn-square text-primary border-end rounded-0 d-inline-flex align-items-center justify-content-center w-8 h-8" href="" aria-label="Twitter">
              <TwitterIcon size={16} />
            </a>
            <a className="btn-square text-primary border-end rounded-0 d-inline-flex align-items-center justify-content-center w-8 h-8" href="" aria-label="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
            <a className="btn-square text-primary pe-0 d-inline-flex align-items-center justify-content-center w-8 h-8" href="" aria-label="Instagram">
              <InstagramIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
