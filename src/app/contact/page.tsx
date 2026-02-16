'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient bg-[length:200%_200%]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float">
            Contact Us
          </h1>
          <p className="text-xl text-white">We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/50 focus:border-yellow-300 focus:outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/50 focus:border-yellow-300 focus:outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/50 focus:border-yellow-300 focus:outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/50 focus:border-yellow-300 focus:outline-none transition-all resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-xl text-white font-bold text-lg animate-gradient bg-[length:200%_200%] hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Owner Contact Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">👤</span>
                  <div>
                    <p className="text-white/80">Owner</p>
                    <p className="text-white font-bold text-lg">Hafiz Sajid Syed Hussain</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="text-white/80">Phone</p>
                    <a href="tel:03084591993" className="text-white font-bold text-lg hover:text-yellow-300">
                      0308 4591993
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <p className="text-white/80">Email</p>
                    <a href="mailto:sajidsyedhafizsajidsyed@gmail.com" className="text-white font-bold text-lg hover:text-yellow-300 break-all">
                      sajidsyedhafizsajidsyed@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">📍</span>
                  <div>
                    <p className="text-white/80">Address</p>
                    <p className="text-white font-bold text-lg">
                      Village Adlana, Teh Bhawana,<br />
                      Dist Chiniot
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
              <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              
              <div className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-white/80">{item.day}</span>
                    <span className="text-white font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}