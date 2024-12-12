import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
        alt="Students collaborating in a classroom"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#1B3665] bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Welcome to Discovery School
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Where every student's potential is discovered, nurtured, and celebrated
          </p>
        </div>
      </div>
    </div>
  );
}