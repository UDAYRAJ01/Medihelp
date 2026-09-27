'use client'

import { Clock, Phone, Heart, Zap, Ambulance, Shield } from 'lucide-react'

const EmergencyServicesSection = () => {
  const emergencyServices = [
    {
      icon: Heart,
      title: "Cardiac Emergency",
      description: "Immediate response for heart attacks, chest pain, and cardiac emergencies with advanced life support.",
      responseTime: "< 5 minutes"
    },
    {
      icon: Zap,
      title: "Trauma Care",
      description: "Complete trauma management for accidents, injuries, and emergency surgical interventions.",
      responseTime: "< 3 minutes"
    },
    {
      icon: Ambulance,
      title: "Emergency Transport",
      description: "24/7 ambulance service with trained paramedics and life support equipment.",
      responseTime: "< 15 minutes"
    },
    {
      icon: Shield,
      title: "Critical Care",
      description: "Intensive care support for critically ill patients with specialized monitoring.",
      responseTime: "Immediate"
    }
  ]

  const emergencySteps = [
    {
      step: "1",
      title: "Call Emergency",
      description: "Dial +91 98398 00199 for immediate emergency response"
    },
    {
      step: "2",
      title: "Initial Assessment",
      description: "Our team provides immediate medical assessment and stabilization"
    },
    {
      step: "3",
      title: "Advanced Care",
      description: "Comprehensive treatment with specialist consultation if needed"
    },
    {
      step: "4",
      title: "Follow-up",
      description: "Continued monitoring and care coordination for recovery"
    }
  ]

  return (
    <section className="section-padding bg-red-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            EMERGENCY SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            24/7 <span className="text-red-600">Emergency Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When every second counts, our emergency team is ready to provide immediate, 
            life-saving medical care around the clock.
          </p>
        </div>

        {/* Emergency Hotline */}
        <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <Phone className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Emergency Hotline</h3>
          <a 
            href="tel:+919839800199" 
            className="text-5xl md:text-6xl font-bold hover:text-yellow-300 transition-colors"
          >
            +91 98398 00199
          </a>
          <p className="text-red-100 text-lg mt-4">Available 24/7 • Immediate Response</p>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {emergencyServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover animate-slide-up border-l-4 border-red-500">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
              <div className="bg-red-50 px-3 py-1 rounded-full">
                <span className="text-red-700 text-xs font-semibold">Response: {service.responseTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Emergency Response Process
            </h3>
            <p className="text-gray-600 text-lg">
              Our systematic approach ensures rapid response and optimal care in emergency situations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When to Call Emergency */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 text-red-600 mr-2" />
              Call Immediately For:
            </h4>
            <ul className="space-y-2">
              {[
                "Chest pain or heart attack symptoms",
                "Severe breathing difficulties",
                "Loss of consciousness",
                "Severe bleeding or trauma",
                "Stroke symptoms",
                "Severe allergic reactions",
                "Poisoning or overdose",
                "Severe burns"
              ].map((symptom, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Heart className="w-5 h-5 text-red-600 mr-2" />
              What We Provide:
            </h4>
            <ul className="space-y-2">
              {[
                "Advanced life support systems",
                "Emergency surgery capabilities",
                "24/7 specialist consultations",
                "Critical care monitoring",
                "Emergency medications",
                "Trauma care expertise",
                "Cardiac emergency care",
                "Immediate stabilization"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencyServicesSection