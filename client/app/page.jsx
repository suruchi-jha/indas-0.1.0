"use client"
import Link from "next/link"
import { useEffect, useState, createContext, useRef } from "react"
import {
  FaRoad,
  FaMapMarkerAlt,
  FaBullhorn,
  FaCloudSun,
  FaHandsHelping,
  FaExclamationTriangle,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"
import { motion } from "framer-motion"
import Navbar from "./components/navbar"
import Features from "./components/feature"
import About from "./components/about"
import Footer from "./components/footer"
import Hero from "./components/hero"

// Create a context for theme
const ThemeContext = createContext()

export default function Home() {
  const [text, setText] = useState("")
  const fullText =
    "Indas is your ultimate guide during emergencies. Detect earthquakes, find safe exits, and stay informed with real-time alerts."
  const [index, setIndex] = useState(0)
  const [theme, setTheme] = useState("light")
  const featuresRef = useRef(null)

  useEffect(() => {
    // Check if URL has #features hash and scroll to features section
    if (window.location.hash === "#features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index])
        setIndex((prevIndex) => prevIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const scrollToFeatures = () => {
    featuresRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
    </ThemeContext.Provider>
  )
}

