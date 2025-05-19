"use client"

import React from 'react';

// Custom icon components to avoid JSX compatibility issues
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const BrandContact: React.FC = () => {
  return (
    <div className="container-fluid py-4 px-5 bg-light dark:bg-gray-800 wow fadeIn m-8" data-wow-delay="0.1s">
      <div className="row align-items-center top-bar">
        <div className="col-lg-4 col-md-12 text-center text-lg-start">
          <a href="/" className="navbar-brand m-0 p-0">
            <h1 className="fw-bold text-primary m-0 flex items-center">
              <span className="me-3 mr-3 text-4xl">💻</span>
              <span>COPA WEBDESIGN</span>
            </h1>
          </a>
        </div>
        <div className="col-lg-8 col-md-7 d-none d-lg-block">
          <div className="flex justify-end space-x-6">            <div className="flex items-center">
              <div className="flex-shrink-0 btn-lg-square border rounded-circle p-3 flex items-center justify-center bg-white">
                <ClockIcon />
              </div>
              <div className="ml-3">
                <p className="mb-1 text-sm text-gray-600">Opening Hour</p>
                <h6 className="mb-0 font-semibold text-black">Mon - Fri, 8:00 - 9:00</h6>
              </div>
            </div>            <div className="flex items-center">
              <div className="flex-shrink-0 btn-lg-square border rounded-circle p-3 flex items-center justify-center bg-white">
                <PhoneIcon />
              </div>
              <div className="ml-3">
                <p className="mb-1 text-sm text-gray-600">Call Us</p>
                <h6 className="mb-0 font-bold text-black">+012 345 6789</h6>
              </div>
            </div>            <div className="flex items-center">
              <div className="flex-shrink-0 btn-lg-square border rounded-circle p-3 flex items-center justify-center bg-white">
                <MailIcon />
              </div>
              <div className="ml-3">
                <p className="mb-1 text-sm text-gray-600">Email Us</p>
                <h6 className="mb-0 font-semibold text-black">info@example.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandContact;
