'use client';

import Link from 'next/link';
import Navbar from './components/navbar'; // Import the Navbar component
import Hero from './components/hero'; // Import the Hero component
import Features from './components/feature'; // Import the Features component
import Footer from './components/footer'; // Import the Footer component

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-white via-gray-100 to-gray-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
}