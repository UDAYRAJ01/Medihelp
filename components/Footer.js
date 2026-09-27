'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, MapPin, Phone, Clock, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Doctors', href: '#doctors' },
    { name: 'Medical Specialties', href: '#specialties' },
    { name: 'Hospital Facilities', href: '#facilities' },
    { name: 'Health Blog', href: '/blog' },
    { name: 'Employee login', href: 'https://themedihelp.dmaarogya.com/aarogya/' },
  ]

  const services = [
    { name: 'Emergency Care', href: '#contact' },
    { name: 'Gastroenterology', href: '#specialties' },
    { name: 'ENT Services', href: '#specialties' },
    { name: 'Telemedicine', href: '#contact' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className=" p-2 rounded-lg">
                <Image
                                        src="/images/medihelp-hospital-logo.png"
                                        alt="Medihelp"
                                        width={50}
                                        height={50}
                                        className=" "
                                      />
              </div>
              <div>
                <h3 className="text-xl font-bold">Medi Help Hospital</h3>
                <p className="text-sm text-gray-400">Excellence in Healthcare</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2019, we are committed to delivering world-class healthcare with compassion, 
              innovation, and patient-centric values in Kanpur, Uttar Pradesh.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-medical-600 p-2 rounded-lg transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-600 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-600 p-2 rounded-lg transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-medical-600 p-2 rounded-lg transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-medical-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-medical-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    K-117, 22, Sarvodaya Nagar,<br />
                    Kanpur, Uttar Pradesh – 208005
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-400 flex-shrink-0" />
                <a 
                  href="tel:+919839800199" 
                  className="text-gray-300 hover:text-medical-400 transition-colors duration-300"
                >
                  +91 98398 00199
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-medical-400 flex-shrink-0" />
                <p className="text-gray-300">Open 24 Hours</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-400 flex-shrink-0" />
                <a 
                  href="mailto:info@medihelpkanpur.com" 
                  className="text-gray-300 hover:text-medical-400 transition-colors duration-300"
                >
                  info@medihelpkanpur.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Medi+Help+Hospital+Sarvodaya+Nagar+Kanpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-medical-400 hover:text-medical-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1" /> Get Google Maps Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local Areas Served Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-400">
          <p className="mb-2 font-semibold text-gray-300">Areas Served in & around Kanpur:</p>
          <p className="leading-relaxed">
            Sarvodaya Nagar • Swaroop Nagar • Kakadeo • Kalyanpur • Civil Lines • Govind Nagar • Kidwai Nagar • Lajpat Nagar • Gumti No. 5 • Rawatpur • Lal Bangla • Shyam Nagar • Panki • Jajmau • Unnao • Shuklaganj • Uttar Pradesh
          </p>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-2 md:mb-0">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">24/7 Emergency Services Available</span>
            </div>
            <a 
              href="tel:+919839800199" 
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Call Emergency: +91 98398 00199
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Medi Help Hospital. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link href="#" className="text-gray-400 hover:text-medical-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-medical-400 text-sm transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-medical-400 text-sm transition-colors duration-300">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer