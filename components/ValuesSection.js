'use client'

import { Shield, Users, Award, Heart, Clock, Zap } from 'lucide-react'

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every decision we make revolves around the best interests of our patients. We listen, understand, and provide personalized care that addresses individual needs.",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Patient safety is our top priority. We follow strict protocols, maintain hygiene standards, and ensure a safe environment for treatment and recovery.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "We strive for excellence in every aspect of medical care, from diagnosis to treatment, ensuring the highest quality outcomes for our patients.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Our multidisciplinary team works together, sharing expertise and knowledge to provide comprehensive care and better patient outcomes.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "We embrace new technologies, treatment methods, and best practices to stay at the forefront of medical advancement.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Clock,
      title: "Accessibility",
      description: "Healthcare should be accessible to all. We provide 24/7 emergency services and flexible consultation options including telemedicine.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values define who we are and guide our commitment to providing 
            exceptional healthcare to every patient we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up">
              <div className={`${value.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="mt-16 bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Values in Action
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how our values translate into real-world patient care and hospital operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">24/7 Emergency Care</h4>
              <p className="text-gray-600 text-sm">
                Our commitment to accessibility means we're always here when you need us most, 
                with emergency services available round the clock.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Advanced Technology</h4>
              <p className="text-gray-600 text-sm">
                We invest in the latest medical equipment and technologies to ensure our 
                patients receive the most advanced care available.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Patient Education</h4>
              <p className="text-gray-600 text-sm">
                We believe informed patients make better health decisions. Our team takes 
                time to explain conditions and treatment options clearly.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            "Our values aren't just words on a wall – they're the foundation of every 
            interaction, every treatment, and every moment of care we provide."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-medical-100 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-medical-600" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Dr. Vikas Sengar & Dr. Sangeeta Sengar</p>
              <p className="text-gray-600 text-sm">Founders, Medi Help Hospital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection