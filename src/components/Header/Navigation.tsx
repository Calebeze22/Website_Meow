import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  'Home',
  'About Us',
  'Academics',
  'Admissions',
  'Student Life',
  'Contact'
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-white hover:text-[#F4B942] transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white hover:text-[#F4B942] transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-48 bg-[#1B3665] rounded-lg shadow-lg py-2 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block px-4 py-2 text-white hover:bg-[#F4B942] hover:text-[#1B3665] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}