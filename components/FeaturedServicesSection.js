'use client'

import Link from 'next/link'
import { Activity, Stethoscope, Clock, Heart, ArrowRight } from 'lucide-react'

const FeaturedServicesSection = () => {
  const featuredServices = [
    {
      icon: Activity,
      title: "Gastroenterology",
      description: "Advanced endoscopy, ERCP, and comprehensive digestive health care with state-of-the-art equipment.",
      features: ["Advanced Endoscopy", "ERCP Procedures", "Liver Care", "Digestive Disorders"],
      link: "/services/gastroenterology",
      featured: true
    },
    {
      icon: Stethoscope,
      title: "ENT Services",
      description: "Complete ear, nose, and throat care including neuro-otology and minimally invasive treatments.",
      features: ["Neuro-Otology", "Sialendoscopy", "Hearing Care", "Pediatric ENT"],
      link: "/services/ent",
      featured: true
    },
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with immediate response for critical conditions.",
      features: ["Trauma Care", "Cardiac Emergencies", "Critical Care", "Ambulance Service"],
      link: "/services/emergency-care",
      featured: true
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-medical-600 font-semibold text-sm uppercase tracking-wider">Our Medical Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive <span className="text-gradient">Healthcare Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From specialized treatments to emergency care, we provide complete medical services under one roof.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.filter(service => service.featured).map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-medical-500">
              <div className="bg-medical-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-medical-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-medical-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href={service.link}
                className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.filter(service => !service.featured).map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md card-hover animate-slide-up">
              <div className="bg-medical-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-medical-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Link 
                href={service.link}
                className="text-medical-600 hover:text-medical-700 font-medium text-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* All Services CTA */}
        <div className="text-center bg-medical-600 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            15+ Medical Specialties Available
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            From routine check-ups to complex procedures, we offer comprehensive medical care 
            across multiple specialties with experienced doctors and modern equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="btn-primary bg-white text-medical-600 hover:bg-gray-100"
            >
              View All Services
            </Link>
            <Link 
              href="/contact"
              className="btn-secondary border-white   hover:bg-white hover:text-medical-600"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServicesSection