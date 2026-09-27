'use client'

import Link from 'next/link'
import { Award, Users, Heart, ArrowRight } from 'lucide-react'

const HomeAboutSection = () => {
  const highlights = [
    {
      icon: Heart,
      title: "5+ Years",
      description: "Of Excellence in Healthcare"
    },
    {
      icon: Users,
      title: "15+ Specialties",
      description: "Comprehensive Medical Care"
    },
    {
      icon: Award,
      title: "24/7 Care",
      description: "Emergency Services Available"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="text-medical-600 font-semibold text-sm uppercase tracking-wider">About Our Hospital</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Committed to <span className="text-gradient">Excellence</span> in Healthcare
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2019 by leading medical specialists, Medi Help Hospital has rapidly emerged 
              as one of the most trusted healthcare institutions in Kanpur, Uttar Pradesh.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine advanced medical technology, modern infrastructure, and experienced 
              specialists to provide a complete spectrum of healthcare services. From preventive 
              care to complex surgeries, our hospital stands as a symbol of trust, care, and clinical excellence.
            </p>

            <Link 
              href="/about"
              className="inline-flex items-center btn-primary group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Highlights */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-medical-100 p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-medical-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{highlight.title}</h4>
                      <p className="text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  <strong className="text-medical-600">Our Mission:</strong> To deliver world-class healthcare 
                  with compassion, innovation, and patient-centric values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutSection