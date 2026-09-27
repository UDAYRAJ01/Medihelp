'use client'

import { Calendar, UserCheck, Stethoscope, FileText, Heart, Phone } from 'lucide-react'

const ServiceProcessSection = () => {
  const processSteps = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule your consultation online or by calling our helpline",
      duration: "5 minutes",
      details: [
        "Choose your preferred doctor",
        "Select convenient time slot",
        "Provide basic information",
        "Receive confirmation"
      ]
    },
    {
      icon: UserCheck,
      title: "Registration & Check-in",
      description: "Complete registration and provide necessary documents",
      duration: "10 minutes",
      details: [
        "Verify identity documents",
        "Complete medical forms",
        "Insurance verification",
        "Payment processing"
      ]
    },
    {
      icon: Stethoscope,
      title: "Medical Consultation",
      description: "Detailed consultation with our specialist doctors",
      duration: "20-30 minutes",
      details: [
        "Medical history review",
        "Physical examination",
        "Symptom discussion",
        "Initial assessment"
      ]
    },
    {
      icon: FileText,
      title: "Diagnostic Tests",
      description: "Recommended tests and diagnostic procedures if needed",
      duration: "30-60 minutes",
      details: [
        "Laboratory tests",
        "Imaging studies",
        "Specialized procedures",
        "Report generation"
      ]
    },
    {
      icon: Heart,
      title: "Treatment Plan",
      description: "Personalized treatment plan based on diagnosis",
      duration: "15 minutes",
      details: [
        "Diagnosis explanation",
        "Treatment options",
        "Medication prescription",
        "Follow-up planning"
      ]
    },
    {
      icon: Phone,
      title: "Follow-up Care",
      description: "Ongoing monitoring and support for your recovery",
      duration: "Ongoing",
      details: [
        "Regular check-ups",
        "Progress monitoring",
        "Medication adjustments",
        "24/7 support"
      ]
    }
  ]

  const serviceTypes = [
    {
      type: "Emergency Care",
      process: "Immediate triage → Stabilization → Treatment → Monitoring",
      timeframe: "Minutes to hours"
    },
    {
      type: "Routine Consultation",
      process: "Appointment → Consultation → Tests → Treatment → Follow-up",
      timeframe: "1-2 hours"
    },
    {
      type: "Specialized Procedure",
      process: "Pre-assessment → Procedure → Recovery → Discharge → Follow-up",
      timeframe: "Half day to full day"
    },
    {
      type: "Preventive Care",
      process: "Health screening → Results review → Recommendations → Planning",
      timeframe: "1-3 hours"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Service Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure you receive the best possible care 
            at every step of your healthcare journey.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover animate-slide-up">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-medical-100 p-3 rounded-lg flex-shrink-0">
                    <step.icon className="w-6 h-6 text-medical-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-medical-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Step {index + 1}
                      </span>
                      <span className="text-gray-500 text-xs">{step.duration}</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{step.description}</p>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">What happens:</h5>
                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-medical-500 rounded-full mr-2 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Types */}
        <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Different Service Pathways
            </h3>
            <p className="text-gray-600 text-lg">
              Our process adapts to different types of medical services and patient needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceTypes.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">{service.type}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.process}</p>
                <div className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                  {service.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every step of our process is designed with quality, safety, and patient satisfaction in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Patient Safety</h4>
              <p className="text-gray-600 text-sm">
                Strict safety protocols and hygiene standards at every step
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Compassionate Care</h4>
              <p className="text-gray-600 text-sm">
                Empathetic and respectful treatment throughout your visit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Clinical Excellence</h4>
              <p className="text-gray-600 text-sm">
                Evidence-based medicine and continuous quality improvement
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-6">
              Have questions about our process? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919839800199"
                className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Call +91 98398 00199
              </a>
              <a 
                href="#contact"
                className="bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-6 rounded-lg border-2 border-medical-600 transition-colors"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcessSection