'use client'

import Link from 'next/link'
import { Activity, Stethoscope, Award, ArrowRight } from 'lucide-react'

const SpecializedServicesSection = () => {
  const specializedServices = [
    {
      icon: Activity,
      title: "Advanced Endoscopy",
      specialist: "Dr. Vikas Sengar",
      description: "State-of-the-art endoscopic procedures for accurate diagnosis and treatment of gastrointestinal conditions.",
      procedures: [
        "Upper GI Endoscopy",
        "Colonoscopy with Polypectomy",
        "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
        "Cholangioscopy"
      ],
      benefits: [
        "Minimally invasive procedures",
        "Accurate diagnosis",
        "Quick recovery time",
        "Expert interpretation"
      ]
    },
    {
      icon: Stethoscope,
      title: "Neuro-Otology",
      specialist: "Dr. Sangeeta Sengar",
      description: "Specialized care for inner ear disorders, balance problems, and hearing-related neurological conditions.",
      procedures: [
        "Balance Disorder Assessment",
        "Hearing Loss Evaluation",
        "Vestibular Rehabilitation",
        "Tinnitus Management"
      ],
      benefits: [
        "Advanced diagnostic testing",
        "Specialized treatment protocols",
        "Comprehensive care approach",
        "Long-term management plans"
      ]
    },
    {
      icon: Award,
      title: "Minimally Invasive Surgery",
      specialist: "Surgical Team",
      description: "Advanced surgical techniques that minimize trauma, reduce recovery time, and improve patient outcomes.",
      procedures: [
        "Laparoscopic Surgery",
        "Endoscopic Procedures",
        "Sialendoscopy",
        "Arthroscopic Procedures"
      ],
      benefits: [
        "Smaller incisions",
        "Reduced post-operative pain",
        "Faster recovery",
        "Minimal scarring"
      ]
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gradient">Specialized</span> Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced medical procedures performed by our expert specialists using 
            cutting-edge technology and proven techniques.
          </p>
        </div>

        <div className="space-y-12">
          {specializedServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-slide-up">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Service Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-medical-100 p-4 rounded-xl flex-shrink-0">
                      <service.icon className="w-8 h-8 text-medical-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-medical-600 font-semibold">{service.specialist}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Procedures */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Available Procedures</h4>
                      <ul className="space-y-3">
                        {service.procedures.map((procedure, procIndex) => (
                          <li key={procIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{procedure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-medical-50 to-accent-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-4">Get Specialized Care</h4>
                  <p className="text-gray-600 mb-6 text-sm">
                    Consult with our specialists to determine if these advanced procedures 
                    are right for your condition.
                  </p>
                  
                  <div className="space-y-3">
                    <Link 
                      href="/contact"
                      className="w-full bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-center block text-sm"
                    >
                      Schedule Consultation
                    </Link>
                    <a 
                      href="tel:+919839800199"
                      className="w-full bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-4 rounded-lg border-2 border-medical-600 transition-colors duration-300 text-center block text-sm"
                    >
                      Call for Details
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                      Advanced procedures require specialist evaluation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Section */}
        <div className="mt-16 bg-medical-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advanced Medical Technology
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our specialized services are supported by state-of-the-art equipment and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Latest Equipment</h4>
              <p className="text-blue-100 text-sm">
                State-of-the-art medical devices and diagnostic equipment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Expert Training</h4>
              <p className="text-blue-100 text-sm">
                Specialists trained in the latest techniques and procedures
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Proven Results</h4>
              <p className="text-blue-100 text-sm">
                Successful outcomes with high patient satisfaction rates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecializedServicesSection