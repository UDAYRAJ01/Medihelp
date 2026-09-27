'use client'

import { Target, Eye, Heart, Lightbulb, Users } from 'lucide-react'

const MissionVisionSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Mission & Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by our commitment to excellence, we strive to transform healthcare delivery 
            and improve lives in our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-medical-100 p-4 rounded-xl mr-4">
                <Target className="w-8 h-8 text-medical-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To deliver world-class healthcare with compassion, innovation, and patient-centric values. 
              We are committed to improving lives every day through excellence in medical care, 
              advanced technology, and personalized treatment approaches.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Provide accessible, high-quality healthcare to all patients</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Foster a culture of continuous learning and improvement</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Maintain the highest standards of clinical excellence</p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="bg-accent-100 p-4 rounded-xl mr-4">
                <Eye className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To be the leading healthcare institution in Northern India, recognized for our clinical 
              excellence, innovative treatments, and compassionate care. We envision a future where 
              every patient receives personalized, world-class medical treatment.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Become the preferred choice for specialized medical care</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Lead healthcare innovation in the region</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Set new benchmarks in patient satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-medical-600 rounded-2xl p-8 md:p-12 text-white animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Core Principles</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              These fundamental principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Compassion</h4>
              <p className="text-blue-100 text-sm">
                Every patient is treated with empathy, respect, and understanding
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Excellence</h4>
              <p className="text-blue-100 text-sm">
                We maintain the highest standards in all aspects of healthcare delivery
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Innovation</h4>
              <p className="text-blue-100 text-sm">
                Continuously adopting latest medical technologies and treatment methods
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">Integrity</h4>
              <p className="text-blue-100 text-sm">
                Honest, transparent, and ethical practices in all our interactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection