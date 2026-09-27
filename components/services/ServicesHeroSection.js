'use client'

import { Activity, Stethoscope, Clock, Heart } from 'lucide-react'

const ServicesHeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Medical <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services across multiple specialties, delivering 
            excellence in medical care with advanced technology and compassionate treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Activity className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">15+ Specialties</h3>
            <p className="text-blue-100 text-sm">Complete medical care under one roof</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Stethoscope className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Expert Doctors</h3>
            <p className="text-blue-100 text-sm">Experienced specialists in each field</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">24/7 Emergency</h3>
            <p className="text-blue-100 text-sm">Always available for urgent care</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Heart className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Compassionate Care</h3>
            <p className="text-blue-100 text-sm">Patient-centered treatment approach</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-blue-100 mb-6">
            From routine check-ups to complex procedures, we're here for all your healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </a>
            <a 
              href="tel:+919839800199"
              className="border-2 border-white text-white hover:bg-white hover:text-medical-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +91 98398 00199
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHeroSection