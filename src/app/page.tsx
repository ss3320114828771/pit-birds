'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const images = ['/n1.jpeg', '/n2.jpeg', '/n3.jpeg', '/n4.jpeg', '/n5.jpeg', '/n6.jpeg']
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})
  const [isClient, setIsClient] = useState(false)

  // Fix hydration error - only render after component mounts on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  // Don't render floating particles on server
  if (!isClient) {
    return (
      <div className="min-h-screen">
        {/* Hero Section without floating particles */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 via-pink-500 via-blue-500 to-green-500 animate-gradient bg-[length:400%_400%]"></div>
          
          <div className="relative z-10 text-center px-4 perspective-3d">
            <div className="transform rotate-3d hover:rotate-0 transition-all duration-700">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse-slow">
                🐾 Hafiz Sajid
              </h1>
              <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border-4 border-white/30 animate-float">
                <p className="text-2xl md:text-4xl font-bold text-white">
                  Pets & Birds Shop
                </p>
              </div>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
                Your trusted destination for quality pets and birds
              </p>
              <Link
                href="/products"
                className="inline-block px-10 py-5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full text-white font-bold text-xl animate-gradient bg-[length:200%_200%] hover:scale-110 transition-transform shadow-2xl"
              >
                Explore Our Products →
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Multi-color Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 via-pink-500 via-blue-500 to-green-500 animate-gradient bg-[length:400%_400%]"></div>
        
        {/* Floating particles effect - Now only rendered on client */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => {
            // Fixed values to prevent hydration mismatch
            const left = (i * 5) % 100
            const top = (i * 7) % 100
            const delay = (i * 0.3) % 5
            const duration = 4 + (i % 3)
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-float"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`
                }}
              />
            )
          })}
        </div>

        {/* Hero Content with 3D Animation */}
        <div className="relative z-10 text-center px-4 perspective-3d">
          <div className="transform rotate-3d hover:rotate-0 transition-all duration-700">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-pulse-slow">
              🐾 Hafiz Sajid
            </h1>
            <div className="inline-block bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 mb-8 border-4 border-white/30 animate-float">
              <p className="text-2xl md:text-4xl font-bold text-white">
                Pets & Birds Shop
              </p>
            </div>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
              Your trusted destination for quality pets and birds
            </p>
            <Link
              href="/products"
              className="inline-block px-10 py-5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full text-white font-bold text-xl animate-gradient bg-[length:200%_200%] hover:scale-110 transition-transform shadow-2xl"
            >
              Explore Our Products →
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains same... */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-white mb-4 glowing-text">
            Our Gallery
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Beautiful pets and birds waiting for you
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div
                key={img}
                className="group perspective-3d"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden transform rotate-3d group-hover:rotate-0 transition-all duration-500 border-4 border-transparent hover:border-yellow-400">
                  <div className="relative w-full h-full">
                    {!imageErrors[img] ? (
                      <img
                        src={`/images/${img}`}
                        alt={`Pet ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={() => handleImageError(img)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-6xl mb-2 block">🐾</span>
                          <p className="text-white">Pet {index + 1}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-lg font-bold">Beautiful Pet</p>
                        <p className="text-yellow-300">Click to view details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-t from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-white mb-4 glowing-text">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '🐕', title: 'Healthy Pets', desc: 'All pets are vaccinated and health-checked' },
              { icon: '🕊️', title: 'Quality Birds', desc: 'Imported and local premium birds' },
              { icon: '🏆', title: '10+ Years', desc: 'Of experience in pet care' },
              { icon: '💝', title: 'Loving Care', desc: 'Each pet gets individual attention' },
              { icon: '🚚', title: 'Free Delivery', desc: 'Within city limits' },
              { icon: '🔧', title: 'After Support', desc: '24/7 pet care guidance' },
            ].map((feature, index) => (
              <div
                key={index}
                className="group perspective-3d"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border-2 border-white/20 transform rotate-3d group-hover:rotate-0 transition-all duration-500 hover:bg-white/20">
                  <div className="text-6xl mb-4 animate-float">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Find Your New Friend?
          </h2>
          <p className="text-xl text-white mb-12">
            Visit our shop today or contact us for more information
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-black transition-all transform hover:scale-110"
            >
              Contact Us
            </Link>
            <Link
              href="/directions"
              className="px-8 py-4 bg-transparent border-4 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-110"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}