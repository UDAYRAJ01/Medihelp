'use client'

import Link from 'next/link'
import { Phone, Calendar, MapPin, Clock } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Excellence in Healthcare?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't wait when it comes to your health. Schedule an appointment today and let our expert medical team take care of you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Emergency Contact */}
          <div className="bg-red-600 rounded-2xl p-8 text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
            <p className="text-red-100 mb-6">
              24/7 emergency services available for immediate medical attention and critical care.
            </p>
            <a 
              href="tel:+919839800199"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: +91 98398 00199
            </a>
          </div>

          {/* Appointment Booking */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
            <p className="text-blue-100 mb-6">
              Schedule a consultation with our specialist doctors for personalized healthcare.
            </p>
            <Link 
              href="/contact"
              className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Appointment
            </Link>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="font-semibold mb-2">Visit Us</h4>
            <p className="text-blue-100 text-sm">
              K-117, 22, Sarvodaya Nagar<br />
              Kanpur, Uttar Pradesh – 208005
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h4 className="font-semibold mb-2">Call Us</h4>
            <a href="tel:+919839800199" className="text-blue-100 hover:text-white text-sm">
              +91 98398 00199
            </a>
          </div>

          <div className="text-center">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h4 className="font-semibold mb-2">Open Hours</h4>
            <p className="text-blue-100 text-sm">
              24 Hours • 7 Days a Week<br />
              Always Available for Care
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Your Health is Our Priority</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Trust Medi Help Hospital for comprehensive healthcare with compassion, innovation, and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-medical-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection