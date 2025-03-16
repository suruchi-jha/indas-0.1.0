"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }

    // Listen for user state changes
    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleUserChange);
    window.addEventListener("userStateChange", handleUserChange);

    return () => {
      window.removeEventListener("storage", handleUserChange);
      window.removeEventListener("userStateChange", handleUserChange);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    window.dispatchEvent(new Event("userStateChange"));
    router.push("/");
  };

  // Scroll to Features section smoothly
  const scrollToFeatures = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      // If already on home, just scroll
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home, then wait and scroll
      router.push("/");
  
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  return (
    <nav
      className={`w-full flex items-center justify-between p-6 pt-2 sm:pt-2 pb-2 sm:pb-2 sm:p-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <span
          className={`text-3xl underline decoration-blue-500 font-medium font-mono transition-all duration-300 ${
            isScrolled ? "text-black" : "text-black"
          }`}
        >
          Indas
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className={`text-l transition-colors hover:underline ${
            isScrolled ? "text-black hover:text-blue-500" : "text-black hover:text-blue-600"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-l transition-colors hover:underline ${
            isScrolled ? "text-black hover:text-blue-500" : "text-black hover:text-blue-600"
          }`}
        >
          About
        </Link>
        <a
          href="/#features"
          onClick={scrollToFeatures}
          className={`text-l transition-colors hover:underline cursor-pointer ${
            isScrolled ? "text-black hover:text-blue-500" : "text-black hover:text-blue-600"
          }`}
        >
          Features
        </a>
        <Link
          href="/blog"
          className={`text-l transition-colors hover:underline ${
            isScrolled ? "text-black hover:text-blue-500" : "text-black hover:text-blue-600"
          }`}
        >
          Blog
        </Link>

        {/* User Menu or Join Button */}
        {user ? (
          <div className="relative group">
            <button
              className={`rounded-full px-4 py-2 transition-all shadow-md flex items-center gap-2 ${
                isScrolled
                  ? "bg-blue-500 text-white hover:bg-gray-200 hover:text-black"
                  : "bg-blue-500 text-black hover:bg-gray-200"
              }`}
            >
              Welcome, {user.name.split(" ")[0]}
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
              <div className="py-1">
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
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
          </div>
        ) : (
          <Link
            href="/auth/login"
            className={`rounded-full px-4 py-2 transition-all shadow-md ${
              isScrolled
                ? "bg-blue-500 text-white hover:bg-gray-200 hover:text-black"
                : "bg-blue-500 text-black hover:bg-gray-200"
            }`}
          >
            Join The Waitlist
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
