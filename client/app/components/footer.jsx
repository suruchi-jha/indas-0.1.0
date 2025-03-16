'use client';

import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// Footer Component
const Footer = () => {
  return (
    <footer className="w-full p-6 sm:p-8 border-t border-black/10 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Copyright Text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Indas. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all cursor-pointer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-all cursor-pointer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;