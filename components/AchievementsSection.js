'use client'

import { Award, Users, Heart, Star, Trophy, Certificate } from 'lucide-react'

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "1000+",
      title: "Patients Treated",
      description: "Successfully treated over 1000 patients with excellence and care"
    },
    {
      icon: Star,
      number: "98%",
      title: "Patient Satisfaction",
      description: "Consistently high patient satisfaction rates across all departments"
    },
    {
      icon: Award,
      number: "15+",
      title: "Medical Specialties",
      description: "Comprehensive healthcare services across multiple medical fields"
    },
    {
      icon: Heart,
      number: "24/7",
      title: "Emergency Services",
      description: "Round-the-clock emergency care with immediate response"
    },
    {
      icon: Certificate,
      number: "5+",
      title: "Years of Service",
      description: "Half a decade of dedicated healthcare service to the community"
    },
    {
      icon: Trophy,
      number: "100%",
      title: "Commitment",
      description: "Complete dedication to patient care and medical excellence"
    }
  ]

  const recognitions = [
    {
      title: "Trusted Healthcare Provider",
      description: "Recognized as one of Kanpur's most trusted healthcare institutions",
      year: "2023"
    },
    {
      title: "Excellence in Gastroenterology",
      description: "Acknowledged for advanced endoscopic procedures and digestive care",
      year: "2023"
    },
    {
      title: "Patient Safety Standards",
      description: "Maintained highest standards of patient safety and care protocols",
      year: "2024"
    },
    {
      title: "Community Health Impact",
      description: "Significant contribution to improving community health outcomes",
      year: "2024"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since our establishment in 2019, we have achieved significant milestones in 
            healthcare delivery and patient satisfaction.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((d, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover animate-slide-up">
              <div className="bg-medical-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <d.icon className="w-8 h-8 text-medical-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-medical-600 mb-2">
                {d.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{d.title}</h3>
              <p className="text-gray-600">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Recognition Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Recognition & Milestones
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Key recognitions and milestones that mark our journey of excellence in healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="border-l-4 border-medical-500 pl-6">
                <div className="flex items-center mb-2">
                  <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    {recognition.year}
                  </span>
                  <Award className="w-5 h-5 text-medical-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{recognition.title}</h4>
                <p className="text-gray-600">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Indicators */}
        <div className="mt-16 bg-medical-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Quality Indicators</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Key metrics that demonstrate our commitment to quality healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">Zero</div>
              <p className="text-blue-100">Hospital-acquired infections</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <p className="text-blue-100">Patient safety compliance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">95%</div>
              <p className="text-blue-100">On-time appointment rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">24hrs</div>
              <p className="text-blue-100">Average response time</p>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Looking Ahead</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            As we continue to grow, we remain committed to expanding our services, 
            enhancing patient care, and contributing to the health and well-being of our community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-medical-50 to-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Service Expansion</h4>
              <p className="text-gray-600 text-sm">
                Adding more specialties and advanced treatments to serve more patients
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Technology Integration</h4>
              <p className="text-gray-600 text-sm">
                Implementing cutting-edge medical technologies for better outcomes
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2">Community Outreach</h4>
              <p className="text-gray-600 text-sm">
                Expanding health education and preventive care programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection