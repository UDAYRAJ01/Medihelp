'use client'

import { Zap, TestTube, Bed, Clock } from 'lucide-react'

const FacilitiesHeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            World-Class <span className="text-yellow-300">Medical Facilities</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art medical infrastructure and advanced technology to deliver 
            exceptional healthcare services with patient comfort and safety as our priority.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Zap className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Advanced Equipment</h3>
            <p className="text-blue-100 text-sm">Latest medical technology and diagnostic tools</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <TestTube className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Full Laboratory</h3>
            <p className="text-blue-100 text-sm">Comprehensive testing and diagnostic services</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Bed className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Modern Rooms</h3>
            <p className="text-blue-100 text-sm">Comfortable patient rooms with modern amenities</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Clock className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
            <p className="text-blue-100 text-sm">Round-the-clock facility operations and support</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-blue-100 mb-6">
            Experience healthcare in a modern, comfortable environment designed for your well-being
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#facilities"
              className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Facilities
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-medical-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilitiesHeroSection