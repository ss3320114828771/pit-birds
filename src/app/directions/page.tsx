import Link from 'next/link'

export default function DirectionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900">
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient bg-[length:200%_200%]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-float">
            Directions
          </h1>
          <p className="text-xl text-white">Find your way to our shop</p>
        </div>
      </div>

      {/* Map and Directions */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
            <h2 className="text-3xl font-bold text-white mb-6">📍 Our Location</h2>
            
            <div className="relative h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden">
              {/* This is a placeholder for actual map - in real project you'd embed Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📍</div>
                  <p className="text-white text-xl">Village Adlana</p>
                  <p className="text-white/80">Teh Bhawana, Dist Chiniot</p>
                </div>
              </div>
              
              {/* Grid overlay for map effect */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          {/* Direction Details */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Complete Address</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Hafiz Sajid Pets & Birds Shop<br />
                Village Adlana, Tehsil Bhawana<br />
                District Chiniot, Punjab<br />
                Pakistan
              </p>
            </div>

            {/* How to Reach */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:border-yellow-300 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">How to Reach</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: '🚗',
                    title: 'By Car',
                    desc: 'Take the main Bhawana-Chiniot road. Look for Adlana village signboard. We are located near the main chowk.'
                  },
                  {
                    icon: '🚌',
                    title: 'By Bus',
                    desc: 'Regular buses from Chiniot and Bhawana to Adlana. Get off at Adlana Chowk, we are 2 minutes walk.'
                  },
                  {
                    icon: '🚂',
                    title: 'By Train',
                    desc: 'Nearest railway station is Chiniot. From there, take a local taxi or bus to Adlana.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Directions */}
            <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-gradient bg-[length:200%_200%] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help Finding Us?</h3>
              <p className="text-white/90 mb-6">Call us for detailed directions</p>
              <a 
                href="tel:03084591993"
                className="inline-block px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
              >
                📞 Call Now: 0308 4591993
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}