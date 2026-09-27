'use client'

import { 
  CheckCircle, 
  Award, 
  Users, 
  Zap, 
  Heart, 
  Clock, 
  Phone,
  Star
} from 'lucide-react'

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Users,
      title: "Experienced & Qualified Doctors",
      description: "Our team comprises highly trained specialists with extensive experience and advanced qualifications from premier medical institutions."
    },
    {
      icon: Heart,
      title: "Comprehensive Multi-Specialty Care",
      description: "Complete healthcare services under one roof, from preventive care to complex surgeries across 15+ medical specialties."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "State-of-the-art medical equipment and advanced procedures ensuring precise diagnosis and effective treatment."
    },
    {
      icon: Award,
      title: "Patient-Centered Approach",
      description: "Compassionate, personalized care that puts patient comfort, safety, and satisfaction at the heart of everything we do."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Services",
      description: "Round-the-clock emergency care with immediate response for trauma, cardiac, and critical medical situations."
    },
    {
      icon: Phone,
      title: "Telemedicine & Online Consultation",
      description: "Convenient access to healthcare through digital consultations, making medical care accessible from anywhere."
    }
  ]

  const achievements = [
    { number: "5+", label: "Years of Excellence", icon: Star },
    { number: "15+", label: "Medical Specialties", icon: Heart },
    { number: "24/7", label: "Emergency Care", icon: Clock },
    { number: "100%", label: "Patient Focused", icon: Users }
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-medical-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-gradient">Medi Help Hospital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering exceptional healthcare through our experienced team, 
            advanced technology, and patient-first philosophy.
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-3 rounded-lg flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-medical-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  <div className="mt-3">
                    <CheckCircle className="w-5 h-5 text-green-500 inline" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that reflect our dedication to providing outstanding healthcare services to our community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-medical-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-medical-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-medical-600 mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Trusted Healthcare</h4>
            <p className="text-gray-600">Recognized for excellence in patient care and medical outcomes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Compassionate Care</h4>
            <p className="text-gray-600">Every patient treated with empathy, respect, and personalized attention</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Advanced Technology</h4>
            <p className="text-gray-600">Latest medical equipment and innovative treatment approaches</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-medical-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience Excellence in Healthcare
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have trusted us with their health. 
              Schedule your appointment today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary bg-white text-medical-600 hover:bg-gray-100">
                Book Appointment Today
              </a>
              <a href="tel:+919839800199" className="btn-secondary border-white hover:bg-white hover:text-medical-600">
                Call +91 98398 00199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection