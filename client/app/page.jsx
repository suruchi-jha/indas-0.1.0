'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, createContext, useContext } from "react";
import { FaRoad, FaMapMarkerAlt, FaBullhorn, FaCloudSun, FaHandsHelping, FaExclamationTriangle, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

// Create a context for theme
const ThemeContext = createContext();

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Indas is your ultimate guide during emergencies. Detect earthquakes, find safe exits, and stay informed with real-time alerts.";
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen flex flex-col font-sans ${theme === "light" ? "bg-gradient-to-br from-white via-gray-100 to-gray-300" : "bg-gradient-to-br from-gray-800 via-gray-900 to-black"}`}>
        {/* Navigation Bar */}
        <nav className="w-full flex items-center justify-between p-4 sm:p-6 border-b-2 border-black shadow-lg bg-white">
          <div className="flex items-center gap-2">
            <span className="text-3xl underline decoration-blue-500 font-medium font-mono">Indas</span>
          </div>
          <div className="flex items-center gap-6">
            {["Home", "About", "Features", "Blog"].map((item, i) => (
              <Link key={i} href={`/${item.toLowerCase()}`} className="text-l hover:text-blue-500 transition-colors hover:underline">
                {item}
              </Link>
            ))}
            <button onClick={toggleTheme} className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 hover:text-black transition-all shadow-md">
              Toggle Theme
            </button>
            <Link href="/join" className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 hover:text-black transition-all shadow-md">
              Join
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center p-8 sm:p-20 gap-8">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Navigate Safely with <span className="text-blue-600">Indas</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            <span className="inline-block">{text}</span>
            <span className="ml-1 inline-block h-6 w-1 bg-black animate-blink" />
          </p>
          <div className="flex gap-4">
            <Link href="/download" className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-all shadow-md">
              Download Now
            </Link>
            <Link href="/features" className="rounded-full border border-black px-6 py-3 hover:bg-gray-200 transition-all">
              Learn More
            </Link>
          </div>
        </main>

        {/* Live Alert Ticker (Shorter & Moving Text) */}
        <section className="relative flex justify-center">
          <div className="bg-red-600 text-white py-1.5 px-6 text-sm font-medium rounded-md shadow-md opacity-90 w-[60%] overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              🚨 <strong>LIVE ALERT:</strong> Earthquake detected in Delhi. Stay safe! 🚨
            </div>
          </div>

          {/* CSS for the scrolling effect */}
          <style jsx>{`
            @keyframes marquee {
              from { transform: translateX(100%); }
              to { transform: translateX(-100%); }
            }
            .animate-marquee {
              display: inline-block;
              white-space: nowrap;
              animation: marquee 8s linear infinite;
            }
          `}</style>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-medium underline decoration-blue-500 text-center font-mono mb-8">
              Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[{icon: <FaRoad />, title: "Road Block Alert", desc: "Get real-time alerts about roadblocks and alternative routes during emergencies."},
                {icon: <FaMapMarkerAlt />, title: "Nearby Evac Point", desc: "Locate the nearest evacuation points quickly and safely."},
                {icon: <FaBullhorn />, title: "Emergency Broadcast", desc: "Stay informed with real-time emergency broadcasts and updates."},
                {icon: <FaCloudSun />, title: "Weather Alerts", desc: "Receive real-time weather updates to stay prepared for natural disasters."},
                {icon: <FaExclamationTriangle />, title: "SOS Button", desc: "One-tap emergency SOS alert to notify authorities instantly."},
                {icon: <FaHandsHelping />, title: "Community Help", desc: "Find or offer help to those in need during emergencies."}
              ].map((feature, i) => (
                <motion.div key={i} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full p-6 sm:p-8 border-t border-black/10 bg-gray-800 text-white">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Indas. All rights reserved.</p>
            <div className="flex gap-4 text-lg">
              <FaTwitter className="hover:text-blue-400 transition-all cursor-pointer" />
              <FaFacebook className="hover:text-blue-600 transition-all cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 transition-all cursor-pointer" />
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}