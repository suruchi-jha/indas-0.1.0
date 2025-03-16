
"use client"

import Link from "next/link"
import { FaRoad, FaMapMarkerAlt, FaBullhorn, FaCloudSun, FaHandsHelping, FaExclamationTriangle } from "react-icons/fa"
import { motion } from "framer-motion"


// Features Component
const Features = () => {
  const features = [
    {
      icon: <FaRoad />,

      title: "Road Block Alert",
      desc: "Get real-time alerts about roadblocks and alternative routes during emergencies.",
      link: "/features/road-block-alert",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Nearby Evac Point",
      desc: "Locate the nearest evacuation points quickly and safely.",
      link: "/features/nearby-evac-point",
    },
    {
      icon: <FaBullhorn />,
      title: "Emergency Broadcast",
      desc: "Stay informed with real-time emergency broadcasts and updates.",
      link: "/features/emergency-broadcast",
    },
    {
      icon: <FaCloudSun />,
      title: "Weather Alerts",
      desc: "Receive real-time weather updates to stay prepared for natural disasters.",
      link: "/features/weather-alerts",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "SOS Button",
      desc: "One-tap emergency SOS alert to notify authorities instantly.",
      link: "/features/sos",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Help",
      desc: "Find or offer help to those in need during emergencies.",
      link: "/features/community-help",
    },
  ]

  return (
    <section id="features" className="w-full py-12 sm:py-20">

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-medium underline decoration-blue-500 text-center font-mono mb-8">
          Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Link key={i} href={feature.link} className="block">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500 transform hover:-translate-y-2 transition-all flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Feature Icon */}
                <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold">{feature.title}</h3>

                {/* Feature Description */}
                <p className="text-gray-600 mb-4">{feature.desc}</p>

                {/* Learn More Link (if applicable) */}
              </motion.div>
            </Link>

          ))}
        </div>
      </div>
    </section>

  )
}

export default Features

