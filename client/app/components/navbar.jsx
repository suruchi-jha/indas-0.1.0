"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaUser } from "react-icons/fa"

export default function Navbar({ theme, toggleTheme }) {
  const [user, setUser] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Error parsing user data:", error)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
      }
    }
  }, [])

  const handleLogout = () => {
    // Clear user data and token
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    setUser(null)
    setIsMenuOpen(false)

    // Redirect to home page
    router.push("/")
  }

  return (
    <nav className="w-full flex items-center justify-between p-4 sm:p-6 border-b-2 border-black shadow-lg bg-white">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-3xl underline decoration-blue-500 font-medium font-mono">
          Indas
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-l hover:text-blue-500 transition-colors hover:underline">
          Home
        </Link>
        <Link href="/about" className="text-l hover:text-blue-500 transition-colors hover:underline">
          About
        </Link>
        <Link href="/#features" className="text-l hover:text-blue-500 transition-colors hover:underline">
          Features
        </Link>
        <Link href="/blog" className="text-l hover:text-blue-500 transition-colors hover:underline">
          Blog
        </Link>

        {toggleTheme && (
          <button
            onClick={toggleTheme}
            className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 hover:text-black transition-all shadow-md"
          >
            Toggle Theme
          </button>
        )}

        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 transition-all shadow-md"
            >
              <FaUser />
              <span>Welcome, {user.name.split(" ")[0]}</span>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="rounded-full bg-blue-600 text-white px-4 py-2 hover:bg-blue-500 hover:text-black transition-all shadow-md"
          >
            Join
          </Link>
        )}
      </div>
    </nav>
  )
}

