import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG"
                  alt="Osinka Kalaso Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-green-400">Osinka Kalaso</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering Kenyan farmers through sustainable onion cultivation and water access. 
              Join us in creating lasting positive change for the Osinka Kalaso community.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+254722846966" className="text-green-400 hover:text-green-300 transition-colors">
                📞 +254 722 846966
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/water-project" className="text-gray-300 hover:text-green-400 transition-colors">
                  Water Project
                </Link>
              </li>
              <li>
                <Link href="/economics" className="text-gray-300 hover:text-green-400 transition-colors">
                  Economics
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">📞</span>
                <a href="tel:+254722846966" className="text-gray-300 hover:text-green-400 transition-colors">
                  +254 722 846966
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">📍</span>
                <span className="text-gray-300">Osinka Kalaso, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">🌱</span>
                <span className="text-gray-300">Sustainable Farming</span>
              </div>
            </div>
            
            {/* Donate Button */}
            <div className="mt-6">
              <Link 
                href="/donate" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Support Our Project
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Osinka Kalaso. All rights reserved. | Empowering communities through sustainable agriculture.
          </p>
        </div>
      </div>
    </footer>
  )
} 