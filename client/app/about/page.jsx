"use client"

import Link from "next/link"
import { FaInfoCircle, FaTools } from "react-icons/fa"
import Navbar from "../components/navbar"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-100 to-gray-300">
      {/* Navigation Bar */}
      <Navbar />

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

