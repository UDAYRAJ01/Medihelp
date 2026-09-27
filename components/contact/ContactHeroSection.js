'use client'

import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const ContactHeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-yellow-300">Medi Help Hospital</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for appointments, inquiries, or emergency care. 
            We're here to help with all your healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Phone className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <a href="tel:+919839800199" className="text-blue-100 hover:text-white">
              +91 98398 00199
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MapPin className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-blue-100 text-sm">Sarvodaya Nagar, Kanpur</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Open 24/7</h3>
            <p className="text-blue-100 text-sm">Always Available for Care</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Mail className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <a href="mailto:info@medihelpkanpur.com" className="text-blue-100 hover:text-white text-sm">
              info@medihelpkanpur.com
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-600 rounded-xl p-6 text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Emergency Care</h3>
            <p className="text-red-100 mb-4">24/7 emergency services available</p>
            <a 
              href="tel:+919839800199"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Call Emergency: +91 98398 00199
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
            <p className="text-blue-100 mb-4">Schedule your consultation today</p>
            <a 
              href="#contact-form"
              className="bg-white text-medical-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHeroSection