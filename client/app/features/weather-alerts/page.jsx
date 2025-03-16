"use client"

import { useState, useEffect } from "react"
import { FaSearch, FaCloudSun, FaTemperatureHigh, FaWind, FaTint } from "react-icons/fa"
import Navbar from "../../components/navbar"

export default function WeatherAlerts() {
  const [location, setLocation] = useState("Delhi")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Using a free weather API that allows client-side requests
  const fetchWeatherData = async (loc) => {
    setLoading(true)
    setError("")

    try {
      // Using OpenWeatherMap API with direct client request
      // Your API key was missing a digit at the end
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=278c6597b7de721c204e01d357076835`,
      )

      if (!response.ok) {
        throw Error(`Failed to fetch weather data: ${response.statusText}`)
      }

      const data = await response.json()

      const formattedData = {
        location: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        timestamp: new Date().toISOString(),
      }

      setWeatherData(formattedData)
    } catch (error) {
      console.error("Error fetching weather data:", error)
      setError("Failed to fetch weather data. Please try again or check the city name.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeatherData(location)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.trim()) {
      fetchWeatherData(location)
    }
  }

  // Function to get weather icon based on description
  const getWeatherIcon = (description) => {
    if (description.includes("rain")) return <FaCloudSun className="text-gray-500" />
    if (description.includes("cloud")) return <FaCloudSun className="text-gray-400" />
    if (description.includes("clear")) return <FaCloudSun className="text-yellow-500" />
    return <FaCloudSun className="text-blue-500" />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-100 to-gray-300">
      {/* Navigation Bar */}
      <Navbar />

      {/* Weather Alerts Content */}
      <div className="flex-1 container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Weather Alerts</h1>

        {/* Search Form */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter city name"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Weather Data */}
        {!loading && weatherData && (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {weatherData.location}, {weatherData.country}
                </h2>
                <div className="text-5xl">{getWeatherIcon(weatherData.description)}</div>
              </div>

              <div className="mb-4">
                <p className="text-gray-500 capitalize">{weatherData.description}</p>
                <div className="flex items-center">
                  <FaTemperatureHigh className="text-red-500 mr-2" />
                  <span className="text-4xl font-bold">{Math.round(weatherData.temperature)}°C</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center">
                    <FaTint className="text-blue-500 mr-2" />
                    <span className="text-gray-700">Humidity</span>
                  </div>
                  <p className="text-xl font-semibold">{weatherData.humidity}%</p>
                </div>

                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex items-center">
                    <FaWind className="text-blue-500 mr-2" />
                    <span className="text-gray-700">Wind Speed</span>
                  </div>
                  <p className="text-xl font-semibold">{weatherData.windSpeed} m/s</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
                <h3 className="font-bold text-yellow-800 mb-2">Weather Alert</h3>
                <p className="text-yellow-800">
                  {weatherData.temperature > 35
                    ? "Extreme heat warning! Stay hydrated and avoid direct sun exposure."
                    : weatherData.temperature < 5
                      ? "Cold temperature alert! Bundle up and stay warm."
                      : weatherData.description.includes("rain")
                        ? "Rain expected. Carry an umbrella and be cautious of slippery roads."
                        : "No severe weather alerts at this time."}
                </p>
              </div>
            </div>

            <div className="bg-gray-100 px-6 py-4">
              <p className="text-gray-600 text-sm">Last updated: {new Date(weatherData.timestamp).toLocaleString()}</p>
            </div>
          </div>
        )}
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

