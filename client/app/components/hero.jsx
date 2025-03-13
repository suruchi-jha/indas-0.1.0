'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Hero Component
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Indas'; // The word to apply the typewriter effect to
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); // To handle the backspacing effect

  // Typewriter effect for the "Indas" word
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (index < fullText.length) {
          setText((prevText) => prevText + fullText[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          // Start deleting after a short delay
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting backward
        if (text.length > 0) {
          setText((prevText) => prevText.slice(0, -1));
        } else {
          // Reset for the next loop
          setIsDeleting(false);
          setIndex(0);
        }
      }
    }, isDeleting ? 50 : 150); // Faster backspacing, slower typing

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, fullText]);

  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-20 gap-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold">
        Navigate Safely with{' '}
        <span className="text-blue-600">
          {text}
          <span className="ml-1 inline-block h-6 w-1 bg-black animate-blink" />
        </span>
      </h1>

      {/* Static Description */}
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
        Indas is your ultimate guide during emergencies. Detect earthquakes, find safe exits, and stay informed with real-time alerts.
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