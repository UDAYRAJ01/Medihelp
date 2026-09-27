'use client'

import Link from 'next/link'
import { ArrowLeft, Calendar, Phone, Star, CheckCircle } from 'lucide-react'

const ServiceDetailHero = ({ service }) => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-blue-200 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>→</span>
          <Link href="/services" className="hover:text-white">Services</Link>
          <span>→</span>
          <span className="text-white">{service.title}</span>
        </div>

        {/* Back Button */}
        <Link 
          href="/services"
          className="inline-flex items-center text-blue-200 hover:text-white font-medium mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="bg-yellow-300 text-medical-800 px-3 py-1 rounded-full text-sm font-bold">
                SPECIALTY SERVICE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {service.title}
            </h1>

            <h2 className="text-xl md:text-2xl text-yellow-300 font-semibold mb-6">
              {service.subtitle}
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="/contact"
                className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </a>
              <a 
                href="tel:+919839800199"
                className="border-2 border-white text-white hover:bg-white hover:text-medical-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-300 mb-2" />
                <h4 className="font-semibold mb-1">Expert Care</h4>
                <p className="text-blue-100 text-sm">Specialized medical expertise</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-300 mb-2" />
                <h4 className="font-semibold mb-1">Advanced Technology</h4>
                <p className="text-blue-100 text-sm">State-of-the-art equipment</p>
              </div>
            </div>
          </div>

          {/* Doctor Info & Stats */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Service Overview</h3>
              
              {/* Doctor */}
              <div className="mb-6">
                <h4 className="font-semibold text-yellow-300 mb-2">Lead Specialist</h4>
                <div className="flex items-center">
                  <div className="bg-medical-200 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    <span className="text-medical-800 font-bold">
                      {service.doctor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{service.doctor.name}</p>
                    <p className="text-blue-100 text-sm">{service.doctor.qualification}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">{service.doctor.experience}</div>
                  <p className="text-blue-100 text-sm">Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">500+</div>
                  <p className="text-blue-100 text-sm">Procedures Done</p>
                </div>
              </div>

              {/* Service Features */}
              <div>
                <h4 className="font-semibold text-yellow-300 mb-3">What We Offer</h4>
                <div className="space-y-2">
                  {service.services.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-300 mr-3 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailHero