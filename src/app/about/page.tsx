import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%]"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float">
            About Us
          </h1>
          <p className="text-2xl text-white">Your Trusted Pet Partner Since 2010</p>
        </div>
      </div>

      {/* Owner Information */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Owner Image */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden group perspective-3d">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%] p-2 rounded-3xl">
              <div className="relative w-full h-full rounded-3xl overflow-hidden transform rotate-3d group-hover:rotate-0 transition-all duration-700">
                <Image
                  src="/n1.jpeg"
                  alt="Hafiz Sajid Syed"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Owner Details */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
              <h2 className="text-4xl font-bold text-white mb-6 glowing-text">
                👤 Hafiz Sajid Syed Hussain
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white text-lg">
                  <span className="text-3xl">📞</span>
                  <a href="tel:03084591993" className="hover:text-yellow-300 transition-colors">
                    0308 4591993
                  </a>
                </div>
                
                <div className="flex items-center gap-4 text-white text-lg">
                  <span className="text-3xl">✉️</span>
                  <a href="mailto:sajidsyedhafizsajidsyed@gmail.com" className="hover:text-yellow-300 transition-colors break-all">
                    sajidsyedhafizsajidsyed@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-4 text-white text-lg">
                  <span className="text-3xl">📍</span>
                  <span>Village Adlana, Teh Bhawana, Dist Chiniot</span>
                </div>
              </div>
            </div>

            {/* Story Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-white/90 leading-relaxed">
                With over a decade of experience in pet care and breeding, Hafiz Sajid Syed Hussain has established 
                one of the most trusted pet and bird shops in the region. Starting from a small passion for birds, 
                we've grown into a comprehensive pet store serving hundreds of happy customers and their beloved pets.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: '10+', label: 'Years Experience', icon: '⭐' },
            { number: '1000+', label: 'Happy Customers', icon: '😊' },
            { number: '50+', label: 'Pet Varieties', icon: '🐕' },
            { number: '24/7', label: 'Customer Support', icon: '📞' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border-2 border-white/20 hover:border-yellow-300 transition-all transform hover:scale-105">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}