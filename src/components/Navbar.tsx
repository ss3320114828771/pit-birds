'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient bg-[length:200%_200%]"></div>
      
      {/* Main navbar container */}
      <div className="relative backdrop-blur-sm bg-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with 3D effect */}
            <Link href="/" className="group perspective-3d">
              <div className="transform rotate-3d group-hover:rotate-0 transition-all duration-500">
                <h1 className="text-3xl font-bold text-white glowing-text">
                  🐾 Hafiz Sajid
                </h1>
                <p className="text-sm text-yellow-300">Pets & Birds Shop</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/products', label: 'Products' },
                { href: '/contact', label: 'Contact' },
                { href: '/directions', label: 'Directions' },
                { href: '/cart', label: 'Cart' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span className="text-white font-semibold text-lg hover:text-yellow-300 transition-colors">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              
              {/* Admin Button with glow effect */}
              <Link
                href="/admin"
                className="px-6 py-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full text-white font-bold animate-gradient bg-[length:200%_200%] hover:scale-110 transition-transform shadow-lg hover:shadow-2xl"
              >
                Admin
              </Link>
            </div>

            {/* Mobile menu button with animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 flex items-center justify-center group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg animate-pulse"></span>
              <span className="relative flex flex-col space-y-1.5">
                <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden absolute w-full transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="bg-gradient-to-b from-purple-600 to-blue-600 backdrop-blur-lg shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {[
                { href: '/', label: 'Home', emoji: '🏠' },
                { href: '/about', label: 'About', emoji: 'ℹ️' },
                { href: '/products', label: 'Products', emoji: '🐦' },
                { href: '/contact', label: 'Contact', emoji: '📞' },
                { href: '/directions', label: 'Directions', emoji: '🗺️' },
                { href: '/cart', label: 'Cart', emoji: '🛒' },
                { href: '/admin', label: 'Admin', emoji: '👤' },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border-2 border-transparent hover:border-yellow-300 transition-all">
                    <span className="text-2xl mr-3">{item.emoji}</span>
                    <span className="text-white font-bold text-lg">{item.label}</span>
                    <span className="float-right text-yellow-300">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar