'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProductsPage() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})
  
  const products = [
    { id: 1, name: 'African Grey Parrot', price: 'Rs. 85,000', image: 'n1.jpeg', category: 'Birds' },
    { id: 2, name: 'Persian Cat', price: 'Rs. 45,000', image: 'n2.jpeg', category: 'Cats' },
    { id: 3, name: 'Love Birds Pair', price: 'Rs. 8,000', image: '/n3.jpeg', category: 'Birds' },
    { id: 4, name: 'German Shepherd', price: 'Rs. 65,000', image: '/n4.jpeg', category: 'Dogs' },
    { id: 5, name: 'Cockatiel', price: 'Rs. 12,000', image: '/n5.jpeg', category: 'Birds' },
    { id: 6, name: 'Rabbit (Holland Lop)', price: 'Rs. 7,500', image: '/n6.jpeg', category: 'Small Pets' },
    { id: 7, name: 'Macaw Parrot', price: 'Rs. 150,000', image: '/n1.jpeg', category: 'Birds' },
    { id: 8, name: 'Golden Retriever', price: 'Rs. 55,000', image: '/n2.jpeg', category: 'Dogs' },
  ]

  const handleImageError = (productId: number) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      {/* Header with animation */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%]"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float">
            🐾 Our Products
          </h1>
          <p className="text-xl text-white">Quality pets and birds for loving homes</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['All', 'Birds', 'Cats', 'Dogs', 'Small Pets'].map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white font-semibold border-2 border-white/20 hover:border-yellow-300 hover:bg-white/20 transition-all transform hover:scale-110"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group perspective-3d"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-white/20 transform rotate-3d group-hover:rotate-0 transition-all duration-500 hover:border-yellow-300">
                {/* Product Image - FIXED */}
                <div className="relative h-64 w-full overflow-hidden">
                  {/* Multi-color border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%]"></div>
                  
                  {/* Image container */}
                  <div className="absolute inset-1 bg-gray-900 overflow-hidden rounded-t-2xl">
                    {!imageErrors[product.id] ? (
                      <img
                        src={`/n2/${product.image}`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={() => handleImageError(product.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-4xl mb-2 block">🐾</span>
                          <p className="text-white text-sm">{product.category}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold text-white shadow-lg">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-yellow-300 mb-4">{product.price}</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-all">
                      🔍
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}