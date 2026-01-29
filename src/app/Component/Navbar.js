"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Handler for Contact click
  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false); // close mobile menu if open

    if (window.location.pathname !== "/") {
      // If not on Home page, navigate to Home + contact
      router.push("/#contact");
    } else {
      // Already on Home page, scroll smoothly
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Kids Learning Logo"
          className="h-15 w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li><a href="/" className="hover:text-purple-600">Home</a></li>
          <li><a href="/About" className="hover:text-purple-600">About</a></li>
          <li><a href="/Collection" className="hover:text-purple-600">Collection</a></li>
          <li><a href="/Gallery" className="hover:text-purple-600">Gallery</a></li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-600"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white text-gray-700 shadow-md flex flex-col items-center gap-4 py-4 z-50">
          <li><a href="/" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/About" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/Collection" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Collection</a></li>
          <li><a href="/Gallery" className="hover:text-purple-600" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-600"
              onClick={handleContactClick}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
