'use client'

import { Award, Users, Heart, Shield } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and personalized attention."
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Advanced medical technology and experienced specialists ensure the highest quality care."
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Our approach revolves around patient comfort, safety, and satisfaction."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Maintaining the highest standards of safety and earning patient trust through quality care."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Medi Help Hospital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2019, we have rapidly emerged as one of the most trusted healthcare institutions in Kanpur, Uttar Pradesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Committed to Excellence in Healthcare
            </h3>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                At Medi Help Hospital, we combine advanced medical technology, modern infrastructure, 
                and experienced specialists to provide a complete spectrum of healthcare services.
              </p>
              <p>
                From preventive care to complex surgeries, our hospital stands as a symbol of trust, 
                care, and clinical excellence. Our mission is to deliver world-class healthcare with 
                compassion, innovation, and patient-centric values.
              </p>
              <p>
                We are dedicated to improving lives every day through our commitment to excellence 
                and our focus on patient safety and satisfaction.
              </p>
            </div>
          </div>

          {/* Stats/Image Placeholder */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Our Foundation</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-medical-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Established 2019</h5>
                    <p className="text-gray-600">Founded by leading medical specialists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-medical-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Multi-Specialty Care</h5>
                    <p className="text-gray-600">Complete healthcare under one roof</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-medical-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Advanced Technology</h5>
                    <p className="text-gray-600">State-of-the-art medical equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg card-hover animate-slide-up">
              <div className="bg-medical-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-medical-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection