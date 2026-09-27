'use client'

import Link from 'next/link'
import { Activity, Stethoscope, Heart, ArrowRight, Star } from 'lucide-react'

const RelatedServicesSection = ({ currentService }) => {
  const allServices = [
    {
      slug: 'gastroenterology',
      title: 'Gastroenterology',
      description: 'Advanced endoscopy, ERCP, and comprehensive digestive health care',
      icon: Activity,
      doctor: 'Dr. Vikas Sengar',
      features: ['Advanced Endoscopy', 'ERCP', 'Liver Care', 'Digestive Health']
    },
    {
      slug: 'ent',
      title: 'ENT Services',
      description: 'Complete ear, nose, and throat care including specialized treatments',
      icon: Stethoscope,
      doctor: 'Dr. Sangeeta Sengar',
      features: ['Neuro-Otology', 'Sialendoscopy', 'Hearing Care', 'Pediatric ENT']
    },
    {
      slug: 'emergency-care',
      title: '24/7 Emergency Care',
      description: 'Round-the-clock emergency medical services and critical care',
      icon: Heart,
      doctor: 'Emergency Medical Team',
      features: ['Trauma Care', 'Cardiac Emergency', 'Critical Care', '24/7 Available']
    },
    {
      slug: 'cardiology',
      title: 'Cardiology',
      description: 'Comprehensive heart care and cardiovascular health services',
      icon: Heart,
      doctor: 'Cardiology Team',
      features: ['ECG', 'Echo', 'Cardiac Monitoring', 'Heart Health']
    },
    {
      slug: 'internal-medicine',
      title: 'Internal Medicine',
      description: 'General internal medicine and comprehensive health management',
      icon: Stethoscope,
      doctor: 'Internal Medicine Team',
      features: ['General Medicine', 'Health Screening', 'Chronic Care', 'Prevention']
    }
  ]

  // Filter out current service and get 3 related services
  const relatedServices = allServices
    .filter(service => service.slug !== currentService)
    .slice(0, 3)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Related <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our other specialized medical services that complement your healthcare needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {relatedServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up">
              <div className="flex items-center mb-4">
                <div className="bg-medical-100 p-3 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-medical-600" />
                </div>
                {service.slug === 'emergency-care' && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-medical-600 font-medium text-sm mb-4">{service.doctor}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* All Services CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We offer a complete range of medical specialties and services to meet all your healthcare needs under one roof.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-600 mb-2">15+</div>
                <p className="text-gray-600">Medical Specialties</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-600 mb-2">24/7</div>
                <p className="text-gray-600">Emergency Care</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-600 mb-2">100%</div>
                <p className="text-gray-600">Patient Focused</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View All Services
              </Link>
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-8 rounded-lg border-2 border-medical-600 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Emergency Services Highlight */}
        <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">24/7 Emergency Services</h3>
          <p className="text-red-100 text-lg mb-6">
            Medical emergencies don't wait. Our emergency department is always ready to provide 
            immediate, life-saving care when you need it most.
          </p>
          <a 
            href="tel:+919839800199"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center"
          >
            Emergency: +91 98398 00199
          </a>
        </div>
      </div>
    </section>
  )
}

export default RelatedServicesSection