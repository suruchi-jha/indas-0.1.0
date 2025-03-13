'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Hero Component
const Hero = () => {
  const [text, setText] = useState('');
  const fullText =
    'Indas is your ultimate guide during emergencies. Detect earthquakes, find safe exits, and stay informed with real-time alerts.';
  const [index, setIndex] = useState(0);

  // Typewriter effect for the hero section
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-20 gap-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold">
        Navigate Safely with <span className="text-blue-600">Indas</span>
      </h1>

      {/* Typewriter Text */}
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
        <span className="inline-block">{text}</span>
        <span className="ml-1 inline-block h-6 w-1 bg-black animate-blink" />
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/download"
          className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-all shadow-md"
        >
          Download Now
        </Link>
        <Link
          href="/features"
          className="rounded-full border border-black px-6 py-3 hover:bg-gray-200 transition-all"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
};

export default Hero;