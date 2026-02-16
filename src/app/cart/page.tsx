'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'African Grey Parrot', price: 85000, quantity: 1, image: '/n1.jpeg' },
    { id: 2, name: 'Love Birds Pair', price: 8000, quantity: 2, image: '/n3.jpeg' },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 500
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      {/* Hero Section */}
      <div className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-gradient bg-[length:200%_200%]"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float">
            🛒 Shopping Cart
          </h1>
          <p className="text-xl text-white">{cartItems.length} items in your cart</p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-white/80 mb-8">Looks like you haven't added any items yet</p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-300 transition-all">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Item Image */}
                    <div className="relative w-32 h-32 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 p-1 rounded-xl">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src={"/images/${item.image}`}
                            alt={item.name}
                            fill
                            sizes="128px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                          <p className="text-yellow-300 font-bold text-lg">Rs. {item.price.toLocaleString()}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-white/50 hover:text-red-500 transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 mt-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 bg-white/20 rounded-lg text-white font-bold hover:bg-white/30 transition-all"
                        >
                          -
                        </button>
                        <span className="text-white font-bold text-xl">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 bg-white/20 rounded-lg text-white font-bold hover:bg-white/30 transition-all"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-white/80">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between text-white/80">
                    <span>Shipping</span>
                    <span>Rs. {shipping.toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white font-bold text-xl">
                      <span>Total</span>
                      <span className="text-yellow-300">Rs. {total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white font-bold text-lg hover:scale-105 transition-transform">
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  className="block text-center mt-4 text-white/70 hover:text-white transition-colors"
                >
                  Continue Shopping →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}