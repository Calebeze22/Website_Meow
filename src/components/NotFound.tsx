import React from 'react';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <FileQuestion className="mx-auto h-16 w-16 text-blue-900 mb-4" />
        <h1 className="text-4xl font-bold text-blue-900 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! This page isn't in our yearbook.</p>
        <a
          href="/"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
}