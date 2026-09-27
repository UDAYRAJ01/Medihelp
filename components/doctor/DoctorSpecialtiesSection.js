'use client'

import { Activity, Stethoscope, Heart, Eye, Brain, Bone } from 'lucide-react'

const DoctorSpecialtiesSection = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Gastroenterology",
      doctor: "Dr. Vikas Sengar",
      description: "Expert diagnosis and treatment of digestive system disorders including advanced endoscopic procedures.",
      procedures: ["Upper Endoscopy", "Colonoscopy", "ERCP", "Liver Biopsy"],
      conditions: ["GERD", "IBD", "Liver Disease", "Pancreatic Disorders"]
    },
    {
      icon: Stethoscope,
      title: "ENT (Otolaryngology)",
      doctor: "Dr. Sangeeta Sengar",
      description: "Comprehensive ear, nose, and throat care including specialized neuro-otology treatments.",
      procedures: ["Sialendoscopy", "Tympanoplasty", "Sinus Surgery", "Hearing Tests"],
      conditions: ["Hearing Loss", "Sinus Problems", "Throat Disorders", "Balance Issues"]
    }
  ]

  const associatedSpecialties = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart health assessment and cardiac care coordination"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Eye care services and vision health management"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Neurological condition assessment and referral services"
    },
    {
      icon: Bone,
      title: "Orthopaedics",
      description: "Bone and joint health evaluation and treatment"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Medical <span className="text-gradient">Specialties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our doctors specialize in various medical fields to provide comprehensive healthcare services.
          </p>
        </div>

        {/* Primary Specialties */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-medical-100 p-3 rounded-xl">
                  <specialty.icon className="w-8 h-8 text-medical-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                  <p className="text-medical-600 font-semibold">{specialty.doctor}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{specialty.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Procedures */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Key Procedures</h4>
                  <ul className="space-y-2">
                    {specialty.procedures.map((procedure, procIndex) => (
                      <li key={procIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-medical-500 rounded-full mr-3"></div>
                        {procedure}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conditions */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Conditions Treated</h4>
                  <ul className="space-y-2">
                    {specialty.conditions.map((condition, condIndex) => (
                      <li key={condIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-medical-600 hover:bg-medical-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Book Consultation
                  </button>
                  <button className="flex-1 bg-white hover:bg-gray-50 text-medical-600 font-semibold py-2 px-4 rounded-lg border-2 border-medical-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Associated Specialties */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Associated Medical Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Additional medical specialties available through our network of consulting physicians and specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {associatedSpecialties.map((specialty, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-gray-50 card-hover">
                <div className="bg-medical-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <specialty.icon className="w-6 h-6 text-medical-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{specialty.title}</h4>
                <p className="text-gray-600 text-sm">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Need specialized care? We can help coordinate with the right specialists.
            </p>
            <button className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Contact for Referrals
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorSpecialtiesSection