"use client"
import Link from "next/link"
import Navbar from "./components/navbar"
import Features from "./components/feature"
import About from "./components/about"
import Footer from "./components/footer"
import Hero from "./components/hero"


export default function Home() {
  

  return (
      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-white via-gray-100 to-gray-300">
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Live Alert Ticker (Shorter & Moving Text) */}
        <About />

        {/* Features Section */}
        <Features />

        {/* Footer */}
        <Footer />
      </div>
  )
}

