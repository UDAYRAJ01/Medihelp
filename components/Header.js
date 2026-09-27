'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Heart } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: 'https://themedihelp.dmaarogya.com/aarogiPlus/' },
  ]

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className=" p-2 rounded-lg">
              <Image
                        src="/images/medihelp-hospital-logo.png"
                        alt="Medihelp"
                        width={50}
                        height={50}
                        className=" "
                      />
            </div>
            <div className="block">
              <p className="text-xl font-bold text-medical-800">Medi Help Hospital</p>
              <p className="text-xs hidden md:block text-gray-600">Excellence in Healthcare</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-medical-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Emergency Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919839800199"
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">Emergency</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-medical-600 hover:bg-gray-50 font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <a
                  href="tel:+919839800199"
                  className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors duration-300 w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">Emergency Call</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header