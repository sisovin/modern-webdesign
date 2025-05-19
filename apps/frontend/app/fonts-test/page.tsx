'use client';

import React from 'react';

export default function FontsTestPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Font Loading Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Poppins Font</h2>
          <p className="font-test-poppins font-regular text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-test-poppins font-bold text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Inter Font</h2>
          <p className="font-test-inter font-regular text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
          <p className="font-test-inter font-bold text-lg">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>
    </div>
  );
}
