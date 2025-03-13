'use client';

import Link from 'next/link';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 sm:p-6 border-b-2 border-black shadow-lg bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <span className="text-3xl underline decoration-blue-500 font-medium font-mono">
          Indas
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {['Home', 'About', 'Features', 'Blog'].map((item, i) => (
          <Link
            key={i}
            href={`/${item.toLowerCase()}`}
            className="text-l hover:text-blue-500 transition-colors hover:underline"
          >
            {item}
          </Link>
        ))}

        {/* Join Button */}
        <Link
          href="/auth/login"
          className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 hover:text-black transition-all shadow-md"
        >
          Join
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;