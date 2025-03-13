'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // User has scrolled down
      } else {
        setIsScrolled(false); // User is at the top
      }
    };

    window.addEventListener('scroll', handleScroll); // Attach the event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between p-6 pt-2 sm:pt-2 pb-2 sm:pb-2 sm:p-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <span
          className={`text-3xl underline decoration-blue-500 font-medium font-mono transition-all duration-300 ${
            isScrolled ? 'text-black' : 'text-black'
          }`}
        >
          Indas
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {['Home', 'About', 'Features', 'Blog'].map((item, i) => (
          <Link
            key={i}
            href={`/${item.toLowerCase()}`}
            className={`text-l transition-colors hover:underline ${
              isScrolled ? 'text-black hover:text-blue-500' : 'text-black hover:text-blue-600'
            }`}
          >
            {item}
          </Link>
        ))}

        {/* Join Button */}
        <Link
          href="/auth/login"
          className={`rounded-full px-4 py-2 transition-all shadow-md ${
            isScrolled
              ? 'bg-blue-500 text-white hover:bg-gray-200 hover:text-black'
              : 'bg-blue-500 text-black hover:bg-gray-200'
          }`}
        >
          Join The Waitlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;