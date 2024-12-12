import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">Riverside High 2024</h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md hover:bg-blue-800">Classes</a>
                <a href="#" className="px-3 py-2 rounded-md hover:bg-blue-800">Events</a>
                <a href="#" className="px-3 py-2 rounded-md hover:bg-blue-800">Sports</a>
                <a href="#" className="px-3 py-2 rounded-md hover:bg-blue-800">Clubs</a>
                <a href="#" className="px-3 py-2 rounded-md hover:bg-blue-800">Gallery</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-blue-800 text-white placeholder-blue-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-1.5 h-5 w-5 text-blue-300" />
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-blue-800"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">Classes</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">Events</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">Sports</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">Clubs</a>
              <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">Gallery</a>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2024 Riverside High School Yearbook</p>
            <p className="mt-2 text-blue-300">Preserving memories that last a lifetime</p>
          </div>
        </div>
      </footer>
    </div>
  );
}