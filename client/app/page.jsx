'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Indas is your ultimate guide during emergencies. Detect earthquakes, find safe exits, and stay informed with real-time alerts.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50); // Adjust typing speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between p-4 sm:p-6 border-b border-black/10 dark:border-white/10">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2">
          <span className="text-3xl underline decoration-blue-500 font-medium font-mono">Indas</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-l hover:text-blue-500 transition-colors hover:underline"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-l hover:text-blue-500 transition-colors hover:underline"
          >
            About
          </Link>
          <Link
            href="/features"
            className="text-l hover:text-blue-500 transition-colors hover:underline"
          >
            Features
          </Link>
          <Link
            href="/blog"
            className="text-l hover:text-blue-500 transition-colors hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/join"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-colors text-sm"
          >
            Join
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-20 gap-8">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Navigate Safely with <span className="text-blue-600">Indas</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          <span className="inline-block">{text}</span>
          <span className="ml-1 inline-block h-6 w-1 bg-black dark:bg-white animate-blink" />
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          <Link
            href="/download"
            className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            Download Now
          </Link>
          <Link
            href="/features"
            className="rounded-full border border-black/10 dark:border-white/10 px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* App Screenshot or Demo */}
        <div className="mt-12">
          <Image
            src="/globe.svg" // Replace with your app screenshot
            alt="Indas App Screenshot"
            width={800}
            height={500}
            className="rounded-lg shadow-lg w-auto h-50"
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 sm:p-8 border-t border-black/10 dark:border-white/10 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Indas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}