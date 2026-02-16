import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative mt-auto">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-gradient bg-[length:200%_200%]"></div>
      
      <div className="relative backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Owner Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-300 transition-all transform hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4 glowing-text">👤 Owner Information</h3>
                <div className="space-y-3 text-white">
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    <span className="font-semibold">Hafiz Sajid Syed Hussain</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    <a href="tel:03084591993" className="hover:text-yellow-300 transition-colors">
                      0308 4591993
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:sajidsyedhafizsajidsyed@gmail.com" className="hover:text-yellow-300 transition-colors break-all">
                      sajidsyedhafizsajidsyed@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span>Village Adlana, Teh Bhawana, Dist Chiniot</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-300 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">🔗 Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/about', label: 'About Us' },
                    { href: '/products', label: 'Products' },
                    { href: '/contact', label: 'Contact' },
                    { href: '/directions', label: 'Directions' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white hover:text-yellow-300 hover:translate-x-2 inline-block transition-all">
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20 hover:border-yellow-300 transition-all">
                <h3 className="text-xl font-bold text-white mb-4">🕒 Business Hours</h3>
                <ul className="space-y-2 text-white">
                  <li className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span className="font-semibold">9AM - 8PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10AM - 6PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white">
              © 2024 Hafiz Sajid Pets & Birds Shop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer