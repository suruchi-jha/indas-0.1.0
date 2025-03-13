'use client';

import Link from 'next/link';

// Hero Component
const Hero = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-20 gap-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold">
        Navigate Safely with{' '}
        <span className="text-blue-600">
          Indas
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