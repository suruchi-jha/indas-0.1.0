"use client"

import { useState } from "react"
import { FaPhone, FaAmbulance, FaFireExtinguisher, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa"
import Navbar from "../../components/navbar"

export default function SOS() {
  const [calling, setCalling] = useState(false)
  const [callingService, setCallingService] = useState("")

  const emergencyServices = [
    { id: "police", name: "Police", number: "100", icon: <FaShieldAlt className="text-3xl" />, color: "bg-blue-600" },
    {
      id: "ambulance",
      name: "Ambulance",
      number: "108",
      icon: <FaAmbulance className="text-3xl" />,
      color: "bg-red-600",
    },
    {
      id: "fire",
      name: "Fire Department",
      number: "101",
      icon: <FaFireExtinguisher className="text-3xl" />,
      color: "bg-orange-600",
    },
    {
      id: "ndrf",
      name: "NDRF",
      number: "011-24363260",
      icon: <FaExclamationTriangle className="text-3xl" />,
      color: "bg-green-600",
    },
    {
      id: "disaster",
      name: "Disaster Management",
      number: "1070",
      icon: <FaExclamationTriangle className="text-3xl" />,
      color: "bg-purple-600",
    },
  ]

  const handleEmergencyCall = (service) => {
    setCalling(true)
    setCallingService(service.name)

    // Simulate a call (in a real app, this would use the device's calling capabilities)
    setTimeout(() => {
      setCalling(false)
      setCallingService("")
      alert(`This would call ${service.name} at ${service.number} in a real application.`)
    }, 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-100 to-gray-300">
      {/* Navigation Bar */}
      <Navbar />

      {/* SOS Content */}
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Emergency SOS</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          In case of emergency, tap on any of the buttons below to quickly contact the appropriate emergency service.
        </p>

        {/* Emergency Calling Modal */}
        {calling && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <div className="text-center">
                <div className="animate-pulse mb-4">
                  <FaPhone className="text-4xl text-red-600 mx-auto" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Calling {callingService}</h2>
                <p className="text-gray-600 mb-4">Please wait while we connect you...</p>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mx-auto"></div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {emergencyServices.map((service) => (
            <button
              key={service.id}
              onClick={() => handleEmergencyCall(service)}
              className={`${service.color} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex flex-col items-center`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="text-lg font-mono">{service.number}</p>
            </button>
          ))}
        </div>

        {/* Emergency Instructions */}
        <div className="mt-12 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Emergency Instructions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-100 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Stay Calm</h3>
              <p>
                Take deep breaths and try to remain calm. This will help you communicate clearly with emergency
                services.
              </p>
            </div>

            <div className="p-4 bg-green-100 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Share Your Location</h3>
              <p>Be prepared to share your exact location or use the app's location sharing feature.</p>
            </div>

            <div className="p-4 bg-yellow-100 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">Follow Instructions</h3>
              <p>Listen carefully to the emergency operator and follow their instructions precisely.</p>
            </div>
          </div>
        </div>
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

