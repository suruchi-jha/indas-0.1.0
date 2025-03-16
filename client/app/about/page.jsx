"use client"

import Link from "next/link"
import { FaInfoCircle, FaTools } from "react-icons/fa"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-100 to-gray-300">
      {/* Navigation Bar */}
      <nav className="w-full flex items-center justify-between p-4 sm:p-6 border-b-2 border-black shadow-lg bg-white">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-3xl underline decoration-blue-500 font-medium font-mono">
            Indas
          </Link>
        </div>
        <div className="flex items-center gap-6">
          {["Home", "About", "Features", "Blog"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : item === "Features" ? "/#features" : `/${item.toLowerCase()}`}
              className="text-l hover:text-blue-500 transition-colors hover:underline"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 hover:text-black transition-all shadow-md"
          >
            Join
          </Link>
        </div>
      </nav>

      {/* Coming Soon Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-9xl text-blue-500 mb-6">
          <FaInfoCircle />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">About Indas</h1>
        <div className="flex items-center gap-2 text-2xl text-gray-600 mb-8">
          <FaTools />
          <span>Coming Soon</span>
        </div>
        <p className="text-center text-gray-600 max-w-2xl mb-8">
          We're working on a comprehensive About page that will tell you more about our mission, team, and the story
          behind Indas. Check back soon to learn how we're working to make emergency response more accessible and
          effective.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="w-full p-6 border-t border-black/10 bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Indas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

